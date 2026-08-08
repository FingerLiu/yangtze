// 由 scratchpad/gen_stories.py 从各条目的调研产物生成 —— 长文与延伸阅读。
// 与 locations.ts / events.ts 按 id 关联，在那两个文件末尾合并进 Facet.story 等字段。
import { l } from '../i18n'
import type { FacetKey, L10n, RefLink } from './types'

export interface LocationStory {
  facets: Partial<Record<FacetKey, L10n[]>>
  links?: RefLink[]
}

export const LOCATION_STORIES: Record<string, LocationStory> = {
  "baihetan": {
    facets: {
      nature: [
        l("白鹤滩坝址在云南巧家县与四川宁南县之间的金沙江上。坝体是混凝土双曲拱坝，最大坝高二百八十九米，坝顶高程八百三十四米，底部厚七十二米，到坝顶收成十三米——靠拱的形状，把江水的推力交给两岸山体。", "Baihetan sits on the Jinsha where it divides Qiaojia county in Yunnan from Ningnan in Sichuan. The wall is a double-curvature concrete arch: 289 metres at its highest, its crest 834 metres above sea level, seventy-two metres thick at the foot and tapering to thirteen at the top. The curve is the point — it hands the river's push sideways into the mountains.", "白鶴灘のダムサイトは、雲南省巧家県と四川省寧南県のあいだを流れる金沙江にあります。堤体はコンクリート二重曲面アーチダム。最大堤高289メートル、堤頂の標高は834メートル、底部の厚さ72メートルが頂部では13メートルまで絞られます。アーチという形が、水の押す力を両岸の岩盤へ受け流すのです。"),
        l("水库总库容一百七十九亿立方米。左右两岸的地下厂房各装八台机组，单机容量一百万千瓦，是世界上第一批百万千瓦级水轮发电机组；总装机一千六百万千瓦，仅次于三峡，多年平均发电量六百四十一亿千瓦时。", "The reservoir holds 17.9 billion cubic metres. Eight generating units are buried in the rock of each bank, sixteen in all, each rated at a full gigawatt — the first gigawatt-class hydro turbines anywhere in the world. Together they come to 16,000 megawatts, second only to the Three Gorges, and average 64.1 terawatt-hours a year.", "貯水池の総容量は179億立方メートル。左右両岸の地下発電所に8基ずつ、計16基の発電機が据えられ、1基あたりの出力は100万キロワット——世界で初めての百万キロワット級水車発電機です。総出力1600万キロワットは三峡に次ぐ規模で、年平均発電量は641億キロワット時にのぼります。"),
        l("代价同样具体：三十二个村庄、五万零一百七十八人为这座水库搬迁。2008年动工，2021年6月28日首批机组投产，2022年12月20日全部投产。十余年间，一段峡谷被换成了一座水库和一堵墙。", "The price is equally exact: thirty-two villages and 50,178 people moved to make room for the water. Ground was broken in 2008; the first units went live on 28 June 2021 and the last on 20 December 2022. In a little over a decade, a length of gorge became a reservoir and a wall.", "代償もまた具体的です。32の村、50,178人が水のために移りました。2008年に着工、2021年6月28日に最初の機組が発電を開始し、2022年12月20日に全機が稼働。十数年で、ひと続きの峡谷が貯水池と一枚の壁に置き換わりました。"),
      ],
      history: [
        l("更靠下游，云南永善县与四川雷波县之间的溪洛渡峡谷里，还站着另一座双曲拱坝：最大坝高285.5米，坝顶长七百米。2005年12月26日开工，2013年7月15日首台机组发电，2014年6月30日十八台机组全部投产，总装机一千三百八十六万千瓦。", "Further downstream, in the Xiluodu gorge between Yongshan county in Yunnan and Leibo in Sichuan, a second double-curvature arch dam rises 285.5 metres with a crest seven hundred metres long. Work began on 26 December 2005; the first generator turned on 15 July 2013 and the eighteenth on 30 June 2014, for a combined 13,860 megawatts.", "さらに下流、雲南省永善県と四川省雷波県にはさまれた渓洛渡峡谷にも、もう一基の二重曲面アーチダムが立っています。最大堤高285.5メートル、堤頂長700メートル。2005年12月26日に着工し、2013年7月15日に初号機、2014年6月30日に18号機が運転を開始、総出力は1386万キロワットです。"),
        l("溪洛渡不只发电。126.7亿立方米的库容还承担防洪与拦沙，并改善下游航运条件。乌东德、白鹤滩、溪洛渡、向家坝，四座巨型电站在金沙江下游连成阶梯，与三峡一道被称作世界最大的清洁能源走廊。", "Xiluodu was never only about electricity. Its 12.67 billion cubic metres of storage also catch floods, trap sediment and steady the channel for boats below. Wudongde, Baihetan, Xiluodu, Xiangjiaba: four giants stepping down the lower Jinsha, and together with the Three Gorges they are called the world's largest clean-energy corridor.", "渓洛渡の役目は発電だけではありません。126.7億立方メートルの貯水は洪水を受け止め、土砂を捉え、下流の航行条件を整えます。烏東徳・白鶴灘・渓洛渡・向家壩——金沙江下流に連なる四基の巨大発電所は、三峡とともに世界最大級のクリーンエネルギー回廊と呼ばれています。"),
        l("从都江堰到这里，隔着两千两百多年。李冰不筑坝，把岷江交给鱼嘴和飞沙堰去分；这里则把整条金沙江拦下来，再一格一格放走。同一个问题——人可以向一条河借多少——给出的是两种截然不同的答案。", "Twenty-two centuries separate this place from Dujiangyan. Li Bing refused to build a dam and let the Fish Mouth and the Flying Sand Weir divide the Min for him. Here the whole Jinsha is stopped, then released one step at a time. The same question — how much of a river may we borrow — answered in two entirely different tempers.", "都江堰からここまで、二千二百年あまり。李冰はダムを築かず、岷江の分配を魚嘴と飛沙堰に委ねました。ここでは金沙江を丸ごとせき止め、段ごとに放ちます。「人は川からどれだけ借りてよいのか」という同じ問いに、まるで気質の違う二つの答えが出されたのです。"),
      ],
    },
    links: [
      {
        label: l("白鹤滩水电站", "Baihetan Dam", "白鶴灘水力発電所"),
        href: { zh: "https://zh.wikipedia.org/wiki/白鹤滩水电站", en: "https://en.wikipedia.org/wiki/Baihetan_Dam" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("溪洛渡水电站", "Xiluodu Dam", "渓洛渡ダム"),
        href: { zh: "https://zh.wikipedia.org/wiki/溪洛渡水电站", en: "https://en.wikipedia.org/wiki/Xiluodu_Dam", ja: "https://ja.wikipedia.org/wiki/渓洛渡ダム" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "chongqing": {
    facets: {
      nature: [
        l("重庆城长在两江交汇的尖角上：嘉陵江在朝天门汇入长江，市区从这个楔子向后铺开。它坐落在四川盆地东缘的过渡地带，北面是大巴山，境内被江河与山岭反复切割，平地极少。", "Chongqing grew on a wedge of land where two rivers meet: the Jialing comes down to join the Yangtze at Chaotianmen, and the city spreads back from that point. It sits on the eastern rim of the Sichuan Basin with the Daba Mountains rising to the north, its ground cut and re-cut by rivers and ridges until very little of it is flat.", "重慶の街は、二つの川が出会う楔のような土地に育ちました。嘉陵江が朝天門で長江に注ぎ、市街はその尖端から後ろへ広がっていきます。四川盆地の東縁にあたる遷移帯に位置し、北には大巴山。市域は川と尾根に幾度も刻まれ、平らな土地はごくわずかです。"),
        l("落差是这座城市的性格。市域平均海拔约二百四十四米，最高的阴条岭却有二千七百九十七米。雾从江面升起，一年有一百多天；夏天又与武汉、南京并称\"三大火炉\"，2022年8月18日至19日曾录得43.7摄氏度。", "Altitude is the city's temperament. The municipality averages some 244 metres above sea level, yet its highest summit, Yintiao Ling, reaches 2,797. Fog climbs off the rivers on more than a hundred days a year; in summer Chongqing is counted with Wuhan and Nanjing among China's \"three furnaces\", and on 18–19 August 2022 the thermometer touched 43.7°C.", "高低差こそ、この街の気質です。市域の平均標高は約244メートル、いっぽう最高峰の陰条嶺は2797メートルに達します。川面から立ちのぼる霧の日は年に百日を超え、夏は武漢・南京と並ぶ「三大かまど」。2022年8月18日から19日にかけては43.7度を記録しました。"),
      ],
      culture: [
        l("火锅是码头的产物。朝天门一带屠宰业兴旺，搬运工能便宜甚至白得牛油与牛下水，便用牛油爆香辣椒花椒，再把毛肚、肝腰、血旺丢进去煮。起源有明末清初、也有清代道光年间的说法；到1934年，城里已开出成规模的麻辣饭店。", "Hotpot is a child of the docks. Around Chaotianmen the slaughter trade was brisk, and porters could get beef tallow and offal cheap or for nothing; they fried chilli and Sichuan pepper in the tallow and dropped in tripe, liver, kidney and blood curd. Some date it to the end of the Ming, others to the Daoguang reign; by 1934 the city had málà restaurants of real size.", "火鍋は埠頭が生んだ食べものです。朝天門あたりは食肉処理が盛んで、荷役の人夫たちは牛脂や牛のもつを安く、ときにはただで手に入れられました。牛脂で唐辛子と花椒を炒め、ハチノスやレバー、腰、血のかたまりを放り込む。起源は明末清初とも清の道光年間とも言われ、1934年には市内にまとまった規模の麻辣料理店が現れています。"),
        l("地形逼出了另一种日常。楼与楼之间靠梯坎、索道和高架相连，李子坝站的轻轨干脆从一栋居民楼中间穿过去——那不是奇观，那是通勤。", "The terrain forces its own daily habits. Buildings are stitched together by stair-streets, cable cars and viaducts, and at Liziba the light rail runs clean through the middle of an apartment block — not a spectacle, just the commute.", "地形が日常の作法を決めます。建物と建物は階段や索道、高架でつながれ、李子壩駅ではモノレールがマンションの真ん中を貫いて走ります。見せ物ではなく、ただの通勤風景です。"),
        l("热闹之下还压着更重的一层。1189年，这里得名\"重庆\"，取双重喜庆之意；1937年国民政府迁来，1940年9月6日正式定为陪都，直到1946年5月还都，其间连年遭受轰炸。1997年，重庆成为直辖市。", "Beneath the noise lies a heavier layer. The city took the name Chongqing — \"doubled celebration\" — in 1189. The Nationalist government moved here in 1937, formally declared it the second capital on 6 September 1940, and stayed until May 1946, through years of bombing. In 1997 Chongqing became a municipality answering directly to the central government.", "賑わいの下には、もっと重い層が沈んでいます。1189年、この地は「重慶」——二重の慶び——と名づけられました。1937年に国民政府が遷り、1940年9月6日には正式に陪都と定められ、1946年5月に還都するまで、爆撃の年月が続きます。1997年、重慶は直轄市となりました。"),
      ],
    },
    links: [
      {
        label: l("重庆市", "Chongqing", "重慶市"),
        href: { zh: "https://zh.wikipedia.org/wiki/重庆市", en: "https://en.wikipedia.org/wiki/Chongqing", ja: "https://ja.wikipedia.org/wiki/重慶市" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("重庆火锅", "Chongqing hot pot", "重慶火鍋"),
        href: { zh: "https://zh.wikipedia.org/wiki/重庆火锅", en: "https://en.wikipedia.org/wiki/Chongqing_hot_pot", ja: "https://ja.wikipedia.org/wiki/重慶火鍋" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "dongting": {
    facets: {
      nature: [
        l("洞庭湖与其说是一个湖，不如说是一套吞吐系统。南面纳湘、资、沅、澧四水，北面由松滋、太平、藕池三口分入荆江的洪水；蓄满之后，再从东端城陵矶一条长约十四公里、平均宽一公里的水道，把水还给长江。", "Dongting is less a lake than a set of lungs. From the south it takes in the Xiang, Zi, Yuan and Li; from the north, three breaches on the Jingjiang bank — Songzi, Taiping and Ouchi — push the river's floodwater in. When it has drunk its fill it hands the water back through a single channel at Chenglingji, some fourteen kilometres long and on average a kilometre wide.", "洞庭湖はひとつの湖というより、ひと組の肺である。南からは湘・資・沅・澧の四水を吸い込み、北からは松滋・太平・藕池の三口を通って荊江の洪水が流れ込む。飲みきったあとは、東端の城陵磯にある長さ約十四キロ、幅平均一キロの水路から、水を長江へ返す。"),
        l("「八百里洞庭」并非虚辞：清顺治至道光年间，汛期湖面曾达约六千平方公里。此后泥沙淤积与围湖造田不断削减它——1896年四千三百五十平方公里，1949年三千九百一十五，1983年只剩两千六百二十五，湖体也被切成东、南、西三片。", "\"Eight hundred li of Dongting\" was no poet's exaggeration: between the Shunzhi and Daoguang reigns of the Qing the flood-season surface reached some 6,000 square kilometres. Silt and the steady conversion of water into paddy then ate it away — 4,350 km² in 1896, 3,915 in 1949, only 2,625 by 1983 — and the body itself was cut into an eastern, a southern and a western lake.", "「八百里洞庭」は誇張ではなかった。清の順治から道光にかけて、増水期の湖面は約六千平方キロに達したという。その後、土砂の堆積と囲湖造田が湖を削っていく。1896年に4350平方キロ、1949年に3915、1983年には2625。湖体そのものも東・南・西の三つに裂かれた。"),
        l("1998年长江大水之后，「退田还湖」重新给湖让路，目标是把高洪水位时的湖面恢复到四千三百五十平方公里。今天天然湖面约两千八百二十平方公里，连同还湖的堤垸共约三千九百六十八。湖退一步，冬天的洲滩就多一片候鸟落脚的地方。", "After the great flood of 1998 the polders began to be handed back: the stated goal was to restore 4,350 square kilometres at high water. Today the natural lake covers about 2,820 km², rising to roughly 3,968 once the returned embankments are counted. Every step the farmland retreats is another sandbar for the geese to stand on in winter.", "1998年の大洪水ののち、「退田還湖」——田を退けて湖に返す政策がはじまる。高水位時に4350平方キロを取り戻すのが目標だった。現在の天然湖面は約2820平方キロ、還湖分を合わせて約3968。田が一歩退くごとに、冬の渡り鳥が降り立つ干潟がひとつ増える。"),
      ],
      history: [
        l("建安十三年（208年）冬，曹操号称八十万众南下，周瑜估其实数不过二十余万，而孙刘联军约五万。黄盖诈降，载薪的船队顺风撞入连环战舰，火起，北军溃。此后曹操再无力越江，三分之势由此定形。", "In the winter of 208 Cao Cao came south with a host he called eight hundred thousand; Zhou Yu reckoned the true number nearer two hundred thousand, against some fifty thousand allied troops. Huang Gai sent a letter offering surrender, then sailed a squadron packed with kindling downwind into Cao's chained fleet, fired it and slipped away. The north never crossed the river again, and the Three Kingdoms took their shape.", "建安十三年（208年）の冬、曹操は八十万と号する軍を率いて南下した。周瑜の見立てでは実数二十数万、対する孫劉連合軍は約五万。黄蓋は偽りの降伏状を送り、薪を積んだ船団を風に乗せて連環の艦隊へ突入させ、火を放って離脱する。北軍は崩れ、以後曹操が江を越えることはなかった。"),
        l("赤壁究竟在哪里，争了一千三百多年。今湖北赤壁市原名蒲圻，1998年才改用这个名字；嘉鱼、武昌一带亦各有其说，战场的确切位置至今没有定论。被后世记住的从来不是坐标，而是那一夜的火。", "Where exactly the Red Cliffs stood has been argued for more than thirteen centuries. The city that carries the name today was plain Puqi until 1998; Jiayu and Wuhan press rival claims, and the site has never been conclusively settled. What survived was never a set of coordinates. It was a fire on the water, one night.", "赤壁がどこであったかは、千三百年以上争われてきた。いま「赤壁市」を名のる街は1998年まで蒲圻といい、嘉魚にも武漢にも別の説がある。座標はついに定まらない。後世が記憶したのは場所ではなく、あの一夜の火だった。"),
        l("同一年，东吴鲁肃在洞庭湖畔的城头筑起阅军楼，用以检阅水军，那便是岳阳楼的前身。1046年，从未登临此楼的范仲淹为它写下「先天下之忧而忧，后天下之乐而乐」。今天所见的楼，是清光绪六年（1880年）重建的。", "That same year, on the wall above Dongting, the Wu general Lu Su raised a platform for reviewing his navy — the ancestor of Yueyang Tower. In 1046 Fan Zhongyan, who had never once climbed it, wrote for it the line that became a credo: worry before the world worries, take pleasure after the world takes pleasure. The tower you climb today was rebuilt in 1880.", "同じ年、呉の魯粛は洞庭湖を見下ろす城壁の上に、水軍を閲するための楼を築いた。岳陽楼の前身である。1046年、一度も登ったことのない范仲淹がこの楼のために「天下の憂いに先んじて憂い、天下の楽しみに後れて楽しむ」と書いた。いま建つ楼は清の光緒六年（1880年）の再建である。"),
      ],
    },
    links: [
      {
        label: l("洞庭湖", "Dongting Lake", "洞庭湖"),
        href: { zh: "https://zh.wikipedia.org/wiki/洞庭湖", en: "https://en.wikipedia.org/wiki/Dongting_Lake", ja: "https://ja.wikipedia.org/wiki/洞庭湖" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("赤壁之战", "Battle of Red Cliffs", "赤壁の戦い"),
        href: { zh: "https://zh.wikipedia.org/wiki/赤壁之战", en: "https://en.wikipedia.org/wiki/Battle_of_Red_Cliffs", ja: "https://ja.wikipedia.org/wiki/赤壁の戦い" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("岳阳楼", "Yueyang Tower", "岳陽楼"),
        href: { zh: "https://zh.wikipedia.org/wiki/岳阳楼", en: "https://en.wikipedia.org/wiki/Yueyang_Tower", ja: "https://ja.wikipedia.org/wiki/岳陽楼" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "dujiangyan": {
    facets: {
      history: [
        l("秦国蜀郡守李冰约在公元前256年至前251年间主持始建。玉垒山横在岷江东岸，没有火药可用，工匠便在岩壁上堆柴纵火，烧透后再泼冷水，让岩石在骤冷中开裂，一层层剥下来。凿通后的宝瓶口，进水处宽七十米，出水处收到四五十米。", "Li Bing, governor of Shu for the state of Qin, began the works around 256–251 BCE. Mount Yulei stood in the way on the Min River's eastern bank, and there was no gunpowder. So the crews stacked brushwood against the cliff, set it alight, then doused the glowing rock with cold water until it split and could be prised away in layers. The channel they finally cut takes water in seventy metres wide and lets it out at forty to fifty.", "秦の蜀郡守・李冰が、紀元前256年から前251年ごろにかけて築き始めました。岷江の東岸には玉塁山が立ちはだかり、火薬はまだありません。そこで職人たちは岩壁に薪を積んで火を放ち、焼けきったところへ冷水を浴びせ、急冷で割れた岩を層ごとに剥がしていきました。こうして開いた宝瓶口は、入口が幅70メートル、出口は40〜50メートルに絞られています。"),
        l("三个部件其实只在做算术。鱼嘴按季节分水：春旱时六成入内江灌田，洪期六成推向外江。飞沙堰更巧，内江流量一过每秒一千立方米，约四成洪水与九成八的泥沙就被甩回外江。不设坝、不设闸，让河自己完成筛选。", "The three parts are really doing arithmetic. The Fish Mouth divides by season: in the dry spring six parts in ten go inward to the fields, in flood six parts are pushed back out to the outer river. The Flying Sand Weir is subtler still — once the inner flow passes a thousand cubic metres a second, roughly forty per cent of the flood and ninety-eight per cent of the silt is flung back out. No dam, no gate: the river sorts itself.", "三つの仕掛けは、要するに算術をしています。魚嘴は季節で水を分け、春の渇水期は六割を内江へ、洪水期は六割を外江へ送ります。飛沙堰はさらに巧妙で、内江の流量が毎秒1000立方メートルを超えると、洪水の約四割と土砂の九割八分が外江へ弾き返されます。ダムも水門も置かず、川自身に選り分けさせるのです。"),
        l("它一直在长大。1937年统计灌田二百六十三万余亩，如今超过一千万亩。1974年，外江河床里挖出一尊李冰石像，落款是东汉建宁元年（168年）——离他去世已近四百年，人们还在为他立像。2000年，都江堰与青城山一同列入世界遗产。", "It has never stopped growing. In 1937 it watered some 2.64 million mu; today more than ten million. In 1974 a stone statue of Li Bing was lifted out of the outer riverbed, its inscription dated to 168 CE — four centuries after his death, people were still carving him. In 2000 Dujiangyan and Mount Qingcheng entered the World Heritage list together.", "この水利は育ち続けました。1937年の灌漑面積は263万余畝、いまは一千万畝を超えます。1974年には外江の川床から李冰の石像が現れました。銘は後漢・建寧元年（168年）。没後四百年近く経ってなお、人々は像を刻んでいたのです。2000年、都江堰は青城山とともに世界遺産に登録されました。"),
      ],
    },
    links: [
      {
        label: l("都江堰", "Dujiangyan", "都江堰"),
        href: { zh: "https://zh.wikipedia.org/wiki/都江堰", en: "https://en.wikipedia.org/wiki/Dujiangyan", ja: "https://ja.wikipedia.org/wiki/都江堰" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("世界遗产：青城山与都江堰", "UNESCO: Mount Qingcheng and the Dujiangyan Irrigation System", "世界遺産：青城山と都江堰"),
        href: { en: "https://whc.unesco.org/en/list/1001" },
        source: l("联合国教科文组织", "UNESCO", "ユネスコ"),
      },
    ],
  },
  "guazhou": {
    facets: {
      history: [
        l("公元前486年，吴王夫差开邗沟，把长江和淮河接在一起；第二年又在南端筑起邗城，那就是扬州的起点。隋炀帝在604至609年间把各段贯通，一条长约一千七百七十六公里的水路，从此把北方的粮和南方的丝拴在同一根绳上。", "In 486 BC King Fuchai of Wu cut the Han Gou, tying the Yangtze to the Huai; the following year he raised a fort at its southern end, and that fort became Yangzhou. Between 604 and 609 Emperor Yang of Sui joined the separate reaches into one — some 1,776 km of water that from then on bound northern grain and southern silk to a single rope.", "紀元前486年、呉王夫差が邗溝を開き、長江と淮河を結んだ。翌年その南端に築いた邗城が、揚州のはじまりである。604年から609年にかけて隋の煬帝が各区間をつなぎ合わせ、およそ1776キロの水路が完成した。北の穀物と南の絹が、一本の綱で結ばれたのである。"),
        l("瓜洲原是江心一块沙洲，晋代才浮出水面，形如瓜，故得名。唐代中期与北岸连成一片；开元年间齐澣开伊娄河二十五里接上运河，南北的运河与东西的长江在此画成一个十字，商船就此挤满了渡口。", "Guazhou began as a sandbank in mid-river, surfacing only in the Jin dynasty; shaped like a melon, it took the melon's name. By the mid-Tang it had joined the northern shore, and in the Kaiyuan years Qi Huan dug the twenty-five-li Yilou Channel to bring the canal down to it. North–south canal and east–west river crossed here, and the ferry filled with merchant hulls.", "瓜洲はもと川の中の砂州で、晋代にようやく水面に現れた。瓜のかたちゆえの名である。唐代なかばには北岸と地続きになり、開元年間、斉澣が伊婁河二十五里を掘って運河をここへ導いた。南北の運河と東西の長江が十字に交わり、渡し場は商船で埋まった。"),
        l("唐时扬州住着新罗、大食、波斯的商人；明清两淮盐运使司设在城中，盐商富可敌国，1818年黄至筠就在旧园基上造起个园。而瓜洲镇本身没有这么好运：1895年被江水一寸寸啃尽，全城坍入江中——渡口的名字留下了，镇子没有。", "Tang Yangzhou housed Korean, Arab and Persian traders; under the Ming and Qing the Lianghuai salt commission sat in the city, and its salt merchants were rich beyond reckoning — in 1818 Huang Zhijun raised the Ge Garden on an older garden's ground. Guazhou itself was less lucky: in 1895 the river ate the last of it and the whole town slid into the water. The name of the crossing survived; the town did not.", "唐の揚州には新羅・大食・ペルシアの商人が住んだ。明清には両淮塩運使司が置かれ、塩商の富は国に比した。1818年、黄至筠は旧園の跡に個園を築いている。だが瓜洲の町そのものは幸運ではなかった。1895年、川に少しずつ削られ、ついに全域が江中へ崩れ落ちる。渡し場の名だけが残った。"),
      ],
      culture: [
        l("宋人王安石泊船于此，写下「京口瓜洲一水间，钟山只隔数重山」；末句「春风又绿江南岸，明月何时照我还」，把一个渡口写成了所有人的归途。陆游后来一句「楼船夜雪瓜洲渡」，又把同一处渡口写成了未竟的北伐。", "Wang Anshi moored here one night and wrote: Jingkou and Guazhou, one water apart. His closing lines — the spring wind has greened the southern bank again; when will the moon light me home? — turned a ferry stage into everyone's way back. Lu You later set a single line at the same crossing, war-junks in the night snow at Guazhou, and made it a northern campaign that never came.", "宋の王安石はここに舟を泊め、「京口瓜洲一水の間」と詠んだ。結びの「春風 又緑にす 江南の岸、明月 何れの時か 我を照らして還らん」は、ひとつの渡し場を、誰にとっての帰路にも変えてしまう。のちに陸游は「楼船 夜雪 瓜洲の渡」と書き、同じ渡し場を、ついに果たされなかった北伐の景色にした。"),
        l("江对岸的扬州，把钱花在了水上。瘦西湖本是唐代的护城河，盐商沿岸造园，乾隆六下江南，湖边一度有二十四景；五亭桥原属盐商黄履暹的别墅，白塔也是当年景致之一。清人汪沆一句「故应唤作瘦西湖」，替这条河定了名。", "Across the water, Yangzhou spent its money on water. Slender West Lake had been the city moat in Tang times; salt merchants built gardens along it, the Qianlong Emperor came south six times, and the banks once held twenty-four named views. The Five-Pavilion Bridge began as part of the salt merchant Huang Lüxian's villa, and the White Pagoda was another of those views. It was a Qing poet, Wang Hang, who fixed the name: it should be called the Slender West Lake.", "対岸の揚州は、金を水に使った。痩西湖はもと唐代の城濠であり、塩商たちが岸に園林を連ね、乾隆帝は六度も南巡した。湖畔には二十四の景が数えられたという。五亭橋は塩商・黄履暹の別荘の一部として始まり、白塔もその景のひとつだった。名を定めたのは清の詩人・汪沆の一句、「故に応に痩西湖と喚ぶべし」である。"),
        l("2014年六月二十二日，中国大运河列入世界遗产，扬州段与瘦西湖一并在册。今天从瓜洲渡口望出去，江面上仍有渡船来回——诗里那句「一水间」，到底还是一水间。", "On 22 June 2014 the Grand Canal was inscribed on the World Heritage list, and the Yangzhou reach, Slender West Lake included, went on the roll with it. Look out from Guazhou today and the ferries are still crossing. The \"one water apart\" of the poem is, after all, still one water apart.", "2014年六月二十二日、中国大運河は世界遺産に登録され、揚州区間と痩西湖もその一部として名を連ねた。いま瓜洲の渡し場から眺めれば、江面をなお渡し舟が行き来している。詩にいう「一水の間」は、今もやはり一水の間である。"),
      ],
    },
    links: [
      {
        label: l("京杭大运河", "Grand Canal", "京杭大運河"),
        href: { zh: "https://zh.wikipedia.org/wiki/京杭大运河", en: "https://en.wikipedia.org/wiki/Grand_Canal_(China)", ja: "https://ja.wikipedia.org/wiki/京杭大運河" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("扬州", "Yangzhou", "揚州市"),
        href: { zh: "https://zh.wikipedia.org/wiki/扬州市", en: "https://en.wikipedia.org/wiki/Yangzhou", ja: "https://ja.wikipedia.org/wiki/揚州市" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("瓜洲镇", "Guazhou Town", "瓜洲鎮"),
        href: { zh: "https://zh.wikipedia.org/wiki/瓜洲镇" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "hutiaoxia": {
    facets: {
      nature: [
        l("虎跳峡长约十六公里，江面宽处六十至八十米，最窄处只剩三十米上下；而从水面抬头，玉龙雪山五千五百九十六米、哈巴雪山五千三百九十六米，高差近三千八百米。两岸是片岩与大理岩，江水在峡中还要再跌两百多米。", "Tiger Leaping Gorge runs about sixteen kilometres. The channel is sixty to eighty metres wide, narrowing to some thirty, while from the water to the summits — Jade Dragon Snow Mountain at 5,596 metres, Haba at 5,396 — the relief approaches 3,800 metres. The walls are schist and marble, and inside the gorge itself the river drops a further two hundred metres and more.", "虎跳峡は全長およそ一六キロ。川幅は広いところで六〇〜八〇メートル、最も狭いところでは三〇メートルほどしかない。水面から見上げれば、玉龍雪山は5596メートル、哈巴雪山は5396メートル、その高低差は3800メートル近い。両岸は片岩と大理石。峡谷のなかだけで、水はさらに200メートル以上を落ちる。"),
        l("玉龙与哈巴本是同一条南北向背斜的两半，核部为结晶片岩与片麻岩。约一千五百万年前背斜隆起、河流首次切穿；进入第四纪、约两百万年以来下切骤然加快，平均每年约1.5毫米。山在长，水在锯，两件事同时进行了一千多万年。", "Jade Dragon and Haba are two halves of a single north–south anticline, crystalline schist and gneiss at its core. The fold rose and the river first cut through it around fifteen million years ago; since the Quaternary, roughly two million years back, incision has sharply accelerated to about 1.5 millimetres a year. The mountain grows, the water saws. Both have been going on at once for more than ten million years.", "玉龍と哈巴は、もとは一つの南北方向の背斜の両半分であり、その核には結晶片岩と片麻岩がある。およそ一五〇〇万年前に背斜が隆起し、川が初めてこれを切り抜いた。第四紀に入る二〇〇万年ほど前からは下刻が急に速まり、年平均およそ一・五ミリで刻みつづけている。山は伸び、水は挽く。この二つが一千万年以上、同時に進行してきた。"),
        l("古金沙江原本一路南流，去向红河。研究认为它后来被东侧水系袭夺，流路改向东北——石鼓那个近乎一百八十度的大拐弯，正是这次改道留下的痕迹。若没有这一转，长江将止步于云南，中下游的一切都不会存在。", "The ancient Jinsha once flowed steadily south, toward the Red River. Research holds that a drainage to the east captured it and swung it round to the north-east — and the near-hairpin turn at Shigu is the scar that capture left behind. Without that turn the Yangtze would have ended in Yunnan, and everything downstream of it would never have existed at all.", "古金沙江はもともと南へ、紅河へ向かって流れていた。研究によれば、のちに東側の水系に河川争奪され、流路は北東へ振り替わったという。石鼓の180度に近い大湾曲は、その争奪が残した傷跡である。この転回がなければ長江は雲南で終わり、中流も下流も、そこにあるすべては存在しなかった。"),
      ],
      culture: [
        l("拐弯之下便是丽江。古城始建于大理末、元初，已有八百余年，1997年列入世界文化遗产。纳西木氏土司世袭统治此地，1382年归附明朝时获赐「木」姓。丽江也是中国历史文化名城中唯一没有城墙的一座。", "Below the bend lies Lijiang. Its old town was founded in the late Dali and early Yuan period, more than eight hundred years ago, and was inscribed as World Heritage in 1997. The Naxi Mu chieftains ruled here by inheritance, taking the surname Mu when they submitted to the Ming in 1382. Lijiang is also the only one of China's historic cities that never built a wall.", "湾曲の下流には麗江がある。旧市街は大理国末から元初にかけて開かれ、800年余りの歴史をもち、1997年に世界文化遺産に登録された。ナシ族の木氏土司が世襲でこの地を治め、1382年に明へ帰順した際に「木」の姓を賜った。麗江はまた、中国の歴史文化名城のなかで唯一、城壁をもたない町でもある。"),
        l("纳西族的东巴文兼有象形与表音，自公元一千年前后沿用至今，主要由东巴祭司书写经典。2003年，东巴古籍入选联合国教科文组织世界记忆名录。它常被称作仍在使用的象形文字，却也因过度商业化而濒危：写它的人越来越少，卖它的人越来越多。", "The Naxi Dongba script mixes pictograph and phonetic sign, has been in use from around the year 1000 to the present, and is written chiefly by dongba priests for their scriptures. In 2003 the Dongba manuscripts entered UNESCO's Memory of the World register. It is often called a living pictographic writing — yet over-commercialisation has left it endangered: fewer and fewer people write it, more and more people sell it.", "ナシ族のトンパ文字は象形と表音を併せもち、西暦1000年ごろから今日まで、主に東巴（トンパ）の祭司が経典を記すために用いてきた。2003年、東巴古籍はユネスコの世界の記憶に登録された。「いまも使われている象形文字」と呼ばれる一方で、過度の商業化により危機に瀕している。書く人は減り、売る人は増えつづけている。"),
        l("石鼓镇因一面白色大理石鼓形石碑得名，是茶马古道上的老渡口。1936年四月二十五日起，红二、六军团一万八千余人在此抢渡金沙江：二十八名船工、七只木船和几十支木筏，昼夜轮渡，四天渡完。江湾从此不只是个地理名词。", "Shigu takes its name from a drum-shaped stele of white marble, and was an old ferry point on the Tea-Horse Road. From 25 April 1936, more than 18,000 soldiers of the Red Second and Sixth Army Corps crossed the Jinsha here: twenty-eight boatmen, seven wooden boats and a few dozen rafts, ferrying day and night, four days to move them all. After that the bend was no longer only a geographical term.", "石鼓鎮の名は、白い大理石でできた太鼓形の石碑に由来する。ここは茶馬古道の古い渡し場だった。1936年四月二五日から、紅軍第二・第六軍団の一万八〇〇〇余名がこの地で金沙江を渡った。船頭二八人、木船七隻と数十の筏で、昼夜を分かたず交替し、四日で渡り切ったという。以来この湾曲は、単なる地理の名ではなくなった。"),
      ],
    },
    links: [
      {
        label: l("虎跳峡", "Tiger Leaping Gorge", "虎跳峡"),
        href: { zh: "https://zh.wikipedia.org/wiki/虎跳峡", en: "https://en.wikipedia.org/wiki/Tiger_Leaping_Gorge", ja: "https://ja.wikipedia.org/wiki/虎跳峡" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("丽江古城", "Old Town of Lijiang", "麗江古城"),
        href: { zh: "https://zh.wikipedia.org/wiki/丽江古城", en: "https://en.wikipedia.org/wiki/Old_Town_of_Lijiang", ja: "https://ja.wikipedia.org/wiki/麗江古城" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("东巴文", "Dongba script", "トンパ文字"),
        href: { zh: "https://zh.wikipedia.org/wiki/东巴文", en: "https://en.wikipedia.org/wiki/Dongba_symbols", ja: "https://ja.wikipedia.org/wiki/トンパ文字" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "jiangnan": {
    facets: {
      nature: [
        l("长江在入海之前把自己摊平。三角洲铺开十一万零七百五十五平方公里，大运河的江南段自杭州北上，穿苏州、无锡，到镇江汇入长江。干流、支流、塘浦、宅河层层分岔，最后细到能从后门的石阶直接下水。", "Before it reaches the sea the Yangtze lays itself flat. The delta spreads over 110,755 km²; the Jiangnan reach of the Grand Canal runs north from Hangzhou through Suzhou and Wuxi to meet the river at Zhenjiang. Trunk, branch, ditch, house-channel — the water divides and divides again until it is fine enough to reach the stone steps behind somebody's kitchen door.", "長江は海に入る前に、自分を平らに広げてしまう。三角州の面積は一一万〇七五五平方キロ。大運河の江南区間は杭州から北へ、蘇州・無錫を抜けて鎮江で長江に合流する。本流、支流、塘浦、宅地の細流——水は分かれつづけ、ついには台所の裏の石段から直接汲めるほど細くなる。"),
        l("西湖是这种关系的样本。它原本是钱塘江泥沙围出的潟湖，东汉华歆筑海塘把它同海隔开，此后不疏浚就会淤死。1089年苏轼任杭州知州，把挖出的葑泥堆成一道长堤——今天的苏堤，其实是一次清淤的余料。", "West Lake is the specimen case for that relationship. It began as a lagoon closed off by Qiantang sand, and in the Eastern Han the official Hua Xin built a sea wall that cut it from the sea for good; after that, unless it was dredged, it silted toward death. In 1089 Su Shi, then prefect of Hangzhou, had the dredged mud heaped into a long causeway. The Su Causeway people stroll today is the leftover of a cleaning job.", "西湖は、その関係の見本のような湖だ。もとは銭塘江の土砂が囲んでできた潟湖で、東漢の華歆が海塘を築いて海から切り離した。以後、浚渫を怠れば埋まって死ぬ湖になった。1089年、杭州知州となった蘇軾は、掻き上げた泥を積んで一本の長堤を築く。人が歩く蘇堤とは、実は掃除の残りものである。"),
      ],
      history: [
        l("五千年前，良渚人在这片湿地上动了大工程。古城占地881.45公顷，城外还有一整套水利系统：谷口六条高坝，加上平原低坝与山前长堤，覆盖349.24公顷。2019年七月六日，良渚古城遗址列入世界遗产。", "Five thousand years ago the Liangzhu people undertook something very large on this wetland. Their walled city covered 881.45 hectares, and beyond it lay a whole waterworks: six high dams across the valley mouths, plus low dams on the plain and a long dike along the foot of the hills, together covering 349.24 hectares. On 6 July 2019 the site was inscribed as World Heritage.", "五千年前、良渚の人々はこの湿地でひどく大きな仕事に着手した。城址の面積は881・四五ヘクタール。その外側には水利の体系が広がる——谷口の高い堰が六条、平野の低い堰と山裾の長堤を合わせて349・二四ヘクタール。2019年七月六日、良渚古城遺址は世界遺産に登録された。"),
        l("他们把最好的手艺留给了玉。存世的玉琮与玉璧，九成出自良渚，最大的一件琮重3.5公斤。公元前两千年前后，这套秩序断了——2021年的研究指出，几十年连绵的多雨与洪水，把城和田一起泡没了。", "Their finest craft went into jade. Nine-tenths of all known cong tubes and bi discs come from Liangzhu sites; the heaviest cong weighs 3.5 kg. Then, around 2000 BC, the order broke. Research published in 2021 points to decades of unusually heavy rainfall — flood after flood, until city and field went under together.", "彼らの最良の技は玉に注がれた。現存する玉琮と玉璧の九割は良渚の遺跡から出ており、最大の琮は三・五キロある。そして紀元前2000年ごろ、この秩序は切れた。2021年の研究は、数十年に及ぶ多雨を指摘する。洪水がくり返され、城も田も一緒に水の下へ沈んだ。"),
        l("两千五百年后，同一片水乡又立起一座城。公元前514年，吴王阖闾命伍子胥择地筑城，格局按九宫排布，就是今天的苏州。大运河通了以后，它成了东南沿海的工商与外贸重镇——水路修到哪里，繁华就长到哪里。", "Two and a half millennia later the same wetland raised another city. In 514 BC King Helü of Wu had Wu Zixu choose the ground and lay it out on a three-by-three grid of nine squares: that is Suzhou. Once the Grand Canal was through, it became the southeast coast's great city of industry and foreign trade. Prosperity grew wherever the waterway was dug.", "二千五百年ののち、同じ水郷にもうひとつの都市が立つ。紀元前514年、呉王闔閭は伍子胥に地を選ばせ、九宮の格子に沿って城を築かせた。今日の蘇州である。大運河が通じると、蘇州は東南沿海の工商と外国貿易の大都市となった。水路の伸びたところに、繁華もまた伸びていった。"),
      ],
      culture: [
        l("周庄的名字来自1086年——周迪功郎舍地建寺，村子就跟着姓了周。元至正十五年架起富安桥，明万历年间又添了双桥；九百年下来，镇上仍留着约六十座砖雕门楼、一百座老宅院，如今在世界遗产预备名单上排队。", "Zhouzhuang takes its name from 1086, when Zhou Digong gave land for a temple and the village took his surname. Fu'an Bridge went up in 1355, the Twin Bridges in the Wanli years of the Ming. Nine centuries on, the town still holds some sixty carved brick gateways and a hundred old courtyards, and it waits its turn on the World Heritage tentative list.", "周荘の名は1086年に始まる。周迪功郎が寺のために土地を捨て、村はその姓を名のった。富安橋は1355年、双橋は明の万暦年間に架かる。九百年を経てなお、町にはおよそ六十の磚彫の門楼と百軒の古い中庭が残り、世界遺産の暫定リストに名を連ねて順番を待っている。"),
        l("苏州把水引进了墙里。宋元以来它是丝织重镇，明代的苏州丝绸被称作「衣被天下」；织机的钱又变成假山与水池——九座古典园林在1997与2000年分两批列入世界遗产，是全世界被列名最多的园林群。", "Suzhou brought the water inside its walls. A silk-weaving centre since the Song and Yuan, its cloth was praised under the Ming as the clothing of the world — and loom money turned into rockeries and ponds. Nine of its classical gardens were inscribed as World Heritage in two batches, in 1997 and 2000: more listed gardens than anywhere else on earth.", "蘇州は水を塀の内側まで引き入れた。宋元以来の絹織の町であり、明代の蘇州の絹は「衣被天下」と讃えられた。機織りの金は、やがて築山と池に変わる。古典園林九か所が1997年と2000年の二度に分けて世界遺産に登録された。園林として世界でもっとも多く名を刻んだ群である。"),
        l("这套审美后来走得很远。西湖在2011年列入世界遗产，理由之一正是它塑造了中日韩三国的造园观——北京颐和园、东京小石川后乐园，都能看见它的影子。江南的水，最后变成了一种看世界的方式。", "The aesthetic travelled a long way. West Lake was inscribed in 2011 partly because it shaped garden-making across China, Japan and Korea — its shadow falls on the Summer Palace in Beijing and on Koishikawa Kōrakuen in Tokyo. In the end the water of Jiangnan became a way of looking at the world.", "この美意識は、遠くまで旅をした。西湖が2011年に世界遺産となった理由のひとつは、中国・日本・朝鮮半島の作庭観をかたちづくったことにある。北京の頤和園にも、東京の小石川後楽園にも、その影は落ちている。江南の水は、やがて世界の眺めかたそのものになった。"),
      ],
    },
    links: [
      {
        label: l("良渚古城遗址", "Liangzhu culture", "良渚遺跡"),
        href: { zh: "https://zh.wikipedia.org/wiki/良渚遗址", en: "https://en.wikipedia.org/wiki/Liangzhu_culture", ja: "https://ja.wikipedia.org/wiki/良渚遺跡" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("苏州古典园林", "Classical Gardens of Suzhou", "蘇州古典園林"),
        href: { zh: "https://zh.wikipedia.org/wiki/苏州古典园林", en: "https://en.wikipedia.org/wiki/Classical_Gardens_of_Suzhou", ja: "https://ja.wikipedia.org/wiki/蘇州古典園林" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("西湖", "West Lake", "西湖（杭州）"),
        href: { zh: "https://zh.wikipedia.org/wiki/西湖", en: "https://en.wikipedia.org/wiki/West_Lake", ja: "https://ja.wikipedia.org/wiki/西湖_(杭州市)" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "jinshajiang": {
    facets: {
      nature: [
        l("出了巴塘河口，长江换名金沙江，也换了脾气。两千三百零八公里里，它从海拔三千五百米降到宜宾的二百五十米，落差三千二百五十米，流域三十四万平方公里。中国地形从第一级阶梯跌向第二级，这一跌就写在这一段江面上。", "Past the mouth of the Batang the Yangtze changes its name to Jinsha, and changes its temper with it. Over 2,308 kilometres it falls from 3,500 metres to 250 at Yibin — a drop of 3,250 metres — draining 340,000 square kilometres. This single reach is where China's terrain steps down from its first great tier to its second.", "巴塘河口を過ぎると、長江は金沙江と名を変え、気性まで変える。2308キロのあいだに標高3500メートルから宜賓の250メートルへ、落差3250メートルを下る。流域面積は三四万平方キロ。中国の地形が第一段から第二段へ落ちる、その段差がそっくりこの一区間に刻まれている。"),
        l("在滇西北，金沙江与澜沧江、怒江被挤进同一片横断山里并肩南流：澜沧江与金沙江最近处直线相距六十六公里，澜沧江与怒江之间不到十九公里。三江并流2003年列入世界自然遗产，区内有中国百分之二十以上的高等植物和四分之一的动物种类。", "In north-western Yunnan the Jinsha runs south shoulder to shoulder with the Lancang (upper Mekong) and the Nu (upper Salween), all three squeezed into the same Hengduan ranges. At their closest, Lancang and Jinsha lie 66 kilometres apart in a straight line; Lancang and Nu less than 19. Inscribed as World Heritage in 2003, the Three Parallel Rivers hold over a fifth of China's higher plants and a quarter of its animal species.", "滇西北では、金沙江は瀾滄江（メコン上流）、怒江（サルウィン上流）とともに、同じ横断山脈のなかへ押し込められて肩を並べ南へ流れる。瀾滄江と金沙江は最も近いところで直線六六キロ、瀾滄江と怒江のあいだは一九キロに満たない。三江併流は2003年に世界自然遺産となり、域内には中国の高等植物の二割以上、動物種の四分の一が集まる。"),
        l("这样的落差意味着能量。金沙江水能理论蕴藏量约一亿一千三百万千瓦，接近全国六分之一；干流已建与规划的大型电站超过三十座，装机合计逾四千万千瓦。曾经最难通行的一段江，如今成了中国最要紧的一串开关。", "Such a fall means power. The Jinsha's theoretical hydroelectric potential is about 113 million kilowatts, close to a sixth of China's total; more than thirty major stations are built or planned on the main stem, with a combined capacity above forty million kilowatts. The stretch that was once hardest to travel has become one of the country's most consequential rows of switches.", "この落差は、そのままエネルギーを意味する。金沙江の水力理論埋蔵量はおよそ一億一三〇〇万キロワット、全国の六分の一近くにあたる。本流では三〇を超える大型発電所が建設・計画され、設備容量は合計四〇〇〇万キロワットを上回る。かつて最も通りがたかった流れは、いま中国で最も重要なスイッチの列になった。"),
      ],
      culture: [
        l("这条江换过许多名字：汉代称绳水，古籍又作淹水、若水，三国时叫泸水，唐人称它丽水或丽江。名字换得这样勤，说明每个时代都得重新认识它一次——上游的江，从来不是一条容易被记住的江。", "The river has worn many names. Han texts call it the Sheng; older sources the Yan and the Ruo; in the Three Kingdoms it was the Lu; the Tang called it the Li. Names change that often only when every age has to learn a river over again — and the upper Yangtze has never been an easy river to remember.", "この川は幾度も名を替えてきた。漢代には縄水、古籍には淹水・若水、三国期には瀘水、唐代には麗水あるいは麗江と呼ばれた。これほど名が替わるのは、時代ごとに川を認識しなおさねばならなかったからだ。上流の大河は、けっして覚えやすい川ではなかった。"),
        l("迪庆藏族自治州两万三千余平方公里，人口不足三十九万，藏族约占三成、傈僳族约二成七，地势从澜沧江边一千四百八十六米一直抬到梅里雪山卡瓦格博峰六千七百四十米。一个州里装着从河谷到雪线的全部气候，也装着好几种活法。", "Diqing Tibetan Autonomous Prefecture covers 23,186 square kilometres and holds fewer than 390,000 people — about a third Tibetan, a quarter Lisu. The land climbs from 1,486 metres at the Lancang's confluence to 6,740 metres at Kawagebo on the Meili range. One prefecture contains every climate from valley floor to snowline, and as many ways of living.", "迪慶チベット族自治州は二万三一八六平方キロ、人口は三九万に満たない。チベット族が約三割、リス族が約二割七分を占める。土地は瀾滄江との合流点の1486メートルから、梅里雪山カワクボ峰の6740メートルまで駆け上がる。ひとつの州のなかに、谷底から雪線までのすべての気候が、そして幾通りもの生き方が収まっている。"),
        l("山高路绝，货只能靠马驮。茶马古道滇藏线由此北上，普洱紧茶、瓷器与丝绸换回羊毛、金银与药材，马帮走到1950年代才停。2001年中甸县改名香格里拉，这里从此同时是牧场、寺院与旅游目的地——噶丹·松赞林寺照旧是藏传佛教十三大寺之一。", "Where the mountains are high and the roads fail, goods move on horseback. The Yunnan–Tibet branch of the Tea-Horse Road climbed north from here, trading pressed Pu'er tea, porcelain and silk for wool, gold and medicine; the caravans ran until the 1950s. In 2001 Zhongdian County renamed itself Shangri-La, and the place became pasture, monastery and destination all at once — Ganden Sumtseling still one of the thirteen great monasteries of Tibetan Buddhism.", "山が高く道が絶えるところでは、荷は馬の背に載るしかない。茶馬古道の滇蔵線はここから北へ延び、プーアル緊茶・磁器・絹を、羊毛・金銀・薬材と交換した。馬幇（キャラバン）が絶えたのは1950年代のことである。2001年、中甸県は香格里拉（シャングリラ）と改称した。以来ここは牧場であり、僧院であり、同時に観光地でもある。ガンデン・スムツェリン寺はいまも、チベット仏教十三大寺の一つだ。"),
      ],
    },
    links: [
      {
        label: l("金沙江", "Jinsha River", "金沙江"),
        href: { zh: "https://zh.wikipedia.org/wiki/金沙江", en: "https://en.wikipedia.org/wiki/Jinsha_River", ja: "https://ja.wikipedia.org/wiki/金沙江" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("三江并流", "Three Parallel Rivers of Yunnan", "三江併流"),
        href: { zh: "https://zh.wikipedia.org/wiki/三江并流", en: "https://en.wikipedia.org/wiki/Three_Parallel_Rivers_of_Yunnan_Protected_Areas", ja: "https://ja.wikipedia.org/wiki/三江併流" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("迪庆藏族自治州", "Dêqên Tibetan Autonomous Prefecture", "迪慶チベット族自治州"),
        href: { zh: "https://zh.wikipedia.org/wiki/迪庆藏族自治州", en: "https://en.wikipedia.org/wiki/Dêqên_Tibetan_Autonomous_Prefecture", ja: "https://ja.wikipedia.org/wiki/迪慶チベット族自治州" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "nanjing": {
    facets: {
      history: [
        l("公元211年，孙权把治所迁到秣陵；第二年在石头山上筑城，改称建业。此后三百年间，东晋与南朝在这里接力，建康城的宫墙一次次改姓，城西的江水却始终流着同一个方向。", "In 211 Sun Quan moved his seat to Moling; the next year he fortified Stone Hill and renamed the place Jianye. For the three centuries that followed, the Eastern Jin and the southern courts took turns here — the palace walls of Jiankang changed surnames again and again, while the river west of the city kept flowing the one way it knew.", "211年、孫権は本拠を秣陵に移し、翌年には石頭山に城を築いて建業と改めた。以後三百年、東晋から南朝へと王朝は入れ替わり、建康の宮城は幾度も主を変えたが、城西を流れる大江の向きだけは、ついに変わらなかった。"),
        l("1368年，朱元璋在此登基。二十万工匠花了二十一年，沿山势起伏砌出一圈城墙——不求方正，只顺地形。2005年实测，京城城墙周长35.267公里；今天还立着约二十五公里，仍是这座城市最结实的骨架。", "In 1368 Zhu Yuanzhang was enthroned here as the Hongwu Emperor. Two hundred thousand labourers spent twenty-one years laying a wall that refuses to be a square: it climbs and dips with the hills. A 2005 survey put the capital wall at 35.267 km; some twenty-five of those kilometres still stand, and they remain the city's hardest bone.", "1368年、朱元璋はこの地で帝位に就いた。二十万の人夫が二十一年をかけて築いた城壁は、方形の理想を捨てて山の起伏にそのまま従う。2005年の実測で京城の周囲は三五・267キロ、うち約二十五キロが今も立ち、この街のいちばん硬い骨であり続けている。"),
        l("1842年八月，英国舰队溯江而上，泊在江宁城外，《南京条约》就此签下。九十五年后的十二月十三日，这座城再度陷落，死难者据估计在三十万至三十五万之间。六朝金粉与近代创痛，压在同一片城砖底下。", "In August 1842 a British fleet came up the Yangtze and anchored off Jiangning; the Treaty of Nanking was signed in its shadow. Ninety-five years later, on 13 December 1937, the city fell again, and the dead are estimated at between 300,000 and 350,000. The powder and rouge of the Six Dynasties and the wounds of the modern age lie beneath the same bricks.", "1842年八月、長江を遡ったイギリス艦隊が江寧城外に錨を下ろし、その影のもとで南京条約が結ばれた。九十五年後の十二月十三日、街はふたたび陥ちる。犠牲者は三十万から三十五万と見積もられている。六朝の華やぎと近代の傷は、同じ城磚の下に重なっている。"),
      ],
      culture: [
        l("秦淮河古名龙藏浦，唐人杜牧一首《泊秦淮》之后，才被叫响了如今的名字。穿城的一段长约4.8公里，人称「十里秦淮」；六朝时这里是最热闹的坊市，乌衣巷住过高门，桃叶渡留着王献之送别爱妾的传说。", "The Qinhuai was once called Longcangpu; only after Du Mu wrote his night-mooring poem did the name we use now catch. The stretch inside the walls runs about 4.8 km — the \"Ten Li of Qinhuai\" — and in the Six Dynasties it was the busiest quarter in the capital. Wuyi Lane housed the great clans; Taoye Ferry still carries the story of Wang Xianzhi seeing his beloved off.", "秦淮河の古名は龍蔵浦。唐の杜牧が「泊秦淮」を詠んでから、今の名が広く呼ばれるようになった。城内を貫く流れは約四・八キロ、人は「十里秦淮」と呼ぶ。六朝のころ、ここは都でいちばん賑わう町だった。烏衣巷には名門が住み、桃葉渡には王献之が愛妾を見送った話が今も残る。"),
        l("明清两代，江南贡院就设在河边。1850年前后已扩到能同时容纳一万七千名考生，天下士子沿运河而来，交了卷就在河房里喝酒听曲。功名与风月隔着一条水，谁也没打算把它们分开。", "Under the Ming and Qing the Jiangnan Examination Compound stood on this same bank; by around 1850 it could seat seventeen thousand candidates at once. Scholars came down the canal from all over the empire, and when the papers were handed in they drank and listened to singing in the riverside houses. Ambition and pleasure sat one water apart, and nobody much wanted them separated.", "明清の二代、江南貢院はこの川辺にあった。1850年ごろには一万七千人の受験者を同時に収めるまでに広がる。天下の士人が運河をたどって集まり、答案を出し終えれば河房で酒を飲み、唄を聴いた。功名と風流はひと筋の水を隔てて隣り合い、誰もそれを分けようとはしなかった。"),
        l("街上的法国梧桐来得晚。1872年一位法国传教士在石鼓路种下第一棵；1929年孙中山奉安大典前，陵园路与中山大道成排栽起悬铃木，是国内第一条现代意义上的林荫大道。如今叶子一黄，全城都像旧照片。", "The plane trees came late. A French missionary planted the first on Shigu Road in 1872; then, before Sun Yat-sen's state funeral in 1929, Lingyuan Road and Zhongshan Avenue were lined with them — the first modern tree-shaded boulevard in the country. Every autumn the leaves turn, and the whole city looks like an old photograph.", "街路のプラタナスは、あとから来た。1872年、フランス人宣教師が石鼓路に一本目を植えた。そして1929年、孫文の奉安大典を前に、陵園路と中山大道に並木が仕立てられる。中国で最初の近代的な並木道だった。秋、葉が一斉に色づくと、街ぜんたいが古い写真のように見える。"),
      ],
    },
    links: [
      {
        label: l("南京", "Nanjing", "南京市"),
        href: { zh: "https://zh.wikipedia.org/wiki/南京市", en: "https://en.wikipedia.org/wiki/Nanjing", ja: "https://ja.wikipedia.org/wiki/南京市" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("南京城墙", "City Wall of Nanjing", "南京城"),
        href: { zh: "https://zh.wikipedia.org/wiki/南京城墙", en: "https://en.wikipedia.org/wiki/City_Wall_of_Nanjing", ja: "https://ja.wikipedia.org/wiki/南京城" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("秦淮河", "Qinhuai River", "秦淮河"),
        href: { zh: "https://zh.wikipedia.org/wiki/秦淮河", en: "https://en.wikipedia.org/wiki/Qinhuai_River", ja: "https://ja.wikipedia.org/wiki/秦淮河" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "panxi": {
    facets: {
      nature: [
        l("干热河谷是横断山区海拔一千五百米以下的一类特殊河谷。深切的峡谷让气流下沉增温，形成显著的焚风效应；封闭的谷地又把热量攒住散不掉。于是在同一条长江的流域里，出现了年均气温十八至二十摄氏度、终年少雨的一块。", "A dry-hot valley is a particular kind of gorge floor, below 1,500 metres, in the Hengduan mountains. Deep incision makes descending air warm as it falls — a pronounced foehn effect — and the enclosed valley then hoards the heat it cannot shed. So inside the single basin of the Yangtze there appears a pocket averaging 18 to 20°C the year round, and rarely raining.", "乾熱河谷とは、横断山地の標高1500メートル以下に現れる特殊な谷である。深く刻まれた峡谷では下降気流が圧縮されて温まり、著しいフェーン現象を生む。閉ざされた谷は、その熱を逃がさず溜め込む。こうして同じ長江の流域のなかに、年平均気温一八〜二〇度、雨のめったに降らない一角が生まれた。"),
        l("年降水量六百至八百毫米，其中八成九到九成五集中在五至十月；而年蒸发量是降水的三到六倍。植被于是长成稀树灌草丛：两到五米的散生乔木、半米到两米的灌丛，叶小、多毛、带刺——全都是省水的写法。", "Rain falls at 600 to 800 millimetres a year, and 89 to 95 per cent of it arrives between May and October; evaporation runs three to six times higher. The vegetation answers with sparse tree-and-shrub grassland: scattered trees two to five metres tall, shrubs half a metre to two, small-leaved, densely haired, thorned — every one of them a way of spelling thrift with water.", "年降水量は600〜800ミリ、そのうち八九〜九五パーセントが五月から一〇月に集中する。いっぽう年蒸発量は降水量の三〜六倍にのぼる。植生はそれに応えて疎林低木草原となった。二〜五メートルの散在する高木、〇・五〜二メートルの低木。葉は小さく、毛が密で、棘をもつ。どれも水を節約するための書き方である。"),
        l("金沙江干热河谷占全国干热河谷面积的五成八，也是长江宜昌以上泥沙的重要来源——约四成五的输沙量出自这里。阳光过剩、雨水不足、土壤易失，这里的绿色始终是借来的，还得年年续借。", "The Jinsha's dry-hot valleys account for 58 per cent of all such terrain in China, and are a major source of the Yangtze's sediment: about 45 per cent of the load measured above Yichang originates here. Too much sun, too little rain, soil that will not stay — the green in this valley is always borrowed, and the loan has to be renewed every year.", "金沙江の乾熱河谷は、中国の乾熱河谷面積の五八パーセントを占める。同時に長江の宜昌より上流における土砂の主要な供給源でもあり、輸砂量のおよそ四五パーセントがここから出る。日射は過剰、雨は不足、土は留まらない。この谷の緑はつねに借り物であり、毎年借り換えねばならない。"),
      ],
      culture: [
        l("凉山彝族自治州六万零二百六十一平方公里，人口四百八十六万，彝族约占五成二，是诺苏彝语的核心地带。地势从谷底三百零五米一直抬到木里境内最高的五千九百五十八米——五千六百米的高差里，装着从干热河谷到雪线的所有活法。", "Liangshan Yi Autonomous Prefecture covers 60,261 square kilometres and holds 4.86 million people, about 52 per cent of them Yi; this is the heartland of Nuosu. The land climbs from 305 metres on the valley floor to 5,958 at the highest summit in Muli — five and a half kilometres of relief holding every way of life from dry-hot gorge to snowline.", "涼山イ族自治州は六万〇二六一平方キロ、人口四八六万。うち約五二パーセントがイ族で、ここはノス（諾蘇）方言の中心地である。土地は谷底の305メートルから、木里の最高峰5958メートルまで駆け上がる。5600メートルの高低差のなかに、乾熱河谷から雪線までのあらゆる暮らしが収まっている。"),
        l("彝文在这里与汉文同为官方文字。火把节在农历六月二十四、二十五日前后举行，彝、白、纳西、基诺、拉祜诸族共有；2006年由川、滇、黔三省联合申报，列入首批国家级非物质文化遗产。夜里满山的火把，是这片山地最亮的一次自我确认。", "Here the Yi script stands alongside Chinese as an official written language. The Torch Festival falls around the 24th and 25th of the sixth lunar month and is shared by the Yi, Bai, Naxi, Jino and Lahu; in 2006 Sichuan, Yunnan and Guizhou jointly entered it on the first national list of intangible cultural heritage. On that night the hillsides fill with fire — the loudest thing these mountains ever say about themselves.", "ここではイ文字が漢字とならぶ公式の文字である。松明祭（火把節）は旧暦六月二四〜二五日ごろに行われ、イ族・ペー族・ナシ族・ジノー族・ラフ族に共通する祭りだ。2006年、四川・雲南・貴州の三省が共同で申請し、第一次の国家級無形文化遺産に登録された。夜、山という山が松明で埋まる。この山地が自らについて語る、いちばん明るい言葉である。"),
        l("1965年三月四日，攀枝花因三线建设立市，最初叫渡口市，1987年才改今名。它靠钒钛磁铁矿立足：钒储量占全国六成二，钛资源居世界第一；北面的西昌则有卫星发射中心。而干热河谷每年两千三百至两千七百小时的日照，如今又养出反季节的蔬菜与水果。", "Panzhihua was founded as a city on 4 March 1965 under the Third Front programme, first named Dukou and only renamed in 1987. It stands on vanadium-titanium magnetite — 62 per cent of China's vanadium reserves, the world's largest titanium resource — while Xichang to the north hosts a satellite launch centre. And the same valley sun, 2,300 to 2,700 hours a year, now ripens vegetables and fruit out of season.", "1965年三月四日、攀枝花は三線建設のもとで市として発足した。当初の名は渡口市、現在の名になったのは1987年である。町を支えるのはバナジウム・チタン磁鉄鉱で、バナジウム埋蔵量は全国の六二パーセント、チタン資源は世界一を誇る。北の西昌には衛星発射センターがある。そして年2300〜2700時間というこの谷の日射は、いまでは季節はずれの野菜と果実を実らせている。"),
      ],
    },
    links: [
      {
        label: l("凉山彝族自治州", "Liangshan Yi Autonomous Prefecture", "涼山イ族自治州"),
        href: { zh: "https://zh.wikipedia.org/wiki/凉山彝族自治州", en: "https://en.wikipedia.org/wiki/Liangshan_Yi_Autonomous_Prefecture", ja: "https://ja.wikipedia.org/wiki/涼山イ族自治州" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("攀枝花市", "Panzhihua", "攀枝花市"),
        href: { zh: "https://zh.wikipedia.org/wiki/攀枝花市", en: "https://en.wikipedia.org/wiki/Panzhihua", ja: "https://ja.wikipedia.org/wiki/攀枝花市" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("火把节", "Torch Festival", "松明祭（火把節）"),
        href: { zh: "https://zh.wikipedia.org/wiki/火把节", en: "https://en.wikipedia.org/wiki/Torch_Festival" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "poyang": {
    facets: {
      nature: [
        l("赣江、抚河、信江、饶河、修水五条大河先汇进这个盆地，再由北端湖口一处出去，年均向长江输送约一千四百六十亿立方米水。湖口水位21.71米时，湖面三千二百八十三平方公里；而一年之内，水位变幅可达9.79到15.36米。", "Five rivers — the Gan, Fu, Xin, Rao and Xiu — pour into this basin and leave by a single gate at Hukou, handing the Yangtze about 146 billion cubic metres of water a year. At a Hukou stage of 21.71 metres the lake spreads over 3,283 square kilometres; within a single year the level can swing by anything from 9.79 to 15.36 metres.", "贛江・撫河・信江・饒河・修水の五河がこの盆地に注ぎ、北端の湖口ただ一か所から出ていく。長江へ渡す水は年平均およそ1460億立方メートル。湖口の水位が二一・七一メートルのとき、湖面は3283平方キロ。年内の水位変動は九・七九から一五・三六メートルに及ぶ。"),
        l("所以它一年要变两次身。「高水是湖，低水似河」，「洪水一片，枯水一线」——2022年枯水最低时，湖面只剩两百四十四平方公里，浩渺水面收缩成几条蜿蜒的水线，露出的是数百平方公里的草洲与泥滩。", "So it changes shape twice a year. High water, a lake; low water, something more like a river — in flood a single sheet, in drought a single thread. At the bottom of the 2022 drought the surface had shrunk to some 244 square kilometres, the open water drawn down into a few winding lines, leaving hundreds of square kilometres of grass flat and mud.", "だから湖は年に二度、姿を変える。「高水は湖、低水は川のごとし」「洪水は一面、渇水は一筋」。2022年の渇水では湖面は約244平方キロまで縮み、広大な水面が数本の細い流れに絞り込まれて、あとには何百平方キロもの草洲と泥の干潟が現れた。"),
        l("退水正是鸟来的时候。全球四千余只白鹤中约九成在此越冬，保护区内记录到鸟类三百余种、近百万只。湖里还留着约五百头长江江豚，被称作这个物种最后的避难所。湖的呼吸，就是它们的日历。", "The falling water is exactly what the birds come for. Of the four thousand-odd Siberian cranes left in the world, some ninety per cent winter here; the reserves have recorded more than three hundred bird species and close to a million individuals. About five hundred Yangtze finless porpoises remain in the lake, which is called the species' last refuge. The lake's breathing is their calendar.", "水が引く時期こそ、鳥の季節だ。世界に四千羽あまり残るソデグロヅルのうち、およそ九割がここで越冬する。保護区で記録された鳥は三百種以上、個体数は百万近い。湖には長江スナメリが約五百頭とどまり、この種最後の避難所と呼ばれる。湖の呼吸が、彼らの暦である。"),
      ],
      history: [
        l("元丰七年（1084年），苏轼送长子苏迈赴饶州德兴上任，途经湖口。他不信旧说，夜里乘小舟到绝壁之下，听风浪灌进石隙、水石相搏而声如洪钟，遂写《石钟山记》。文章末句问的是：事不目见耳闻，而臆断其有无，可乎？", "In 1084 Su Shi, escorting his eldest son to a post at Dexing, put in at Hukou. He refused to take the old explanations on trust: at night he took a small boat under the cliff and heard the swell drive into the rock's fissures until the stone rang like a struck bell. His essay on Stone Bell Hill ends in a question — is it right to decide whether a thing exists without having seen and heard it yourself?", "元豊七年（1084年）、蘇軾は長男の蘇邁を饒州徳興の任地へ送る途中、湖口に舟を寄せた。旧説を鵜呑みにせず、夜、小舟で絶壁の下へ漕ぎ入れ、波が岩の裂け目に打ち込んで鐘のごとく鳴るのを自ら聴く。『石鐘山記』はこう問うて終わる——目で見ず耳で聞かずに、あると無いとを決めてよいものか。"),
        l("石钟山扼长江与鄱阳湖的交汇口，素有「江湖锁钥」之称，历来是兵家必争之地。1363年，朱元璋与陈友谅在鄱阳湖上鏖战，这是中国历史上规模最大的一场水战；胜负既定，明朝的地基也就打在了这片湖水上。", "Stone Bell Hill commands the junction of river and lake, and has long been called the lock and key of the waters; every army wanted it. In 1363 Zhu Yuanzhang and Chen Youliang fought here what is reckoned the largest naval battle in Chinese history. When it was over, the foundations of the Ming had been laid on this lake.", "石鐘山は長江と鄱陽湖の合流点を扼し、「江湖の鎖鑰」と呼ばれて、いつの時代も兵の争う地だった。1363年、朱元璋と陳友諒はこの湖上で激突する。中国史上最大規模の水戦とされる戦いで、決着がついたとき、明の礎はこの湖の水の上に据えられていた。"),
        l("湖口之外便是九江，古称江州、浔阳。白居易贬谪于此，在江头夜闻琵琶，写下「同是天涯沦落人」。第二次鸦片战争后，九江依《天津条约》开埠，1861年设租界，并与汉口、福州并列为中国三大茶市——诗与货，走的是同一条水路。", "Just beyond the lake mouth lies Jiujiang, known in older centuries as Jiangzhou or Xunyang. Banished here, Bai Juyi heard a pipa across the night water and wrote the line every Chinese schoolchild knows: we are both exiles at the edge of the world. After the Second Opium War the Treaty of Tientsin opened the port, a concession was laid out in 1861, and Jiujiang joined Hankou and Fuzhou as one of China's three great tea markets. Poetry and cargo left by the same channel.", "湖口を出れば九江、古くは江州・潯陽と呼ばれた。左遷された白居易はここで夜の川面に琵琶を聴き、「同じく是れ天涯淪落の人」と書いた。第二次アヘン戦争ののち天津条約により開港、1861年には租界が置かれ、漢口・福州と並ぶ中国三大茶市のひとつとなる。詩も荷も、同じ水路を通っていった。"),
      ],
    },
    links: [
      {
        label: l("鄱阳湖", "Poyang Lake", "鄱陽湖"),
        href: { zh: "https://zh.wikipedia.org/wiki/鄱阳湖", en: "https://en.wikipedia.org/wiki/Poyang_Lake", ja: "https://ja.wikipedia.org/wiki/鄱陽湖" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("石钟山", "Stone Bell Hill", "石鐘山"),
        href: { zh: "https://zh.wikipedia.org/wiki/石钟山" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("九江市", "Jiujiang", "九江市"),
        href: { zh: "https://zh.wikipedia.org/wiki/九江市", en: "https://en.wikipedia.org/wiki/Jiujiang", ja: "https://ja.wikipedia.org/wiki/九江市" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "sanxia": {
    facets: {
      nature: [
        l("三峡从奉节的白帝城起，到宜昌的南津关止，全长一百九十三公里。最前面的瞿塘峡只有八公里，是三段中最短的一段，江面最窄处不到一百米，最宽也不过一百五十米。峡口赤甲、白盐两山对峙，那就是夔门。", "The Three Gorges run 193 kilometres, from Baidicheng at Fengjie in the west to Nanjin Pass at Yichang in the east. Qutang, the first and shortest, is only eight kilometres long; at its narrowest the water squeezes under a hundred metres wide and nowhere exceeds a hundred and fifty. At its western mouth the peaks of Chijia and Baiyan face each other across the current — this is Kuimen, the Kui Gate.", "三峡は奉節の白帝城に始まり、宜昌の南津関で終わる、全長193キロの区間です。先頭の瞿塘峡はわずか8キロ、三峡でもっとも短い。川幅は狭いところで100メートルを切り、広くても150メートルを超えません。西の入口では赤甲山と白塩山が向かい合います。これが夔門です。"),
        l("往东是巫峡，四十五公里，自大宁河口到官渡口。两岸巫山十二峰错落而立，其中神女峰最负盛名。再往东的西陵峡最长，滩多水急，兵书宝剑峡、牛肝马肺峡、黄牛峡、灯影峡，名字都是照着山石的形状叫出来的。", "Then comes Wu Gorge, forty-five kilometres from the mouth of the Daning River to Guandukou, the Twelve Peaks of Wushan ranged along both banks with the Goddess Peak the most celebrated among them. Xiling, furthest east, is the longest and the most feared, full of shoals and fast water; its reaches were named for what the rock resembled — Book and Sword, Ox Liver and Horse Lung, Yellow Ox, Lamp Shadow.", "東へ進むと巫峡、大寧河口から官渡口までの45キロ。両岸には巫山十二峰が連なり、なかでも神女峰がもっとも名高い峰です。さらに東の西陵峡は三峡で最も長く、瀬が多く流れも速い。兵書宝剣峡、牛肝馬肺峡、黄牛峡、灯影峡——名はどれも岩の見た目から付けられました。"),
        l("2003年6月，三峡水库首次蓄水到坝前一百三十五米；2010年10月26日抬升到一百七十五米。岩壁没有变，脚下的水位却整体抬高了——今天从船上看见的三峡，与李白顺流而下时看见的，已不是同一条江面。", "In June 2003 the new reservoir first rose to 135 metres at the dam; on 26 October 2010 it reached 175. The cliffs are unchanged, but the water beneath them stands higher and moves slower. The gorges seen from a deck today are not the same river surface Li Bai went down.", "2003年6月、三峡ダムの貯水位はまず135メートルに達し、2010年10月26日には175メートルまで上がりました。岩壁は変わりません。ただ足もとの水面が、そっくり持ち上がったのです。いま船上から望む三峡は、李白が下っていったときの川面とは、もう別のものです。"),
      ],
      history: [
        l("公元25年，公孙述在蜀自立为天子，国号成家，并自号\"白帝\"，鱼复的这座山城因此得名白帝城。近两百年后的章武三年（223年）二月，刘备在此把儿子和蜀汉一并托付给诸葛亮。一座关隘，先后收留了一个野心和一场败局。", "In 25 CE the warlord Gongsun Shu declared himself Son of Heaven in Shu under the dynastic name Chengjia and took the style \"White Emperor\"; the fortress above Yufu has carried his title ever since. Nearly two centuries later, in the second month of 223, Liu Bei lay here and handed his son — and his kingdom — to Zhuge Liang. One narrow gate, keeping first an ambition and then a defeat.", "西暦25年、公孫述が蜀で天子を称し、国号を成家と定め、みずから「白帝」と号しました。魚復の山城が白帝城と呼ばれるのは、この名に由来します。それから二百年近くのち、章武三年（223年）二月、劉備はここで我が子と蜀漢を諸葛亮に託しました。ひとつの関所が、野心と敗北を続けざまに受け止めたのです。"),
        l("759年春，五十八岁的李白因永王之案被流放夜郎，行至三峡遇赦。他掉头东下，写出\"朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山\"。同一段激流，此前是天险，那个早晨成了自由的速度。", "In the spring of 759 Li Bai, fifty-eight and banished to Yelang over the Prince of Yong affair, met his pardon in the gorges. He turned his boat about and ran downstream: at dawn he left Baidi among coloured clouds, a thousand li to Jiangling in a single day, gibbons crying on both banks — and his skiff had already passed ten thousand hills. The same rapids that had been a terror became, for one morning, the speed of being free.", "759年の春、永王の一件で夜郎へ流されていた58歳の李白は、三峡の途上で赦免に出会います。舟を返して流れを下りながら詠んだのが——「朝に辞す白帝彩雲の間、千里の江陵一日にして還る。両岸の猿声啼いて住まざるに、軽舟已に過ぐ万重の山」。長く難所であった急流が、その朝だけは自由の速さになりました。"),
        l("1994年12月14日，三峡工程开工；2006年5月20日大坝主体完工。三十二台七十万千瓦机组合计二千二百五十万千瓦，2012年7月4日最后一台并网；2020年全年发电一千一百一十八亿千瓦时。而白帝城自2003年蓄水后四面临水，成了江心的一座岛。", "Ground was broken for the Three Gorges Project on 14 December 1994; the main dam was finished on 20 May 2006. Thirty-two turbines of 700 megawatts make 22,500 in all, the last of them joining the grid on 4 July 2012; in 2020 the station generated 111.8 terawatt-hours. Baidicheng, meanwhile, has been ringed by water since the reservoir filled in 2003 — the old hill is now an island in the river.", "1994年12月14日、三峡プロジェクトが着工。2006年5月20日に本体が完成しました。70万キロワットの水車発電機32基で総出力2250万キロワット、最後の1基は2012年7月4日に系統へつながり、2020年には1118億キロワット時を発電しています。いっぽう白帝城は2003年の湛水以降、四方を水に囲まれ、川の中の島となりました。"),
      ],
    },
    links: [
      {
        label: l("长江三峡", "Three Gorges", "三峡"),
        href: { zh: "https://zh.wikipedia.org/wiki/长江三峡", en: "https://en.wikipedia.org/wiki/Three_Gorges", ja: "https://ja.wikipedia.org/wiki/三峡" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("白帝城", "Baidicheng", "白帝城"),
        href: { zh: "https://zh.wikipedia.org/wiki/白帝城", en: "https://en.wikipedia.org/wiki/Baidicheng", ja: "https://ja.wikipedia.org/wiki/白帝城" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("三峡大坝", "Three Gorges Dam", "三峡ダム"),
        href: { zh: "https://zh.wikipedia.org/wiki/三峡大坝", en: "https://en.wikipedia.org/wiki/Three_Gorges_Dam", ja: "https://ja.wikipedia.org/wiki/三峡ダム" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "sanxingdui": {
    facets: {
      history: [
        l("1929年春，广汉月亮湾的村民燕道诚在自家门口清理水沟，翻出四百多件玉器。此后半个多世纪，这片土地一直沉默。直到1986年8月，两座大型祭祀坑被打开，一千七百余件青铜器、玉器、漆器、陶器，连同八十根象牙，一起重见天日。", "In the spring of 1929 a villager named Yan Daocheng, clearing a drainage ditch outside his door at Yueliangwan, turned up more than four hundred pieces of jade. The ground then kept its secret for half a century — until August 1986, when two great sacrificial pits were opened: over seventeen hundred bronzes, jades, lacquers and ceramics, and eighty elephant tusks.", "1929年の春、広漢・月亮湾の村人、燕道誠が家の前の溝をさらっていて、四百点あまりの玉器を掘り当てました。その後この土地は半世紀ほど沈黙します。ふたたび口を開いたのは1986年8月。二基の大型祭祀坑から、青銅器・玉器・漆器・陶器が千七百点余り、象牙が八十本、まとめて姿を現しました。"),
        l("坑里的东西不太像人间之物：青铜大立人通高二百六十厘米、重一百八十公斤，青铜神树高三百九十六厘米，纵目面具阔达一百三十八厘米，瞳孔像柱子一样凸出。它们大多被砸碎、焚烧之后才埋进坑里。碳十四测年指向商代晚期，距今约三千二百至三千年。", "What came out of the pits does not look like the work of this world. A standing bronze figure 2.6 metres tall weighing 180 kilograms; a bronze sacred tree of 3.96 metres; a mask 1.38 metres across with its pupils thrust out on stalks. Nearly all of it had been smashed and burned before burial. Radiocarbon dating places the deposits in the late Shang, some 3,200 to 3,000 years ago.", "坑から出たものは、どれもこの世の造形とは思えません。青銅立人像は全高260センチ、重さ180キロ。青銅神樹は396センチ。縦目仮面は幅138センチ、瞳が柱のように突き出しています。その多くは砕かれ、焼かれてから埋められました。炭素14年代測定は殷代後期、いまから約3200〜3000年前を指します。"),
        l("2021年起，三号至八号坑相继揭露，六坑共出土编号文物近一万三千件，其中较完整者三千一百五十五件。五十公里外的金沙遗址在2001年被发现，那枚直径12.5厘米、厚0.2毫米的太阳神鸟金箔，如今是中国文化遗产的标志——古蜀的都邑，只是向下游挪了一步。", "From 2021 six more pits, numbered three to eight, gave up close to thirteen thousand catalogued objects, of which 3,155 are reasonably intact. Fifty kilometres away the Jinsha site surfaced in 2001, and its gold foil of the sun and its four birds — 12.5 centimetres across, two tenths of a millimetre thick — is now the emblem of China's cultural heritage. The Shu capital had simply moved one step downstream.", "2021年以降、三号から八号までの六坑が次々に開かれ、登録された出土品は一万三千点近く、比較的完全なものが3155点。五十キロ離れた金沙遺跡は2001年に見つかり、直径12.5センチ・厚さ0.2ミリの「太陽神鳥」金箔は、いま中国文化遺産のシンボルです。古蜀の都は、下流へ一歩ずれただけでした。"),
      ],
    },
    links: [
      {
        label: l("三星堆遗址", "Sanxingdui", "三星堆遺跡"),
        href: { zh: "https://zh.wikipedia.org/wiki/三星堆遗址", en: "https://en.wikipedia.org/wiki/Sanxingdui", ja: "https://ja.wikipedia.org/wiki/三星堆遺跡" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("金沙遗址", "Jinsha site", "金沙遺跡"),
        href: { zh: "https://zh.wikipedia.org/wiki/金沙遗址", en: "https://en.wikipedia.org/wiki/Jinsha_site", ja: "https://ja.wikipedia.org/wiki/金沙遺跡" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "shanghai": {
    facets: {
      nature: [
        l("崇明岛是长江写下的最后一段字。唐武德年间（618至626），江口浮出东沙、西沙两块沙洲，此后千余年不断并接、涨坍；到2010年，全岛面积已达一千二百六十七平方公里，是中国第三大岛。", "Chongming is the last line the Yangtze writes. In the Wude years of the Tang (618–626) two shoals, Dongsha and Xisha, broke the surface at the river mouth; for a thousand years afterwards they joined, grew, and were eaten back again. By 2010 the island covered 1,267 km², the third largest in China.", "崇明島は、長江が最後に書きつける一行である。唐の武徳年間（618〜626）、河口に東沙・西沙という二つの砂州が浮かび、以後千年あまり、くっつき、伸び、また削られてきた。2010年時点の面積は1267平方キロ。中国で三番目に大きい島である。"),
        l("岛东头的东滩是国际重要湿地（拉姆萨尔），也是东亚—澳大利西亚迁飞路线上最要紧的中转站之一。潮水一天两回把滩涂翻开，涉禽落下来补给；江里还游着长江江豚。这里没有终点，只有换乘。", "Dongtan, at the island's eastern tip, is a wetland of international importance under the Ramsar Convention and one of the critical stopovers on the East Asian–Australasian Flyway. Twice a day the tide turns the mudflats over and the waders drop in to refuel; finless porpoises still move through the channel. Nothing here is a terminus. It is a place to change trains.", "島の東端、東灘はラムサール条約の国際的に重要な湿地であり、東アジア・オーストラリア地域フライウェイの要となる中継地のひとつだ。潮は一日二度、干潟をめくり返し、シギやチドリが降りて燃料を補う。水路にはスナメリも泳ぐ。ここは終点ではない。乗り換えの場所である。"),
        l("不过账目已经变了。2003年以后，三角洲前缘出现明显侵蚀，沉积物也在变粗——上游拦住的沙，不再送到这里来。六千三百公里的旅程仍在继续，只是它带下来的东西，比从前少了。", "The ledger, though, has changed. Since 2003 the delta front has been eroding markedly and its sediments coarsening: the sand held back upstream no longer arrives. The 6,300-kilometre journey still ends here — it simply brings less with it than it used to.", "ただ、帳尻は変わってしまった。2003年以降、三角州の前縁では明らかな侵食が進み、堆積物も粗くなっている。上流でせき止められた砂が、もうここまで届かない。6300キロの旅は今も続く。ただ、運んでくるものが以前より少ないだけだ。"),
      ],
      history: [
        l("上海起初只是江海之间的渔村与市镇。唐代先后设青龙镇（746）与华亭镇（751）；1074年宋神宗在此置市舶与榷货机构；1291年五个村庄并为上海县，人口约三十万。它是靠一个水口做生意起家的。", "Shanghai began as fishing villages and market towns between river and sea. The Tang set the garrison of Qinglong here in 746 and Huating in 751; in 1074 Emperor Shenzong of Song established a maritime trade office and a goods control bureau; in 1291 five villages were amalgamated into Shanghai County, with a population of roughly 300,000. From the very start it made its living at a river mouth.", "上海はもともと、川と海のあいだの漁村と市であった。唐は746年に青龍鎮、751年に華亭鎮を置き、1074年には宋の神宗がここに市舶と榷貨の役所を設けた。1291年、五つの村がまとめられて上海県となる。人口はおよそ三十万。この街は最初から、河口で商売をして生きてきた。"),
        l("1842年六月十六日，英军攻吴淞。江南提督陈化成战死在炮位上，二百五十门炮易手，十九日上海失守；舰队随即溯江直上江宁。《南京条约》开五口通商，上海是其中之一——一场炮战，把一座县城推到了世界航线的路口。", "On 16 June 1842 the British attacked Wusong. The commander Chen Huacheng died at his guns; 250 cannon changed hands, and Shanghai fell on the 19th, after which the fleet sailed straight up the Yangtze towards Jiangning. The Treaty of Nanking opened five ports, Shanghai among them. One artillery duel pushed a county town onto the crossroads of the world's shipping lanes.", "1842年六月十六日、イギリス軍は呉淞を攻めた。江南提督・陳化成は砲座で戦死し、二百五十門の砲が奪われ、十九日に上海は陥ちる。艦隊はそのまま長江を遡って江寧へ向かった。南京条約は五港を開き、上海はその一つとなる。一度の砲戦が、ひとつの県城を世界の航路の交差点へ押し出したのである。"),
        l("租界随即划出来：英国1845年，美国1848年在虹口，法国1849年；1863年英美合并为公共租界。1876年建成的吴淞铁路是中国第一条铁路，第二年就被拆掉。到1936年，这座城市已经住了三百万人。", "The concessions were drawn immediately after: the British in 1845, the Americans in Hongkou in 1848, the French in 1849; in 1863 the British and American areas merged into the International Settlement. The Woosung Railway, built in 1876 and the first in China, was pulled up the following year. By 1936 three million people lived in the city.", "租界はすぐに切り出された。イギリスが1845年、アメリカが1848年に虹口、フランスが1849年。1863年、英米の区域は合併して共同租界となる。1876年に開通した呉淞鉄道は中国最初の鉄道だったが、翌年には撤去された。1936年、この街にはすでに三百万人が暮らしていた。"),
      ],
      culture: [
        l("1849年四月六日划定的法租界，后来把街道交给了树。1902年从法国引进的悬铃木栽上霞飞路，中文索性叫它「法国梧桐」。1846年这里开出中国第一家西式旅馆，1850年办起第一份英文报纸——海派就是在这些外来物件之间长出来的。", "The French Concession, marked out on 6 April 1849, eventually handed its streets over to trees: London planes brought from France in 1902 were planted along Avenue Joffre, and Chinese simply calls them \"French planes\". China's first Western hotel opened here in 1846, its first English-language newspaper in 1850. Haipai — the Shanghai style — grew up in the gaps between imported things.", "1849年四月六日に区画されたフランス租界は、やがて街路を樹木に明け渡した。1902年にフランスから運ばれたプラタナスが霞飛路に植えられ、中国語ではそのまま「フランス梧桐」と呼ばれる。1846年には中国初の西洋式ホテル、1850年には最初の英字新聞。海派とは、こうした外来のものの隙間から育った文化である。"),
        l("今天码头仍是这座城市的主语。2010年上海港超过新加坡，成为全球最繁忙的集装箱港；2019年吞吐四千三百三十万标准箱，2024年货运量11.2亿吨。洋山深水港建在杭州湾的岛上，靠东海大桥与陆地相连。", "The docks are still the subject of the sentence. In 2010 Shanghai passed Singapore to become the world's busiest container port; it moved 43.3 million TEU in 2019 and 1.12 billion tonnes of cargo in 2024. The Yangshan deep-water terminals stand on islands out in Hangzhou Bay, tied to the mainland by the Donghai Bridge.", "今もこの街の主語は埠頭である。2010年、上海港はシンガポールを抜いて世界一忙しいコンテナ港となった。2019年の取扱量は四三三〇万TEU、2024年の貨物量は一一・二億トン。洋山深水港は杭州湾の島の上に築かれ、東海大橋によって陸とつながっている。"),
        l("长江三角洲住着一亿两千三百万人（2020年），贡献了全国约百分之十七的经济产出（2024年）。高原上的一捧雪水走了六千三百公里，最后落进集装箱吊车的阴影里——到这里，这条河把故事交给了海。", "The Yangtze Delta holds 123 million people (2020) and produces about seventeen per cent of China's economic output (2024). A handful of snowmelt off the plateau has travelled 6,300 kilometres to end in the shadow of container cranes. Here the river hands the story over to the sea.", "長江デルタには一億二三〇〇万人が暮らし（2020年）、中国の経済産出のおよそ一七パーセントを生んでいる（2024年）。高原の雪解け水ひとすくいが6300キロを旅して、コンテナクレーンの影の下に落ちる。ここで長江は、その物語を海へ手渡す。"),
      ],
    },
    links: [
      {
        label: l("崇明岛", "Chongming Island", "崇明島"),
        href: { zh: "https://zh.wikipedia.org/wiki/崇明岛", en: "https://en.wikipedia.org/wiki/Chongming_Island", ja: "https://ja.wikipedia.org/wiki/崇明島" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("上海租界", "Shanghai International Settlement", "上海租界"),
        href: { zh: "https://zh.wikipedia.org/wiki/上海租界", en: "https://en.wikipedia.org/wiki/Shanghai_International_Settlement", ja: "https://ja.wikipedia.org/wiki/上海租界" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("上海港", "Port of Shanghai", "上海港"),
        href: { zh: "https://zh.wikipedia.org/wiki/上海港", en: "https://en.wikipedia.org/wiki/Port_of_Shanghai", ja: "https://ja.wikipedia.org/wiki/上海港" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "tongtianhe": {
    facets: {
      nature: [
        l("沱沱河与当曲在青海腹地相汇，从此改称通天河。这一段长八百一十三公里，走在海拔四千五百米上下的高原上，河谷开阔，水流平缓，河道分了又合、合了又分。它不像峡谷里的江，倒像一片恰好在移动的水面。", "Where the Tuotuo meets the Dangqu deep in Qinghai, the river takes a new name: Tongtian, the river that reaches the sky. For 813 kilometres it crosses a plateau at around 4,500 metres, its valley broad, its current unhurried, its channels dividing and rejoining and dividing again. It behaves less like a river in a gorge than like a sheet of water that happens to be moving.", "沱沱河と当曲が青海の奥地で合わさると、川は名を変えて通天河となる。この813キロは標高4500メートル前後の高原を行き、谷は広く、流れはゆるやかで、流路は分かれては合わさり、また分かれる。峡谷を流れる川というより、たまたま動いている水面がそこにある、と言うほうが近い。"),
        l("通天河止于玉树的巴塘河口，那里海拔约三千五百米。八百多公里只落下一千米，平均每公里一米出头——大江在这里几乎是躺着走的。出了巴塘河口它才改名金沙江，随即开始那场两千三百公里、落差三千二百五十米的俯冲。", "The Tongtian ends at the mouth of the Batang River near Yushu, at about 3,500 metres. Eight hundred kilometres for a thousand metres of fall — barely a metre per kilometre. Up here the great river is almost lying down. Only past Batang does it become the Jinsha, and begin the 2,300-kilometre plunge that will take another 3,250 metres out from under it.", "通天河は玉樹の巴塘河口、標高およそ3500メートルで終わる。800キロ余りを流れて落差は1000メートル、一キロあたり一メートル強にすぎない。大河はここではほとんど横たわって進んでいる。巴塘河口を過ぎてはじめて金沙江と名を変え、2300キロで3250メートルを落ちる急降下が始まる。"),
      ],
      history: [
        l("唐蕃古道东起长安，西至逻些，全长三千余公里，跨今陕、甘、青、川、藏五省区。它翻过巴颜喀拉山，西渡通天河，经玉树结古、巴塘，再越唐古拉山口进入吐蕃腹地。对走这条路的人来说，通天河不是风景，是一道必须解开的题。", "The Tang–Tibet road ran more than 3,000 kilometres from Chang'an to Lhasa, across what are now five provinces. It climbed the Bayan Har range, forded the Tongtian westward, passed through Jiegu and Batang in Yushu, and only then crossed the Tanggula pass into central Tibet. To anyone walking that road, the Tongtian was not scenery. It was a problem that had to be solved.", "唐蕃古道は長安に発し、逻些（ラサ）に至る3000キロを超える道で、今日の陝西・甘粛・青海・四川・チベットの五省区にまたがる。巴顔喀拉（バヤンカラ）山脈を越え、通天河を西へ渡り、玉樹の結古・巴塘を経て、唐古拉峠を越えて吐蕃の中心へ入る。この道を行く者にとって通天河は景色ではなく、必ず解かねばならぬ一問だった。"),
        l("641年，文成公主自长安西行入蕃，这条和亲之路自此以「唐蕃古道」之名传世。此后两百余年往还不绝：634至850年间，蕃使至唐一百二十五次，唐使入蕃六十五次。茶、绢、经卷、工匠与马匹，都从这条河的渡口上过。", "In 641 Princess Wencheng travelled west from Chang'an to marry into Tibet, and the road she took has carried that name ever since. For two centuries afterwards the traffic never stopped: between 634 and 850, Tibetan missions reached the Tang court 125 times and Tang missions went to Tibet 65 times. Tea, silk, sutras, craftsmen and horses all crossed at this river's fords.", "641年、文成公主は長安から西へ、吐蕃へ嫁ぐ道を行った。その和親の道が「唐蕃古道」の名で後世に伝わる。以後二百余年、使節の往来は絶えなかった。634年から850年のあいだに吐蕃の使節は125回唐を訪れ、唐の使節は六五回吐蕃へ赴いた。茶、絹、経巻、職人、そして馬。すべてがこの川の渡し場を越えていった。"),
      ],
      culture: [
        l("「通天河」这名字来自《西游记》，是唐僧师徒西行受阻的那条大河。古时它另有称呼：汉文作牦牛河，蒙古语称木鲁乌苏，意为「弯曲的水」。三个名字，三种看河的方式——神话的、牧人的、行路人的。", "The name Tongtian, reaching the heavens, comes from Journey to the West — the river that halts the pilgrims on their way. Older names survive beside it: the Yak River in Chinese, and Murui-ussu in Mongolian, the winding water. Three names, three ways of looking at one river: the mythic, the herder's, and the traveller's.", "「通天河」という名は『西遊記』に由来する。三蔵一行の西行を阻んだ、あの大河である。古くは別の呼び名もあった。漢語では牦牛河、モンゴル語ではムルイ・ウス、「曲がりくねる水」の意。三つの名は、同じ川を見る三つのまなざし——神話の、牧人の、旅人のまなざしだ。"),
        l("顺流而下到玉树新寨，有一座嘉那嘛呢石经城。十八世纪末由结古寺第一世嘉那活佛始建，如今东西约二百七十米、南北约八十米，占地两万余平方米，堆着二十五亿块以上刻经的石头，2006年列为全国重点文物保护单位。", "Downstream at Xinzhai, near Yushu, stands the Gyanak mani wall. Begun in the late eighteenth century by the first Gyanak Lama of Jiegu Monastery, it now runs some 270 metres east to west and eighty north to south, covers more than 20,000 square metres, and is built of over 2.5 billion inscribed stones. In 2006 it was listed among China's key protected cultural relics.", "川を下って玉樹の新寨には、嘉那マニ石経城がある。一八世紀末に結古寺の初代嘉那活仏が築きはじめたもので、いまや東西およそ270メートル、南北およそ八〇メートル、面積は二万平方メートルを超える。経文を刻んだ石が二五億個以上積み上げられ、2006年には全国重点文物保護単位に指定された。"),
        l("每一块石头都是某个人放下的。经幡在风里褪成灰白，石堆却一年年长高——在这片人烟稀薄的高原上，信仰几乎是唯一持续累积的东西。河从旁边流过，什么也不留下；人留下的，是石头。", "Every one of those stones was laid there by somebody. Prayer flags bleach to grey in the wind, but the pile grows taller year by year — on a plateau this empty, faith is very nearly the only thing that accumulates. The river slides past and leaves nothing behind. What people leave is stone.", "石の一つひとつを、誰かが置いていった。タルチョは風にさらされて灰白色に褪せるが、石の山は年ごとに高くなる。人の少ないこの高原で、積み重なりつづけるものはほとんど信仰だけだ。川はかたわらを流れ、何も残さない。人が残すのは、石である。"),
      ],
    },
    links: [
      {
        label: l("通天河", "Tongtian River", "通天河"),
        href: { zh: "https://zh.wikipedia.org/wiki/通天河", en: "https://en.wikipedia.org/wiki/Tongtian_River" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("文成公主", "Princess Wencheng", "文成公主"),
        href: { zh: "https://zh.wikipedia.org/wiki/文成公主", en: "https://en.wikipedia.org/wiki/Princess_Wencheng", ja: "https://ja.wikipedia.org/wiki/文成公主" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("新寨嘉那嘛呢石经城", "Gyanak Mani stone city, Xinzhai", "新寨嘉那マニ石経城"),
        href: { zh: "https://zh.wikipedia.org/wiki/新寨嘉那嘛呢" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "tuotuohe": {
    facets: {
      nature: [
        l("长江的第一滴水落在唐古拉山各拉丹冬峰的西南坡。这座海拔六千六百二十一米的雪峰身披四十条冰川，冰盖约六百七十平方公里，雪线高踞五千八百米。冰舌融水自姜根迪如冰川渗出，向北汇成沱沱河——万里大江的旅程，就从这一线融水开始。", "The Yangtze's first water falls on the south-western flank of Geladandong, a 6,621-metre peak in the Tanggula range. Forty glaciers hang from its shoulders — some 670 square kilometres of ice, the snowline held at 5,800 metres. Meltwater seeps out of the Jianggendiru glacier and gathers northward into the Tuotuo. A journey of six thousand kilometres begins as a thread of thaw.", "長江の最初の一滴は、唐古拉（タングラ）山脈の主峰・各拉丹冬、標高6621メートルの南西斜面に落ちる。四十条の氷河がその肩に垂れ、氷の広がりはおよそ670平方キロ、雪線は5800メートルの高みにある。姜根迪如氷河からしみ出した融け水が北へ集まり、沱沱河となる。六千キロの旅は、一筋の雪解け水から始まる。"),
        l("沱沱河全长三百五十八公里，流域一万七千平方公里，年均流量却只有每秒三十二立方米，比江南一条不起眼的溪流大不了多少。它也不肯走一条道，而是在开阔的滩地上散成无数股辫状水道，随季节改换河床，像还没想好去哪儿。", "The Tuotuo runs 358 kilometres and drains 17,000 square kilometres, yet carries a mean flow of only 32 cubic metres a second — no more than a modest creek anywhere else in China. Nor does it keep to one channel. Across the open flats it splits into countless braided strands and shifts its bed with the season, like a river that has not yet decided where it is going.", "沱沱河は全長358キロ、流域面積一万七〇〇〇平方キロ。それでいて年平均流量は毎秒三二立方メートルにすぎず、江南のありふれた小川とさして変わらない。一本の流路を守ることもない。開けた河原で無数の辮状流路に分かれ、季節ごとに川床を変える。行く先をまだ決めかねているかのように。"),
        l("源头不止一处。沱沱河是传统认定的西源，东南方的当曲水量却是它的五六倍，流域面积近两倍，今日多被视作正源。二者同属三江源——这片2021年设立的国家公园面积十九万平方公里，平均海拔四千七百米以上，五千余平方公里冰川蓄水约四千亿立方米，人称中华水塔。", "There is more than one source. The Tuotuo is the traditional western headstream, but the Dangqu to its south-east carries five or six times the flow and drains nearly twice the area; many surveys now name it the true one. Both lie inside Sanjiangyuan, the national park declared in 2021 across 190,000 square kilometres at an average altitude above 4,700 metres, where more than 5,000 square kilometres of glacier hold some 400 billion cubic metres of water. China calls it the Water Tower.", "源流は一つではない。沱沱河は伝統的な西源だが、南東の当曲は水量がその五、六倍、流域面積は二倍近くあり、今日では正源とみなす調査も多い。いずれも三江源のうちにある。2021年に設立されたこの国立公園は面積一九万平方キロ、平均標高4700メートル超。5000平方キロを超える氷河がおよそ4000億立方メートルの水を蓄える。人はここを「中華水塔」と呼ぶ。"),
      ],
      culture: [
        l("玉树藏族自治州占地二十万四千余平方公里，人口却只有四十二万，其中藏族占九成五。平均海拔四千二百米以上，青稞难以成熟，牛羊尚能存活：这里是青海最重要的牧业基地，畜产品约占全省四分之一。人跟着草走，草跟着水走。", "Yushu Tibetan Autonomous Prefecture covers more than 204,000 square kilometres and holds only 425,000 people, ninety-five per cent of them Tibetan. Above an average altitude of 4,200 metres barley struggles to ripen, but yak and sheep endure: this is Qinghai's foremost pastoral base, supplying about a quarter of the province's animal produce. People follow the grass, and the grass follows the water.", "玉樹チベット族自治州は二〇万四〇〇〇平方キロを超える広さを持ちながら、人口はわずか四二万、その九五パーセントがチベット族である。平均標高4200メートル以上では青稞（ハダカムギ）も実りにくいが、ヤクや羊は生きられる。ここは青海省随一の牧畜基地であり、省全体の畜産物のおよそ四分の一を産する。人は草を追い、草は水を追う。"),
        l("州府结古自古是唐蕃古道上的重镇。这条三千余公里的通道东起长安、西至逻些，634年至850年间，蕃使至唐一百二十五次，唐使入蕃六十五次，平均一年半便有一趟往还。641年文成公主西行入蕃，正是由此渡通天河，再翻唐古拉山口。", "Jiegu, the prefectural seat, has long been a way-station on the Tang–Tibet road, a corridor of more than 3,000 kilometres from Chang'an to Lhasa. Between 634 and 850 Tibetan envoys reached the Tang court 125 times and Tang envoys went to Tibet 65 times — a mission each way roughly every eighteen months. In 641 Princess Wencheng travelled it westward, fording the Tongtian here before crossing the Tanggula pass.", "州都・結古は古くから唐蕃古道の要衝だった。長安から逻些（ラサ）まで3000キロを超えるこの道を、634年から850年のあいだに吐蕃の使節は125回唐へ、唐の使節は六五回吐蕃へと往来した。平均すれば一年半に一度の行き来である。641年、文成公主が西へ向かったのもこの道で、ここで通天河を渡り、唐古拉峠を越えていった。"),
        l("2010年四月十四日，7.1级地震袭击玉树，结古镇九成以上房屋倒塌，遇难者数以千计。重建后的新城沿巴塘河谷展开，帐篷与楼房并置，寺院照旧诵经。高原上的生活从不轻易，人们仍旧把家安在离水最近的地方。", "On 14 April 2010 a magnitude 7.1 earthquake struck Yushu; more than ninety per cent of the houses in Jiegu came down and the dead were counted in thousands. The rebuilt town now spreads along the Batang valley, tents standing beside apartment blocks, the monasteries chanting as before. Life up here has never been easy, and still people set their homes as close to the water as they can.", "2010年四月一四日、マグニチュード七・一の地震が玉樹を襲い、結古鎮の家屋の九割以上が倒れ、犠牲者は数千人に及んだ。再建された町はいま巴塘河の谷に沿って広がり、テントと集合住宅が並び立ち、僧院ではかわらず読経が続く。高原の暮らしは決して楽ではない。それでも人は、水にいちばん近いところに家を建てる。"),
      ],
    },
    links: [
      {
        label: l("沱沱河", "Tuotuo River", "沱沱河"),
        href: { zh: "https://zh.wikipedia.org/wiki/沱沱河", en: "https://en.wikipedia.org/wiki/Tuotuo_River" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("三江源国家公园", "Sanjiangyuan National Park", "三江源国家公園"),
        href: { zh: "https://zh.wikipedia.org/wiki/三江源国家公园", en: "https://en.wikipedia.org/wiki/Sanjiangyuan" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("玉树藏族自治州", "Yushu Tibetan Autonomous Prefecture", "玉樹チベット族自治州"),
        href: { zh: "https://zh.wikipedia.org/wiki/玉树藏族自治州", en: "https://en.wikipedia.org/wiki/Yushu_Tibetan_Autonomous_Prefecture", ja: "https://ja.wikipedia.org/wiki/玉樹チベット族自治州" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "wuhan": {
    facets: {
      nature: [
        l("汉水在龟山脚下注入长江，一刀把城切成三块：汉口、汉阳、武昌。全市水域两千两百多平方公里，占市域四分之一强，其中湖泊八百余平方公里；大小湖泊一百六十六个，仅中心城区就占四十三个，「百湖之市」并非夸口。", "The Han River joins the Yangtze under Tortoise Hill and cuts the city into three: Hankou, Hanyang, Wuchang. Water covers more than a quarter of Wuhan — over 2,200 square kilometres, of which some 800 are lake. There are 166 of them, 43 inside the central districts alone. \"City of a hundred lakes\" is if anything an undercount.", "漢水は亀山のふもとで長江に合流し、街を一刀のもとに三つに分ける——漢口・漢陽・武昌。市域の四分の一を超える2200平方キロ余りが水面で、うち湖沼が800平方キロ。大小あわせて166の湖があり、中心市街だけでも四三を数える。「百湖の市」は誇張ではない。"),
        l("这些湖多半是长江自己留下的：主泓摆动、泥沙封口，旧河道就成了湖。东湖水域三十三平方公里，岸线115.5公里；1899至1902年张之洞在此修堤建闸，才把东湖与周边湖群同长江彻底分开，水患不再顺江直灌。", "Most of them were made by the river itself: the main channel wandered, silt sealed an old bend, and what was left behind became a lake. East Lake covers 33 square kilometres with 115.5 kilometres of shore; only when Zhang Zhidong built dykes and sluices between 1899 and 1902 was it, with the lakes around it, finally severed from the Yangtze — and the floods stopped coming in through the front door.", "その多くは長江自身がこしらえたものだ。本流が振れ、土砂が旧河道の口を塞ぎ、取り残された水がそのまま湖になる。東湖は水面三三平方キロ、岸線115・五キロ。1899年から1902年にかけて張之洞が堤と水門を築き、周囲の湖群ともども、ようやく長江から切り離された。"),
        l("分开不等于无事。1954年6月至9月的长江大水，汉口水位最高涨到29.73米，那场洪灾造成约三万三千人死亡。城市从此在堤后过日子：堤外是江，堤内是湖。武汉人对水的亲和与警惕，其实是同一件事的两面。", "Severed is not the same as safe. From June to September 1954 the flood peaked at 29.73 metres on the Hankou gauge; around 33,000 people died. Ever since, the city has lived behind its embankment, the river on one side and the lakes on the other. Wuhan's ease with water and its wariness of water are the same habit seen from two angles.", "切り離すことと安全であることは別だ。1954年6月から9月の大水では、漢口の水位が二九・七三メートルに達し、この洪水で約三万三千人が亡くなった。以来、街は堤の内側で暮らしている。堤の外は川、内は湖。武漢の人の水への親しみと警戒は、同じ習性の裏表である。"),
      ],
      history: [
        l("1891年8月，张之洞在汉阳龟山下动工兴建铁厂，1893年10月竣工，次年5月首次开炉炼铁。全厂六大厂四小厂，实支银约五百万两；它比日本八幡制铁所早了七年，是中国乃至亚洲第一家现代化钢铁企业。", "In August 1891 Zhang Zhidong broke ground for an ironworks under Tortoise Hill in Hanyang. It was finished in October 1893 and first tapped iron in May 1894 — six large shops and four small ones, some five million taels of silver. It beat Japan's Yawata works by seven years and was the first modern steel enterprise in China, or anywhere in Asia.", "1891年8月、張之洞は漢陽の亀山のふもとで製鉄所の建設に着工した。1893年10月に竣工、翌年5月に初めて火が入る。大工場六・小工場四、費やした銀は約五百万両。日本の八幡製鉄所より七年早い、中国そしてアジア初の近代製鉄所だった。"),
        l("1908年3月，汉阳铁厂与大冶铁矿、萍乡煤矿合组汉冶萍公司，成为当时亚洲最大的钢铁联合企业；同一片厂区还出过闻名半个世纪的「汉阳造」步枪。1911年10月10日夜，武昌城头枪响，两千年的王朝就倒在这座工业新城旁边。", "In March 1908 the ironworks merged with the Daye iron mines and the Pingxiang collieries to form Hanyeping, then the largest integrated steel enterprise in Asia. The same industrial belt turned out the \"Hanyang made\" rifle. On the night of 10 October 1911 shots rang out on the Wuchang wall, and two thousand years of dynastic rule came down beside the new factories.", "1908年3月、漢陽製鉄所は大冶鉄鉱・萍郷炭鉱と合併して漢冶萍公司となり、当時アジア最大の鉄鋼コンビナートとなる。同じ一帯は半世紀にわたって知られた「漢陽造」の小銃も生んだ。1911年10月10日の夜、武昌の城頭で銃声が上がり、二千年の王朝はこの新しい工業都市のかたわらで倒れた。"),
        l("1955年9月1日，武汉长江大桥在龟山与蛇山之间打下第一根桩，1957年10月15日通车。全长一千六百七十米，上层四车道公路，下层双线京广铁路。在此之前，长江上没有一座桥，南北列车只能靠轮渡摆过江去。", "On 1 September 1955 the first pile went in between Tortoise Hill in Hanyang and Snake Hill in Wuchang; on 15 October 1957 the Wuhan Yangtze River Bridge opened — 1,670 metres, four lanes of road above, the double track of the Beijing–Guangzhou line below. Until then not one bridge crossed the Yangtze, and north–south trains had to be ferried over the water.", "1955年9月1日、漢陽の亀山と武昌の蛇山のあいだに最初の杭が打たれ、1957年10月15日、武漢長江大橋が開通した。全長1670メートル、上層は四車線の道路、下層は京広線の複線。それまで長江に橋は一本もなく、南北の列車は渡船で運ばれるほかなかった。"),
      ],
      culture: [
        l("黄鹤楼始建于吴黄武二年（223年），原在夏口以西的矶头，本是瞭望江面的军事之所。明清两代它毁了十二次、修了十次；今天蛇山上的楼是1981至1985年重建的，高51.4米，离最初的位置约一公里。", "The Yellow Crane Tower was first raised in AD 223 under Eastern Wu, on a jetty west of Xiakou, as a place to watch the river for enemies. Through the Ming and Qing it was destroyed twelve times and repaired ten. The tower on Snake Hill today went up between 1981 and 1985, 51.4 metres tall, about a kilometre from where it began.", "黄鶴楼が最初に建てられたのは呉の黄武二年（223年）、夏口の西の磯の上で、もとは川面を見張る軍事の楼だった。明清の間に十二度失われ、十度建て直された。いま蛇山に立つ楼は1981年から1985年の再建で、高さ五一・四メートル、最初の場所から約一キロ離れている。"),
        l("楼能一次次立起来，是因为诗一直在。崔颢写「黄鹤一去不复返，白云千载空悠悠」；李白在此送孟浩然东下，留下「烟花三月下扬州」。一座反复烧毁的木楼，靠两首诗，在中国人的地图上从未缺席。", "It kept being rebuilt because the poems never left. Cui Hao wrote that the yellow crane, once gone, never returns, leaving a thousand years of idle cloud; Li Bai saw Meng Haoran off from here into the mist and blossom of the third month, bound downriver for Yangzhou. A wooden tower that kept burning down has never once slipped off the Chinese map.", "楼が何度も立ち上がったのは、詩が去らなかったからだ。崔顥は「黄鶴一たび去りて復た返らず、白雲千載空しく悠悠」と詠み、李白はここで孟浩然を送って「煙花三月揚州に下る」と書いた。焼け落ちつづけた木造の楼が、中国人の地図から消えたことは一度もない。"),
        l("1861年春，汉口开埠设租界，很快与九江、福州并列为中国三大茶市。码头招来了脚夫、船工与茶栈掌柜，也定下了这座城市说话的调门。今天的「过早」摊子、岸边的吆喝、桥下乘凉的人，都还走在那套码头节奏上。", "In the spring of 1861 Hankou was opened to foreign trade and a concession laid out; it soon stood with Jiujiang and Fuzhou as one of China's three great tea markets. The wharves brought porters, boat crews and tea brokers — and with them the pitch at which this city talks. The breakfast stalls, the shouting along the quay, the people taking the river breeze under the bridge: all of it still runs on dock time.", "1861年春、漢口が開港して租界が置かれ、まもなく九江・福州と並ぶ中国三大茶市のひとつとなる。埠頭は荷役人夫と船乗りと茶問屋を呼び寄せ、この街の話しぶりの高さまで連れてきた。朝の「過早」の屋台、岸辺の呼び声、橋の下で川風に当たる人々——すべてがいまも埠頭の時間で動いている。"),
      ],
    },
    links: [
      {
        label: l("武汉市", "Wuhan", "武漢市"),
        href: { zh: "https://zh.wikipedia.org/wiki/武汉市", en: "https://en.wikipedia.org/wiki/Wuhan", ja: "https://ja.wikipedia.org/wiki/武漢市" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("黄鹤楼", "Yellow Crane Tower", "黄鶴楼"),
        href: { zh: "https://zh.wikipedia.org/wiki/黄鹤楼", en: "https://en.wikipedia.org/wiki/Yellow_Crane_Tower", ja: "https://ja.wikipedia.org/wiki/黄鶴楼" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("武汉长江大桥", "Wuhan Yangtze River Bridge", "武漢長江大橋"),
        href: { zh: "https://zh.wikipedia.org/wiki/武汉长江大桥", en: "https://en.wikipedia.org/wiki/Wuhan_Yangtze_River_Bridge", ja: "https://ja.wikipedia.org/wiki/武漢長江大橋" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "yichang-jingzhou": {
    facets: {
      history: [
        l("公元前689年，楚文王把都城迁到郢，也就是今天荆州城北三公里的纪南城。此后四百一十一年，楚人在这片东西约4.5公里、南北约3.5公里的土地上筑宫殿、凿水井、冶铜铸器，直到公元前278年秦将白起攻入，楚国东迁于陈。", "In 689 BC King Wen of Chu moved his capital to Ying — Jinancheng, three kilometres north of today's Jingzhou. For the next 411 years the Chu raised palaces, sank wells and cast bronze on a rectangle of earth some 4.5 km east to west and 3.5 km north to south, until in 278 BC the Qin general Bai Qi broke in and the court fled east to Chen.", "紀元前689年、楚の文王は都を郢へ移した。いまの荊州の北三キロ、紀南城である。以後411年、東西約四・五キロ、南北約三・五キロの土に宮殿が建ち、井戸が掘られ、青銅が鋳られた。紀元前278年、秦の白起がここを陥とし、楚は東の陳へ去る。"),
        l("郢都今天只剩八十余座夯土台基和四百多口古井，埋在麦田之下。而三公里外的荆州城墙仍是完整的一圈：现存城垣为清顺治三年（1646年）重建，高约九米，周长十余公里。关羽曾在此修葺城防，「大意失荆州」一语也从这座城传遍后世。", "Of Ying there remain only eighty-odd rammed-earth platforms and four hundred old wells, buried under the wheat. Three kilometres away the wall of Jingzhou still closes a complete ring: rebuilt in 1646 under the Qing, nine metres high, better than ten kilometres around. Guan Yu once repaired these defences, and from this city the phrase \"to lose Jingzhou through carelessness\" passed into the language.", "郢の跡に残るのは、麦畑の下に沈む八十余の版築の土壇と四百あまりの古井戸だけだ。だが三キロ先の荊州城壁はいまも完全な輪を保つ。清の順治三年（1646年）の再建で、高さ約九メートル、周囲は十キロ余り。関羽もこの防壁を修めた。「大意にして荊州を失う」の語はここから生まれた。"),
        l("出了西陵峡口，江面骤然放宽，工程也随之接管了这段水。1970年动工的葛洲坝是长江干流上的第一座大坝，1988年建成；1994年，三峡大坝在上游的三斗坪破土，2012年全部机组投产。楚人的水与今人的电，在同一段江上先后落脚。", "Below the mouth of Xiling Gorge the river suddenly widens, and engineering takes over this stretch of water. Gezhouba, begun in 1970 and completed in 1988, was the first dam on the Yangtze's main stem; in 1994 ground broke upstream at Sandouping for the Three Gorges Dam, whose last generators came online in 2012. The water the Chu revered and the current we switch on come ashore at the same bend.", "西陵峡の出口を過ぎると、川幅はにわかに広がり、この一帯の水は土木の手に渡る。1970年着工・1988年完成の葛洲ダムは長江本流最初のダムであり、1994年には上流の三斗坪で三峡ダムが起工、2012年に全機が動き出した。楚人の水と現代の電気が、同じ川筋に相次いで根を下ろしている。"),
      ],
      culture: [
        l("宜昌以下，江水不再被山夹持，开始在江汉平原上自由摆动。荆江河道曲折、水流迟缓，泥沙年年淤高河床，洪水位可高出两岸地面十余米，故有「万里长江，险在荆江」之说。人靠堤而居，堤即是路，也是村口。", "Below Yichang the river is no longer held between cliffs; it begins to swing freely across the Jianghan plain. The Jingjiang reach coils slowly, laying down silt until the bed rises and flood levels stand more than ten metres above the fields behind the dykes — hence the saying that of the Yangtze's ten thousand li, the danger is all in Jingjiang. People live against the embankment: the embankment is the road, and the road is the village street.", "宜昌を下ると、川はもう山に挟まれない。江漢平原をゆるやかに蛇行しはじめる。荊江の流れは遅く、土砂が年ごとに河床を持ち上げ、洪水位は堤の内側の田より十数メートルも高くなる。「万里の長江、険は荊江にあり」。人は堤に寄りかかって暮らし、堤はそのまま道であり、村の入口でもある。"),
        l("三峡大坝上游的秭归是屈原的故乡，如今归宜昌管辖。端午前后，峡江两岸包粽赛舟，锣鼓从水面一路传上山坡。出峡之后，粽叶换成菱角与莲藕，船工号子换成集市的吆喝——同一条江，养出两种口音。", "Zigui, upstream of the Three Gorges Dam and now a county of Yichang, is the birthplace of the poet Qu Yuan. Around the Dragon Boat Festival the gorges fill with the smell of steamed rice parcels and the noise of drums carried up the slopes from the water. Downstream the bamboo leaves give way to water chestnut and lotus root, the boatmen's chants to market cries: one river, two accents.", "三峡ダムの上流、いま宜昌市に属する秭帰は詩人・屈原の故郷だ。端午のころ、峡谷には粽を蒸す匂いが満ち、龍舟の太鼓が水面から斜面へ昇っていく。峡を出れば粽の葉は菱と蓮根に、船頭の掛け声は市場の呼び声に変わる。ひとつの川がふたつの訛りを育てている。"),
        l("1952年，荆江分洪工程在南岸围出蓄洪区，把最凶的一段洪水引开；此后又有下荆江的裁弯取直。渡口、码头、堤顶的早市，就在这些工程的阴影里日复一日地开张——治水是国家的事，赶渡是每天的事。", "In 1952 the Jingjiang flood-diversion works walled off a detention basin on the south bank to take the worst of the water; later engineers cut through the loops to straighten the lower reach. In the shade of all that hydrology the ferry landings, the wharves and the dawn markets on top of the dyke open again every morning. Taming the river is the state's business; catching the boat is everyone's.", "1952年、荊江分洪工程が南岸に遊水地を築き、最も荒い水を逃がした。のちに下荊江では蛇行部の裁ち切りも行われた。その巨大な治水の影で、渡し場も埠頭も堤の上の朝市も、毎朝また店を開く。川を治めるのは国の仕事、渡し舟に間に合うのは毎日の仕事だ。"),
      ],
    },
    links: [
      {
        label: l("荆州市", "Jingzhou", "荊州市"),
        href: { zh: "https://zh.wikipedia.org/wiki/荆州市", en: "https://en.wikipedia.org/wiki/Jingzhou", ja: "https://ja.wikipedia.org/wiki/荊州市" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("三峡大坝", "Three Gorges Dam", "三峡ダム"),
        href: { zh: "https://zh.wikipedia.org/wiki/三峡大坝", en: "https://en.wikipedia.org/wiki/Three_Gorges_Dam", ja: "https://ja.wikipedia.org/wiki/三峡ダム" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("葛洲坝水利枢纽", "Gezhouba Dam", "葛洲ダム"),
        href: { zh: "https://zh.wikipedia.org/wiki/葛洲坝水利枢纽", en: "https://en.wikipedia.org/wiki/Gezhouba_Dam", ja: "https://ja.wikipedia.org/wiki/葛洲ダム" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
}

export const EVENT_STORIES: Record<string, { story: L10n[]; links?: RefLink[] }> = {
  "baihetan": {
    story: [
      l("坝址跨云南巧家与四川宁南，横在金沙江干流上。混凝土双曲拱坝坝顶高程八百三十四米，最大坝高二百八十九米。2008年12月开工，2021年6月28日首批机组投产，2022年12月20日十六台机组全部并网。", "The dam straddles Qiaojia in Yunnan and Ningnan in Sichuan, set across the main stem of the Jinsha. Its concrete double-curvature arch rises to a crest 834 metres above sea level, 289 metres at its greatest height. Construction started in December 2008; the first units came online on 28 June 2021, and all sixteen were on the grid by 20 December 2022.", "堤址は雲南省巧家県と四川省寧南県にまたがり、金沙江本流を横切っている。コンクリート二重アーチダムの堤頂標高は八百三十四メートル、最大堤高は二百八十九メートル。2008年十二月着工、二一年六月二十八日に初号機群が営業運転に入り、二二年十二月二十日に十六台すべてが系統に並んだ。"),
      l("左右岸地下厂房各安八台，单机容量一百万千瓦——世界上第一台百万千瓦级水轮发电机组在这里转起来。总装机一千六百万千瓦，仅次于三峡。一台机组的容量，就抵得上一座中型电站。", "Eight units sit in the underground powerhouse on each bank, each rated at 1,000 MW — the first gigawatt-class hydro turbine-generators in the world turn here. Total installed capacity is 16,000 MW, second only to the Three Gorges. A single unit is the equal of a medium-sized power station.", "左右両岸の地下発電所に八台ずつ、単機出力はいずれも百万キロワット。世界で初めて一ギガワット級の水車発電機がここで回りはじめた。総出力千六百万キロワットは三峡に次ぐ規模で、たった一台が中規模の発電所一つ分に相当する。"),
      l("从1981年葛洲坝那台十七万千瓦的机组，到白鹤滩的一百万千瓦，四十年间单机容量翻了近六倍。长江上游的落差就这样被一级一级换成电流，沿高压线离开峡谷，流向两千公里外的江南。", "From Gezhouba's 170 MW unit in 1981 to Baihetan's 1,000 MW, unit size grew almost sixfold in forty years. Step by step the fall of the upper Yangtze is converted into current, which leaves the gorges on transmission lines and travels two thousand kilometres to the delta the river itself built.", "1981年、葛洲ダムで回りはじめた十七万キロワット機から、白鶴灘の百万キロワット機まで、四十年で単機容量はおよそ六倍になった。長江上流の落差は一段ずつ電流へと換えられ、送電線に乗って峡谷を離れ、二千キロ先の江南へ流れてゆく。"),
    ],
    links: [
      {
        label: l("白鹤滩水电站", "Baihetan Dam", "白鶴灘ダム"),
        href: { zh: "https://zh.wikipedia.org/wiki/白鹤滩水电站", en: "https://en.wikipedia.org/wiki/Baihetan_Dam" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "chibi": {
    story: [
      l("建安十三年冬，曹操顺江东下。八十万之数是檄书上的话；周瑜替孙权算过一笔账：中原兵不过十五六万，加上荆州降卒，总计二十余万。今人的估计从十余万到三四十万不等，至今没有定论。孙刘联军呢，约五万。", "In the winter of 208 Cao Cao came downriver. The figure of eight hundred thousand belonged to his proclamations; Zhou Yu did the arithmetic for Sun Quan and put it at fifteen or sixteen myriad northern troops plus the surrendered men of Jing province — some two hundred thousand in all. Modern estimates range from a hundred thousand to three or four hundred thousand, and the question is still open. The allies had perhaps fifty thousand.", "建安十三年（208年）の冬、曹操は長江を下った。八十万という数は檄文の言葉にすぎない。周瑜は孫権のために勘定してみせる——中原の兵は十五、六万、荊州の降兵を加えて二十万余り。現代の推計も十数万から三、四十万まで幅があり、定説はない。孫劉連合軍はおよそ五万だった。"),
      l("决定胜负的不是人数。曹军多为北人，不习水战，军中又起疫疾。黄盖诈降，驾满载薪草膏油的船直冲乌林水寨，借东南风纵火，火势延及岸上营垒。曹操自华容道退往江陵，留曹仁守之，自率军北还。", "Numbers did not decide it. Cao's northerners were strangers to river war, and sickness was moving through the camps. Huang Gai offered a false surrender, ran ships packed with brushwood and oil straight at the fleet moored at Wulin, and let the southeast wind carry the fire into the linked hulls and on to the shore camps. Cao Cao withdrew along the Huarong road to Jiangling, left Cao Ren to hold it, and rode north.", "勝敗を決めたのは数ではない。曹軍の主力は北の人間で水戦に不慣れ、陣中には疫病が広がっていた。黄蓋は偽りの降伏を申し出、薪と油を積んだ船を烏林の水寨へまっすぐ突っ込ませ、東南の風に火を託す。炎は連なる船列から岸の陣へ走った。曹操は華容道を経て江陵へ退き、曹仁を残して北へ帰った。"),
      l("赤壁究竟在哪里，学界有蒲圻、嘉鱼、武昌、汉阳、汉川、黄冈、钟祥等七说，今多主张在今湖北赤壁市。而黄州的那片赤壁——苏轼写《赤壁赋》的地方——史家早已认定不是战场。一场江上的火，把荆州分给了三家。", "Where the Red Cliffs actually stood is disputed: seven candidate sites have been argued, from Puqi to Huanggang, with present-day Chibi City in Hubei now generally favoured. The cliff at Huangzhou, where Su Shi wrote his rhapsodies, was ruled out by historians long ago. One fire on the water divided Jing province three ways.", "赤壁がどこであったかについては蒲圻・嘉魚・武昌・漢陽・漢川・黄岡・鍾祥など七説があり、現在は湖北省赤壁市とする見方が有力である。蘇軾が「赤壁賦」を書いた黄州の崖は、史家がとうに戦場ではないと結論づけた。川の上のひとつの火が、荊州を三つに分けたのだ。"),
    ],
    links: [
      {
        label: l("赤壁之战", "Battle of Red Cliffs", "赤壁の戦い"),
        href: { zh: "https://zh.wikipedia.org/wiki/赤壁之战", en: "https://en.wikipedia.org/wiki/Battle_of_Red_Cliffs", ja: "https://ja.wikipedia.org/wiki/赤壁の戦い" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("周瑜", "Zhou Yu", "周瑜"),
        href: { en: "https://en.wikipedia.org/wiki/Zhou_Yu" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "dujiangyan": {
    story: [
      l("秦昭王时，蜀郡守李冰父子主持开这项工程，年代大致在公元前256至前251年之间——也有学者认为古蜀开明王朝已有其前身。最难的是宝瓶口：玉垒山是坚岩，没有火药，工匠以柴火烧、以冷水浇，让岩石在骤冷中崩裂，前后八年，才凿出二十米宽的一道口子。", "Li Bing, governor of Shu under King Zhao of Qin, directed the work somewhere between 256 and 251 BC — though some scholars argue for an earlier ancestor built under the Kaiming kings of ancient Shu. The hardest part was the Bottle Neck. Mount Yulei is hard rock and there was no gunpowder, so the crews heated the stone with fires and doused it with cold water until it split. Eight years later they had a gap twenty metres wide.", "秦の昭王のころ、蜀郡守の李冰父子がこの工事を率いた。年代はおおむね紀元前256年から前251年、古蜀・開明王朝に前身を求める説もある。最難関は宝瓶口だった。玉塁山は硬い岩、火薬はない。薪で焼き、冷水を浴びせて急冷で割る——八年をかけて幅二十メートルの切り通しを開いた。"),
      l("此后的分水靠地形自己完成。鱼嘴把岷江劈作内外二江，枯水时约六成入内江灌田，洪水时反过来六成排向外江；多余的水与泥沙从飞沙堰二百米宽的缺口自行甩出。秦人要留一条通军船的水道，索性不筑坝——而正是这一点，让它活到了今天。", "After that the terrain does the dividing. The Fish Mouth splits the Min into inner and outer streams: in low water roughly sixty percent runs inward to the fields, in flood the proportion reverses. Surplus water and silt fling themselves out through the two-hundred-metre opening of the Flying Sand Weir. Qin wanted the channel navigable for troop boats, so no dam was built — and that is precisely why it is still alive.", "あとは地形が水を分ける。魚嘴が岷江を内外二江に裂き、渇水期は六割が内江へ入って田を潤し、洪水時には比が逆になる。あふれた水と土砂は幅二百メートルの飛沙堰から自ら外へ躍り出る。秦は軍船の通る水路を残したかった。だからダムを築かなかった——それこそが今日まで生き延びた理由である。"),
      l("灌区一直在长：1937年二百六十余万亩，1980年代初八百五十余万亩，今天超过一千万亩。2000年，都江堰与青城山同列世界文化遗产。2008年汶川地震，鱼嘴出现裂缝、二王庙古建筑群尽毁，而渠首主体仍在分水。", "The command area keeps growing: some 2.6 million mu in 1937, over 8.5 million by the early 1980s, more than ten million today. In 2000 Dujiangyan and Mount Qingcheng were inscribed together on the World Heritage list. When the Wenchuan earthquake of 2008 cracked the Fish Mouth and brought down the halls of the Erwang Temple, the headworks went on dividing water.", "灌漑区は伸び続けた。1937年に二百六十余万畝、1980年代初めに八百五十余万畝、今は一千万畝を超える。2000年、都江堰は青城山とともに世界文化遺産に登録された。2008年の汶川地震で魚嘴には亀裂が入り、二王廟の古建築群は倒壊したが、渠首は水を分け続けた。"),
    ],
    links: [
      {
        label: l("都江堰", "Dujiangyan", "都江堰"),
        href: { zh: "https://zh.wikipedia.org/wiki/都江堰", en: "https://en.wikipedia.org/wiki/Dujiangyan", ja: "https://ja.wikipedia.org/wiki/都江堰" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("李冰", "Li Bing", "李冰"),
        href: { zh: "https://zh.wikipedia.org/wiki/李冰" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "gezhouba": {
    story: [
      l("1970年12月30日在宜昌开工。最大坝高只有四十七米，全长却有2606.5米——它不高，横得很长，像一道把江面按住的手。1981年1月4日大江截流合龙，同年7月30日凌晨一时零六分，二江电厂1号十七万千瓦机组并网试发电。", "Ground was broken at Yichang on 30 December 1970. Its greatest height is only 47 metres, but it runs 2,606.5 metres from bank to bank — not tall, just very wide, like a hand laid flat across the river. The main channel was closed on 4 January 1981, and at 1:06 a.m. on 30 July that year the first 170 MW unit of the Erjiang plant went onto the grid.", "1970年十二月三十日、宜昌で着工した。最大堤高はわずか四十七メートル、しかし全長は二千六百六・五メートル。高くはなく、ただひたすら横に長い。川面を押さえつける掌のようだ。八一年一月四日に本流の締切に成功し、同年七月三十日午前一時六分、二江発電所一号機（十七万キロワット）が系統に並んだ。"),
      l("全厂二十一台机组（两台十七万、十九台12.5万千瓦），装机271.5万千瓦，后经增容至277.7万。三座船闸中的二号闸室长二百八十米、宽三十四米，一次可过万吨级船队。1988年底工程基本建成，1991年11月27日大江工程通过国家竣工验收。", "Twenty-one units in all — two of 170 MW and nineteen of 125 MW — for 2,715 MW installed, later uprated to 2,777 MW. Of its three navigation locks, No. 2 has a chamber 280 metres long and 34 metres wide and can pass a ten-thousand-tonne convoy in one lift. The works were substantially complete by the end of 1988; the main-channel project passed state acceptance on 27 November 1991.", "発電機は二十一台（十七万キロワット二台、十二・五万キロワット十九台）、総出力二百七十一・五万キロワット、のちに二百七十七・七万まで増強された。三つの閘門のうち二号閘は長さ二百八十メートル、幅三十四メートル、一万トン級の船団を一度に通す。八八年末には工事がほぼ完了し、九一年十一月二十七日、本流工事が国家竣工検査に合格した。"),
      l("它真正的分量不在发电量，而在「先试一遍」。大江截流、万吨级船闸、大容量机组、泥沙过坝——所有没把握的题目，都在这里做了一遍草稿。「万里长江第一坝」的意思不只是第一座，也是第一课。上游的三峡，是它的下一步。", "Its real weight is not in the electricity but in the rehearsal. Closing a live channel, a lock for ten-thousand-tonne convoys, large units, sediment passing the dam — every question nobody was sure of got a first draft here. \"The first dam on the ten-thousand-li Yangtze\" means not only the first built, but the first lesson. The Three Gorges, upstream, was the next step.", "この工事の重みは発電量ではなく、「まず一度やってみた」ことにある。本流の締切、一万トン級の閘門、大容量機、土砂の通過——確信の持てなかった問題のすべてが、ここで下書きされた。「万里長江第一のダム」とは、最初に建った、というだけでなく、最初の授業でもあったということだ。次の一歩が上流の三峡である。"),
    ],
    links: [
      {
        label: l("葛洲坝水利枢纽", "Gezhouba Dam", "葛洲ダム"),
        href: { zh: "https://zh.wikipedia.org/wiki/葛洲坝水利枢纽", en: "https://en.wikipedia.org/wiki/Gezhouba_Dam", ja: "https://ja.wikipedia.org/wiki/葛洲ダム" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "grand-canal": {
    story: [
      l("大业元年，隋炀帝开通济渠，自洛阳引黄河水东南入淮，据记载动员民夫百万，五个月而成。同一年，他又征发淮南之民重修邗沟——那条春秋时吴王夫差为北上争霸所开的老水道——自山阳至扬子入江，加宽疏浚。南北自此有了一条连贯的水路。", "In 605 Emperor Yang of Sui opened the Tongji Canal, drawing the Yellow River southeast from Luoyang down to the Huai; a million labourers are recorded, and the work took five months. That same year he conscripted the people of Huainan to rebuild the Hangou — the old channel Fuchai of Wu had cut in the fifth century BC for his march on the north — widening and dredging it from Shanyang to where it meets the Yangtze.", "大業元年（605年）、隋の煬帝は通済渠を開き、洛陽から黄河の水を東南へ引いて淮水に通じさせた。動員は百万人、五か月で竣工したと伝えられる。同じ年、彼は淮南の民を徴発して邗溝を修めた——春秋の呉王夫差が北伐のために掘った古い水路である——山陽から揚子へ、拡幅と浚渫を施して長江に落とした。"),
      l("前后二十余年间，广通渠、通济渠、永济渠、江南河次第开凿，折算今制全长两千七百余公里（另有两千五百公里以上的算法）。运河把江南的稻米送进关中与华北，也把此后一千多年的漕运版图钉在了地图上。2014年，大运河列入世界遗产名录。", "Over some two decades the Guangtong, Tongji, Yongji and Jiangnan canals were dug in turn, together running more than 2,700 kilometres in modern reckoning (other counts put it above 2,500). Rice from the south now reached the capitals of the north, and the grain-transport map of the next thousand years was pinned in place. In 2014 the Grand Canal entered the World Heritage list.", "二十年あまりのあいだに広通渠・通済渠・永済渠・江南河が次々と開かれ、現在の尺度で総延長二千七百キロ余（二千五百キロ以上とする数え方もある）。江南の米は関中と華北へ運ばれ、以後千年余の漕運の地図がここで釘づけにされた。2014年、大運河は世界遺産に登録される。"),
      l("而运河与长江握手的地方是瓜洲。它本是江心淤积成的沙洲，到唐代中期才与北岸相连；开元年间齐澣开伊娄河二十五里，瓜洲遂成南北运河与东西大江的十字路口。王安石在此写下「春风又绿江南岸」。1895年，江水把整座瓜洲城吃了下去。", "Where canal shook hands with river stood Guazhou. It began as a silt bank mid-stream and only joined the north shore by the mid-Tang; when Qi Huan cut the twenty-five-li Yilou channel in the Kaiyuan era, Guazhou became the crossroads of the north-south canal and the east-west Yangtze. Wang Anshi wrote his 'spring wind has greened the southern bank' here. In 1895 the river swallowed the town whole.", "運河と長江が握手する場所が瓜洲だった。もとは川中に土砂が積もってできた砂洲で、北岸とつながったのは唐の中ごろ。開元年間に斉澣が伊婁河二十五里を開くと、南北の運河と東西の大江が交わる十字路となる。王安石が「春風 又緑なり 江南の岸」と詠んだのもここである。1895年、江水は瓜洲の町を丸ごと呑み込んだ。"),
    ],
    links: [
      {
        label: l("京杭大运河", "Grand Canal (China)", "京杭大運河"),
        href: { zh: "https://zh.wikipedia.org/wiki/京杭大运河", en: "https://en.wikipedia.org/wiki/Grand_Canal_(China)", ja: "https://ja.wikipedia.org/wiki/京杭大運河" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("隋唐大运河", "Sui–Tang Grand Canal", "隋唐大運河"),
        href: { zh: "https://zh.wikipedia.org/wiki/隋唐大运河" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("瓜洲", "Guazhou", "瓜洲"),
        href: { zh: "https://zh.wikipedia.org/wiki/瓜洲" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "hanyang": {
    story: [
      l("1890年5月清廷批准兴建，次年8月在汉阳龟山脚下动工，1893年10月22日竣工，1894年5月流出第一炉铁水。它比日本八幡制铁所早了七年，是中国乃至亚洲第一家现代化钢铁企业——从选矿到炼钢，全套设备从海上运来，装在长江边的滩涂上。", "The court approved the works in May 1890; ground was broken at the foot of Guishan hill in Hanyang in August 1891; construction finished on 22 October 1893, and the first iron ran in May 1894. It preceded Japan's Yawata Works by seven years — the first modern iron and steel enterprise in China, and in Asia. Every machine came by sea and was set down on a mudbank beside the Yangtze.", "1890年五月に清朝が建設を裁可し、翌年八月、漢陽の亀山の麓で鍬入れ。九三年十月二十二日に竣工し、九四年五月、最初の湯が流れた。日本の八幡製鉄所より七年早く、中国のみならずアジア初の近代製鉄企業である。選鉱から製鋼まで一式の機械が海を渡り、長江のほとりの砂州に据えられた。"),
      l("官办撑不住，1896年4月改为官督商办，盛宣怀接手；1908年3月26日与大冶铁矿、萍乡煤矿合并，组成汉冶萍煤铁厂矿有限公司。铁矿在下游，煤在南边，钢在江边——三样东西被同一条水道串成一条产业链。辛亥革命前夕，年产钢七万吨，占全国产量九成。", "State management could not carry it. In April 1896 it passed to merchant operation under official supervision, with Sheng Xuanhuai in charge; on 26 March 1908 it merged with the Daye iron mine and the Pingxiang colliery to form the Hanyeping Coal and Iron Company. Ore downstream, coal to the south, steel on the riverbank — one waterway threaded them into a single industry. On the eve of the 1911 Revolution it made 70,000 tonnes of steel a year, about ninety per cent of the national output.", "官営では支えきれず、1896年四月に官督商辦へ移り、盛宣懐が引き受ける。1908年三月二十六日には大冶鉄鉱・萍郷炭鉱と合併し、漢冶萍煤鉄廠鉱有限公司が生まれた。鉄鉱は下流、石炭は南、鋼は川辺——三つを一本の水路が産業に縫い合わせる。辛亥革命前夜、年産鋼七万トン、全国生産の九割を占めた。"),
      l("同一年张之洞还奏准设立湖北枪炮厂。后来的「汉阳造」以德国Gewehr 88为蓝本，1895年至1944年间造出一百零八万余支，从辛亥首义一直打到抗战。江边这一炉铁，最终铸成了半个世纪的枪。", "In that same year Zhang Zhidong also won approval for the Hubei Arsenal. Its rifle, the \"Hanyang made\", was patterned on the German Gewehr 88; some 1,083,480 were built between 1895 and 1944, carried from the first shots of the 1911 Revolution to the war against Japan. One furnace on the riverbank ended up casting half a century of rifles.", "同じ年、張之洞は湖北銃砲廠の設立も奏准させている。のちの「漢陽造」はドイツのGewehr 88を原型とし、1895年から1944年までにおよそ百八万三千挺が造られ、辛亥の最初の一撃から抗日戦までを渡り歩いた。川辺の一炉の鉄が、やがて半世紀分の銃になったのである。"),
    ],
    links: [
      {
        label: l("汉阳铁厂", "Hanyang Ironworks", "漢陽製鉄所"),
        href: { zh: "https://zh.wikipedia.org/wiki/汉阳铁厂" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("汉冶萍公司", "Hanyeping Coal and Iron Company", "漢冶萍公司"),
        href: { zh: "https://zh.wikipedia.org/wiki/汉冶萍公司", ja: "https://ja.wikipedia.org/wiki/漢冶萍公司" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("汉阳造步枪", "Hanyang 88 rifle", "漢陽八八式歩槍"),
        href: { en: "https://en.wikipedia.org/wiki/Hanyang_88" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "jiangnan-town": {
    story: [
      l("盛泽在明弘治年间还只是五六十户人家的村子，靠一台台织机、一条条河汊，长成了「日出万匹、衣被天下」的绸都；南浔自南宋淳祐十二年建镇，把「辑里湖丝」的名字送到很远的地方。这些市镇不是官府画出来的，是水路与机杼自己长出来的。", "In the Hongzhi years of the Ming, Shengze was still a village of fifty or sixty households. Loom by loom, creek by creek, it became a silk town said to \"turn out ten thousand bolts a day and clothe the empire\". Nanxun, chartered in 1252, sent the name of its Jili silk a very long way. No magistrate drew these towns; water and looms grew them.", "盛沢は明の弘治年間、まだ五、六十戸の村にすぎなかった。機（はた）が一台ずつ増え、水路が一本ずつ通じるうちに、「日に万匹を出し、天下に衣を着せる」と謳われる絹の町になる。南潯の立町は南宋・淳祐十二年、その輯里湖糸の名は遠くまで届いた。市鎮は役所が引いた線ではなく、水と機が自ら伸ばした枝であった。"),
      l("更深的变化在田里。江南把稻田换成桑园与棉田，每年向北京漕运四百万石之后，自己反而「半仰食江、楚、庐、安之粟」。宋时「苏常熟，天下足」的老话，到明代换成了「湖广熟，天下足」；汉口也因此成为全国三大米市之一。", "The deeper change was in the fields. Jiangnan traded paddy for mulberry and cotton; after shipping four million shi of tribute grain to Beijing each year it came to live \"half on the rice of Jiang, Chu, Lu and An\". The Song saying \"when Suzhou and Changzhou ripen, the empire has enough\" gave way in the Ming to \"when Huguang ripens, the empire has enough\" — and Hankou became one of the empire's three great rice markets.", "変化はもっと深く、田にあった。江南は水田を桑と綿に替え、毎年四百万石の漕米を北京へ送ったうえで、みずからは「半ば江・楚・廬・安の粟を仰ぐ」暮らしになる。宋の「蘇常熟すれば天下足る」は、明には「湖広熟すれば天下足る」へ置き換わり、漢口は全国三大米市の一つとなった。"),
      l("于是长江被编成一张分工的网：中游种稻，下游织绸，粮与丝在同一条水道上逆向而行。道光二十七年上海口岸出口的蚕丝中，南浔一镇就占一万三千四百二十六包、六成三。等吴淞口的大门推开，江南的河汊早已悄悄接上了世界的航线。", "So the Yangtze became a division of labour: rice in the middle reaches, silk below, grain and thread passing each other on the same water. Of the raw silk exported through Shanghai in 1847, Nanxun alone supplied 13,426 bales — 63 per cent. By the time the gate at Wusongkou swung open, Jiangnan's creeks were already wired into the world's shipping lanes.", "こうして長江は一枚の分業図になった。中流に米、下流に絹。糧と糸が同じ水路をすれ違ってゆく。道光二十七年、上海港から出た生糸のうち南潯一鎮で一万三千四百二十六梱、六割三分を占めた。呉淞口の門が開いたとき、江南の水路はとうに世界の航路へつながっていたのである。"),
    ],
    links: [
      {
        label: l("江南", "Jiangnan", "江南"),
        href: { zh: "https://zh.wikipedia.org/wiki/江南", en: "https://en.wikipedia.org/wiki/Jiangnan", ja: "https://ja.wikipedia.org/wiki/江南" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("南浔镇", "Nanxun", "南潯鎮"),
        href: { zh: "https://zh.wikipedia.org/wiki/南浔镇", en: "https://en.wikipedia.org/wiki/Nanxun" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("盛泽镇", "Shengze", "盛沢鎮"),
        href: { zh: "https://zh.wikipedia.org/wiki/盛泽镇" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "jinancheng": {
    story: [
      l("郢都在江汉平原上铺得很开：东西约4.5公里，南北约3.5公里，城圈内近十六平方公里。楚人何时迁都于此，学界仍有争议，从公元前706年到前689年诸说并存，较通行的说法是楚文王于前689年徙郢。此后四百余年，楚国的号令都从这里发出。", "Ying spread wide across the Jianghan plain: roughly 4.5 kilometres east to west, 3.5 north to south, close to sixteen square kilometres inside its walls. Scholars still disagree on when the Chu court moved here — proposals run from 706 to 689 BC, with King Wen's removal in 689 the most widely held. For more than four centuries afterwards, Chu issued its orders from this ground.", "郢は江漢平原に広く展開していた。東西およそ四・五キロ、南北およそ三・五キロ、城内は十六平方キロ近い。楚がいつここへ都を移したかについては学界になお異説があり、紀元前706年説から前689年説まで並び立つが、文王が前689年に遷ったとする説が通行している。以後四百年余、楚の号令はこの地から発せられた。"),
      l("五十年代起的勘察与1975年的大规模发掘，让这座城重新有了尺寸：城墙与护城河犹存，城内探出夯土台基八十四处，其中六十一处集中在东南，当是宫殿区；另有水井四百余口与冶铸、制陶作坊遗迹。1961年，它被列入第一批全国重点文物保护单位。", "Survey from the 1950s and a large excavation in 1975 gave the city its measurements back. Walls and moat survive; eighty-four rammed-earth platforms were traced within, sixty-one of them clustered in the southeast where the palaces must have stood. Add more than four hundred wells and the remains of bronze foundries and pottery kilns. In 1961 the site joined China's first national list of protected monuments.", "1950年代からの調査と1975年の大規模発掘が、この都に寸法を返した。城壁と濠が残り、城内には版築の台基が八十四か所、うち六十一か所が東南に集中して宮殿区をなす。井戸は四百余、鋳造や製陶の工房跡も見つかった。1961年、第一批全国重点文物保護単位に指定されている。"),
      l("公元前278年，秦将白起拔郢，楚国东迁于陈。相传屈原正是在这一年写下《哀郢》，随后怀石自沉汨罗——连他的生卒年，学界至今没有定论。城废了，楚辞却留下来，成为这条江给中国文学的第一份厚礼。", "In 278 BC the Qin general Bai Qi took Ying and the Chu court fled east to Chen. Tradition places Qu Yuan's lament 'Grieving for Ying' in that same year, shortly before he clasped a stone and walked into the Miluo — though even his birth and death years remain unsettled. The city ended; the Songs of Chu did not, and they are this river's first great gift to Chinese literature.", "紀元前278年、秦の白起が郢を陥とし、楚の宮廷は東の陳へ逃れた。屈原が「哀郢」を書いたのはこの年とされ、まもなく石を抱いて汨羅に身を投じたという——その生没年すら定説を見ない。都は滅び、『楚辞』は残った。この川が中国文学に贈った最初の贈り物である。"),
    ],
    links: [
      {
        label: l("楚纪南故城", "Jinancheng (Ying, capital of Chu)", "郢（楚の都・紀南城）"),
        href: { zh: "https://zh.wikipedia.org/wiki/楚纪南故城", en: "https://en.wikipedia.org/wiki/Jinancheng", ja: "https://ja.wikipedia.org/wiki/郢" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("屈原", "Qu Yuan", "屈原"),
        href: { zh: "https://zh.wikipedia.org/wiki/屈原", en: "https://en.wikipedia.org/wiki/Qu_Yuan", ja: "https://ja.wikipedia.org/wiki/屈原" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "liangzhu": {
    story: [
      l("1936年，施昕更在杭州余杭的黑陶碎片里认出了故乡的史前。此后八十余年，考古学家把一座城从稻田下剥了出来：内城约三百公顷，城墙宽二十到六十米；城心的莫角山夯土台东西六百七十米、南北四百五十米，高出地面九至十五米——全是一筐一筐挑上去的。", "In 1936 a young surveyor named Shi Xingeng recognised his hometown's prehistory in a scatter of black pottery near Hangzhou. Eight decades of digging have since peeled a city out of the rice paddies: an inner enclosure of some 300 hectares, walls twenty to sixty metres thick, and at its heart the Mojiaoshan platform — 670 metres by 450, raised nine to fifteen metres above the plain, one carrying-basket at a time.", "1936年、施昕更は杭州郊外の黒陶の破片に故郷の先史を見た。以来八十余年の発掘が、水田の下から都市を掘り出していく。内城はおよそ三百ヘクタール、城壁の幅は二十から六十メートル。中心の莫角山は東西六百七十メートル、南北四百五十メートル、地面より九〜十五メートル高い人工の台地である。"),
      l("更惊人的在城外。良渚人在西北山谷间筑起十一条坝体，分作山前长堤、谷口高坝与平原低坝，总土方量约二百八十八万立方米，是目前已知世界上最早的拦洪水坝系统。碳十四测年在距今约四千七百至五千一百年之间。它们蓄水、通航，把沼泽变成可耕可行舟的家园。", "The greater wonder lies outside the walls. Eleven dams — a long dyke along the hills, high dams across valley mouths, low dams linking the islets of the plain — moved some 2.88 million cubic metres of earth, the oldest flood-blocking dam system yet known anywhere. Radiocarbon puts them between roughly 5,100 and 4,700 years ago. They held back floods, stored water and floated boats, turning marsh into a country that could be farmed and sailed.", "驚くべきはむしろ城の外だ。山際の長堤、谷口の高いダム、平野の低いダム——十一の堤体が動かした土量は約二百八十八万立方メートル。現在知られるかぎり世界最古の防洪ダム群であり、炭素十四年代は約五千百年前から四千七百年前のあいだに収まる。洪水を止め、水を蓄え、舟を通し、湿地を耕せる土地に変えた。"),
      l("城里出土的玉琮与玉璧，占了这一时期同类玉器的绝大多数；纹样一丝不苟，却没有留下可读的文字。约四千三百年前，一场持续数十年的降水骤增淹没了低地，良渚人弃城而去。2019年七月六日，这座城被列入世界遗产名录。", "The jade found here — cong tubes, bi discs — accounts for the overwhelming majority of such pieces surviving from the period, cut with exacting care yet leaving behind no readable script. Around 4,300 years ago decades of surging rainfall drowned the lowlands and the Liangzhu people walked away from their capital. On 6 July 2019 the ruins entered the World Heritage list.", "ここから出た玉琮や玉璧は、同時代の同種の玉器の圧倒的多数を占める。文様は精緻をきわめるのに、読める文字は一つも残さなかった。約四千三百年前、数十年続いた降水の激増が低地を沈め、人々は都を捨てる。2019年七月六日、遺跡は世界遺産に登録された。"),
    ],
    links: [
      {
        label: l("良渚古城遗址", "Liangzhu Culture", "良渚文化"),
        href: { zh: "https://zh.wikipedia.org/wiki/良渚古城遗址", en: "https://en.wikipedia.org/wiki/Liangzhu_culture", ja: "https://ja.wikipedia.org/wiki/良渚文化" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("良渚古城外围水利工程遗址", "Liangzhu Peripheral Water Conservancy System", "良渚古城外郭水利システム遺跡"),
        href: { zh: "https://zh.wikipedia.org/wiki/良渚古城外围水利工程遗址" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "libai": {
    story: [
      l("李白落在这条江上，本是因为一场政治误判。他入永王李璘幕府，永王兵败，他以「附逆」获罪，长流夜郎。乾元二年春，行至三峡，朝廷大赦，五十八岁的诗人在白帝城下掉转船头——顺流而下，一日之内可抵江陵。", "Li Bai came to be on this river through a political misjudgement. He had joined the staff of Prince Yong; when the prince's rising collapsed he was convicted of complicity and sentenced to exile in Yelang. In the spring of 759, having reached the Gorges, he met an imperial amnesty. At fifty-eight the poet turned his boat around beneath Baidi — downstream, Jiangling lies within a single day.", "李白がこの川にいたのは、ひとつの政治的な読み違いのせいだった。永王璘の幕府に加わり、その挙兵が敗れると「附逆」の罪を得て夜郎への流罪となる。乾元二年（759年）春、三峡まで来たところで大赦に遇った。五十八歳の詩人は白帝城の下で舟の向きを変える——流れに乗れば、江陵は一日の距離だった。"),
      l("白帝城在今重庆奉节，瞿塘峡口北岸。它的名字来自割据蜀地的公孙述：城中井冒白气如白龙，他便自号白帝。223年，刘备在这里托孤于诸葛亮。后来杜甫寓居夔州，也把白帝城写了又写，此地遂有「诗城」之名。", "Baidi stands at the mouth of the Qutang Gorge, in today's Fengjie, Chongqing. The name comes from Gongsun Shu, warlord of Shu: a well in the town breathed white vapour like a dragon, so he styled himself the White Emperor. In 223 Liu Bei died here, entrusting his heir to Zhuge Liang. Later Du Fu, living at Kuizhou, wrote the place over and over until it earned the name City of Poems.", "白帝城は今の重慶市奉節県、瞿塘峡の入口の北岸に立つ。名の由来は蜀に拠った公孫述で、城中の井戸が白龍のような白気を吐いたことから自ら白帝と号したという。223年、劉備はここで諸葛亮に後事を託した。のちに杜甫が夔州に寓し、この城を繰り返し詠んだため「詩城」と呼ばれる。"),
      l("三峡工程蓄水后，白帝城四面环水，成了江中的一座孤岛。峡两岸的猿声早已听不到了，那首二十八个字的七绝却还在——它写的其实不是风景，是一个人忽然被放过时，江水替他表达的轻。", "Since the Three Gorges reservoir filled, Baidi has water on all four sides — an island now. The gibbons that once called from both banks are long gone. What remains is a quatrain of twenty-eight characters that is not really about scenery at all: it is what a river says on behalf of a man who has just been let go.", "三峡ダムの湛水以後、白帝城は四方を水に囲まれ、川中の孤島となった。両岸に啼いた猿の声はとうに聞こえない。残ったのは二十八字の七言絶句だけである。あれは風景の詩ではない。赦された人間の身の軽さを、長江が代わりに言ってくれた詩なのだ。"),
    ],
    links: [
      {
        label: l("李白", "Li Bai", "李白"),
        href: { zh: "https://zh.wikipedia.org/wiki/李白", en: "https://en.wikipedia.org/wiki/Li_Bai", ja: "https://ja.wikipedia.org/wiki/李白" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("早发白帝城", "\"Early Departure from Baidi\"", "「早に白帝城を発す」"),
        href: { zh: "https://zh.wikipedia.org/wiki/早发白帝城" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("白帝城", "Baidicheng", "白帝城"),
        href: { zh: "https://zh.wikipedia.org/wiki/白帝城", en: "https://en.wikipedia.org/wiki/Baidicheng", ja: "https://ja.wikipedia.org/wiki/白帝城" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "liuchao": {
    story: [
      l("229年孙权称帝，把都城从武昌迁回建业。早在211年他就移治秣陵，在金陵邑旧地筑起石头城——一座扼守江面的要塞，也是后来「石头城」三字的来处。此后三百六十年，孙吴、东晋与宋、齐、梁、陈六代相继定都于此。", "In 229 Sun Quan took the imperial title and moved his capital from Wuchang back to Jianye. He had shifted his seat to Moling as early as 211, raising the Stone City on the old Jinling ground — a fortress commanding the river, and the source of a name the city has never quite shed. For the next three and a half centuries six courts in succession — Wu, Eastern Jin, Song, Qi, Liang, Chen — ruled from here.", "229年、孫権は帝位に即き、都を武昌から建業へ戻した。すでに211年には治所を秣陵に移し、金陵邑の旧地に石頭城を築いている——長江を扼する要塞であり、「石頭城」という名の出どころでもある。以後三百六十年、呉・東晋・宋・斉・梁・陳の六朝がここに都した。"),
      l("梁武帝时，城中户口二十八万户；有研究据此推算人口近百万，而同时期的君士坦丁堡约五十万——建康很可能是当时世界上最大的城市。北方士族南渡带来经学与书法，佛寺与清谈同时兴盛，诗歌也从建安的慷慨转向对形式之美的经营，为唐诗铺了路。", "Under Emperor Wu of Liang the city counted 280,000 households; some estimates put its population near a million, against roughly half that in Constantinople — which would make Jiankang the largest city on earth. Northern gentry fleeing south brought classical learning and calligraphy with them; monasteries and pure conversation flourished side by side; and poetry turned from the plain vehemence of Jian'an toward the cultivation of form, laying the road to the Tang.", "梁の武帝のころ、城中の戸数は二十八万戸。人口を百万近くと見積もる研究もあり、同時期のコンスタンティノープルが約五十万だったことを思えば、建康は当時世界最大の都市だったかもしれない。南渡した北の士族が経学と書を運び、仏寺と清談が並び栄え、詩は建安の慷慨から形式美の彫琢へと向かい、唐詩への道を敷いた。"),
      l("繁华结束得很快。548年侯景起兵，围城经年，城中人多死于战乱与饥馑。589年隋灭陈，索性把建康城平毁为农田。六朝的宫阙从地面上消失了，留下的是一座城反复被写进诗里的能力。", "It ended quickly. Hou Jing rose in 548, and the year-long siege that followed killed or starved most of those inside. In 589 the Sui destroyed Chen and levelled Jiankang into farmland. The palaces of the Six Dynasties vanished from the ground; what survived was the city's habit of being written into poems.", "終わりは早かった。548年に侯景が兵を挙げ、一年に及ぶ包囲で城中の多くが戦火と飢えに斃れる。589年、隋が陳を滅ぼすと、建康は畑に均された。六朝の宮闕は地上から消え、残ったのは、この都が繰り返し詩に書き込まれてゆく力だけだった。"),
    ],
    links: [
      {
        label: l("六朝", "Six Dynasties", "六朝"),
        href: { zh: "https://zh.wikipedia.org/wiki/六朝", en: "https://en.wikipedia.org/wiki/Six_Dynasties", ja: "https://ja.wikipedia.org/wiki/六朝" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("建康", "Jiankang", "建康"),
        href: { zh: "https://zh.wikipedia.org/wiki/建康", en: "https://en.wikipedia.org/wiki/Jiankang", ja: "https://ja.wikipedia.org/wiki/建康" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("石头城", "Stone City", "石頭城"),
        href: { zh: "https://zh.wikipedia.org/wiki/石头城" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "sanxia-dam": {
    story: [
      l("工期是一段很长的倒计时：1994年12月14日正式开工，1997年11月8日大江截流，2002年11月6日导流明渠截流，2003年7月10日首台机组并网。2006年5月20日，全长二千三百三十五米的坝体浇筑到海拔一百八十五米设计高程，大坝全线建成。", "The schedule reads like a long countdown: work formally began on 14 December 1994; the main channel was closed on 8 November 1997; the diversion channel on 6 November 2002; the first generator went onto the grid on 10 July 2003. On 20 May 2006 the 2,335-metre dam wall reached its design crest of 185 metres above sea level and stood complete along its whole length.", "工程表は長いカウントダウンのようだ。1994年十二月十四日に正式着工、九七年十一月八日に本流締切、2002年十一月六日に導流明渠締切、〇三年七月十日に初号機が系統連系。そして〇六年五月二十日、全長二千三百三十五メートルの堤体が標高百八十五メートルの設計高に達し、ダムは全線で姿を現した。"),
      l("三十二台七十万千瓦机组加两台五万千瓦，总装机二千二百五十万千瓦，2012年7月4日全部投产。2020年全年发电一千一百一十八亿千瓦时，刷新伊泰普保持的世界纪录。防洪库容221.5亿立方米，正常蓄水位一百七十五米，2010年10月26日首次蓄到这个高度。", "Thirty-two 700 MW turbines plus two 50 MW station units give 22,500 MW installed; the last came online on 4 July 2012. In 2020 the plant generated 111.8 TWh, breaking Itaipu's world record. Its flood-storage volume is 22.15 billion cubic metres, its normal pool level 175 metres — first reached on 26 October 2010.", "七十万キロワット機三十二台に五万キロワット機二台を加え、総出力二千二百五十万キロワット。全機が動き出したのは2012年七月四日である。二〇年の年間発電量は千百十八億キロワット時に達し、イタイプの世界記録を塗り替えた。洪水調節容量は二百二十一・五億立方メートル、常時満水位は百七十五メートル、初めてそこまで湛えたのは一〇年十月二十六日だった。"),
      l("代价与收获同样具体：百万余人离开故乡；双线五级船闸年通过能力五千万吨，升船机可载三千吨级船舶，一次翻坝三四十分钟。从都江堰「低作堰」的不筑坝，到三峡一百八十五米的高程，中国人对同一条江给出了两种截然不同的答案。", "The costs and the gains are equally concrete: over a million people left home; the twin five-stage locks pass 50 million tonnes a year, and the ship lift raises vessels of up to 3,000 tonnes over the dam in thirty to forty minutes. From Dujiangyan's refusal to build a dam at all — \"keep the weirs low\" — to a crest at 185 metres, the Chinese have given the same river two utterly different answers.", "代償も恩恵も、同じだけ具体的である。百万を超える人が故郷を離れた。複線五段の閘門は年間五千万トンを通し、昇船機は三千トン級の船を三、四十分で堤の向こうへ運ぶ。ダムを築かず「堰は低く」と説いた都江堰から、標高百八十五メートルの堤頂まで——中国人は同じ一本の川に、まったく異なる二つの答えを出したのだ。"),
    ],
    links: [
      {
        label: l("三峡大坝", "Three Gorges Dam", "三峡ダム"),
        href: { zh: "https://zh.wikipedia.org/wiki/三峡大坝", en: "https://en.wikipedia.org/wiki/Three_Gorges_Dam", ja: "https://ja.wikipedia.org/wiki/三峡ダム" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("三峡大坝主体工程全线竣工（2006）", "Dam wall completed, 20 May 2006", "堤体全線完成（2006年5月20日）"),
        href: { zh: "https://www.12371.cn/2021/05/20/VIDE1621467001583651.shtml" },
        source: l("共产党员网", "12371.cn", "12371.cn"),
      },
    ],
  },
  "sanxingdui": {
    story: [
      l("1929年春，广汉月亮湾的农人燕道诚一家清理水沟，挖出一坑玉石器——古蜀的门缝就此掀开（西文亦有记作1927年的）。真正的震动在1986年夏：两座祭祀坑出土青铜器、玉器、金器与八十根象牙共一千七百余件，器物多被砸碎、焚烧后掩埋，像一场刻意的告别。", "In the spring of 1929 a farming family named Yan, clearing a ditch at Guanghan, turned up a pit of jades — the first crack of light into ancient Shu (some Western accounts date the find to 1927). The real shock came in the summer of 1986, when two sacrificial pits gave up more than 1,700 bronzes, jades, gold objects and eighty elephant tusks. Most had been smashed and burned before burial, as though deliberately taken leave of.", "1929年春、広漢・月亮湾の農民燕道誠の一家が溝を浚っていて玉器の坑を掘り当てた。古蜀への扉が細く開く（西洋の文献では1927年とするものもある）。決定的だったのは1986年夏、二基の祭祀坑から青銅器・玉器・金器と象牙八十本、あわせて千七百点余り。その多くは打ち砕かれ、焼かれてから埋められていた。"),
      l("从坑里站起来的，是一个从未在史书中露过面的世界。青铜大立人通高约2.6米、重一百八十公斤；纵目面具宽1.38米，眼球柱状外凸；青铜神树高3.96米，枝上栖鸟。还有一柄长1.42米的金杖，一端平雕三组图案：戴五齿高冠的对称人头、相向的双鸟与鱼。", "What rose out of the pits was a world no chronicle had ever mentioned. A bronze figure stands about 2.6 metres tall and weighs 180 kilograms; a mask 1.38 metres wide pushes its pupils out on stalks; a bronze sacred tree reaches 3.96 metres with birds perched in its branches. And a gold staff 1.42 metres long, one end engraved with three bands of figures: paired human heads smiling under five-toothed crowns, birds turned to face each other, and fish.", "坑から立ち上がったのは、史書のどこにも出てこない世界だった。青銅立人像は全高およそ二・六メートル、重さ百八十キロ。縦目仮面は幅一・三八メートル、瞳が柱のように突き出す。青銅神樹は三・九六メートル、枝には鳥が止まる。長さ一・四二メートルの金杖は、一端に三組の図案を平彫りにする——五歯の高冠をかぶり微笑む対の人面、向かい合う二羽の鳥、そして魚。"),
      l("2020年起，三号至八号坑陆续揭露，新出文物逾万件，其中一件金面具含金量约八成、重二百八十克。研究者指出，这里的青铜与殷商相通、象牙来自南方，古蜀并非孤岛。遗址的绝对年代学界仍在讨论，主流意见把祭祀坑放在商代晚期。", "From 2020 onward pits three through eight yielded over ten thousand further objects, among them a gold mask of roughly eighty-four percent gold weighing 280 grams. Researchers trace the bronze here to contact with Shang Yin and the ivory to the south: Shu was no island. The site's absolute dating is still debated, though most scholars place the sacrificial pits in the late Shang.", "2020年以降、三号から八号の坑が次々と開き、新たな出土品は一万点を超えた。うち一枚の金仮面は金の含有率およそ八割、重さ二百八十グラム。研究者は、青銅が殷とのつながりを、象牙が南方とのつながりを示すという。古蜀は孤島ではなかった。遺跡の絶対年代にはなお議論があるが、祭祀坑を殷代後期に置く見方が有力である。"),
    ],
    links: [
      {
        label: l("三星堆遗址", "Sanxingdui", "三星堆遺跡"),
        href: { zh: "https://zh.wikipedia.org/wiki/三星堆遗址", en: "https://en.wikipedia.org/wiki/Sanxingdui", ja: "https://ja.wikipedia.org/wiki/三星堆遺跡" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("三星堆馆长讲国宝 · 金杖", "The Sanxingdui Gold Staff (Sichuan Online)", "三星堆の金杖（四川オンライン）"),
        href: { zh: "https://sichuan.scol.com.cn/ggxw/202210/58741417.html" },
        source: l("四川在线", "Sichuan Online", "四川オンライン"),
      },
    ],
  },
  "shanghai-port": {
    story: [
      l("开埠的日期定得很具体：1842年8月29日《南京条约》在南京江面的军舰上签字，上海列入五口；1843年10月8日《虎门条约》补足章程；11月8日夜，首任英国领事巴富尔乘「麦杜萨号」抵沪，连一间领事馆的房子都一时找不到；11月17日，上海正式开埠。", "The dates are unusually exact. On 29 August 1842 the Treaty of Nanking was signed aboard a warship in the river, naming Shanghai one of five ports. The supplementary Treaty of the Bogue followed on 8 October 1843. On the night of 8 November the first British consul, George Balfour, arrived aboard the Medusa and could not at first find a house for his consulate. On 17 November the port formally opened.", "開港の日付はきわめて具体的だ。1842年八月二十九日、南京の川面に浮かぶ軍艦上で南京条約が結ばれ、上海は五口の一つに数えられる。翌年十月八日に虎門条約が細目を補い、十一月八日の夜、初代英国領事バルフォアがメドゥーサ号で着任するが、領事館にする家すら見つからなかった。そして十一月十七日、上海は正式に開かれた。"),
      l("接着是一寸一寸划出来的城。1845年《土地章程》定下洋泾浜以北的英租界，1849年法租界继之，1863年英美两界合并为公共租界。县城之外的一片江滩，就这样长成了另一座城，而它的运气全在身后那条江。", "Then came a city measured out foot by foot. The Land Regulations of 1845 fixed the British settlement north of the Yangjingbang creek; the French settlement followed in 1849; in 1863 the British and American areas merged into the International Settlement. A stretch of mudflat outside the walled county town grew into a second city — and its luck lay entirely in the river behind it.", "続いて、寸刻みに区切られた街が現れる。1845年の土地章程が洋涇浜以北にイギリス租界を定め、四九年にフランス租界が続き、六三年には英米の区域が合して共同租界となった。県城の外の泥の岸が、もう一つの都市に育つ。その運はすべて、背後の大河が握っていた。"),
      l("长江与运河把江南的丝、湖广的米送到黄浦江边，上海只需要收下并转运。一百六十多年后，2010年它超过新加坡成为世界第一大集装箱港，2019年吞吐量四千三百三十万标准箱。开埠那天推开的，其实是一条内陆大河通向海洋的闸门。", "The Yangtze and the Grand Canal delivered Jiangnan's silk and Huguang's rice to the Huangpu; Shanghai only had to receive and forward them. More than a century and a half later, in 2010, it passed Singapore to become the world's busiest container port, handling 43.3 million TEU in 2019. What opened that November day was a sluice gate between an inland river and the sea.", "長江と大運河が江南の絹と湖広の米を黄浦江のほとりまで運び、上海はそれを受け取って積み替えるだけでよかった。一世紀半あまりのち、2010年にシンガポールを抜いて世界一のコンテナ港となり、2019年の取扱量は四千三百三十万TEU。あの十一月に開いたのは、内陸の大河と海とをつなぐ水門だったのである。"),
    ],
    links: [
      {
        label: l("上海开埠", "Shanghai as a treaty port", "上海の開港"),
        href: { zh: "https://zh.wikipedia.org/wiki/上海开埠", en: "https://en.wikipedia.org/wiki/Shanghai_International_Settlement", ja: "https://ja.wikipedia.org/wiki/上海租界" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("南京条约", "Treaty of Nanking", "南京条約"),
        href: { zh: "https://zh.wikipedia.org/wiki/南京条约", en: "https://en.wikipedia.org/wiki/Treaty_of_Nanking", ja: "https://ja.wikipedia.org/wiki/南京条約" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("上海港", "Port of Shanghai", "上海港"),
        href: { zh: "https://zh.wikipedia.org/wiki/上海港", en: "https://en.wikipedia.org/wiki/Port_of_Shanghai", ja: "https://ja.wikipedia.org/wiki/上海港" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "sushi": {
    story: [
      l("元丰七年六月，苏轼自黄州量移汝州，顺道送长子苏迈去饶州德兴县赴任，父子的船在湖口停下。石钟山正立在鄱阳湖注入长江的那个口子上，分上下两座，合称「双钟」。山名何来，前人已有两说：郦道元谓水石相搏、声如洪钟，李渤谓敲石有声。", "In the sixth month of 1084 Su Shi, transferred from Huangzhou to Ruzhou, took the chance to escort his eldest son Su Mai to a magistracy at Dexing. Their boat stopped at Hukou. Stone Bell Hill stands exactly where Poyang Lake pours into the Yangtze — two hills, upper and lower, called the Twin Bells. Two explanations of the name were already on the books: Li Daoyuan's, that water striking rock rings like a great bell; Li Bo's, that the stones sound when struck.", "元豊七年（1084年）六月、蘇軾は黄州から汝州へ移される道すがら、長男の蘇邁を饒州徳興県の県尉に送っていった。父子の舟は湖口に停まる。石鐘山は鄱陽湖が長江に注ぎ込む、まさにその口に立ち、上下二つの山からなって「双鐘」と呼ばれた。名の由来には先人の二説がある。酈道元は水と石がぶつかって洪鐘のごとく鳴るのだといい、李渤は石を叩けば音がするのだといった。"),
      l("苏轼两说都不信。他等到夜里，乘小舟到绝壁之下——那是白天没人愿意去的地方——听见山下石穴石缝吞吐风浪，噌吰如钟鼓不绝。于是他写下那句话：事不目见耳闻，而臆断其有无，可乎？", "Su Shi believed neither. He waited for night and took a small boat in under the sheer cliff — where nobody goes by daylight — and heard the caves and fissures at the waterline swallowing and spitting the swell, booming on like bells and drums. Then he wrote the sentence: to judge whether a thing exists without seeing it with your own eyes and hearing it with your own ears — can that be done?", "蘇軾はどちらも信じなかった。夜を待ち、小舟で絶壁の真下まで漕ぎ寄せる——昼には誰も行かない場所である。すると水際の洞や裂け目が波を呑んでは吐き、鐘鼓のように鳴りやまない。そこで彼はあの一句を書いた。目で見ず耳で聞かずに、有る無しを臆断してよいものか、と。"),
      l("有意思的是，他也未必对。后世又有人提出山形如覆钟之说，以及溶洞共鸣之说，争论至今没停。但《石钟山记》真正留下的不是答案，而是一种姿态：与其在书上辩，不如夜半划一条小船，去水边亲耳听一听。", "The interesting part is that he may have been wrong too. Later writers proposed that the hill is simply shaped like an upturned bell, or that limestone caverns do the resonating; the argument has never quite closed. What the essay really left behind is not an answer but a posture: rather than argue from books, row out at midnight and listen for yourself.", "面白いのは、蘇軾もまた正しいとは限らないことだ。のちに、山の形が伏せた鐘に似ているからだという説や、鍾乳洞の共鳴だという説が現れ、議論はいまだ閉じていない。『石鐘山記』が残したのは答えではなく姿勢である。書物の上で争うより、夜半に小舟を出し、自分の耳で聴け。"),
    ],
    links: [
      {
        label: l("石钟山记", "\"Record of Stone Bell Hill\"", "「石鐘山記」"),
        href: { zh: "https://zh.wikipedia.org/wiki/石钟山记" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("石钟山", "Stone Bell Hill", "石鐘山"),
        href: { zh: "https://zh.wikipedia.org/wiki/石钟山" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("苏轼", "Su Shi", "蘇軾"),
        href: { zh: "https://zh.wikipedia.org/wiki/苏轼", en: "https://en.wikipedia.org/wiki/Su_Shi", ja: "https://ja.wikipedia.org/wiki/蘇軾" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "wuhan-bridge": {
    story: [
      l("1955年9月1日开工，1957年10月15日通车，只用了两年零一个半月。正桥一千一百五十六米，连引桥全长一千六百七十米；八墩九孔，每孔跨度一百二十八米。上层是双向四车道公路带人行道，下层是京广铁路复线——一座桥同时担两条路。", "Work began on 1 September 1955 and the bridge opened on 15 October 1957 — two years and six weeks. The main span structure runs 1,156 metres, 1,670 metres with the approaches: eight piers, nine openings, each 128 metres clear. A four-lane road with footways rides on top, a double-track line of the Beijing–Guangzhou railway below. One bridge carrying two roads at once.", "1955年九月一日に着工し、五七年十月十五日に開通。わずか二年と六週間である。正橋は千百五十六メートル、取付部を含めて千六百七十メートル。橋脚八基、九径間、各径間は百二十八メートル。上層は片側二車線の道路と歩道、下層は京広鉄道の複線——一つの橋が二本の道を同時に背負う。"),
      l("难在江底。传统的气压沉箱法要工人在高压下深水作业，既伤身体，又受汛期限制；苏联专家西林力主改用管柱钻孔法，把管柱打入岩层再钻孔灌注。二十八人的专家组驻在工地上，桥本身的造价最终为六千五百八十一万元。", "The difficulty lay on the riverbed. Compressed-air caissons meant men working deep under pressure, damaging to health and hostage to the flood season; the Soviet consultant Konstantin Silin argued instead for sinking large tubular piles and drilling through them into rock. A team of twenty-eight Soviet engineers lived on the site. The bridge itself finally cost 65.81 million yuan.", "難所は川底にあった。従来の圧気ケーソン工法は高圧下での深水作業を強い、身体を損ない、増水期にも縛られる。ソ連の技師シーリンは、大口径の管柱を打ち込んで岩盤まで削孔する新工法を強く勧めた。二十八人の専門家団が現場に住み込み、橋そのものの工費は最終的に六千五百八十一万元となった。"),
      l("通车之前，火车过江要拆成车厢由轮渡驳运；通车之后，京汉、粤汉两线在此接轨，京广铁路从北京直达广州。毛泽东写下「一桥飞架南北，天堑变通途」——那不是修辞，是一天之内发生的事实。", "Before it opened, trains crossed the Yangtze in pieces, shunted onto ferries. After it opened, the Beijing–Hankou and Canton–Hankou lines met here and the Beijing–Guangzhou railway ran unbroken from the capital to the south coast. Mao's line — \"a bridge flies north to south, the moat of heaven becomes a road\" — was not a figure of speech but a fact that happened in a single day.", "開通前、列車は車両ごとに切り離され、渡し船で川を渡された。開通後、京漢線と粤漢線がここで接続し、京広鉄道は北京から広州まで一本につながる。毛沢東の「一橋飛んで南北を架し、天塹は通途と変ず」は修辞ではなく、たった一日で起きた事実だった。"),
    ],
    links: [
      {
        label: l("武汉长江大桥", "Wuhan Yangtze River Bridge", "武漢長江大橋"),
        href: { zh: "https://zh.wikipedia.org/wiki/武汉长江大桥", en: "https://en.wikipedia.org/wiki/Wuhan_Yangtze_River_Bridge", ja: "https://ja.wikipedia.org/wiki/武漢長江大橋" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "wusong-defense": {
    story: [
      l("吴淞口的炮位有过两次生死。第一次在1842年6月16日：江南提督陈化成率部死守炮台，中弹阵亡，部将刘国标背着他的遗体藏进江边芦苇；英军十四艘军舰缴去火炮二百五十门，三天后上海失守。近代中国的江防，是从这里被撕开的。", "The gun positions at Wusongkou died twice. The first time was 16 June 1842: Chen Huacheng, Admiral of Jiangnan, held the batteries until he was shot dead, and his officer Liu Guobiao carried the body off and hid it in the reeds. Fourteen British ships took 250 guns; three days later Shanghai fell. This is where China's modern river defence was first torn open.", "呉淞口の砲座は二度死んでいる。一度目は1842年六月十六日。江南提督・陳化成は砲台を守り抜いて銃弾に倒れ、部将の劉国標がその亡骸を背負って葦の茂みに隠した。英艦十四隻が大砲二百五十門を奪い、三日後に上海は落ちる。近代中国の江防は、ここから裂けた。"),
      l("第二次在九十五年后。1937年8月13日淞沪会战爆发，8月23日日军在川沙口、狮子林、宝山一线抢滩，直扑吴淞。中国先后投入五十余师、约六十万人，日军九个师团约三十万人，两支大军在黄浦江与长江的夹角里死磕了一百零五天。", "The second time came ninety-five years later. The Battle of Shanghai opened on 13 August 1937; on 23 August Japanese troops stormed ashore at Chuanshakou, Shizilin and Baoshan and drove straight for Wusong. China committed more than fifty divisions, some 600,000 men; Japan nine divisions, about 300,000. The two armies ground against each other for 105 days in the wedge between the Huangpu and the Yangtze.", "二度目は九十五年後に来た。1937年八月十三日、第二次上海事変が始まり、二十三日には日本軍が川沙口・獅子林・宝山の線に強行上陸して呉淞へ迫る。中国側は五十余個師団・約六十万、日本側は九個師団・約三十万。二つの大軍は黄浦江と長江の挟角で百五日間、削り合った。"),
      l("9月6日，第九十八师奉命死守宝山，激战至伤亡殆尽；10月27日至31日，谢晋元一营困守苏州河畔四行仓库四昼夜。会战打碎了「三个月亡华」的算盘，也换来了工厂西迁的时间——至1940年内迁企业中六成七是重工业，一路溯江搬进内地。江防守不住，但江本身成了退路。", "On 6 September the 98th Division was ordered to hold Baoshan and fought until it was destroyed; from 27 to 31 October Xie Jinyuan's single battalion held the Sihang Warehouse on Suzhou Creek for four days and nights. The battle broke the calculation that China could be finished in three months, and bought time to move the factories: by 1940, 67 per cent of the relocated enterprises were heavy industry, hauled upriver into the interior. The river line could not be held — but the river itself became the way out.", "九月六日、第九十八師は宝山の死守を命じられ、傷つき尽きるまで戦った。十月二十七日から三十一日まで、謝晋元の一個大隊は蘇州河畔の四行倉庫に四昼夜こもる。この会戦は「三か月で中国を屈服させる」という算盤を砕き、同時に工場疎開の時間を稼いだ。1940年までに内陸へ移った企業の六割七分は重工業で、みな川を遡って運ばれた。防衛線は守れなかったが、川そのものが退路になったのである。"),
    ],
    links: [
      {
        label: l("淞沪会战", "Battle of Shanghai (1937)", "第二次上海事変"),
        href: { zh: "https://zh.wikipedia.org/wiki/淞沪会战", en: "https://en.wikipedia.org/wiki/Battle_of_Shanghai", ja: "https://ja.wikipedia.org/wiki/第二次上海事変" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("吴淞战役（1842）", "Battle of Woosung (1842)", "呉淞の戦い（1842年）"),
        href: { zh: "https://zh.wikipedia.org/wiki/吴淞战役", en: "https://en.wikipedia.org/wiki/Battle_of_Woosung" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
      {
        label: l("陈化成", "Chen Huacheng", "陳化成"),
        href: { zh: "https://zh.wikipedia.org/wiki/陈化成", en: "https://en.wikipedia.org/wiki/Chen_Huacheng" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
  "xiluodu": {
    story: [
      l("坝址在云南永善与四川雷波交界的溪洛渡峡谷，两岸壁立，江面窄得像被夹住。2005年12月26日动工，2007年11月8日截流，2013年7月15日首台机组正式发电，2014年6月30日十八台机组全部投产。", "The site is the Xiluodu gorge on the border of Yongshan in Yunnan and Leibo in Sichuan, where the cliffs stand sheer and the river is squeezed narrow. Construction began on 26 December 2005, the river was closed on 8 November 2007, the first unit generated on 15 July 2013, and all eighteen were running by 30 June 2014.", "堤址は雲南省永善県と四川省雷波県の境、渓洛渡峡谷にある。両岸は屏風のように切り立ち、川幅は挟まれたように細い。2005年十二月二十六日着工、〇七年十一月八日締切、一三年七月十五日に初号機が発電を開始し、一四年六月三十日に十八台すべてが動き出した。"),
      l("混凝土双曲拱坝高285.5米，把江水锁进峡口，力沿着弧面传给两岸的岩壁。峡谷太窄，厂房无处安放，只能挖进山里：左右岸各九台七十七万千瓦机组，构成世界最大的地下厂房洞室群。总装机一千三百八十六万千瓦，水库总库容126.7亿立方米。", "A concrete double-curvature arch dam 285.5 metres high plugs the gorge, passing its load along the curve into the rock of both banks. The gorge was too narrow for a powerhouse, so the powerhouse went into the mountain: nine 770 MW units on each side, the largest underground cavern complex of its kind in the world. Installed capacity 13,860 MW; reservoir volume 12.67 billion cubic metres.", "コンクリート二重アーチダムは高さ二百八十五・五メートル。水を峡谷の口に封じ、力を弧面づたいに両岸の岩へ逃がす。谷が狭すぎて発電所を置く場所がなく、山を掘って中に入れた。左右両岸に七十七万キロワット機を九台ずつ、世界最大級の地下空洞群である。総出力千三百八十六万キロワット、貯水容量百二十六・七億立方メートル。"),
      l("它不是孤立的一座坝，而是金沙江下游梯级中的一级——上游还有更高的坝，下游连着三峡。整条长江上游的落差，被一级一级切开、再一级一级换成电，溪洛渡是其中最陡的那一段。", "It does not stand alone: it is one step of the lower-Jinsha cascade, with higher dams above it and the Three Gorges below. The whole fall of the upper Yangtze is being cut into steps and traded, step by step, for electricity — and Xiluodu holds one of the steepest of them.", "これは孤立した一基のダムではない。金沙江下流の階段式開発の一段であり、上流にはさらに高い堤が、下流には三峡が控える。長江上流の落差は一段ずつ切り分けられ、一段ずつ電気に換えられてゆく。渓洛渡はその中でも、もっとも急な一段だ。"),
    ],
    links: [
      {
        label: l("溪洛渡水电站", "Xiluodu Dam", "渓洛渡ダム"),
        href: { zh: "https://zh.wikipedia.org/wiki/溪洛渡水电站", en: "https://en.wikipedia.org/wiki/Xiluodu_Dam", ja: "https://ja.wikipedia.org/wiki/溪洛渡ダム" },
        source: l("维基百科", "Wikipedia", "ウィキペディア"),
      },
    ],
  },
}
