/**
 * Carte reprise du PDF officiel (public/menu-lepicier.pdf, relevé le 2026-11-24).
 * Corrections d'orthographe uniquement (Prosecco, Schweppes, fleur d'oranger…). Prix en € TTC.
 */
export type Item = { name: string; en?: string; fr?: string; desc?: string; price?: string; tag?: string; allergen?: boolean };
export type Group = { title: string; titleEn?: string; price?: string; items: Item[]; note?: string };
export type Section = { id: string; title: string; titleEn: string; intro?: string; groups: Group[] };

export const menu: Section[] = [
  {
    id: "signatures",
    title: "Cocktails de création",
    titleEn: "Signature cocktails",
    intro: "Disponibles sans alcool · Alcohol-free option available",
    groups: [
      {
        title: "Signatures",
        price: "18",
        items: [
          { name: "Black Expresso", fr: "Vodka, liqueur de café, expresso, arak", en: "Vodka, coffee liqueur, espresso, arak" },
          { name: "Call Me Loulou", fr: "Saint Germain, Martini blanc, gin, sirop de lavande, citron", en: "Saint Germain, white Martini, gin, lavender syrup, lemon" },
          { name: "Basilic de ma Téta", tag: "Ma mamie · my grandma", allergen: true, fr: "Gin, sirop de basilic, citron, Saint Germain", en: "Gin, basil syrup, lemon, Saint Germain" },
          { name: "Layali", tag: "Les nuits douces · Velvet nights", fr: "Mezcal, gin, citron vert, sirop de rose", en: "Mezcal, gin, lime, rose syrup" },
          { name: "Rhum Erection", fr: "Rhum ambré, confit de gingembre maison, citron vert, ginger beer", en: "Amber rum, homemade ginger confit, lime, ginger beer" },
        ],
      },
    ],
  },
  {
    id: "incontournables",
    title: "Les incontournables",
    titleEn: "Timeless cocktails",
    groups: [
      {
        title: "Classiques",
        price: "15",
        items: [
          { name: "Old Fashioned", tag: "USA", fr: "Carré de sucre blanc, bourbon, Angostura bitters, écorce d'orange", en: "White sugar cube, bourbon, Angostura bitters, orange peel" },
          { name: "Amaretto Sour", tag: "Italie", allergen: true, fr: "Amaretto, jus de citron, sucre, blanc d'œuf, Angostura bitters", en: "Amaretto, lemon juice, sugar, egg white, Angostura bitters" },
          { name: "French Kiss", tag: "France", allergen: true, fr: "Vodka, liqueur de framboise, jus de citron, sirop de sucre, finition mousseuse (peut contenir de l'albumine)", en: "Vodka, raspberry liqueur, lemon juice, simple syrup, foamy finish (may contain albumin)" },
          { name: "Moscow Mule", tag: "Russie", fr: "Vodka infusée au poivre, jus de citron vert, ginger beer", en: "Pepper-infused vodka, lime juice, ginger beer" },
          { name: "Spicy Margarita", tag: "Mexique", fr: "Tequila infusée au piment oiseau, Cointreau, jus de citron vert, sirop de sucre", en: "Bird's eye chili-infused tequila, Cointreau, lime juice, simple syrup" },
          { name: "Porn Star Martini", tag: "Royaume-Uni", allergen: true, fr: "Vodka, purée de fruit de la passion, liqueur de passion, vanille, shot de Prosecco", en: "Vodka, passion fruit purée, passion fruit liqueur, vanilla, shot of Prosecco" },
          { name: "Negroni", tag: "Italie", fr: "Gin, Campari, vermouth rouge", en: "Gin, Campari, red vermouth" },
          { name: "Mai Tai", tag: "USA", fr: "Rhum blanc, rhum ambré, jus de citron vert, Cointreau, sirop d'orgeat, jus d'ananas", en: "White rum, dark rum, lime juice, Cointreau, orgeat syrup, pineapple juice" },
          { name: "Strawberry Daiquiri", tag: "Cuba", allergen: true, fr: "Rhum blanc, purée de fraise, jus de citron vert, sirop de sucre", en: "White rum, strawberry purée, lime juice, simple syrup" },
          { name: "Caipirinha", tag: "Brésil", fr: "Cachaça, citron vert frais, sucre", en: "Cachaça, fresh lime, sugar" },
        ],
      },
    ],
  },
  {
    id: "sans-alcool",
    title: "Mocktails & shooters",
    titleEn: "Mocktails & shots",
    groups: [
      { title: "Mocktails", items: [{ name: "Selon vos désirs", en: "Your mood, your mix (0 %)", price: "13" }] },
      { title: "Shooters", items: [{ name: "Shot passion" }, { name: "Shot prestige" }] },
    ],
  },
  {
    id: "alcools",
    title: "Alcools",
    titleEn: "Spirits, beer & wine",
    groups: [
      { title: "Bières", titleEn: "Beers · 50 cl", items: [{ name: "Deck and Donohue", fr: "Pression artisanale française", en: "Draught French craft beer", price: "12" }] },
      { title: "Vodka", price: "11", items: [{ name: "Grey Goose", desc: "+2 €" }, { name: "Vodka Redbull", price: "15" }] },
      { title: "Gin", price: "11", items: [{ name: "Citadelle", desc: "+2 €" }, { name: "Hendrick's", desc: "+2 €" }, { name: "Gin Tonic", price: "15" }] },
      { title: "Tequila & Mezcal", price: "11", items: [{ name: "Beneva" }, { name: "Altos" }] },
      { title: "Rhum", price: "11", items: [{ name: "Kraken", desc: "+2 €" }, { name: "St James" }, { name: "Rhum Bumbo XO", desc: "+2 €" }] },
      { title: "Whiskies", price: "13", items: [{ name: "Buffalo Trace" }, { name: "Monkey Shoulder" }, { name: "Akashi", desc: "Japanese single malt" }] },
      { title: "Vin & Prosecco", titleEn: "14 cl", price: "10", items: [{ name: "Vin blanc", desc: "Chardonnay" }, { name: "Vin rouge", desc: "Terre douce, Bordeaux" }, { name: "Prosecco" }] },
      { title: "Apéritifs", price: "9", items: [{ name: "Ricard" }, { name: "Martini blanc · rouge" }, { name: "Saké" }] },
      { title: "Liqueurs", price: "9", items: [{ name: "Vieille Prune" }, { name: "Amaretto" }, { name: "Cointreau" }] },
      { title: "Digestifs", items: [{ name: "Cognac" }, { name: "Armagnac" }] },
    ],
  },
  {
    id: "softs",
    title: "Softs & jus",
    titleEn: "Soft drinks & juices",
    groups: [
      {
        title: "Softs",
        items: [
          { name: "Evian, San Pellegrino, Coca-Cola, Schweppes pomme", price: "10" },
          { name: "Ananas, tomate, orange, mangue, Redbull", price: "10" },
          { name: "Limonade à la rose maison", en: "Homemade rose lemonade", price: "13" },
          { name: "Thé glacé à la fleur d'oranger maison", en: "Homemade iced tea with orange blossom", price: "13" },
        ],
      },
      { title: "Bouteille", titleEn: "Bottle", items: [{ name: "Champagne Deutz Brut", en: "75 cl", price: "165" }] },
    ],
  },
  {
    id: "a-grignoter",
    title: "À grignoter",
    titleEn: "To eat",
    groups: [
      {
        title: "La main dans le bol",
        titleEn: "Finger food",
        items: [
          { name: "Poivrons farcis au fromage", en: "Peppers stuffed with cheese", price: "5" },
          { name: "Olives & nuts", price: "5" },
        ],
      },
      {
        title: "À partager",
        titleEn: "To share",
        items: [
          { name: "Houmous", allergen: true, fr: "Purée de pois chiche, tahiné, citron, huile d'olive extra vierge", en: "Chickpea dip, tahini, lemon, extra virgin olive oil", price: "10" },
          { name: "Caviar d'aubergine", allergen: true, fr: "Caviar d'aubergine, tahiné, citron confit, huile d'olive extra vierge", en: "Eggplant caviar, tahini, preserved lemon, extra virgin olive oil", price: "10" },
          { name: "Rillettes du chef", fr: "Selon l'inspiration du jour — demandez à votre serveur", en: "Today's inspiration — please ask your server", price: "10" },
        ],
      },
      {
        title: "Pâtisserie",
        titleEn: "Pastry",
        items: [
          { name: "Baklawa (2 pièces)", allergen: true, fr: "Pâte feuilletée croustillante et noix de cajou, légère en sucre", en: "Crispy puff pastry with cashew nuts, low in sugar", price: "5" },
          { name: "La Rosaline (2 pièces)", fr: "Guimauve orientale fondante, parfumée à la rose", en: "Tender Eastern-style marshmallow, infused with rose", price: "5" },
        ],
      },
    ],
  },
];
