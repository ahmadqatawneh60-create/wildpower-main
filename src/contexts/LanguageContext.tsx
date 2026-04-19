import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Lang = "ar" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (ar: string, en: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ar");

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "ar" ? "en" : "ar";
      document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  const t = useCallback((ar: string, en: string) => (lang === "ar" ? ar : en), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isRtl: lang === "ar" }}>
      {children}
    </LanguageContext.Provider>
  );
};
