import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: t("خدماتنا", "Services") },
    { href: "#products", label: t("منتجاتنا", "Products") },
    { href: "#portfolio", label: t("أعمالنا", "Portfolio") },
    { href: "#about", label: t("من نحن", "About Us") },
    { href: "#quote", label: t("عرض سعر", "Get Quote") },
    { href: "#contact", label: t("تواصل معنا", "Contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-black text-primary-foreground text-lg group-hover:glow-red transition-all duration-300">
                W
              </div>
              <span className="text-xl font-black text-gradient">Wild Power</span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}

              {/* Language toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300 mx-2"
                aria-label="Switch language"
              >
                <Globe className="w-4 h-4" />
                <span>{lang === "ar" ? "EN" : "عربي"}</span>
              </button>

              <a href="#quote" className={`${lang === "ar" ? "mr-2" : "ml-2"} btn-primary !px-6 !py-2.5 !text-sm !rounded-lg`}>
                {t("طلب عرض سعر", "Request Quote")}
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleLang}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors text-sm font-bold text-muted-foreground"
                aria-label="Switch language"
              >
                {lang === "ar" ? "EN" : "ع"}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors"
                aria-label={t("القائمة", "Menu")}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <div className="relative pt-24 px-6 pb-8">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: lang === "ar" ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-semibold py-3 px-4 rounded-xl hover:bg-secondary transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#quote"
                  initial={{ opacity: 0, x: lang === "ar" ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary mt-4 text-center"
                >
                  {t("طلب عرض سعر", "Request Quote")}
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
