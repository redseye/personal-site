"use client";

import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-16">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-primary">
            {t.experience.label}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {t.experience.title}
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-green-200 hidden sm:block" />

          <div className="space-y-10">
            {t.experience.jobs.map((job, i) => (
              <FadeIn key={`${job.company}-${job.period}`} delay={i * 0.1}>
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center pt-1.5">
                    <div className="h-[10px] w-[10px] rounded-full border-2 border-primary bg-white shrink-0 z-10" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-green-200">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{job.company}</h3>
                        <p className="text-primary-dark font-medium">{job.role}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full border border-green-200 bg-green-50 px-3 py-0.5 text-xs font-medium text-primary-dark">
                          {job.type}
                        </span>
                        <span className="text-sm font-mono text-slate-400">{job.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
