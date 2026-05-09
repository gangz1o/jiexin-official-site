import Image from "next/image";

import { Reveal } from "@/components/home/reveal";
import { SectionHeading } from "@/components/home/section-heading";
import type { PartnerItem } from "@/types/home";
import { cn } from "@/lib/utils";

export function PartnersSection({
  id,
  title,
  subtitle,
  items,
}: {
  id: string;
  title: string;
  subtitle: string;
  items: PartnerItem[];
}) {
  const firstRow = items.filter((_, index) => index % 2 === 0);
  const secondRow = items.filter((_, index) => index % 2 === 1);

  return (
    <section id={id} className="bg-white py-16 md:py-24" aria-labelledby={`${id}-title`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={title} subtitle={subtitle} headingId={`${id}-title`} />
        </Reveal>
      </div>

      <Reveal className="mt-10 space-y-4 overflow-hidden">
        <PartnerMarquee items={firstRow} direction="left" />
        <PartnerMarquee items={secondRow} direction="right" />
      </Reveal>
    </section>
  );
}

function PartnerMarquee({
  items,
  direction,
}: {
  items: PartnerItem[];
  direction: "left" | "right";
}) {
  const loopItems = [...items, ...items];

  return (
    <div className="partner-marquee overflow-hidden" aria-label="合作伙伴滚动列表">
      <div
        className={cn(
          "partner-marquee-track flex w-max gap-4 px-4 sm:gap-5",
          direction === "right" && "partner-marquee-track-reverse",
        )}
      >
        {loopItems.map((item, index) => (
          <PartnerCard key={`${direction}-${item.name}-${index}`} item={item} duplicate={index >= items.length} />
        ))}
      </div>
    </div>
  );
}

function PartnerCard({ item, duplicate }: { item: PartnerItem; duplicate: boolean }) {
  return (
    <div
      className="group flex h-24 w-[190px] shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:h-28 sm:w-[240px] lg:w-[270px]"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {item.logo ? (
        <Image
          src={item.logo.src}
          alt={duplicate ? "" : item.logo.alt}
          width={190}
          height={76}
          className="h-auto max-h-14 w-full object-contain sm:max-h-16"
        />
      ) : (
        <div className="flex w-full items-center justify-center gap-3">
          <span
            className="block h-9 w-1.5 rounded-full"
            style={{ backgroundColor: item.accentColor ?? "#0A5BA8" }}
            aria-hidden="true"
          />
          <div className="min-w-0">
            <p
              className="truncate text-2xl font-black leading-none tracking-normal sm:text-3xl"
              style={{ color: item.color ?? "#0F2F54" }}
            >
              {item.displayName ?? item.name}
            </p>
            {item.subtitle ? (
              <p className="mt-1 truncate text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                {item.subtitle}
              </p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
