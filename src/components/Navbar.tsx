"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { lang, t, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-lg border-b border-slate-100 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-xl font-black tracking-tight">
          <span className="text-gradient">GL</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-500 transition-all hover:border-primary hover:text-primary"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggle}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-500"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-slate-600" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 w-6 bg-slate-600" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-slate-600" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 flex flex-col bg-white px-8 pt-32 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-bold text-slate-800"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
