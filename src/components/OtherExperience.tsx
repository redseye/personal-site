"use client";

import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";

export default function OtherExperience() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 bg-green-50/30">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-16">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-primary">
            {t.other.label}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {t.other.title}
          </h2>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2">
          {t.other.items.map((item, i) => (
            <FadeIn
              key={item.title}
              delay={i * 0.1}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <span className="text-sm font-mono text-slate-400">{item.period}</span>
              </div>
              <ul className="space-y-2">
                {item.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
