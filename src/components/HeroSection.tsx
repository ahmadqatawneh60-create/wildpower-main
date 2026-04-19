import { motion } from "framer-motion";
import { ArrowDown, Shield, Camera, Wifi } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt={t("أنظمة مراقبة وأمن", "Security & Surveillance Systems")} className="w-full h-full object-cover opacity-20 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 mesh-gradient opacity-80" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-sm text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t("حلول أمنية وتقنية متكاملة — 2026", "Integrated Security & Tech Solutions — 2026")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1]"
          >
            <span className="text-gradient-white">{t("نحمي", "We Protect")}</span>{" "}
            <span className="text-gradient">{t("أعمالك", "Your Business")}</span>
            <br />
            <span className="text-gradient-white">{t("بأحدث", "With Latest")}</span>{" "}
            <span className="text-gradient">{t("التقنيات", "Technologies")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t(
              "تركيب كاميرات مراقبة، أنظمة تحكم بالدخول، كول سنتر، مقاسم هاتفية، طابعات وأكثر",
              "CCTV installation, access control systems, call centers, PBX systems, printers and more"
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <a href="#services" className="btn-primary text-lg !px-10 !py-5">
              {t("استكشف خدماتنا", "Explore Services")}
            </a>
            <a href="#contact" className="btn-outline text-lg !px-10 !py-5">
              {t("تواصل معنا", "Contact Us")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Shield, value: "+500", label: t("مشروع منجز", "Projects Done") },
              { icon: Camera, value: "+50", label: t("علامة تجارية", "Brands") },
              { icon: Wifi, value: "+10", label: t("سنوات خبرة", "Years Experience") },
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 opacity-70" />
                <div className="text-2xl md:text-3xl font-black text-gradient mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
