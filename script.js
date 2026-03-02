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
    hero_pill: "Student Specializing in Industrial and Energy Systems",
    hero_hi: "Hi, I'm",
    hero_name:"Mona Nashaat",

    hero_subtitle:
      "I work on practical engineering projects in industrial and energy technologies. This portfolio showcases my technical skills and hands-on experience.",
    hero_btn_projects: "View Projects",
    hero_btn_contact: "Contact Me",
    hero_location: "Port Said, Egypt",
    hero_degree: "East Port Said University of Technology",
    profile_role: "Junior Industrial Technician",
    stat_projects: "Projects",
    stat_certificates: "Certificates",
    stat_internships: "Internships",

    about_title: "About Me",
    about_text:
      "I’m a student in Industrial and Energy Technology, interested in practical engineering applications and real-world industrial systems. I enjoy working on technical projects, learning new technologies, and applying theoretical knowledge in hands-on environments.",
    about_highlights: "Highlights",
    hl1: "Participated in practical training in ship operation and maintenance",
    hl2: "Familiar with marine engines and onboard systems",
    hl3: "Committed to safety procedures and teamwork in marine environments",
    about_education: "Education",
    edu1: "East Port Said University of Technology",
    edu1b: "Ship Operation and Maintenance Program",
    edu2: "Expected Graduation: 2027",

    skills_title: "Skills",
    skills_tech: "Technical",
    skills_tools: "Tools",
    skills_soft: "Soft Skills",
    soft1: "Communication",
    soft2: "Problem-solving",
    soft3: "Time management",

    projects_title: "Projects",
    p1_desc: "A practical training project focused on ship engine inspection, maintenance procedures, and troubleshooting basic mechanical issues.",
    p2_desc: "A technical project analyzing safety procedures in industrial or marine environments, including hazard identification and preventive measures.",
    p3_desc: "A hands-on project involving basic electrical or mechanical systems used in industrial and energy environments.",

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

    hero_pill: "طالب متخصص في أنظمة الصناعة والطاقة",
    hero_hi: "مرحبًا، أنا",
    hero_name:"منى نشأت",
    hero_subtitle:
      "أعمل على مشاريع هندسية تطبيقية في مجالات الصناعة وتقنيات الطاقة. يعرض هذا الموقع مهاراتي التقنية وخبرتي العملية.",
    hero_btn_projects: "عرض المشاريع",
    hero_btn_contact: "تواصل معي",
    hero_location: "بورسعيد، مصر",
    hero_degree: "جامعة شرق بورسعيد التكنولوجية",
    profile_role: "تقني صناعي ",
    stat_projects: "المشاريع",
    stat_certificates: "الشهادات",
    stat_internships: "التدريبات",
    

    about_title: "نبذة عني",
    about_text:
      "أنا طالب في جامعة شرق بورسعيد التكنولوجية - برنامج تكنولوجيا صيانة وتشغيل السفن، مهتم بالتطبيقات الهندسية العملية والأنظمة الصناعية الواقعية. أستمتع بالعمل على المشاريع التقنية، وتعلم التقنيات الحديثة، وتطبيق المعرفة النظرية في بيئات عملية.",
    about_highlights: "أبرز النقاط",
    hl1: "المشاركة في تدريب عملي في تشغيل وصيانة السفن",
    hl2: "الإلمام بالمحركات البحرية وأنظمة السفن",
    hl3: "الالتزام بإجراءات السلامة والعمل الجماعي في البيئات البحرية",
    about_education: "التعليم",
    edu1: "جامعة شرق بورسعيد التكنولوجية",
    edu1b: "برنامج تكنولوجيا تشغيل وصيانة السفن",
    edu2: "متوقع التخرج: 2027",

    skills_title: "المهارات",
    skills_tech: "المهارات التقنية",
    skills_tools: "الأدوات",
    skills_soft: "المهارات الشخصية",
    soft1: "التواصل",
    soft2: "حل المشكلات",
    soft3: "إدارة الوقت",

    projects_title: "المشاريع",
    p1_desc: "مشروع تدريب عملي يركز على فحص محركات السفن وإجراءات الصيانة واستكشاف الأعطال الميكانيكية الأساسية.",
    p2_desc: "مشروع تقني لتحليل إجراءات السلامة في البيئات الصناعية أو البحرية، بما في ذلك تحديد المخاطر ووسائل الوقاية.",
    p3_desc: "مشروع تطبيقي يتضمن أنظمة كهربائية أو ميكانيكية أساسية مستخدمة في البيئات الصناعية ومجالات الطاقة.",

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
