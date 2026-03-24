"use client";

import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-16">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-primary">
            {t.about.label}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {t.about.title}
          </h2>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          {/* Photo */}
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-lg shadow-green-50">
              <img
                src="/images/1.jpg"
                alt="林季謙"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn delay={0.15}>
              <div className="space-y-5">
                {t.about.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {t.about.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-2xl border border-slate-100 bg-green-50/50 p-5 text-center"
                  >
                    <div className="text-2xl font-black text-slate-900">{h.value}</div>
                    <div className="mt-1 text-xs font-medium text-slate-500">{h.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
