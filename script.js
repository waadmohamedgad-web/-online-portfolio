// Portfolio Starter JS (dark mode + simple language toggle + mailto form + mobile menu)

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const THEME_KEY = "portfolio_theme";
const LANG_KEY = "portfolio_lang";

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  const icon = theme === "light" ? "🌙" : "☀️";
  const t1 = $("#themeToggle");
  const t2 = $("#themeToggleMobile");
  if (t1) t1.textContent = icon;
  if (t2) t2.textContent = icon + (theme === "light" ? "" : "");
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
}

const I18N = {
  en: {
    portfolio:"Porfolio",
    Download_cv:"C.V.",
    hero_pill: "Student Specializing in tourism and travel technology",
    hero_hi: "Hi, I'm",
    hero_name:"waad Mohamed ",

    hero_subtitle:
      "Certified Travel & Tourism Trainer (Amadeus) | Expert in Innovative Travel Experiences & Inclusive Tourism",
    hero_btn_projects: "View Projects",
    hero_btn_contact: "Contact Me",
    hero_location: "cairo, Egypt",
    hero_degree: "East Port Said University of Technology",
    profile_role: "senior in industrial tourism and travel",
    stat_projects: "Projects",
    stat_certificates: "Certificates",
    stat_internships: "Internships",

    about_title: "About Me",
    about_text:
    
      "A Certified Travel & Tourism Trainer accredited by Amadeus Egypt, with extensive field experience in Airport Operations and Travel Agencies. I specialize in designing exclusive travel programs and delivering distinguished customer service. My expertise combines technical GDS proficiency with strategic marketing to elevate the travel and tourism experience. Beyond operations, I am a passionate innovator dedicated to Accessible Tourism and community empowerment, through projects like 'Smart Sensory Vision' for the visually impaired and the 'Sinawy' initiative for local heritage.",
    about_highlights: "Highlights",
    hl1: "training in blue sky travel",
    hl2: "cairo international airport",
    hl3: "new jessery travel",
    hl4: "egypt air training academy",
    hl5:"Egyptian Ministry of Civil Aviation",

    about_education: "Education",
    edu1: "East Port Said University of Technology",
    edu1b: "tourism and travel Program",
    edu2: "Expected Graduation: 2026",

    skills_title: "Skills",
    skills_tech: "Technical",
    skills_tools: "Tools",
    skills_soft: "Soft Skills",
    soft1: "Communication",
    soft2: "Problem-solving",
    soft3: "Time management",

    projects_title: "Projects",
    p1_desc: "(2nd Year Graduation Project) A graduation project dedicated to empowering the local community by integrating artisans into the tourism sector. The project focuses on highlighting hidden tourist gems and showcasing authentic Sinai traditions and customs as a core part of the travel experience. This initiative reflects my expertise in sustainable planning and my ability to innovate tourism solutions that balance economic growth with the preservation of cultural heritage.",
    p2_desc: "(4nd Year Graduation Project) An innovative technological project designed to empower visually impaired travelers to explore Egyptian monuments independently. The system features 'Smart Glasses and Headphones' that provide detailed audio narration of historical artifacts, paired with a 'Smart White Cane' for seamless navigation within museums. This project reflects my commitment to Accessible Tourism and my ability to integrate modern technology into the travel industry to ensure an inclusive experience for all.",
   

    contact_title: "Contact",
    contact_quick: "Quick Links",
    form_name: "Your name",
    form_email: "Your email",
    form_message: "Message",
    form_send: "Send",

    back_to_top: "Back to top ↑",
  },

  ar: {
    portfolio:"ملف الأعمال الشخصي",
    Download_cv:"السيرة الذاتية",

    hero_pill:" طالب متخصص في تكنولوجية السياحة والسفر ",
    hero_hi: "مرحبًا، أنا",
    hero_name:"وعد محمد ",
    hero_subtitle:
      "مدرب معتمد في مجال السفر والسياحة (أماديوس) | خبير في تجارب السفر المبتكرة والسياحة الشاملة.",
    hero_btn_projects: "عرض المشاريع",
    hero_btn_contact: "تواصل معي",
    hero_location: "القاهرة ، مصر",
    hero_degree: "جامعة شرق بورسعيد التكنولوجية",
    profile_role: "تقني سياحة وسفر  ",
    stat_projects: "المشاريع",
    stat_certificates: "الشهادات",
    stat_internships: "التدريبات",
    

    about_title: "نبذة عني",
    about_text:
      "مدرب معتمد في مجال السفر والسياحة من شركة أماديوس مصر، أتمتع بخبرة ميدانية واسعة في عمليات المطارات ووكالات السفر. أتخصص في تصميم برامج سفر مميزة وتقديم خدمة عملاء استثنائية. تجمع خبرتي بين الكفاءة التقنية لأنظمة التوزيع العالمية (GDS) والتسويق الاستراتيجي للارتقاء بتجربة السفر والسياحة. إضافةً إلى العمليات التشغيلية، فأنا مبتكر شغوف ملتزم بالسياحة المُيسّرة وتمكين المجتمعات، من خلال مشاريع مثل 'الرؤية الحسية الذكية' للمكفوفين وضعاف البصر، ومبادرة 'سناوي' للتراث المحلي." ,
    about_highlights: "أبرز النقاط",
    hl1: "المشاركة في تدريب عملي في شركة بلو سكاي للسياحة  ",
    hl2: "مطار القاهرة الدولي ",
    hl3: "شركة نيو جيرسي للسياحة",
    hl4: "اكاديميةمصر للطيران ",
    hl5: "وزراة الطيران المدني المصرية",  
    about_education: "التعليم",
    edu1: "جامعة شرق بورسعيد التكنولوجية",
    edu1b: "برنامج تكنولوجيا  سياحة وسفر ",
    edu2: "متوقع التخرج: 2027",

    skills_title: "المهارات",
    skills_tech: "المهارات التقنية",
    skills_tools: "الأدوات",
    skills_soft: "المهارات الشخصية",
    soft1: "التواصل",
    soft2: "حل المشكلات",
    soft3: "إدارة الوقت",

    projects_title: "المشاريع",
    p1_desc: " مشروع تخرج السنة الثانية: مشروع تخرج يهدف إلى تمكين المجتمع المحلي من خلال دمج الحرفيين في قطاع السياحة. يركز المشروع على إبراز المواقع السياحية الخفية وعرض التقاليد والعادات الأصيلة في سيناء كجزء أساسي من تجربة السفر. تعكس هذه المبادرة خبرتي في التخطيط المستدام وقدرتي على ابتكار حلول سياحية توازن بين النمو الاقتصادي والحفاظ على التراث الثقافي.",
    p2_desc: " (مشروع تخرج السنة الرابعة) مشروع تقني مبتكر مصمم لتمكين المسافرين ذوي الإعاقة البصرية من استكشاف الآثار المصرية بشكل مستقل. يتضمن النظام نظارات وسماعات ذكية توفر شرحًا صوتيًا مفصلًا للقطع الأثرية التاريخية، بالإضافة إلى عصا بيضاء ذكية لتسهيل التنقل داخل المتاحف. يعكس هذا المشروع التزامي بالسياحة المُيسّرة وقدرتي على دمج التكنولوجيا الحديثة في قطاع السفر لضمان تجربة شاملة للجميع.",

    contact_title: "التواصل",
    contact_quick: "روابط سريعة",
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_message: "الرسالة",
    form_send: "إرسال",

    back_to_top: "العودة إلى الأعلى ↑",



  },
};

function setLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const btn = $("#langToggle");
  const btnM = $("#langToggleMobile");
  const label = lang === "ar" ? "EN" : "AR";
  if (btn) btn.textContent = label;
  if (btnM) btnM.textContent = label;

  localStorage.setItem(LANG_KEY, lang);
}

function toggleLanguage() {
  const current = localStorage.getItem(LANG_KEY) || "en";
  setLanguage(current === "en" ? "ar" : "en");
}

function setupMobileMenu() {
  const burger = $("#burger");
  const menu = $("#mobileMenu");
  if (!burger || !menu) return;

  function closeMenu() {
    menu.hidden = true;
    burger.setAttribute("aria-expanded", "false");
  }

  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    menu.hidden = open;
  });

  $$(".mobileLink").forEach((a) => a.addEventListener("click", closeMenu));
}

function setupContactForm() {
  const form = $("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    // Replace with your real email:
    const to = "you@example.com";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}

function init() {
  // Footer year
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Theme
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  setTheme(savedTheme);
  $("#themeToggle")?.addEventListener("click", toggleTheme);
  $("#themeToggleMobile")?.addEventListener("click", toggleTheme);

  // Language
  const savedLang = localStorage.getItem(LANG_KEY) || "en";
  setLanguage(savedLang);
  $("#langToggle")?.addEventListener("click", toggleLanguage);
  $("#langToggleMobile")?.addEventListener("click", toggleLanguage);

  setupMobileMenu();
  setupContactForm();
}

document.addEventListener("DOMContentLoaded", init);
