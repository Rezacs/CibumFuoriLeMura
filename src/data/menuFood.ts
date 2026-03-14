export type MenuItem = {
  name: string;
  price: string;
  desc?: string;
};

export type MenuSection = {
  title: string;
  image: string;
  items: MenuItem[];
};

export type SubSection = {
  title: string;
  items: MenuItem[];
};

export type SimpleSection = {
  title: string;
  items?: MenuItem[];
  subSections?: SubSection[];
};

export const foodSections: MenuSection[] = [
  {
    title: "Antipasti",
    image: "/images/Food/caption (1).jpg",
    items: [
      {
        name: "Culatello di Zibello",
        price: "18 €",
        desc: "Con funghi cardoncelli in olio EVO e scaglie di Parmigiano Reggiano 36 mesi. Allergeni 7/9",
      },
      {
        name: "Cubo di filetto di manzo",
        price: "18 €",
        desc: "Cottura bleu, con salsa al gorgonzola DOP e uova di quaglia. Allergeni 3/7",
      },
      {
        name: "Millefoglie di zucchine con crema di cavolfiore",
        price: "16 €",
        desc: "Allergeni 7",
      },
      {
        name: "Passatina di ceci con code di gamberi",
        price: "16 €",
        desc: "Allergeni 2",
      },
      {
        name: "Polpo, seppie e calamari con paprika e concassé di patate",
        price: "16 €",
        desc: "Allergeni 14",
      },
      {
        name: "Gamberoni con speck IGP Alto Adige, burrata e pomodori confit",
        price: "18 €",
        desc: "Allergeni 2/7",
      },
    ],
  },
  {
    title: "Primi Piatti",
    image: "/images/Food/caption (4).jpg",
    items: [
      {
        name: "Caserecce al pesto di cavolo nero",
        price: "16 €",
        desc: "Con speck croccante e granella di pinoli di San Rossore. Allergeni 1/8",
      },
      {
        name: "Reginelle al cinghiale alla genovese",
        price: "18 €",
        desc: "Allergeni 1/8",
      },
      {
        name: "Ravioli di zucca",
        price: "16 €",
        desc: "Burro francese, amaretti, salvia e Parmigiano Reggiano 36 mesi. Allergeni 1/5/7/8",
      },
      {
        name: "Risotto con riso Acquarello, gamberi, burrata e asparagi",
        price: "22 €",
        desc: "Allergeni 2/7",
      },
      {
        name: "Ravioli di astice con bisque di granchio",
        price: "18 €",
        desc: "Allergeni 1/2/3",
      },
      {
        name: "Paccheri di Gragnano",
        price: "20 €",
        desc: "Con vongole veraci, carciofi, pistacchi di Bronte e bottarga di muggine. Allergeni 1/4/8/14",
      },
    ],
  },
  {
    title: "Secondi Piatti",
    image: "/images/Food/caption (8).jpg",
    items: [
      {
        name: "Tagliata di manzo",
        price: "20 €",
        desc: "Con sale Maldon, pepe e salsa dello chef. Allergeni 3/7/10",
      },
      {
        name: "Petto d'anatra",
        price: "22 €",
        desc: "Con riduzione di Vermentino e cipolla borettana",
      },
      {
        name: "Filetto di maiale cotto a bassa temperatura",
        price: "18 €",
        desc: "Su composta di mele golden. Allergeni 3/7",
      },
      {
        name: "Baccalà lomo con ceci e cozze",
        price: "24 €",
        desc: "Allergeni 4/14",
      },
      {
        name: "Rombo al forno",
        price: "22 €",
        desc: "Con crema di patate agli agrumi e verdure. Allergeni 4/7",
      },
      {
        name: "Seppie del pescatore",
        price: "16 €",
        desc: "Allergeni 3/4/7",
      },
      {
        name: "Bistecca alla fiorentina",
        price: "60 € / kg",
        desc: "Su prenotazione",
      },
      {
        name: "Pescato del giorno",
        price: "65 € / kg",
        desc: "Allergeni 4",
      },
      {
        name: "Plateau di crudité",
        price: "Prezzo su richiesta",
        desc: "Allergeni 2/4/14",
      },
    ],
  },
];

export const simpleSections: SimpleSection[] = [
  {
    title: "Contorni",
    items: [
      { name: "Patate al forno", price: "6 €" },
      { name: "Spinaci saltati", price: "6 €" },
      { name: "Verdure di stagione grigliate", price: "6 €" },
      { name: "Selezione di 3 formaggi", price: "12 €" },
    ],
  },
  {
    title: "Dessert",
    items: [
      { name: "Torta coi bischeri", price: "8 €", desc: "Allergeni 1/7/8" },
      { name: "Crème brûlée dello chef", price: "8 €", desc: "Allergeni 3/7" },
      { name: "Cheesecake dello chef", price: "8 €", desc: "Allergeni 1/7" },
      { name: "Babà al rum Pasticceria De Vivo Pompei", price: "8 €", desc: "Allergeni 1/7" },
      { name: "Cantucci di Federigo e vinsanto", price: "8 €", desc: "Allergeni 1/3/7/8/12" },
      { name: "Crostata di Federigo all'albicocca o alle more", price: "8 €", desc: "Allergeni 1/3/7/8/12" },
      { name: "Gelato limone e mango", price: "8 €", desc: "Allergeni 7" },
      { name: "Ananas Orsero", price: "8 €" },
    ],
  },
  {
    title: "Tartufo di San Miniato",
    items: [
      { name: "Tagliolini al tartufo", price: "22 €", desc: "Allergeni 1/7" },
      { name: "Risotto con riso Acquarello e tartufo", price: "25 €" },
      { name: "Tartare di Chianina, uovo di quaglia e tartufo", price: "25 €", desc: "Allergeni 3" },
      { name: "Coppia di uova di cortile al tartufo", price: "20 €", desc: "Allergeni 3" },
      { name: "Tagliata di manzo al tartufo", price: "28 €" },
      { name: "Ricotta bio con tartufo e miele di spiaggia di San Rossore", price: "7 €", desc: "Allergeni 7" },
    ],
  },
  {
    title: "Alcolici",
    subSections: [
      {
        title: "Amari",
        items: [
          { name: "Jefferson", price: "8 €" },
          { name: "Artista", price: "7 €" },
          { name: "Vecchio Amaro del Capo", price: "6 €" },
          { name: "Amaro Montenegro", price: "6 €" },
        ],
      },
      {
        title: "Liquori",
        items: [
          { name: "Mirto Silvio Carta", price: "6 €" },
          { name: "Liquore di limoni", price: "6 €" },
          { name: "Elisir San Marzano Borsci", price: "6 €" },
          { name: "Liquore alla liquirizia Madonna Nera", price: "9 €" },
          { name: "Amaretto di Saronno", price: "7 €" },
          { name: "Grand Marnier", price: "7 €" },
        ],
      },
      {
        title: "Rum",
        items: [
          { name: "Plantation Pineapple", price: "10 €" },
          { name: "Ron Centenario 20 Anni Anniversario", price: "16 €" },
          { name: "Ron Centenario 30 Anni Anniversario", price: "28 €" },
          { name: "El Dorado 15 Anni", price: "14 €" },
        ],
      },
      {
        title: "Grappe",
        items: [
          { name: "Bruno Pilzer Delmer d'Or 5 Anni Barrique", price: "6 €" },
          { name: "Tignanello", price: "12 €" },
        ],
      },
      {
        title: "Whisky",
        items: [
          { name: "Laphroaig 10 Anni Scotch", price: "9 €" },
          { name: "Teeling Irish Whiskey", price: "15 €" },
        ],
      },
      {
        title: "Cognac",
        items: [
          { name: "Hine V.S.O.P.", price: "15 €" },
        ],
      },
    ],
  },
  {
    title: "Caffè e Bevande",
    items: [
      { name: "Caffè Trinci Supercrema", price: "3 €" },
      { name: "Brasile 100% Arabica", price: "5 €" },
      { name: "Guatemala 100% Arabica", price: "5 €" },
      { name: "Etiopia 100% Arabica", price: "5 €" },
      { name: "Decaffeinato", price: "3 €" },
      { name: "Orzo", price: "3 €" },
      { name: "Caffè e ginseng", price: "3 €" },
      { name: "Ponche alla livornese", price: "6 €" },
      { name: "Acqua Panna", price: "3 €" },
      { name: "Acqua San Pellegrino", price: "3 €" },
      { name: "Birra, Coca Cola, Aranciata", price: "5 €" },
      { name: "Coperto e servizio", price: "3 €" },
    ],
  },
] as const;