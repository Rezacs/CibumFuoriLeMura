export type MenuItem = { name: string; price: string; desc?: string };

export type MenuSection = {
  title: string;
  image: string;
  items: MenuItem[];
};

export const foodSections: MenuSection[] = [
  {
    title: "Antipasti",
    image: "/images/Food/caption (1).jpg",
    items: [
      { name: "Culatello di Zibello", price: "18 €", desc: "Con giardiniera morgan, scaglie di parmigiano reggiano 36 mesi, aceto balsamico di modena e granella di noci" },
      { name: "Tris di Tartare di Manzo", price: "18 €", desc: "Frutta, funghi porcini, acciughe cantabrico e burrata" },
      { name: "Gamberoni", price: "16 €", desc: "Con speck IGT alto adige, burrata e pomodorini confit" },
      { name: "Polpo, paprika, calamari e seppie", price: "16 €", desc: "Con concassé di patate" },
      { name: "Parmigiana di mare", price: "16 €" },
      { name: "Millefoglie di melanzana", price: "15 €" },
      { name: "Rotolini di zucchine", price: "16 €", desc: "Farciti con formaggio caprino, gamberi e vellutata di zucchine" }
    ]
  },
  {
    title: "Primi",
    image: "/images/Food/caption (4).jpg",
    items: [
      { name: "Caserecce al pesto di cavolo nero", price: "16 €", desc: "Con speck croccante e granella di pinoli di S. Rossore" },
      { name: "Orecchiette pugliesi", price: "16 €", desc: "Di grano senatore cappelli, pomodorini, guanciale e ricotta salata" },
      { name: "Pappardelle al cinghiale alla genovese", price: "18 €" },
      { name: "Tonnarelli", price: "18 €", desc: "Alle uova di riccio di mare e vongole" },
      { name: "Risotto allo zafferano", price: "20 €", desc: "Con cozze e scampi" },
      { name: "Paccheri di gragnano", price: "18 €", desc: "Vongole veraci, carciofi, pistacchi di bronte e bottarga di muggine" },
      { name: "Tagliolini alle arselle del gombo", price: "24 €" },
      { name: "Ravioli di zucca", price: "16 €", desc: "Burro francese, salvia, amaretti e parmigiano reggiano 36 mesi" }
    ]
  },
  {
    title: "Secondi",
    image: "/images/Food/caption (8).jpg",
    items: [
      { name: "Filetto al pepe verde", price: "20 €" },
      { name: "Bistecca alla fiorentina (kg)", price: "60 €" },
      { name: "Tagliata di manzo", price: "18 €", desc: "Con riduzione di gorgonzola e granella di pistacchi di bronte" },
      { name: "Bocconcini di coniglio", price: "16 €", desc: "Con carciofi" },
      { name: "Petto d’anatra", price: "20 €", desc: "Con riduzione di vermentino e cipolla borettana" },
      { name: "Rombo al vapore", price: "18 €", desc: "Con crema di carciofi e polvere di limoni di amalfi" },
      { name: "Baccalà morro", price: "18 €", desc: "Con vellutata di ceci" },
      { name: "Grigliata di seppie e gamberoni", price: "18 €" },
      { name: "Pescato del giorno (kg)", price: "65 €", desc: "All'isolana o al sale" },
      { name: "Capesante alla carbonara", price: "18 €" },
      { name: "Fritto di gamberi e totani", price: "18 €", desc: "Con verdure in tempura" }
    ]
  }
];

export const simpleSections = [
  {
    title: "Contorni",
    items: [
      { name: "Patate al forno", price: "5 €" },
      { name: "Insalata dell'orto", price: "5 €" },
      { name: "Verdure grigliate", price: "5 €" },
      { name: "Sformatino di verdure di stagione", price: "5 €" }
    ]
  },
  {
    title: "Dessert",
    items: [
      { name: "Crostata della casa", price: "6 €" },
      { name: "Cantucci", price: "6 €", desc: "Di Federigo (San Miniato) e vin santo Sorelle Palazzi" },
      { name: "Babà al rum De Vivo", price: "6 €" },
      { name: "Torta coi bischeri", price: "6 €" },
      { name: "Torta di limoni bio", price: "6 €" },
      { name: "Cheesecake chef", price: "6 €" },
      { name: "Semifreddo torroncino al rum o al caffè", price: "6 €" },
      { name: "Gelato al limone e al mango", price: "6 €" },
      { name: "Ananas", price: "6 €" },
      { name: "Tiramisù", price: "6 €" }
    ]
  },
  {
    title: "Apericena Cibum (18:00 - 20:00)",
    items: [
      { name: "Prosecco o vino bianco/rosso", price: "15 €" },
      { name: "Crostini vari, salumi", price: "15 €" },
      { name: "Formaggi", price: "15 €" },
      { name: "Sformatini di verdure di stagione", price: "15 €" }
    ]
  },
  {
    title: "Bambini",
    items: [
      { name: "Pasta al pomodoro fresco", price: "8 €" },
      { name: "Cotoletta alla milanese", price: "10 €" },
      { name: "Patate fritte o arrosto", price: "5 €" },
      { name: "Insalata", price: "5 €" }
    ]
  },
  {
    title: "Bevande",
    items: [
      { name: "Acqua", price: "2 €" },
      { name: "Caffè", price: "2 €" },
      { name: "Amaro e grappa", price: "5 €" },
      { name: "Rum e whisky", price: "7 €" },
      { name: "Bevande", price: "4 €" }
    ]
  }
] as const;