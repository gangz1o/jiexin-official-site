"use client";

import Image from "next/image";
import { Languages, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { ImageAsset, LanguageOption, LocaleCode, NavItem } from "@/types/home";
import { cn } from "@/lib/utils";

export function SiteHeader({
  logo,
  navItems,
  phone,
  languages,
  activeLocale,
  onLocaleChange,
}: {
  logo: ImageAsset;
  navItems: NavItem[];
  phone: string;
  languages: LanguageOption[];
  activeLocale: LocaleCode;
  onLocaleChange: (locale: LocaleCode) => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isScrolled
          ? "border-slate-200 bg-white shadow-sm"
          : "border-white/40 bg-white/90 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="relative h-14 w-40 shrink-0 md:w-48" aria-label={activeLocale === "zh" ? "返回首页" : "Back to home"}>
          <Image src={logo.src} alt={logo.alt} fill sizes="192px" priority className="object-contain" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={activeLocale === "zh" ? "主导航" : "Main navigation"}>
          {navItems.map((item) => (
            <a
              key={`${item.label}-${item.href}`}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-[#0A5BA8]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0A5BA8]"
          >
            <span className="grid size-7 place-items-center rounded-full bg-[#0A5BA8] text-white">
              <Phone className="size-4" aria-hidden="true" />
            </span>
            {phone}
          </a>
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-700" aria-label={activeLocale === "zh" ? "语言切换" : "Language switcher"}>
            <Languages className="size-4 text-[#0A5BA8]" aria-hidden="true" />
            {languages.map((language, index) => (
              <span key={language.code} className="flex items-center gap-3">
                <button
                  type="button"
                  className={cn(
                    "font-semibold transition-colors hover:text-[#0A5BA8]",
                    activeLocale === language.code ? "text-[#0A5BA8]" : "text-slate-700",
                  )}
                  aria-pressed={activeLocale === language.code}
                  onClick={() => onLocaleChange(language.code)}
                >
                  {language.label}
                </button>
                {index < languages.length - 1 ? <span className="text-slate-300">|</span> : null}
              </span>
            ))}
          </div>
        </div>

        <Button
          type="button"
          size="icon-lg"
          variant="ghost"
          className="lg:hidden"
          aria-label={isOpen ? (activeLocale === "zh" ? "关闭导航菜单" : "Close menu") : activeLocale === "zh" ? "打开导航菜单" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </Button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-slate-100 bg-white transition-[max-height,opacity] duration-300 lg:hidden",
          isOpen ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4" aria-label={activeLocale === "zh" ? "移动端导航" : "Mobile navigation"}>
          {navItems.map((item) => (
            <a
              key={`${item.label}-${item.href}`}
              href={item.href}
              className="rounded-lg px-3 py-3 text-base font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0A5BA8]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${phone}`}
            className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-3 font-bold text-[#0A5BA8]"
          >
            <Phone className="size-4" aria-hidden="true" />
            {phone}
          </a>
          <div className="mt-2 flex items-center gap-2 px-3" aria-label={activeLocale === "zh" ? "语言切换" : "Language switcher"}>
            {languages.map((language) => (
              <Button
                key={language.code}
                type="button"
                size="sm"
                variant={activeLocale === language.code ? "default" : "outline"}
                className={cn(activeLocale === language.code && "bg-[#0A5BA8] text-white hover:bg-[#08467F]")}
                onClick={() => {
                  onLocaleChange(language.code);
                  setIsOpen(false);
                }}
              >
                {language.label}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
