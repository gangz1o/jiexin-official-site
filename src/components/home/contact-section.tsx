import Image from "next/image";

import { HomeIcon } from "@/components/home/icon";
import { PhoneCallLink } from "@/components/home/phone-call-link";
import { Reveal } from "@/components/home/reveal";
import { SectionHeading } from "@/components/home/section-heading";
import type { ContactItem, ImageAsset, MapAsset } from "@/types/home";

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
  map: MapAsset;
}) {
  return (
    <section id={id} className="bg-[#EEF5FA] py-16 md:py-20" aria-labelledby={`${id}-title`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={title} subtitle={subtitle} headingId={`${id}-title`} />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(300px,0.82fr)_minmax(0,1.35fr)] lg:items-stretch">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_220px] lg:grid-cols-1">
            <Reveal className="flex items-center">
              <dl className="grid gap-6">
                {details.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <dt className="grid size-11 shrink-0 place-items-center rounded-full bg-[#0A5BA8] text-white">
                      <HomeIcon name={item.icon} className="size-5" />
                      <span className="sr-only">{item.label}</span>
                    </dt>
                    <dd>
                      <p className="text-sm font-bold text-slate-900">{item.label}</p>
                      {item.icon === "phone" ? (
                        <PhoneCallLink phone={item.value} className="mt-1 block max-w-xs text-sm leading-6 text-slate-700">
                          {item.value}
                        </PhoneCallLink>
                      ) : (
                        <p className="mt-1 max-w-xs text-sm leading-6 text-slate-700">{item.value}</p>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.08} className="flex items-center">
              <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-sm lg:mx-0">
                <Image src={qr.src} alt={qr.alt} fill sizes="220px" loading="eager" className="object-contain p-3" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="min-h-[300px] lg:min-h-[460px]">
            <a
              href={map.openHref}
              target="_blank"
              rel="noreferrer"
              aria-label={map.alt}
              className="group relative block h-full min-h-[300px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm lg:min-h-[460px]"
            >
              <Image
                src={map.preview.src}
                alt={map.preview.alt}
                fill
                sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"
                loading="eager"
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm transition group-hover:bg-white">
                {map.openLabel}
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
