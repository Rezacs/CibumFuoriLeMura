import { useEffect, useState } from "react";
import { motion } from "motion/react";

type Wine = {
  name: string;
  price: string;
  producer?: string;
};

type Section = {
  id: string;
  title: string;
  wines: Wine[];
};

const sections: Section[] = [

  // =========================
  // BOLLICINE
  // =========================
  {
    id: "bollicine",
    title: "Bollicine & Champagne",
    wines: [
      { name: "N1 Brut", producer: "Lunae", price: "17 €" },
      { name: "Brusio d’Era Rosé", producer: "Le Palaie", price: "18 €" },
      { name: "Cuvèe Royale Franciacorta", producer: "Marchese Antinori", price: "40 €" },
      { name: "Valdobbiadene Setage Brut", producer: "Canevel", price: "24 €" },
      { name: "Franciacorta Bellavista Brut", producer: "Bellavista 2016", price: "65 €" },
      { name: "Franciacorta Bellavista Saten", producer: "Bellavista 2016", price: "65 €" },
      { name: "Franciacorta Ca’ del Bosco Saten", producer: "Ca’ del Bosco 2016", price: "68 €" },
      { name: "Blanc de Blancs", producer: "Marchese Antinori", price: "43 €" },
      { name: "Pas Dosè", producer: "Montellori", price: "39 €" },
      { name: "Terre di Conti Ducco Brut", producer: "100% Chardonnay 30 mesi", price: "28 €" },
      { name: "Pellettier Brut", price: "33 €" },
      { name: "Bolieu Brut", price: "85 €" },
      { name: "Second Simon Grand Cru", price: "59 €" },
      { name: "Perrier Jouet Belle Epoque", price: "280 €" },
    ],
  },

  // =========================
  // BIANCHI
  // =========================
  {
    id: "bianchi-puglia",
    title: "Vini Bianchi – Puglia",
    wines: [
      { name: "Malvasia Bianca Cenate Vecchie", producer: "Bonsegna 2023", price: "14 €" },
      { name: "Fiano Roycello", producer: "Tormaresca 2022", price: "16 €" },
    ],
  },
  {
    id: "bianchi-campania",
    title: "Vini Bianchi – Campania",
    wines: [
      { name: "Greco di Tufo", producer: "Panacea 2021", price: "15 €" },
      { name: "Fiano di Avellino", producer: "Panacea 2021", price: "15 €" },
      { name: "Caprettone", producer: "Casa Setaro 2019", price: "18 €" },
    ],
  },
  {
    id: "bianchi-francia",
    title: "Vini Bianchi – Francia",
    wines: [
      { name: "Chablis", producer: "Bernard Dafaix 2020", price: "28 €" },
    ],
  },
  {
    id: "bianchi-toscana",
    title: "Vini Bianchi – Toscana",
    wines: [
      { name: "Vermentino", producer: "Antinori 2024", price: "22 €" },
      { name: "Vermentino Bolgheri", producer: "Casa di Terra 2022", price: "18 €" },
      { name: "Vernaccia Isola Bianca", producer: "Teruzzi 2021", price: "18 €" },
      { name: "Viogner", producer: "Le Palaie 2021", price: "18 €" },
      { name: "Dama Bianca", producer: "Marina Romin 2021", price: "29 €" },
    ],
  },
  {
    id: "bianchi-piemonte",
    title: "Vini Bianchi – Piemonte",
    wines: [
      { name: "Onorata Langhe", producer: "Angelo Negro 2021", price: "21 €" },
      { name: "Serralupini Arneis", producer: "Angelo Negro 2022", price: "24 €" },
      { name: "Blangè Langhe DOC", producer: "Arneis Ceretto 2023", price: "28 €" },
    ],
  },
  {
    id: "bianchi-trentino",
    title: "Vini Bianchi – Trentino",
    wines: [
      { name: "Gewurztraminer", producer: "Terlan 2023", price: "26 €" },
      { name: "Pinot Bianco", producer: "Terlan 2023", price: "22 €" },
      { name: "Pinot Grigio", producer: "St Michael Eppan 2022", price: "22 €" },
      { name: "Sauvignon", producer: "St Michael Eppan 2022", price: "22 €" },
    ],
  },
  {
    id: "bianchi-liguria",
    title: "Vini Bianchi – Liguria",
    wines: [
      { name: "Vermentino", producer: "Lunae Bosoni", price: "19 €" },
    ],
  },
  {
    id: "bianchi-sardegna",
    title: "Vini Bianchi – Sardegna",
    wines: [
      { name: "Lintori", producer: "Capichera 2020", price: "19 €" },
      { name: "Vign’Angena", producer: "Capichera 2021", price: "32 €" },
    ],
  },

  // =========================
  // ROSATI
  // =========================
  {
    id: "rosati",
    title: "Vini Rosati",
    wines: [
      { name: "Scalabrone", producer: "Antinori 2021", price: "18 €" },
      { name: "Matilde", producer: "Cosimo Maria Masini 2021", price: "16 €" },
      { name: "Narthos", producer: "Bonsegna 2023", price: "16 €" },
      { name: "Calafuria", producer: "Tormaresca 2023", price: "18 €" },
    ],
  },

  // =========================
  // ROSSI (Grouped Regions)
  // =========================
  {
    id: "rossi-toscana",
    title: "Vini Rossi – Toscana",
    wines: [
      { name: "Chianti Classico DOCG", producer: "San Jacopo di Vicchiomaggio", price: "18 €" },
      { name: "Chianti Classico DOCG", producer: "La Casa di Bricciano 2019", price: "29 €" },
      { name: "Montecucco Rosso DOC", producer: "Montenero 2017", price: "18 €" },
      { name: "Pomerio (BIO)", producer: "Marina Romin 2022", price: "15 €" },
      { name: "Boccanera (BIO)", producer: "Marina Romin 2022", price: "22 €" },
      { name: "Turseno (BIO)", producer: "Marina Romin 2019", price: "36 €" },
      { name: "Peppoli", producer: "Antinori 2022", price: "23 €" },
      { name: "Villa Antinori", producer: "Antinori 2019", price: "28 €" },
      { name: "Vie Cave", producer: "Antinori 2021", price: "36 €" },
      { name: "Il Bruciato", producer: "Antinori 2022", price: "28 €" },
      { name: "Brunello di Montalcino Pian delle Vigne", producer: "Antinori 2017", price: "67 €" },
      { name: "Rosso di Montalcino Pian delle Vigne", producer: "Antinori 2019", price: "32 €" },
      { name: "Poggio alle Nane Le Mortelle", producer: "Antinori 2017", price: "72 €" },
      { name: "Tignanello", producer: "Antinori 2018", price: "165 €" },
      { name: "Monna Caterina", producer: "Landi - Vinci 2021", price: "17 €" },
      { name: "Conte Ugo", producer: "Antinori 2020", price: "46 €" },
      { name: "Moreccio Bolgheri", producer: "Casa di Terra 2021", price: "24 €" },
      { name: "Nobile di Montepulciano", producer: "La Braccesca 2020", price: "20 €" },
      { name: "Bolgheri Rosso", producer: "Meletti Cavallaro 2020", price: "24 €" },
      { name: "Nambrot (BIO)", producer: "Tenuta Ghizzano 2017", price: "58 €" },
      { name: "Alto", producer: "Petra 2021", price: "32 €" },
      { name: "Colle al Fico", producer: "Petra 2019", price: "32 €" },
      { name: "Hebo", producer: "Petra 2021", price: "20 €" },
      { name: "Montaleo", producer: "Pagani de Marchi 2019", price: "18 €" },
      { name: "Olmata", producer: "Pagani de Marchi 2018", price: "22 €" },
      { name: "Principe Guerriero", producer: "Pagani de Marchi 2019", price: "34 €" },
      { name: "Casalvecchio", producer: "Pagani de Marchi 2017", price: "44 €" },
      { name: "Sotterfugio", producer: "Le Palaie 2019", price: "28 €" },
    ],
  },
];

export function Wines() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            setActive(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 140; // adjust if needed
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F5EDE3] min-h-screen">

      {/* HERO */}
      <div
        className="h-[500px] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/Food/caption (14).jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center"
        >
          <h1 className="text-6xl md:text-8xl text-white font-display mb-6">
            Carta dei Vini
          </h1>
          <div className="w-32 h-px bg-[#E6A23C] mx-auto"></div>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">

          {/* SIDE NAV */}
          <aside className="hidden lg:block sticky top-40 h-fit">
            <div className="rounded-2xl bg-white shadow-sm border border-black/5 p-6">
              <p className="text-xs uppercase tracking-widest text-[#5a5a40] mb-5 text-center">
                Sezioni
              </p>

              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`block px-3 py-2 rounded-lg transition text-sm uppercase tracking-widest ${
                        active === section.id
                          ? "bg-[#8B1E2D] text-white"
                          : "text-[#5a5a40] hover:text-[#8B1E2D]"
                      }`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* CONTENT LIST */}
          <div className="space-y-24">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-40"
              >
                <h2 className="text-4xl md:text-5xl font-display text-[#8B1E2D] mb-12">
                  {section.title}
                </h2>

                <div className="rounded-3xl bg-white shadow-xl border border-black/5 p-8 md:p-12 space-y-8">
                  {section.wines.map((wine) => (
                    <div key={`${section.id}-${wine.name}`}>
                      <div className="flex justify-between items-start gap-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl text-[#8B1E2D] font-medium">
                            {wine.name}
                          </h3>
                          {wine.producer && (
                            <p className="text-[#5a5a40] italic mt-2 text-lg">
                              {wine.producer}
                            </p>
                          )}
                        </div>

                        <span className="text-[#E6A23C] text-2xl md:text-3xl font-serif italic whitespace-nowrap">
                          {wine.price}
                        </span>
                      </div>

                      <div className="mt-6 h-px bg-black/5"></div>
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