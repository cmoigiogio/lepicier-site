# L'Épicier — site vitrine

Refonte du site [lepicier.paris](https://www.lepicier.paris) (speakeasy, Paris 3e) en **Astro 7 + Tailwind CSS 4**.
Site 100 % statique : aucune base de données, aucun serveur, hébergement Vercel.

## Pages

| URL | Contenu |
| --- | --- |
| `/` | Accueil : hero, expérience, cocktails signatures, aperçu galerie, horaires + plan |
| `/carte` | Carte complète en HTML (FR/EN), navigation par sections, PDF téléchargeable |
| `/galerie` | 12 photos, visionneuse plein écran (clavier, swipe) |
| `/infos-pratiques` | Adresse, contact, horaires, privatisation, plan |

Les URLs reprennent celles du site actuel : le basculement du domaine ne casse aucun lien.

## Modifier le contenu

- Horaires, adresse, e-mail, Instagram : `src/data/site.ts`
- Carte : `src/data/menu.ts` (+ remplacer `public/menu-lepicier.pdf`)
- Photos : `src/assets/photos/` et `src/data/gallery.ts` (texte alternatif obligatoire)

Les images sont optimisées au build (WebP, tailles responsives). Les photos sources ont été
réduites à 2400 px et **débarrassées de leurs métadonnées EXIF** (une contenait des coordonnées GPS).

## Développement

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sortie dans dist/
```

## Mise en ligne

- Vercel détecte Astro automatiquement (build `npm run build`, sortie `dist`).
- **Indexation désactivée par défaut** (`noindex`) pour ne pas concurrencer le site actuel.
  Le jour du basculement sur `lepicier.paris`, ajouter dans Vercel les variables :
  - `SITE_URL=https://www.lepicier.paris` (URL canonique, Open Graph)
  - `INDEXABLE=1` (autorise l'indexation)
- La carte Google Maps ne se charge qu'au clic (aucun cookie tiers avant).
