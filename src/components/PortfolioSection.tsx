import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import SectionOrbs from "./SectionOrbs";
import { useLanguage } from "@/contexts/LanguageContext";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const projects = [
    { image: project1, title: t("كاميرات مراقبة — مبنى تجاري", "CCTV — Commercial Building"), category: t("كاميرات مراقبة", "CCTV") },
    { image: project2, title: t("أكسس كنترول — مكاتب إدارية", "Access Control — Office"), category: t("تحكم بالدخول", "Access Control") },
    { image: project3, title: t("كول سنتر — شركة خدمات", "Call Center — Service Company"), category: t("كول سنتر", "Call Center") },
    { image: project4, title: t("غرفة سيرفرات — مركز بيانات", "Server Room — Data Center"), category: t("شبكات", "Networking") },
    { image: project5, title: t("مقاسم هاتفية — مكتب شركة", "PBX — Corporate Office"), category: t("مقاسم", "PBX") },
    { image: project6, title: t("أنظمة إنذار — مبنى سكني", "Alarm Systems — Residential"), category: t("أنظمة إنذار", "Alarms") },
  ];

  const videos = [
    { src: "/videos/company-work-2026-main.mp4", title: t("أعمالنا المنجزة 2026", "Our Work 2026"), category: t("فيديو رئيسي", "Featured Video"), year: "2026" },
    { src: "/videos/company-work-2026.mp4", title: t("أعمال الشركة 2026", "Company Work 2026"), category: t("فيديو", "Video"), year: "2026" },
    { src: "/videos/company-work-2026-1.mp4", title: t("تركيب كاميرات مراقبة", "CCTV Installation"), category: t("فيديو", "Video"), year: "2026" },
    { src: "/videos/company-work-2026-2.mp4", title: t("تمديد شبكات وأنظمة أمنية", "Network & Security Systems"), category: t("فيديو", "Video"), year: "2026" },
    { src: "/videos/company-work-2026-3.mp4", title: t("تركيب أنظمة تحكم بالدخول", "Access Control Setup"), category: t("فيديو", "Video"), year: "2026" },
    { src: "/videos/company-work-2026-4.mp4", title: t("صيانة وتشغيل أنظمة", "System Maintenance"), category: t("فيديو", "Video"), year: "2026" },
    { src: "/videos/company-work-2026-5.mp4", title: t("مشاريع متكاملة", "Integrated Projects"), category: t("فيديو", "Video"), year: "2026" },
  ];

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <SectionOrbs variant="portfolio" />
      <div className="container mx-auto max-w-7xl" ref={ref}>
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-block text-sm font-semibold text-primary tracking-wider mb-4"
          >
            {t("— إنجازاتنا —", "— Our Work —")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            {t("معرض", "Our")} <span className="text-gradient">{t("أعمالنا", "Portfolio")}</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 line-gradient mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Videos Section */}
        {videos.length > 0 && (
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-6 text-foreground"
            >
              {t("فيديوهات أعمالنا", "Our Work Videos")}
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 card-shine cursor-pointer"
                  onClick={() => setActiveVideo(video.src)}
                >
                  <div className="aspect-video relative bg-card">
                    <video
                      src={video.src}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-background/60 flex items-center justify-center group-hover:bg-background/40 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-red">
                        <Play className="w-7 h-7 text-primary-foreground fill-current ms-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-card">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                      {video.category} • {video.year}
                    </span>
                    <h4 className="text-lg font-bold text-foreground">{video.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold mb-6 text-foreground"
        >
          {t("مشاريعنا", "Our Projects")}
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 card-shine"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-6 w-full">
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 end-0 p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <video
              src={activeVideo}
              className="w-full rounded-2xl border border-border"
              controls
              autoPlay
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PortfolioSection;
