import { useState, useRef } from "react";
import { Send, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import SectionOrbs from "./SectionOrbs";
import { useLanguage } from "@/contexts/LanguageContext";

const QuoteForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", details: "" });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    t("تركيب كاميرات المراقبة", "CCTV Installation"),
    t("أبواب الأكسس كنترول", "Access Control Doors"),
    t("كول سنتر", "Call Center"),
    t("مقاسم هاتفية", "PBX Systems"),
    t("أنظمة الإنذار والحماية", "Alarm & Security Systems"),
    t("شبكات وبنية تحتية", "Networks & Infrastructure"),
    t("طابعات وصيانة", "Printers & Maintenance"),
    t("أجهزة بصمة", "Fingerprint Devices"),
    t("سمارت هوم", "Smart Home"),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("طلب عرض سعر | Price Quote Request");
    const body = encodeURIComponent(
      `الاسم: ${formData.name}\n` +
      `رقم الهاتف: ${formData.phone}\n` +
      `نوع الخدمة: ${formData.service}\n` +
      `تفاصيل إضافية: ${formData.details}`
    );

    window.location.href = `mailto:sadamjafreh85@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", service: "", details: "" });
    }, 4000);
  };

  const inputClass = "w-full rounded-xl border border-border/50 bg-secondary/50 px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all duration-300 text-sm";

  return (
    <section id="quote" className="section-padding mesh-gradient relative overflow-hidden">
      <SectionOrbs variant="quote" />
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="inline-block text-sm font-semibold text-primary tracking-wider mb-4">
            {t("— احصل على عرض —", "— Get a Quote —")}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="section-title !text-3xl md:!text-4xl">
            {t("طلب", "Request a")} <span className="text-gradient">{t("عرض سعر", "Price Quote")}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} className="section-subtitle !text-base">
            {t("املأ النموذج وسنتواصل معك خلال 24 ساعة", "Fill out the form and we'll contact you within 24 hours")}
          </motion.p>
          <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="w-24 h-1 line-gradient mx-auto mt-6 rounded-full" />
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          {submitted ? (
            <div className="glass-card rounded-2xl p-16 text-center glow-red-intense">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t("تم إرسال طلبك بنجاح!", "Your request has been sent!")}</h3>
              <p className="text-muted-foreground">{t("سنتواصل معك في أقرب وقت", "We will contact you soon")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground/80">{t("الاسم الكامل", "Full Name")}</label>
                  <input type="text" required maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder={t("أدخل اسمك", "Enter your name")} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground/80">{t("رقم الهاتف", "Phone Number")}</label>
                  <input type="tel" required maxLength={20} dir="ltr" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={`${inputClass} text-left`} placeholder="+962 7X XXX XXXX" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">{t("نوع الخدمة", "Service Type")}</label>
                <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={inputClass}>
                  <option value="">{t("اختر الخدمة المطلوبة", "Select the required service")}</option>
                  {services.map((s) => (<option key={s} value={s}>{s}</option>))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">{t("تفاصيل إضافية (اختياري)", "Additional Details (optional)")}</label>
                <textarea maxLength={500} rows={4} value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} className={`${inputClass} resize-none`} placeholder={t("اذكر أي تفاصيل إضافية عن مشروعك...", "Mention any additional details about your project...")} />
              </div>
              <button type="submit" className="btn-primary w-full !text-lg !py-5 gap-3">
                <Send className="w-5 h-5" />
                {t("إرسال الطلب", "Submit Request")}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteForm;
