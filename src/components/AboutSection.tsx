import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Award, Users, Clock, Headphones } from "lucide-react";
import SectionOrbs from "./SectionOrbs";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const features = [
    t("خبرة تزيد عن 10 سنوات في مجال الأنظمة الأمنية", "Over 10 years of experience in security systems"),
    t("فريق فني متخصص ومعتمد من الشركات المصنعة", "Specialized technical team certified by manufacturers"),
    t("وكلاء معتمدون لأفضل الماركات العالمية", "Authorized dealers for top global brands"),
    t("خدمة ما بعد البيع وصيانة دورية شاملة", "After-sales service and comprehensive maintenance"),
    t("أسعار تنافسية وعروض مميزة على مدار العام", "Competitive prices and special offers year-round"),
    t("دعم فني على مدار الساعة طوال أيام الأسبوع", "24/7 technical support"),
  ];

  const stats = [
    { icon: Award, value: "+500", label: t("مشروع ناجح", "Successful Projects") },
    { icon: Users, value: "+1000", label: t("عميل سعيد", "Happy Clients") },
    { icon: Clock, value: "+10", label: t("سنوات خبرة", "Years Experience") },
    { icon: Headphones, value: "24/7", label: t("دعم فني", "Tech Support") },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-dark-reverse relative overflow-hidden">
      <SectionOrbs variant="about" />
      <div className="container mx-auto max-w-7xl" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-semibold text-primary tracking-wider mb-4">
              {t("— تعرف علينا —", "— About Us —")}
            </span>
            <h2 className="section-title !text-3xl md:!text-4xl lg:!text-5xl">
              {t("لماذا", "Why")} <span className="text-gradient">Wild Power</span>{t("؟", "?")}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              {t(
                "شركة متخصصة في تقديم الحلول الأمنية والتقنية المتكاملة. نعمل على توفير أحدث الأنظمة وأكثرها تطوراً لضمان أمان منشآتكم وأعمالكم بأعلى معايير الجودة العالمية.",
                "A company specialized in providing integrated security and technology solutions. We provide the latest and most advanced systems to ensure the security of your facilities with the highest international quality standards."
              )}
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/90 text-sm md:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="glass-card rounded-2xl p-8 text-center group hover:glow-red transition-all duration-500"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl md:text-4xl font-black text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
