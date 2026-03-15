import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type GalleryItem = {
  src: string;
};

export function FoodGallery() {
  const items: GalleryItem[] = useMemo(() => {
    return Array.from({ length: 34 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/Food2/f${n}.jpeg`,
      };
    });
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openItem = openIndex !== null ? items[openIndex] : null;

  return (
    <div className="bg-[#F9F3EB] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#D4A853] uppercase tracking-[0.35em] text-sm mb-4 block"
          >
            Galleria
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-[#2C1810] text-5xl md:text-7xl mb-6"
          >
            I Nostri Piatti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-[#5a4535]/70 leading-relaxed text-base md:text-lg"
          >
            Una selezione di immagini che raccontano la nostra cucina, la nostra atmosfera e il gusto di Cibum.
          </motion.p>

          <div className="w-24 h-px bg-[#D4A853] mx-auto mt-8" />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
          {items.map((item, idx) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => setOpenIndex(idx)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              className="group text-left"
            >
              <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-xl border border-black/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Galleria Cibum ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openItem && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              className="relative w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-2xl">
                <img
                  src={openItem.src}
                  alt="Immagine ingrandita"
                  className="w-full h-auto max-h-[85vh] object-contain bg-black"
                />
              </div>

              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Chiudi"
                className="absolute top-4 right-4 md:top-5 md:right-5 w-11 h-11 rounded-full bg-white/90 text-[#2C1810] shadow-lg hover:bg-white transition"
              >
                ✕
              </button>

              <div className="absolute left-0 right-0 -bottom-16 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex((v) => (v === null ? v : Math.max(0, v - 1)))
                  }
                  disabled={openIndex === 0}
                  className="px-5 py-3 rounded-full bg-white text-[#2C1810] text-xs uppercase tracking-widest shadow-lg hover:bg-[#D4A853] hover:text-[#1a0f05] transition disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#2C1810]"
                >
                  Precedente
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex((v) =>
                      v === null ? v : Math.min(items.length - 1, v + 1)
                    )
                  }
                  disabled={openIndex === items.length - 1}
                  className="px-5 py-3 rounded-full bg-white text-[#2C1810] text-xs uppercase tracking-widest shadow-lg hover:bg-[#D4A853] hover:text-[#1a0f05] transition disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#2C1810]"
                >
                  Successiva
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}