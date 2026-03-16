"use client";

import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn className="text-center">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mb-12 text-lg text-slate-400">{t.contact.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-3xl border border-slate-800 bg-surface/30 p-8 backdrop-blur-sm sm:p-12">
            <div className="grid gap-6 sm:grid-cols-3">
              {/* Email */}
              <a
                href={`mailto:${t.contact.email}`}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-dark/50 p-6 transition-all hover:border-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-dark">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-400 group-hover:text-primary">Email</span>
                <span className="text-xs text-slate-500 break-all text-center">{t.contact.email}</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${t.contact.phone}`}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-dark/50 p-6 transition-all hover:border-accent"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-400 group-hover:text-accent">Phone</span>
                <span className="text-xs text-slate-500">{t.contact.phone}</span>
              </a>

              {/* GitHub */}
              <a
                href={t.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-dark/50 p-6 transition-all hover:border-slate-500"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-all group-hover:bg-slate-300 group-hover:text-dark">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200">GitHub</span>
                <span className="text-xs text-slate-500">redseye</span>
              </a>
            </div>

            <div className="mt-8 text-center">
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-dark transition-all hover:scale-105 active:scale-95 glow-primary"
              >
                {t.contact.cta}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
