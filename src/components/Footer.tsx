import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/30 bg-gradient-dark">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-black text-primary-foreground text-lg">W</div>
              <span className="text-xl font-black text-gradient">Wild Power</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {t("شركة متخصصة في الحلول الأمنية والتقنية المتكاملة. نقدم أحدث الأنظمة بأعلى معايير الجودة.", "A company specialized in integrated security and technology solutions. We provide the latest systems with the highest quality standards.")}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-5">{t("روابط سريعة", "Quick Links")}</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: t("خدماتنا", "Services"), href: "#services" },
                { label: t("منتجاتنا", "Products"), href: "#products" },
                { label: t("أعمالنا", "Portfolio"), href: "#portfolio" },
                { label: t("من نحن", "About"), href: "#about" },
                { label: t("عرض سعر", "Quote"), href: "#quote" },
                { label: t("تواصل معنا", "Contact"), href: "#contact" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">{link.label}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base mb-5">{t("تواصل معنا", "Contact Us")}</h4>
            <div className="space-y-3">
              <a href="tel:+962797104488" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary/70" />
                <span dir="ltr">0797104488</span>
              </a>
              <a href="mailto:sadamjafreh85@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary/70" />
                sadamjafreh85@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary/70" />
                {t("المملكة الأردنية الهاشمية", "Hashemite Kingdom of Jordan")}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wild Power. {t("جميع الحقوق محفوظة.", "All rights reserved.")}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("صُمم بـ ❤️ في الأردن", "Made with ❤️ in Jordan")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
