"use client";

import Image from "next/image";
import { Languages, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { PhoneCallLink } from "@/components/home/phone-call-link";
import type { ImageAsset, LanguageOption, LocaleCode, NavItem } from "@/types/home";
import { cn } from "@/lib/utils";

export function SiteHeader({
  logo,
  companyName,
  navItems,
  phone,
  languages,
  activeLocale,
  onLocaleChange,
}: {
  logo: ImageAsset;
  companyName: string;
  navItems: NavItem[];
  phone: string;
  languages: LanguageOption[];
  activeLocale: LocaleCode;
  onLocaleChange: (locale: LocaleCode) => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "#home");
  const activeNavIndex = navItems.findLastIndex((item) => item.href === activeHref);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));

    const handleScroll = () => {
      const viewportProbe = Math.min(window.innerHeight * 0.45, 420);
      const currentId =
        sectionIds.find((id) => {
          const section = document.getElementById(id);
          if (!section) {
            return false;
          }

          const rect = section.getBoundingClientRect();
          return rect.top <= viewportProbe && rect.bottom > viewportProbe;
        }) ?? sectionIds[0];

      if (currentId) {
        setActiveHref(`#${currentId}`);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isScrolled
          ? "border-slate-200 bg-white shadow-sm"
          : "border-white/40 bg-white/90 backdrop-blur-md",
      )}
    >
      <div className="grid h-20 w-full grid-cols-[1fr_auto] items-center px-4 sm:px-6 lg:grid-cols-[minmax(260px,1fr)_auto_minmax(260px,1fr)] lg:px-12 xl:px-16">
        <a href="#home" className="flex shrink-0 items-center gap-3" aria-label={activeLocale === "zh" ? "返回首页" : "Back to home"}>
          <span className="relative h-11 w-20 md:h-[52px] md:w-[90px]">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="112px"
              preload
              className="object-contain"
            />
          </span>
          <span className="hidden text-base font-semibold leading-tight text-slate-900 sm:block md:text-2xl md:font-bold md:text-slate-800">
            {companyName}
          </span>
        </a>

        <nav className="hidden items-center justify-self-center gap-5 xl:gap-7 lg:flex" aria-label={activeLocale === "zh" ? "主导航" : "Main navigation"}>
          {navItems.map((item, index) => (
            <a
              key={`${item.label}-${item.href}`}
              href={item.href}
              aria-current={activeNavIndex === index ? "page" : undefined}
              className={cn(
                "relative py-2 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-[#0A5BA8] after:transition-transform hover:text-[#0A5BA8]",
                activeNavIndex === index
                  ? "text-[#0A5BA8] after:scale-x-100"
                  : "text-slate-700",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-self-end gap-5 lg:flex">
          <PhoneCallLink
            phone={phone}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0A5BA8]"
          >
            <span className="grid size-7 place-items-center rounded-full bg-[#0A5BA8] text-white">
              <Phone className="size-4" aria-hidden="true" />
            </span>
            {phone}
          </PhoneCallLink>
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
          className="justify-self-end lg:hidden"
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
          {navItems.map((item, index) => (
            <a
              key={`${item.label}-${item.href}`}
              href={item.href}
              aria-current={activeNavIndex === index ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-semibold transition-colors hover:bg-slate-100 hover:text-[#0A5BA8]",
                activeNavIndex === index
                  ? "bg-[#E8F2FB] text-[#0A5BA8]"
                  : "text-slate-700",
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <PhoneCallLink
            phone={phone}
            onDial={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-3 font-bold text-[#0A5BA8]"
          >
            <Phone className="size-4" aria-hidden="true" />
            {phone}
          </PhoneCallLink>
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
