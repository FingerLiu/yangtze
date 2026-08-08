import { l } from '../i18n'
import type { Photo } from './types'

// 静态 import：文件不存在会在构建期报错，而不是上线后 404。
// 全部图片来自 Wikimedia Commons，仅收公有领域 / CC0 / CC BY / CC BY-SA，
// 统一缩放裁剪为 1200×800 后转 WebP，故 modified 均为 true。
import baihetan from '../assets/photos/baihetan.webp'
import chongqing from '../assets/photos/chongqing.webp'
import dongting from '../assets/photos/dongting.webp'
import dujiangyan from '../assets/photos/dujiangyan.webp'
import guazhou from '../assets/photos/guazhou.webp'
import hutiaoxia from '../assets/photos/hutiaoxia.webp'
import jiangnan from '../assets/photos/jiangnan.webp'
import jinshajiang from '../assets/photos/jinshajiang.webp'
import nanjing from '../assets/photos/nanjing.webp'
import panxi from '../assets/photos/panxi.webp'
import poyang from '../assets/photos/poyang.webp'
import sanxia from '../assets/photos/sanxia.webp'
import sanxingdui from '../assets/photos/sanxingdui.webp'
import shanghai from '../assets/photos/shanghai.webp'
import tuotuohe from '../assets/photos/tuotuohe.webp'
import wuhan from '../assets/photos/wuhan.webp'
import yichangJingzhou from '../assets/photos/yichang-jingzhou.webp'

const W = 1200
const H = 800

export const PHOTOS = {
  tuotuohe: {
    src: tuotuohe,
    width: W,
    height: H,
    alt: l(
      '沱沱河宽阔的辫状河道与沙洲',
      'The braided channels and sandbars of the Tuotuo River',
      '沱沱河の網状の流路と砂州',
    ),
    caption: l(
      '沱沱河：长江源头的水还没有汇成一条大江，而是散作无数细流',
      'At the source the Yangtze is not yet one river, but countless threads of meltwater',
      '源流の水はまだ一本の大河にならず、無数の細流に分かれています',
    ),
    credit: {
      author: 'mayanming',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:%E6%B2%B1%E6%B2%B1%E6%B2%B3_-_panoramio.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
      modified: true,
    },
  },
  jinshajiang: {
    src: jinshajiang,
    width: W,
    height: H,
    alt: l('金沙江在群山间转折的河谷', 'The Jinsha River turning through steep mountains', '山あいで向きを変える金沙江の谷'),
    caption: l(
      '长江第一湾：江水在石鼓折向东北，从此奔向中国腹地',
      'The First Bend at Shigu, where the river swings northeast toward the heart of China',
      '石鼓の「長江第一湾」。ここで川は北東へ折れ、中国の内陸へ向かいます',
    ),
    credit: {
      author: 'User:Shizhao',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:%E9%95%BF%E6%B1%9F%E7%AC%AC%E4%B8%80%E6%B9%BE.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
      modified: true,
    },
  },
  hutiaoxia: {
    src: hutiaoxia,
    width: W,
    height: H,
    alt: l('虎跳峡陡峭的崖壁与湍急的江水', 'Sheer cliffs and rapids in Tiger Leaping Gorge', '虎跳峡の切り立った岩壁と急流'),
    caption: l(
      '虎跳峡：两岸雪山夹峙，江面收束成一条白色的激流',
      'Snow peaks press in from both banks and the river narrows into white water',
      '両岸に雪山が迫り、川は白い激流となって狭まります',
    ),
    credit: {
      author: 'CEphoto, Uwe Aranas',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yunnan_China_Tiger-Leaping-Gorge-04.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
      modified: true,
    },
  },
  panxi: {
    src: panxi,
    width: W,
    height: H,
    alt: l('西昌邛海的湖面与远处山峦', 'Qionghai Lake at Xichang with distant ranges', '西昌・邛海の湖面と遠くの山なみ'),
    caption: l(
      '攀西河谷的邛海：横断山脉之间的断陷湖泊',
      'Qionghai, a fault lake cradled among the Hengduan ranges',
      '横断山脈のあいだに開けた断層湖・邛海',
    ),
    credit: {
      author: '杨志强Zhiqiang',
      license: 'CC BY-SA 3.0',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:%E8%A5%BF%E6%98%8C%E9%82%9B%E6%B5%B7%E9%A3%8E%E5%85%89Xichang_Qionghai_Lake_scenery_-_panoramio.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
      modified: true,
    },
  },
  sanxingdui: {
    src: sanxingdui,
    width: W,
    height: H,
    alt: l('三星堆出土的青铜兽面', 'A bronze animal mask excavated at Sanxingdui', '三星堆から出土した青銅の獣面'),
    caption: l(
      '三星堆青铜兽面：一个不见于中原典籍的古蜀神性世界',
      'A bronze mask from a sacred world that Central Plains texts never recorded',
      '中原の文献に現れない古蜀の神々の世界を伝える青銅器',
    ),
    credit: {
      author: 'Gary Todd',
      license: 'CC0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bronze_Animal_Mask_from_Sanxingdui_3.jpg',
      licenseUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en',
      modified: true,
    },
  },
  dujiangyan: {
    src: dujiangyan,
    width: W,
    height: H,
    alt: l('都江堰鱼嘴把岷江分为内外两江', 'The Yuzui levee splitting the Min River in two', '岷江を二つに分ける都江堰の魚嘴'),
    caption: l(
      '鱼嘴：不筑坝，只用一道分水堤把岷江劈成内外两江',
      'No dam — a single wedge of levee divides the Min River into inner and outer streams',
      'ダムを築かず、一つの分水堤で岷江を内江と外江に分けます',
    ),
    credit: {
      author: 'George Wenn',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yuzui,%E9%B1%BC%E5%98%B4_-_panoramio.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
      modified: true,
    },
  },
  baihetan: {
    src: baihetan,
    width: W,
    height: H,
    alt: l('建设中的溪洛渡水电站坝体', 'The Xiluodu dam under construction', '建設中の渓洛渡ダム'),
    caption: l(
      '建设中的溪洛渡水电站 —— 与白鹤滩同在金沙江下游梯级上',
      'Xiluodu under construction — one step in the Jinsha River cascade that also carries Baihetan',
      '建設中の渓洛渡ダム。白鶴灘と同じ金沙江下流の階梯開発の一段です',
    ),
    credit: {
      author: '董辰兴',
      license: 'CC BY-SA 4.0',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:%E6%BA%AA%E6%B4%9B%E6%B8%A1%E6%B0%B4%E7%94%B5%E7%AB%992011%E4%B8%8A%E6%B8%B8.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
      modified: true,
    },
  },
  chongqing: {
    src: chongqing,
    width: W,
    height: H,
    alt: l('重庆依山而建的城区与两江', 'Chongqing rising on hills between two rivers', '山に沿って建つ重慶の市街と二つの川'),
    caption: l(
      '重庆：山与江把城市推向垂直生长',
      'Hills and rivers push the city to grow vertically',
      '山と川が、街を垂直に伸ばしました',
    ),
    credit: {
      author: 'Oliver Ren',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:SkylineOfChongqing.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
      modified: true,
    },
  },
  sanxia: {
    src: sanxia,
    width: W,
    height: H,
    alt: l('瞿塘峡夔门两侧的绝壁', 'The cliffs of Kui Gate at Qutang Gorge', '瞿塘峡・夔門の絶壁'),
    caption: l(
      '瞿塘峡夔门：长江在这里被两山夹成一道窄门',
      'At Kui Gate two mountains squeeze the Yangtze into a single narrow door',
      '夔門では、二つの山が長江を一枚の狭い門に絞り込みます',
    ),
    credit: {
      author: 'Tan Wei Liang Byorn',
      license: 'CC BY 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Qutang_Gorge_on_Changjiang.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by/3.0',
      modified: true,
    },
  },
  'yichang-jingzhou': {
    src: yichangJingzhou,
    width: W,
    height: H,
    alt: l('荆州古城墙与城楼', 'The city wall and gate tower of Jingzhou', '荊州の城壁と城楼'),
    caption: l(
      '荆州古城墙：三国故事里反复易手的那座城',
      'Jingzhou — the city that changed hands again and again in the Three Kingdoms',
      '三国志で幾度も持ち主が変わった街の城壁',
    ),
    credit: {
      author: 'Popolon',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Muraille_Est_de_Jingzhou.JPG',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
      modified: true,
    },
  },
  dongting: {
    src: dongting,
    width: W,
    height: H,
    alt: l('岳阳楼临洞庭湖而立', 'Yueyang Tower standing above Dongting Lake', '洞庭湖を臨む岳陽楼'),
    caption: l(
      '岳阳楼：范仲淹在这里写下"先天下之忧而忧"',
      'Where Fan Zhongyan wrote of grieving before the world grieves',
      '范仲淹が「天下に先んじて憂う」と記した楼閣',
    ),
    credit: {
      author: '陈霆, Ting Chen, Wing',
      license: 'CC BY-SA 2.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:%E5%B2%B3%E9%98%B3%E6%A5%BC_August_2016_in_China.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0',
      modified: true,
    },
  },
  wuhan: {
    src: wuhan,
    width: W,
    height: H,
    alt: l('黄鹤楼与牌坊', 'The Yellow Crane Tower seen through a memorial gate', '牌坊ごしに見る黄鶴楼'),
    caption: l(
      '黄鹤楼：屡毁屡建，今天这一座落成于 1985 年',
      'Destroyed and rebuilt many times; the tower standing today was completed in 1985',
      '幾度も焼失と再建を重ね、現在の楼は 1985 年の竣工です',
    ),
    credit: {
      author: 'Nature42',
      license: 'CC0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:%E9%BB%84%E9%B9%A4%E6%A5%BC%E5%A4%96%E6%99%AF.jpg',
      licenseUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en',
      modified: true,
    },
  },
  poyang: {
    src: poyang,
    width: W,
    height: H,
    alt: l('鄱阳湖枯水期的滩涂与越冬候鸟', 'Mudflats and wintering birds on Poyang Lake in the dry season', '渇水期の鄱陽湖の干潟と越冬する渡り鳥'),
    caption: l(
      '枯水期的鄱阳湖：水退成河，滩涂成为候鸟的越冬地',
      'In the dry season the lake shrinks to rivers, and the flats become a wintering ground',
      '渇水期には湖が川に痩せ、干潟が渡り鳥の越冬地になります',
    ),
    credit: {
      author: 'Zhangzhugang',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Poyang_Baishazhou_2017.11.25_15-05-05.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
      modified: true,
    },
  },
  nanjing: {
    src: nanjing,
    width: W,
    height: H,
    alt: l('南京明城墙沿水岸延伸', 'The Ming city wall of Nanjing running along the water', '水辺に沿って延びる南京の明代城壁'),
    caption: l(
      '南京明城墙：现存世界上最长的古代城垣之一',
      'One of the longest surviving ancient city walls in the world',
      '現存する古代城壁としては世界有数の長さを誇ります',
    ),
    credit: {
      author: 'xiquinhosilva',
      license: 'CC BY 2.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nanjing_City_Wall_03.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
      modified: true,
    },
  },
  guazhou: {
    src: guazhou,
    width: W,
    height: H,
    alt: l('扬州古运河的河道与两岸绿荫', 'The Old Grand Canal at Yangzhou, shaded by trees', '緑陰にはさまれた揚州の古運河'),
    caption: l(
      '扬州古运河：南来北往的漕船曾从这里进入长江',
      'Grain barges bound north and south entered the Yangtze from here',
      '南北を行き交う漕船は、ここから長江へ入りました',
    ),
    credit: {
      author: 'Vmenkov',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yangzhou-Old-Grand-Canal-3301.JPG',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
      modified: true,
    },
  },
  jiangnan: {
    src: jiangnan,
    width: W,
    height: H,
    alt: l('周庄水乡的河道、石桥与临水民居', 'Canals, stone bridges and waterside houses at Zhouzhuang', '周荘の水路と石橋、水辺の家並み'),
    caption: l(
      '周庄：江南水网把街巷、店铺与河道织在一起',
      'In Jiangnan the water network weaves together lanes, shopfronts and canals',
      '江南の水網が、路地と店と水路を一枚に織り上げます',
    ),
    credit: {
      author: 'Mattias Hill',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Zhouzhuang_water_town.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
      modified: true,
    },
  },
  shanghai: {
    src: shanghai,
    width: W,
    height: H,
    alt: l('黄浦江与浦东天际线', 'The Huangpu River and the Pudong skyline', '黄浦江と浦東のスカイライン'),
    caption: l(
      '黄浦江与浦东：长江把最后一段航程交给了这座港口城市',
      'The river hands its final reach to a port city',
      '長江は最後の行程を、この港湾都市に託します',
    ),
    credit: {
      author: 'Lloyd Tudor',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_skyline_of_Pudong_from_the_Huangpu_river.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
      modified: true,
    },
  },
} satisfies Record<string, Photo>
