Syrine BEN ANAYA — Portfolio
Live Demo: portfolio-syrine-ben-anaya.vercel.app

A responsive, multilingual, single‑page portfolio website that showcases my profile as a Full‑Stack Software Engineer, technical skills, and recent projects. The design features a refined colour palette (purple, mint, orange), clean typography (Fraunces + Inter + JetBrains Mono), and smooth scroll‑triggered animations.

✨ Features
🌍 Multilingual – Content is dynamically translated between English, French, and Arabic via data-i18n attributes; right‑to‑left (RTL) layout automatically activates for Arabic.

🌗 Dark / Light Mode – Persistent theme preference stored in localStorage with a smooth colour transition.

🎬 Scroll‑Reveal Animations – Sections fade and scale into view using IntersectionObserver (classes reveal / reveal-scale).

⌨️ Typewriter Effect – The professional role in the hero section is dynamically typed and cycled.

🖥️ Animated Code Window – A stylised mini code editor with syntax highlighting and a blinking cursor.

🃏 3D Tilt Project Cards – Cards respond to mouse movement with a subtle depth effect.

📊 Animated Skill Bars – Progress bars fill when they enter the viewport.

🔢 Animated Counters – Statistics (projects delivered, technologies, languages) increment on scroll.

📱 Fully Responsive – Optimised for mobile, tablet, and desktop screens.

♿ Accessibility – Respects prefers-reduced-motion to disable animations when needed.

🛠️ Tech Stack
Category	Technologies
Structure	Semantic HTML5
Styling	CSS3 (Custom properties, Grid, Flexbox) + Bootstrap 5.3.2
Interactivity	Vanilla JavaScript (ES6+)
Icons	Font Awesome 6.4.2
Fonts	Google Fonts – Fraunces, Inter, JetBrains Mono
Deployment	Vercel
Pure static site – no build step, no framework. Everything lives in a single index.html file.

📁 Project Structure
text
portfolio-syrine-ben-anaya/
├── index.html          # Single page: HTML, CSS and JavaScript
└── assets/
    ├── meditex.png
    ├── carwash.png
    ├── gravity.png
    ├── lush.png
    ├── cristal.png
    └── zakat.png
📂 Sections
Hero – Introduction, animated role, call‑to‑action, social links, key statistics.

About – Professional bio, education (Engineering degree, Bachelor’s), spoken languages.

Skills – Frontend, Backend, Databases, DevOps & Tools – presented with animated bars and tags.

Projects – Six featured projects, each with tech stack and live demo link.

Contact – Email, WhatsApp, LinkedIn, GitHub.

🧩 Featured Projects
Project	Description	Stack
Muscat Meditex	Bilingual showcase website for a uniform supplier	PHP, MySQL, Bootstrap
Car Wash Station	Full‑featured site with admin panel and WhatsApp integration	PHP, PDO/MySQL
GravityCore	Modular monolith ERP	React + Vite, NestJS, Neon DB
Lush Boutique	E‑commerce store in a monorepo	Express 5, Drizzle ORM, TypeScript
Cristal ERP	Microservices ERP (sales, HR, payroll, monitoring)	React 19, NestJS, MongoDB, Docker/K8s
Zakat	Zakat management and distribution platform	React, Node.js, MongoDB
⚙️ Local Setup
bash
git clone https://github.com/Syrine-BEN-ANAYA/portfolio.git
cd portfolio
No dependencies to install – just open index.html in your browser. For a local server:

bash
npx serve .
☁️ Deployment
The site is deployed on Vercel as a static website. Every push to the main branch automatically triggers a new deployment.

🌐 Adding / Modifying a Language
All text content is centralised in the translations object (en, fr, ar) inside the main script. To add a new language:

Duplicate an existing translation block.

Translate each key.

Add the corresponding option in the language dropdown (#langDropdown).

📬 Contact
Email: syrinebenanayacontact@gmail.com

WhatsApp: +968 91460168

LinkedIn: Syrine BEN ANAYA

GitHub: Syrine-BEN-ANAYA

📄 License
© 2026 Syrine BEN ANAYA. All rights reserved.

