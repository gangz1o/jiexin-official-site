import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { PartnersSection } from "@/components/home/partners-section";
import { ProductsSection } from "@/components/home/products-section";
import { ScopeSection } from "@/components/home/scope-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import type { CompanyProfile, HomeContent, ImageAsset, LanguageOption, LocaleCode, NavItem } from "@/types/home";

export function HomePage({
  logo,
  navigation,
  company,
  languages,
  activeLocale,
  onLocaleChange,
  hero,
  about,
  scope,
  products,
  partners,
  contact,
  footer,
}: {
  logo: ImageAsset;
  navigation: NavItem[];
  company: CompanyProfile;
  languages: LanguageOption[];
  activeLocale: LocaleCode;
  onLocaleChange: (locale: LocaleCode) => void;
  hero: HomeContent["hero"];
  about: HomeContent["about"];
  scope: HomeContent["scope"];
  products: HomeContent["products"];
  partners: HomeContent["partners"];
  contact: HomeContent["contact"];
  footer: HomeContent["footer"];
}) {
  return (
    <>
      <SiteHeader
        logo={logo}
        companyName={footer.company.name}
        navItems={navigation}
        phone={company.phone}
        languages={languages}
        activeLocale={activeLocale}
        onLocaleChange={onLocaleChange}
      />
      <main>
        <HeroSection {...hero} />
        <AboutSection {...about} />
        <ProductsSection {...products} />
        <ScopeSection {...scope} />
        <PartnersSection {...partners} />
        <ContactSection {...contact} />
      </main>
      <SiteFooter
        company={footer.company}
        columns={footer.columns}
        contactTitle={footer.contactTitle}
        contacts={contact.details}
        copyright={footer.copyright}
        backToTopLabel={footer.backToTopLabel}
      />
    </>
  );
}
