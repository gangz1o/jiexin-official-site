"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/home/reveal";
import { SectionHeading } from "@/components/home/section-heading";
import type { ScopeItem } from "@/types/home";

export function ScopeSection({
  id,
  title,
  subtitle,
  description,
  items,
}: {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: ScopeItem[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className="bg-[#061A31] py-20 text-white md:py-24" aria-labelledby={`${id}-title`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title={title}
            subtitle={subtitle}
            description={description}
            headingId={`${id}-title`}
            tone="dark"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <motion.div whileHover={reduceMotion ? undefined : { y: -8 }} transition={{ duration: 0.25 }}>
                <Card className="group overflow-hidden rounded-lg border border-[#1D77AC] bg-[#08213D] py-0 text-white ring-0">
                  <CardContent className="grid gap-0 p-0 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative min-h-56 overflow-hidden bg-slate-900">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(min-width: 1024px) 280px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061A31]/50 to-transparent" />
                    </div>
                    <div className="px-6 py-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#62D4FF]">
                        {item.subtitle}
                      </p>
                      <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                      <ul className="mt-5 grid gap-2 text-sm text-slate-100">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#24B3EC]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
