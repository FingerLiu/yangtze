# 万里长江 · 交互脑图

一个关于长江的单页交互网站：从源头（沱沱河）到入海口（上海），沿江标出重要地点，展示每个地点的 **自然 · 历史 · 人文** 特点，并提供覆盖"上下五千年"的可拖动时间轴事件视图。

**三语支持**：中文 / English / 日本語，顶栏一键切换（记忆在 localStorage，首次访问按浏览器语言自动选择）。全部文案（地点、事件、朝代、界面）在 `src/data/` 与 `src/i18n/` 中以 `{zh, en, ja}` 三语对象维护，无运行时翻译服务。

## 三个视图

- **河流地图**：真实地理地图（Natural Earth 中国及周边边界 + 真实经纬度的长江干流、主要支流、洞庭/鄱阳/太湖与京杭大运河，d3-geo 墨卡托投影，数据全部打包、离线可用），18 个沿江节点。点击节点弹出详情抽屉：顶部实景首图（带作者与许可署名），按 自然 / 历史 / 人文 分 tab 展示"看点""意义"与成段的"细说"，底部是延伸阅读外链和该地的时间轴事件——事件可就地展开，看到它自己的正文、配图与外链。支持滚轮缩放、拖拽平移。
- **时间轴视图**：底部时间轴覆盖公元前 3400 年至今，采用分段线性比例尺（远古压缩、近现代拉伸）。拖动滑块或点击事件刻度，对应历史事件（治水史 / 工程史 / 文明史 / 战争史四类）在江上对应位置亮起；也可点击"沿时间航行"自动播放。江上浮出的事件气泡可以直接点击，打开该地详情并展开这条事件。
- **知识图谱**：297 个节点、471 条边的长江知识图谱。上方一条横轴按真实经度排开 18 个沿江地点（自西向东就是这条江的走向），每一站的关联实体排在它正下方，底部一条横轴是九个朝代——节点的位置本身就说明了「它在江的哪一段、属于哪个年代」。点击节点看它的全部关联并可逐跳跟随，顶部搜索框可按三语名字定位。数据与 d3-force 都单独打包，不打开这个 tab 就不会下载。

## 技术

- Vite + React 18 + TypeScript，纯静态 SPA，无后端、无运行时外部请求（地图与照片全部打包，不依赖在线地图瓦片或外部图床；卡片里的「延伸阅读」是外链，仅在用户点击时才跳转出去）。
- d3-geo + world-atlas/topojson（真实地图投影与边界）、d3-shape（河道曲线）、d3-scale（分段时间比例尺）、d3-zoom（平移缩放）。
- 原生 CSS 暖色纸张风主题（休闲风格），无 UI 组件库。

## 开发

```bash
cd yangtze
npm install
npm run dev      # 本地开发
npm run build    # 产物输出到 dist/（base 为相对路径，可部署到任意子路径）
npm run preview  # 预览构建产物
```

数据（地点、事件、朝代分段）都在 `src/data/` 下的 TypeScript 模块中，直接编辑即可扩充内容。

## 手机端

窄屏（≤760px）自动切换为竖版滚动布局：

- **河流地图** → 顺流而下的"旅程"长页：左侧河流脊线，按上游/中游/下游分组的地点卡片，点开即详情。
- **时间轴视图** → "上下五千年"时间长卷：按朝代分段、粘性时代标题，向下滚动即沿时间前进。

## 部署（不影响机器上其他服务）

线上地址：**https://yangtze.xunxiang.store**（部署机 `xiang` = 8.147.63.101，站点目录 `/srv/yangtze`）。

仓库自带**构建成品** `release/`，部署机上只需要 git + nginx（不需要 node）。脚本与 nginx 配置片段在 `deploy/`。

**从你自己的电脑更新（当前使用的方式）：**

```bash
git -C ~/Projects/yangtze pull
deploy/deploy-from-local.sh root@xiang          # 打包 release/ 推到 /srv/yangtze
```

静态文件更新不需要 reload nginx。

**或者在部署机上直接拉取：**

```bash
git clone git@github.com:FingerLiu/yangtze.git ~/yangtze
sudo ~/yangtze/deploy/deploy-on-server.sh       # 发布到 /srv/yangtze
# 之后更新:
git -C ~/yangtze pull && sudo ~/yangtze/deploy/deploy-on-server.sh
```

**nginx 与证书**（首次已配好，仅供重建参考）：vhost 在 `/etc/nginx/sites-available/yangtze.xunxiang.store`（软链到 `sites-enabled`），443 提供静态站 + SPA fallback + assets 长缓存，80 保留 `/.well-known/acme-challenge/` 并 301 跳 HTTPS。证书用 certbot **webroot** 方式签发，不会改写 nginx 配置：

```bash
sudo certbot certonly --webroot -w /var/www/certbot -d yangtze.xunxiang.store
```

`certbot.timer` 自动续期。`deploy/yangtze.nginx.conf` 里另存了两种不依赖域名的接入方式（现有站点的子路径 `/yangtze/`，或独立端口 8391），均只增不改，`reload` 不中断现有服务。桌面端与手机端是同一个响应式站点，部署一次即可。

## 数据来源

- 国界/海岸线：[world-atlas](https://www.npmjs.com/package/world-atlas)（Natural Earth 50m，公有领域）
- 地形底图：[Natural Earth Cross-blended Hypsometric Tints with Shaded Relief and Water](https://www.naturalearthdata.com/downloads/50m-raster-data/50m-cross-blend-hypso/)（公有领域），裁剪长江流域窗口打包为 `src/assets/terrain.jpg`
- 河流走向、湖泊轮廓：按真实经纬度手工整理（展示精度）
- 地点与事件配图：[Wikimedia Commons](https://commons.wikimedia.org/)，只收公有领域 / CC0 / CC BY / CC BY-SA 的图片（不收 NC 与 ND —— 我们要裁剪），统一裁为 1200×800 WebP 打包在 `src/assets/photos/`。作者、许可、Commons 文件页链接与「有裁剪」标示都在卡片上随图显示，登记在 `src/data/photos.ts`
- 知识图谱：[Wikidata](https://www.wikidata.org/)（**CC0**，公有领域，无需署名），构建期用 SPARQL 抽取后产出 `src/data/kg.json`，脚本在 `tools/kg/build-kg.py`（`--refresh` 重新查询；平时不联网，kg.json 随仓库提交）。手工补充的工程谱系与诗题地名对照表在 `tools/kg/supplement.json`。刻意没有采用的源：CBDB 是 CC-BY-NC-ND、CHGIS 禁止再分发、OSM 的 ODbL 会传染、UNESCO 接口需付费授权、水利部的实时接口是付费商品且会破坏离线性质
- 正文与延伸阅读：`src/data/stories.ts`，逐条依据中/英/日维基百科及各机构官方页面撰写。遇到来源互相矛盾（如三峡总长的 193 km 与 193 mi、鄱阳湖随水位剧变的面积、赤壁战场的七处候选地）时，正文里写明分歧或按来源标注测量条件，不私自择一
