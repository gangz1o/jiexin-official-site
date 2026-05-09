import Image from "next/image";
import { Play } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { HomeIcon } from "@/components/home/icon";
import { Reveal } from "@/components/home/reveal";
import { SectionHeading } from "@/components/home/section-heading";
import type { ContactItem, ImageAsset } from "@/types/home";
import { cn } from "@/lib/utils";

export function AboutSection({
  id,
  title,
  subtitle,
  body,
  contacts,
  cta,
  image,
  playLabel,
}: {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  contacts: ContactItem[];
  cta: { label: string; href: string };
  image: ImageAsset;
  playLabel: string;
}) {
  return (
    <section id={id} className="bg-white py-20 md:py-28" aria-labelledby={`${id}-title`}>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Reveal>
          <SectionHeading title={title} subtitle={subtitle} headingId={`${id}-title`} align="left" />
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700">{body}</p>

          <dl className="mt-8 grid gap-4">
            {contacts.map((item) => (
              <div key={item.label} className="flex gap-4 text-sm leading-7 text-slate-700">
                <dt className="flex min-w-16 items-center gap-2 font-semibold text-slate-900">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#E8F1FA] text-[#0A5BA8]">
                    <HomeIcon name={item.icon} className="size-4" />
                  </span>
                  {item.label}
                </dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href={cta.href}
            className={cn(
              buttonVariants(),
              "mt-8 h-11 rounded-lg bg-[#0A5BA8] px-6 text-white hover:bg-[#08467F]",
            )}
          >
            {cta.label}
            <HomeIcon name="arrowRight" className="ml-2 size-4" />
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-[0_20px_55px_rgba(15,40,70,0.16)]">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
            <button
              type="button"
              aria-label={playLabel}
              className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/65 bg-[#06172B]/72 text-white shadow-xl transition-transform hover:scale-105"
            >
              <Play className="ml-1 size-9 fill-white" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
