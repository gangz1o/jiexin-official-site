export type IconName =
  | "air"
  | "arrowRight"
  | "commission"
  | "design"
  | "email"
  | "energy"
  | "install"
  | "location"
  | "maintenance"
  | "phone"
  | "reliable"
  | "service"
  | "tank";

export type NavItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
};

export type MapAsset = {
  preview: ImageAsset;
  alt: string;
  openHref: string;
  openLabel: string;
};

export type HeroAdvantage = {
  title: string;
  icon: IconName;
};

export type ContactItem = {
  label: string;
  value: string;
  icon: Extract<IconName, "phone" | "email" | "location">;
};

export type ScopeItem = {
  title: string;
  subtitle: string;
  icon: Extract<IconName, "design" | "install" | "commission" | "maintenance">;
};

export type ProductItem = {
  name: string;
  description: string;
  image: ImageAsset;
  icon: Extract<IconName, "air" | "energy" | "maintenance" | "tank">;
};

export type PartnerItem = {
  name: string;
  logo?: ImageAsset;
  displayName?: string;
  subtitle?: string;
  color?: string;
  accentColor?: string;
};

export type FooterColumn = {
  title: string;
  links: NavItem[];
};

export type LocaleCode = "zh" | "en";

export type LanguageOption = {
  code: LocaleCode;
  label: string;
};

export type SiteMeta = {
  title: string;
  description: string;
};

export type CompanyProfile = {
  name: string;
  englishName: string;
  slogan: string;
  summary: string;
  phone: string;
  email: string;
  address: string;
};

export type HomeContent = {
  meta: SiteMeta;
  company: CompanyProfile;
  navigation: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    background: ImageAsset;
    advantages: HeroAdvantage[];
  };
  about: {
    id: string;
    title: string;
    subtitle: string;
    body: string;
    contacts: ContactItem[];
    cta: NavItem;
    image: ImageAsset;
    playLabel: string;
  };
  scope: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    items: ScopeItem[];
  };
  products: {
    id: string;
    title: string;
    subtitle: string;
    cta: NavItem;
    items: ProductItem[];
  };
  partners: {
    id: string;
    title: string;
    subtitle: string;
    items: PartnerItem[];
  };
  contact: {
    id: string;
    title: string;
    subtitle: string;
    details: ContactItem[];
    qr: ImageAsset;
    map: MapAsset;
  };
  footer: {
    company: {
      name: string;
      logo: ImageAsset;
      description: string;
    };
    columns: FooterColumn[];
    contactTitle: string;
    copyright: string;
    backToTopLabel: string;
  };
};
