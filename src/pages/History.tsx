import { motion } from "motion/react";

export function History() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <header className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Dal 1984
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-6"
          >
            Our History
          </motion.h1>
          <div className="w-24 h-px bg-brand-gold mx-auto"></div>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none text-brand-dark/80 font-serif"
        >
          <img 
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200" 
            alt="Historical Pisa" 
            className="w-full rounded-2xl mb-12 shadow-xl"
            referrerPolicy="no-referrer"
          />
          
          <p className="text-2xl leading-relaxed mb-8 italic text-brand-dark">
            "Cibum Fuori le Mura was born from a simple dream: to bring the authentic flavors of the Tuscan countryside to the gates of Pisa."
          </p>

          <p className="mb-6">
            The story begins in the early 80s, when Nonno Giuseppe, a passionate cook from the hills of Chianti, decided to open a small trattoria just outside the ancient medieval walls of Pisa. He chose the name "Cibum" — the Latin word for food — to emphasize his commitment to the raw, essential quality of ingredients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600" 
              alt="Tuscan Kitchen" 
              className="rounded-xl aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl mb-4 font-display">Tradition Preserved</h3>
              <p>
                Every recipe we serve today has been passed down through three generations. From the secret blend of herbs in our wild boar ragù to the precise temperature of our wood-fired oven, we preserve the techniques that make Tuscan cuisine world-renowned.
              </p>
            </div>
          </div>

          <p className="mb-6">
            Over the decades, Pisa has changed, but our philosophy remains the same. We believe that a meal is not just about sustenance, but about connection — to the land, to history, and to the people we share the table with.
          </p>

          <p className="mb-12">
            Today, Cibum Fuori le Mura continues to be a family-run establishment. We invite you to sit at our table, enjoy a glass of local wine, and become part of our ongoing story.
          </p>

          <div className="text-center">
            <p className="font-display text-3xl italic text-brand-gold">Benvenuti a casa.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
