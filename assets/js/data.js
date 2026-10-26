/* Shanghai Travel - Attraction dataset (bilingual)
   ticket / hours / duration are reference values, always confirm on official channels */
window.TRAVEL_DATA = (function () {
  'use strict';

  var cats = {
    zh: [
      { id: 'all', label: '全部' },
      { id: 'landmark', label: '城市地标' },
      { id: 'garden', label: '园林古镇' },
      { id: 'museum', label: '博物馆' },
      { id: 'art', label: '艺术街区' },
      { id: 'show', label: '演出娱乐' },
      { id: 'family', label: '亲子乐园' },
      { id: 'temple', label: '寺庙古建' }
    ],
    en: [
      { id: 'all', label: 'All' },
      { id: 'landmark', label: 'Landmarks' },
      { id: 'garden', label: 'Gardens & Towns' },
      { id: 'museum', label: 'Museums' },
      { id: 'art', label: 'Art & Streets' },
      { id: 'show', label: 'Shows' },
      { id: 'family', label: 'Family Fun' },
      { id: 'temple', label: 'Temples' }
    ]
  };

  var attractions = [
    /* ---------------- 城市地标 LANDMARKS ---------------- */
    {
      id: 'bund', cat: 'landmark', icon: '🏛️', img: 'bund.jpg', stars: 5,
      zh: {
        name: '外滩', sub: '万国建筑博览群 · 免费',
        desc: '黄浦江西岸 1.5 公里长的滨江步道，一侧是 52 幢哥特式、巴洛克式、新古典主义的历史建筑，另一侧是陆家嘴的摩天天际线。日落前一小时到入夜，是外滩最动人的时段。',
        price: '免费', hours: '全天开放', duration: '1.5 – 2 小时',
        metro: '2/10 号线南京东路站 3 号口',
        tips: ['最佳机位在乍浦路桥，可把万国建筑与陆家嘴三件套同框', '别挤「情人墙」正中间，往南北两侧走人少出片', '花 2 元坐一次轮渡，是性价比最高的浦江体验', '夏季建议傍晚前往，白天暴晒且几乎没有遮挡']
      },
      en: {
        name: 'The Bund', sub: '52 Historic Facades · Free',
        desc: 'A 1.5 km riverfront promenade where 52 Gothic, Baroque and neoclassical buildings face the futuristic Lujiazui skyline across the Huangpu River. The hour before sunset through full nightfall is when the Bund truly earns its reputation.',
        price: 'Free', hours: 'Open 24 hours', duration: '1.5 – 2 hours',
        metro: 'Line 2/10 East Nanjing Road, Exit 3',
        tips: ['Best photo spot: Zhapu Road Bridge frames the historic facades and the Lujiazui trio in one shot', 'Skip the crowded middle of the "Lovers Wall" - walk north or south for cleaner shots', 'The ¥2 public ferry is the best-value ride on the river', 'Come in the evening in summer; there is almost no shade during the day']
      },
      closed: null
    },
    {
      id: 'cruise', cat: 'landmark', icon: '🚢', img: 'cruise.jpg', stars: 5,
      zh: {
        name: '外滩游船（黄浦江游览）', sub: '夜航最值回票价',
        desc: '从十六铺、金陵东路或东方明珠码头登船，45–60 分钟航程把外滩万国建筑与陆家嘴霓虹一次看完。夜航班次在 18:00 后开航，能看到两岸逐一点灯的完整过程。',
        price: '¥79 – 130（日航约 79 / 夜航约 130）', hours: '11:00 – 22:00', duration: '约 45 – 60 分钟',
        metro: '十六铺码头（2/10 号线南京东路站）；金陵东路码头；东方明珠码头（2 号线陆家嘴站）',
        tips: ['只认准正规码头：十六铺、金陵东路、东方明珠码头', '登船后推销的「VIP 观景位」加价约 ¥100，普通甲板视野已经足够', '夜航比日航值，18:00 后开航能看到两岸点灯', '船尾适合拍陆家嘴剪影，船头视野最开阔']
      },
      en: {
        name: 'Huangpu River Cruise', sub: 'Best Value After Dark',
        desc: 'Board at Shiliupu, East Jinling Road or the Oriental Pearl pier for a 45-60 minute run that sweeps past the Bund facades and the neon Lujiazui skyline. Night departures leave after 18:00, so you watch the city light up from the water.',
        price: '¥79 – 130 (day ~¥79 / night ~¥130)', hours: '11:00 – 22:00', duration: '45 – 60 minutes',
        metro: 'Shiliupu Pier (Line 2/10 East Nanjing Rd); Jinling Rd Pier; Oriental Pearl Pier (Line 2 Lujiazui)',
        tips: ['Use official piers only: Shiliupu, East Jinling Road, Oriental Pearl', 'Crew may upsell a "VIP viewing deck" for ~¥100 - the regular deck views are just as good', 'Book a night departure; the 18:00+ sailings catch the full lighting sequence', 'Stern for Lujiazui silhouettes, bow for the widest panorama']
      },
      closed: null
    },
    {
      id: 'oriental-pearl', cat: 'landmark', icon: '📡', img: 'oriental-pearl.jpg', stars: 4,
      zh: {
        name: '东方明珠广播电视塔', sub: '468 米 · 259 米全透明悬空廊',
        desc: '上海最具辨识度的地标。二球观光含 259 米全透明悬空观光廊与 263 米主观光层，塔底的上海城市历史发展陈列馆还原了老上海市井。',
        price: '¥199（二球观光）/ ¥299（三球联票）/ 儿童 ¥99 起', hours: '09:00 – 21:00', duration: '2 – 3 小时',
        metro: '2 号线陆家嘴站',
        tips: ['259 米全透明悬空观光廊是招牌体验，恐高慎入', '联票常捆绑可口可乐欢乐餐厅 / 旋转餐厅自助，按需选择', '线上购票通常比现场便宜', '能见度高的晴天拍照更清晰']
      },
      en: {
        name: 'Oriental Pearl Tower', sub: '468 m · Glass Skywalk at 259 m',
        desc: 'Shanghai`s most recognisable silhouette. The Two-Sphere ticket covers the glass-bottomed skywalk at 259 m and the main deck at 263 m; the City History Museum at the base recreates old Shanghai street life.',
        price: '¥199 (two spheres) / ¥299 (three spheres) / child from ¥99', hours: '09:00 – 21:00', duration: '2 – 3 hours',
        metro: 'Line 2 Lujiazui',
        tips: ['The glass skywalk at 259 m is the signature thrill - skip it if you fear heights', 'Combo tickets bundle the Coca-Cola or revolving restaurant buffets - only if you`ll use them', 'Booking online is usually cheaper than at the gate', 'Go on a clear day for sharp skyline photos']
      },
      closed: null
    },
    {
      id: 'shanghai-tower', cat: 'landmark', icon: '🗼', img: 'shanghai-tower.jpg', stars: 5,
      zh: {
        name: '上海中心大厦 · 上海之巅观光厅', sub: '632 米 · 中国第一高楼',
        desc: '118 层、546 米高空的 360° 观景厅，是目前中国最高的室内观景点。日落时段入园可以一次看尽白天、黄昏与万家灯火。',
        price: '¥180（成人）/ ¥120（60 岁以上）/ ¥90（1–1.4 米儿童）', hours: '08:30 – 22:00（21:30 停止入园）', duration: '1.5 – 2 小时',
        metro: '2 号线陆家嘴站',
        tips: ['建议 16:30–18:30 入园，一次看尽日景与夜景', '52 层朵云书院视野同样惊艳，可一并安排', '世界最快电梯之一，55 秒直达 118 层', '恐高者避开透明观景区']
      },
      en: {
        name: 'Shanghai Tower, Top of Shanghai', sub: '632 m · China`s Tallest Building',
        desc: 'A 360-degree observation deck on the 118th floor at 546 m - the highest indoor viewing point in China. Entering around sunset gets you daylight, dusk and the full city of lights in one visit.',
        price: '¥180 (adult) / ¥120 (60+) / ¥90 (child 1–1.4 m)', hours: '08:30 – 22:00 (last entry 21:30)', duration: '1.5 – 2 hours',
        metro: 'Line 2 Lujiazui',
        tips: ['Enter 16:30–18:30 to catch daylight, sunset and night in one ticket', 'Duoyun Bookstore on the 52nd floor has stunning views too - pair them', 'One of the world`s fastest lifts: 55 seconds to the 118th floor', 'Avoid the glass-floor section if you are acrophobic']
      },
      closed: null
    },
    {
      id: 'jinmao', cat: 'landmark', icon: '🏙️', img: 'jinmao.jpg', stars: 4,
      zh: {
        name: '金茂大厦 88 层观光厅', sub: '420 米 · 性价比之选',
        desc: '陆家嘴三件套之一，88 层 340 米观景厅，中庭挑空 30 层的「时空隧道」极具视觉冲击。票价通常是三座塔里最友好的。',
        price: '¥120（成人）/ ¥90（学生）', hours: '08:30 – 21:30', duration: '约 1 小时',
        metro: '2 号线陆家嘴站',
        tips: ['「云中漫步」户外无护栏体验需另购票', '半价活动通常在 08:30–17:00 时段', '1 米以下或 3 周岁以下儿童免费']
      },
      en: {
        name: 'Jin Mao Tower, Sky Deck 88', sub: '420 m · Best Value',
        desc: 'One of the Lujiazui trio. The 88th-floor deck sits at 340 m, and the 30-storey atrium void below it is a genuine jaw-dropper. Usually the cheapest of the three towers.',
        price: '¥120 (adult) / ¥90 (student)', hours: '08:30 – 21:30', duration: 'About 1 hour',
        metro: 'Line 2 Lujiazui',
        tips: ['The open-air "Sky Walk" experience costs extra', 'Half-price windows usually run 08:30–17:00', 'Free for children under 1 m or under 3 years']
      },
      closed: null
    },
    {
      id: 'swfc', cat: 'landmark', icon: '🌆', img: 'swfc.jpg', stars: 4,
      zh: {
        name: '环球金融中心 100 层观光厅', sub: '474 米 · 三条玻璃地板',
        desc: '因为顶部独特的梯形开口被戏称「开瓶器」。100 层 474 米观景厅有三段透明玻璃地板，可以低头直视街道。',
        price: '约 ¥180（以官方为准）', hours: '09:00 – 22:00', duration: '1 – 1.5 小时',
        metro: '2 号线陆家嘴站',
        tips: ['474 米的三条透明玻璃地板是标志', '与东方明珠、上海中心合称「三件套」', '日落前后人最多，想清静可选上午']
      },
      en: {
        name: 'Shanghai World Financial Center, Deck 100', sub: '474 m · Glass Floors',
        desc: 'Nicknamed "the bottle opener" for the trapezoidal aperture at its crown. The 474 m deck on the 100th floor has three glass floor panels that drop straight down to the street.',
        price: 'About ¥180 (confirm on official site)', hours: '09:00 – 22:00', duration: '1 – 1.5 hours',
        metro: 'Line 2 Lujiazui',
        tips: ['The three glass floor panels at 474 m are the signature feature', 'Completes the Lujiazui "three-piece suit" with the Pearl and Shanghai Tower', 'Sunset is busiest - try a morning slot for quiet']
      },
      closed: null
    },
    {
      id: 'lujiazui', cat: 'landmark', icon: '🌃', img: 'lujiazui.jpg', stars: 4,
      zh: {
        name: '陆家嘴三件套', sub: '免费 · 最佳合影点',
        desc: '东方明珠（468m）+ 金茂大厦（420m）+ 上海中心（632m）组成的天际线，是上海的视觉名片。不登塔也能拍到最好的画面。',
        price: '免费（外观）', hours: '全天（灯光通常 18:30 后）', duration: '30 分钟 – 1 小时',
        metro: '2 号线陆家嘴站',
        tips: ['最佳合影点在东昌路码头或陆家嘴环形天桥', '北外滩世界会客厅一带可拍到无遮挡全景', '雨后空气通透，能见度最好']
      },
      en: {
        name: 'The Lujiazui "Three-Piece Suit"', sub: 'Free · Best Photo Spot',
        desc: 'The Oriental Pearl (468 m), Jin Mao (420 m) and Shanghai Tower (632 m) together form the skyline that defines Shanghai. You can shoot the best frames without buying a ticket.',
        price: 'Free (exterior)', hours: 'All day (lights usually after 18:30)', duration: '30 min – 1 hour',
        metro: 'Line 2 Lujiazui',
        tips: ['Best framing from Dongchang Road Pier or the Lujiazui footbridge', 'The North Bund waterfront gives the cleanest full panorama', 'Air is clearest right after rain']
      },
      closed: null
    },
    {
      id: 'waibaidu', cat: 'landmark', icon: '🌉', img: 'waibaidu.jpg', stars: 4,
      zh: {
        name: '外白渡桥', sub: '百年全钢桥 · 免费',
        desc: '1907 年建成的全钢结构桁架桥，是上海第一座真正意义上的现代桥梁，《情深深雨濛濛》等影视剧的经典取景地。',
        price: '免费', hours: '全天', duration: '20 – 30 分钟',
        metro: '2/10 号线南京东路站，步行 10 分钟',
        tips: ['与乍浦路桥、四川路桥连着走，一路都是机位', '夜景氛围好，人比外滩少很多', '桥上风大，冬天注意保暖']
      },
      en: {
        name: 'Waibaidu (Garden) Bridge', sub: 'Century-old Steel Truss · Free',
        desc: 'Built in 1907 as Shanghai`s first true modern steel bridge, and a favourite filming location for period dramas set in old Shanghai.',
        price: 'Free', hours: 'All day', duration: '20 – 30 minutes',
        metro: 'Line 2/10 East Nanjing Road, 10 min walk',
        tips: ['Chain it with Zhapu Road and Sichuan Road bridges - all photogenic', 'Lovely at night and far less crowded than the Bund', 'Windy on the deck; dress warm in winter']
      },
      closed: null
    },
    {
      id: 'bund-source', cat: 'landmark', icon: '🕍', img: 'bund-source.jpg', stars: 3,
      zh: {
        name: '外滩源（圆明园路）', sub: '免费 · 英伦街道质感',
        desc: '外滩北端的历史建筑群，圆明园路保留着成排的欧式建筑与老弄堂，人少清净，是婚纱和复古写真的热门地。',
        price: '免费', hours: '全天', duration: '约 1 小时',
        metro: '2/10 号线南京东路站',
        tips: ['清晨或工作日前往，人最少', '与外滩、外白渡桥步行串联', '建筑多为历史保护建筑，请勿涂鸦刻画']
      },
      en: {
        name: 'Bund Source (Yuanmingyuan Road)', sub: 'Free · European Street Feel',
        desc: 'The historic cluster at the northern end of the Bund. Yuanmingyuan Road keeps its rows of European facades and old lanes, quiet and uncrowded, and a favourite for wedding and vintage photography.',
        price: 'Free', hours: 'All day', duration: 'About 1 hour',
        metro: 'Line 2/10 East Nanjing Road',
        tips: ['Early morning or weekdays are quietest', 'Walk it as one loop with the Bund and Garden Bridge', 'These are protected heritage buildings - no graffiti']
      },
      closed: null
    },

    /* ---------------- 园林古镇 GARDENS & WATER TOWNS ---------------- */
    {
      id: 'greenhouse', cat: 'garden', icon: '🌿', img: 'greenhouse.jpg', stars: 5,
      zh: {
        name: '上海温室花园', sub: '亚洲最大温室 · 室内瀑布花园',
        desc: '位于世博文化公园内，三大主题馆「海市沙洲」「云上森林」「云雾峡谷」汇聚 300 余种美洲及热带植物，室内瀑布超出片，是新晋顶流打卡地。',
        price: '平日 ¥98 / 周末及节假日 ¥128；优待票 ¥49 / ¥64；1 米以下儿童免票',
        hours: '周二 – 周日 09:00 – 21:00（20:30 停止入园）', duration: '2 – 3 小时',
        metro: '7 号线后滩站 4 号口步行约 10 分钟；13 号线世博大道站 4 号口',
        tips: ['强烈建议线上提前购票，周末和节假日容易约满', '周一闭园，法定节假日除外，别白跑一趟', '室内恒温偏热，穿脱方便的衣服', '与申园、双子山同在世博文化公园，可安排半天']
      },
      en: {
        name: 'Shanghai Greenhouse Garden', sub: 'Asia`s Largest · Indoor Waterfall Garden',
        desc: 'Inside Expo Culture Park, three themed halls - Mirage Oasis, Forest in the Clouds and Misty Valley - gather over 300 American and tropical plant species around a photogenic indoor waterfall. One of the city`s newest hot tickets.',
        price: '¥98 weekdays / ¥128 weekends & holidays; concession ¥49 / ¥64; under 1 m free',
        hours: 'Tue – Sun 09:00 – 21:00 (last entry 20:30)', duration: '2 – 3 hours',
        metro: 'Line 7 Houtan, Exit 4 (10 min walk); Line 13 Expo Avenue, Exit 4',
        tips: ['Book online in advance - weekends and holidays sell out', 'Closed Mondays, except public holidays - don`t waste a trip', 'Warm and humid inside; wear layers', 'Sits in the same park as Shen Garden and Twin Hills - allow half a day']
      },
      closed: { zh: '周一闭园（法定节假日除外）', en: 'Closed Mondays (except public holidays)' }
    },
    {
      id: 'yuyuan', cat: 'garden', icon: '🏯', img: 'yuyuan.jpg', stars: 5,
      zh: {
        name: '豫园', sub: '明代江南古典园林 · 460 余年',
        desc: '上海现存唯一的明代江南古典园林，始建于 1559 年。亭台楼阁、假山池沼、九曲桥一应俱全，享有「东南名园冠」之称。园外的豫园商城与城隍庙街区免费开放。',
        price: '旺季（4–6 月、9–11 月）¥40；淡季（7–8 月、12–3 月）¥30；学生 / 60–69 岁半价；1.3 米以下、70 岁以上免票',
        hours: '09:00 – 16:30（16:00 停止入园）', duration: '3 – 4 小时（含城隍庙街区）',
        metro: '10/14 号线豫园站 1 号或 7 号口',
        tips: ['镇园之宝「玉玲珑」是江南三大奇石之一', '九曲桥、湖心亭在园外街区，免费、夜景更美', '街区亮灯约 17:30–22:00，春节有豫园灯会', '建议 09:00 开园即入，人少光线好', '周边小吃价格虚高，正餐建议走出景区两条街']
      },
      en: {
        name: 'Yu Garden', sub: 'Ming-dynasty Jiangnan Garden · 460+ years',
        desc: 'Shanghai`s only surviving Ming-dynasty classical Jiangnan garden, first laid out in 1559. Pavilions, rockeries, ponds and the Zigzag Bridge earned it the title "crown of gardens in the southeast". The surrounding Yuyuan Bazaar and City God Temple quarter are free to enter.',
        price: '¥40 peak (Apr–Jun, Sep–Nov) / ¥30 off-peak (Jul–Aug, Dec–Mar); half price for students & 60–69; free under 1.3 m or 70+',
        hours: '09:00 – 16:30 (last entry 16:00)', duration: '3 – 4 hours incl. the bazaar',
        metro: 'Line 10/14 Yu Garden, Exit 1 or 7',
        tips: ['The jade rock "Exquisite Jade" is one of the three great Jiangnan rocks', 'The Zigzag Bridge and Mid-Lake Teahouse are outside the paid garden and beautiful at night', 'Lanterns come on around 17:30–22:00; the Spring Festival lantern fair is spectacular', 'Arrive at 09:00 opening for the light and the calm', 'Snack prices near the garden are inflated - walk two blocks out for a proper meal']
      },
      closed: { zh: '周一闭园（法定节假日除外）', en: 'Closed Mondays (except public holidays)' }
    },
    {
      id: 'citygod', cat: 'garden', icon: '⛩️', img: 'citygod.jpg', stars: 3,
      zh: {
        name: '城隍庙', sub: '香花券 ¥10',
        desc: '紧邻豫园的道教宫观，供奉上海城隍霍光、秦裕伯、陈化成，是老城厢最有烟火气的一片区域。',
        price: '香花券 ¥10', hours: '08:30 – 16:30', duration: '约 40 分钟',
        metro: '10/14 号线豫园站',
        tips: ['与豫园一并游览最顺路', '道观内保持安静，尊重宗教习俗', '周边南翔小笼、蟹壳黄、梨膏糖是老字号']
      },
      en: {
        name: 'City God Temple', sub: 'Entry ¥10',
        desc: 'A Taoist temple right beside Yu Garden honouring Shanghai`s three city gods. The surrounding lanes are the liveliest corner of the old walled city.',
        price: '¥10 offering ticket', hours: '08:30 – 16:30', duration: 'About 40 minutes',
        metro: 'Line 10/14 Yu Garden',
        tips: ['Easy to combine with Yu Garden', 'Keep quiet inside and respect religious custom', 'Nearby: Nanxiang soup dumplings, sesame cakes, pear syrup candy']
      },
      closed: null
    },
    {
      id: 'shenyuan', cat: 'garden', icon: '🎋', img: 'shenyuan.jpg', stars: 3,
      zh: {
        name: '申园', sub: '世博文化公园内的江南园林',
        desc: '世博文化公园里的精致江南园林，亭台水榭一步一景。夜间有「满庭芳」主题光影秀（另收费）。',
        price: '约 ¥30（以官方为准）', hours: '09:00 – 17:00', duration: '约 1 小时',
        metro: '13 号线世博大道站 4 号口',
        tips: ['与温室花园、双子山同园，可组合成半天行程', '夜场光影秀需单独购票', '园子不大，节奏可以放慢']
      },
      en: {
        name: 'Shen Garden', sub: 'Jiangnan Garden in Expo Culture Park',
        desc: 'A compact, carefully composed Jiangnan garden inside Expo Culture Park, with a new view at every turn. The "Man Ting Fang" light show runs in the evening (separate ticket).',
        price: 'About ¥30 (confirm officially)', hours: '09:00 – 17:00', duration: 'About 1 hour',
        metro: 'Line 13 Expo Avenue, Exit 4',
        tips: ['Combine with the Greenhouse Garden and Twin Hills for a half-day', 'The evening light show is ticketed separately', 'Small garden - slow down']
      },
      closed: null
    },
    {
      id: 'twin-hills', cat: 'garden', icon: '⛰️', img: 'twin-hills.jpg', stars: 3,
      zh: {
        name: '双子山', sub: '免费 · 市区里的城市天际线观景点',
        desc: '世博文化公园内的人造山，登顶可俯瞰公园与黄浦江，视野开阔。山下的蘑力乐园适合亲子。',
        price: '免费', hours: '06:00 – 22:00（蘑力乐园 09:00 – 17:00）', duration: '约 1 小时',
        metro: '13 号线世博大道站 4 号口',
        tips: ['登顶不难，老人小孩都能走', '傍晚日落时分最美', '蘑力乐园亲子项目另收费']
      },
      en: {
        name: 'Twin Hills', sub: 'Free · Skyline Viewpoint in the City',
        desc: 'A man-made hill inside Expo Culture Park. The summit looks out over the park and the Huangpu River, and the climb is gentle. Mushroom Kingdom playground for kids sits at the foot.',
        price: 'Free', hours: '06:00 – 22:00 (playground 09:00 – 17:00)', duration: 'About 1 hour',
        metro: 'Line 13 Expo Avenue, Exit 4',
        tips: ['An easy climb - fine for older visitors and children', 'Best at sunset', 'Playground attractions are charged separately']
      },
      closed: null
    },
    {
      id: 'zhujiajiao', cat: 'garden', icon: '🛶', img: 'zhujiajiao.jpg', stars: 5,
      zh: {
        name: '朱家角古镇', sub: '上海保存最完整的水乡',
        desc: '上海四大历史文化名镇之一，「小桥、流水、人家」的江南画卷。河道纵横，明清古桥、酱园、茶馆遍布，夜景灯火朦胧。',
        price: '免费入园，景点联票约 ¥30 – 80', hours: '全天（收费景点约 08:30 – 16:30）', duration: '半天 – 1 天',
        metro: '17 号线朱家角站',
        tips: ['必吃：扎肉、芡实糕、熏青豆', '坐一次摇橹船，是水乡最有氛围的体验', '地铁 17 号线直达，单程约 1 小时', '节假日人非常多，建议工作日前往']
      },
      en: {
        name: 'Zhujiajiao Water Town', sub: 'Shanghai`s Best-preserved Water Town',
        desc: 'One of Shanghai`s four historic towns and a textbook Jiangnan scene of little bridges, flowing water and old houses. Canals, Ming-Qing bridges, a soy sauce workshop and teahouses fill the lanes; the night lighting is lovely.',
        price: 'Free to enter; attraction combo ticket ~¥30 – 80', hours: 'All day (paid sights ~08:30 – 16:30)', duration: 'Half to full day',
        metro: 'Line 17 Zhujiajiao',
        tips: ['Eat this: braised pork knuckle, water-chestnut cake, smoked green beans', 'Take a sculled boat - the most atmospheric way to see the canals', 'Direct on Metro Line 17, about 1 hour each way', 'Very crowded on holidays - go on a weekday']
      },
      closed: null
    },
    {
      id: 'qibao', cat: 'garden', icon: '🏘️', img: 'qibao.jpg', stars: 3,
      zh: {
        name: '七宝古镇', sub: '免费 · 离市区最近的古镇',
        desc: '距离市中心最近的江南古镇，明清老街纵横，小吃云集，江南水乡风貌与市井烟火交融。',
        price: '免费', hours: '全天', duration: '2 – 3 小时',
        metro: '9 号线七宝站',
        tips: ['小吃：七宝汤圆、海棠糕、羊肉汤', '节假日非常拥挤，建议工作日', '离虹桥枢纽近，适合落地或返程前顺路']
      },
      en: {
        name: 'Qibao Ancient Town', sub: 'Free · Closest Water Town to Downtown',
        desc: 'The nearest Jiangnan old town to central Shanghai, with Ming-Qing streets, canal views and an enormous amount of street food.',
        price: 'Free', hours: 'All day', duration: '2 – 3 hours',
        metro: 'Line 9 Qibao',
        tips: ['Eat this: Qibao tangyuan, haitang cake, mutton soup', 'Packed on holidays - go on a weekday', 'Close to Hongqiao hub - easy stop before a flight']
      },
      closed: null
    },
    {
      id: 'guangfulin', cat: 'garden', icon: '🏺', img: 'guangfulin.jpg', stars: 4,
      zh: {
        name: '广富林文化遗址', sub: '「水下博物馆」',
        desc: '广富林遗址发现了上海最早的先民活动痕迹，标志性的「水下博物馆」屋顶漂浮在湖面之上，红墙碧水、千年古建交融，汉服拍照出片率极高。',
        price: '约 ¥40（以官方为准）', hours: '09:00 – 17:00', duration: '3 – 4 小时',
        metro: '9 号线松江大学城站 + 接驳',
        tips: ['园区很大，预留半天', '水下展厅是核心看点', '汉服 / 古风写真效果极佳']
      },
      en: {
        name: 'Guangfulin Heritage Site', sub: 'The "Underwater Museum"',
        desc: 'Guangfulin holds the earliest traces of human settlement in Shanghai. The signature museum roofs appear to float on the lake - red walls, green water and reconstructed ancient architecture make it a favourite for hanfu photoshoots.',
        price: 'About ¥40 (confirm officially)', hours: '09:00 – 17:00', duration: '3 – 4 hours',
        metro: 'Line 9 Songjiang University Town + shuttle',
        tips: ['The park is large - allow half a day', 'The underwater exhibition halls are the core sight', 'Excellent for hanfu or period-style photography']
      },
      closed: null
    },
    {
      id: 'guyi', cat: 'garden', icon: '🎍', img: 'guyi.jpg', stars: 3,
      zh: {
        name: '古猗园', sub: '上海五大古典园林之一',
        desc: '明代古典园林，以竹景和戏鹅池著称。游客远少于豫园，安静雅致，隔壁南翔古镇的小笼包是正宗发源地。',
        price: '¥12', hours: '08:00 – 17:00', duration: '约 1.5 小时',
        metro: '11 号线南翔站',
        tips: ['顺路吃南翔小笼，这里是发源地', '春季竹景、秋季银杏最佳', '相比豫园人少太多，适合慢逛']
      },
      en: {
        name: 'Guyi Garden', sub: 'One of Shanghai`s Five Classical Gardens',
        desc: 'A Ming-dynasty garden known for its bamboo groves and Goose-Playing Pond. Far quieter than Yu Garden, and next door to Nanxiang Old Town - the birthplace of xiaolongbao.',
        price: '¥12', hours: '08:00 – 17:00', duration: 'About 1.5 hours',
        metro: 'Line 11 Nanxiang',
        tips: ['Eat Nanxiang xiaolongbao here - this is where they come from', 'Best in spring for bamboo and autumn for ginkgo', 'Far fewer crowds than Yu Garden']
      },
      closed: null
    },

    /* ---------------- 博物馆 MUSEUMS ---------------- */
    {
      id: 'shmuseum-plaza', cat: 'museum', icon: '🏺', img: 'shmuseum-plaza.jpg', stars: 5,
      zh: {
        name: '上海博物馆（人民广场馆）', sub: '免费 · 需预约',
        desc: '馆藏青铜器、书画、陶瓷等国宝级文物，数量多、品级高，是了解中华千年文明最高效的一站。',
        price: '基本陈列免费（需预约）；特展另行购票',
        hours: '09:00 – 17:00（16:00 停止入场）', duration: '3 – 4 小时',
        metro: '1/2/8 号线人民广场站',
        tips: ['2026.7.9–2027.11.14「世界树之巅：美洲古代文明大展」期间全场需购票', '务必提前在官方小程序预约', '重点看青铜器馆、书画馆', '人民广场一带可与城市规划馆、大剧院串成一线']
      },
      en: {
        name: 'Shanghai Museum (People`s Square)', sub: 'Free · Reservation required',
        desc: 'National-treasure holdings in bronzes, calligraphy, painting and ceramics. The single most efficient way to take in thousands of years of Chinese civilisation under one roof.',
        price: 'Free for permanent galleries (reservation required); special exhibitions ticketed',
        hours: '09:00 – 17:00 (last admission 16:00)', duration: '3 – 4 hours',
        metro: 'Line 1/2/8 People`s Square',
        tips: ['During "Above the Canopy: Ancient Civilisations of the Americas" (9 Jul 2026 – 14 Nov 2027) all visitors must buy a ticket', 'Book ahead on the official mini-programme', 'Prioritise the Bronze and Calligraphy/Painting galleries', 'Pairs well with the Urban Planning Centre and Grand Theatre nearby']
      },
      closed: { zh: '周一闭馆（国定节假日除外）', en: 'Closed Mondays (except national holidays)' }
    },
    {
      id: 'shmuseum-east', cat: 'museum', icon: '🏛️', img: 'shmuseum-east.jpg', stars: 5,
      zh: {
        name: '上海博物馆东馆', sub: '免费免预约 · 注意是【周二】闭馆',
        desc: '2024 年开放的新馆，体量是人民广场馆的数倍，青铜、雕塑、书画、玉器、陶瓷、货币等常设馆一应俱全，另设古代文明探索宫与数字馆。',
        price: '基本陈列免费，散客免预约', hours: '10:00 – 18:00（17:00 后停止入场）', duration: '4 – 5 小时',
        metro: '2 号线上海科技馆站；4/6 号线浦电路站',
        tips: ['注意：东馆是【周二】闭馆，不是周一！', '持有效身份证件原件，从 B1 层东门刷证入馆', '古代文明探索宫、数字馆仍需专项预约', '面积超大，穿一双舒服的鞋', '未满 12 周岁需成年人全程陪同']
      },
      en: {
        name: 'Shanghai Museum East', sub: 'Free, no booking · CLOSED TUESDAYS',
        desc: 'Opened in 2024, this new wing dwarfs the People`s Square building. It houses permanent galleries for bronzes, sculpture, calligraphy, painting, jade, ceramics and currency, plus an ancient-civilisations discovery hall and a digital gallery.',
        price: 'Free for permanent galleries; no individual booking needed', hours: '10:00 – 18:00 (last admission 17:00)', duration: '4 – 5 hours',
        metro: 'Line 2 Shanghai Science & Tech Museum; Line 4/6 Pudian Road',
        tips: ['Heads up: the East building closes on TUESDAYS, not Mondays', 'Bring your original ID - swipe it at the B1 east entrance after security', 'The Discovery Hall and Digital Gallery still require separate booking', 'It is enormous - wear comfortable shoes', 'Under-12s must be accompanied by an adult at all times']
      },
      closed: { zh: '周二闭馆（国定节假日除外）', en: 'Closed Tuesdays (except national holidays)' }
    },
    {
      id: 'planetarium', cat: 'museum', icon: '🔭', img: 'planetarium.jpg', stars: 5,
      zh: {
        name: '上海天文馆', sub: '全球建筑面积最大天文馆',
        desc: '位于临港滴水湖畔，建筑面积 3.8 万平方米，「家园」「宇宙」「征程」三大主题展区加球幕影院，互动装置密度极高。',
        price: '¥30（成人）/ ¥15（学生）/ ¥25（老人）', hours: '09:30 – 20:00（19:00 停止入园）', duration: '4 – 5 小时',
        metro: '16 号线滴水湖站 + 接驳',
        tips: ['票非常难抢，提前 7 天在官方小程序准时开抢', '在临港滴水湖，离市区单程约 1.5 小时，务必留足时间', '建议开馆即入，人少体验好', '与中国航海博物馆、耀雪冰雪世界同片区，可安排一整天']
      },
      en: {
        name: 'Shanghai Astronomy Museum', sub: 'World`s Largest by Floor Area',
        desc: 'On the shore of Dishui Lake in Lingang, with 38,000 sqm of floor space. Three themed zones - Home, Universe and Quest - plus a dome cinema and an unusually high density of hands-on exhibits.',
        price: '¥30 (adult) / ¥15 (student) / ¥25 (senior)', hours: '09:30 – 20:00 (last entry 19:00)', duration: '4 – 5 hours',
        metro: 'Line 16 Dishui Lake + shuttle',
        tips: ['Tickets sell out fast - book on the official mini-programme exactly 7 days ahead', 'It is far: about 1.5 hours each way from downtown - budget the whole day', 'Arrive at opening for the calmest experience', 'Same district as the Maritime Museum and Yaoxue Ice & Snow World']
      },
      closed: { zh: '周一闭馆（国定节假日除外）', en: 'Closed Mondays (except national holidays)' }
    },
    {
      id: 'natural-history', cat: 'museum', icon: '🦕', img: 'natural-history.jpg', stars: 5,
      zh: {
        name: '上海自然博物馆', sub: '网红大蓝鲸 · 亲子首选',
        desc: '上海科技馆分馆。网红大蓝鲸悬吊标本与恐龙骨架是地标，生命演化展区沉浸感强，是上海最热门的亲子目的地之一。',
        price: '¥30（成人）/ ¥12（学生）/ ¥25（老人）', hours: '09:00 – 17:00', duration: '3 – 4 小时',
        metro: '13 号线自然博物馆站',
        tips: ['注意：这里是【周二】闭馆', '周末人流极大，尽量工作日前往', '需提前在官方渠道实名预约购票', '重点看恐龙馆与蓝鲸标本']
      },
      en: {
        name: 'Shanghai Natural History Museum', sub: 'The Blue Whale · Top Family Pick',
        desc: 'A branch of the Shanghai Science and Technology Museum. The suspended blue whale model and dinosaur skeletons are its calling cards, and the evolution galleries are deeply immersive. One of the city`s busiest family attractions.',
        price: '¥30 (adult) / ¥12 (student) / ¥25 (senior)', hours: '09:00 – 17:00', duration: '3 – 4 hours',
        metro: 'Line 13 Natural History Museum',
        tips: ['Heads up: this one closes on TUESDAYS', 'Weekends are extremely busy - visit on a weekday', 'Real-name booking required in advance via official channels', 'Prioritise the dinosaur hall and the blue whale']
      },
      closed: { zh: '周二闭馆（国定节假日除外）', en: 'Closed Tuesdays (except national holidays)' }
    },
    {
      id: 'sci-tech', cat: 'museum', icon: '🔬', img: 'sci-tech.jpg', stars: 4,
      zh: {
        name: '上海科技馆', sub: '亲子研学 · 出行前务必确认开放状态',
        desc: '互动科普场馆，恐龙化石、航天模型、自然科学展区丰富，是上海亲子研学的经典选择。',
        price: '¥45（成人）/ ¥22（学生）/ ¥37（老人）', hours: '09:00 – 17:00', duration: '4 – 5 小时',
        metro: '2 号线上海科技馆站',
        tips: ['该馆曾长期改造升级，出行前务必确认当前是否已恢复开放', '周一闭馆（国定节假日除外）', '部分互动项目需排队，建议上午入场']
      },
      en: {
        name: 'Shanghai Science & Technology Museum', sub: 'Family Science · Check it is open',
        desc: 'A hands-on science museum with dinosaur fossils, space models and extensive natural-science galleries - a classic Shanghai family day out.',
        price: '¥45 (adult) / ¥22 (student) / ¥37 (senior)', hours: '09:00 – 17:00', duration: '4 – 5 hours',
        metro: 'Line 2 Shanghai Science & Tech Museum',
        tips: ['This museum has been closed for extended renovation - confirm it has reopened before you go', 'Closed Mondays (except national holidays)', 'Popular interactives queue up - arrive in the morning']
      },
      closed: { zh: '周一闭馆（国定节假日除外）', en: 'Closed Mondays (except national holidays)' }
    },
    {
      id: 'history-museum', cat: 'museum', icon: '📜', img: 'history-museum.jpg', stars: 4,
      zh: {
        name: '上海市历史博物馆', sub: '免费 · 了解「上海是怎么来的」',
        desc: '位于原上海美术馆（跑马总会）老建筑内，系统梳理上海从滨海渔村到国际大都会的变迁，建筑本身就是看点。',
        price: '免费', hours: '09:00 – 17:00', duration: '约 2 小时',
        metro: '2/12/13 号线南京西路站',
        tips: ['老建筑（原跑马总会）本身值得细看', '免费但建议提前预约', '周一闭馆', '与人民广场、南京路步行街连成一线']
      },
      en: {
        name: 'Shanghai History Museum', sub: 'Free · How Shanghai Became Shanghai',
        desc: 'Housed in the former Shanghai Art Museum (the old Race Club building), it traces the city`s journey from fishing village to global metropolis. The heritage building is an exhibit in itself.',
        price: 'Free', hours: '09:00 – 17:00', duration: 'About 2 hours',
        metro: 'Line 2/12/13 West Nanjing Road',
        tips: ['The Race Club building is worth a close look on its own', 'Free, but booking ahead is recommended', 'Closed Mondays', 'Easy to chain with People`s Square and East Nanjing Road']
      },
      closed: { zh: '周一闭馆', en: 'Closed Mondays' }
    },
    {
      id: 'urban-planning', cat: 'museum', icon: '🗺️', img: 'urban-planning.jpg', stars: 3,
      zh: {
        name: '上海城市规划展示馆', sub: '巨型城市沙盘',
        desc: '人民广场旁，以巨大的上海市中心实景沙盘和沉浸式影院著称，是快速建立「上海空间感」的地方。',
        price: '¥30（以官方为准）', hours: '09:00 – 17:00', duration: '1.5 – 2 小时',
        metro: '1/2/8 号线人民广场站',
        tips: ['周一闭馆', '先看沙盘再看展，顺序更顺', '与上博、大剧院步行可达']
      },
      en: {
        name: 'Shanghai Urban Planning Exhibition Center', sub: 'The Giant City Model',
        desc: 'Next to People`s Square, famous for its enormous scale model of central Shanghai and immersive theatre - the fastest way to build a mental map of the city.',
        price: '¥30 (confirm officially)', hours: '09:00 – 17:00', duration: '1.5 – 2 hours',
        metro: 'Line 1/2/8 People`s Square',
        tips: ['Closed Mondays', 'Start with the model, then the galleries', 'Walkable from Shanghai Museum and the Grand Theatre']
      },
      closed: { zh: '周一闭馆', en: 'Closed Mondays' }
    },
    {
      id: 'world-expo', cat: 'museum', icon: '🌐', img: 'world-expo.jpg', stars: 3,
      zh: {
        name: '世博会博物馆', sub: '免费 · 国际展览局唯一官方馆',
        desc: '国际展览局唯一官方博物馆，完整呈现世博会 170 余年历史，建筑本身也很有设计感。',
        price: '免费', hours: '09:00 – 17:00', duration: '约 2 小时',
        metro: '13 号线世博会博物馆站',
        tips: ['周一闭馆', '免费但需预约', '与世博文化公园、千古情景区同片区']
      },
      en: {
        name: 'World Expo Museum', sub: 'Free · BIE`s Only Official Museum',
        desc: 'The only official museum of the Bureau International des Expositions, covering more than 170 years of World Expo history. The building is a design statement in its own right.',
        price: 'Free', hours: '09:00 – 17:00', duration: 'About 2 hours',
        metro: 'Line 13 World Expo Museum',
        tips: ['Closed Mondays', 'Free but reservation required', 'Same district as Expo Culture Park and Shanghai Romance Park']
      },
      closed: { zh: '周一闭馆', en: 'Closed Mondays' }
    },
    {
      id: 'maritime', cat: 'museum', icon: '⚓', img: 'maritime.jpg', stars: 4,
      zh: {
        name: '中国航海博物馆', sub: '国内首座航海专题馆',
        desc: '位于临港滴水湖畔，有明代福船复原、航海模拟器、万吨巨轮主机等实物展项，亲子友好度很高。',
        price: '约 ¥30（成人）', hours: '09:30 – 16:00', duration: '2 – 3 小时',
        metro: '16 号线滴水湖站',
        tips: ['周一闭馆（节假日除外）', '与上海天文馆同在临港，可安排一天', '馆内有登船互动体验，孩子很喜欢']
      },
      en: {
        name: 'China Maritime Museum', sub: 'China`s First Maritime Museum',
        desc: 'On the shore of Dishui Lake in Lingang, with a reconstructed Ming-dynasty junk, navigation simulators and a real ocean-liner engine. Very child-friendly.',
        price: 'About ¥30 (adult)', hours: '09:30 – 16:00', duration: '2 – 3 hours',
        metro: 'Line 16 Dishui Lake',
        tips: ['Closed Mondays (except holidays)', 'Same district as the Astronomy Museum - make a day of it', 'Hands-on boarding experiences are a hit with kids']
      },
      closed: { zh: '周一闭馆（节假日除外）', en: 'Closed Mondays (except holidays)' }
    },
    {
      id: 'jewish', cat: 'museum', icon: '🕯️', img: 'jewish.jpg', stars: 4,
      zh: {
        name: '上海犹太难民纪念馆', sub: '英文讲解完善 · 适合带外国朋友',
        desc: '记录二战期间上海接纳近两万名犹太难民的历史，摩西会堂旧址与周边历史街区保存完好。',
        price: '¥20（成人）/ ¥10（学生）/ ¥15（老人）', hours: '09:00 – 17:00', duration: '约 1.5 小时',
        metro: '12 号线提篮桥站',
        tips: ['英文讲解与展陈完善，非常适合外国游客', '周边提篮桥历史街区可一并漫步', '参观时保持庄重']
      },
      en: {
        name: 'Shanghai Jewish Refugees Museum', sub: 'Excellent English Interpretation',
        desc: 'Documents how Shanghai took in nearly 20,000 Jewish refugees during WWII. The former Ohel Moishe Synagogue and the surrounding historic streets are well preserved.',
        price: '¥20 (adult) / ¥10 (student) / ¥15 (senior)', hours: '09:00 – 17:00', duration: 'About 1.5 hours',
        metro: 'Line 12 Tilanqiao',
        tips: ['Excellent English labelling - ideal for international visitors', 'Walk the surrounding Tilanqiao historic quarter afterwards', 'Please keep a respectful demeanour']
      },
      closed: null
    },
    {
      id: 'sihang', cat: 'museum', icon: '🪖', img: 'sihang.jpg', stars: 4,
      zh: {
        name: '四行仓库抗战纪念馆', sub: '免费 · 「八百壮士」旧址',
        desc: '淞沪会战四行仓库保卫战旧址，西墙保留着密密麻麻的弹痕与炮弹孔洞，是上海最有冲击力的抗战纪念地。',
        price: '免费', hours: '09:00 – 16:30', duration: '1 – 1.5 小时',
        metro: '8/12 号线曲阜路站',
        tips: ['周一闭馆', '西墙弹痕在馆外，免费可见', '参观时保持肃穆，适合带孩子做历史教育']
      },
      en: {
        name: 'Sihang Warehouse Battle Memorial', sub: 'Free · Site of the "800 Heroes"',
        desc: 'The warehouse defended during the Battle of Shanghai in 1937. Its west wall still carries the dense bullet and shell holes - the most visceral war memorial in the city.',
        price: 'Free', hours: '09:00 – 16:30', duration: '1 – 1.5 hours',
        metro: 'Line 8/12 Qufu Road',
        tips: ['Closed Mondays', 'The pockmarked west wall is outside and free to view', 'Keep a solemn demeanour; meaningful for older children']
      },
      closed: { zh: '周一闭馆', en: 'Closed Mondays' }
    },
    {
      id: 'glass-museum', cat: 'museum', icon: '🔮', img: 'glass-museum.jpg', stars: 4,
      zh: {
        name: '上海玻璃博物馆', sub: '老玻璃厂改造 · 设计感极强',
        desc: '由玻璃工厂改造而成，展陈设计与互动体验俱佳，有儿童玻璃工坊和热力剧场表演，是上海最被低估的博物馆之一。',
        price: '¥80 起（以官方为准）', hours: '周二 – 周日 09:30 – 17:00', duration: '2 – 3 小时',
        metro: '1/3 号线上海南站站 + 接驳',
        tips: ['周一闭馆', '热力剧场玻璃吹制表演值得看', '儿童工坊需另预约', '离市区较远，预留交通时间']
      },
      en: {
        name: 'Shanghai Museum of Glass', sub: 'Converted Glassworks · Superb Design',
        desc: 'A converted glass factory with unusually strong exhibition design and hands-on elements, a kids` glass workshop and a hot-glass theatre. One of Shanghai`s most underrated museums.',
        price: 'From ¥80 (confirm officially)', hours: 'Tue – Sun 09:30 – 17:00', duration: '2 – 3 hours',
        metro: 'Line 1/3 Shanghai South Railway Station + shuttle',
        tips: ['Closed Mondays', 'The hot-glass blowing show is worth timing for', 'Kids` workshop needs a separate booking', 'Far from downtown - budget travel time']
      },
      closed: { zh: '周一闭馆', en: 'Closed Mondays' }
    },

    /* ---------------- 艺术街区 ART & STREETS ---------------- */
    {
      id: 'wukang', cat: 'art', icon: '🌳', img: 'wukang.jpg', stars: 5,
      zh: {
        name: '武康路 & 武康大楼', sub: '免费 · 梧桐深处的老上海',
        desc: '如果说外滩是上海的面子，法租界就是上海的里子。武康路两侧法国梧桐成荫，百年洋房林立，武康大楼（诺曼底公寓）是最具辨识度的地标。',
        price: '免费', hours: '全天（街区）', duration: '半天',
        metro: '10/11 号线交通大学站',
        tips: ['武康大楼最佳机位在淮海路 / 武康路口对角', '安福路、五原路、复兴西路连着逛', '勿在马路中间拍照，注意来往车辆', '工作日与清晨人最少']
      },
      en: {
        name: 'Wukang Road & Normandie Apartments', sub: 'Free · Old Shanghai Under the Plane Trees',
        desc: 'If the Bund is Shanghai`s public face, the former French Concession is its private one. Plane trees shade a century of villas; the wedge-shaped Normandie Apartments is the most photographed landmark.',
        price: 'Free', hours: 'All day (streets)', duration: 'Half a day',
        metro: 'Line 10/11 Jiaotong University',
        tips: ['Best angle on the Normandie is from the opposite corner at Huaihai/Wukang', 'Continue along Anfu, Wuyuan and West Fuxing Roads', 'Don`t stand in the road for photos - watch traffic', 'Quietest on weekday mornings']
      },
      closed: null
    },
    {
      id: 'xintiandi', cat: 'art', icon: '🧱', img: 'xintiandi.jpg', stars: 4,
      zh: {
        name: '上海新天地', sub: '免费 · 石库门 × 现代商业',
        desc: '石库门建筑与现代商业融合的样板，白天文艺复古，夜晚灯火璀璨、酒吧云集，是上海「海派腔调」的代表。',
        price: '免费（区域）', hours: '全天（商户多为 10:00–22:00）', duration: '2 – 3 小时',
        metro: '10/13 号线新天地站',
        tips: ['消费偏高，看氛围为主', '石库门夜景配灯光最出片', '与中共一大会址、思南公馆步行可达']
      },
      en: {
        name: 'Xintiandi', sub: 'Free · Shikumen Meets Modern Retail',
        desc: 'The template for mixing restored shikumen townhouses with contemporary retail. Literary and retro by day, glowing and bar-heavy by night - the closest thing to Shanghai`s "haipai" mood.',
        price: 'Free (district)', hours: 'All day (shops mostly 10:00–22:00)', duration: '2 – 3 hours',
        metro: 'Line 10/13 Xintiandi',
        tips: ['Prices are high - come for the atmosphere', 'Shikumen lanes photograph best after lighting comes up', 'Walkable to the Site of the First CPC National Congress and Sinan Mansions']
      },
      closed: null
    },
    {
      id: 'tianzifang', cat: 'art', icon: '🎨', img: 'tianzifang.jpg', stars: 3,
      zh: {
        name: '田子坊', sub: '免费 · 石库门弄堂文创区',
        desc: '由石库门弄堂改造的文创街区，保留老上海市井风貌，文创小店、手作工坊、特色美食遍布。',
        price: '免费', hours: '约 10:00 – 22:00', duration: '约 2 小时',
        metro: '9 号线打浦桥站',
        tips: ['巷子极窄，节假日非常拥堵', '买手作 / 文创可以适当还价', '商业化程度较高，期待值别太高']
      },
      en: {
        name: 'Tianzifang', sub: 'Free · Shikumen Lane Creative Quarter',
        desc: 'Shikumen lanes turned over to craft studios, design shops and cafes, keeping the texture of old Shanghai street life.',
        price: 'Free', hours: 'About 10:00 – 22:00', duration: 'About 2 hours',
        metro: 'Line 9 Dapuqiao',
        tips: ['The lanes are very narrow and jam on holidays', 'Bargaining is fine for crafts and souvenirs', 'Heavily commercialised - keep expectations in check']
      },
      closed: null
    },
    {
      id: 'm50', cat: 'art', icon: '🖼️', img: 'm50.jpg', stars: 4,
      zh: {
        name: 'M50 创意园', sub: '免费 · 当代艺术聚集地',
        desc: '苏州河畔由旧纺织厂房改造的当代艺术区，涂鸦墙、画廊、艺术家工作室密集，是上海最纯粹的工业风艺术区。',
        price: '免费（部分特展另计）', hours: '约 10:00 – 18:00', duration: '约 2 小时',
        metro: '13 号线江宁路站',
        tips: ['多数画廊周一闭馆，工作日去更稳', '园区较大，慢慢逛', '沿苏州河步道可与天安千树连成一线']
      },
      en: {
        name: 'M50 Creative Park', sub: 'Free · Contemporary Art Hub',
        desc: 'Old textile mills along Suzhou Creek converted into galleries, artist studios and graffiti walls. The most authentic industrial-art compound in Shanghai.',
        price: 'Free (some exhibitions ticketed)', hours: 'About 10:00 – 18:00', duration: 'About 2 hours',
        metro: 'Line 13 Jiangning Road',
        tips: ['Many galleries close Mondays - weekdays are safer', 'The park is sizeable - take your time', 'Link it with 1000 Trees along the creek walk']
      },
      closed: { zh: '多数画廊周一闭馆', en: 'Many galleries closed Mondays' }
    },
    {
      id: 'm1933', cat: 'art', icon: '🏗️', img: 'm1933.jpg', stars: 4,
      zh: {
        name: '1933 老场坊', sub: '免费 · 清水混凝土摄影圣地',
        desc: '原上海工部局宰牲场，清水混凝土建筑、环形坡道与几何光影极具冲击力，是建筑与摄影爱好者的必去之地。',
        price: '免费', hours: '约 09:00 – 21:00', duration: '1 – 1.5 小时',
        metro: '10/12 号线天潼路站',
        tips: ['环形楼梯与伞形柱是最佳拍摄点', '工作日人少，拍照更从容', '内部多为商业场所，轻声漫步']
      },
      en: {
        name: '1933 Old Millfun', sub: 'Free · Concrete Photography Landmark',
        desc: 'The former Municipal Council slaughterhouse, its exposed concrete ramps, mushroom columns and geometric light have made it a pilgrimage site for architecture and photography fans.',
        price: 'Free', hours: 'About 09:00 – 21:00', duration: '1 – 1.5 hours',
        metro: 'Line 10/12 Tiantong Road',
        tips: ['The spiral ramps and mushroom capitals are the money shots', 'Weekdays are quieter for unhurried shooting', 'Mostly commercial tenants inside - keep your voice down']
      },
      closed: null
    },
    {
      id: 'westbund', cat: 'art', icon: '🏞️', img: 'westbund.jpg', stars: 5,
      zh: {
        name: '西岸美术馆 & 油罐艺术中心', sub: '免费（特展另计）· 美术馆大道',
        desc: '黄浦江畔的美术馆大道，龙美术馆、西岸美术馆、油罐艺术中心、西岸艺术中心连成一片，适合骑行与散步，日落尤其美。',
        price: '免费（特展另行购票）', hours: '约 10:00 – 18:00（各馆不同）', duration: '半天',
        metro: '11 号线云锦路站',
        tips: ['多数场馆周一闭馆', '沿江骑行道非常舒服，可租共享单车', '油罐艺术中心的城市森林是出片点', '日落时分光线最好']
      },
      en: {
        name: 'West Bund Art Museum & Tanks', sub: 'Free (special shows ticketed) · Museum Mile',
        desc: 'A museum mile along the Huangpu: Long Museum, West Bund Art Museum, the Tanks and the West Bund Art Center all within walking distance. Perfect for cycling and strolling, especially at sunset.',
        price: 'Free (special exhibitions ticketed separately)', hours: 'About 10:00 – 18:00 (varies by venue)', duration: 'Half a day',
        metro: 'Line 11 Yunjin Road',
        tips: ['Most venues close on Mondays', 'The riverside cycle path is excellent - grab a shared bike', 'The Tanks` urban forest is the photogenic spot', 'Best light at sunset']
      },
      closed: { zh: '多数场馆周一闭馆', en: 'Most venues closed Mondays' }
    },
    {
      id: 'psa', cat: 'art', icon: '⚡', img: 'psa.jpg', stars: 4,
      zh: {
        name: '上海当代艺术博物馆 PSA', sub: '免费 · 上海双年展主场馆',
        desc: '由原南市发电厂改造，是中国大陆第一座公立当代艺术博物馆，也是上海双年展的主场馆。',
        price: '免费（特展另行购票）', hours: '周二 – 周日 11:00 – 19:00', duration: '约 2 小时',
        metro: '4/8 号线西藏南路站',
        tips: ['周一闭馆', '原发电厂的烟囱被改造成「空中展厅」，别错过', '与世博会博物馆、当代艺术馆同在南浦片区']
      },
      en: {
        name: 'Power Station of Art (PSA)', sub: 'Free · Home of the Shanghai Biennale',
        desc: 'A converted power station and mainland China`s first public museum of contemporary art, hosting the Shanghai Biennale.',
        price: 'Free (special exhibitions ticketed)', hours: 'Tue – Sun 11:00 – 19:00', duration: 'About 2 hours',
        metro: 'Line 4/8 South Xizang Road',
        tips: ['Closed Mondays', 'The old smokestack was converted into an "aerial gallery" - don`t miss it', 'Same riverside district as the World Expo Museum']
      },
      closed: { zh: '周一闭馆', en: 'Closed Mondays' }
    },
    {
      id: 'china-art', cat: 'art', icon: '🟥', img: 'china-art.jpg', stars: 4,
      zh: {
        name: '上海美术馆（中华艺术宫）', sub: '免费 · 原世博会中国馆',
        desc: '由 2010 年世博会中国国家馆改造而成，标志性「东方之冠」造型。多媒体版《清明上河图》是镇馆之宝。',
        price: '免费（特展另行购票）', hours: '周二 – 周日 09:00 – 17:00', duration: '2 – 3 小时',
        metro: '8 号线中华艺术宫站',
        tips: ['周一闭馆', '多媒体《清明上河图》需留意展演场次', '建筑本身的斗拱结构值得抬头细看']
      },
      en: {
        name: 'China Art Museum', sub: 'Free · Former Expo China Pavilion',
        desc: 'Converted from the 2010 World Expo China Pavilion, keeping its signature "Oriental Crown" form. The animated Along the River During Qingming Festival is its centrepiece.',
        price: 'Free (special exhibitions ticketed)', hours: 'Tue – Sun 09:00 – 17:00', duration: '2 – 3 hours',
        metro: 'Line 8 China Art Museum',
        tips: ['Closed Mondays', 'Check screening times for the animated Qingming scroll', 'Look up - the dougong bracket structure is the real show']
      },
      closed: { zh: '周一闭馆', en: 'Closed Mondays' }
    },
    {
      id: 'map', cat: 'art', icon: '🪟', img: 'map.jpg', stars: 4,
      zh: {
        name: '浦东美术馆 MAP', sub: '正对外滩 · 顶层露台首选',
        desc: '让·努维尔设计，正对外滩。「镜厅」可以把外滩天际线收进画框，顶层露台是拍外滩的绝佳机位。',
        price: '¥60 – 100（随展览浮动）', hours: '周二 – 周日 10:00 – 21:00', duration: '约 2 小时',
        metro: '2 号线陆家嘴站',
        tips: ['周一闭馆（节假日除外）', '顶层露台看外滩视角极佳，傍晚去最好', '与陆家嘴三件套、东方明珠步行可达']
      },
      en: {
        name: 'Museum of Art Pudong (MAP)', sub: 'Facing the Bund · Best Roof Terrace',
        desc: 'Designed by Jean Nouvel, directly across from the Bund. Its "Mirror Hall" frames the historic skyline, and the roof terrace is one of the best vantage points in the city.',
        price: '¥60 – 100 (varies by exhibition)', hours: 'Tue – Sun 10:00 – 21:00', duration: 'About 2 hours',
        metro: 'Line 2 Lujiazui',
        tips: ['Closed Mondays (except holidays)', 'The roof terrace view of the Bund is best near dusk', 'Walkable to the Lujiazui trio and the Oriental Pearl']
      },
      closed: { zh: '周一闭馆（节假日除外）', en: 'Closed Mondays (except holidays)' }
    },
    {
      id: 'sinan', cat: 'art', icon: '🏡', img: 'sinan.jpg', stars: 3,
      zh: {
        name: '思南公馆', sub: '免费 · 法式花园洋房街区',
        desc: '21 栋花园洋房组成的法式街区，草坪、梧桐、老洋房相映，安静优雅，适合拍复古大片。',
        price: '免费（街区）', hours: '全天', duration: '约 1.5 小时',
        metro: '10/13 号线新天地站',
        tips: ['街区安静，轻声漫步', '洋房内部多为商业场所，外观打卡即可', '与新天地、复兴公园连成一条线']
      },
      en: {
        name: 'Sinan Mansions', sub: 'Free · French-style Garden Villas',
        desc: 'Twenty-one garden villas in a French-style quarter, with lawns, plane trees and heritage facades. Quiet, elegant, and ideal for vintage-style photography.',
        price: 'Free (district)', hours: 'All day', duration: 'About 1.5 hours',
        metro: 'Line 10/13 Xintiandi',
        tips: ['It is a quiet neighbourhood - keep your voice down', 'Most villas are commercial tenants - photograph the exteriors', 'Links neatly with Xintiandi and Fuxing Park']
      },
      closed: null
    },
    {
      id: 'zhangyuan', cat: 'art', icon: '🚪', img: 'zhangyuan.jpg', stars: 3,
      zh: {
        name: '张园', sub: '免费 · 上海最完整的石库门里弄',
        desc: '上海现存规模最大、保存最完整的石库门建筑群之一，改造后成为老建筑与高端商业的混合体。',
        price: '免费', hours: '全天（商户 10:00–22:00）', duration: '约 1.5 小时',
        metro: '2/12/13 号线南京西路站',
        tips: ['与南京西路商圈连成一片', '弄堂里拍照很有老上海味道', '离兴业路一大会址步行可达']
      },
      en: {
        name: 'Zhangyuan', sub: 'Free · Shanghai`s Most Complete Shikumen Lilong',
        desc: 'One of the largest and best-preserved shikumen housing compounds in Shanghai, now a mix of restored lanes and high-end retail.',
        price: 'Free', hours: 'All day (shops 10:00–22:00)', duration: 'About 1.5 hours',
        metro: 'Line 2/12/13 West Nanjing Road',
        tips: ['Connects directly to the West Nanjing Road shopping district', 'The lanes make atmospheric old-Shanghai photos', 'A short walk from the First CPC Congress site on Xingye Road']
      },
      closed: null
    },
    {
      id: 'xjh-library', cat: 'art', icon: '📚', img: 'xjh-library.jpg', stars: 4,
      zh: {
        name: '徐家汇书院', sub: '免费需预约 · 最美现代图书馆',
        desc: '徐家汇地标性的现代图书馆，中庭光影与书架设计感极强，与徐家汇天主教堂相邻。',
        price: '免费（需预约）', hours: '10:00 – 18:00', duration: '约 1 小时',
        metro: '1/9/11 号线徐家汇站',
        tips: ['周一闭馆', '需提前在官方渠道预约', '与徐家汇天主教堂、徐家汇公园连成一线']
      },
      en: {
        name: 'Xujiahui Library', sub: 'Free, book ahead · Stunning Modern Library',
        desc: 'A landmark contemporary library in Xujiahui with a dramatic lit atrium and shelving design, next door to the Xujiahui Cathedral.',
        price: 'Free (reservation required)', hours: '10:00 – 18:00', duration: 'About 1 hour',
        metro: 'Line 1/9/11 Xujiahui',
        tips: ['Closed Mondays', 'Book ahead through official channels', 'Pairs with the Xujiahui Cathedral and Xujiahui Park']
      },
      closed: { zh: '周一闭馆', en: 'Closed Mondays' }
    },

    /* ---------------- 演出娱乐 SHOWS ---------------- */
    {
      id: 'romance', cat: 'show', icon: '🎭', img: 'romance.jpg', stars: 5,
      zh: {
        name: '上海千古情', sub: '沉浸式历史演艺 · 主秀 4 幕',
        desc: '以《上海千古情》主秀为核心，分《沪上传奇》《风华绝代》《觉醒年代》《世纪之约》四幕，从十六铺码头讲到大上海的风云际会；景区内另有穿越街复刻老上海风情、夜间嘉年华与民俗杂技。',
        price: '¥199 起（观众席）/ ¥380（贵宾席）/ ¥580（豪华沙发席）；「千古情奇妙游」¥129',
        hours: '约 10:30 – 19:00（主秀场次以景区当日公示为准）', duration: '4 – 8 小时',
        metro: '13 号线世博大道站 4 号口，步行约 800 米',
        tips: ['主秀常规场次多为 14:00 / 19:00，建议提前 40 分钟入场', '剧场空调很足，带一件薄外套', '演出结束别急着走，出门就是黄浦江夜景', '演出期间禁止携带食品饮料、禁止使用闪光灯', '1.2 米以下儿童免门票（需成人陪同）']
      },
      en: {
        name: 'Shanghai Romance Park', sub: 'Immersive History Show · 4 Acts',
        desc: 'Built around the Shanghai Romance show in four acts - Legend of Shanghai, Splendid Era, Age of Awakening and Promise of the Century - tracing the city from the Shiliupu docks to its modern heyday. The park also recreates old Shanghai streets and runs night carnivals and folk acrobatics.',
        price: 'From ¥199 (standard) / ¥380 (premium) / ¥580 (sofa); "Romance Wonder Tour" ¥129',
        hours: 'About 10:30 – 19:00 (showtimes per the park`s daily board)', duration: '4 – 8 hours',
        metro: 'Line 13 Expo Avenue, Exit 4, ~800 m walk',
        tips: ['Regular shows are usually 14:00 and 19:00 - arrive 40 minutes early', 'The theatre is heavily air-conditioned - bring a light layer', 'Don`t rush out after the show; the Huangpu night view is right outside', 'No food or drinks inside, and no flash photography', 'Free for children under 1.2 m (adult accompaniment required)']
      },
      closed: null
    },
    {
      id: 'era', cat: 'show', icon: '🤸', img: 'era.jpg', stars: 4,
      zh: {
        name: '上海马戏城《时空之旅》', sub: '无语言障碍 · 适合带外国朋友',
        desc: '杂技与多媒体结合的常驻演出，几乎全程无对白，语言不通也完全看得懂，是招待外国朋友最省心的选择。',
        price: '¥180 – 680', hours: '以演出日历为准（多为 19:30 场）', duration: '约 1.5 小时',
        metro: '1 号线上海马戏城站',
        tips: ['基本无台词，外籍观众零门槛', '建议提前选座，中区视野最佳', '演出前后可逛马戏城商圈']
      },
      en: {
        name: 'ERA Intersection of Time', sub: 'No Language Barrier · Great with Visitors',
        desc: 'A resident acrobatics and multimedia show with almost no dialogue - you will follow it perfectly without Chinese. The easiest show in town to take international guests to.',
        price: '¥180 – 680', hours: 'Per the show calendar (usually 19:30)', duration: 'About 1.5 hours',
        metro: 'Line 1 Shanghai Circus World',
        tips: ['Almost no dialogue - zero language barrier', 'Book seats early; centre block has the best sightlines', 'The circus-world shopping district is fun before or after']
      },
      closed: null
    },
    {
      id: 'bund18', cat: 'show', icon: '🍸', img: 'bund18.jpg', stars: 3,
      zh: {
        name: '外滩十八号 & 和平饭店爵士吧', sub: '老上海夜生活',
        desc: '外滩历史建筑改造的高端酒吧与爵士乐现场，和平饭店老年爵士乐队是上海最具传奇色彩的常驻演出。',
        price: '酒吧人均 ¥150 起；部分场所有最低消费', hours: '多为 18:00 – 次日 02:00', duration: '2 – 3 小时',
        metro: '2/10 号线南京东路站',
        tips: ['和平饭店爵士吧建议提前预约', '多数场所有着装要求（休闲正装）', '消费偏高，量力而行']
      },
      en: {
        name: 'Bund 18 & Fairmont Peace Hotel Jazz Bar', sub: 'Old Shanghai Nightlife',
        desc: 'Heritage Bund buildings turned into high-end bars and live jazz rooms. The Peace Hotel`s Old Jazz Band is the city`s most storied resident act.',
        price: 'From ~¥150 per person; some venues have a minimum spend', hours: 'Mostly 18:00 – 02:00', duration: '2 – 3 hours',
        metro: 'Line 2/10 East Nanjing Road',
        tips: ['Reserve ahead for the Peace Hotel jazz bar', 'Many venues have a smart-casual dress code', 'Drinks are pricey - pace yourself']
      },
      closed: null
    },
    {
      id: 'cruise-night', cat: 'show', icon: '🎆', img: 'cruise-night.jpg', stars: 4,
      zh: {
        name: '浦江夜游 · 主题航班', sub: '演艺 + 自助餐的升级选择',
        desc: '「水晶公主」「龙船」「快乐船长」等主题航班提供演艺 + 自助餐的升级体验，适合想要更完整仪式感的游客。',
        price: '¥298 – 570（含餐）；标准游船 ¥79 – 130', hours: '11:00 – 22:00（夜航 18:00 后）', duration: '约 60 – 90 分钟',
        metro: '十六铺码头（2/10 号线南京东路站）',
        tips: ['只想看夜景的话，标准游船性价比更高', '含餐航班建议提前预订，旺季常满', '冬季甲板风大，注意保暖']
      },
      en: {
        name: 'Themed Night Cruises', sub: 'Dinner Theatre on the River',
        desc: 'Vessels such as Crystal Princess, Dragon Boat and Happy Captain offer show-plus-buffet upgrades for travellers who want more ceremony with their skyline.',
        price: '¥298 – 570 with dinner; standard cruise ¥79 – 130', hours: '11:00 – 22:00 (night sailings after 18:00)', duration: 'About 60 – 90 minutes',
        metro: 'Shiliupu Pier (Line 2/10 East Nanjing Road)',
        tips: ['For views alone, the standard boat is far better value', 'Book dinner cruises early - they fill up in peak season', 'The deck is cold in winter - layer up']
      },
      closed: null
    },

    /* ---------------- 亲子乐园 FAMILY ---------------- */
    {
      id: 'disney', cat: 'family', icon: '🏰', img: 'disney.jpg', stars: 5,
      zh: {
        name: '上海迪士尼乐园', sub: '中国内地首座迪士尼',
        desc: '童话城堡、花车巡游、烟花秀，玲娜贝儿等卡通人物互动，是亲子游玩的天花板，也是上海最热门的收费景区。',
        price: '浮动票价约 ¥475 – 799（按日期定价，节假日更高）', hours: '约 08:30 – 20:30（以官方日历为准）', duration: '1 – 2 天',
        metro: '11 号线迪士尼站',
        tips: ['必须提前购票并预约入园日期，当日基本买不到', '下载官方 App 查看实时排队、领取预约等候卡', '工作日比周末人少很多', '禁止携带自拍杆、大型三脚架', '烟花秀是当日高潮，提前 40 分钟占位']
      },
      en: {
        name: 'Shanghai Disneyland', sub: 'Mainland China`s First Disney Park',
        desc: 'Fairytale castle, daily parade, fireworks, and character meet-and-greets with LinaBell and friends. The high-water mark for family travel in Shanghai and the city`s busiest paid attraction.',
        price: 'Dynamic pricing ~¥475 – 799 (higher on peak dates)', hours: 'About 08:30 – 20:30 (check the official calendar)', duration: '1 – 2 days',
        metro: 'Line 11 Disney Resort',
        tips: ['Buy tickets and reserve your entry date in advance - same-day sales are rare', 'Use the official app for live queue times and standby passes', 'Weekdays are dramatically less crowded than weekends', 'No selfie sticks or large tripods', 'Claim a spot 40 minutes before the fireworks']
      },
      closed: null
    },
    {
      id: 'haichang', cat: 'family', icon: '🐋', img: 'haichang.jpg', stars: 4,
      zh: {
        name: '上海海昌海洋公园', sub: '海洋动物 + 过山车',
        desc: '海洋动物展示、过山车刺激项目与水上表演兼备，夜晚有烟花秀，兼顾刺激与童趣。',
        price: '约 ¥299 起（季节浮动）', hours: '约 09:00 – 21:00（季节调整）', duration: '1 天',
        metro: '16 号线临港大道站 + 接驳',
        tips: ['夏季水上项目热门，做好防晒', '表演时间提前查好，合理规划', '园区很大，带孩子的建议租推车']
      },
      en: {
        name: 'Shanghai Haichang Ocean Park', sub: 'Marine Animals + Rollercoasters',
        desc: 'Marine exhibits, thrill rides and water shows in one park, with fireworks at night - it covers both adrenaline and small children.',
        price: 'From ~¥299 (seasonal)', hours: 'About 09:00 – 21:00 (seasonal)', duration: 'Full day',
        metro: 'Line 16 Lingang Avenue + shuttle',
        tips: ['Water attractions are popular in summer - pack sunscreen', 'Check showtimes in advance and plan around them', 'It is a big park - rent a stroller if you have toddlers']
      },
      closed: null
    },
    {
      id: 'wild-zoo', cat: 'family', icon: '🦁', img: 'wild-zoo.jpg', stars: 4,
      zh: {
        name: '上海野生动物园', sub: '猛兽区可乘车投喂',
        desc: '国家 5A 级景区，猛兽区可乘车近距离观察，动物互动丰富，科普与娱乐结合。',
        price: '约 ¥165（成人）；夜公园 ¥88（特定日期）', hours: '约 08:00 – 17:00', duration: '半天（4 小时以上）',
        metro: '16 号线野生动物园站',
        tips: ['猛兽区严禁开窗投喂，注意安全', '园区较大，预留 4 小时以上', '亲子近距离接触动物的好地方']
      },
      en: {
        name: 'Shanghai Wild Animal Park', sub: 'Drive-through Predator Zone',
        desc: 'A national 5A attraction with a drive-through predator enclosure, animal encounters and a solid mix of education and entertainment.',
        price: 'About ¥165 (adult); night park ¥88 (selected dates)', hours: 'About 08:00 – 17:00', duration: 'Half day (4+ hours)',
        metro: 'Line 16 Wild Animal Park',
        tips: ['Never open windows in the predator zone - follow safety rules', 'The park is large - allow 4+ hours', 'Great for close-up animal experiences with kids']
      },
      closed: null
    },
    {
      id: 'happy-valley', cat: 'family', icon: '🎢', img: 'happy-valley.jpg', stars: 4,
      zh: {
        name: '上海欢乐谷', sub: '过山车爱好者的主场',
        desc: '大型主题乐园，过山车项目密集，夏季开放水上乐园，节庆期间有万圣节、春节灯会等活动。',
        price: '约 ¥260（成人）', hours: '约 09:00 – 21:00', duration: '1 天',
        metro: '9 号线佘山站 + 接驳',
        tips: ['节假日人流大，尽量错峰', '刺激项目排队时间长，合理规划', '夏季水上项目需带泳衣毛巾']
      },
      en: {
        name: 'Shanghai Happy Valley', sub: 'Home of the Rollercoasters',
        desc: 'A major theme park dense with coasters, with a water park in summer and seasonal events for Halloween and Spring Festival.',
        price: 'About ¥260 (adult)', hours: 'About 09:00 – 21:00', duration: 'Full day',
        metro: 'Line 9 Sheshan + shuttle',
        tips: ['Avoid public holidays if you can', 'Thrill rides queue long - plan a route', 'Bring swimwear and a towel for water attractions in summer']
      },
      closed: null
    },
    {
      id: 'legoland', cat: 'family', icon: '🧱', img: 'legoland.jpg', stars: 3,
      zh: {
        name: '上海乐高探索中心', sub: '室内 · 雨天备选',
        desc: '乐高城市微缩景观与积木搭建互动，适合 3–12 岁儿童，室内场馆不受天气影响。',
        price: '约 ¥215', hours: '约 10:00 – 20:00', duration: '3 – 4 小时',
        metro: '13 号线大渡河路站（长风大悦城）',
        tips: ['适合 3–12 岁，太大会觉得简单', '雨天或酷暑的室内备选', '与长风海洋世界相邻，可买联票']
      },
      en: {
        name: 'LEGOLAND Discovery Center', sub: 'Indoor · Rainy-day Option',
        desc: 'LEGO city miniatures and build-and-play zones aimed at ages 3-12, fully indoors and weather-proof.',
        price: 'About ¥215', hours: 'About 10:00 – 20:00', duration: '3 – 4 hours',
        metro: 'Line 13 Daduhe Road (Changfeng Joy City)',
        tips: ['Best for ages 3-12; older kids may find it simple', 'A solid backup for rain or extreme heat', 'Next to Changfeng Ocean World - combo tickets available']
      },
      closed: null
    },
    {
      id: 'snow-world', cat: 'family', icon: '❄️', img: 'snow-world.jpg', stars: 4,
      zh: {
        name: '耀雪冰雪世界', sub: '室内滑雪 · 全年无休',
        desc: '临港新片区的大型室内冰雪度假综合体，含滑雪道、娱雪区与汤泉，全年可玩。',
        price: '娱雪票约 ¥222 起；滑雪票 ¥483 起（含雪具）', hours: '约 10:00 – 21:00', duration: '半天',
        metro: '16 号线临港大道站',
        tips: ['娱雪票已含装备，手套建议自带', '滑雪道分初级 / 中高级，按水平选', '与天文馆、航海博物馆同在临港']
      },
      en: {
        name: 'Yaoxue Ice & Snow World', sub: 'Indoor Skiing · Year-round',
        desc: 'A large indoor snow resort in the Lingang special area with ski runs, a snow-play zone and hot springs - open all year.',
        price: 'Snow play from ~¥222; ski pass from ¥483 incl. gear', hours: 'About 10:00 – 21:00', duration: 'Half a day',
        metro: 'Line 16 Lingang Avenue',
        tips: ['Gear is included with snow-play tickets; bring your own gloves', 'Runs are graded beginner to advanced - pick your level', 'Same district as the Astronomy and Maritime museums']
      },
      closed: null
    },

    /* ---------------- 寺庙古建 TEMPLES ---------------- */
    {
      id: 'jingan', cat: 'temple', icon: '🛕', img: 'jingan.jpg', stars: 4,
      zh: {
        name: '静安寺', sub: '闹市中的千年古刹',
        desc: '金顶与周边摩天楼形成强烈反差，是上海最有视觉冲击力的城市寺庙。寺内素面口碑极佳。',
        price: '约 ¥50', hours: '约 07:30 – 17:00', duration: '约 1 小时',
        metro: '2/7/14 号线静安寺站',
        tips: ['着装得体，避免短裤短裙', '寺内素面值得一试', '香烛可自带或在寺内正规处购买', '地铁出来抬头就是最佳合影角度']
      },
      en: {
        name: 'Jing`an Temple', sub: 'A Millennium-old Temple in the Skyscrapers',
        desc: 'Its golden roof against the surrounding towers is one of Shanghai`s great visual clashes. The temple`s vegetarian noodles are genuinely good.',
        price: 'About ¥50', hours: 'About 07:30 – 17:00', duration: 'About 1 hour',
        metro: 'Line 2/7/14 Jing`an Temple',
        tips: ['Dress modestly - no shorts or short skirts', 'Try the vegetarian noodles', 'Bring your own incense or buy it at the official counter', 'Look up as you exit the metro for the classic shot']
      },
      closed: null
    },
    {
      id: 'jade-buddha', cat: 'temple', icon: '🪷', img: 'jade-buddha.jpg', stars: 3,
      zh: {
        name: '玉佛寺', sub: '两尊缅甸白玉玉佛',
        desc: '以供奉两尊缅甸白玉雕琢的玉佛闻名，相比静安寺更为安静，适合想避开人潮的游客。',
        price: '约 ¥20', hours: '约 08:00 – 16:30', duration: '约 1 小时',
        metro: '7/13 号线长寿路站',
        tips: ['游客明显少于静安寺', '寺内有素斋', '参观时保持安静']
      },
      en: {
        name: 'Jade Buddha Temple', sub: 'Two Burmese White Jade Buddhas',
        desc: 'Named for its two white-jade Buddha statues from Burma. Noticeably calmer than Jing`an - good if you want to dodge the crowds.',
        price: 'About ¥20', hours: 'About 08:00 – 16:30', duration: 'About 1 hour',
        metro: 'Line 7/13 Changshou Road',
        tips: ['Far fewer visitors than Jing`an Temple', 'There is a vegetarian canteen inside', 'Please keep quiet']
      },
      closed: null
    },
    {
      id: 'longhua', cat: 'temple', icon: '🌸', img: 'longhua.jpg', stars: 3,
      zh: {
        name: '龙华寺 & 龙华烈士陵园', sub: '千年古塔 · 春季樱花',
        desc: '上海最古老的寺院之一，千年龙华塔巍峨，春季樱花与古建相映。旁边是龙华烈士陵园。',
        price: '寺约 ¥10；陵园免费', hours: '约 07:30 – 17:00', duration: '约 1.5 小时',
        metro: '11/12 号线龙华站',
        tips: ['3 月底至 4 月初樱花最佳', '陵园内保持肃穆，禁止嬉戏', '寺内素斋有名']
      },
      en: {
        name: 'Longhua Temple & Martyrs` Memorial', sub: 'Ancient Pagoda · Spring Cherry Blossom',
        desc: 'One of Shanghai`s oldest temples, with a towering thousand-year pagoda and cherry blossom against the old halls in spring. The martyrs` memorial park sits alongside.',
        price: 'Temple ~¥10; memorial free', hours: 'About 07:30 – 17:00', duration: 'About 1.5 hours',
        metro: 'Line 11/12 Longhua',
        tips: ['Cherry blossom peaks late March to early April', 'Keep a solemn demeanour in the memorial park', 'The temple`s vegetarian food is well known']
      },
      closed: null
    },
    {
      id: 'xjh-cathedral', cat: 'temple', icon: '⛪', img: 'xjh-cathedral.jpg', stars: 4,
      zh: {
        name: '徐家汇天主教堂', sub: '「远东第一教堂」· 免费需预约',
        desc: '哥特式双塔教堂，彩色玻璃窗与内部空间极为精美，是上海最重要的近代宗教建筑之一。',
        price: '免费（需预约）', hours: '约 09:00 – 16:00（弥撒时间不开放参观）', duration: '约 40 分钟',
        metro: '1/9/11 号线徐家汇站',
        tips: ['弥撒时间不接待参观，去之前查好时段', '周一闭馆', '与徐家汇书院、徐家汇公园相邻', '教堂内请勿大声喧哗']
      },
      en: {
        name: 'Xujiahui Cathedral', sub: '"First Cathedral of the Far East" · Free, book ahead',
        desc: 'A Gothic twin-towered cathedral with superb stained glass and interior volume - among the most significant modern religious buildings in Shanghai.',
        price: 'Free (reservation required)', hours: 'About 09:00 – 16:00 (closed to visitors during Mass)', duration: 'About 40 minutes',
        metro: 'Line 1/9/11 Xujiahui',
        tips: ['No visiting during Mass - check the schedule first', 'Closed Mondays', 'Next to Xujiahui Library and Park', 'Please keep your voice down inside']
      },
      closed: { zh: '周一闭馆', en: 'Closed Mondays' }
    },
    {
      id: 'chenshan', cat: 'garden', icon: '🌷', img: 'chenshan.jpg', stars: 4,
      zh: {
        name: '辰山植物园', sub: '矿坑花园 · 四季花海',
        desc: '上海面积最大的植物园，标志性的矿坑花园与温室群极具设计感，四季花海不断，是亲子科普与拍照的绝佳去处。',
        price: '约 ¥60（成人）/ ¥30（学生）', hours: '约 08:00 – 17:00', duration: '4 小时以上',
        metro: '9 号线洞泾站 + 接驳',
        tips: ['园区极大，预留 4 小时以上', '温室内温度较高，注意防暑', '可以租自行车代步']
      },
      en: {
        name: 'Chen Shan Botanical Garden', sub: 'Quarry Garden · Flowers All Year',
        desc: 'Shanghai`s largest botanical garden, known for its striking quarry garden and greenhouse complex, with something in bloom year round. Excellent for families and photography.',
        price: 'About ¥60 (adult) / ¥30 (student)', hours: 'About 08:00 – 17:00', duration: '4+ hours',
        metro: 'Line 9 Dongjing + shuttle',
        tips: ['It is huge - allow 4+ hours', 'Greenhouses run hot - dress lightly', 'Rent a bicycle to get around']
      },
      closed: null
    },
    {
      id: 'century-park', cat: 'garden', icon: '🌸', img: 'century-park.jpg', stars: 3,
      zh: {
        name: '世纪公园', sub: '城市中心的自然氧吧',
        desc: '上海市中心最大的生态公园，超大草坪与樱花林，适合露营、骑行、放风筝。',
        price: '约 ¥10', hours: '约 07:00 – 18:00', duration: '2 – 3 小时',
        metro: '2 号线世纪公园站',
        tips: ['樱花季（3–4 月）人流极大，建议错峰', '园区较大，可租自行车', '适合亲子野餐']
      },
      en: {
        name: 'Century Park', sub: 'Green Lung in the City Centre',
        desc: 'The largest ecological park in central Shanghai, with big lawns and cherry groves - perfect for picnics, cycling and kite flying.',
        price: 'About ¥10', hours: 'About 07:00 – 18:00', duration: '2 – 3 hours',
        metro: 'Line 2 Century Park',
        tips: ['Cherry season (Mar–Apr) gets very busy - go off-peak', 'Rent a bike; the park is large', 'Great for a family picnic']
      },
      closed: null
    }
  ];

  return { cats: cats, attractions: attractions };
})();
