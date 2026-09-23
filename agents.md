# Documentation Agents

## 1. Objectif Général
Ce projet est le portfolio personnel d'Alexis Tatarkovic, conçu pour présenter son profil de développeur full-stack, ses compétences, ses projets et son parcours. Il met l'accent sur la performance maximale, l'accessibilité WCAG, et une direction artistique éditoriale signature haut de gamme ("Obsidian Editorial & Warm Amber") inspirée de références contemporaines (Dribbble EM Dark Minimalist, COZYDIADORA, Madison).
Le site reste centré sur son profil de développeur (les projets d'agence plus complets sont redirigés vers atcode.fr).
Le projet est adapté SEO. Penser à mettre à jour ce fichier agents.md lors de modifications de structure.

## 2. Technologies
- **React 19** : Framework principal pour la création d’interfaces utilisateur.
- **TypeScript** : Typage statique strict pour une haute fiabilité du code.
- **Vite** : Outil de build moderne et ultra-rapide.
- **Tailwind CSS v4** : Framework CSS utilitaire avec design tokens CSS natifs.
- **Lucide React** : Iconographie vectorielle légère et cohérente.
- **ESLint** : Linting et respect des conventions de code.

## 3. Structure des Dossiers
```
public/                # Fichiers statiques (images, favicons, etc.)
src/
  assets/              # Ressources locales (polices Plus Jakarta Sans et JetBrains Mono WOFF2)
  components/          # Composants modulaires
    layout/            # Navbar flottante en îlot, Footer éditorial minimaliste
    sections/          # Sections du site :
                       # - Hero (titrage monumental épuré, présentation et liens directs)
                       # - TechMarquee (double ruban de défilement fluide)
                       # - BentoProfile (portrait et biographie concise)
                       # - Skills (six familles de compétences : langages, frameworks, bases de données, paiement, performance, SEO)
                       # - Projects (cartes COZYDIADORA avec filtres Tous/Pro/Perso/Académique et modales)
                       # - Timeline (table architecturale du parcours et expériences)
                       # - Networks (cartes réseaux et calendrier GitHub alimenté par API publique)
                       # - Contact (prise de contact directe pour freelance et redirection atcode.fr)
    ui/                # Composants UI (MaltIcon, modales projets, boutons tactiles)
  hooks/               # Hooks personnalisés (useScrollReveal avec IntersectionObserver)
  data/                # Données structurées (experiences, profile, projects, navLinks)
  App.tsx              # Composant racine assemblant les sections
  main.tsx             # Point d’entrée de l’application
  index.css            # Design tokens, variables CSS, thèmes sombre et clair, animations
```

## 4. Commandes Utiles
- **Dev** : `npm run dev` — Démarre le serveur de développement Vite.
- **Build** : `npm run build` — Compilation TypeScript et build de production (`tsc -b && vite build`).
- **Lint** : `npm run lint` — Analyse du code avec ESLint.

## 5. Style de Code & Direction Artistique
- **Direction Artistique** : "Obsidian Editorial & Warm Amber" :
  - Fond riche et feutré `#0C0D12` (sombre) / `#F7F6F0` (clair).
  - Orange de marque signature : uni et franc sans dégradé (`#F59E0B` en thème sombre sur fond obsidian, et ajusté à `#D97706` en thème clair pour une densité, un contraste et une lisibilité parfaits sur fond ivoire/blanc).
  - Boutons primaires en orange plein `#D97706` avec texte blanc `#FFFFFF` en thème clair pour une lisibilité maximale, et fond sombre avec bordure/texte `#F59E0B` en thème sombre.
  - Typographie naturelle : `Plus Jakarta Sans` sans majuscules forcées artificielles, pas d'esperluettes inutiles ("et" privilégié), suppression des tirets de type IA.
- **Lisibilité, Animations & Micro-interactions** :
  - Animations d'entrée douces et fluides au scroll via `useScrollReveal` (IntersectionObserver sans dépendance externe avec gestion native du `prefers-reduced-motion` et transition soignée `cubic-bezier(0.22, 1, 0.36, 1)`).
  - Section Compétences architecturale haut de gamme : cartes surélevées avec liseré ambre supérieur et halo subtil au survol (transitions 500ms ease-out), numérotation monospace `// 01`, accroches éditoriales précises et badges de technologies uniformes et élégants sans surcharge de couleur.
  - Section Projets : grille responsive à 3 projets par ligne sur desktop (2 sur tablette, 1 sur mobile), cartes tactiles et épurées avec modales de détail, filtres par catégorie harmonisés.
  - Header îlot flottant avec bascule de thème sombre / clair.
  - Copie d'email en un clic avec feedback immédiat.
  - Calendrier GitHub responsive alimenté par `github-contributions-api.jogruber.de/v4/ShAd-x?y=last` (calendrier public GitHub, cache d'une heure), avec date, nombre exact et état d'erreur explicite.
  - Modales de détail pour chaque projet.
  - Cadrage photo de profil soigné (`object-[center_15%]`) avec marge au-dessus des cheveux.
- **Responsive & Défilement** :
  - Conception 100% adaptative mobile, tablette et grand écran.
  - `scroll-margin-top` sur toutes les sections pour éviter le chevauchement sous la barre de navigation flottante.
- Respect strict des conventions TypeScript et React 19 (zéro avertissement lint/build).

## 6. SEO & Accessibilité
- Balises méta complètes (`title`, `description`, `canonical`, `robots`, Open Graph, Twitter Cards).
- Données structurées JSON-LD (`Person`).
- Cibles tactiles adaptées, contrastes conformes WCAG, attributs sémantiques et `aria-*`.

## 7. Sécurité & Performance
- Typage strict TypeScript, zéro exécution client non sécurisée.
- Optimisation continue des Core Web Vitals (LCP < 1.2s, CLS = 0, INP optimal).
