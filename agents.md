# Documentation Agents

## 1. Objectif Général
Ce projet est un site web moderne conçu pour présenter un profil professionnel, des expériences, des formations et des projets. Il met l’accent sur la rapidité, l’accessibilité et la simplicité d’utilisation.
Le projet doit être adapté SEO. Penser à mettre à jour le fichiers agents.md lors de modifications de structure.

## 2. Technologies
- **React** : Framework principal pour la création d’interfaces utilisateur.
- **TypeScript** : Typage statique pour une meilleure fiabilité du code.
- **Vite** : Outil de build rapide et moderne.
- **Tailwind CSS** : Framework CSS utilitaire pour le style.
- **ESLint** : Linting et respect des conventions de code.

## 3. Structure des Dossiers
```
public/                # Fichiers statiques (PDF, images)
src/
  assets/              # Ressources (fonts, images)
  components/          # Composants réutilisables
    layout/            # Navbar, Footer
    sections/          # Sections principales (Hero, Projects, Skills, Timeline, Contact)
    ui/                # UI générique (Button, Card, ProfileImage)
  data/                # Données structurées (experiences, formations, profile, projects)
    experiences.ts     # Données des expériences
    formations.ts      # Données des formations
    profile.ts         # Données du profil
    projects.ts        # Données des projets
  App.tsx              # Composant racine
  main.tsx             # Point d’entrée de l’application
  index.css            # Styles globaux
```

## 4. Commandes Utiles
- **Dev** : `npm run dev` — Démarre le serveur de développement.
- **Build** : `npm run build` — Génère la version de production.
- **Lint** : `npm run lint` — Analyse le code avec ESLint.

## 5. Style de Code
- HTML bien indenté, balises sourcées (alt, title, etc.)
- CSS : propriétés organisées par bloc, classes claires, nommage `kebab-case`
- JS : ES6+, `const`/`let`, fonctions arrow là où c’est logique, commentaires pour la logique non triviale
- Utilisation de **ESLint** pour garantir la qualité et la cohérence du code.
- Respect des conventions TypeScript et React.
- Utilisation de Tailwind pour des styles modulaires et maintenables.

## 6. Vue d’Architecture
L’application est structurée autour de composants React modulaires. Les données sont séparées dans le dossier `src/data/` (`experiences.ts`, `formations.ts`, `profile.ts`, `projects.ts`). Les assets sont organisés pour faciliter la maintenance. Les sections du site sont des composants indépendants, favorisant la réutilisabilité et la clarté.

## 7. Sécurité
- Utilisation de TypeScript pour limiter les erreurs.
- Respect des bonnes pratiques React.
- Fichiers statiques servis depuis le dossier public pour éviter les fuites de données sensibles.
