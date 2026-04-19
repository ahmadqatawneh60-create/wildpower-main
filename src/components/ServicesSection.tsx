import { motion } from "framer-motion";
import { Camera, DoorOpen, Phone, Server, Shield, Wifi } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionOrbs from "./SectionOrbs";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const services = [
    {
      icon: Camera,
      title: t("كاميرات المراقبة", "CCTV Cameras"),
      description: t("تركيب وصيانة كاميرات مراقبة عالية الدقة للمنازل والشركات والمصانع مع إمكانية المراقبة عن بُعد", "Installation and maintenance of high-resolution surveillance cameras for homes, businesses and factories with remote monitoring"),
      features: ["IP & Analog", t("رؤية ليلية", "Night Vision"), t("مراقبة عن بُعد", "Remote View")],
    },
    {
      icon: DoorOpen,
      title: t("أكسس كنترول", "Access Control"),
      description: t("أنظمة تحكم بالدخول ذكية بالبصمة والبطاقة والرقم السري لتأمين المداخل والمخارج", "Smart access control systems with fingerprint, card and PIN to secure entrances and exits"),
      features: [t("بصمة إصبع", "Fingerprint"), t("بطاقة RFID", "RFID Card"), t("أقفال ذكية", "Smart Locks")],
    },
    {
      icon: Phone,
      title: t("كول سنتر", "Call Center"),
      description: t("حلول مراكز الاتصال المتكاملة لإدارة المكالمات الواردة والصادرة بكفاءة عالية", "Integrated call center solutions for managing inbound and outbound calls efficiently"),
      features: ["VoIP", t("تسجيل مكالمات", "Call Recording"), t("تقارير ذكية", "Smart Reports")],
    },
    {
      icon: Server,
      title: t("مقاسم هاتفية", "PBX Systems"),
      description: t("تركيب وبرمجة المقاسم الهاتفية (PBX) لربط الخطوط الداخلية والخارجية", "Installation and programming of PBX systems to connect internal and external lines"),
      features: ["Grandstream", t("حتى 500 فرعي", "Up to 500 Ext"), t("دعم SIP", "SIP Support")],
    },
    {
      icon: Shield,
      title: t("أنظمة الإنذار", "Alarm Systems"),
      description: t("أنظمة إنذار متطورة ضد السرقة والحريق مع تنبيهات فورية على الهاتف", "Advanced alarm systems against theft and fire with instant mobile alerts"),
      features: [t("كشف حركة", "Motion Detection"), t("إنذار حريق", "Fire Alarm"), t("تنبيه فوري", "Instant Alert")],
    },
    {
      icon: Wifi,
      title: t("شبكات وبنية تحتية", "Networks & Infrastructure"),
      description: t("تمديد شبكات الإنترنت والكابلات الهيكلية وتجهيز غرف السيرفرات", "Internet network extension, structured cabling and server room setup"),
      features: [t("فايبر أوبتك", "Fiber Optic"), t("WiFi مؤسسي", "Enterprise WiFi"), t("سيرفرات", "Servers")],
    },
  ];

  return (
    <section id="services" className="section-padding mesh-gradient relative overflow-hidden">
      <SectionOrbs variant="services" />
      <div className="container mx-auto max-w-7xl" ref={ref}>
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-block text-sm font-semibold text-primary tracking-wider mb-4"
          >
            {t("— ماذا نقدم —", "— What We Offer —")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            <span className="text-gradient">{t("خدماتنا", "Our Services")}</span> {t("المتكاملة", "Integrated")}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 line-gradient mx-auto mt-6 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="premium-card card-shine group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:glow-red transition-all duration-500">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-muted-foreground font-medium">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
