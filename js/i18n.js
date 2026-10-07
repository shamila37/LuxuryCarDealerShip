/**
 * ABCD CARS - NATIVE MULTI-LANGUAGE TRANSLATION ENGINE (i18n)
 * Native Client-Side Localization for English, Chinese, French, Hindi, and Punjabi
 * Designed & Developed for ABCD Car by RightClicks.lk
 */

const ABCD_LANGUAGES = {
  en: { name: "English", native: "EN", flag: "🇬🇧" },
  zh: { name: "Chinese", native: "中文", flag: "🇨🇳" },
  fr: { name: "French", native: "Français", flag: "🇫🇷" },
  hi: { name: "Hindi", native: "हिन्दी", flag: "🇮🇳" },
  pa: { name: "Punjabi", native: "ਪੰਜਾਬੀ", flag: "🇮🇳" }
};

const ABCD_TRANSLATIONS = {
  en: {
    // Navigation
    "nav.showroom": "Showroom",
    "nav.marketplace": "Marketplace",
    "nav.sellCar": "Sell Your Car",
    "nav.financing": "Financing",
    "nav.aboutUs": "About Us",
    "nav.contact": "Contact",
    "nav.exploreCars": "Explore Cars",
    "nav.visitShowroom": "Visit Showroom",
    "nav.getOffer": "Get Offer",
    "nav.menu": "MENU",
    "nav.cinema": "Showroom Cinema",
    "nav.inventoryMobile": "Marketplace & Inventory",
    "nav.sellConsignMobile": "Sell / Consign Your Car",
    "nav.calcMobile": "Financing & Lease Calculator",
    "nav.aboutMobile": "About ABCD Exotics",
    "nav.contactMobile": "Showroom & Contact",
    "nav.callConcierge": "Call Concierge",
    "nav.bookVip": "Book VIP Viewing",
    "nav.selectLanguage": "Select Language",

    // Hero Section
    "hero.kicker": "Richmond, BC • Boutique Exotic Showroom",
    "hero.headline": '<span class="text-gradient">The Pinnacle of</span><br><span class="text-red">Automotive Power.</span>',
    "hero.desc": "Western Canada's premier boutique destination for handpicked certified pre-owned supercars, luxury performance SUVs, and bespoke acquisitions.",
    "hero.ctaExplore": "Explore Collection",
    "hero.ctaVip": "Schedule VIP Viewing",
    "hero.address": "10740 Cambie Road, Richmond, BC",
    "hero.dealerLicense": "BC Licensed Exotic Dealer #40212",
    "hero.exploreInventory": "Explore Inventory",

    // Marketplace Section
    "market.tag": "Live Inventory",
    "market.title": "Exotic & Performance <span>Collection</span>",
    "market.subtitle": "Every automobile in our vault is certified with full provenance, multi-point mechanical inspection, and available for immediate national delivery.",
    "market.all": "All Vehicles",
    "market.supercars": "Supercars",
    "market.suvs": "Luxury SUVs",
    "market.coupes": "Coupes & GT",
    "market.searchPlaceholder": "Search by make, model, year (e.g. Porsche, GT3, V12)...",
    "market.sortBy": "Sort By",
    "market.priceHigh": "Price: High to Low",
    "market.priceLow": "Price: Low to High",
    "market.yearNew": "Year: Newest First",
    "market.mileageLow": "Mileage: Lowest First",
    "market.showing": "Showing",
    "market.vehicles": "vehicles available",
    "market.viewDetails": "View Details",
    "market.inquireVip": "VIP Inquire",
    "market.estLease": "Est. Lease from",
    "market.perMonth": "/mo",
    "market.noVehicles": "No matching exotic vehicles found matching your criteria.",
    "market.resetFilters": "Reset Search Filters",

    // Financing Calculator
    "calc.tag": "Bespoke Financing",
    "calc.title": "Exotic Lease & <span>Payment Calculator</span>",
    "calc.subtitle": "Structure custom terms with Western Canada's premier exotic automotive lenders. Fixed rates and tailored open lease programs.",
    "calc.vehiclePrice": "Vehicle Purchase Price ($)",
    "calc.downPayment": "Down Payment ($)",
    "calc.termMonths": "Lease Term (Months)",
    "calc.interestRate": "Estimated Interest Rate (APR %)",
    "calc.monthlyEst": "Estimated Monthly Payment",
    "calc.taxNotice": "*Excludes applicable BC taxes & dealer documentation.",
    "calc.principal": "Net Principal Financed",
    "calc.termLength": "Term Length",
    "calc.earlyPayout": "Early Payout Penalty",
    "calc.applyBtn": "Submit VIP Pre-Approval Application",

    // Experience / Value Propositions
    "exp.tag": "The Standard of Distinction",
    "exp.title": "Why Connoisseurs Choose <span>ABCD CARS</span>",
    "exp.subtitle": "We operate with absolute transparency, verified provenance, and personalized concierge delivery across North America.",
    "exp.feat1Title": "180-Point Exotic Certification",
    "exp.feat1Desc": "Every vehicle undergoes rigorous mechanical, electrical, and cosmetic validation by factory-trained master technicians.",
    "exp.feat2Title": "Best Deal First Pricing",
    "exp.feat2Desc": "Transparent market-backed valuations without hidden fees or negotiation stress. We honor what we advertise.",
    "exp.feat3Title": "Enclosed Concierge Delivery",
    "exp.feat3Desc": "Door-to-door white glove transport in climate-controlled enclosed carriers anywhere in Canada and internationally.",
    "exp.card1Badge": "Instant Wire Buyouts",
    "exp.card1Title": "Sell or Consign Your Supercar",
    "exp.card1Desc": "Direct certified cash offers within 24 hours, lien clearances handled, and bespoke white-glove consignment to Canada's elite collector registry.",
    "exp.card1Btn": "Value Your Exotic",
    "exp.card2Badge": "Boutique Showroom • Dealer #40212",
    "exp.card2Title": "The ABCD Heritage & Vault",
    "exp.card2Desc": "Discover our curated gallery on Cambie Road in Richmond, BC. Museum-grade vehicle prep, transparent pricing, and bespoke client advisory.",
    "exp.card2Btn": "Discover Our Story",

    // Contact & VIP Booking
    "contact.tag": "Private Showroom",
    "contact.title": "Visit Our <span>Gallery</span>",
    "contact.subtitle": "Experience vehicles in our private temperature-controlled showroom under architectural lighting.",
    "contact.addressLabel": "Showroom Address",
    "contact.hoursLabel": "Operating Hours",
    "contact.hoursVal": "Mon - Thu: 09:00 - 20:00 • Fri - Sat: 09:00 - 18:00 • Sun: 10:00 - 17:00",
    "contact.conciergeLabel": "Direct Concierge Line",
    "contact.licenseNotice": "BC Dealer License #40212 • Strictly by Appointment & Open Gallery",
    "contact.formTitle": "Book VIP Test Drive",
    "contact.formDesc": "Complete the credentials below and your dedicated client advisor will confirm your private vehicle presentation.",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.phone": "Phone Number",
    "contact.email": "Email Address",
    "contact.vehicleInterest": "Vehicle of Interest",
    "contact.prefDate": "Preferred Appointment Date",
    "contact.submitBtn": "Confirm VIP Private Viewing",

    // Sell Your Car Page
    "sell.kicker": "Boutique Exotic Acquisitions • Dealer #40212",
    "sell.heroTitle": 'The Premier Way to<br><span>Sell or Consign.</span>',
    "sell.heroDesc": "Maximize your luxury supercar's return through Western Canada's vetted collector network. Immediate certified wire payouts or bespoke white-glove consignment with museum-grade marketing.",
    "sell.heroCta": "Instant Vehicle Valuation",
    "sell.heroCall": "Speak to Acquisition Director",
    "sell.stat1Num": "$48M+",
    "sell.stat1Label": "Exotics Acquired",
    "sell.stat2Num": "< 24h",
    "sell.stat2Label": "Fast Wire Payout",
    "sell.stat3Num": "95%",
    "sell.stat3Label": "Consignment Net Return",
    "sell.stat4Num": "100%",
    "sell.stat4Label": "Lien Clearance Handled",
    "sell.appraisalTag": "Instant Appraisal",
    "sell.appraisalTitle": "Vehicle <span>Valuation Studio</span>",
    "sell.appraisalSubtitle": "Provide your vehicle credentials below to generate an estimated market bracket and trigger priority review by our Richmond Acquisition Desk.",
    "sell.pathwayLabel": "Preferred Transaction Pathway:",
    "sell.tabCashTitle": "Direct Cash Buyout",
    "sell.tabCashDesc": "Fast wire transfer within 24 hours. Zero listing wait.",
    "sell.tabConsignTitle": "VIP Consignment",
    "sell.tabConsignDesc": "Maximize profit. Featured in our private vault showroom.",
    "sell.vehicleMake": "Vehicle Make",
    "sell.vehicleModel": "Model & Trim Variant",
    "sell.modelYear": "Model Year",
    "sell.mileage": "Current Mileage (km)",
    "sell.condition": "Vehicle Condition",
    "sell.condMint": "Mint / Collector Grade (No flaws)",
    "sell.condExcellent": "Excellent (Minor normal wear)",
    "sell.condGood": "Good (Clean history, higher km)",
    "sell.lienStatus": "Lien / Lease Payout Status",
    "sell.lienNone": "Owned Clean Title (No active lien)",
    "sell.lienActive": "Active Bank Lease / Finance (ABCD clears it)",
    "sell.yourName": "Full Name",
    "sell.contactPhone": "Phone Number",
    "sell.contactEmail": "Email Address",
    "sell.vinOptional": "VIN / Serial (Optional for exact offer)",
    "sell.bracketTitle": "Estimated Market Valuation Bracket",
    "sell.fastPayoutNotice": "Certified bank draft / wire payout upon 180-pt inspection",
    "sell.submitAppraisal": "Submit for Priority Acquisition Review",

    // About Us Page
    "about.kicker": "Boutique Exotic Dealer #40212 • Richmond, BC",
    "about.heroTitle": 'The Standard of<br><span>Exotic Excellence.</span>',
    "about.heroDesc": "Born from an uncompromising passion for automotive engineering. ABCD Cars is Western Canada’s private haven for handpicked certified supercars, rare grand tourers, and bespoke client advisory.",
    "about.heroCta": "Our Heritage & Vision",
    "about.heroVisit": "Schedule Private Showroom Visit",
    "about.stat1Num": "150-Pt",
    "about.stat1Label": "Museum Certification",
    "about.stat2Num": "#40212",
    "about.stat2Label": "BC Licensed Dealer",
    "about.stat3Num": "100%",
    "about.stat3Label": "Clean CARFAX Verified",
    "about.stat4Num": "Canada",
    "about.stat4Label": "Enclosed Delivery",
    "about.storyTag": "Our Story",
    "about.storyTitle": "Built for Discerning <span>Collectors</span>",
    "about.storyP1": "Established on Cambie Road in Richmond, British Columbia, ABCD Cars was founded on a simple conviction: the acquisition of an exotic automobile should be as extraordinary as the machine itself.",
    "about.storyP2": "We deliberately rejected the high-volume, impersonal culture of traditional auto dealerships. Instead, we operate as a private automotive salon. Every vehicle in our climate-controlled gallery is personally vetted, rigorously authenticated, and maintained to museum-grade standards.",
    "about.storyP3": "Whether you are acquiring a limited-production Porsche GT3, an Italian V12 flagship, or seeking bespoke allocation sourcing across Europe and North America, our private client advisors offer complete discretion, transparent pricing, and zero dealer documentation fees.",
    "about.badgeTitle": "Certified Exotic Collection",
    "about.badgeSubtitle": "Climate-Controlled Vault Facility",
    "about.hallmarksTag": "Integrity",
    "about.hallmarksTitle": "The Four <span>ABCD Hallmarks</span>",
    "about.hallmark1Title": "Pristine Provenance",
    "about.hallmark1Desc": "Clean titles, zero surprise histories, and comprehensive CARFAX verification before any vehicle enters our showroom.",
    "about.hallmark2Title": "Fixed Fair-Market Pricing",
    "about.hallmark2Desc": "No games, no hidden dealer prep fees. We offer real-time market-validated pricing from the first inquiry.",
    "about.hallmark3Title": "White-Glove Logistics",
    "about.hallmark3Desc": "Specialized enclosed transportation delivered directly to your private garage anywhere in North America.",
    "about.hallmark4Title": "Lifelong Client Care",
    "about.hallmark4Desc": "From track prep advice to future collector trades and private allocations, our advisory relationship never ends at delivery.",
    "about.apptTitle": "Reserve Your Private Showroom Viewing",
    "about.apptSubtitle": "Experience our curated exotic vehicle portfolio in a relaxed, private setting with your dedicated client advisor.",
    "about.apptSubmit": "Request Private Viewing Access",

    // Footer
    "footer.brandDesc": "Western Canada's hallmark for high-performance exotics, certified pre-owned supercars, and bespoke private client acquisition.",
    "footer.dealerBadge": "BC Licensed Auto Dealer #40212",
    "footer.colShowroom": "Showroom",
    "footer.colServices": "Client Services",
    "footer.colDrops": "VIP Private Drops",
    "footer.link3d": "3D Vehicle Studio",
    "footer.linkInventory": "Full Inventory",
    "footer.linkSellExotic": "Sell Your Exotic",
    "footer.linkHeritage": "About Our Heritage",
    "footer.linkLeaseCalc": "Leasing Calculator",
    "footer.linkCashBuyout": "Instant Cash Buyout",
    "footer.linkConsignment": "White-Glove Consignment",
    "footer.linkTestDrive": "VIP Test Drive",
    "footer.linkSourcing": "Bespoke Vehicle Sourcing",
    "footer.linkAppraisal": "Trade-In Appraisal",
    "footer.dropsDesc": "Receive secret unlisted inventory allocations prior to public marketplace release.",
    "footer.emailPlaceholder": "Your private email...",
    "footer.join": "Join",
    "footer.copyright": "© 2026 ABCD Cars Sales & Leasing Ltd. All Rights Reserved. Prices exclude applicable dealer documentation & taxes.",
    "footer.developedBy": "Designed & Developed by",

    // Dock
    "dock.showroom": "Showroom",
    "dock.inventory": "Inventory",
    "dock.sellCar": "Sell Car",
    "dock.about": "About",
    "dock.call": "Call"
  },

  zh: {
    // Navigation
    "nav.showroom": "展厅中心",
    "nav.marketplace": "现车市场",
    "nav.sellCar": "出售爱车",
    "nav.financing": "金融分期",
    "nav.aboutUs": "关于我们",
    "nav.contact": "联系我们",
    "nav.exploreCars": "浏览现车",
    "nav.visitShowroom": "参观展厅",
    "nav.getOffer": "获取报价",
    "nav.menu": "菜单",
    "nav.cinema": "展厅全景影院",
    "nav.inventoryMobile": "现车库存与筛选",
    "nav.sellConsignMobile": "出售 / 寄售您的爱车",
    "nav.calcMobile": "金融月供计算器",
    "nav.aboutMobile": "关于 ABCD 豪车殿堂",
    "nav.contactMobile": "展厅地址与联系",
    "nav.callConcierge": "致电专属管家",
    "nav.bookVip": "预约贵宾品鉴",
    "nav.selectLanguage": "选择语言",

    // Hero Section
    "hero.kicker": "列治文，卑诗省 • 精品顶级超跑展厅",
    "hero.headline": '<span class="text-gradient">极致巅峰</span><br><span class="text-red">澎湃机械性能。</span>',
    "hero.desc": "加拿大西部顶级精品超跑殿堂，严选认证二手超级跑车、豪华高性能SUV及专属定制采购服务。",
    "hero.ctaExplore": "探索珍藏车队",
    "hero.ctaVip": "预约贵宾品鉴",
    "hero.address": "10740 Cambie Road, 列治文, 卑诗省",
    "hero.dealerLicense": "卑诗省持牌豪车经销商 #40212",
    "hero.exploreInventory": "查看所有库存",

    // Marketplace Section
    "market.tag": "实时现车库存",
    "market.title": "顶级超跑与性能 <span>现车展厅</span>",
    "market.subtitle": "展厅内每一台座驾均经严苛全方位检测与历史认证，支持加拿大全国封闭式即时专车交付。",
    "market.all": "全部现车",
    "market.supercars": "超级跑车",
    "market.suvs": "豪华SUV",
    "market.coupes": "双门轿跑 & GT",
    "market.searchPlaceholder": "按品牌、型号、年份搜索（如保时捷、GT3、V12）...",
    "market.sortBy": "排序方式",
    "market.priceHigh": "价格：从高到低",
    "market.priceLow": "价格：从低到高",
    "market.yearNew": "年份：最新优先",
    "market.mileageLow": "里程：最少优先",
    "market.showing": "正在展示",
    "market.vehicles": "台在售现车",
    "market.viewDetails": "查看详情",
    "market.inquireVip": "贵宾咨询",
    "market.estLease": "预估月付低至",
    "market.perMonth": "/月",
    "market.noVehicles": "未找到符合条件的现车，请调整筛选选项。",
    "market.resetFilters": "重置搜索条件",

    // Financing Calculator
    "calc.tag": "专属金融方案",
    "calc.title": "超跑分期与 <span>月供计算器</span>",
    "calc.subtitle": "与加拿大西部顶尖豪车金融机构合作，提供固定低利率与量身定制的开放式租赁方案。",
    "calc.vehiclePrice": "车辆购买价格 ($)",
    "calc.downPayment": "首付金额 ($)",
    "calc.termMonths": "租赁期限（月）",
    "calc.interestRate": "预估年利率 (APR %)",
    "calc.monthlyEst": "预估每月付款",
    "calc.taxNotice": "*不含卑诗省适用税费及车行注册杂费。",
    "calc.principal": "实际融资净额",
    "calc.termLength": "分期时长",
    "calc.earlyPayout": "提前结清违约金",
    "calc.applyBtn": "提交贵宾预批申请",

    // Experience / Value Propositions
    "exp.tag": "卓越品质标准",
    "exp.title": "为何资深藏家首选 <span>ABCD CARS</span>",
    "exp.subtitle": "我们秉持绝对透明度、真实溯源档案与北美全境尊贵门到门专车交付体系。",
    "exp.feat1Title": "180项超跑专业认证",
    "exp.feat1Desc": "每台车辆均由原厂认证资深技师完成严苛的机械、电气及外观全方位检验。",
    "exp.feat2Title": "明码实价 无隐藏加价",
    "exp.feat2Desc": "基于实时市场价值透明定价，无隐形费用与讨价还价压力，信守所标价格。",
    "exp.feat3Title": "全国封闭式专车交付",
    "exp.feat3Desc": "采用恒温封闭式专业运车车厢，为全加拿大及跨国客户提供尊贵门到门送达服务。",
    "exp.card1Badge": "24小时现金结清",
    "exp.card1Title": "出售或寄售您的超级跑车",
    "exp.card1Desc": "24小时内提供经过认证的即时现金买断方案，代办债务结清，或面向加拿大高净值藏家进行尊贵寄售。",
    "exp.card1Btn": "评估您的爱车",
    "exp.card2Badge": "精品展厅 • 持牌车行 #40212",
    "exp.card2Title": "ABCD 品牌故事与展厅",
    "exp.card2Desc": "探索我们位于卑诗省列治文Cambie Road的私人艺术级展厅，体验博物馆级整备与专属贵宾服务。",
    "exp.card2Btn": "探索我们的故事",

    // Contact & VIP Booking
    "contact.tag": "私人专属展厅",
    "contact.title": "亲临体验 <span>名车殿堂</span>",
    "contact.subtitle": "在建筑光影与恒温私密展厅中，沉浸式鉴赏顶级座驾。",
    "contact.addressLabel": "展厅地址",
    "contact.hoursLabel": "营业时间",
    "contact.hoursVal": "周一至周四: 09:00 - 20:00 • 周五至周六: 09:00 - 18:00 • 周日: 10:00 - 17:00",
    "contact.conciergeLabel": "直通贵宾热线",
    "contact.licenseNotice": "卑诗省持牌经销商 #40212 • 支持预约专属品鉴与公开展厅参观",
    "contact.formTitle": "预约贵宾试驾",
    "contact.formDesc": "填写以下信息，我们的高级客户顾问将与您确认私享品鉴时间。",
    "contact.firstName": "名字",
    "contact.lastName": "姓氏",
    "contact.phone": "电话号码",
    "contact.email": "电子邮箱",
    "contact.vehicleInterest": "意向车型",
    "contact.prefDate": "期望预约日期",
    "contact.submitBtn": "确认预约私人品鉴",

    // Sell Your Car Page
    "sell.kicker": "精品豪车极速收购 • 持牌车行 #40212",
    "sell.heroTitle": '出售或寄售超级跑车的<br><span>尊荣首选。</span>',
    "sell.heroDesc": "依托加拿大西部高净值藏家网络，实现您的座驾价值最大化。即时认证电汇到账，或享受博物馆级全网营销的尊享寄售服务。",
    "sell.heroCta": "即时在线车辆估值",
    "sell.heroCall": "联系收购总监",
    "sell.stat1Num": "4800万加币+",
    "sell.stat1Label": "已收购豪车总额",
    "sell.stat2Num": "< 24小时",
    "sell.stat2Label": "快速电汇到账",
    "sell.stat3Num": "95%",
    "sell.stat3Label": "寄售平均净回报率",
    "sell.stat4Num": "100%",
    "sell.stat4Label": "银行贷款全权代办",
    "sell.appraisalTag": "即时估价",
    "sell.appraisalTitle": "车辆 <span>在线估值系统</span>",
    "sell.appraisalSubtitle": "提供您的车辆基本信息，立即获取实时市场估值区间，并由列治文收购中心优先审核。",
    "sell.pathwayLabel": "首选交易模式：",
    "sell.tabCashTitle": "现金直接买断",
    "sell.tabCashDesc": "24小时内极速电汇结算，无需等待出售周期。",
    "sell.tabConsignTitle": "贵宾寄售服务",
    "sell.tabConsignDesc": "利润最大化，陈列于我们的恒温私人豪车展厅。",
    "sell.vehicleMake": "车辆品牌",
    "sell.vehicleModel": "型号与配置版本",
    "sell.modelYear": "出厂年份",
    "sell.mileage": "当前里程 (公里)",
    "sell.condition": "车况等级",
    "sell.condMint": "极品 / 藏品级（无任何瑕疵）",
    "sell.condExcellent": "极佳（轻微正常使用痕迹）",
    "sell.condGood": "良好（历史清晰，里程稍高）",
    "sell.lienStatus": "贷款 / 租赁状态",
    "sell.lienNone": "无贷款（全款干净车产权证）",
    "sell.lienActive": "有银行贷款或租赁（ABCD 代办结清）",
    "sell.yourName": "您的姓名",
    "sell.contactPhone": "联系电话",
    "sell.contactEmail": "电子邮箱",
    "sell.vinOptional": "车架号 VIN（选填，用于精确估值）",
    "sell.bracketTitle": "预估市场估值区间",
    "sell.fastPayoutNotice": "经180项专业检测后立即出具银行本票/电汇到账",
    "sell.submitAppraisal": "提交优先收购审核申请",

    // About Us Page
    "about.kicker": "精品豪车经销商 #40212 • 卑诗省列治文",
    "about.heroTitle": '定义<br><span>奢华跑车新标杆。</span>',
    "about.heroDesc": "源于对精湛汽车工程的不懈追求。ABCD Cars 是加拿大西部严选超级跑车、稀有GT巡航车与定制咨询服务的私享殿堂。",
    "about.heroCta": "品牌故事与愿景",
    "about.heroVisit": "预约私享展厅品鉴",
    "about.stat1Num": "150项",
    "about.stat1Label": "博物馆级认证",
    "about.stat2Num": "#40212",
    "about.stat2Label": "卑诗省持牌车行",
    "about.stat3Num": "100%",
    "about.stat3Label": "CARFAX 报告纯净",
    "about.stat4Num": "全加拿大",
    "about.stat4Label": "封闭式专车配送",
    "about.storyTag": "品牌故事",
    "about.storyTitle": "专为挑剔的 <span>名车藏家打造</span>",
    "about.storyP1": "ABCD Cars 坐落于卑诗省列治文 Cambie Road，创立初衷坚守一条信念：购置一台超级跑车的体验，理应如这台机械杰作本身一样非凡独特。",
    "about.storyP2": "我们坚决摒弃传统大批量车行的流水线销售模式，以私人汽车沙龙形式运营。陈列于恒温展厅中的每辆车均经过人工严苛筛选与认证，保持博物馆级成色。",
    "about.storyP3": "无论您是寻觅限量版保时捷 GT3、意大利 V12 旗舰，抑或需要在欧洲与北美调配稀缺配额，我们的私人客户顾问均提供高度保密、透明定价与零加价服务。",
    "about.badgeTitle": "认证豪车藏品库",
    "about.badgeSubtitle": "恒温私密名车展厅",
    "about.hallmarksTag": "至高信誉",
    "about.hallmarksTitle": "ABCD <span>四大品质基石</span>",
    "about.hallmark1Title": "纯正溯源 绝无事故",
    "about.hallmark1Desc": "产权清晰，无隐瞒历史，入库前均经过 CARFAX 全面权威认证。",
    "about.hallmark2Title": "公正透明 市场定价",
    "about.hallmark2Desc": "无套路，无杂费。从首次咨询起即提供基于实时大数据的公正价格。",
    "about.hallmark3Title": "尊贵物流 门到门送达",
    "about.hallmark3Desc": "专业封闭式恒温运车车队，安全直达您在北美各地的私人车库。",
    "about.hallmark4Title": "终身车主 私享顾问",
    "about.hallmark4Desc": "从赛道调校建议到未来的藏品置换与稀有配额获取，我们的专属服务永不落幕。",
    "about.apptTitle": "预约您的专属私享展厅品鉴",
    "about.apptSubtitle": "在舒适私密的环境中，由您的专属顾问陪伴鉴赏每一台珍品跑车。",
    "about.apptSubmit": "申请展厅私享品鉴权限",

    // Footer
    "footer.brandDesc": "加拿大西部顶级超级跑车地标，专注严选二手超跑与专属定制采购服务。",
    "footer.dealerBadge": "卑诗省持牌汽车经销商 #40212",
    "footer.colShowroom": "展厅中心",
    "footer.colServices": "客户服务",
    "footer.colDrops": "贵宾独家先享",
    "footer.link3d": "3D名车工作室",
    "footer.linkInventory": "全部在售库存",
    "footer.linkSellExotic": "出售您的爱车",
    "footer.linkHeritage": "关于品牌故事",
    "footer.linkLeaseCalc": "金融分期计算器",
    "footer.linkCashBuyout": "24小时现金收购",
    "footer.linkConsignment": "白手套尊贵寄售",
    "footer.linkTestDrive": "贵宾预约试驾",
    "footer.linkSourcing": "全球配额定制采购",
    "footer.linkAppraisal": "二手置换估价",
    "footer.dropsDesc": "在公开发布前优先获取未公开的珍稀现车配额通知。",
    "footer.emailPlaceholder": "输入您的电子邮箱...",
    "footer.join": "订阅",
    "footer.copyright": "© 2026 ABCD Cars Sales & Leasing Ltd. 保留所有权利。价格不含适用税费及车行文件费。",
    "footer.developedBy": "网站设计与开发：",

    // Dock
    "dock.showroom": "展厅",
    "dock.inventory": "现车",
    "dock.sellCar": "卖车",
    "dock.about": "关于",
    "dock.call": "通话"
  },

  fr: {
    // Navigation
    "nav.showroom": "Showroom",
    "nav.marketplace": "Inventaire",
    "nav.sellCar": "Vendez votre voiture",
    "nav.financing": "Financement",
    "nav.aboutUs": "À propos",
    "nav.contact": "Contact",
    "nav.exploreCars": "Explorer les voitures",
    "nav.visitShowroom": "Visiter le salon",
    "nav.getOffer": "Obtenir une offre",
    "nav.menu": "MENU",
    "nav.cinema": "Cinéma Showroom",
    "nav.inventoryMobile": "Marché & Inventaire",
    "nav.sellConsignMobile": "Vendre / Confier un véhicule",
    "nav.calcMobile": "Calculateur de financement",
    "nav.aboutMobile": "À propos d'ABCD Exotics",
    "nav.contactMobile": "Showroom & Coordonnées",
    "nav.callConcierge": "Appeler la conciergerie",
    "nav.bookVip": "Réserver une visite VIP",
    "nav.selectLanguage": "Choisir la langue",

    // Hero Section
    "hero.kicker": "Richmond, C.-B. • Showroom Exclusif de Prestige",
    "hero.headline": '<span class="text-gradient">Le Sommet de la</span><br><span class="text-red">Puissance Automobile.</span>',
    "hero.desc": "La destination de prestige de l'Ouest canadien pour des supercars d'occasion certifiées, des VUS de haute performance et des acquisitions sur mesure.",
    "hero.ctaExplore": "Explorer la collection",
    "hero.ctaVip": "Planifier une visite VIP",
    "hero.address": "10740 Cambie Road, Richmond, C.-B.",
    "hero.dealerLicense": "Concessionnaire certifié C.-B. #40212",
    "hero.exploreInventory": "Explorer l'inventaire",

    // Marketplace Section
    "market.tag": "Inventaire en Direct",
    "market.title": "Collection <span>Exotique & Performance</span>",
    "market.subtitle": "Chaque automobile de notre salon est rigoureusement certifiée avec historique complet et disponible pour livraison nationale immédiate.",
    "market.all": "Tous les véhicules",
    "market.supercars": "Supercars",
    "market.suvs": "VUS de luxe",
    "market.coupes": "Coupés & GT",
    "market.searchPlaceholder": "Rechercher par marque, modèle (ex. Porsche, GT3, V12)...",
    "market.sortBy": "Trier par",
    "market.priceHigh": "Prix : Décroissant",
    "market.priceLow": "Prix : Croissant",
    "market.yearNew": "Année : Plus récente",
    "market.mileageLow": "Kilométrage : Plus bas",
    "market.showing": "Affichage de",
    "market.vehicles": "véhicules disponibles",
    "market.viewDetails": "Voir détails",
    "market.inquireVip": "Demande VIP",
    "market.estLease": "Bail estimé dès",
    "market.perMonth": "/mois",
    "market.noVehicles": "Aucun véhicule ne correspond à vos critères de recherche.",
    "market.resetFilters": "Réinitialiser les filtres",

    // Financing Calculator
    "calc.tag": "Financement sur Mesure",
    "calc.title": "Calculateur de <span>Crédit-Bail</span>",
    "calc.subtitle": "Bénéficiez de conditions exclusives avec les plus grands prêteurs de véhicules de prestige de l'Ouest canadien.",
    "calc.vehiclePrice": "Prix d'achat du véhicule ($)",
    "calc.downPayment": "Acompte ($)",
    "calc.termMonths": "Durée du bail (Mois)",
    "calc.interestRate": "Taux d'intérêt estimé (TAEG %)",
    "calc.monthlyEst": "Paiement mensuel estimé",
    "calc.taxNotice": "*Hors taxes provinciales applicables et frais de documentation.",
    "calc.principal": "Montant net financé",
    "calc.termLength": "Durée du terme",
    "calc.earlyPayout": "Pénalité de remboursement anticipé",
    "calc.applyBtn": "Demande de pré-approbation VIP",

    // Experience / Value Propositions
    "exp.tag": "La Norme d'Excellence",
    "exp.title": "Pourquoi les connaisseurs choisissent <span>ABCD CARS</span>",
    "exp.subtitle": "Transparence totale, provenance vérifiée et service de livraison sécurisé partout en Amérique du Nord.",
    "exp.feat1Title": "Certification en 180 points",
    "exp.feat1Desc": "Chaque voiture subit une validation mécanique, électronique et esthétique rigoureuse par des maîtres techniciens.",
    "exp.feat2Title": "Prix transparent dès le départ",
    "exp.feat2Desc": "Des valorisations justes basées sur le marché réel, sans frais cachés ni pression de négociation.",
    "exp.feat3Title": "Livraison fermée de prestige",
    "exp.feat3Desc": "Transport sécurisé en transporteur fermé climatisé partout au Canada et à l'international.",
    "exp.card1Badge": "Paiement instantané par virement",
    "exp.card1Title": "Vendez ou confiez votre supercar",
    "exp.card1Desc": "Offres d'achat comptant sous 24h, gestion des quittances de bail et consignation haut de gamme pour collectionneurs.",
    "exp.card1Btn": "Évaluer mon véhicule",
    "exp.card2Badge": "Showroom de prestige • Licencié #40212",
    "exp.card2Title": "L'héritage et le salon ABCD",
    "exp.card2Desc": "Découvrez notre salon privé sur Cambie Road à Richmond. Préparation muséale et conciergerie personnalisée.",
    "exp.card2Btn": "Découvrir notre histoire",

    // Contact & VIP Booking
    "contact.tag": "Salon Privé",
    "contact.title": "Visitez notre <span>Galerie</span>",
    "contact.subtitle": "Admirez nos véhicules dans notre salon privé climatisé sous un éclairage architectural d'exception.",
    "contact.addressLabel": "Adresse du Showroom",
    "contact.hoursLabel": "Heures d'ouverture",
    "contact.hoursVal": "Lun - Jeu : 09:00 - 20:00 • Ven - Sam : 09:00 - 18:00 • Dim : 10:00 - 17:00",
    "contact.conciergeLabel": "Ligne directe conciergerie",
    "contact.licenseNotice": "Permis de concessionnaire C.-B. #40212 • Sur rendez-vous et galerie ouverte",
    "contact.formTitle": "Réserver un essai routier VIP",
    "contact.formDesc": "Remplissez vos coordonnées et notre conseiller dédié confirmera votre présentation privée.",
    "contact.firstName": "Prénom",
    "contact.lastName": "Nom de famille",
    "contact.phone": "Numéro de téléphone",
    "contact.email": "Adresse courriel",
    "contact.vehicleInterest": "Véhicule d'intérêt",
    "contact.prefDate": "Date souhaitée",
    "contact.submitBtn": "Confirmer la visite VIP",

    // Sell Your Car Page
    "sell.kicker": "Acquisitions de véhicules d'exception • #40212",
    "sell.heroTitle": 'La façon privilégiée de<br><span>Vendre ou Confier.</span>',
    "sell.heroDesc": "Maximisez la valeur de votre supercar grâce à notre réseau exclusif. Rachat comptant immédiat ou consignation avec marketing de prestige.",
    "sell.heroCta": "Évaluation instantanée",
    "sell.heroCall": "Contacter le directeur des acquisitions",
    "sell.stat1Num": "48M$+",
    "sell.stat1Label": "Exotiques acquises",
    "sell.stat2Num": "< 24h",
    "sell.stat2Label": "Virement bancaire rapide",
    "sell.stat3Num": "95%",
    "sell.stat3Label": "Rendement net en consignation",
    "sell.stat4Num": "100%",
    "sell.stat4Label": "Gestion complète des créances",
    "sell.appraisalTag": "Évaluation Immédiate",
    "sell.appraisalTitle": "Studio de <span>Valorisation</span>",
    "sell.appraisalSubtitle": "Indiquez les détails de votre véhicule pour obtenir une estimation de marché et une étude prioritaire par notre bureau de Richmond.",
    "sell.pathwayLabel": "Option de transaction souhaitée :",
    "sell.tabCashTitle": "Rachat comptant direct",
    "sell.tabCashDesc": "Virement bancaire sous 24h. Aucune attente de mise en vente.",
    "sell.tabConsignTitle": "Consignation VIP",
    "sell.tabConsignDesc": "Rendement maximal. Exposé dans notre salon privé.",
    "sell.vehicleMake": "Marque du véhicule",
    "sell.vehicleModel": "Modèle et version",
    "sell.modelYear": "Année du modèle",
    "sell.mileage": "Kilométrage actuel (km)",
    "sell.condition": "État du véhicule",
    "sell.condMint": "État concours / Collection (Impeccable)",
    "sell.condExcellent": "Excellent (Très légère usure normale)",
    "sell.condGood": "Bon (Historique propre, plus de km)",
    "sell.lienStatus": "Statut de prêt / bail",
    "sell.lienNone": "Titre clair et libre (Aucun prêt actif)",
    "sell.lienActive": "Bail ou financement actif (ABCD s'occupe du solde)",
    "sell.yourName": "Nom complet",
    "sell.contactPhone": "Téléphone",
    "sell.contactEmail": "Courriel",
    "sell.vinOptional": "NIV / VIN (Optionnel pour offre exacte)",
    "sell.bracketTitle": "Fourchette d'évaluation estimée",
    "sell.fastPayoutNotice": "Paiement par traite/virement garanti après inspection 180 points",
    "sell.submitAppraisal": "Soumettre pour examen prioritaire",

    // About Us Page
    "about.kicker": "Concessionnaire de prestige #40212 • Richmond, C.-B.",
    "about.heroTitle": "La norme de l'<br><span>Excellence Automobile.</span>",
    "about.heroDesc": "Né d'une passion inconditionnelle pour l'ingénierie mécanique. ABCD Cars est le sanctuaire privé de l'Ouest canadien pour supercars certifiées et conseils sur mesure.",
    "about.heroCta": "Notre héritage & vision",
    "about.heroVisit": "Planifier une visite privée",
    "about.stat1Num": "150 pts",
    "about.stat1Label": "Certification d'excellence",
    "about.stat2Num": "#40212",
    "about.stat2Label": "Concessionnaire agréé",
    "about.stat3Num": "100%",
    "about.stat3Label": "CARFAX vérifié",
    "about.stat4Num": "Canada",
    "about.stat4Label": "Livraison fermée",
    "about.storyTag": "Notre Histoire",
    "about.storyTitle": "Conçu pour les <span>Passionnés Exigeants</span>",
    "about.storyP1": "Établi sur Cambie Road à Richmond, Colombie-Britannique, ABCD Cars repose sur une conviction : acquérir une automobile d'exception doit être aussi extraordinaire que le bolide lui-même.",
    "about.storyP2": "Nous rejetons les méthodes impersonnelles des grands concessionnaires traditionnels pour offrir une expérience de salon automobile privé. Chaque véhicule est méticuleusement sélectionné et maintenu selon des normes muséales.",
    "about.storyP3": "Que vous convoitiez une Porsche GT3, un V12 italien ou recherchiez une allocation rare en Europe ou en Amérique du Nord, nos conseillers vous garantissent discrétion, prix transparents et zéro frais cachés.",
    "about.badgeTitle": "Collection Exotique Certifiée",
    "about.badgeSubtitle": "Salon privé climatisé",
    "about.hallmarksTag": "Intégrité",
    "about.hallmarksTitle": "Les Quatre <span>Piliers ABCD</span>",
    "about.hallmark1Title": "Provenance irréprochable",
    "about.hallmark1Desc": "Titres limpides et vérification CARFAX complète avant toute intégration au showroom.",
    "about.hallmark2Title": "Prix juste et transparent",
    "about.hallmark2Desc": "Aucun jeu, aucun frais caché. Une tarification validée par le marché dès le premier échange.",
    "about.hallmark3Title": "Logistique VIP",
    "about.hallmark3Desc": "Transport sécurisé en camion fermé livré directement à votre garage privé.",
    "about.hallmark4Title": "Accompagnement à vie",
    "about.hallmark4Desc": "De la préparation sur circuit aux futures reprises de collection, notre relation se poursuit bien au-delà de la livraison.",
    "about.apptTitle": "Réservez votre visite privée",
    "about.apptSubtitle": "Découvrez notre collection dans un cadre intime et raffiné en compagnie de votre conseiller dédié.",
    "about.apptSubmit": "Demander un accès privé au showroom",

    // Footer
    "footer.brandDesc": "La référence de l'Ouest canadien pour les supercars de prestige et l'acquisition sur mesure pour clients privés.",
    "footer.dealerBadge": "Concessionnaire automobile agréé C.-B. #40212",
    "footer.colShowroom": "Showroom",
    "footer.colServices": "Services VIP",
    "footer.colDrops": "Allocations Privées",
    "footer.link3d": "Studio 3D",
    "footer.linkInventory": "Inventaire complet",
    "footer.linkSellExotic": "Vendre votre supercar",
    "footer.linkHeritage": "Notre héritage",
    "footer.linkLeaseCalc": "Calculateur de bail",
    "footer.linkCashBuyout": "Rachat comptant rapide",
    "footer.linkConsignment": "Consignation de prestige",
    "footer.linkTestDrive": "Essai routier VIP",
    "footer.linkSourcing": "Recherche sur mesure",
    "footer.linkAppraisal": "Évaluation d'échange",
    "footer.dropsDesc": "Recevez en avant-première nos nouvelles arrivées exclusives avant publication publique.",
    "footer.emailPlaceholder": "Votre adresse courriel...",
    "footer.join": "Rejoindre",
    "footer.copyright": "© 2026 ABCD Cars Sales & Leasing Ltd. Tous droits réservés. Prix hors taxes et frais applicables.",
    "footer.developedBy": "Conçu & développé par",

    // Dock
    "dock.showroom": "Showroom",
    "dock.inventory": "Inventaire",
    "dock.sellCar": "Vendre",
    "dock.about": "À propos",
    "dock.call": "Appel"
  },

  hi: {
    // Navigation
    "nav.showroom": "शोरूम",
    "nav.marketplace": "मार्केटप्लेस",
    "nav.sellCar": "अपनी कार बेचें",
    "nav.financing": "फाइनेंसिंग",
    "nav.aboutUs": "हमारे बारे में",
    "nav.contact": "संपर्क करें",
    "nav.exploreCars": "कारें देखें",
    "nav.visitShowroom": "शोरूम आएं",
    "nav.getOffer": "ऑफ़र पाएं",
    "nav.menu": "मेनू",
    "nav.cinema": "शोरूम सिनेमा",
    "nav.inventoryMobile": "मार्केटप्लेस और इन्वेंटरी",
    "nav.sellConsignMobile": "कार बेचें / कंसाइन करें",
    "nav.calcMobile": "फाइनेंस व लीज कैलकुलेटर",
    "nav.aboutMobile": "ABCD एक्सोटिक्स के बारे में",
    "nav.contactMobile": "शोरूम और संपर्क",
    "nav.callConcierge": "कॉन्सिअर्ज को कॉल करें",
    "nav.bookVip": "वीआईपी विजिट बुक करें",
    "nav.selectLanguage": "भाषा चुनें",

    // Hero Section
    "hero.kicker": "रिचमंड, बीसी • बुटीक एक्सोटिक शोरूम",
    "hero.headline": '<span class="text-gradient">सर्वोत्कृष्ट</span><br><span class="text-red">ऑटोमोटिव शक्ति।</span>',
    "hero.desc": "प्रमाणित प्री-ओन्ड सुपरकारों, लक्ज़री परफॉर्मेंस एसयूवी और कस्टम वाहन अधिग्रहण के लिए पश्चिमी कनाडा का प्रमुख बुटीक शोरूम।",
    "hero.ctaExplore": "कलेक्शन देखें",
    "hero.ctaVip": "वीआईपी विजिट शेड्यूल करें",
    "hero.address": "10740 कैम्बी रोड, रिचमंड, बीसी",
    "hero.dealerLicense": "बीसी लाइसेंस प्राप्त एक्सोटिक डीलर #40212",
    "hero.exploreInventory": "इन्वेंटरी देखें",

    // Marketplace Section
    "market.tag": "लाइव इन्वेंटरी",
    "market.title": "एक्सोटिक और परफॉर्मेंस <span>कलेक्शन</span>",
    "market.subtitle": "हमारे वॉल्ट का हर वाहन पूर्ण इतिहास व तकनीकी जांच के साथ प्रमाणित है और तुरंत डिलीवरी के लिए उपलब्ध है।",
    "market.all": "सभी वाहन",
    "market.supercars": "सुपरकारें",
    "market.suvs": "लक्ज़री एसयूवी",
    "market.coupes": "कूपे और जीटी",
    "market.searchPlaceholder": "मेक, मॉडल या वर्ष द्वारा खोजें (उदा. Porsche, GT3, V12)...",
    "market.sortBy": "क्रमबद्ध करें",
    "market.priceHigh": "कीमत: उच्च से कम",
    "market.priceLow": "कीमत: कम से उच्च",
    "market.yearNew": "वर्ष: सबसे नया",
    "market.mileageLow": "माइलेज: न्यूनतम",
    "market.showing": "दिखा रहे हैं",
    "market.vehicles": "उपलब्ध वाहन",
    "market.viewDetails": "विवरण देखें",
    "market.inquireVip": "वीआईपी पूछताछ",
    "market.estLease": "अनुमानित लीज",
    "market.perMonth": "/माह",
    "market.noVehicles": "आपकी खोज के अनुसार कोई वाहन नहीं मिला।",
    "market.resetFilters": "फ़िल्टर रीसेट करें",

    // Financing Calculator
    "calc.tag": "कस्टम फाइनेंसिंग",
    "calc.title": "एक्सोटिक लीज और <span>भुगतान कैलकुलेटर</span>",
    "calc.subtitle": "कनाडा के प्रमुख लेंडर्स के साथ अनुकूलित शर्तें और निश्चित ब्याज दरें प्राप्त करें।",
    "calc.vehiclePrice": "वाहन खरीद मूल्य ($)",
    "calc.downPayment": "डाउन पेमेंट ($)",
    "calc.termMonths": "लीज अवधि (महीने)",
    "calc.interestRate": "अनुमानित ब्याज दर (APR %)",
    "calc.monthlyEst": "अनुमानित मासिक भुगतान",
    "calc.taxNotice": "*लागू बीसी टैक्स और डीलर शुल्क अलग से।",
    "calc.principal": "कुल वित्तपोषित राशि",
    "calc.termLength": "अवधि",
    "calc.earlyPayout": "समय पूर्व भुगतान शुल्क",
    "calc.applyBtn": "वीआईपी प्री-एप्रूवल आवेदन भेजें",

    // Experience / Value Propositions
    "exp.tag": "विशिष्टता का मानक",
    "exp.title": "पारखी <span>ABCD CARS</span> क्यों चुनते हैं",
    "exp.subtitle": "हम पूरे उत्तरी अमेरिका में पूर्ण पारदर्शिता, सत्यापित इतिहास और विशेष डोर-टू-डोर डिलीवरी प्रदान करते हैं।",
    "exp.feat1Title": "180-पॉइंट एक्सोटिक सर्टिफिकेशन",
    "exp.feat1Desc": "हर वाहन की प्रमाणित तकनीशियनों द्वारा कठोर मैकेनिकल व कॉस्मेटिक जांच की जाती है।",
    "exp.feat2Title": "सर्वश्रेष्ठ स्पष्ट मूल्य निर्धारण",
    "exp.feat2Desc": "बिना किसी छुपे शुल्क के पारदर्शी बाजार मूल्य। हम जो वादा करते हैं, वही देते हैं।",
    "exp.feat3Title": "सुरक्षित बंद कंटेनर डिलीवरी",
    "exp.feat3Desc": "कनाडा भर में वातानुकूलित और सुरक्षित कंटेनर में डोर-टू-डोर डिलीवरी।",
    "exp.card1Badge": "तत्काल नकद भुगतान",
    "exp.card1Title": "अपनी सुपरकार बेचें या कंसाइन करें",
    "exp.card1Desc": "24 घंटों में प्रमाणित नकद ऑफ़र, ऋण निपटान और कनाडा के शीर्ष कलेक्टर्स के लिए कंसाइनमेंट सेवा।",
    "exp.card1Btn": "कार का मूल्यांकन करें",
    "exp.card2Badge": "बुटीक शोरूम • डीलर #40212",
    "exp.card2Title": "ABCD हेरिटेज और शोरूम",
    "exp.card2Desc": "रिचमंड, बीसी में हमारे निजी शोरूम और विशेष ग्राहक सेवाओं का अनुभव करें।",
    "exp.card2Btn": "हमारी कहानी जानें",

    // Contact & VIP Booking
    "contact.tag": "निजी शोरूम",
    "contact.title": "हमारे <span>शोरूम</span> आएं",
    "contact.subtitle": "शानदार लाइटिंग और वातानुकूलित निजी शोरूम में लग्जरी कारों का अनुभव करें।",
    "contact.addressLabel": "शोरूम का पता",
    "contact.hoursLabel": "कार्य समय",
    "contact.hoursVal": "सोम - गुरु: 09:00 - 20:00 • शुक्र - शनि: 09:00 - 18:00 • रवि: 10:00 - 17:00",
    "contact.conciergeLabel": "सीधी हेल्पलाइन",
    "contact.licenseNotice": "बीसी डीलर लाइसेंस #40212 • अपॉइंटमेंट और ओपन गैलरी",
    "contact.formTitle": "वीआईपी टेस्ट ड्राइव बुक करें",
    "contact.formDesc": "नीचे दिया गया फॉर्म भरें और हमारे सलाहकार आपकी निजी विजिट की पुष्टि करेंगे।",
    "contact.firstName": "पहला नाम",
    "contact.lastName": "अंतिम नाम",
    "contact.phone": "फ़ोन नंबर",
    "contact.email": "ईमेल पता",
    "contact.vehicleInterest": "रुचि का वाहन",
    "contact.prefDate": "पसंदीदा तारीख",
    "contact.submitBtn": "वीआईपी विजिट कन्फर्म करें",

    // Sell Your Car Page
    "sell.kicker": "एक्सोटिक कार अधिग्रहण • डीलर #40212",
    "sell.heroTitle": 'कार बेचने या कंसाइन करने का<br><span>सर्वश्रेष्ठ तरीका।</span>',
    "sell.heroDesc": "कनाडा के सत्यापित कलेक्टर नेटवर्क से अपनी सुपरकार का अधिकतम मूल्य प्राप्त करें। 24 घंटे में वायर पेमेंट या वीआईपी कंसाइनमेंट।",
    "sell.heroCta": "तत्काल वाहन मूल्यांकन",
    "sell.heroCall": "अधिग्रहण निदेशक से बात करें",
    "sell.stat1Num": "$48M+",
    "sell.stat1Label": "अधिग्रहीत गाड़ियाँ",
    "sell.stat2Num": "< 24 घंटे",
    "sell.stat2Label": "तेज़ बैंक ट्रांसफर",
    "sell.stat3Num": "95%",
    "sell.stat3Label": "कंसाइनमेंट नेट रिटर्न",
    "sell.stat4Num": "100%",
    "sell.stat4Label": "ऋण निपटान सुविधा",
    "sell.appraisalTag": "त्वरित मूल्यांकन",
    "sell.appraisalTitle": "वाहन <span>मूल्यांकन स्टूडियो</span>",
    "sell.appraisalSubtitle": "अपनी कार का विवरण दर्ज करें और तुरंत अनुमानित बाजार मूल्य प्राप्त करें।",
    "sell.pathwayLabel": "पसंदीदा लेनदेन तरीका:",
    "sell.tabCashTitle": "सीधा नकद भुगतान",
    "sell.tabCashDesc": "24 घंटे में बैंक ट्रांसफर। कोई इंतज़ार नहीं।",
    "sell.tabConsignTitle": "वीआईपी कंसाइनमेंट",
    "sell.tabConsignDesc": "अधिकतम मुनाफा। हमारे प्राइवेट शोरूम में प्रदर्शित।",
    "sell.vehicleMake": "कार का मेक",
    "sell.vehicleModel": "मॉडल और वेरिएंट",
    "sell.modelYear": "मॉडल वर्ष",
    "sell.mileage": "वर्तमान माइलेज (km)",
    "sell.condition": "कार की स्थिति",
    "sell.condMint": "कलेक्टर ग्रेड / मिंट (बिल्कुल नई जैसी)",
    "sell.condExcellent": "उत्कृष्ट (सामान्य हल्का उपयोग)",
    "sell.condGood": "अच्छी (साफ इतिहास, अधिक किमी)",
    "sell.lienStatus": "लोन / लीज स्थिति",
    "sell.lienNone": "क्लीन टाइटल (कोई लोन नहीं)",
    "sell.lienActive": "एक्टिव बैंक लोन (ABCD इसका निपटारा करेगा)",
    "sell.yourName": "पूरा नाम",
    "sell.contactPhone": "फ़ोन नंबर",
    "sell.contactEmail": "ईमेल पता",
    "sell.vinOptional": "VIN नंबर (सटीक ऑफर के लिए वैकल्पिक)",
    "sell.bracketTitle": "अनुमानित बाजार मूल्य",
    "sell.fastPayoutNotice": "180-पॉइंट निरीक्षण के बाद त्वरित भुगतान",
    "sell.submitAppraisal": "प्राथमिकता मूल्यांकन के लिए जमा करें",

    // About Us Page
    "about.kicker": "बुटीक एक्सोटिक डीलर #40212 • रिचमंड, बीसी",
    "about.heroTitle": 'एक्सोटिक उत्कृष्टता का<br><span>नया पैमाना।</span>',
    "about.heroDesc": "ऑटोमोटिव इंजीनियरिंग के प्रति जुनून से जन्मा। ABCD Cars सुपरकारों, दुर्लभ जीटी और ग्राहक सेवाओं के लिए पश्चिमी कनाडा का निजी केंद्र है।",
    "about.heroCta": "हमारा इतिहास और विजन",
    "about.heroVisit": "प्राइवेट शोरूम विजिट बुक करें",
    "about.stat1Num": "150-Pt",
    "about.stat1Label": "म्यूजियम सर्टिफिकेशन",
    "about.stat2Num": "#40212",
    "about.stat2Label": "बीसी लाइसेंस्ड डीलर",
    "about.stat3Num": "100%",
    "about.stat3Label": "CARFAX सत्यापित",
    "about.stat4Num": "कनाडा",
    "about.stat4Label": "एनक्लोज्ड डिलीवरी",
    "about.storyTag": "हमारी कहानी",
    "about.storyTitle": "पारखी <span>कलेक्टर्स के लिए</span>",
    "about.storyP1": "रिचमंड, बीसी में स्थित ABCD Cars की स्थापना एक विश्वास पर हुई: एक सुपरकार खरीदने का अनुभव कार जितना ही असाधारण होना चाहिए।",
    "about.storyP2": "हम पारंपरिक डीलरशिप से अलग एक प्राइवेट सैलून के रूप में काम करते हैं। हमारी हर कार व्यक्तिगत रूप से सत्यापित और संग्रहालय स्तर पर तैयार की जाती है।",
    "about.storyP3": "चाहे आप Porsche GT3 खरीदना चाहते हों या विशेष कार का आयात करना चाहते हों, हमारे सलाहकार पूर्ण गोपनीयता और पारदर्शी मूल्य प्रदान करते हैं।",
    "about.badgeTitle": "सर्टिफाइड एक्सोटिक कलेक्शन",
    "about.badgeSubtitle": "वातानुकूलित वॉल्ट सुविधा",
    "about.hallmarksTag": "विश्वसनीयता",
    "about.hallmarksTitle": "चार <span>ABCD मुख्य आधार</span>",
    "about.hallmark1Title": "प्रामाणिक इतिहास",
    "about.hallmark1Desc": "शोरूम में आने से पहले प्रत्येक कार का पूर्ण CARFAX सत्यापन किया जाता है।",
    "about.hallmark2Title": "पारदर्शी मूल्य",
    "about.hallmark2Desc": "कोई छुपा शुल्क नहीं। पहली बातचीत से ही बाजार-आधारित सही कीमत।",
    "about.hallmark3Title": "वीआईपी लॉजिस्टिक्स",
    "about.hallmark3Desc": "कनाडा में कहीं भी आपके निजी गैरेज तक सुरक्षित बंद कंटेनर में डिलीवरी।",
    "about.hallmark4Title": "आजीवन ग्राहक सेवा",
    "about.hallmark4Desc": "ट्रैक सलाह से लेकर भविष्य के ट्रेड तक, हमारा रिश्ता डिलीवरी पर खत्म नहीं होता।",
    "about.apptTitle": "अपनी प्राइवेट शोरूम विजिट बुक करें",
    "about.apptSubtitle": "अपने निजी सलाहकार के साथ एक आरामदायक माहौल में हमारे वाहनों का अनुभव करें।",
    "about.apptSubmit": "प्राइवेट विजिट के लिए अनुरोध करें",

    // Footer
    "footer.brandDesc": "हाई-परफॉर्मेंस एक्सोटिक्स, प्रमाणित सुपरकारों और कस्टम वाहन अधिग्रहण के लिए पश्चिमी कनाडा का मुख्य केंद्र।",
    "footer.dealerBadge": "बीसी लाइसेंस्ड ऑटो डीलर #40212",
    "footer.colShowroom": "शोरूम",
    "footer.colServices": "ग्राहक सेवाएँ",
    "footer.colDrops": "वीआईपी प्राइवेट ड्रॉप्स",
    "footer.link3d": "3D व्हीकल स्टूडियो",
    "footer.linkInventory": "पूरी इन्वेंटरी",
    "footer.linkSellExotic": "अपनी कार बेचें",
    "footer.linkHeritage": "हमारा हेरिटेज",
    "footer.linkLeaseCalc": "लीज कैलकुलेटर",
    "footer.linkCashBuyout": "त्वरित नकद भुगतान",
    "footer.linkConsignment": "वीआईपी कंसाइनमेंट",
    "footer.linkTestDrive": "वीआईपी टेस्ट ड्राइव",
    "footer.linkSourcing": "कस्टम वाहन सोर्सिंग",
    "footer.linkAppraisal": "ट्रेड-इन मूल्यांकन",
    "footer.dropsDesc": "पब्लिक रिलीज से पहले अनलिस्टेड इन्वेंटरी के बारे में जानें।",
    "footer.emailPlaceholder": "अपना ईमेल दर्ज करें...",
    "footer.join": "जुड़ें",
    "footer.copyright": "© 2026 ABCD Cars Sales & Leasing Ltd. सर्वाधिकार सुरक्षित।",
    "footer.developedBy": "डिजाइन और विकसित द्वारा",

    // Dock
    "dock.showroom": "शोरूम",
    "dock.inventory": "इन्वेंटरी",
    "dock.sellCar": "कार बेचें",
    "dock.about": "हमारे बारे में",
    "dock.call": "कॉल करें"
  },

  pa: {
    // Navigation
    "nav.showroom": "ਸ਼ੋਰੂਮ",
    "nav.marketplace": "ਮਾਰਕੀਟਪਲੇਸ",
    "nav.sellCar": "ਆਪਣੀ ਕਾਰ ਵੇਚੋ",
    "nav.financing": "ਵਿੱਤ ਪੋਸ਼ਣ",
    "nav.aboutUs": "ਸਾਡੇ ਬਾਰੇ",
    "nav.contact": "ਸੰਪਰਕ ਕਰੋ",
    "nav.exploreCars": "ਕਾਰਾਂ ਦੇਖੋ",
    "nav.visitShowroom": "ਸ਼ੋਰੂਮ ਜਾਓ",
    "nav.getOffer": "ਆਫਰ ਲਓ",
    "nav.menu": "ਮੀਨੂ",
    "nav.cinema": "ਸ਼ੋਰੂਮ ਸਿਨੇਮਾ",
    "nav.inventoryMobile": "ਮਾਰਕੀਟਪਲੇਸ ਅਤੇ ਇਨਵੈਂਟਰੀ",
    "nav.sellConsignMobile": "ਕਾਰ ਵੇਚੋ / ਕੰਸਾਈਨ ਕਰੋ",
    "nav.calcMobile": "ਵਿੱਤ ਤੇ ਲੀਜ਼ ਕੈਲਕੁਲੇਟਰ",
    "nav.aboutMobile": "ABCD ਐਕਸੋਟਿਕਸ ਬਾਰੇ",
    "nav.contactMobile": "ਸ਼ੋਰੂਮ ਅਤੇ ਸੰਪਰਕ",
    "nav.callConcierge": "ਸਿੱਧੀ ਕਾਲ ਕਰੋ",
    "nav.bookVip": "ਵੀਆਈਪੀ ਮੁਲਾਕਾਤ ਬੁੱਕ ਕਰੋ",
    "nav.selectLanguage": "ਭਾਸ਼ਾ ਚੁਣੋ",

    // Hero Section
    "hero.kicker": "ਰਿਚਮੰਡ, ਬੀਸੀ • ਬੁਟੀਕ ਐਕਸੋਟਿਕ ਸ਼ੋਰੂਮ",
    "hero.headline": '<span class="text-gradient">ਸਭ ਤੋਂ ਉੱਚੀ</span><br><span class="text-red">ਆਟੋਮੋਟਿਵ ਤਾਕਤ।</span>',
    "hero.desc": "ਪ੍ਰਮਾਣਿਤ ਸੁਪਰਕਾਰਾਂ, ਲਗਜ਼ਰੀ ਐਸਯੂਵੀ ਅਤੇ ਵਿਸ਼ੇਸ਼ ਗੱਡੀਆਂ ਲਈ ਪੱਛਮੀ ਕੈਨੇਡਾ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਬੁਟੀਕ ਸਥਾਨ।",
    "hero.ctaExplore": "ਕਲੈਕਸ਼ਨ ਦੇਖੋ",
    "hero.ctaVip": "ਵੀਆਈਪੀ ਵਿਜ਼ਿਟ ਬੁੱਕ ਕਰੋ",
    "hero.address": "10740 ਕੈਂਬੀ ਰੋਡ, ਰਿਚਮੰਡ, ਬੀਸੀ",
    "hero.dealerLicense": "ਬੀਸੀ ਲਾਇਸੰਸਸ਼ੁਦਾ ਡੀਲਰ #40212",
    "hero.exploreInventory": "ਇਨਵੈਂਟਰੀ ਦੇਖੋ",

    // Marketplace Section
    "market.tag": "ਲਾਈਵ ਇਨਵੈਂਟਰੀ",
    "market.title": "ਐਕਸੋਟਿਕ ਅਤੇ ਪਰਫਾਰਮੈਂਸ <span>ਕਲੈਕਸ਼ਨ</span>",
    "market.subtitle": "ਸਾਡੇ ਸ਼ੋਰੂਮ ਦਾ ਹਰ ਵਾਹਨ ਪੂਰੀ ਤਸਦੀਕ, ਇਤਿਹਾਸ ਅਤੇ ਤੁਰੰਤ ਡਿਲੀਵਰੀ ਲਈ ਤਿਆਰ ਹੈ।",
    "market.all": "ਸਾਰੀਆਂ ਗੱਡੀਆਂ",
    "market.supercars": "ਸੁਪਰਕਾਰਾਂ",
    "market.suvs": "ਲਗਜ਼ਰੀ ਐਸਯੂਵੀ",
    "market.coupes": "ਕੂਪੇ ਅਤੇ ਜੀਟੀ",
    "market.searchPlaceholder": "ਮੇਕ, ਮਾਡਲ ਜਾਂ ਸਾਲ ਅਨੁਸਾਰ ਖੋਜੋ (ਜਿਵੇਂ Porsche, GT3, V12)...",
    "market.sortBy": "ਤਰਤੀਬ ਦਿਓ",
    "market.priceHigh": "ਕੀਮਤ: ਉੱਚੀ ਤੋਂ ਘੱਟ",
    "market.priceLow": "ਕੀਮਤ: ਘੱਟ ਤੋਂ ਉੱਚੀ",
    "market.yearNew": "ਸਾਲ: ਸਭ ਤੋਂ ਨਵਾਂ",
    "market.mileageLow": "ਮਾਈਲੇਜ: ਘੱਟੋ-ਘੱਟ",
    "market.showing": "ਦਿਖਾ ਰਹੇ ਹਾਂ",
    "market.vehicles": "ਉਪਲਬਧ ਵਾਹਨ",
    "market.viewDetails": "ਵੇਰਵੇ ਦੇਖੋ",
    "market.inquireVip": "ਵੀਆਈਪੀ ਪੁੱਛਗਿੱਛ",
    "market.estLease": "ਅੰਦਾਜ਼ਨ ਲੀਜ਼",
    "market.perMonth": "/ਮਹੀਨਾ",
    "market.noVehicles": "ਤੁਹਾਡੀ ਖੋਜ ਮੁਤਾਬਕ ਕੋਈ ਗੱਡੀ ਨਹੀਂ ਮਿਲੀ।",
    "market.resetFilters": "ਫਿਲਟਰ ਰੀਸੈਟ ਕਰੋ",

    // Financing Calculator
    "calc.tag": "ਕਸਟਮ ਫਾਈਨੈਂਸਿੰਗ",
    "calc.title": "ਐਕਸੋਟਿਕ ਲੀਜ਼ ਅਤੇ <span>ਭੁਗਤਾਨ ਕੈਲਕੁਲੇਟਰ</span>",
    "calc.subtitle": "ਕੈਨੇਡਾ ਦੇ ਪ੍ਰਮੁੱਖ ਅਦਾਰਿਆਂ ਨਾਲ ਕਸਟਮ ਲੀਜ਼ ਸ਼ਰਤਾਂ ਅਤੇ ਸਥਿਰ ਵਿਆਜ ਦਰਾਂ ਪ੍ਰਾਪਤ ਕਰੋ।",
    "calc.vehiclePrice": "ਗੱਡੀ ਦਾ ਖਰੀਦ ਮੁੱਲ ($)",
    "calc.downPayment": "ਡਾਊਨ ਪੇਮੈਂਟ ($)",
    "calc.termMonths": "ਲੀਜ਼ ਮਿਆਦ (ਮਹੀਨੇ)",
    "calc.interestRate": "ਅੰਦਾਜ਼ਨ ਵਿਆਜ ਦਰ (APR %)",
    "calc.monthlyEst": "ਅੰਦਾਜ਼ਨ ਮਹੀਨਾਵਾਰ ਕਿਸ਼ਤ",
    "calc.taxNotice": "*ਲਾਗੂ ਬੀਸੀ ਟੈਕਸ ਅਤੇ ਡੀਲਰ ਖਰਚੇ ਵੱਖਰੇ ਹਨ।",
    "calc.principal": "ਕੁੱਲ ਫਾਈਨੈਂਸ ਰਾਸ਼ੀ",
    "calc.termLength": "ਮਿਆਦ",
    "calc.earlyPayout": "ਸਮੇਂ ਤੋਂ ਪਹਿਲਾਂ ਨਿਪਟਾਰਾ ਫੀਸ",
    "calc.applyBtn": "ਵੀਆਈਪੀ ਪ੍ਰੀ-ਮਨਜ਼ੂਰੀ ਅਰਜ਼ੀ ਜਮ੍ਹਾਂ ਕਰੋ",

    // Experience / Value Propositions
    "exp.tag": "ਵਿਲੱਖਣਤਾ ਦਾ ਮਿਆਰ",
    "exp.title": "ਸਮਝਦਾਰ ਗਾਹਕ <span>ABCD CARS</span> ਕਿਉਂ ਚੁਣਦੇ ਹਨ",
    "exp.subtitle": "ਅਸੀਂ ਪੂਰੇ ਉੱਤਰੀ ਅਮਰੀਕਾ ਵਿੱਚ ਪਾਰਦਰਸ਼ਤਾ, ਪ੍ਰਮਾਣਿਤ ਇਤਿਹਾਸ ਅਤੇ ਵਿਸ਼ੇਸ਼ ਡੋਰ-ਟੂ-ਡੋਰ ਡਿਲੀਵਰੀ ਦਿੰਦੇ ਹਾਂ।",
    "exp.feat1Title": "180-ਪੁਆਇੰਟ ਐਕਸੋਟਿਕ ਸਰਟੀਫਿਕੇਸ਼ਨ",
    "exp.feat1Desc": "ਹਰ ਵਾਹਨ ਦੀ ਮਾਹਿਰ ਮਕੈਨਿਕਾਂ ਵੱਲੋਂ ਪੂਰੀ ਜਾਂਚ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
    "exp.feat2Title": "ਸਪਸ਼ਟ ਅਤੇ ਪਾਰਦਰਸ਼ੀ ਕੀਮਤ",
    "exp.feat2Desc": "ਬਿਨਾਂ ਕਿਸੇ ਲੁਕਵੇਂ ਖਰਚੇ ਦੇ ਪਾਰਦਰਸ਼ੀ ਮੁੱਲ। ਅਸੀਂ ਆਪਣੇ ਵਾਅਦੇ 'ਤੇ ਖਰੇ ਉਤਰਦੇ ਹਾਂ।",
    "exp.feat3Title": "ਸੁਰੱਖਿਅਤ ਬੰਦ ਕੰਟੇਨਰ ਡਿਲੀਵਰੀ",
    "exp.feat3Desc": "ਕੈਨੇਡਾ ਭਰ ਵਿੱਚ ਵਾਤਾਨੁਕੂਲਿਤ ਅਤੇ ਸੁਰੱਖਿਅਤ ਕੰਟੇਨਰ ਵਿੱਚ ਡੋਰ-ਟੂ-ਡੋਰ ਡਿਲੀਵਰੀ।",
    "exp.card1Badge": "ਤੁਰੰਤ ਨਕਦ ਭੁਗਤਾਨ",
    "exp.card1Title": "ਆਪਣੀ ਸੁਪਰਕਾਰ ਵੇਚੋ ਜਾਂ ਕੰਸਾਈਨ ਕਰੋ",
    "exp.card1Desc": "24 ਘੰਟਿਆਂ ਵਿੱਚ ਪ੍ਰਮਾਣਿਤ ਨਕਦ ਆਫਰ, ਕਰਜ਼ਾ ਨਿਪਟਾਰਾ ਅਤੇ ਕੈਨੇਡਾ ਦੇ ਟਾਪ ਕੁਲੈਕਟਰਾਂ ਲਈ ਵਿਸ਼ੇਸ਼ ਸੇਵਾ।",
    "exp.card1Btn": "ਕਾਰ ਦਾ ਮੁਲਾਂਕਣ ਕਰੋ",
    "exp.card2Badge": "ਬੁਟੀਕ ਸ਼ੋਰੂਮ • ਡੀਲਰ #40212",
    "exp.card2Title": "ABCD ਹੈਰੀਟੇਜ ਅਤੇ ਸ਼ੋਰੂਮ",
    "exp.card2Desc": "ਰਿਚਮੰਡ, ਬੀਸੀ ਵਿੱਚ ਸਾਡੇ ਨਿੱਜੀ ਸ਼ੋਰੂਮ ਅਤੇ ਵਿਸ਼ੇਸ਼ ਗਾਹਕ ਸੇਵਾਵਾਂ ਦਾ ਅਨੁਭਵ ਕਰੋ।",
    "exp.card2Btn": "ਸਾਡੀ ਕਹਾਣੀ ਜਾਣੋ",

    // Contact & VIP Booking
    "contact.tag": "ਨਿੱਜੀ ਸ਼ੋਰੂਮ",
    "contact.title": "ਸਾਡੇ <span>ਸ਼ੋਰੂਮ</span> ਆਓ",
    "contact.subtitle": "ਸ਼ਾਨਦਾਰ ਲਾਈਟਿੰਗ ਅਤੇ ਨਿੱਜੀ ਸ਼ੋਰੂਮ ਵਿੱਚ ਲਗਜ਼ਰੀ ਕਾਰਾਂ ਦਾ ਅਨੰਦ ਲਓ।",
    "contact.addressLabel": "ਸ਼ੋਰੂਮ ਦਾ ਪਤਾ",
    "contact.hoursLabel": "ਕੰਮ ਦੇ ਘੰਟੇ",
    "contact.hoursVal": "ਸੋਮ - ਵੀਰ: 09:00 - 20:00 • ਸ਼ੁੱਕਰ - ਸ਼ਨੀ: 09:00 - 18:00 • ਐਤ: 10:00 - 17:00",
    "contact.conciergeLabel": "ਸਿੱਧੀ ਹੈਲਪਲਾਈਨ",
    "contact.licenseNotice": "ਬੀਸੀ ਡੀਲਰ ਲਾਇਸੰਸ #40212 • ਮੁਲਾਕਾਤ ਅਤੇ ਓਪਨ ਗੈਲਰੀ",
    "contact.formTitle": "ਵੀਆਈਪੀ ਟੈਸਟ ਡਰਾਈਵ ਬੁੱਕ ਕਰੋ",
    "contact.formDesc": "ਹੇਠਾਂ ਆਪਣਾ ਵੇਰਵਾ ਭਰੋ ਅਤੇ ਸਾਡੇ ਸਲਾਹਕਾਰ ਤੁਹਾਡੀ ਨਿੱਜੀ ਮੁਲਾਕਾਤ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨਗੇ।",
    "contact.firstName": "ਪਹਿਲਾ ਨਾਮ",
    "contact.lastName": "ਆਖਰੀ ਨਾਮ",
    "contact.phone": "ਫ਼ੋਨ ਨੰਬਰ",
    "contact.email": "ਈਮੇਲ ਪਤਾ",
    "contact.vehicleInterest": "ਪਸੰਦੀਦਾ ਵਾਹਨ",
    "contact.prefDate": "ਪਸੰਦੀਦਾ ਮਿਤੀ",
    "contact.submitBtn": "ਵੀਆਈਪੀ ਮੁਲਾਕਾਤ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",

    // Sell Your Car Page
    "sell.kicker": "ਐਕਸੋਟਿਕ ਕਾਰ ਖਰੀਦ • ਡੀਲਰ #40212",
    "sell.heroTitle": 'ਕਾਰ ਵੇਚਣ ਜਾਂ ਕੰਸਾਈਨ ਕਰਨ ਦਾ<br><span>ਸਭ ਤੋਂ ਵਧੀਆ ਤਰੀਕਾ।</span>',
    "sell.heroDesc": "ਕੈਨੇਡਾ ਦੇ ਪ੍ਰਮਾਣਿਤ ਕੁਲੈਕਟਰ ਨੈੱਟਵਰਕ ਰਾਹੀਂ ਆਪਣੀ ਸੁਪਰਕਾਰ ਦਾ ਸਭ ਤੋਂ ਵੱਧ ਮੁੱਲ ਪ੍ਰਾਪਤ ਕਰੋ। 24 ਘੰਟਿਆਂ ਵਿੱਚ ਵਾਇਰ ਪੇਮੈਂਟ ਜਾਂ ਵੀਆਈਪੀ ਕੰਸਾਈਨਮੈਂਟ।",
    "sell.heroCta": "ਤੁਰੰਤ ਵਾਹਨ ਮੁਲਾਂਕਣ",
    "sell.heroCall": "ਅਧਿਗ੍ਰਹਿਣ ਡਾਇਰੈਕਟਰ ਨਾਲ ਗੱਲ ਕਰੋ",
    "sell.stat1Num": "$48M+",
    "sell.stat1Label": "ਖਰੀਦੀਆਂ ਗਈਆਂ ਗੱਡੀਆਂ",
    "sell.stat2Num": "< 24 ਘੰਟੇ",
    "sell.stat2Label": "ਤੇਜ਼ ਬੈਂਕ ਟ੍ਰਾਂਸਫਰ",
    "sell.stat3Num": "95%",
    "sell.stat3Label": "ਕੰਸਾਈਨਮੈਂਟ ਨੈੱਟ ਰਿਟਰਨ",
    "sell.stat4Num": "100%",
    "sell.stat4Label": "ਕਰਜ਼ਾ ਨਿਪਟਾਰਾ ਸਹਾਇਤਾ",
    "sell.appraisalTag": "ਤੁਰੰਤ ਮੁਲਾਂਕਣ",
    "sell.appraisalTitle": "ਵਾਹਨ <span>ਮੁਲਾਂਕਣ ਸਟੂਡੀਓ</span>",
    "sell.appraisalSubtitle": "ਆਪਣੀ ਕਾਰ ਦਾ ਵੇਰਵਾ ਭਰੋ ਅਤੇ ਤੁਰੰਤ ਅੰਦਾਜ਼ਨ ਬਾਜ਼ਾਰ ਮੁੱਲ ਪ੍ਰਾਪਤ ਕਰੋ।",
    "sell.pathwayLabel": "ਪਸੰਦੀਦਾ ਤਰੀਕਾ:",
    "sell.tabCashTitle": "ਸਿੱਧਾ ਨਕਦ ਭੁਗਤਾਨ",
    "sell.tabCashDesc": "24 ਘੰਟਿਆਂ ਵਿੱਚ ਬੈਂਕ ਟ੍ਰਾਂਸਫਰ। ਕੋਈ ਉਡੀਕ ਨਹੀਂ।",
    "sell.tabConsignTitle": "ਵੀਆਈਪੀ ਕੰਸਾਈਨਮੈਂਟ",
    "sell.tabConsignDesc": "ਵੱਧ ਤੋਂ ਵੱਧ ਮੁਨਾਫਾ। ਸਾਡੇ ਪ੍ਰਾਈਵੇਟ ਸ਼ੋਰੂਮ ਵਿੱਚ ਪ੍ਰਦਰਸ਼ਿਤ।",
    "sell.vehicleMake": "ਕਾਰ ਦਾ ਮੇਕ",
    "sell.vehicleModel": "ਮਾਡਲ ਅਤੇ ਵੇਰੀਐਂਟ",
    "sell.modelYear": "ਮਾਡਲ ਸਾਲ",
    "sell.mileage": "ਮੌਜੂਦਾ ਮਾਈਲੇਜ (km)",
    "sell.condition": "ਕਾਰ ਦੀ ਹਾਲਤ",
    "sell.condMint": "ਕੁਲੈਕਟਰ ਗ੍ਰੇਡ / ਬਿਲਕੁਲ ਨਵੀਂ ਵਰਗੀ",
    "sell.condExcellent": "ਬਹੁਤ ਵਧੀਆ (ਆਮ ਹਲਕੀ ਵਰਤੋਂ)",
    "sell.condGood": "ਚੰਗੀ (ਸਾਫ ਇਤਿਹਾਸ, ਵੱਧ ਕਿਲੋਮੀਟਰ)",
    "sell.lienStatus": "ਲੋਨ / ਲੀਜ਼ ਸਥਿਤੀ",
    "sell.lienNone": "ਕੋਈ ਲੋਨ ਨਹੀਂ (ਕਲੀਨ ਟਾਈਟਲ)",
    "sell.lienActive": "ਐਕਟਿਵ ਬੈਂਕ ਲੋਨ (ABCD ਨਿਪਟਾਰਾ ਕਰੇਗਾ)",
    "sell.yourName": "ਪੂਰਾ ਨਾਮ",
    "sell.contactPhone": "ਫ਼ੋਨ ਨੰਬਰ",
    "sell.contactEmail": "ਈਮੇਲ ਪਤਾ",
    "sell.vinOptional": "VIN ਨੰਬਰ (ਸਹੀ ਆਫਰ ਲਈ ਚੋਣਵਾਂ)",
    "sell.bracketTitle": "ਅੰਦਾਜ਼ਨ ਬਾਜ਼ਾਰ ਮੁੱਲ",
    "sell.fastPayoutNotice": "180-ਪੁਆਇੰਟ ਜਾਂਚ ਤੋਂ ਬਾਅਦ ਤੁਰੰਤ ਭੁਗਤਾਨ",
    "sell.submitAppraisal": "ਤਰਜੀਹੀ ਮੁਲਾਂਕਣ ਲਈ ਜਮ੍ਹਾਂ ਕਰੋ",

    // About Us Page
    "about.kicker": "ਬੁਟੀਕ ਐਕਸੋਟਿਕ ਡੀਲਰ #40212 • ਰਿਚਮੰਡ, ਬੀਸੀ",
    "about.heroTitle": 'ਐਕਸੋਟਿਕ ਉੱਤਮਤਾ ਦਾ<br><span>ਨਵਾਂ ਮਿਆਰ।</span>',
    "about.heroDesc": "ਆਟੋਮੋਟਿਵ ਇੰਜੀਨੀਅਰਿੰਗ ਦੇ ਜਨੂਨ ਤੋਂ ਪੈਦਾ ਹੋਇਆ। ABCD Cars ਸੁਪਰਕਾਰਾਂ, ਦੁਰਲੱਭ ਜੀਟੀ ਅਤੇ ਵਿਸ਼ੇਸ਼ ਗਾਹਕ ਸੇਵਾਵਾਂ ਲਈ ਪੱਛਮੀ ਕੈਨੇਡਾ ਦਾ ਮੁੱਖ ਕੇਂਦਰ ਹੈ।",
    "about.heroCta": "ਸਾਡਾ ਇਤਿਹਾਸ ਅਤੇ ਵਿਜ਼ਨ",
    "about.heroVisit": "ਪ੍ਰਾਈਵੇਟ ਸ਼ੋਰੂਮ ਵਿਜ਼ਿਟ ਬੁੱਕ ਕਰੋ",
    "about.stat1Num": "150-Pt",
    "about.stat1Label": "ਮਿਊਜ਼ੀਅਮ ਸਰਟੀਫਿਕੇਸ਼ਨ",
    "about.stat2Num": "#40212",
    "about.stat2Label": "ਬੀਸੀ ਲਾਇਸੰਸਸ਼ੁਦਾ ਡੀਲਰ",
    "about.stat3Num": "100%",
    "about.stat3Label": "CARFAX ਤਸਦੀਕਸ਼ੁਦਾ",
    "about.stat4Num": "ਕੈਨੇਡਾ",
    "about.stat4Label": "ਐਨਕਲੋਜ਼ਡ ਡਿਲੀਵਰੀ",
    "about.storyTag": "ਸਾਡੀ ਕਹਾਣੀ",
    "about.storyTitle": "ਸਮਝਦਾਰ <span>ਕੁਲੈਕਟਰਾਂ ਲਈ</span>",
    "about.storyP1": "ਰਿਚਮੰਡ, ਬੀਸੀ ਵਿੱਚ ਸਥਾਪਿਤ ABCD Cars ਇੱਕ ਸਧਾਰਨ ਵਿਸ਼ਵਾਸ 'ਤੇ ਬਣੀ ਹੈ: ਇੱਕ ਸੁਪਰਕਾਰ ਖਰੀਦਣ ਦਾ ਅਨੁਭਵ ਕਾਰ ਵਾਂਗ ਹੀ ਅਸਾਧਾਰਨ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
    "about.storyP2": "ਅਸੀਂ ਰਵਾਇਤੀ ਡੀਲਰਸ਼ਿਪਾਂ ਤੋਂ ਵੱਖਰੇ ਹੋ ਕੇ ਇੱਕ ਪ੍ਰਾਈਵੇਟ ਸੈਲੂਨ ਵਾਂਗ ਕੰਮ ਕਰਦੇ ਹਾਂ। ਸਾਡੀ ਹਰ ਕਾਰ ਨਿੱਜੀ ਤੌਰ 'ਤੇ ਜਾਂਚੀ ਅਤੇ ਤਿਆਰ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
    "about.storyP3": "ਚਾਹੇ ਤੁਸੀਂ Porsche GT3 ਖਰੀਦਣੀ ਹੋਵੇ ਜਾਂ ਖਾਸ ਕਾਰ ਲਿਆਉਣੀ ਹੋਵੇ, ਸਾਡੇ ਸਲਾਹਕਾਰ ਪੂਰੀ ਗੁਪਤਤਾ ਅਤੇ ਪਾਰਦਰਸ਼ੀ ਕੀਮਤ ਦਿੰਦੇ ਹਨ।",
    "about.badgeTitle": "ਸਰਟੀਫਾਈਡ ਐਕਸੋਟਿਕ ਕਲੈਕਸ਼ਨ",
    "about.badgeSubtitle": "ਵਾਤਾਨੁਕੂਲਿਤ ਸ਼ੋਰੂਮ ਸਹੂਲਤ",
    "about.hallmarksTag": "ਭਰੋਸੇਯੋਗਤਾ",
    "about.hallmarksTitle": "ਚਾਰ <span>ABCD ਮੁੱਖ ਥੰਮ੍ਹ</span>",
    "about.hallmark1Title": "ਅਸਲੀ ਇਤਿਹਾਸ",
    "about.hallmark1Desc": "ਸ਼ੋਰੂਮ ਵਿੱਚ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਹਰ ਕਾਰ ਦਾ ਪੂਰਾ CARFAX ਵੈਰੀਫਿਕੇਸ਼ਨ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।",
    "about.hallmark2Title": "ਪਾਰਦਰਸ਼ੀ ਕੀਮਤ",
    "about.hallmark2Desc": "ਕੋਈ ਲੁਕਵੇਂ ਖਰਚੇ ਨਹੀਂ। ਪਹਿਲੀ ਗੱਲਬਾਤ ਤੋਂ ਹੀ ਸਹੀ ਬਾਜ਼ਾਰੀ ਕੀਮਤ।",
    "about.hallmark3Title": "ਵੀਆਈਪੀ ਲੌਜਿਸਟਿਕਸ",
    "about.hallmark3Desc": "ਕੈਨੇਡਾ ਵਿੱਚ ਕਿਤੇ ਵੀ ਤੁਹਾਡੇ ਨਿੱਜੀ ਗੈਰੇਜ ਤੱਕ ਸੁਰੱਖਿਅਤ ਬੰਦ ਕੰਟੇਨਰ ਵਿੱਚ ਡਿਲੀਵਰੀ।",
    "about.hallmark4Title": "ਜੀਵਨ ਭਰ ਗਾਹਕ ਸੇਵਾ",
    "about.hallmark4Desc": "ਟਰੈਕ ਸਲਾਹ ਤੋਂ ਲੈ ਕੇ ਭਵਿੱਖ ਦੇ ਵਪਾਰ ਤੱਕ, ਸਾਡਾ ਰਿਸ਼ਤਾ ਕਦੇ ਖਤਮ ਨਹੀਂ ਹੁੰਦਾ।",
    "about.apptTitle": "ਆਪਣੀ ਪ੍ਰਾਈਵੇਟ ਸ਼ੋਰੂਮ ਵਿਜ਼ਿਟ ਬੁੱਕ ਕਰੋ",
    "about.apptSubtitle": "ਆਪਣੇ ਨਿੱਜੀ ਸਲਾਹਕਾਰ ਨਾਲ ਇੱਕ ਆਰਾਮਦਾਇਕ ਮਾਹੌਲ ਵਿੱਚ ਸਾਡੇ ਵਾਹਨਾਂ ਦਾ ਅਨੁਭਵ ਕਰੋ।",
    "about.apptSubmit": "ਪ੍ਰਾਈਵੇਟ ਵਿਜ਼ਿਟ ਲਈ ਬੇਨਤੀ ਕਰੋ",

    // Footer
    "footer.brandDesc": "ਹਾਈ-ਪਰਫਾਰਮੈਂਸ ਐਕਸੋਟਿਕਸ, ਪ੍ਰਮਾਣਿਤ ਸੁਪਰਕਾਰਾਂ ਅਤੇ ਕਸਟਮ ਵਾਹਨ ਖਰੀਦ ਲਈ ਪੱਛਮੀ ਕੈਨੇਡਾ ਦਾ ਮੁੱਖ ਕੇਂਦਰ।",
    "footer.dealerBadge": "ਬੀਸੀ ਲਾਇਸੰਸਸ਼ੁਦਾ ਆਟੋ ਡੀਲਰ #40212",
    "footer.colShowroom": "ਸ਼ੋਰੂਮ",
    "footer.colServices": "ਗਾਹਕ ਸੇਵਾਵਾਂ",
    "footer.colDrops": "ਵੀਆਈਪੀ ਪ੍ਰਾਈਵੇਟ ਡ੍ਰੌਪਸ",
    "footer.link3d": "3D ਵਾਹਨ ਸਟੂਡੀਓ",
    "footer.linkInventory": "ਪੂਰੀ ਇਨਵੈਂਟਰੀ",
    "footer.linkSellExotic": "ਆਪਣੀ ਕਾਰ ਵੇਚੋ",
    "footer.linkHeritage": "ਸਾਡਾ ਹੈਰੀਟੇਜ",
    "footer.linkLeaseCalc": "ਲੀਜ਼ ਕੈਲਕੁਲੇਟਰ",
    "footer.linkCashBuyout": "ਤੁਰੰਤ ਨਕਦ ਭੁਗਤਾਨ",
    "footer.linkConsignment": "ਵੀਆਈਪੀ ਕੰਸਾਈਨਮੈਂਟ",
    "footer.linkTestDrive": "ਵੀਆਈਪੀ ਟੈਸਟ ਡਰਾਈਵ",
    "footer.linkSourcing": "ਕਸਟਮ ਵਾਹਨ ਸੋਰਸਿੰਗ",
    "footer.linkAppraisal": "ਟਰੇਡ-ਇਨ ਮੁਲਾਂਕਣ",
    "footer.dropsDesc": "ਜਨਤਕ ਰਿਲੀਜ਼ ਤੋਂ ਪਹਿਲਾਂ ਵਿਸ਼ੇਸ਼ ਗੱਡੀਆਂ ਦੀ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰੋ।",
    "footer.emailPlaceholder": "ਆਪਣਾ ਈਮੇਲ ਭਰੋ...",
    "footer.join": "ਜੁੜੋ",
    "footer.copyright": "© 2026 ABCD Cars Sales & Leasing Ltd. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।",
    "footer.developedBy": "ਡਿਜ਼ਾਈਨ ਅਤੇ ਵਿਕਸਤ ਕੀਤਾ",

    // Dock
    "dock.showroom": "ਸ਼ੋਰੂਮ",
    "dock.inventory": "ਇਨਵੈਂਟਰੀ",
    "dock.sellCar": "ਕਾਰ ਵੇਚੋ",
    "dock.about": "ਸਾਡੇ ਬਾਰੇ",
    "dock.call": "ਕਾਲ ਕਰੋ"
  }
};

/**
 * Core Translation Function
 * @param {string} key - Translation key
 * @param {string} [fallback] - Fallback text if key is missing
 * @returns {string} Translated text
 */
function t(key, fallback = "") {
  const currentLang = window.currentABCDLang || localStorage.getItem("abcd_lang") || "en";
  const dict = ABCD_TRANSLATIONS[currentLang] || ABCD_TRANSLATIONS.en;
  return dict[key] !== undefined ? dict[key] : (ABCD_TRANSLATIONS.en[key] !== undefined ? ABCD_TRANSLATIONS.en[key] : fallback || key);
}

/**
 * Apply Language to the entire page
 * @param {string} langCode - Language code ('en', 'zh', 'fr', 'hi', 'pa')
 */
function setABCDLanguage(langCode) {
  if (!ABCD_LANGUAGES[langCode]) {
    langCode = "en";
  }

  window.currentABCDLang = langCode;
  try {
    localStorage.setItem("abcd_lang", langCode);
  } catch (e) {
    // LocalStorage fallback
  }

  document.documentElement.lang = langCode;

  // Translate all DOM elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    const translated = t(key);
    if (translated) {
      if (translated.includes("<") && translated.includes(">")) {
        elem.innerHTML = translated;
      } else {
        elem.textContent = translated;
      }
    }
  });

  // Translate Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
    const key = elem.getAttribute("data-i18n-placeholder");
    const translated = t(key);
    if (translated) {
      elem.setAttribute("placeholder", translated);
    }
  });

  // Translate Titles & Aria Labels
  document.querySelectorAll("[data-i18n-title]").forEach(elem => {
    const key = elem.getAttribute("data-i18n-title");
    const translated = t(key);
    if (translated) {
      elem.setAttribute("title", translated);
    }
  });

  // Update Language Selector Badges
  const desktopBadge = document.getElementById("desktop-current-lang");
  if (desktopBadge) {
    desktopBadge.textContent = ABCD_LANGUAGES[langCode].native;
  }

  // Update active status in desktop dropdown
  document.querySelectorAll(".lang-option").forEach(btn => {
    if (btn.getAttribute("data-lang") === langCode) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update active status in mobile drawer pills
  document.querySelectorAll(".mobile-lang-pill").forEach(pill => {
    if (pill.getAttribute("data-lang") === langCode) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  // Notify other components (such as marketplace.js) to refresh dynamic text
  window.dispatchEvent(new CustomEvent("abcdLanguageChanged", { detail: { lang: langCode } }));
}

/**
 * Initialize Translation UI and Event Listeners
 */
function initABCDLanguage() {
  const savedLang = localStorage.getItem("abcd_lang") || "en";

  // Desktop Dropdown Toggle
  const langMenuBtn = document.getElementById("lang-menu-btn");
  const langDropdownMenu = document.getElementById("lang-dropdown-menu");

  if (langMenuBtn && langDropdownMenu) {
    langMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isExpanded = langDropdownMenu.classList.toggle("active");
      langMenuBtn.classList.toggle("open", isExpanded);
      langMenuBtn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest("#lang-selector-desktop")) {
        langDropdownMenu.classList.remove("active");
        langMenuBtn.classList.remove("open");
        langMenuBtn.setAttribute("aria-expanded", "false");
      }
    });

    // Language option click
    document.querySelectorAll(".lang-option").forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        setABCDLanguage(lang);
        langDropdownMenu.classList.remove("active");
        langMenuBtn.classList.remove("open");
        langMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Mobile Language Pills
  document.querySelectorAll(".mobile-lang-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const lang = pill.getAttribute("data-lang");
      setABCDLanguage(lang);
    });
  });

  // Initial apply
  setABCDLanguage(savedLang);
}

// Auto-run on DOM Ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initABCDLanguage);
} else {
  initABCDLanguage();
}
