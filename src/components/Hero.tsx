"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] h-[40%] w-[40%] rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[10%] h-[35%] w-[35%] rounded-full bg-accent/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col-reverse items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Left: Text */}
          <div className="flex-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-primary-dark">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {t.hero.greeting}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
            >
              {t.hero.name}
              <br />
              <span className="text-gradient">{t.hero.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-slate-500"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 active:scale-95 glow-primary"
              >
                {t.hero.cta}
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-8 py-4 text-lg font-medium text-slate-600 transition-all hover:border-primary hover:text-primary"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-20 grid grid-cols-2 gap-8 border-t border-slate-100 pt-12 sm:grid-cols-4"
            >
              {t.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-slate-900 tracking-tighter">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="h-72 w-72 overflow-hidden rounded-3xl border-4 border-white shadow-2xl shadow-green-100 lg:h-80 lg:w-80">
                <img
                  src="/images/2.jpg"
                  alt="林季謙 George Lin"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-3xl border-2 border-primary/20 lg:h-80 lg:w-80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
