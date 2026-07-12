# Syrine BEN ANAYA — Portfolio

Site portfolio personnel présentant mon profil de Software Engineer, mes compétences techniques et mes projets récents.

**🔗 Démo en ligne :** [portfolio-syrine-ben-anaya.vercel.app](https://portfolio-syrine-ben-anaya.vercel.app/)

---

## ✨ Aperçu

Portfolio one-page, responsive et multilingue, conçu pour présenter un profil de développeuse Full-Stack (React, NestJS, PHP, bases de données SQL/NoSQL) avec une identité visuelle soignée : palette violet/menthe/or, typographies Fraunces + Inter + JetBrains Mono, et animations fluides au scroll.

## 🚀 Fonctionnalités

- **🌍 Multilingue (EN / FR / AR)** — traduction dynamique du contenu via `data-i18n`, avec bascule RTL automatique pour l'arabe.
- **🌗 Mode clair / sombre** — thème persistant (localStorage), transition douce entre les deux palettes.
- **🎬 Animations au scroll** — apparition progressive des sections via `IntersectionObserver` (`reveal` / `reveal-scale`).
- **⌨️ Effet "typewriter"** — rôle professionnel qui s'écrit et se réécrit dans le hero.
- **🖥️ Fenêtre de code animée** — mini éditeur de code stylisé avec coloration syntaxique et curseur clignotant.
- **🃏 Cartes projets en 3D tilt** — effet de profondeur au survol.
- **📊 Barres de compétences animées** — remplissage progressif déclenché au scroll.
- **🔢 Compteurs animés** — statistiques du hero (projets livrés, technologies, langues).
- **📱 Design entièrement responsive** — adapté mobile / tablette / desktop.
- **♿ Accessibilité** — respect de `prefers-reduced-motion` pour désactiver les animations si nécessaire.

## 🛠️ Stack technique

| Catégorie | Technologies |
|---|---|
| Structure | HTML5 sémantique |
| Style | CSS3 (variables CSS, Grid, Flexbox), Bootstrap 5.3.2 |
| Interactivité | JavaScript vanilla (ES6+) |
| Icônes | Font Awesome 6.4.2 |
| Typographies | Google Fonts — Fraunces, Inter, JetBrains Mono |
| Déploiement | Vercel |

> Projet **statique**, sans framework ni étape de build — un seul fichier `index.html` autonome.

## 📁 Structure du projet

```
portfolio-syrine-ben-anaya/
├── index.html          # Page unique : structure, styles et scripts
└── assets/
    ├── meditex.png
    ├── carwash.png
    ├── gravity.png
    ├── lush.png
    ├── cristal.png
    └── zakat.png
```

## 📂 Sections

1. **Hero** — présentation, rôle animé, CTA, réseaux sociaux, statistiques
2. **About** — bio, formation (diplôme d'ingénieur, licence), langues parlées
3. **Skills** — Frontend, Backend, Bases de données, DevOps & Outils
4. **Projects** — 6 projets mis en avant avec stack technique et lien démo
5. **Contact** — email, WhatsApp, LinkedIn, GitHub

## 🧩 Projets présentés

| Projet | Description | Stack |
|---|---|---|
| Muscat Meditex | Site vitrine bilingue pour un fournisseur d'uniformes | PHP, MySQL, Bootstrap |
| Car Wash Station | Site complet avec panneau admin et intégration WhatsApp | PHP, PDO/MySQL |
| GravityCore | ERP monolithique modulaire | React + Vite, NestJS, Neon DB |
| Lush Boutique | Boutique e-commerce en monorepo | Express 5, Drizzle ORM, TypeScript |
| Cristal ERP | ERP microservices (ventes, RH, paie, monitoring) | React 19, NestJS, MongoDB, Docker/K8s |
| Zakat | Plateforme de gestion et distribution de la Zakat | React, Node.js, MongoDB |

## ⚙️ Installation locale

```bash
git clone https://github.com/Syrine-BEN-ANAYA/portfolio.git
cd portfolio
```

Aucune dépendance à installer — ouvrez simplement `index.html` dans un navigateur, ou servez le dossier avec un serveur local :

```bash
npx serve .
```

## ☁️ Déploiement

Le site est déployé sur **Vercel** en tant que site statique. Chaque push sur la branche principale déclenche un redéploiement automatique.

## 🌐 Ajouter / modifier une langue

Le contenu textuel est centralisé dans l'objet `translations` (`en`, `fr`, `ar`) du script principal. Pour ajouter une langue :

1. Dupliquer un bloc de traduction existant.
2. Traduire chaque clé.
3. Ajouter l'option correspondante dans le menu déroulant de langue (`#langDropdown`).

## 📬 Contact

- **Email :** syrinebenanayacontact@gmail.com
- **WhatsApp :** +968 91460168
- **LinkedIn :** [Syrine BEN ANAYA](https://www.linkedin.com/in/syrine-ben-anaya-271ab2251/)
- **GitHub :** [Syrine-BEN-ANAYA](https://github.com/Syrine-BEN-ANAYA)

## 📄 Licence

© 2026 Syrine BEN ANAYA. Tous droits réservés.
