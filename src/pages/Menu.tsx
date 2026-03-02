import { motion } from "motion/react";
import { foodSections, simpleSections } from "../data/menuFood";

export function Menu() {
  return (
    <div className="bg-[#F5EDE3] min-h-screen">
      {/* HERO */}
      <div
        className="h-[500px] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/Food/caption (10).jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center"
        >
          <h1 className="text-6xl md:text-8xl text-white font-display mb-6">
            Il Nostro Menu
          </h1>
          <div className="w-32 h-px bg-[#E6A23C] mx-auto"></div>
        </motion.div>
      </div>
      <div className="pt-24 pb-32 max-w-7xl mx-auto px-6 md:px-12">
        <header className="text-center mb-28">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#E6A23C] uppercase tracking-[0.4em] text-sm mb-6 block"
          >
            La Nostra Cucina
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl text-[#8B1E2D] font-display"
          >
            Il Menu
          </motion.h1>

          <div className="w-32 h-px bg-[#E6A23C] mx-auto mt-8"></div>

          <p className="max-w-2xl mx-auto mt-8 text-xl md:text-2xl text-[#5a5a40] font-serif italic">
            Tradizione toscana, griglia e frutti di mare — con ingredienti freschi ogni giorno.
          </p>
        </header>

        <div className="space-y-40">
          {foodSections.map((section, index) => (
            <section
              key={section.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[520px] object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}
              >
                <h2 className="text-5xl mb-12 text-[#8B1E2D] font-display">
                  {section.title}
                </h2>

                <div className="space-y-10">
                  {section.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between items-baseline gap-6">
                        <h3 className="text-2xl md:text-3xl font-medium text-[#8B1E2D]">
                          {item.name}
                        </h3>
                        <span className="text-[#E6A23C] font-serif italic text-2xl whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>

                      {item.desc && (
                        <p className="text-lg md:text-xl text-[#5a5a40] mt-3 leading-relaxed">
                          {item.desc}
                        </p>
                      )}

                      <div className="mt-6 h-px bg-black/5"></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>
          ))}

          {/* Simple sections (no big image) */}
          {simpleSections.map((section) => (
            <section key={section.title} className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl text-[#8B1E2D] font-display text-center mb-10">
                {section.title}
              </h2>

              <div className="rounded-3xl bg-white shadow-xl border border-black/5 p-8 md:p-10">
                <div className="space-y-8">
                  {section.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between items-baseline gap-6">
                        <h3 className="text-xl md:text-2xl font-medium text-[#8B1E2D]">
                          {item.name}
                        </h3>
                        <span className="text-[#E6A23C] font-serif italic text-xl whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>

                      {item.desc && (
                        <p className="text-base md:text-lg text-[#5a5a40] mt-2 leading-relaxed">
                          {item.desc}
                        </p>
                      )}

                      <div className="mt-5 h-px bg-black/5"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* CTA to Wine list */}
          <section className="text-center pt-10">
            <p className="text-xl md:text-2xl font-serif italic text-[#5a5a40] mb-6">
              Vuoi scoprire la nostra selezione completa di vini?
            </p>
            <a
              href="/wines"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#E6A23C] text-[#8B1E2D] uppercase tracking-widest text-sm hover:opacity-90 transition"
            >
              Carta dei Vini
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}