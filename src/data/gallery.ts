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
} satisfies Record<string, Photo>;

/** Order used on the gallery page. */
export const gallery: Photo[] = [
  photos.devanture,
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
