/* Shanghai Travel - Editorial content (bilingual) */
window.TRAVEL_CONTENT = (function () {
  'use strict';

  /* Global closure alert - shown prominently on both versions */
  var closureAlert = {
    zh: {
      title: '闭馆日提醒 · 出发前务必确认',
      text: '上海绝大多数博物馆、美术馆【周一闭馆】；上海博物馆东馆与上海自然博物馆是【周二闭馆】；上海温室花园、豫园【周一闭园】。法定节假日通常照常开放，但临时调整很常见。',
      action: '建议：把计划中的室内场馆分散安排，并提前 1–2 天查看官方公众号 / 小程序公告。'
    },
    en: {
      title: 'Check the closing day before you book',
      text: 'Most museums and art galleries in Shanghai close on MONDAYS. Shanghai Museum East and the Natural History Museum close on TUESDAYS. The Greenhouse Garden and Yu Garden close on MONDAYS. Public holidays are usually exempt - but temporary changes are common.',
      action: 'Tip: spread indoor venues across different days and check the official WeChat account or mini-programme 1–2 days before.'
    }
  };

  var notes = {
    zh: [
      {
        icon: '🚇', title: '交通出行',
        items: [
          '地铁是首选：20 条线路覆盖几乎所有主要景点，单程 ¥3–7，运行约 05:30–22:30',
          '刷码进站：用「Metro 大都会」App，或支付宝 / 微信乘车码，不必买实体票',
          '机场：浦东 PVG（磁悬浮 8 分钟到龙阳路 ¥50，或地铁 2 号线）；虹桥 SHA（地铁 2/10 号线直达）',
          '火车站：虹桥站（高铁为主）、上海站、上海南站，三者地铁均可直达',
          '打车优先网约车；外滩、南京路、老城厢一带极不建议自驾，停车难且贵'
        ]
      },
      {
        icon: '🎫', title: '门票与预约',
        items: [
          '上海天文馆、自然博物馆、科技馆需提前 7 天在官方小程序实名抢票，天文馆最紧俏',
          '上海博物馆人民广场馆需预约；东馆基本陈列免预约，刷身份证原件入馆',
          '迪士尼必须提前购票并预约入园日期，当日基本无票',
          '温室花园、千古情建议线上提前购票，价格通常优于现场',
          '只走官方渠道，拒绝黄牛与二手平台的低价票'
        ]
      },
      {
        icon: '📅', title: '闭馆日（重点）',
        items: [
          '周一闭馆：上博人民广场馆、天文馆、科技馆、历史博物馆、城市规划馆、世博会博物馆、航海博物馆、四行仓库、玻璃博物馆、PSA、中华艺术宫、浦东美术馆、西岸各馆',
          '周二闭馆：上海博物馆东馆、上海自然博物馆',
          '周一闭园：上海温室花园、豫园园林',
          '外滩、南京路、新天地、田子坊、武康路等开放式街区全年无休',
          '法定节假日一般照常开放，出行前请再查一次官方公告'
        ]
      },
      {
        icon: '🌦️', title: '天气与穿搭',
        items: [
          '6 月中–7 月为梅雨季，7–9 月为台风季，出行前务必查看台风预警',
          '夏季 35℃+ 且湿度高，体感闷热；冬季 0–8℃ 湿冷、多数场所无暖气',
          '最舒适：3–5 月与 9–11 月，也是最佳旅行季节',
          '随身带伞（晴雨两用），夏天防晒防蚊，冬天穿防风外套'
        ]
      },
      {
        icon: '💳', title: '支付与网络',
        items: [
          '支付宝 / 微信支付覆盖率极高，现金可用但找零麻烦',
          '地铁、公交、便利店、路边摊基本都能扫码',
          '国际信用卡仅在高端酒店 / 大型商场较可靠，小店铺与出租车多不支持',
          '公共 Wi-Fi（i-Shanghai）需手机号实名认证',
          '中国大陆无小费习惯'
        ]
      },
      {
        icon: '📱', title: '必备 App / 小程序',
        items: [
          '支付宝 / 微信：支付 + 乘车码，缺一不可',
          'Metro 大都会：地铁扫码与线路查询',
          '滴滴出行：打车与接送机',
          '高德地图 / 苹果地图：导航（谷歌地图在国内不可用）',
          '大众点评：找餐厅、看真实评价、取号排队',
          '各景区官方小程序：预约购票、查看当日场次'
        ]
      }
    ],
    en: [
      {
        icon: '🛂', title: 'Visa & Entry',
        items: [
          'China runs a 240-hour (10-day) visa-free transit scheme covering 57 countries, including the US, UK, Canada, Australia, New Zealand, Japan, South Korea and most of the EU',
          'You must hold an onward ticket with a confirmed seat and date to a THIRD country or region within 240 hours',
          'Apply on arrival at Shanghai Pudong (PVG), Hongqiao (SHA) or Shanghai Port - no embassy visit needed, but final approval rests with border officers',
          'The permit allows travel across 24 provincial-level regions, so you can leave Shanghai',
          'Policies change: verify on the National Immigration Administration (en.nia.gov.cn) site before booking'
        ]
      },
      {
        icon: '💳', title: 'Payments',
        items: [
          'China is effectively cashless. Install Alipay or WeChat Pay and link a foreign Visa/Mastercard BEFORE you fly',
          'Still carry ¥200-500 in cash for small vendors, markets and emergencies',
          'International cards work in large hotels and malls, but rarely in taxis, small shops or street stalls',
          'Foreign cards can now be tapped directly on the metro at major stations',
          'Tipping is not expected anywhere'
        ]
      },
      {
        icon: '📶', title: 'Connectivity',
        items: [
          'Google, Google Maps, WhatsApp, Instagram, Facebook, YouTube and X are blocked on mainland networks',
          'Sort an international eSIM, roaming plan or VPN BEFORE you land - do not rely on doing it after arrival',
          'A local SIM from China Mobile / Unicom / Telecom is available at the airport with your passport',
          'Apple Maps and Amap (Gaode) both work well for navigation; download offline maps',
          'Get WeChat set up early - it is how you will contact hotels, guides and new friends'
        ]
      },
      {
        icon: '🚇', title: 'Getting Around',
        items: [
          'The metro is the answer: 20 lines, full English signage and announcements, fares ¥3-7, running roughly 05:30-22:30',
          'Use the Alipay or WeChat transit code - no physical ticket needed',
          'From Pudong Airport: Maglev to Longyang Road in 8 minutes (¥50), or Metro Line 2',
          'From Hongqiao Airport: Metro Line 2 or 10 direct',
          'Use Didi for taxis; do not self-drive in the Old City or the Bund area'
        ]
      },
      {
        icon: '📱', title: 'Apps to Download',
        items: [
          'Alipay and/or WeChat Pay - payment plus transit codes',
          'Metro Man or the official Metro Daduohui app - metro maps and QR entry',
          'Didi - ride hailing and airport transfers',
          'Amap (Gaode) or Apple Maps - navigation that actually works here',
          'Dianping - restaurant discovery, honest reviews and queue tickets',
          'Pleco - offline Chinese dictionary; a few phrases go a long way'
        ]
      },
      {
        icon: '🏛️', title: 'Museum Closures',
        items: [
          'Closed MONDAYS: Shanghai Museum (People`s Square), Astronomy Museum, Science & Technology Museum, History Museum, Urban Planning Centre, World Expo Museum, Maritime Museum, Sihang Warehouse, Glass Museum, PSA, China Art Museum, MAM Pudong, most West Bund venues',
          'Closed TUESDAYS: Shanghai Museum East, Shanghai Natural History Museum',
          'Closed MONDAYS: Shanghai Greenhouse Garden, Yu Garden',
          'Open every day: the Bund, East Nanjing Road, Xintiandi, Tianzifang, Wukang Road and other open streets',
          'Book timed tickets in advance - popular slots go quickly'
        ]
      }
    ]
  };

  /* Scam / trap checklists */
  var warnings = {
    zh: [
      '外滩、南京路有人主动搭讪推荐「快速通道」「内部票」「免费导游」——一律是坑，直接走开',
      '「10 元游外滩」的观光车、游船多为黑车黑船，只认准十六铺、金陵东路、东方明珠等正规码头',
      '游船登船后会推销「VIP 观景位」，加价约 ¥100，普通甲板视野已经足够',
      '城隍庙、豫园周边小吃价格虚高，正餐建议走出景区两条街再吃',
      '出租车不打表、绕路的情况仍有发生，优先使用网约车并注意看路线',
      '网红店排队动辄 1–2 小时，错峰前往或先用小程序线上取号',
      '景区周边「免费送礼品」「扫码抽奖」基本都是套路，不要扫码',
      '黄牛票与二手平台低价票风险高，只走官方渠道购票',
      '节假日、暑假热门景点人流量极大，尽量安排在工作日或上午前往',
      '老城厢、外滩一带路况复杂，不建议自驾，停车难且收费高'
    ],
    en: [
      'Touts near the Bund and East Nanjing Road offering "fast-track entry", "insider tickets" or "free guides" - always a scam; just walk away',
      '"¥10 Bund tour" buses and boats are unlicensed; use only official piers (Shiliupu, East Jinling Road, Oriental Pearl)',
      'Once aboard, crew may hard-sell a "VIP viewing deck" for around ¥100 - the regular deck views are just as good',
      'Snack prices around Yuyuan Bazaar are heavily inflated; walk two blocks out for a proper meal',
      'Some taxis still refuse the meter or take detours - use Didi and watch the route on your phone',
      'Viral restaurants queue one to two hours; go off-peak or take a queue ticket on the mini-programme',
      '"Free gifts" and "scan to win" stalls near sights are almost always a hustle - don`t scan',
      'Discounted resale tickets carry real risk; buy only through official channels',
      'Public holidays and summer break bring enormous crowds - aim for weekday mornings',
      'Don`t self-drive in the Old City or around the Bund - parking is scarce and expensive'
    ]
  };

  /* Sample itineraries */
  var itineraries = {
    zh: [
      {
        name: '经典 3 日', tag: '第一次来上海',
        days: [
          'D1 人民广场（上海博物馆东馆或人民广场馆）→ 南京路步行街 → 外滩日落与夜景',
          'D2 豫园 + 城隍庙 → 新天地 → 田子坊 → 武康路看夕阳',
          'D3 陆家嘴（上海中心 118 层或东方明珠）→ 黄浦江夜游收尾'
        ],
        note: '注意：把两个博物馆分在不同天，避开各自的闭馆日。'
      },
      {
        name: '亲子 5 日', tag: '带娃放电',
        days: [
          'D1 抵达 + 南京路步行街 + 外滩夜景',
          'D2 上海自然博物馆（周二闭馆）→ 静安寺 → 久光商圈',
          'D3 上海迪士尼乐园一日（务必提前预约入园日）',
          'D4 上海天文馆（周一闭馆，临港全天）',
          'D5 上海温室花园 + 双子山 → 返程'
        ],
        note: '天文馆与自然博物馆分别在周一周二闭馆，行程顺序要按你的到达日调整。'
      },
      {
        name: '深度 7 日', tag: '慢下来看上海',
        days: [
          'D1 外滩 + 外白渡桥 + 外滩源漫步',
          'D2 上海博物馆东馆（周二闭馆）全天',
          'D3 豫园 + 城隍庙 → 新天地 → 思南公馆',
          'D4 武康路 + 安福路 + 徐家汇书院（周一闭馆）',
          'D5 西岸美术馆 / 油罐艺术中心 → 浦东美术馆夜场',
          'D6 朱家角古镇（17 号线直达）一日',
          'D7 陆家嘴登塔 → 黄浦江夜游 → 返程'
        ],
        note: '雨天备选：上博东馆、天文馆、温室花园、PSA 都是室内。'
      }
    ],
    en: [
      {
        name: 'The Classic 3 Days', tag: 'First time in Shanghai',
        days: [
          'D1 People`s Square (Shanghai Museum East or People`s Square) -> East Nanjing Road -> Bund at sunset and after dark',
          'D2 Yu Garden + City God Temple -> Xintiandi -> Tianzifang -> Wukang Road for late light',
          'D3 Lujiazui (Shanghai Tower 118F or Oriental Pearl) -> Huangpu River night cruise to close'
        ],
        note: 'Note: place the two museums on different days to dodge their separate closing days.'
      },
      {
        name: 'Family 5 Days', tag: 'Travelling with kids',
        days: [
          'D1 Arrive -> East Nanjing Road -> Bund at night',
          'D2 Shanghai Natural History Museum (closed Tue) -> Jing`an Temple -> Jiuguang shopping',
          'D3 Shanghai Disneyland, full day (reserve your entry date in advance)',
          'D4 Shanghai Astronomy Museum (closed Mon), full day in Lingang',
          'D5 Shanghai Greenhouse Garden + Twin Hills -> depart'
        ],
        note: 'The Astronomy Museum and Natural History Museum close on Monday and Tuesday respectively - sequence them around your arrival day.'
      },
      {
        name: 'Slow Shanghai, 7 Days', tag: 'For the curious',
        days: [
          'D1 The Bund -> Garden Bridge -> Bund Source on foot',
          'D2 Shanghai Museum East, full day (closed Tue)',
          'D3 Yu Garden + City God Temple -> Xintiandi -> Sinan Mansions',
          'D4 Wukang Road -> Anfu Road -> Xujiahui Library (closed Mon)',
          'D5 West Bund museums and the Tanks -> MAM Pudong in the evening',
          'D6 Zhujiajiao Water Town, day trip on Line 17',
          'D7 Lujiazui tower -> night cruise -> depart'
        ],
        note: 'Rainy-day back-ups: Shanghai Museum East, the Astronomy Museum, the Greenhouse Garden and PSA are all indoors.'
      }
    ]
  };

  /* Food */
  var food = {
    zh: [
      { name: '南翔小笼包', desc: '皮薄馅鲜汤汁多。豫园城隍庙的南翔馒头店是百年老字号，一笼约 ¥25–35。' },
      { name: '生煎包', desc: '底脆顶软、汁水丰盈。小杨生煎是连锁名店，四个约 ¥12–15。' },
      { name: '蟹壳黄', desc: '酥脆芝麻烧饼，分甜咸两味，城隍庙周边老店最正宗。' },
      { name: '红烧肉', desc: '本帮菜代表作，浓油赤酱、肥而不腻，几乎每家本帮菜馆都有。' },
      { name: '油爆虾 / 熏鱼', desc: '本帮冷盘双绝，一甜一咸，下酒神器。' },
      { name: '腌笃鲜', desc: '春笋与咸肉慢炖的汤，春季限定，鲜到掉眉毛。' },
      { name: '葱油拌面', desc: '最平民的上海味道，一碗面配一碗汤就是标准早餐。' },
      { name: '梨膏糖 / 五香豆', desc: '老城隍庙特产，适合带回家当伴手礼。' },
      { name: '鲜肉月饼', desc: '秋季限定，现烤出锅最好吃，老字号门口常年排队。' }
    ],
    en: [
      { name: 'Nanxiang Xiaolongbao', desc: 'Thin skin, rich broth. The century-old Nanxiang Steamed Bun Restaurant at Yuyuan - about ¥25-35 a basket.' },
      { name: 'Shengjianbao', desc: 'Pan-fried pork buns: crisp base, soft top, scalding juice inside. Yang`s Fry Dumplings is the reliable chain, ~¥12-15 for four.' },
      { name: 'Xieqiaohuang', desc: 'Sesame-crusted pastry shaped like a crab shell, sweet or savoury. Best at the old shops around City God Temple.' },
      { name: 'Hongshao Rou', desc: 'Shanghai-style braised pork belly - glossy, dark, and rich without being heavy. On every benbang menu.' },
      { name: 'Crispy River Shrimp & Smoked Fish', desc: 'The classic cold-dish pair: one sweet-crisp, one savoury-smoky. Made for a cold beer.' },
      { name: 'Yan Du Xian', desc: 'Spring bamboo shoots and cured pork simmered into a pale, absurdly savoury soup. Spring only.' },
      { name: 'Scallion Oil Noodles', desc: 'The most everyday Shanghai flavour. A bowl of noodles and a bowl of broth is the standard breakfast.' },
      { name: 'Pear Syrup Candy & Spiced Broad Beans', desc: 'Old City God Temple specialities - the easiest souvenirs to carry home.' },
      { name: 'Fresh Pork Mooncake', desc: 'Autumn only. Eat it hot from the oven; queues form outside the historic bakeries.' }
    ]
  };

  /* Practical quick-reference */
  var essentials = {
    zh: {
      numbers: [
        { k: '报警', v: '110' },
        { k: '急救', v: '120' },
        { k: '火警', v: '119' },
        { k: '市民服务热线', v: '12345' },
        { k: '上海地铁服务热线', v: '021-64370000' },
        { k: '上海旅游咨询', v: '021-962020' }
      ],
      facts: [
        '电压 220V / 50Hz，A / C / I 型插头都常见；带一个万能转换头最稳妥',
        '自来水不建议直饮，酒店房间一般配有电热水壶',
        '公共厕所通常不提供纸巾，建议随身带包纸巾',
        '绝大部分场所不需要付小费',
        '中国大陆使用北京时间（UTC+8），无夏令时',
        '主要医院与高端酒店可提供英文服务，但普通诊所不一定'
      ],
      apps: ['支付宝', '微信', '滴滴出行', '高德地图', '大众点评', 'Metro 大都会', '携程 / 去哪儿']
    },
    en: {
      numbers: [
        { k: 'Police', v: '110' },
        { k: 'Ambulance', v: '120' },
        { k: 'Fire', v: '119' },
        { k: 'City hotline', v: '12345' },
        { k: 'Metro hotline', v: '021-64370000' },
        { k: 'Tourist info', v: '021-962020' }
      ],
      facts: [
        'Electricity is 220V / 50Hz; Type A, C and I sockets are all common - a universal adapter is the safe bet',
        'Don`t drink tap water. Hotel rooms almost always have a kettle',
        'Public toilets often have no paper - carry tissues',
        'Tipping is not expected anywhere',
        'China Standard Time (UTC+8), no daylight saving',
        'Major hospitals and international hotels have English-speaking staff; small clinics generally do not'
      ],
      apps: ['Alipay', 'WeChat', 'Didi', 'Amap (Gaode)', 'Dianping', 'Metro Man', 'Trip.com']
    }
  };

  /* Interface strings */
  var ui = {
    zh: {
      htmlLang: 'zh-CN',
      brand: '欢迎来上海',
      nav: ['行前必读', '景点大全', '行程推荐', '上海味道', '实用速查'],
      hero: {
        kicker: '魔都 · 实用旅行指南',
        title: '欢迎来上海',
        lead: '一座把百年石库门和 632 米摩天楼叠在一起的城市。这份指南只讲有用的：门票多少、玩多久、哪天闭馆、怎么避坑。',
        stats: [
          { n: '48', l: '精选景点' },
          { n: '20', l: '地铁线路' },
          { n: '¥3–7', l: '地铁单程' },
          { n: '240h', l: '过境免签' }
        ]
      },
      labels: { ticket: '门票', hours: '开放时间', duration: '建议游玩', metro: '交通', tips: '实用贴士', closed: '闭馆提醒' },
      search: '搜索景点 / 地区 / 关键词…',
      favAdd: '收藏', favOn: '已收藏', favTitle: '我的收藏', favEmpty: '还没有收藏，点卡片右上角的小星星试试。',
      filterAll: '全部', countSuffix: '个景点',
      tipsTitle: '注意事项',
      warnTitle: '避坑清单',
      close: '关闭',
      top: '回到顶部',
      swap: 'EN',
      swapTitle: '切换英文版',
      updated: '票价与开放时间为参考值，请以景区官方渠道当日公示为准。',
      itineraryNote: '提示',
      subs: [
        '出发前先看这几条，能省下不少时间和冤枉钱。',
        '58 个精选景点，含票价、建议游玩时长与闭馆日提醒，点卡片看细节。',
        '3 天看经典，5 天带娃放电，7 天慢慢逛。',
        '从南翔小笼到葱油拌面，上海味道都在这。',
        '电话、电压、饮水、厕所，落地就能用。'
      ]
    },
    en: {
      htmlLang: 'en',
      brand: 'Welcome to Shanghai',
      nav: ['Before You Go', 'Highlights', 'Itineraries', 'Shanghai on a Plate', 'Practical A–Z'],
      hero: {
        kicker: 'Shanghai · A Practical Guide',
        title: 'Welcome to\nShanghai',
        lead: 'A city that stacks century-old shikumen lanes against a 632-metre tower. This guide skips the filler: what it costs, how long it takes, which day it closes, and what to avoid.',
        stats: [
          { n: '48', l: 'Handpicked sights' },
      { n: '20', l: 'Metro lines' },
          { n: '¥3–7', l: 'Metro fare' },
          { n: '240h', l: 'Visa-free transit' }
        ]
      },
      labels: { ticket: 'Admission', hours: 'Opening hours', duration: 'Allow', metro: 'Getting there', tips: 'Good to know', closed: 'Closed' },
      search: 'Search sights, districts, keywords…',
      favAdd: 'Save', favOn: 'Saved', favTitle: 'My Saved List', favEmpty: 'Nothing saved yet. Tap the star on any card.',
      filterAll: 'All', countSuffix: 'sights',
      tipsTitle: 'Good to know',
      warnTitle: 'Watch out for',
      close: 'Close',
      top: 'Back to top',
      swap: '中文',
      swapTitle: 'Switch to Chinese',
      updated: 'Ticket prices and opening hours are reference values - confirm on the venue`s official channel on the day.',
      itineraryNote: 'Note',
      subs: [
        'Read these before you book - they will save you time, money and a few headaches.',
        '58 handpicked sights with admission, how long to allow, and closed-day warnings. Tap any card for detail.',
        'Three days for the classics, five for families, seven to slow down.',
        'From Nanxiang soup dumplings to scallion oil noodles.',
        'Numbers, voltage, water, toilets - the stuff you need on day one.'
      ]
    }
  };

  return {
    closureAlert: closureAlert,
    notes: notes,
    warnings: warnings,
    itineraries: itineraries,
    food: food,
    essentials: essentials,
    ui: ui
  };
})();
