"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import type { HeroAdvantage, ImageAsset } from "@/types/home";
import { HomeIcon } from "@/components/home/icon";

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  background,
  advantages,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  background: ImageAsset;
  advantages: HeroAdvantage[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const y = useMotionValue(0);

  useEffect(() => {
    if (reduceMotion) return;

    const updateOffset = () => y.set(Math.min(window.scrollY * 0.14, 90));
    updateOffset();
    window.addEventListener("scroll", updateOffset, { passive: true });

    return () => window.removeEventListener("scroll", updateOffset);
  }, [reduceMotion, y]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[760px] overflow-hidden bg-[#06172B] pt-20 text-white md:min-h-screen"
      aria-labelledby="hero-title"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={background.src}
          alt={background.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#06172B]/72" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[680px] w-full max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl"
          initial={reduceMotion ? false : { opacity: 0, y: 34 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#24B3EC]">{eyebrow}</p>
          <h1
            id="hero-title"
            className="mt-6 max-w-[12em] text-[2.15rem] font-bold leading-tight tracking-normal sm:text-5xl lg:max-w-none lg:text-7xl"
          >
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-2xl">{subtitle}</p>
        </motion.div>

        <motion.ul
          className="mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "show"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
          }}
        >
          {advantages.map((item) => (
            <motion.li
              key={item.title}
              className="flex items-center gap-4 border border-white/25 bg-[#092744]/70 p-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span className="grid size-12 place-items-center rounded-full border border-[#24B3EC] text-[#24B3EC]">
                <HomeIcon name={item.icon} className="size-6" />
              </span>
              <span className="text-base font-semibold">{item.title}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
