import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const rilancio = [
  {
    strong: "una cucina moderna e creativa",
    text: "capace di dialogare con la tradizione toscana",
  },
  {
    strong: "una cantina di vini ricercata",
    text: "con etichette selezionate e attenzione al panorama enologico italiano e internazionale",
  },
  {
    strong: "un’identità gastronomica rinnovata",
    text: "che unisce territorio, innovazione e qualità",
  },
];

export function History() {
  return (
    <div className="bg-[#F8F3EC] text-[#2C1810]">
      {/* HERO */}
      <section className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4A853] uppercase tracking-[0.45em] text-xs mb-6 block"
          >
            Cibum Fuori le Mura
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-[#2C1810] leading-[0.95] mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.8rem)" }}
          >
            La nostra storia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="max-w-3xl mx-auto text-lg md:text-2xl text-[#5a4535] font-serif italic leading-relaxed"
          >
            Un ristorante che affonda le sue radici nella tradizione pisana e oggi
            guarda al futuro con una visione contemporanea della ristorazione.
          </motion.p>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-[2rem] bg-white border border-black/5 shadow-xl p-8 md:p-14">
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-10">
              La storia di Cibum Fuori le Mura
            </h2>

            <div className="space-y-8 text-[#3f3126] text-lg md:text-[1.7rem] leading-relaxed">
              <p>
                Nel cuore di Ghezzano, alle porte della città di Pisa, il
                ristorante <strong>Cibum Fuori le Mura</strong> affonda le sue
                radici negli anni ’80.
              </p>

              <p>
                In quel periodo nasce il ristorante <strong>“A Casa Mia”</strong>,
                ospitato all’interno di una tipica <strong>viareggina</strong>,
                una casa indipendente con giardino che offriva un’atmosfera calda
                e familiare. Gli ambienti domestici e accoglienti riflettevano lo
                spirito del locale: un luogo dove sentirsi davvero “a casa”.
              </p>

              <p>
                La cucina si distingueva per la <strong>tradizione toscana di alto livello</strong>,
                basata su ingredienti del territorio e su ricette autentiche,
                interpretate con cura e rispetto per la cultura gastronomica
                locale. Negli anni il ristorante è diventato un punto di
                riferimento per chi cercava una cucina genuina in un contesto
                intimo e conviviale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SINGLE IMAGE OPTIONAL */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-black/5">
            <img
              src="/images/view.jpg"
              alt="Veduta del ristorante Cibum Fuori le Mura"
              className="w-full h-[320px] md:h-[460px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* TRANSITION / RENEWAL */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid gap-8">
          <div className="rounded-[2rem] bg-[#2C1810] text-white p-8 md:p-14 shadow-xl">
            <p
              className="font-serif leading-relaxed text-3xl md:text-5xl"
              style={{ lineHeight: 1.3 }}
            >
              Successivamente il locale è stato rilevato da un imprenditore
              proveniente dal settore dell’abbigliamento, legato al marchio
              Eredi Vincenti. Con questa nuova gestione il ristorante ha
              intrapreso <strong className="text-[#D4A853]">un importante percorso di rinnovamento</strong>.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white border border-black/5 shadow-xl p-8 md:p-14">
            <p className="text-[#3f3126] text-xl md:text-3xl leading-relaxed font-serif">
              Grazie a un nuovo staff e a una visione contemporanea della
              ristorazione, il locale è stato rilanciato con:
            </p>

            <div className="mt-10 space-y-6">
              {rilancio.map((item) => (
                <div
                  key={item.strong}
                  className="rounded-2xl bg-[#F8F3EC] border border-[#2C1810]/6 p-6 md:p-8"
                >
                  <p className="text-[#2C1810] text-lg md:text-2xl leading-relaxed">
                    <span className="font-semibold">{item.strong}</span>, {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center rounded-[2rem] border border-[#D4A853]/30 bg-[#FFFDFC] p-10 md:p-16 shadow-lg">
            <p
              className="font-serif text-[#2C1810] leading-relaxed"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Nasce così l’attuale <strong>Cibum Fuori le Mura</strong>,
              un ristorante che mantiene il legame con la sua storia e con il
              territorio pisano, ma che guarda al futuro attraverso una proposta
              gastronomica contemporanea.
            </p>

            <a
              href="/menu"
              className="inline-flex items-center gap-3 mt-10 bg-[#D4A853] text-[#2C1810] px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-medium hover:opacity-90 transition"
            >
              Scopri il Menu <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}