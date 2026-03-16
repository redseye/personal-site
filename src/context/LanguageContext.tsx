"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { zh } from "@/data/zh";
import { en } from "@/data/en";
import type { SiteContent } from "@/data/types";

type Lang = "zh" | "en";

interface LanguageContextType {
  lang: Lang;
  t: SiteContent;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "zh",
  t: zh,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");
  const t = lang === "zh" ? zh : en;
  const toggle = () => setLang(lang === "zh" ? "en" : "zh");

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
