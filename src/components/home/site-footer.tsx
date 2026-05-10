import Image from "next/image";

import { BackToTop } from "@/components/home/back-to-top";
import { HomeIcon } from "@/components/home/icon";
import type { ContactItem, FooterColumn, ImageAsset } from "@/types/home";

export function SiteFooter({
  company,
  columns,
  contactTitle,
  contacts,
  copyright,
  backToTopLabel,
}: {
  company: { name: string; logo: ImageAsset; description: string };
  columns: FooterColumn[];
  contactTitle: string;
  contacts: ContactItem[];
  copyright: string;
  backToTopLabel: string;
}) {
  return (
    <footer className="relative bg-[#061A31] text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.9fr_1.1fr] lg:px-8">
        <div>
          <a href="#home" className="flex items-center gap-3" aria-label="返回首页">
            <span className="relative block h-14 w-24">
              <Image src={company.logo.src} alt={company.logo.alt} fill sizes="96px" className="object-contain brightness-125" />
            </span>
            <span className="max-w-[13rem] text-lg font-bold leading-tight text-white">{company.name}</span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">{company.description}</p>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="text-lg font-bold text-white">{column.title}</h2>
            <ul className="mt-5 grid gap-3 text-sm text-slate-300">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-lg font-bold text-white">{contactTitle}</h2>
          <dl className="mt-5 grid gap-3 text-sm text-slate-300">
            {contacts.map((item) => (
              <div key={item.label} className="flex gap-3">
                <dt className="flex w-20 shrink-0 items-start gap-2 whitespace-nowrap font-semibold text-white">
                  <HomeIcon name={item.icon} className="mt-0.5 size-4 text-[#24B3EC]" />
                  {item.label}：
                </dt>
                <dd className="min-w-0 flex-1 leading-6">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex min-h-14 w-full max-w-7xl items-center justify-center px-4 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
          {copyright}
        </div>
      </div>
      <BackToTop label={backToTopLabel} />
    </footer>
  );
}
