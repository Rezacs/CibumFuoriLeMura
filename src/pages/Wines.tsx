import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

type Wine = {
  producer: string;
  name: string;
  vintage?: string;
  grapes?: string;
  price: string;
  note?: string;
};

type WineLeafCategory = {
  id: string;
  title: string;
  wines: Wine[];
};

type WineGroup = {
  id: string;
  title: string;
  categories: WineLeafCategory[];
};

type WineCollection = {
  id: string;
  title: string;
  groups: WineGroup[];
};

const collections: WineCollection[] = [
  {
    id: "bottiglie",
    title: "Bottiglie",
    groups: [
      {
        id: "bottiglie-spumanti",
        title: "Spumanti",
        categories: [
          {
            id: "bottiglie-spumanti-charmat",
            title: "Metodo Charmat",
            wines: [
              {
                producer: "Barco Silvestri",
                name: "Bianco dei Sassi",
                grapes: "Glera",
                price: "19 €",
              },
              {
                producer: "I Mattoni",
                name: "Monna Caterina Rosé Brut",
                grapes: "Trebbiano Toscano 90%, Sangiovese 10%",
                price: "19 €",
              },
            ],
          },
          {
            id: "bottiglie-spumanti-classico",
            title: "Metodo Classico",
            wines: [
              {
                producer: "Conti Ducco",
                name: "Cuvée Franciacorta Brut",
                grapes: "Chardonnay",
                price: "2E €",
              },
              {
                producer: "Bellavista",
                name: "Alma Assemblage N.2 Extra Brut",
                grapes: "Chardonnay 80%, Pinot Nero 19%, Pinot Bianco 1%",
                price: "4S €",
              },
              {
                producer: "Bellavista",
                name: "Saten",
                vintage: "2016",
                grapes: "Chardonnay",
                price: "72 €",
              },
              {
                producer: "Bellavista",
                name: "Teatro alla Scala Brut",
                vintage: "2020",
                grapes: "Chardonnay 75%, Pinot Nero 23%",
                price: "69 €",
              },
              {
                producer: "Ca' del Bosco",
                name: "Vintage Collection Saten Extra Brut",
                vintage: "2019",
                grapes: "Chardonnay 83%, Pinot Bianco 15%",
                price: "72 €",
              },
              {
                producer: "Ca' del Bosco",
                name: "Vintage Collection Saten",
                vintage: "2016",
                price: "76 €",
              },
              {
                producer: "Ca' del Bosco",
                name: "Vintage Collection Saten",
                vintage: "2019",
                price: "76 €",
              },
              {
                producer: "Mirabella",
                name: "Demetra Brut Nature",
                grapes: "Pinot Bianco",
                price: "3: €",
              },
              {
                producer: "Cantina Sassi San Cristoforo",
                name: "Alta Langa Extra Brut",
                grapes: "Pinot Nero 70%, Chardonnay 30%",
                price: "Prezzo da verificare",
              },
            ],
          },
          {
            id: "bottiglie-champagne",
            title: "Champagne",
            wines: [
              { producer: "Veuve Pelletier", name: "Brut", price: "45 €" },
              {
                producer: "Pierre Legras",
                name: "Orion Brut",
                grapes: "Chardonnay 86%, Pinot Noir 7%, Pinot Meunier 7%",
                note: "Deg. 02/2023",
                price: "79 €",
              },
              {
                producer: "Erick Schreiber",
                name: "Tradition Brut",
                grapes: "Pinot Noir 90%, Chardonnay 10%",
                price: "76 €",
              },
              {
                producer: "Guy Charlemagne",
                name: "Reserve Brut G.C.",
                grapes: "Chardonnay",
                price: "76 €",
              },
              {
                producer: "Bolieu",
                name: "Pepin de Vigne Brut",
                grapes: "Chardonnay 70%, Pinot Meunier 30%",
                note: "Deg. 11/2020",
                price: "94 €",
              },
              {
                producer: "Colin",
                name: "Castille 1er Cru Brut",
                grapes: "Chardonnay",
                note: "Deg. 11/2023",
                price: "78 €",
              },
              {
                producer: "Helene Beaugrand",
                name: "Le Grand Carré Brut Nature",
                grapes: "Chardonnay",
                price: "84 €",
              },
              {
                producer: "De Venoge",
                name: "Cordon Bleu Brut",
                grapes: "Chardonnay 33%, Pinot Noir 33%, Pinot Meunier 34%",
                price: "Prezzo da verificare",
              },
              {
                producer: "De Venoge",
                name: "Rosé Brut",
                grapes: "Pinot Noir 60%, Chardonnay 20%, Pinot Meunier 20%",
                price: "98 €",
              },
              {
                producer: "Perrier-Jouët",
                name: "Belle Epoque",
                vintage: "2013",
                price: "280 €",
              },
            ],
          },
        ],
      },
      {
        id: "bottiglie-bianchi",
        title: "Bianchi",
        categories: [
          {
            id: "bianchi-alto-adige",
            title: "Alto Adige",
            wines: [
              {
                producer: "San Michele Appiano",
                name: "Fallwind Sauvignon",
                vintage: "2022",
                price: "2E €",
              },
              {
                producer: "San Michele Appiano",
                name: "Fallwind Pinot Grigio",
                vintage: "2022",
                price: "2E €",
              },
              {
                producer: "Terlan",
                name: "Chardonnay",
                vintage: "2023",
                price: "34 €",
              },
              {
                producer: "Terlan",
                name: "Pinot Bianco",
                vintage: "2023",
                price: "34 €",
              },
              {
                producer: "Terlan",
                name: "Gewurtztraminer",
                vintage: "2023",
                price: "37 €",
              },
            ],
          },
          {
            id: "bianchi-friuli",
            title: "Friuli Venezia Giulia",
            wines: [
              { producer: "Livio Felluga", name: "Sauvignon", vintage: "2024", price: "32 €" },
              { producer: "Livio Felluga", name: "Ribolla Gialla", vintage: "2024", price: "32 €" },
              { producer: "Livio Felluga", name: "Chardonnay", vintage: "2022", price: "36 €" },
              { producer: "Livio Felluga", name: "Sharis", vintage: "2024", price: "25 €" },
              { producer: "Livio Felluga", name: "Potentilla Sauvignon", vintage: "2018", price: "54 €" },
              { producer: "Livio Felluga", name: "Cigar Friulano", vintage: "2018", price: "54 €" },
            ],
          },
          {
            id: "bianchi-lombardia",
            title: "Lombardia",
            wines: [
              { producer: "Contadi Castaldi", name: "Curtefranca", vintage: "2024", price: "26 €" },
              { producer: "Ca' del Bosco", name: "Selva della Tesa Curtefranca", vintage: "2020", price: "78 €" },
            ],
          },
          {
            id: "bianchi-piemonte",
            title: "Piemonte",
            wines: [
              { producer: "Ceretto", name: "Blangè Arneis", vintage: "2023", price: "32 €" },
              { producer: "Angelo Negro", name: "Onorata Langhe Favorita", vintage: "2024", price: "34 €" },
              { producer: "Angelo Negro", name: "Serra Lupini Roero Arneis", vintage: "2024", price: "34 €" },
              { producer: "Angelo Negro", name: "Roero Arneis Riserva 7 Anni", vintage: "2017", price: "57 €" },
            ],
          },
          {
            id: "bianchi-veneto",
            title: "Veneto",
            wines: [
              { producer: "Inama", name: "Soave Classico", vintage: "2024", price: "27 €" },
              { producer: "Inama", name: "Chardonnaa", vintage: "2024", price: "29 €" },
              { producer: "Inama", name: "Vulcaia Sauvignon", vintage: "2024", price: "29 €" },
            ],
          },
          {
            id: "bianchi-liguria",
            title: "Liguria",
            wines: [
              { producer: "Lunae", name: "Vermentino Etichetta Nera", vintage: "2020", price: "34 €" },
              { producer: "Linero", name: "20.Zero Vermentino", note: "Macerato", price: "32 €" },
            ],
          },
          {
            id: "bianchi-toscana",
            title: "Toscana",
            wines: [
              { producer: "Antinori", name: "Vermentino Bolgheri", vintage: "2024", price: "28 €" },
              { producer: "I Mattoni", name: "Monna Caterina Trebbiano Toscano", vintage: "2023", price: "24 €" },
            ],
          },
          {
            id: "bianchi-umbria",
            title: "Umbria",
            wines: [
              { producer: "Antinori", name: "Cervaro della Sala", vintage: "2023", price: "78 €" },
            ],
          },
          {
            id: "bianchi-puglia",
            title: "Puglia",
            wines: [
              { producer: "Bonsegna", name: "Cenate Vecchie Malvasia Bianca", vintage: "2023", price: "23 €" },
            ],
          },
          {
            id: "bianchi-sardegna",
            title: "Sardegna",
            wines: [
              { producer: "Capichera", name: "Lintori Vermentino", vintage: "0002", price: "29 €" },
            ],
          },
          {
            id: "bianchi-francia-borgogna",
            title: "Francia (Borgogna)",
            wines: [
              { producer: "Pierre Ponnelle", name: "Chardonnay", vintage: "2024", price: "29 €" },
              { producer: "Pierre Ponnelle", name: "Bourgogne Chardonnay", vintage: "2023", price: "42 €" },
              { producer: "Bernard Defaix", name: "Chablis V.V.", vintage: "2022", price: "64 €" },
              { producer: "De La Motte", name: "Chablis 1er Cru Beauroy", vintage: "2022", price: "73 €" },
            ],
          },
        ],
      },
      {
        id: "bottiglie-rosati",
        title: "Rosati",
        categories: [
          {
            id: "rosati-italia",
            title: "Italia",
            wines: [
              { producer: "Antinori", name: "A Aleatico Toscana", vintage: "2021", price: "38 €" },
              { producer: "Cosimo Maria Masini", name: "Matilde Toscana", vintage: "2021", price: "27 €" },
              { producer: "Angelo Negro", name: "Prima Rosa Langhe", vintage: "2024", price: "29 €" },
              { producer: "Tormaresca", name: "Calafuria Salento", vintage: "2023", price: "24 €" },
              { producer: "Bonsegna", name: "Narthos Salento", vintage: "2023", price: "23 €" },
            ],
          },
        ],
      },
      {
        id: "bottiglie-rossi",
        title: "Rossi",
        categories: [
          {
            id: "rossi-alto-adige",
            title: "Alto Adige",
            wines: [{ producer: "Terlan", name: "Lagrein Tradition", vintage: "2023", price: "29 €" }],
          },
          {
            id: "rossi-piemonte",
            title: "Piemonte",
            wines: [
              { producer: "Prunotto", name: "Dolcetto d'Alba", vintage: "2023", price: "26 €" },
              { producer: "Prunotto", name: "Bansella Nizza", vintage: "2022", price: "30 €" },
              { producer: "Prunotto", name: "Barolo", vintage: "2021", price: "63 €" },
              { producer: "Manuel Marinacci", name: "Barbera d'Alba", vintage: "2019", price: "32 €" },
            ],
          },
          {
            id: "rossi-veneto",
            title: "Veneto",
            wines: [
              { producer: "Massimago", name: "Conte Gastone Amarone della Valpollicella", price: "59 €" },
              { producer: "Bertani", name: "Amarone Classico della Valpollicella Riserva", vintage: "2019", price: "82 €" },
              { producer: "Quintarelli Giuseppe", name: "Valpollicella Classico Sup.", vintage: "2017", price: "118 €" },
            ],
          },
          {
            id: "rossi-sardegna",
            title: "Sardegna",
            wines: [{ producer: "Capichera", name: "Assaje", vintage: "2020", price: "64 €" }],
          },
          {
            id: "rossi-toscana",
            title: "Toscana",
            wines: [
              { producer: "Marina Romin", name: "Pomerio Costa Classica", vintage: "2022", price: "24 €" },
              { producer: "Marina Romin", name: "Turseno Costa Classica", vintage: "2019", price: "42 €" },
              { producer: "Tenuta di Ghizzano", name: "Nambrot", vintage: "2017", price: "67 €" },
              { producer: "San Jacopo", name: "Chianti Classico", vintage: "2022", price: "2. €" },
              { producer: "Villa Antinori", name: "Chianti Classico Riserva", vintage: "2022", price: "38 €" },
              { producer: "Antinori", name: "Peppoli Chianti Classico", vintage: "2023", price: "34 €" },
              { producer: "Pian delle Vigne", name: "Rosso di Montalcino", vintage: "2023", price: "39 €" },
              { producer: "Pian delle Vigne", name: "Brunello di Montalcino", vintage: "2017/2019", price: "72 €" },
              { producer: "Pian delle Vigne", name: "Brunello di Montalcino", vintage: "2020", price: "68 €" },
              { producer: "Petra", name: "Alto Sangiovese", vintage: "2019/2021", price: "43 €" },
              { producer: "I Mattoni", name: "Monna Caterina", vintage: "2021/2023", price: "25 €" },
              { producer: "Le Mortelle", name: "Poggio alle Nane", vintage: "2017", price: "78 €" },
              { producer: "Antinori", name: "Villa Antinori", vintage: "2019/2023", price: "34 €" },
              { producer: "La Braccesca", name: "Achelo Syrah Cortona", vintage: "2023", price: "30 €" },
              { producer: "Petra", name: "Colle al Fico Syrah", vintage: "2019/2021", price: "41 €" },
              { producer: "Antinori", name: "Il Bruciato", vintage: "2023", price: "37 €" },
              { producer: "Pagani de Marchi", name: "Casalvecchio", vintage: "2017", price: "57 €" },
              { producer: "Pagani de Marchi", name: "Montaleo", vintage: "2019", price: "36 €" },
              { producer: "Pagani de Marchi", name: "Principe Guerriero", vintage: "2017/2019", price: "48 €" },
              { producer: "Aldobrandesca", name: "Vie Cave Melbec", vintage: "2020/2021", price: "39 €" },
              { producer: "Antinori", name: "Tignanello", vintage: "2022", price: "169 €" },
              { producer: "Antinori", name: "Tignanello", vintage: "2019", price: "184 €" },
              { producer: "Antinori", name: "Tignanello", vintage: "2018", price: "176 €" },
            ],
          },
          {
            id: "rossi-francia-borgogna",
            title: "Francia · Borgogna",
            wines: [{ producer: "Pierre Ponnelle", name: "Pinot Noir", vintage: "2023", price: "34 €" }],
          },
          {
            id: "rossi-francia-bordeaux",
            title: "Francia · Bordeaux",
            wines: [
              { producer: "Lacoste-Borie", name: "Pauillac", vintage: "2016", price: "89 €" },
              { producer: "Clos Marsalette", name: "Pessac-Léognan", vintage: "2015", price: "93 €" },
              { producer: "Borie Hortevie", name: "Saint-Julien", vintage: "2009", price: "92 €" },
            ],
          },
        ],
      },
      {
        id: "bottiglie-formati-speciali",
        title: "Formati Speciali",
        categories: [
          {
            id: "mezzine",
            title: "Mezzine",
            wines: [
              { producer: "Antinori", name: "Il Bruciato", vintage: "2024", price: "19 €" },
              { producer: "Campo di Sasso", name: "Insolglio del Cinghiale", vintage: "2022", price: "19 €" },
            ],
          },
          {
            id: "magnum",
            title: "Magnum",
            wines: [
              { producer: "Le Palaie", name: "Brusio d'Era Spumante Rosé Brut Nature", price: "43 €" },
              { producer: "Marina Romin", name: "Turseno Costa Toscana", vintage: "2021", price: "78 €" },
              { producer: "Badia di Morrona", name: "N'Antia", vintage: "2004", price: "76 €" },
              { producer: "Campo alla Sughera", name: "Adeo Bolgheri", vintage: "2011", price: "72 €" },
              { producer: "Le Colline dei Filari", name: "Amarone della Valpollicella", vintage: "2022", price: "72 €" },
            ],
          },
        ],
      },
      {
        id: "bottiglie-dessert",
        title: "Vini da Dessert",
        categories: [
          {
            id: "dessert-items",
            title: "Dessert",
            wines: [
              {
                producer: "I Mattoni",
                name: "Toscana Bianco Passito",
                vintage: "2019",
                price: "29 €",
                note: "Disponibile anche al calice: 7 €",
              },
              { producer: "Antinori", name: "Muffato della Sala", vintage: "2019", price: "58 €" },
              { producer: "Santa Maria", name: "Recioto Classico della Valpollicella", price: "57 €" },
              { producer: "Chateau Haut-Monteils", name: "Sauternes", vintage: "2021", price: "46 €" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "calice",
    title: "Al Calice",
    groups: [
      {
        id: "calice-spumanti",
        title: "Spumanti",
        categories: [
          {
            id: "calice-spumanti-charmat",
            title: "Metodo Charmat",
            wines: [
              { producer: "Barco Silvestri", name: "Bianco dei Sassi Brut", price: "5 €" },
              { producer: "I Mattoni", name: "Monna Caterina Rosé Brut", price: "7 €" },
            ],
          },
          {
            id: "calice-spumanti-classico",
            title: "Metodo Classico",
            wines: [
              { producer: "Conti Ducco", name: "Cuvée Franciacorta Brut", price: "9 €" },
              { producer: "Mirabella", name: "Demetra Pinot Bianco Brut Nature", price: "10 €" },
              { producer: "Luigi Coppo", name: "Pinot Nero Alta Langa Brut", vintage: "2021", price: "12 €" },
            ],
          },
        ],
      },
      {
        id: "calice-bianchi",
        title: "Bianchi",
        categories: [
          {
            id: "calice-bianchi-items",
            title: "Selezione",
            wines: [
              { producer: "Antinori", name: "Vermentino Bolgheri", vintage: "2024", price: "7 €" },
              { producer: "Linero", name: '20.Zero "Liguria di Levante"', vintage: "2022", note: "Macerato", price: "8 €" },
              { producer: "G. Meletti Cavallari", name: "Borgeri Bianco Bolgheri", vintage: "202?", price: "8 €" },
              { producer: "Marulli", name: '"Tinente" Verdeca IGP Salento', vintage: "2024", price: "7 €" },
              { producer: "Bonsegna", name: '"Cenate Vecchie" Malvasia Bianca Salento', vintage: "2023", price: "6 €" },
              { producer: "Capichera", name: '"Lintori" Vermentino di Sardegna', vintage: "2020", price: "8 €" },
              { producer: "Contadi Castaldi", name: "Curtefranca DOC", vintage: "2024", price: "7 €" },
              { producer: "Pierre Ponnelle", name: "Chardonnay Borgogna", vintage: "2024", price: "10 €" },
            ],
          },
        ],
      },
      {
        id: "calice-rosati",
        title: "Rosati",
        categories: [
          {
            id: "calice-rosati-items",
            title: "Selezione",
            wines: [
              { producer: "Antinori", name: '"A" Aleatico', vintage: "2021", price: "8 €" },
              { producer: "Cosimo Maria Masini", name: '"Matilde" Sangiovese', vintage: "2021", price: "7 €" },
              { producer: "Angelo Negro", name: '"Prima Rosa" Langhe Rosato', vintage: "2024", price: "7 €" },
              { producer: "Tormaresca", name: '"Calafuria" Negroamaro Salento', vintage: "2023", price: "6 €" },
              { producer: "Bonsegna", name: '"Narthos" Negroamaro Salento', vintage: "2023", price: "6 €" },
              { producer: "Capichera", name: '"Tambè" Isola dei Nuraghi Carignano', vintage: "2020", price: "8 €" },
            ],
          },
        ],
      },
      {
        id: "calice-rossi",
        title: "Rossi",
        categories: [
          {
            id: "calice-rossi-items",
            title: "Selezione",
            wines: [
              { producer: "Marina Romin", name: '"Pomerio" Costa Toscana', vintage: "2022", price: "6 €" },
              { producer: "San Jacopo da Vicchiomaggio", name: "Chianti Classico", vintage: "2022", price: "7 €" },
              { producer: "Pian delle Vigne", name: "Rosso di Montalcino", vintage: "2023", price: "9 €" },
              { producer: "Casa di Terra", name: '"Moreccio" Bolgheri', vintage: "2023", price: "8 €" },
              { producer: "Terlan", name: "Lagrein Tradition", vintage: "2023", price: "8 €" },
              { producer: "Prunotto", name: "Dolcetto d\'Alba", vintage: "2023", price: "7 €" },
              { producer: "Capichera", name: '"Lianti" Isola dei Nuraghi', vintage: "2018", price: "7 €" },
              { producer: "Pierre Ponnelle", name: "Pinot Noir Borgogna", vintage: "2023", price: "10 €" },
            ],
          },
        ],
      },
      {
        id: "calice-dolci",
        title: "Dolci",
        categories: [
          {
            id: "calice-dolci-items",
            title: "Selezione",
            wines: [
              { producer: "Chateau Haut-Monteils", name: "Sauternes", vintage: "2021", price: "9 €" },
              { producer: "I Mattoni", name: "Toscana Bianco Passito", vintage: "2019", price: "7 €" },
            ],
          },
        ],
      },
    ],
  },
];

function WineRow({ wine }: { wine: Wine }) {
  return (
    <div>
      <div className="flex justify-between items-start gap-6">
        <div className="max-w-3xl">
          <h4 className="text-xl md:text-2xl text-[#8B1E2D] font-medium">
            {wine.producer}, {wine.name}
          </h4>

          <div className="mt-2 space-y-1">
            {wine.vintage && (
              <p className="text-[#5a5a40] italic text-base md:text-lg">
                Annata: {wine.vintage}
              </p>
            )}
            {wine.grapes && (
              <p className="text-[#5a5a40] italic text-base md:text-lg">
                Uve: {wine.grapes}
              </p>
            )}
            {wine.note && (
              <p className="text-[#5a5a40] text-sm md:text-base">{wine.note}</p>
            )}
          </div>
        </div>

        <span className="text-[#E6A23C] text-xl md:text-2xl font-serif italic whitespace-nowrap">
          {wine.price}
        </span>
      </div>

      <div className="mt-6 h-px bg-black/5" />
    </div>
  );
}

function CategoryBlock({ category }: { category: WineLeafCategory }) {
  return (
    <div id={category.id} className="scroll-mt-40">
      <h4 className="text-2xl md:text-3xl font-display text-[#5a5a40] mb-8">
        {category.title}
      </h4>

      <div className="rounded-3xl bg-white shadow-xl border border-black/5 p-8 md:p-12 space-y-8">
        {category.wines.map((wine, index) => (
          <WineRow
            key={`${category.id}-${wine.producer}-${wine.name}-${index}`}
            wine={wine}
          />
        ))}
      </div>
    </div>
  );
}

export function Wines() {
  const [active, setActive] = useState<string>("");

  const navItems = useMemo(
    () =>
      collections.map((collection) => ({
        ...collection,
        groups: collection.groups.map((group) => ({
          ...group,
          categories: group.categories.map((category) => ({
            id: category.id,
            title: category.title,
          })),
        })),
      })),
    []
  );

  useEffect(() => {
    const ids = collections.flatMap((collection) => [
      collection.id,
      ...collection.groups.flatMap((group) => [
        group.id,
        ...group.categories.map((category) => category.id),
      ]),
    ]);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;
      let current = "";

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop) {
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 140;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F5EDE3] min-h-screen">
      <div className="h-[500px] bg-[#8B1E2D] relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-8xl text-white font-display mb-6">
            Carta dei Vini
          </h1>
          <p className="text-white/90 uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
            Bottiglie & Al Calice
          </p>
          <div className="w-32 h-px bg-[#E6A23C] mx-auto" />
        </motion.div>
      </div>

      <div className="pt-24 pb-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 rounded-3xl bg-white shadow-xl border border-black/5 p-6 max-h-[78vh] overflow-y-auto">
              <p className="text-xs uppercase tracking-widest text-[#5a5a40] mb-6 text-center">
                Sezioni
              </p>

              <div className="space-y-6">
                {collections.map((collection) => (
                  <div
                    key={collection.id}
                    className="border-b border-black/5 pb-5 last:border-b-0 last:pb-0"
                  >
                    <button
                      type="button"
                      onClick={() => scrollToSection(collection.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm uppercase tracking-[0.2em] font-semibold transition ${
                        active === collection.id
                          ? "bg-[#8B1E2D] text-white"
                          : "text-[#8B1E2D] hover:bg-[#8B1E2D]/5"
                      }`}
                    >
                      {collection.title}
                    </button>

                    <div className="mt-4 ml-2 space-y-3">
                      {collection.groups.map((group) => (
                        <div key={group.id}>
                          <button
                            type="button"
                            onClick={() => scrollToSection(group.id)}
                            className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium transition ${
                              active === group.id
                                ? "bg-[#F5EDE3] text-[#8B1E2D]"
                                : "text-[#5a5a40] hover:text-[#8B1E2D]"
                            }`}
                          >
                            {group.title}
                          </button>

                          {group.categories.filter(
                            (category) =>
                              category.title.toLowerCase() !== "selezione" &&
                              category.title.toLowerCase() !== "dessert"
                          ).length > 0 && (
                            <div className="mt-1 ml-4 space-y-1 border-l border-[#8B1E2D]/10 pl-3">
                              {group.categories
                                .filter(
                                  (category) =>
                                    category.title.toLowerCase() !== "selezione" &&
                                    category.title.toLowerCase() !== "dessert"
                                )
                                .map((category) => (
                                  <button
                                    key={category.id}
                                    type="button"
                                    onClick={() => scrollToSection(category.id)}
                                    className={`block w-full text-left px-2 py-1 rounded-md text-sm transition ${
                                      active === category.id
                                        ? "text-[#8B1E2D] bg-[#8B1E2D]/5"
                                        : "text-[#6b6b55] hover:text-[#8B1E2D]"
                                    }`}
                                  >
                                    {category.title}
                                  </button>
                                ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* MOBILE NAV */}
          <div className="lg:hidden sticky top-0 z-30 bg-[#F5EDE3]/95 backdrop-blur py-3 mb-6">
            <nav className="flex gap-3 overflow-x-auto pb-2">
              {collections.map((collection) => (
                <button
                  key={collection.id}
                  type="button"
                  onClick={() => scrollToSection(collection.id)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                    active === collection.id
                      ? "bg-[#8B1E2D] text-white border-[#8B1E2D]"
                      : "bg-white text-[#8B1E2D] border-[#8B1E2D]/20 hover:bg-[#8B1E2D] hover:text-white"
                  }`}
                >
                  {collection.title}
                </button>
              ))}
            </nav>
          </div>

          {/* CONTENT */}
          <div className="space-y-24">
            {collections.map((collection) => (
              <section
                key={collection.id}
                id={collection.id}
                className="scroll-mt-40"
              >
                <div className="sticky top-20 z-20 bg-[#F5EDE3] py-4">
                  <h2 className="text-4xl md:text-5xl font-display text-[#8B1E2D]">
                    {collection.title}
                  </h2>
                </div>

                <div className="space-y-20 pt-6">
                  {collection.groups.map((group) => (
                    <div key={group.id} id={group.id} className="scroll-mt-40">
                      <div className="sticky top-36 z-10 bg-[#F5EDE3] py-3">
                        <h3 className="text-3xl md:text-4xl font-display text-[#8B1E2D]">
                          {group.title}
                        </h3>
                      </div>

                      <div className="space-y-16 pt-4">
                        {group.categories.map((category) => (
                          <div
                            key={category.id}
                            id={category.id}
                            className="scroll-mt-40"
                          >
                            <h4 className="text-2xl md:text-3xl font-display text-[#5a5a40] mb-8">
                              {category.title}
                            </h4>

                            <div className="rounded-3xl bg-white shadow-xl border border-black/5 p-8 md:p-12 space-y-8">
                              {category.wines.map((wine, index) => (
                                <WineRow
                                  key={`${category.id}-${wine.producer}-${wine.name}-${index}`}
                                  wine={wine}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}