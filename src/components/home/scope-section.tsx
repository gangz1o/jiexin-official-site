"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { HomeIcon } from "@/components/home/icon";
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <motion.div whileHover={reduceMotion ? undefined : { y: -8 }} transition={{ duration: 0.25 }}>
                <Card className="rounded-lg border border-[#1D77AC] bg-[#08213D] py-0 text-white ring-0">
                  <CardContent className="grid min-h-44 place-items-center px-6 py-8 text-center">
                    <span className="grid size-16 place-items-center text-[#24B3EC]">
                      <HomeIcon name={item.icon} className="size-14" strokeWidth={1.6} />
                    </span>
                    <div className="mt-5">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                        {item.subtitle}
                      </p>
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
