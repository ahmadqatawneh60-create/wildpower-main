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
      name: t("أحمد الشمري", "Ahmed Al-Shamri"),
      role: t("مدير شركة الأفق للتطوير", "Director, Al-Ofuq Development Co."),
      content: t("تعاملنا مع Wild Power في تركيب نظام كاميرات مراقبة متكامل لمبنى الشركة. الجودة ممتازة والفريق محترف جداً. أنصح بالتعامل معهم بشدة.", "We worked with Wild Power to install a complete CCTV system for our building. Excellent quality and a very professional team. Highly recommended."),
      rating: 5,
      project: t("نظام مراقبة متكامل", "Complete CCTV System"),
    },
    {
      name: t("فهد العتيبي", "Fahad Al-Otaibi"),
      role: t("مالك مجمع تجاري", "Mall Owner"),
      content: t("أفضل شركة تعاملت معها في مجال الأنظمة الأمنية. ركبوا لنا نظام أكسس كنترول ذكي مع كاميرات Hikvision والنتيجة مذهلة.", "The best security company I've dealt with. They installed a smart access control system with Hikvision cameras — amazing results."),
      rating: 5,
      project: t("أكسس كنترول + كاميرات", "Access Control + CCTV"),
    },
    {
      name: t("نورة القحطاني", "Noura Al-Qahtani"),
      role: t("مديرة مستشفى الرعاية", "Hospital Manager"),
      content: t("ركبوا لنا نظام كول سنتر متطور ربط جميع أقسام المستشفى. الدعم الفني ممتاز ومتوفر على مدار الساعة.", "They installed an advanced call center system connecting all hospital departments. Excellent 24/7 technical support."),
      rating: 5,
      project: t("كول سنتر طبي", "Medical Call Center"),
    },
    {
      name: t("خالد المطيري", "Khaled Al-Mutairi"),
      role: t("مدير مصنع البدائع", "Factory Manager"),
      content: t("تم تركيب أكثر من 200 كاميرا مراقبة في المصنع مع نظام NVR متطور. المشروع تم تسليمه قبل الموعد وبجودة عالية جداً.", "Over 200 cameras installed in the factory with an advanced NVR system. The project was delivered ahead of schedule with top quality."),
      rating: 5,
      project: t("+200 كاميرا مراقبة", "+200 CCTV Cameras"),
    },
    {
      name: t("سارة الحربي", "Sara Al-Harbi"),
      role: t("صاحبة سلسلة مطاعم", "Restaurant Chain Owner"),
      content: t("ركبوا لنا كاميرات مراقبة في جميع الفروع مع إمكانية المراقبة من الجوال. خدمة ممتازة وأسعار منافسة.", "They installed CCTV in all branches with mobile monitoring. Excellent service and competitive prices."),
      rating: 5,
      project: t("مراقبة فروع متعددة", "Multi-Branch Monitoring"),
    },
    {
      name: t("عبدالله الدوسري", "Abdullah Al-Dosari"),
      role: t("مدير أمن مجمع حكومي", "Government Security Manager"),
      content: t("نظام أمني شامل من كاميرات وبوابات دخول وأنظمة إنذار. فريق Wild Power أثبت كفاءته في المشاريع الكبيرة.", "A comprehensive security system with cameras, gates, and alarms. Wild Power proved their excellence in large-scale projects."),
      rating: 5,
      project: t("نظام أمني حكومي", "Government Security"),
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
                <div className="flex items-center justify-between">
                  <motion.div key={`info-${active}`} initial={{ opacity: 0, x: isRtl ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                        {testimonials[active].name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-foreground">{testimonials[active].name}</h4>
                        <p className="text-muted-foreground text-sm">{testimonials[active].role}</p>
                      </div>
                    </div>
                  </motion.div>
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="text-xs text-muted-foreground px-3 py-1 rounded-full glass">{testimonials[active].project}</span>
                  </div>
                </div>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.filter((_, i) => i !== active).slice(0, 3).map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              onClick={() => setActive(testimonials.indexOf(item))}
              className="glass-card rounded-2xl p-6 cursor-pointer hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(item.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-primary/60 text-primary/60" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4 group-hover:text-foreground/80 transition-colors">"{item.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">{item.name.charAt(0)}</div>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
