import Image from "next/image";

import { HomeIcon } from "@/components/home/icon";
import { Reveal } from "@/components/home/reveal";
import { SectionHeading } from "@/components/home/section-heading";
import type { ContactItem, ImageAsset } from "@/types/home";

export function ContactSection({
  id,
  title,
  subtitle,
  details,
  qr,
  map,
}: {
  id: string;
  title: string;
  subtitle: string;
  details: ContactItem[];
  qr: ImageAsset;
  map: ImageAsset;
}) {
  return (
    <section id={id} className="bg-[#EEF5FA] py-16 md:py-20" aria-labelledby={`${id}-title`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={title} subtitle={subtitle} headingId={`${id}-title`} />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_0.8fr_1.25fr] lg:items-center">
          <Reveal>
            <dl className="grid gap-6">
              {details.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <dt className="grid size-11 shrink-0 place-items-center rounded-full bg-[#0A5BA8] text-white">
                    <HomeIcon name={item.icon} className="size-5" />
                    <span className="sr-only">{item.label}</span>
                  </dt>
                  <dd>
                    <p className="text-sm font-bold text-slate-900">{item.label}</p>
                    <p className="mt-1 max-w-xs text-sm leading-6 text-slate-700">{item.value}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <Image src={qr.src} alt={qr.alt} fill sizes="260px" className="object-contain p-4" />
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <Image src={map.src} alt={map.alt} fill sizes="(min-width: 1024px) 430px, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
