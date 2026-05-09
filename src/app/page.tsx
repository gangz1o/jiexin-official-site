import type { Metadata } from "next";

import { LocalizedHomePage } from "@/components/home/localized-home-page";
import { defaultLocale, homeContent } from "@/config/home";
import type { LocaleCode } from "@/types/home";

type HomeSearchParams = Promise<{
  lang?: string | string[];
}>;

function normalizeLocale(value: string | string[] | undefined): LocaleCode {
  const locale = Array.isArray(value) ? value[0] : value;
  return locale === "en" || locale === "zh" ? locale : defaultLocale;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: HomeSearchParams;
}): Promise<Metadata> {
  const locale = normalizeLocale((await searchParams).lang);
  const meta = homeContent[locale].meta;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
    },
  };
}

export default async function Home({ searchParams }: { searchParams: HomeSearchParams }) {
  const locale = normalizeLocale((await searchParams).lang);

  return <LocalizedHomePage initialLocale={locale} />;
}
