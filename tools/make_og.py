#!/usr/bin/env python3
"""生成三张 1200x630 的 og:image（社交分享卡）。

为什么单独做一张，而不是直接拿 hero 图当 og:image：
  hero 是 1000x666（1.50:1），微信 / Twitter / LinkedIn 按 1.91:1 裁，
  会切掉两侧或上下留白。这里按标准比例重新构图，文字压在图上方。

三张：og-gate.jpg（语言入口）/ og-zh.jpg（中文版）/ og-en.jpg（English edition）

用法：python3 tools/make_og.py
输出：assets/img/og-{gate,zh,en}.jpg（1200x630，JPEG，单张 < 300KB）
"""
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "assets", "img")
W, H = 1200, 630

CREAM = (247, 242, 232)
DIM = (169, 162, 148)
RED = (200, 16, 46)
AMBER = (232, 163, 61)

# 中文只能用 Arial Unicode（macOS 上不一定有 PingFang.ttc），没有 Bold，
# 靠 stroke_width 加粗；英文用 Georgia（和站点 en 版标题一致）。
F_CJK = "/Library/Fonts/Arial Unicode.ttf"
F_SERIF = "/System/Library/Fonts/Supplemental/Georgia.ttf"
F_SERIF_BD = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
F_SANS_BD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"


def font(path, size):
    return ImageFont.truetype(path, size)


def cover(path, w, h, focus=(0.5, 0.45)):
    """等比裁切填满（object-fit: cover）。"""
    im = Image.open(path).convert("RGB")
    sw, sh = im.size
    scale = max(w / sw, h / sh)
    im = im.resize((round(sw * scale), round(sh * scale)), Image.LANCZOS)
    sw, sh = im.size
    x = int(max(0, min(sw - w, sw * focus[0] - w / 2)))
    y = int(max(0, min(sh - h, sh * focus[1] - h / 2)))
    return im.crop((x, y, x + w, y + h))


def grad(size, stops, direction="h"):
    """线性渐变蒙版层（RGBA）。stops = [(位置0-1, (r,g,b,a)), ...]"""
    w, h = size
    strip = Image.new("RGBA", (w if direction == "h" else h, 1))
    px = strip.load()
    n = strip.size[0] - 1 or 1
    for i in range(strip.size[0]):
        t = i / n
        for j in range(len(stops) - 1):
            p0, c0 = stops[j]
            p1, c1 = stops[j + 1]
            if p0 <= t <= p1:
                k = 0 if p1 == p0 else (t - p0) / (p1 - p0)
                px[i, 0] = tuple(round(c0[m] + (c1[m] - c0[m]) * k) for m in range(4))
                break
        else:
            px[i, 0] = stops[-1][1]
    if direction == "h":
        return strip.resize((w, h))
    return strip.resize((w, h)) if False else strip.rotate(90, expand=True).resize((w, h))


def scrim(base, stops, direction="h"):
    layer = grad((W, H), stops, direction)
    return Image.alpha_composite(base.convert("RGBA"), layer)


def spaced(draw, xy, text, f, fill, tracking=0.0, stroke=0):
    """字间距：逐字画，模拟 CSS letter-spacing。"""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=f, fill=fill, stroke_width=stroke, stroke_fill=fill)
        x += draw.textlength(ch, font=f) + tracking
    return x


def save(im, name):
    out = os.path.join(IMG, name)
    im.convert("RGB").save(out, "JPEG", quality=88, optimize=True, progressive=True)
    print("  ✓ %-14s %dx%d  %d KB" % (name, W, H, os.path.getsize(out) // 1024))


# ---------- 语言入口 ----------
def build_gate():
    """左右各半、各自居中的双卡。

    ⚠️ 两个坑（第一次就是这么翻的）：
      1. 全站居中（1200 宽）的文字会从中间那道缝上穿过去，看着像错版
         —— 所以任何文字都不能居中到整张画布，只能居中到各自的半区。
      2. Latin 字体（Arial Bold）里没有 CJK 字形，「中文版」会画成一排豆腐块
         —— 中文字一律用 Arial Unicode。
    """
    half = W // 2
    zh = cover(os.path.join(IMG, "hero-zh.jpg"), half, H, focus=(0.5, 0.4))
    en = cover(os.path.join(IMG, "hero-en.jpg"), half, H, focus=(0.5, 0.4))
    zh = Image.alpha_composite(zh.convert("RGBA"), grad((half, H), [
        (0, (70, 14, 16, 238)), (0.72, (128, 22, 26, 216)), (1, (150, 26, 30, 200))]))
    en = Image.alpha_composite(en.convert("RGBA"), grad((half, H), [
        (0, (6, 9, 14, 244)), (0.72, (10, 24, 32, 218)), (1, (14, 32, 42, 196))]))

    im = Image.new("RGBA", (W, H))
    im.paste(zh, (0, 0))
    im.paste(en, (half, 0))
    d = ImageDraw.Draw(im)
    d.line([(half, 0), (half, H)], fill=(247, 242, 232, 46), width=2)

    def ctr(cx, y, text, f, fill, tracking=0.0, stroke=0):
        tw = sum(d.textlength(c, font=f) for c in text) + tracking * (len(text) - 1)
        spaced(d, (cx - tw / 2, y), text, f, fill, tracking, stroke)

    # 左：中文版
    ctr(half / 2, 148, "中文版", font(F_CJK, 22), (240, 222, 216, 235), 7.0)
    ctr(half / 2, 214, "欢迎来上海", font(F_CJK, 64), CREAM, 0, 2)
    ctr(half / 2, 342, "58 个精选景点", font(F_CJK, 22), (224, 200, 194, 225), 1.5)

    # 右：English edition
    ctr(half * 1.5, 148, "ENGLISH EDITION", font(F_SANS_BD, 20), AMBER, 6.2)
    f_en = font(F_SERIF, 44)
    tw = d.textlength("Welcome to Shanghai", font=f_en)
    d.text((half * 1.5 - tw / 2, 232), "Welcome to Shanghai", font=f_en, fill=CREAM)
    f_sub = font(F_SERIF, 24)
    tw = d.textlength("58 handpicked sights", font=f_sub)
    d.text((half * 1.5 - tw / 2, 344), "58 handpicked sights", font=f_sub, fill=(216, 205, 190))

    save(im, "og-gate.jpg")


# ---------- 中文版 ----------
def build_zh():
    im = cover(os.path.join(IMG, "hero-zh.jpg"), W, H, focus=(0.5, 0.45))
    im = scrim(im, [(0, (61, 12, 14, 246)), (0.55, (110, 18, 22, 205)), (1, (20, 6, 8, 130))])
    im = Image.alpha_composite(im, grad((W, H), [(0, (0, 0, 0, 0)), (1, (8, 4, 5, 170))], "h"))
    im = Image.alpha_composite(im, grad((W, H), [(0, (0, 0, 0, 0)), (1, (8, 4, 5, 160))]))
    d = ImageDraw.Draw(im)

    spaced(d, (80, 78), "SHANGHAI TRAVEL GUIDE", font(F_SANS_BD, 20), (240, 214, 210, 230), 5.2)
    f_big = font(F_CJK, 84)
    d.text((78, 176), "欢迎来上海", font=f_big, fill=CREAM, stroke_width=2, stroke_fill=CREAM)
    d.line([(80, 316), (80 + 96, 316)], fill=RED + (255,), width=5)
    d.text((80, 344), "实用旅行指南 · 58 个精选景点", font=font(F_CJK, 34), fill=(238, 226, 212))
    d.text((80, 400), "门票多少、玩多久、哪天闭馆，一屏查完", font=font(F_CJK, 26), fill=(201, 188, 176))
    d.text((80, H - 74), "kingsir.work/travel-shanghai", font=font(F_SANS_BD, 20), fill=DIM)
    save(im, "og-zh.jpg")


# ---------- English edition ----------
def build_en():
    im = cover(os.path.join(IMG, "hero-en.jpg"), W, H, focus=(0.5, 0.45))
    im = scrim(im, [(0, (6, 9, 14, 248)), (0.58, (10, 20, 28, 210)), (1, (8, 12, 18, 130))])
    im = Image.alpha_composite(im, grad((W, H), [(0, (0, 0, 0, 0)), (1, (4, 7, 11, 175))]))
    d = ImageDraw.Draw(im)

    spaced(d, (80, 78), "SHANGHAI TRAVEL GUIDE", font(F_SANS_BD, 20), (232, 163, 61), 5.2)
    d.text((76, 178), "Welcome to", font=F_SERIF and font(F_SERIF, 56), fill=(214, 208, 198))
    d.text((76, 246), "Shanghai", font=font(F_SERIF, 96), fill=CREAM)
    d.line([(80, 384), (80 + 96, 384)], fill=AMBER + (255,), width=4)
    d.text((80, 410), "58 handpicked sights, one screen each", font=font(F_SERIF, 30), fill=(224, 214, 200))
    d.text((80, 452), "Admission, time needed, closed days - plus travel essentials",
           font=font(F_SANS_BD, 20), fill=(176, 168, 155))
    d.text((80, H - 74), "kingsir.work/travel-shanghai", font=font(F_SANS_BD, 20), fill=DIM)
    save(im, "og-en.jpg")


if __name__ == "__main__":
    print("生成分享图：")
    build_gate()
    build_zh()
    build_en()
