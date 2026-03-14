import { motion } from "motion/react";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const orari = [
  { giorno: "Lunedì", orario: "12:00–15:00 · 19:00–22:30" },
  { giorno: "Martedì", orario: "12:00–15:00 · 19:00–22:30" },
  { giorno: "Mercoledì", orario: "12:00–15:00 · 19:00–22:30" },
  { giorno: "Giovedì", orario: "12:00–15:00 · 19:00–22:30" },
  { giorno: "Venerdì", orario: "12:00–15:00 · 19:00–22:30" },
  { giorno: "Sabato", orario: "12:00–15:00 · 19:00–22:30" },
  { giorno: "Domenica", orario: "12:00–15:00 · 19:00–22:30" },
];

export function Home() {
  return (
    <div className="bg-[#F9F3EB] overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/environment2.jpg"
            alt="Cibum Fuori le Mura"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/80 via-[#1a0f05]/45 to-[#1a0f05]/30" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-28 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#D4A853] uppercase tracking-[0.45em] text-xs mb-6 block"
            >
              Ghezzano · Pisa · Toscana
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-white leading-none mb-6"
              style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
            >
              CIBUM
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="text-white/75 font-serif italic text-lg md:text-2xl max-w-2xl leading-relaxed mb-10"
            >
              Fuori le mura di Pisa, un luogo dove cucina toscana, mare e accoglienza
              si incontrano in un’atmosfera elegante e autentica.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-3 bg-[#D4A853] text-[#1a0f05] px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-all"
              >
                Scopri il Menù <ArrowRight size={15} />
              </Link>

              <Link
                to="/history"
                className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:border-[#D4A853] hover:text-[#D4A853] transition-all"
              >
                La Nostra Storia
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INFO IMMEDIATE */}
      <section className="-mt-12 relative z-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white shadow-xl border border-black/5 p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#D4A853]/15 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#2C1810]" />
              </div>
              <div>
                <p className="text-[#D4A853] uppercase tracking-[0.3em] text-xs mb-3">
                  Dove siamo
                </p>
                <p className="text-[#2C1810] text-lg leading-relaxed">
                  Via Provinciale Calcesana 10
                  <br />
                  56010 Ghezzano, Pisa
                </p>
                <a
                  href="https://maps.app.goo.gl/VP6WtvDmEzAQx6d56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-[#8B4513] hover:text-[#D4A853] transition-colors"
                >
                  Apri su Google Maps <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="rounded-3xl bg-white shadow-xl border border-black/5 p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#D4A853]/15 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-[#2C1810]" />
              </div>
              <div className="w-full">
                <p className="text-[#D4A853] uppercase tracking-[0.3em] text-xs mb-4">
                  Orari
                </p>
                <div className="space-y-2">
                  {orari.map((item) => (
                    <div key={item.giorno} className="flex justify-between gap-4 text-sm">
                      <span className="text-[#5a4535]">{item.giorno}</span>
                      <span className="text-[#2C1810] font-medium whitespace-nowrap">
                        {item.orario}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-[#2C1810] text-white shadow-xl p-8 flex flex-col justify-between"
          >
            <div>
              <p className="text-[#D4A853] uppercase tracking-[0.3em] text-xs mb-4">
                Cibum Fuori le Mura
              </p>
              <p className="text-white/75 leading-relaxed mb-6">
                Una cucina che unisce tradizione toscana, creatività contemporanea
                e una cantina pensata per accompagnare ogni esperienza a tavola.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 bg-[#D4A853] text-[#1a0f05] px-6 py-3 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-all"
              >
                Menù
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:border-[#D4A853] hover:text-[#D4A853] transition-all"
              >
                Prenota
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4A853] uppercase tracking-[0.4em] text-xs mb-5 block"
          >
            Benvenuti
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[#2C1810] leading-tight mb-8"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Un ristorante dove sentirsi a casa,
            <br />
            <em className="text-[#8B4513]">appena fuori Pisa</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#5a4535]/80 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Cibum Fuori le Mura nasce da una storia profonda e da una nuova visione
            della ristorazione: materie prime selezionate, cucina curata, atmosfera
            calda e una proposta gastronomica che guarda al territorio con eleganza.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          >
            <Link
              to="/history"
              className="inline-flex items-center justify-center gap-2 text-[#8B4513] border-b border-[#8B4513]/30 pb-1 hover:text-[#D4A853] hover:border-[#D4A853] transition-all"
            >
              Leggi la nostra storia <ArrowRight size={14} />
            </Link>
            <Link
              to="/wines"
              className="inline-flex items-center justify-center gap-2 text-[#8B4513] border-b border-[#8B4513]/30 pb-1 hover:text-[#D4A853] hover:border-[#D4A853] transition-all"
            >
              Scopri la carta dei vini <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] overflow-hidden shadow-2xl border border-black/5 bg-black"
          >
            <video
              src="/images/Video.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-[260px] md:h-[480px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Il Menù",
              text: "Antipasti, primi, secondi e dolci pensati per raccontare la nostra cucina.",
              to: "/menu",
            },
            {
              title: "La Storia",
              text: "Dalle origini del locale al rinnovamento che ha dato vita all’attuale Cibum.",
              to: "/history",
            },
            {
              title: "Contatti",
              text: "Indirizzo, prenotazioni e tutti i riferimenti per venirci a trovare.",
              to: "/contact",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={item.to}
                className="block rounded-3xl bg-white shadow-xl border border-black/5 p-8 h-full hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-[#D4A853] uppercase tracking-[0.3em] text-xs mb-4">
                  Esplora
                </p>
                <h3 className="font-serif text-[#2C1810] text-3xl mb-4">
                  {item.title}
                </h3>
                <p className="text-[#5a4535]/75 leading-relaxed mb-6">
                  {item.text}
                </p>
                <span className="inline-flex items-center gap-2 text-[#8B4513]">
                  Vai alla pagina <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Food/caption (8).jpg"
            alt="Cibum"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a0f05]/70" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4A853] uppercase tracking-[0.45em] text-xs mb-6 block"
          >
            Vi aspettiamo
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif leading-tight mb-6"
            style={{ fontSize: "clamp(2.3rem, 6vw, 4.5rem)" }}
          >
            Prenota il tuo tavolo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/65 font-serif italic text-lg md:text-xl mb-10"
          >
            Ti aspettiamo a Ghezzano per un’esperienza fatta di cucina, vino e ospitalità.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-[#D4A853] text-[#1a0f05] px-10 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-all"
            >
              Prenota Ora
            </Link>

            <Link
              to="/menu"
              className="border border-white/30 text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:border-[#D4A853] hover:text-[#D4A853] transition-all"
            >
              Sfoglia il Menù
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}