import type {
  ContactItem,
  FooterColumn,
  HeroAdvantage,
  HomeContent,
  ImageAsset,
  LanguageOption,
  LocaleCode,
  NavItem,
  PartnerItem,
  ProductItem,
  ScopeItem,
} from "@/types/home";

export const defaultLocale: LocaleCode = "zh";

export const languageOptions: LanguageOption[] = [
  { code: "zh", label: "中文" },
  { code: "en", label: "EN" },
];

export const brandLogo: ImageAsset = {
  src: "/images/logo-jiexin.png",
  alt: "Jiexin Technology logo",
};

const sharedCompany = {
  phone: "18605530725",
  email: "18605530725@126.com",
};

const sharedHeroBackground: ImageAsset = {
  src: "/images/hero-atlas-campus.jpg",
  alt: "Atlas Copco Group headquarters campus",
};

const sharedAboutImage: ImageAsset = {
  src: "/images/company-building.svg",
  alt: "Jiexin Technology office building",
};

const sharedQrImage: ImageAsset = {
  src: "/images/qr-wechat-real.png",
  alt: "Jiexin Technology WeChat QR code",
};

const sharedMapImage = {
  preview: {
    src: "/images/map-location-amap-cropped.png",
    alt: "Jiexin Technology service center location preview",
  },
  alt: "Jiexin Technology service center location map",
  openHref: "https://surl.amap.com/gPqBRaq9eSv",
  openLabel: "打开地图",
};

const sharedMapImageEn = {
  ...sharedMapImage,
  openLabel: "Open Map",
};

const partners: PartnerItem[] = [
  { name: "Atlas Copco", logo: { src: "/images/partner-atlas.svg", alt: "Atlas Copco partner logo" } },
  { name: "LIUTECH", logo: { src: "/images/partner-liutech.svg", alt: "LIUTECH partner logo" } },
  { name: "Deman", logo: { src: "/images/partner-deman.svg", alt: "Deman partner logo" } },
  { name: "Ingersoll Rand", logo: { src: "/images/partner-ir.svg", alt: "Ingersoll Rand partner logo" } },
  { name: "Gardner Denver", logo: { src: "/images/partner-gardner.svg", alt: "Gardner Denver partner logo" } },
  { name: "SULLAIR", logo: { src: "/images/partner-sullair.svg", alt: "SULLAIR partner logo" } },
  { name: "Kaeser", displayName: "KAESER", subtitle: "Compressors", color: "#193B6B", accentColor: "#F2C300" },
  { name: "Quincy Compressor", displayName: "Quincy", subtitle: "Compressor", color: "#0A4E8A", accentColor: "#C9252D" },
  { name: "BOGE", displayName: "BOGE", subtitle: "Compressed Air", color: "#0D3B66", accentColor: "#42B928" },
  { name: "CompAir", displayName: "CompAir", subtitle: "Air Systems", color: "#1E5AA8", accentColor: "#E33A2C" },
  { name: "ELGi", displayName: "ELGi", subtitle: "Equipment", color: "#1C5E9E", accentColor: "#F39C12" },
  { name: "开山", displayName: "开山", subtitle: "KAISHAN", color: "#0B6B45", accentColor: "#D32F2F" },
  { name: "复盛", displayName: "复盛", subtitle: "FUSHENG", color: "#174A8B", accentColor: "#D01818" },
  { name: "日立", displayName: "HITACHI", subtitle: "Industrial", color: "#C4001A", accentColor: "#222222" },
  { name: "神钢", displayName: "KOBELCO", subtitle: "Systems", color: "#0D5A9C", accentColor: "#2CAAE2" },
  { name: "Chicago Pneumatic", displayName: "CP", subtitle: "Chicago Pneumatic", color: "#9B1C20", accentColor: "#111827" },
  { name: "BEKO Technologies", displayName: "BEKO", subtitle: "Technologies", color: "#0062A3", accentColor: "#9AC43A" },
  { name: "Hankison", displayName: "Hankison", subtitle: "Filtration", color: "#254E7B", accentColor: "#37A2D6" },
  { name: "Anest Iwata", displayName: "ANEST IWATA", subtitle: "Air Engineering", color: "#005BAC", accentColor: "#E21B2D" },
  { name: "SCR", displayName: "SCR", subtitle: "Compressor", color: "#0E7490", accentColor: "#F97316" },
];

const productImages = {
  compressor: {
    src: "/images/product-real-compressor.jpg",
    alt: "Screw air compressor equipment photo",
  },
  refrigeratedDryer: {
    src: "/images/product-real-refrigerated-dryer.jpg",
    alt: "Refrigerated air dryer equipment photo",
  },
  adsorptionDryer: {
    src: "/images/product-real-adsorption-dryer.jpg",
    alt: "Adsorption air dryer equipment photo",
  },
  tank: {
    src: "/images/product-real-air-tank.jpg",
    alt: "Compressed air receiver tank equipment photo",
  },
} satisfies Record<string, ImageAsset>;

function buildFooterColumns(navigationItems: NavItem[], solutionLinks: NavItem[]): FooterColumn[] {
  return [
    {
      title: navigationItems[0]?.label === "首页" ? "快速导航" : "Quick Links",
      links: navigationItems,
    },
    {
      title: navigationItems[0]?.label === "首页" ? "解决方案" : "Solutions",
      links: solutionLinks,
    },
  ];
}

function contacts({
  phoneLabel,
  emailLabel,
  addressLabel,
  address,
}: {
  phoneLabel: string;
  emailLabel: string;
  addressLabel: string;
  address: string;
}): ContactItem[] {
  return [
    { label: phoneLabel, value: sharedCompany.phone, icon: "phone" },
    { label: emailLabel, value: sharedCompany.email, icon: "email" },
    { label: addressLabel, value: address, icon: "location" },
  ];
}

const zhNavigation: NavItem[] = [
  { label: "首页", href: "#home" },
  { label: "关于我们", href: "#about" },
  { label: "产品中心", href: "#products" },
  { label: "解决方案", href: "#scope" },
  { label: "新闻资讯", href: "#partners" },
  { label: "联系我们", href: "#contact" },
];

const enNavigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#scope" },
  { label: "Support", href: "#contact" },
  { label: "News", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

const zhAddress = "安徽省芜湖市智慧空压站服务中心（南翔万商店）";
const enAddress = "Smart Air Compressor Station Service Center, Wuhu, Anhui, China";

export const homeContent = {
  zh: {
    meta: {
      title: "安徽杰鑫机电科技有限公司 | 节能机电设备与系统解决方案",
      description:
        "安徽杰鑫机电科技有限公司专注节能机电设备研发、生产、销售与服务，提供空压站系统设计、安装、调试和维护解决方案。",
    },
    company: {
      name: "安徽杰鑫机电科技有限公司",
      englishName: "ENERGY-SAVING GAS",
      slogan: "致力于节能机电设备与系统解决方案",
      summary:
        "安徽杰鑫机电科技有限公司自 2010 年起深耕节能机电与压缩空气系统领域，围绕空压站规划、设备选型、安装调试、维护保养与节能改造提供一站式服务。我们坚持以可靠设备、规范施工和及时响应为客户降低运行风险，持续提升用气系统的稳定性与能效表现。",
      phone: sharedCompany.phone,
      email: sharedCompany.email,
      address: zhAddress,
    },
    navigation: zhNavigation,
    hero: {
      eyebrow: "ENERGY-SAVING GAS",
      title: "安徽杰鑫机电科技有限公司",
      subtitle: "致力于节能机电设备与系统解决方案",
      background: sharedHeroBackground,
      advantages: [
        { title: "高效节能", icon: "energy" },
        { title: "稳定可靠", icon: "reliable" },
        { title: "专业服务", icon: "service" },
      ] satisfies HeroAdvantage[],
    },
    about: {
      id: "about",
      title: "关于我们",
      subtitle: "ABOUT US",
      body:
        "安徽杰鑫机电科技有限公司自 2010 年起深耕节能机电与压缩空气系统领域，围绕空压站规划、设备选型、安装调试、维护保养与节能改造提供一站式服务。我们坚持以可靠设备、规范施工和及时响应为客户降低运行风险，持续提升用气系统的稳定性与能效表现。",
      contacts: contacts({ phoneLabel: "手机", emailLabel: "邮箱", addressLabel: "地址", address: zhAddress }),
      cta: { label: "了解更多", href: "#scope" },
      image: sharedAboutImage,
      playLabel: "播放企业介绍视频",
    },
    scope: {
      id: "scope",
      title: "解决方案",
      subtitle: "SOLUTIONS",
      description:
        "围绕压缩空气从产生、净化、储存、输送到用气端管理，提供面向工况的整站方案与长期服务。",
      items: [
        {
          title: "空压站整站建设",
          subtitle: "AIR STATION",
          description: "面向新建厂房、产线扩容和老站升级，统筹空压机、储气罐、干燥过滤、管路与控制系统。",
          image: productImages.compressor,
          highlights: ["站房布局与设备选型", "安装调试与压力稳定", "后续巡检和维护保养"],
        },
        {
          title: "空气品质与后处理",
          subtitle: "AIR TREATMENT",
          description: "针对含水、含油、低露点和精密用气场景，配置冷干机、吸干机、过滤器和排水系统。",
          image: productImages.refrigeratedDryer,
          highlights: ["降低管路积水和锈蚀", "匹配喷涂、电子、食品等用气要求", "稳定终端设备运行"],
        },
        {
          title: "节能改造与管网优化",
          subtitle: "ENERGY SAVING",
          description: "通过压力设定、变频联控、泄漏排查和铝合金节能管道改造，降低系统长期运行成本。",
          image: productImages.tank,
          highlights: ["压降与泄漏治理", "管网分区和储气缓冲", "运行数据复盘和节能建议"],
        },
        {
          title: "制氮制氢配套系统",
          subtitle: "PROCESS GAS",
          description: "围绕现场制氮、制氢和储存需求，提供压缩空气前处理、储气缓冲和安全联动配套。",
          image: productImages.adsorptionDryer,
          highlights: ["前处理空气品质保障", "储存与供气连续性", "适配电子、化工、热处理等工艺"],
        },
      ] satisfies ScopeItem[],
    },
    products: {
      id: "products",
      title: "产品中心",
      subtitle: "PRODUCTS",
      cta: { label: "查看全部产品", href: "#contact" },
      items: [
        {
          name: "螺杆空压机",
          description: "适用于连续供气场景，兼顾能效、排气稳定性与低维护成本，可按工况配置变频、永磁等节能方案。",
          icon: "energy",
          image: productImages.compressor,
        },
        {
          name: "冷干机",
          description: "通过制冷降温去除压缩空气水分，降低管路积水、阀件锈蚀与终端设备故障风险。",
          icon: "maintenance",
          image: productImages.refrigeratedDryer,
        },
        {
          name: "吸干机",
          description: "面向低露点和高品质用气需求，适配精密制造、喷涂、电子等对干燥度要求更高的场景。",
          icon: "air",
          image: productImages.adsorptionDryer,
        },
        {
          name: "储气罐",
          description: "用于稳压、缓冲与削峰，配合空压机组提升系统稳定性，保障持续可靠供气。",
          icon: "tank",
          image: productImages.tank,
        },
      ] satisfies ProductItem[],
    },
    partners: {
      id: "partners",
      title: "合作伙伴",
      subtitle: "OUR PARTNERS",
      items: partners,
    },
    contact: {
      id: "contact",
      title: "联系我们",
      subtitle: "CONTACT US",
      details: contacts({ phoneLabel: "手机", emailLabel: "邮箱", addressLabel: "地址", address: zhAddress }),
      qr: sharedQrImage,
      map: sharedMapImage,
    },
    footer: {
      company: {
        name: "安徽杰鑫机电",
        logo: brandLogo,
        description: "自 2010 年起专注压缩空气系统与节能机电服务，提供可靠设备、规范施工与及时响应。",
      },
      columns: buildFooterColumns(zhNavigation, [
        { label: "空压站解决方案", href: "#scope" },
        { label: "制氮系统解决方案", href: "#scope" },
        { label: "制氢系统解决方案", href: "#scope" },
        { label: "节能改造方案", href: "#scope" },
        { label: "更多方案", href: "#contact" },
      ]),
      contactTitle: "联系我们",
      copyright: "© 2010-2026 安徽杰鑫机电科技有限公司 版权所有",
      backToTopLabel: "回到顶部",
    },
  },
  en: {
    meta: {
      title: "Jiexin Electromechanical Technology | Energy-Saving Air System Solutions",
      description:
        "Jiexin Electromechanical Technology provides energy-saving air compressor station planning, equipment sales, installation, commissioning, and maintenance services.",
    },
    company: {
      name: "Jiexin Electromechanical Technology Co., Ltd.",
      englishName: "ENERGY-SAVING GAS",
      slogan: "Energy-saving electromechanical equipment and system solutions",
      summary:
        "Since 2010, Jiexin Electromechanical Technology has focused on energy-saving electromechanical equipment and compressed air systems. We provide air station planning, equipment selection, installation, commissioning, maintenance, and energy-saving retrofit services with reliable equipment, standardized execution, and responsive support.",
      phone: sharedCompany.phone,
      email: sharedCompany.email,
      address: enAddress,
    },
    navigation: enNavigation,
    hero: {
      eyebrow: "ENERGY-SAVING GAS",
      title: "Jiexin Electromechanical Technology",
      subtitle: "Energy-saving electromechanical equipment and system solutions",
      background: sharedHeroBackground,
      advantages: [
        { title: "High Efficiency", icon: "energy" },
        { title: "Reliable Operation", icon: "reliable" },
        { title: "Professional Service", icon: "service" },
      ] satisfies HeroAdvantage[],
    },
    about: {
      id: "about",
      title: "About Us",
      subtitle: "ABOUT US",
      body:
        "Since 2010, Jiexin Electromechanical Technology has focused on energy-saving electromechanical equipment and compressed air systems. We provide air station planning, equipment selection, installation, commissioning, maintenance, and energy-saving retrofit services with reliable equipment, standardized execution, and responsive support.",
      contacts: contacts({ phoneLabel: "Phone", emailLabel: "Email", addressLabel: "Address", address: enAddress }),
      cta: { label: "Learn More", href: "#scope" },
      image: sharedAboutImage,
      playLabel: "Play company video",
    },
    scope: {
      id: "scope",
      title: "Solutions",
      subtitle: "SOLUTIONS",
      description:
        "We build practical compressed-air solutions across generation, treatment, storage, distribution, and point-of-use management.",
      items: [
        {
          title: "Air Station Delivery",
          subtitle: "AIR STATION",
          description: "For new facilities, capacity expansion, and station upgrades, we coordinate compressors, receivers, air treatment, piping, and controls.",
          image: productImages.compressor,
          highlights: ["Station layout and equipment selection", "Installation, commissioning, and pressure stability", "Ongoing inspection and maintenance"],
        },
        {
          title: "Air Quality & Treatment",
          subtitle: "AIR TREATMENT",
          description: "For moisture, oil, low-dew-point, and precision-air requirements, we configure dryers, filters, drains, and treatment systems.",
          image: productImages.refrigeratedDryer,
          highlights: ["Reduce condensate and corrosion", "Match coating, electronics, food, and precision processes", "Protect downstream equipment uptime"],
        },
        {
          title: "Energy Retrofit & Piping",
          subtitle: "ENERGY SAVING",
          description: "We reduce long-term operating cost through pressure optimization, inverter control, leakage checks, and aluminum piping upgrades.",
          image: productImages.tank,
          highlights: ["Pressure-drop and leakage control", "Piping zones and receiver buffering", "Operation review and savings recommendations"],
        },
        {
          title: "Nitrogen & Hydrogen Support",
          subtitle: "PROCESS GAS",
          description: "For on-site nitrogen, hydrogen, and storage needs, we provide air pretreatment, buffer storage, and safety-linked support systems.",
          image: productImages.adsorptionDryer,
          highlights: ["Pretreatment air-quality assurance", "Storage and supply continuity", "Fit for electronics, chemical, and heat-treatment processes"],
        },
      ] satisfies ScopeItem[],
    },
    products: {
      id: "products",
      title: "Products",
      subtitle: "PRODUCTS",
      cta: { label: "View All Products", href: "#contact" },
      items: [
        {
          name: "Screw Air Compressor",
          description: "Built for continuous air supply with stable discharge and efficient operation. Variable-speed and energy-saving configurations can be matched to site conditions.",
          icon: "energy",
          image: productImages.compressor,
        },
        {
          name: "Refrigerated Dryer",
          description: "Removes moisture by cooling compressed air, reducing condensate, corrosion, and downstream equipment failure.",
          icon: "maintenance",
          image: productImages.refrigeratedDryer,
        },
        {
          name: "Adsorption Dryer",
          description: "Designed for low-dew-point air quality in precision manufacturing, coating, electronics, and other dry-air applications.",
          icon: "air",
          image: productImages.adsorptionDryer,
        },
        {
          name: "Air Receiver Tank",
          description: "Provides pressure stabilization, buffering, and peak-load support to improve system reliability and air supply continuity.",
          icon: "tank",
          image: productImages.tank,
        },
      ] satisfies ProductItem[],
    },
    partners: {
      id: "partners",
      title: "Partners",
      subtitle: "OUR PARTNERS",
      items: partners,
    },
    contact: {
      id: "contact",
      title: "Contact Us",
      subtitle: "CONTACT US",
      details: contacts({ phoneLabel: "Phone", emailLabel: "Email", addressLabel: "Address", address: enAddress }),
      qr: sharedQrImage,
      map: sharedMapImageEn,
    },
    footer: {
      company: {
        name: "Jiexin Electromechanical Technology",
        logo: brandLogo,
        description:
          "Focused on compressed air systems and energy-saving electromechanical service since 2010.",
      },
      columns: buildFooterColumns(enNavigation, [
        { label: "Air Station Solutions", href: "#scope" },
        { label: "Nitrogen Systems", href: "#scope" },
        { label: "Hydrogen Systems", href: "#scope" },
        { label: "Energy Retrofit", href: "#scope" },
        { label: "More Solutions", href: "#contact" },
      ]),
      contactTitle: "Contact Us",
      copyright: "© 2010-2026 Jiexin Electromechanical Technology Co., Ltd. All rights reserved.",
      backToTopLabel: "Back to top",
    },
  },
} satisfies Record<LocaleCode, HomeContent>;

export const siteMeta = homeContent[defaultLocale].meta;
