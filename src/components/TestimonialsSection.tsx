import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const { t, isRtl } = useLanguage();

  const testimonials = [
    {
      content: t("تعاملنا معهم في تركيب نظام كاميرات مراقبة متكامل لمبنانا. الجودة حلوة جداً والفريق احترافي ومنظم جداً. أنصح الكل يتعاملوا معهم من غير تردد.", "We worked with Wild Power to install a complete CCTV system for our building. Excellent quality and a very professional team. Highly recommended."),
      rating: 5,
    },
    {
      content: t("أفضل شركة تعاملت معها في مجال الأمن. ركبوا لنا نظام أكسس كنترول ذكي مع كاميرات Hikvision والنتايج تبهر العين.", "The best security company I've dealt with. They installed a smart access control system with Hikvision cameras — amazing results."),
      rating: 5,
    },
    {
      content: t("ركبوا لنا نظام كول سنتر مقدم وربطوا بيه كل الأقسام. الدعم الفني حلو جداً وموجود يل على ساعة.", "They installed an advanced call center system connecting all hospital departments. Excellent 24/7 technical support."),
      rating: 5,
    },
    {
      content: t("ركبوا لنا أكثر من 200 كاميرا في المصنع مع نظام NVR قوي. الشغل تسلموه قبل التاريخ والجودة كانت ممتازة جداً.", "Over 200 cameras installed in the factory with an advanced NVR system. The project was delivered ahead of schedule with top quality."),
      rating: 5,
    },
    {
      content: t("ركبوا لنا كاميرات مراقبة في كل الفروع وتقدر تشوفها من الموبايل. الخدمة تمام والأسعار معقولة وكويسة.", "They installed CCTV in all branches with mobile monitoring. Excellent service and competitive prices."),
      rating: 5,
    },
    {
      content: t("نظام أمني شامل فيه كاميرات وبوابات دخول وأنظمة إنذار. فريق Wild Power اثبتوا إنهم أكفاء وشاطرين في المشاريع الكبيرة.", "A comprehensive security system with cameras, gates, and alarms. Wild Power proved their excellence in large-scale projects."),
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-primary/6 rounded-full blur-[130px] animate-float" />
      <div className="absolute bottom-20 right-20 w-[280px] h-[280px] bg-amber-500/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />

      <div ref={ref} className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6"
          >
            <Star className="w-4 h-4 text-primary" />
            {t("آراء عملائنا", "Client Reviews")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            <span className="text-gradient-white">{t("ثقة", "Our Clients'")}</span>{" "}
            <span className="text-gradient">{t("عملائنا", "Trust")}</span>{" "}
            <span className="text-gradient-white">{t("شهادتنا", "Is Our Badge")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            {t("نفخر بثقة عملائنا ونسعى دائماً لتقديم أفضل الحلول والخدمات", "We take pride in our clients' trust and always strive to deliver the best solutions")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="premium-card card-shine !p-10 md:!p-14 relative">
              <Quote className={`absolute top-8 ${isRtl ? "right-8" : "left-8"} w-12 h-12 text-primary/15`} />
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <motion.p key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-xl md:text-2xl leading-relaxed text-foreground/90 mb-8 font-medium">
                  "{testimonials[active].content}"
                </motion.p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/30 transition-all">
                {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"}`} />
                ))}
              </div>
              <button onClick={() => setActive((prev) => (prev + 1) % testimonials.length)} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/30 transition-all">
                {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
