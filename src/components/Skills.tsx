"use client";

import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";
import { motion } from "framer-motion";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-24 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-primary">
            {t.skills.label}
          </span>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            {t.skills.title}
          </h2>
          <p className="text-slate-400">{t.skills.subtitle}</p>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2">
          {t.skills.categories.map((cat, ci) => (
            <FadeIn
              key={cat.name}
              delay={ci * 0.1}
              className="rounded-2xl border border-slate-800 bg-dark/50 p-8 backdrop-blur-sm"
            >
              <h3 className="mb-6 text-lg font-bold text-white">{cat.name}</h3>
              <div className="space-y-4">
                {cat.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
