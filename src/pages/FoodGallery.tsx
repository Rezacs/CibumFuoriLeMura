import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type GalleryItem = {
  src: string;
  title: string;
  desc: string;
  tag: string;
};

export function FoodGallery() {
  const items: GalleryItem[] = useMemo(() => {
    const meta = [
      { title: "Pizza Margherita", tag: "Pizza", desc: "San Marzano tomato, fior di latte, basil—simple, iconic, and always fresh." },
      { title: "Pappardelle al Ragù", tag: "Pasta", desc: "Slow-cooked meat sauce, wide ribbons of pasta, and a touch of aged parmesan." },
      { title: "Risotto ai Funghi", tag: "Risotto", desc: "Creamy rice with porcini mushrooms, finished with butter and parmesan." },
      { title: "Bruschetta Toscana", tag: "Antipasti", desc: "Toasted bread topped with tomatoes, garlic, olive oil, and basil." },
      { title: "Tagliere di Salumi", tag: "Antipasti", desc: "A selection of cured meats and pecorino—perfect to share with a glass of red." },
      { title: "Orata al Forno", tag: "Fish", desc: "Oven-baked sea bream with herbs, lemon, and roasted potatoes." },
      { title: "Spaghetti alle Vongole", tag: "Seafood", desc: "Clams, garlic, parsley, and a light white-wine sauce—coastal comfort." },
      { title: "Lasagna alla Bolognese", tag: "Pasta", desc: "Layers of ragù and béchamel baked until golden and bubbling." },
      { title: "Tagliata di Manzo", tag: "Steak", desc: "Sliced beef with rosemary, sea salt, and extra virgin olive oil." },
      { title: "Calamari Fritti", tag: "Seafood", desc: "Crispy fried squid served with lemon—light, crunchy, irresistible." },
      { title: "Gnocchi al Pesto", tag: "Pasta", desc: "Soft gnocchi tossed in basil pesto and parmesan for a fragrant finish." },
      { title: "Insalata Mediterranea", tag: "Salad", desc: "Fresh greens, cherry tomatoes, olives, and a simple vinaigrette." },
      { title: "Pizza Tartufo", tag: "Pizza", desc: "Truffle cream, mushrooms, mozzarella—rich aroma and deep flavor." },
      { title: "Agnello Arrosto", tag: "Secondi", desc: "Slow-roasted lamb with garlic and rosemary—tender and savory." },
      { title: "Melanzane alla Parmigiana", tag: "Vegetarian", desc: "Baked eggplant with tomato sauce, mozzarella, and parmesan." },
      { title: "Burrata & Pomodorini", tag: "Antipasti", desc: "Creamy burrata with sweet tomatoes, basil, and olive oil." },
      { title: "Tiramisu", tag: "Dessert", desc: "Coffee-soaked layers and mascarpone cream—classic Italian sweetness." },
      { title: "Negroni", tag: "Drinks", desc: "Gin, vermouth, Campari—balanced bitterness for a perfect aperitivo." },
      { title: "Chef’s Seasonal Special", tag: "Seasonal", desc: "A rotating plate inspired by the market—always fresh, always unique." }
    ];

    // build 19 items, mapping 1..19 to captions above
    return Array.from({ length: 19 }, (_, i) => {
      const n = i + 1;
      const m = meta[i] ?? { title: `Dish ${n}`, tag: "Food", desc: "A delicious moment from our kitchen." };
      return {
        src: `/images/Food/caption (${n}).jpg`,
        ...m
      };
    });
  }, []);

  const tags = useMemo(() => ["All", ...Array.from(new Set(items.map(i => i.tag)))], [items]);
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") return items;
    return items.filter(i => i.tag === activeTag);
  }, [items, activeTag]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openItem = openIndex !== null ? filtered[openIndex] : null;

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Galleria
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-6"
          >
            Our Food
          </motion.h1>

          <p className="max-w-2xl mx-auto text-brand-dark/60 leading-relaxed">
            A visual taste of our kitchen: handcrafted pasta, stone-baked pizza, fresh seafood, and seasonal favorites.
          </p>

          <div className="w-24 h-px bg-brand-gold mx-auto mt-8" />
        </header>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tags.map((t) => {
            const active = t === activeTag;
            return (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={[
                  "px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all",
                  active
                    ? "bg-brand-gold text-brand-dark"
                    : "border border-brand-dark/10 text-brand-dark/60 hover:border-brand-gold/50 hover:text-brand-dark"
                ].join(" ")}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((item, idx) => (
            <motion.button
              key={item.src}
              onClick={() => setOpenIndex(idx)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-left group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-brand-dark/5">
                <div className="aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* subtle overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-95" />

                {/* label */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-brand-cream/90 text-brand-dark px-3 py-1 text-[11px] uppercase tracking-widest">
                    {item.tag}
                  </span>
                </div>

                {/* info box */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="rounded-xl bg-brand-dark/70 backdrop-blur-sm border border-white/10 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-brand-cream text-lg font-medium leading-snug">
                        {item.title}
                      </h3>
                      <span className="text-brand-gold text-xs uppercase tracking-widest mt-1">
                        View
                      </span>
                    </div>
                    <p className="text-brand-cream/75 text-sm leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openItem ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              className="w-full max-w-4xl rounded-2xl overflow-hidden bg-brand-cream shadow-2xl"
              initial={{ scale: 0.97, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-black">
                  <img
                    src={openItem.src}
                    alt={openItem.title}
                    className="w-full h-full object-cover max-h-[70vh] md:max-h-[80vh]"
                  />
                </div>

                <div className="p-7 md:p-8">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center rounded-full bg-brand-gold/15 text-brand-dark px-3 py-1 text-[11px] uppercase tracking-widest">
                      {openItem.tag}
                    </span>
                    <button
                      onClick={() => setOpenIndex(null)}
                      className="text-brand-dark/60 hover:text-brand-dark transition-colors text-sm"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </div>

                  <h2 className="text-3xl md:text-4xl mb-3">{openItem.title}</h2>
                  <p className="text-brand-dark/60 leading-relaxed mb-6">{openItem.desc}</p>

                  <div className="flex gap-2">
                    <button
                      className="px-4 py-2 rounded-full bg-brand-dark text-brand-cream text-xs uppercase tracking-widest hover:opacity-90 transition"
                      onClick={() => setOpenIndex((v) => (v === null ? v : Math.max(0, v - 1)))}
                      disabled={openIndex === 0}
                    >
                      Prev
                    </button>
                    <button
                      className="px-4 py-2 rounded-full bg-brand-dark text-brand-cream text-xs uppercase tracking-widest hover:opacity-90 transition"
                      onClick={() => setOpenIndex((v) => (v === null ? v : Math.min(filtered.length - 1, v + 1)))}
                      disabled={openIndex === filtered.length - 1}
                    >
                      Next
                    </button>
                  </div>

                  <p className="text-brand-dark/40 text-xs mt-6">
                    Tip: click outside the card to close.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}