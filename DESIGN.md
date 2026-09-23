# Design du portfolio

## Product context
- Produit : portfolio personnel d'Alexis Tatarkovic.
- Public : recruteurs, équipes techniques et clients potentiels.
- Objectif : comprendre rapidement le profil, les compétences, les projets et le parcours, puis prendre contact.
- Ton : éditorial, sobre, précis.

## Design principles
- Les informations personnelles et les réalisations passent avant les éléments décoratifs.
- Chaque section a un titre clair ; les badges d'introduction redondants sont évités.
- Les contrôles actifs restent lisibles dans les deux thèmes.

## Visual identity
- Direction : « Obsidian Editorial & Warm Amber », avec surfaces calmes et typographie affirmée.
- Orange de marque unique dans les deux thèmes : `#F59E0B`.
- Les contrôles principaux ont un fond sombre et un texte orange pour garder le contraste ; le texte libre est sombre sur fond clair.
- Éviter les cartes imbriquées, les statuts répétés et les valeurs d'activité fictives.

## Tokens
| Token | Valeur | Usage |
|---|---|---|
| `--accent` | `#F59E0B` | Accent de marque unique |
| `--accent-text` | `#F59E0B` sombre / `#15161B` clair | Texte lisible selon le fond |
| `--control-bg` | `#14161F` | Fond des boutons et filtres actifs |
| `--bg-main` | `#0C0D12` sombre / `#F7F6F0` clair | Fond |
| `--font-display` | Plus Jakarta Sans | Titres |
| `--font-sans` | Plus Jakarta Sans | Contenu |

## Components
| Component | Règle | Reuse path |
|---|---|---|
| Bouton primaire | Fond sombre, texte et bordure orange, focus visible | `src/index.css`, `src/components/ui/Button.tsx` |
| Filtre actif | Même fond et contraste que le bouton primaire | `src/index.css` |
| Sections | Titre direct et contenu utile sans badge introductif | `src/components/sections/` |
| Fiche projet | Surface et textes suivent le thème ; lien externe orange sur fond sombre | `src/components/ui/projects/` |

## Layout rules
- Colonnes adaptées au contenu, empilées sur mobile.
- Sections accessibles avec une marge de défilement sous le header.

## Interaction and motion
- Les survols gardent le contraste du texte ; les mouvements restent légers.
- Respecter `prefers-reduced-motion` pour les animations continues.

## Accessibility
- Contraste WCAG AA pour le texte et les contrôles.
- Focus clavier visible sur les liens et boutons interactifs.

## Maintenance notes
- Mise à jour : 23 septembre 2026.
- Actualiser ce document lorsque les tokens ou règles réutilisables changent.
