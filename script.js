const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hello, I'm",
        hero_title: "Software Engineer",
        about_title: "About Me",
        about_desc: "I am a passionate Software Engineer dedicated to building high-quality, scalable, and user-centric applications. With a strong foundation in modern web technologies, I love transforming complex problems into elegant solutions.",
        skills_title: "My Skills",
        skill_html: "HTML5",
        skill_css: "CSS3",
        skill_js: "JavaScript",
        skill_bootstrap: "Bootstrap",
        projects_title: "My Projects",
        project_1_title: "E-Commerce Platform",
        project_1_desc: "A full-featured e-commerce platform with seamless payment integration and responsive design.",
        project_2_title: "Portfolio Website",
        project_2_desc: "A modern, multilingual personal portfolio to showcase my skills and projects.",
        project_3_title: "Task Management App",
        project_3_desc: "A comprehensive task tracker with real-time updates and collaborative features.",
        btn_demo: "View Demo",
        contact_title: "Get In Touch",
        contact_desc: "Feel free to reach out to me for collaborations, opportunities, or just to say hi!",
        footer_rights: "All Rights Reserved."
    },
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_contact: "Contact",
        hero_greeting: "Bonjour, je suis",
        hero_title: "Ingénieure Logiciel",
        about_title: "À Propos de Moi",
        about_desc: "Je suis une ingénieure logiciel passionnée, dédiée à la création d'applications de haute qualité, évolutives et centrées sur l'utilisateur. Avec une solide base dans les technologies web modernes, j'aime transformer des problèmes complexes en solutions élégantes.",
        skills_title: "Mes Compétences",
        skill_html: "HTML5",
        skill_css: "CSS3",
        skill_js: "JavaScript",
        skill_bootstrap: "Bootstrap",
        projects_title: "Mes Projets",
        project_1_title: "Plateforme E-Commerce",
        project_1_desc: "Une plateforme e-commerce complète avec une intégration de paiement fluide et un design adaptatif.",
        project_2_title: "Site Web Portfolio",
        project_2_desc: "Un portfolio personnel moderne et multilingue pour mettre en valeur mes compétences et projets.",
        project_3_title: "App de Gestion de Tâches",
        project_3_desc: "Un outil complet de suivi de tâches avec des mises à jour en temps réel et des fonctionnalités collaboratives.",
        btn_demo: "Voir la Démo",
        contact_title: "Contactez-Moi",
        contact_desc: "N'hésitez pas à me contacter pour des collaborations, des opportunités, ou simplement pour dire bonjour !",
        footer_rights: "Tous droits réservés."
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "نبذة عني",
        nav_skills: "المهارات",
        nav_projects: "المشاريع",
        nav_contact: "اتصل بي",
        hero_greeting: "مرحباً، أنا",
        hero_title: "مهندسة برمجيات",
        about_title: "نبذة عني",
        about_desc: "أنا مهندسة برمجيات شغوفة ومكرسة لبناء تطبيقات عالية الجودة وقابلة للتطوير تركز على المستخدم. بفضل أساسي القوي في تقنيات الويب الحديثة، أحب تحويل المشاكل المعقدة إلى حلول أنيقة.",
        skills_title: "مهاراتي",
        skill_html: "HTML5",
        skill_css: "CSS3",
        skill_js: "JavaScript",
        skill_bootstrap: "Bootstrap",
        projects_title: "مشاريعي",
        project_1_title: "منصة تجارة إلكترونية",
        project_1_desc: "منصة تجارة إلكترونية كاملة الميزات مع تكامل سلس للدفع وتصميم متجاوب.",
        project_2_title: "موقع ملف شخصي",
        project_2_desc: "ملف شخصي حديث ومتعدد اللغات لعرض مهاراتي ومشاريعي.",
        project_3_title: "تطبيق إدارة المهام",
        project_3_desc: "متتبع مهام شامل مع تحديثات في الوقت الفعلي وميزات تعاونية.",
        btn_demo: "عرض حي",
        contact_title: "ابقى على تواصل",
        contact_desc: "لا تتردد في التواصل معي للتعاون أو الفرص أو مجرد إلقاء التحية!",
        footer_rights: "جميع الحقوق محفوظة."
    }
};

function changeLanguage(lang) {
    // Save language in local storage
    localStorage.setItem('portfolioLang', lang);

    // Update texts
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update layout direction
    const html = document.documentElement;
    if (lang === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', lang);
    }

    // Update current language display in navbar
    const langNames = { en: 'EN', fr: 'FR', ar: 'عربي' };
    document.getElementById('currentLang').textContent = langNames[lang];
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('portfolioLang') || 'en';
    changeLanguage(savedLang);
});
