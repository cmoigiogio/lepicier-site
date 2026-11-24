import type { ImageMetadata } from "astro";
import devanture from "../assets/photos/devanture.jpg";
import epicerie from "../assets/photos/epicerie.jpg";
import salleLanternes from "../assets/photos/salle-lanternes.jpg";
import alcove from "../assets/photos/alcove.jpg";
import cocktailsTiki from "../assets/photos/cocktails-tiki.jpg";
import lanternesNuit from "../assets/photos/lanternes-nuit.jpg";
import murRouge from "../assets/photos/mur-rouge.jpg";
import lampeOrientale from "../assets/photos/lampe-orientale.jpg";
import lanternesCouleurs from "../assets/photos/lanternes-couleurs.jpg";
import panneauStop from "../assets/photos/panneau-stop.jpg";
import statueDoree from "../assets/photos/statue-doree.jpg";
import mosaique from "../assets/photos/mosaique.jpg";
import cocktailVert from "../assets/photos/cocktail-vert.jpg";
import cocktailEclaboussure from "../assets/photos/cocktail-eclaboussure.jpg";
import houmousCocktail from "../assets/photos/houmous-cocktail.jpg";
import serviceVerseuse from "../assets/photos/service-verseuse.jpg";

export type Photo = { src: ImageMetadata; alt: string };

export const photos = {
  devanture: { src: devanture, alt: "La devanture de L'Épicier la nuit, vitrine d'épicerie éclairée et enseigne rouge" },
  epicerie: { src: epicerie, alt: "Les rayonnages bleus de l'épicerie, sol en mosaïque" },
  salleLanternes: { src: salleLanternes, alt: "La salle du bar sous un plafond de lanternes colorées" },
  alcove: { src: alcove, alt: "Une alcôve avec table lumineuse et fauteuils suspendus en rotin" },
  cocktailsTiki: { src: cocktailsTiki, alt: "Deux cocktails servis dans des mugs tiki sculptés" },
  lanternesNuit: { src: lanternesNuit, alt: "Lanternes orientales allumées en verre coloré" },
  murRouge: { src: murRouge, alt: "Mur rouge couvert de cadres et de portraits sous des lampes colorées" },
  lampeOrientale: { src: lampeOrientale, alt: "Lampe orientale en laiton posée sur le comptoir" },
  lanternesCouleurs: { src: lanternesCouleurs, alt: "Suspensions en verre aux couleurs vives" },
  panneauStop: { src: panneauStop, alt: "Panneau stop bilingue français-arabe utilisé comme plateau de table" },
  statueDoree: { src: statueDoree, alt: "Statue dorée devant une photo nocturne d’une mosquée et d’un clocher" },
  mosaique: { src: mosaique, alt: "Détail du sol en mosaïque" },
  cocktailVert: { src: cocktailVert, alt: "Cocktail vert mousseux surmonté d’une feuille de basilic, sur un comptoir en onyx" },
  cocktailEclaboussure: { src: cocktailEclaboussure, alt: "Éclaboussure de mousse au-dessus d’un cocktail vert, une feuille en plein vol" },
  houmousCocktail: { src: houmousCocktail, alt: "Cocktail en coupe tenu à la main, houmous et pain libanais sur une table panneau stop" },
  serviceVerseuse: { src: serviceVerseuse, alt: "Boisson versée d’une verseuse rouge dans une petite tasse orientale décorée" },
} satisfies Record<string, Photo>;

/** Photos mises en avant en haut de la galerie : la façade, puis le shooting pro. */
export const featured: Photo[] = [
  photos.devanture,
  photos.cocktailVert,
  photos.cocktailEclaboussure,
  photos.houmousCocktail,
  photos.serviceVerseuse,
];

/** Order used on the gallery page (featured first, then the masonry). */
export const gallery: Photo[] = [
  ...featured,
  photos.salleLanternes,
  photos.cocktailsTiki,
  photos.epicerie,
  photos.lanternesNuit,
  photos.alcove,
  photos.murRouge,
  photos.lampeOrientale,
  photos.lanternesCouleurs,
  photos.panneauStop,
  photos.statueDoree,
  photos.mosaique,
];
