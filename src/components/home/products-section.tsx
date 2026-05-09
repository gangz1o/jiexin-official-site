"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { HomeIcon } from "@/components/home/icon";
import { Reveal } from "@/components/home/reveal";
import { SectionHeading } from "@/components/home/section-heading";
import type { ProductItem } from "@/types/home";
import { cn } from "@/lib/utils";

export function ProductsSection({
  id,
  title,
  subtitle,
  cta,
  items,
}: {
  id: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  items: ProductItem[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className="bg-[#EEF5FA] py-20 md:py-24" aria-labelledby={`${id}-title`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={title} subtitle={subtitle} headingId={`${id}-title`} />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <motion.div whileHover={reduceMotion ? undefined : { y: -8 }} transition={{ duration: 0.25 }}>
                <Card className="h-full rounded-lg border border-slate-200 bg-white py-0 ring-0 shadow-sm">
                  <CardContent className="flex h-full flex-col px-0 pb-7 pt-0">
                    <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-[#F6FAFD]">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(min-width: 1024px) 280px, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-5 text-left">
                      <span className="mx-auto mt-5 grid size-10 place-items-center rounded-full bg-[#E8F1FA] text-[#0A5BA8]">
                        <HomeIcon name={item.icon} className="size-5" />
                      </span>
                      <h3 className="mt-4 text-center text-xl font-bold text-slate-950">{item.name}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={0.12}>
          <a
            href={cta.href}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 rounded-lg border-[#0A5BA8] bg-white px-6 font-bold text-[#0A5BA8] hover:bg-[#E8F1FA]",
            )}
          >
            {cta.label}
            <HomeIcon name="arrowRight" className="ml-2 size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
