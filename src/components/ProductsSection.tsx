import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionOrbs from "./SectionOrbs";
import { useLanguage } from "@/contexts/LanguageContext";

import hikvisionDome from "@/assets/product-hikvision-dome.jpg";
import hikvisionBullet from "@/assets/product-hikvision-bullet.jpg";
import hikvisionNvr from "@/assets/product-hikvision-nvr.jpg";
import hikvisionPtz from "@/assets/product-hikvision-ptz.jpg";
import hikvisionDvr from "@/assets/product-hikvision-dvr.jpg";
import hikColorvu from "@/assets/product-hik-colorvu.jpg";
import hikTurret from "@/assets/product-hik-turret.jpg";
import hikFisheye from "@/assets/product-hik-fisheye.jpg";
import hikSwitch from "@/assets/product-hik-switch.jpg";
import hikIntercom from "@/assets/product-hik-intercom.jpg";
import tiandy from "@/assets/product-tiandy.jpg";
import tiandyBullet from "@/assets/product-tiandy-bullet.jpg";
import tiandyNvr from "@/assets/product-tiandy-nvr.jpg";
import tiandyPtz from "@/assets/product-tiandy-ptz.jpg";
import tiandyFisheye from "@/assets/product-tiandy-fisheye.jpg";
import tiandyTurret from "@/assets/product-tiandy-turret.jpg";
import tiandy4k from "@/assets/product-tiandy-4k.jpg";
import tiandyColor from "@/assets/product-tiandy-color.jpg";
import tiandySwitch from "@/assets/product-tiandy-switch.jpg";
import tiandyIntercom from "@/assets/product-tiandy-intercom.jpg";
import grandstreamPhone from "@/assets/product-grandstream-phone.jpg";
import grandstreamPbx from "@/assets/product-grandstream-pbx.jpg";
import grandstreamVideo from "@/assets/product-grandstream-video.jpg";
import grandCordless from "@/assets/product-grand-cordless.jpg";
import grandConference from "@/assets/product-grand-conference.jpg";
import grandAta from "@/assets/product-grand-ata.jpg";
import grandWifi from "@/assets/product-grand-wifi.jpg";
import grandSwitch from "@/assets/product-grand-switch.jpg";
import grandDoorbell from "@/assets/product-grand-doorbell.jpg";
import grandReception from "@/assets/product-grand-reception.jpg";
import accessDoor from "@/assets/product-access-door.jpg";
import accessReader from "@/assets/product-access-reader.jpg";
import accessTurnstile from "@/assets/product-access-turnstile.jpg";
import accessStrike from "@/assets/product-access-strike.jpg";
import accessKeypad from "@/assets/product-access-keypad.jpg";
import accessExit from "@/assets/product-access-exit.jpg";
import accessPower from "@/assets/product-access-power.jpg";
import accessVideophone from "@/assets/product-access-videophone.jpg";
import accessBoard from "@/assets/product-access-board.jpg";
import fingerLock from "@/assets/product-finger-lock.jpg";
import smartHome from "@/assets/product-smart-home.jpg";
import smartSwitch from "@/assets/product-smart-switch.jpg";
import smartSensor from "@/assets/product-smart-sensor.jpg";
import smartBulb from "@/assets/product-smart-bulb.jpg";
import smartPlug from "@/assets/product-smart-plug.jpg";
import smartDoorSensor from "@/assets/product-smart-door-sensor.jpg";
import smartSmoke from "@/assets/product-smart-smoke.jpg";
import smartDoorbell from "@/assets/product-smart-doorbell.jpg";
import fingerPalm from "@/assets/product-finger-palm.jpg";
import fingerIris from "@/assets/product-finger-iris.jpg";
import fingerprint from "@/assets/product-fingerprint.jpg";
import faceRecognition from "@/assets/product-face-recognition.jpg";
import fingerUsb from "@/assets/product-finger-usb.jpg";
import fingerTerminal from "@/assets/product-finger-terminal.jpg";
import tiandyDvr from "@/assets/product-tiandy-dvr.jpg";
import unvDome from "@/assets/product-unv-dome.jpg";
import unvBullet from "@/assets/product-unv-bullet.jpg";
import unvPtz from "@/assets/product-unv-ptz.jpg";
import unvNvr from "@/assets/product-unv-nvr.jpg";
import unvTurret from "@/assets/product-unv-turret.jpg";
import unvColorhunter from "@/assets/product-unv-colorhunter.jpg";
import unv4k from "@/assets/product-unv-4k.jpg";
import unvSwitch from "@/assets/product-unv-switch.jpg";
import unvFisheye from "@/assets/product-unv-fisheye.jpg";
import unvDvr from "@/assets/product-unv-dvr.jpg";
import printerLaser from "@/assets/product-printer-laser.jpg";
import printerInkjet from "@/assets/product-printer-inkjet.jpg";
import printerCopier from "@/assets/product-printer-copier.jpg";
import printerThermal from "@/assets/product-printer-thermal.jpg";
import printerLabel from "@/assets/product-printer-label.jpg";
import printerPortable from "@/assets/product-printer-portable.jpg";
import printerDotmatrix from "@/assets/product-printer-dotmatrix.jpg";
import printerToner from "@/assets/product-printer-toner.jpg";
import printerPlotter from "@/assets/product-printer-plotter.jpg";
import printer3d from "@/assets/product-printer-3d.jpg";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const brands = [
    {
      id: "hikvision", name: "Hikvision",
      products: [
        { image: hikvisionDome, name: t("كاميرا IP Dome", "IP Dome Camera"), desc: t("كاميرا مراقبة داخلية عالية الدقة 4MP مع رؤية ليلية", "Indoor 4MP HD surveillance camera with night vision") },
        { image: hikvisionBullet, name: t("كاميرا IP Bullet", "IP Bullet Camera"), desc: t("كاميرا خارجية مقاومة للعوامل الجوية 4MP مع IR", "Outdoor weatherproof 4MP camera with IR") },
        { image: hikvisionPtz, name: t("كاميرا PTZ متحركة", "PTZ Camera"), desc: t("كاميرا متحركة 360° بتقريب بصري 25x للمراقبة الشاملة", "360° pan-tilt-zoom camera with 25x optical zoom") },
        { image: hikColorvu, name: t("كاميرا ColorVu", "ColorVu Camera"), desc: t("كاميرا بتقنية الألوان الكاملة ليلاً ونهاراً بدقة 4MP", "Full-color day & night 4MP camera") },
        { image: hikTurret, name: t("كاميرا Turret بمايك", "Turret Camera w/ Mic"), desc: t("كاميرا داخلية مع ميكروفون مدمج لتسجيل الصوت والصورة", "Indoor camera with built-in mic for audio & video") },
        { image: hikFisheye, name: t("كاميرا Fisheye بانورامية", "Fisheye Panoramic Camera"), desc: t("كاميرا بانورامية 360° للتغطية الكاملة بعدسة واحدة", "360° panoramic camera for full coverage") },
        { image: hikvisionNvr, name: t("جهاز تسجيل NVR", "NVR Recorder"), desc: t("جهاز تسجيل شبكي يدعم حتى 16 كاميرا مع تخزين عالي", "Network recorder supporting up to 16 cameras") },
        { image: hikvisionDvr, name: t("جهاز تسجيل DVR", "DVR Recorder"), desc: t("جهاز تسجيل رقمي احترافي يدعم حتى 32 قناة بدقة 4K", "Professional 4K digital recorder up to 32 channels") },
        { image: hikSwitch, name: t("سويتش PoE شبكي", "PoE Network Switch"), desc: t("سويتش 8 منافذ PoE لتغذية الكاميرات عبر كيبل الشبكة", "8-port PoE switch for powering cameras via network cable") },
        { image: hikIntercom, name: t("إنتركم فيديو", "Video Intercom"), desc: t("نظام اتصال داخلي بالفيديو مع شاشة ملونة وكاميرا باب", "Video intercom system with color screen and door camera") },
      ],
    },
    {
      id: "uniview", name: "Uniview (UNV)",
      products: [
        { image: unvDome, name: t("كاميرا UNV Dome", "UNV Dome Camera"), desc: t("كاميرا IP داخلية بدقة 4MP مع رؤية ليلية 30 متر وكشف حركة ذكي", "4MP indoor IP camera with 30m night vision and smart motion detection") },
        { image: unvBullet, name: t("كاميرا UNV Bullet", "UNV Bullet Camera"), desc: t("كاميرا خارجية مقاومة للماء IP67 بدقة 5MP مع WDR", "IP67 waterproof 5MP outdoor camera with WDR") },
        { image: unvPtz, name: t("كاميرا PTZ متحركة", "PTZ Camera"), desc: t("كاميرا سرعة عالية 360° بتقريب بصري 22x وتتبع تلقائي", "High-speed 360° camera with 22x zoom and auto-tracking") },
        { image: unvTurret, name: t("كاميرا Turret بمايك", "Turret Camera w/ Mic"), desc: t("كاميرا داخلية بدقة 4MP مع ميكروفون مدمج وكشف ذكي", "4MP indoor camera with built-in mic and smart detection") },
        { image: unvColorhunter, name: t("كاميرا ColorHunter", "ColorHunter Camera"), desc: t("كاميرا بألوان كاملة ليلاً ونهاراً بتقنية إضاءة LED دافئة", "Full-color day & night camera with warm LED lighting") },
        { image: unv4k, name: t("كاميرا 4K Ultra HD", "4K Ultra HD Camera"), desc: t("كاميرا فائقة الدقة 8MP بعدسة متغيرة وضغط H.265+", "8MP ultra HD camera with varifocal lens and H.265+") },
        { image: unvFisheye, name: t("كاميرا Fisheye بانورامية", "Fisheye Panoramic"), desc: t("كاميرا بانورامية 360° بدقة 5MP مع Dewarping رقمي", "5MP 360° panoramic camera with digital dewarping") },
        { image: unvNvr, name: t("جهاز تسجيل NVR", "NVR Recorder"), desc: t("جهاز تسجيل شبكي يدعم حتى 16 كاميرا بدقة 4K مع AI", "4K network recorder for up to 16 cameras with AI") },
        { image: unvDvr, name: t("جهاز تسجيل DVR", "DVR Recorder"), desc: t("جهاز تسجيل رقمي يدعم حتى 16 قناة بضغط H.265 Pro+", "Digital recorder up to 16 channels with H.265 Pro+") },
        { image: unvSwitch, name: t("سويتش PoE شبكي", "PoE Network Switch"), desc: t("سويتش 8 منافذ PoE+ بقدرة 120 واط لتغذية الكاميرات", "8-port PoE+ switch with 120W for powering cameras") },
      ],
    },
    {
      id: "tiandy", name: "Tiandy",
      products: [
        { image: tiandy, name: t("كاميرا Tiandy Dome", "Tiandy Dome Camera"), desc: t("كاميرا مراقبة ذكية بدقة عالية مع تقنيات AI متقدمة", "Smart HD surveillance camera with advanced AI") },
        { image: tiandyBullet, name: t("كاميرا Bullet خارجية", "Outdoor Bullet Camera"), desc: t("كاميرا خارجية مقاومة للماء بدقة 5MP مع رؤية ليلية ملونة", "Waterproof 5MP outdoor camera with color night vision") },
        { image: tiandyPtz, name: t("كاميرا PTZ متحركة", "PTZ Camera"), desc: t("كاميرا سرعة عالية متحركة مع تتبع ذكي للأهداف", "High-speed PTZ camera with smart target tracking") },
        { image: tiandyFisheye, name: t("كاميرا Fisheye ذكية", "Smart Fisheye Camera"), desc: t("كاميرا بانورامية 360° مع خاصية Dewarping الذكية", "360° panoramic camera with smart dewarping") },
        { image: tiandyTurret, name: t("كاميرا Turret داخلية", "Indoor Turret Camera"), desc: t("كاميرا داخلية بتصميم أنيق مع كشف حركة ذكي", "Sleek indoor camera with smart motion detection") },
        { image: tiandy4k, name: t("كاميرا 4K Ultra HD", "4K Ultra HD Camera"), desc: t("كاميرا فائقة الدقة 8MP مع عدسة متغيرة البُعد البؤري", "8MP ultra HD camera with varifocal lens") },
        { image: tiandyColor, name: t("كاميرا ColorMaker", "ColorMaker Camera"), desc: t("كاميرا WiFi لاسلكية مع رؤية ليلية ملونة بالكامل", "WiFi camera with full-color night vision") },
        { image: tiandyNvr, name: t("جهاز تسجيل NVR", "NVR Recorder"), desc: t("جهاز تسجيل شبكي ذكي يدعم تقنيات الذكاء الاصطناعي", "Smart network recorder with AI technologies") },
        { image: tiandyDvr, name: t("جهاز تسجيل DVR", "DVR Recorder"), desc: t("جهاز تسجيل رقمي بدقة عالية يدعم حتى 16 قناة", "HD digital recorder supporting up to 16 channels") },
        { image: tiandySwitch, name: t("سويتش PoE شبكي", "PoE Network Switch"), desc: t("سويتش 16 منفذ PoE لتغذية كاميرات المراقبة بكفاءة", "16-port PoE switch for efficient camera power") },
      ],
    },
    {
      id: "grandstream", name: "Grandstream",
      products: [
        { image: grandstreamPhone, name: t("هاتف IP أساسي", "Basic IP Phone"), desc: t("هاتف VoIP احترافي بشاشة LCD وجودة صوت HD عالية", "Professional VoIP phone with LCD and HD audio") },
        { image: grandstreamVideo, name: t("هاتف IP فيديو", "IP Video Phone"), desc: t("هاتف VoIP بشاشة لمس ملونة ومكالمات فيديو عالية الجودة", "VoIP phone with color touchscreen and HD video calls") },
        { image: grandCordless, name: t("هاتف لاسلكي DECT", "DECT Cordless Phone"), desc: t("هاتف IP لاسلكي مع قاعدة شحن ومدى تغطية واسع", "Cordless IP phone with wide coverage range") },
        { image: grandReception, name: t("هاتف استقبال متقدم", "Advanced Reception Phone"), desc: t("هاتف IP بشاشة لمس كبيرة مثالي لموظفي الاستقبال", "Large touchscreen IP phone ideal for receptionists") },
        { image: grandConference, name: t("سماعة مؤتمرات", "Conference Speaker"), desc: t("سماعة مؤتمرات احترافية بجودة صوت فائقة لغرف الاجتماعات", "Professional conference speaker for meeting rooms") },
        { image: grandAta, name: t("محول ATA", "ATA Adapter"), desc: t("محول لتحويل الخطوط التناظرية إلى رقمية VoIP", "Analog to VoIP digital line converter") },
        { image: grandstreamPbx, name: t("مقسم هاتفي UCM", "UCM PBX System"), desc: t("نظام مقاسم هاتفية متكامل يدعم حتى 500 مستخدم", "Integrated PBX system supporting up to 500 users") },
        { image: grandWifi, name: t("أكسس بوينت WiFi", "WiFi Access Point"), desc: t("نقطة وصول لاسلكية عالية الأداء للشبكات المؤسسية", "High-performance wireless AP for enterprise networks") },
        { image: grandSwitch, name: t("سويتش شبكي PoE", "PoE Network Switch"), desc: t("سويتش 24 منفذ PoE لربط الأجهزة الشبكية بكفاءة", "24-port PoE switch for efficient device networking") },
        { image: grandDoorbell, name: t("إنتركم فيديو IP", "IP Video Intercom"), desc: t("نظام اتصال داخلي بالفيديو مع كاميرا ولوحة مفاتيح", "Video intercom system with camera and keypad") },
      ],
    },
    {
      id: "access", name: t("أكسس دور", "Access Control"),
      products: [
        { image: accessDoor, name: t("قفل أكسس ذكي", "Smart Access Lock"), desc: t("قفل باب إلكتروني بالبصمة والبطاقة والرقم السري", "Electronic door lock with fingerprint, card and PIN") },
        { image: accessReader, name: t("قارئ بطاقات RFID", "RFID Card Reader"), desc: t("قارئ بطاقات وبصمة للتحكم بالدخول مع شاشة رقمية", "Card & fingerprint reader with digital display") },
        { image: accessTurnstile, name: t("بوابة تيرنستايل", "Turnstile Gate"), desc: t("بوابة دخول ثلاثية الأذرع من الستانلس ستيل للمباني", "Stainless steel tripod turnstile for buildings") },
        { image: accessStrike, name: t("قفل كهربائي Strike", "Electric Strike Lock"), desc: t("قفل كهربائي للأبواب مع نظام فتح تلقائي وطوارئ", "Electric door lock with auto-open and emergency") },
        { image: accessKeypad, name: t("لوحة مفاتيح رقمية", "Digital Keypad"), desc: t("لوحة تحكم بالدخول بالرقم السري والبطاقة الذكية", "PIN and smart card access control keypad") },
        { image: accessExit, name: t("زر خروج طوارئ", "Emergency Exit Button"), desc: t("زر فتح باب الطوارئ مع إضاءة LED وتصميم مقاوم", "Emergency door button with LED and durable design") },
        { image: accessPower, name: t("وحدة تغذية كهربائية", "Power Supply Unit"), desc: t("وحدة طاقة مركزية مع بطارية احتياطية لأنظمة التحكم", "Central power unit with backup battery") },
        { image: accessVideophone, name: t("فيديو فون باب", "Door Video Phone"), desc: t("نظام فيديو فون للأبواب مع كاميرا وشاشة داخلية", "Door video phone with camera and indoor screen") },
        { image: accessBoard, name: t("لوحة تحكم مركزية", "Central Control Board"), desc: t("بورد تحكم لربط وإدارة 4 أبواب مع برمجة متقدمة", "Control board for managing 4 doors with programming") },
        { image: fingerLock, name: t("قفل باب بالبصمة", "Fingerprint Door Lock"), desc: t("قفل باب ذكي بالبصمة والرقم السري والبطاقة والمفتاح", "Smart lock with fingerprint, PIN, card and key") },
      ],
    },
    {
      id: "smarthome", name: t("سمارت هوم", "Smart Home"),
      products: [
        { image: smartHome, name: t("نظام تحكم ذكي", "Smart Control Hub"), desc: t("وحدة تحكم مركزية للمنزل الذكي بالإضاءة والتكييف والأمان", "Central smart home hub for lighting, AC and security") },
        { image: smartSwitch, name: t("مفتاح ذكي WiFi", "WiFi Smart Switch"), desc: t("مفتاح إضاءة ذكي يعمل بالواي فاي مع تحكم عن بُعد", "WiFi smart light switch with remote control") },
        { image: smartSensor, name: t("حساس حركة ذكي", "Smart Motion Sensor"), desc: t("حساس كشف حركة لاسلكي للإنارة التلقائية والأمان", "Wireless motion sensor for auto-lighting and security") },
        { image: smartBulb, name: t("لمبة ذكية RGB", "RGB Smart Bulb"), desc: t("لمبة LED ذكية بألوان متعددة قابلة للتحكم عبر الهاتف", "Multi-color smart LED bulb controllable via phone") },
        { image: smartPlug, name: t("مقبس ذكي WiFi", "WiFi Smart Plug"), desc: t("مقبس كهرباء ذكي للتحكم بالأجهزة عن بُعد وجدولة التشغيل", "Smart plug for remote device control and scheduling") },
        { image: smartDoorSensor, name: t("حساس أبواب ونوافذ", "Door/Window Sensor"), desc: t("حساس مغناطيسي لاسلكي لكشف فتح وإغلاق الأبواب", "Wireless magnetic sensor for door open/close detection") },
        { image: smartSmoke, name: t("كاشف دخان ذكي", "Smart Smoke Detector"), desc: t("كاشف دخان وحريق ذكي مع تنبيهات فورية على الهاتف", "Smart smoke & fire detector with instant phone alerts") },
        { image: smartDoorbell, name: t("جرس باب ذكي بكاميرا", "Smart Video Doorbell"), desc: t("جرس باب بكاميرا HD ومكبر صوت للتواصل عن بُعد", "HD camera doorbell with speaker for remote communication") },
        { image: fingerPalm, name: t("لوحة تحكم جدارية", "Wall Control Panel"), desc: t("شاشة تحكم لمسية للمنزل الذكي مع واجهة سهلة الاستخدام", "Touch control screen for smart home with easy UI") },
        { image: fingerIris, name: t("كاميرا مراقبة منزلية", "Home Security Camera"), desc: t("كاميرا WiFi منزلية ذكية مع كشف حركة وتنبيهات فورية", "Smart WiFi home camera with motion detection and alerts") },
      ],
    },
    {
      id: "fingerprint", name: t("أجهزة البصمة", "Biometric Devices"),
      products: [
        { image: fingerprint, name: t("جهاز بصمة إصبع", "Fingerprint Device"), desc: t("جهاز حضور وانصراف بالبصمة والبطاقة مع تقارير شاملة", "Attendance device with fingerprint, card and reports") },
        { image: faceRecognition, name: t("جهاز تعرف على الوجه", "Face Recognition Device"), desc: t("جهاز حضور بتقنية التعرف على الوجه مع شاشة لمس", "Face recognition attendance device with touchscreen") },
        { image: fingerPalm, name: t("جهاز بصمة كف اليد", "Palm Scanner"), desc: t("جهاز تسجيل حضور متقدم بتقنية قراءة بصمة كف اليد", "Advanced attendance device with palm vein scanning") },
        { image: fingerUsb, name: t("قارئ بصمة USB", "USB Fingerprint Reader"), desc: t("قارئ بصمة محمول يتصل بالكمبيوتر عبر USB مباشرة", "Portable USB fingerprint reader for computers") },
        { image: fingerTerminal, name: t("جهاز حضور بشاشة لمس", "Touch Attendance Terminal"), desc: t("جهاز بصمة متطور بشاشة لمس كبيرة وواجهة سهلة", "Advanced fingerprint device with large touchscreen") },
        { image: fingerLock, name: t("قفل بصمة ذكي", "Smart Fingerprint Lock"), desc: t("قفل باب ذكي يعمل بالبصمة والرقم السري والبطاقة", "Smart door lock with fingerprint, PIN and card") },
        { image: fingerIris, name: t("جهاز مسح قزحية العين", "Iris Scanner"), desc: t("جهاز أمان متقدم بتقنية مسح قزحية العين للتحقق", "Advanced security device with iris scanning") },
        { image: accessReader, name: t("قارئ بصمة جداري", "Wall Fingerprint Reader"), desc: t("قارئ بصمة مثبت على الحائط للتحكم بالدخول والحضور", "Wall-mounted fingerprint reader for access and attendance") },
        { image: faceRecognition, name: t("جهاز تعرف حراري", "Thermal Face Scanner"), desc: t("جهاز تعرف على الوجه مع قياس درجة الحرارة التلقائي", "Face recognition device with auto temperature check") },
        { image: fingerTerminal, name: t("جهاز بصمة متعدد", "Multi-Biometric Device"), desc: t("جهاز حضور يدعم البصمة والوجه والبطاقة والرقم السري", "Attendance device: fingerprint, face, card and PIN") },
      ],
    },
    {
      id: "printers", name: t("طابعات", "Printers"),
      products: [
        { image: printerLaser, name: t("طابعة ليزر متعددة", "Multi-Function Laser"), desc: t("طابعة ليزر متعددة الوظائف طباعة ونسخ ومسح ضوئي وفاكس", "All-in-one laser: print, copy, scan and fax") },
        { image: printerInkjet, name: t("طابعة حبر ملونة", "Color Inkjet Printer"), desc: t("طابعة حبر ملونة متعددة الوظائف بجودة طباعة عالية", "Multi-function color inkjet with high print quality") },
        { image: printerCopier, name: t("آلة تصوير مكتبية", "Office Copier"), desc: t("آلة تصوير ونسخ كبيرة للمكاتب والشركات بسرعة عالية", "High-speed office copier for businesses") },
        { image: printerThermal, name: t("طابعة حرارية POS", "POS Thermal Printer"), desc: t("طابعة فواتير حرارية لنقاط البيع والكاشير بسرعة فائقة", "Ultra-fast thermal receipt printer for POS") },
        { image: printerLabel, name: t("طابعة ملصقات باركود", "Barcode Label Printer"), desc: t("طابعة ملصقات وباركود للمستودعات والمحلات التجارية", "Label & barcode printer for warehouses and stores") },
        { image: printerPortable, name: t("طابعة محمولة صغيرة", "Portable Mini Printer"), desc: t("طابعة محمولة خفيفة الوزن للطباعة أثناء التنقل", "Lightweight portable printer for on-the-go printing") },
        { image: printerDotmatrix, name: t("طابعة نقطية Dot Matrix", "Dot Matrix Printer"), desc: t("طابعة نقطية للفواتير متعددة النسخ والنماذج المستمرة", "Dot matrix for multi-copy invoices and continuous forms") },
        { image: printerToner, name: t("حبر وتونر أصلي", "Original Toner & Ink"), desc: t("أحبار وتونرات أصلية ومتوافقة لجميع أنواع الطابعات", "Original and compatible toner & ink for all printers") },
        { image: printerPlotter, name: t("بلوتر طباعة كبيرة", "Large Format Plotter"), desc: t("طابعة بلوتر للمخططات الهندسية والبوسترات بأحجام كبيرة", "Plotter for engineering plans and large-format posters") },
        { image: printer3d, name: t("طابعة ثلاثية الأبعاد", "3D Printer"), desc: t("طابعة 3D لطباعة النماذج والقطع البلاستيكية بدقة عالية", "3D printer for high-precision models and plastic parts") },
      ],
    },
  ];

  return (
    <section id="products" className="section-padding bg-gradient-dark relative overflow-hidden">
      <SectionOrbs variant="products" />
      <div className="container mx-auto max-w-7xl" ref={ref}>
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-block text-sm font-semibold text-primary tracking-wider mb-4"
          >
            {t("— أفضل العلامات التجارية —", "— Top Brands —")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            <span className="text-gradient">{t("منتجاتنا", "Our Products")}</span> {t("المتميزة", "Premium")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="section-subtitle"
          >
            {t("نوفر أحدث المنتجات من أفضل العلامات التجارية العالمية في مجال الأمن والاتصالات", "We provide the latest products from top global brands in security and communications")}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 line-gradient mx-auto mt-6 rounded-full"
          />
        </div>

        <Tabs defaultValue="hikvision" dir="rtl">
          <TabsList className="w-full flex-wrap justify-center mb-12 bg-secondary/30 backdrop-blur-sm p-2 h-auto gap-1.5 rounded-2xl border border-border/30">
            {brands.map((brand) => (
              <TabsTrigger
                key={brand.id}
                value={brand.id}
                className="px-5 py-2.5 text-sm font-bold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
              >
                {brand.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {brands.map((brand) => (
            <TabsContent key={brand.id} value={brand.id}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {brand.products.map((product, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group premium-card card-shine !p-0 overflow-hidden !rounded-2xl"
                  >
                    <div className="aspect-square overflow-hidden bg-secondary/30">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 border-t border-border/30">
                      <h3 className="text-sm font-bold text-foreground mb-1">{product.name}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{product.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsSection;
