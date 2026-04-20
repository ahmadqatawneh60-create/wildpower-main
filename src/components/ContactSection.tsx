import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionOrbs from "./SectionOrbs";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ContactItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  dir?: "ltr" | "rtl";
  href?: string;
  isMap?: boolean;
}

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [isMapOpen, setIsMapOpen] = useState(false);

  const contacts: ContactItem[] = [
    { icon: Phone, title: t("اتصل بنا", "Call Us"), value: "0797104488", dir: "ltr" as const, href: "tel:+962797104488" },
    { icon: Mail, title: t("البريد الإلكتروني", "Email"), value: "sadamjafreh85@gmail.com", href: "mailto:sadamjafreh85@gmail.com" },
    { icon: MapPin, title: t("موقعنا", "Location"), value: t("المملكة الأردنية الهاشمية", "Hashemite Kingdom of Jordan"), isMap: true },
    { icon: Clock, title: t("ساعات العمل", "Working Hours"), value: t("السبت - الخميس: 9 ص - 6 م", "Sat - Thu: 9 AM - 6 PM") },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <SectionOrbs variant="contact" />
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="inline-block text-sm font-semibold text-primary tracking-wider mb-4">
            {t("— نحن هنا لمساعدتك —", "— We're Here to Help —")}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="section-title">
            {t("تواصل", "Get in")} <span className="text-gradient">{t("معنا", "Touch")}</span>
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="w-24 h-1 line-gradient mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((c, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }}>
              {c.isMap ? (
                <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
                  <DialogTrigger asChild>
                    <div className="premium-card card-shine text-center group cursor-pointer">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-all duration-500">
                        <c.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-base mb-2">{c.title}</h3>
                      <p className="text-muted-foreground text-sm" dir={c.dir}>{c.value}</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{t("موقعنا على الخريطة", "Our Location on the Map")}</DialogTitle>
                    </DialogHeader>
                    <div className="w-full h-96">
                      <iframe
                        src="https://maps.google.com/maps?q=31.07514000999617,35.69448724054988&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Location"
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : c.href ? (
                <a href={c.href} className="block premium-card card-shine text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-all duration-500">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm" dir={c.dir}>{c.value}</p>
                </a>
              ) : (
                <div className="premium-card card-shine text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-all duration-500">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm" dir={c.dir}>{c.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
