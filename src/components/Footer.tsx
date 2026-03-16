"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {t.footer.copyright}
        </p>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            {t.footer.status}
          </span>
        </div>
      </div>
    </footer>
  );
}
