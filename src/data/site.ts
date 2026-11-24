/** Source: https://www.lepicier.paris/infos-pratiques (relevé le 2026-11-24). */
export const site = {
  name: "L'Épicier",
  tagline: "Speakeasy · Paris 3e",
  address: { street: "24 Rue Notre-Dame-de-Nazareth", postalCode: "75003", city: "Paris" },
  email: "vinci@outlook.fr",
  reservationSubject: "Réservation Épicier",
  instagram: { handle: "lepicier_paris", url: "https://www.instagram.com/lepicier_paris/" },
  privatisation: "Sur demande",
  hours: [
    { days: "Mardi · Mercredi · Jeudi", hours: "19 h – 1 h", dow: [2, 3, 4], open: "19:00", close: "01:00" },
    { days: "Vendredi · Samedi", hours: "18 h – 2 h", dow: [5, 6], open: "18:00", close: "02:00" },
  ],
  // Tel quel sur le site actuel — à confirmer avec l'établissement.
  hoursNote: { days: "Dimanche", text: "Réouverture début septembre" },
} as const;

export const mapsQuery = encodeURIComponent(`${site.address.street}, ${site.address.postalCode} ${site.address.city}`);
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
export const reservationHref = `mailto:${site.email}?subject=${encodeURIComponent(site.reservationSubject)}`;
