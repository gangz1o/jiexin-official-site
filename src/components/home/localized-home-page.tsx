"use client";

import { useEffect, useMemo, useState } from "react";

import { HomePage } from "@/components/home/home-page";
import { defaultLocale, homeContent, languageOptions } from "@/config/home";
import type { LocaleCode } from "@/types/home";

export function LocalizedHomePage({ initialLocale = defaultLocale }: { initialLocale?: LocaleCode }) {
  const [locale, setLocale] = useState<LocaleCode>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const content = useMemo(() => homeContent[locale], [locale]);

  const handleLocaleChange = (nextLocale: LocaleCode) => {
    setLocale(nextLocale);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLocale);
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };

  return (
    <HomePage
      logo={content.footer.company.logo}
      navigation={content.navigation}
      company={content.company}
      languages={languageOptions}
      activeLocale={locale}
      onLocaleChange={handleLocaleChange}
      hero={content.hero}
      about={content.about}
      scope={content.scope}
      products={content.products}
      partners={content.partners}
      contact={content.contact}
      footer={content.footer}
    />
  );
}
