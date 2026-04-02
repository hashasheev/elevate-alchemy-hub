"use client";

import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLng = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(nextLng);
  };

  return (
    <div className="fixed top-6 right-6 z-50 mix-blend-difference">
      <button
        onClick={toggleLanguage}
        className={cn(
          "text-[10px] font-bold tracking-[0.3em] uppercase text-white hover:opacity-70 transition-opacity flex items-center gap-2"
        )}
      >
        <span className={cn(i18n.language === "pt" ? "opacity-100" : "opacity-40")}>PT</span>
        <span className="opacity-20 text-[8px]">/</span>
        <span className={cn(i18n.language === "en" ? "opacity-100" : "opacity-40")}>EN</span>
      </button>
    </div>
  );
};

export default LanguageSelector;
