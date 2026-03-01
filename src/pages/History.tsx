import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  UtensilsCrossed,
  Flame,
  Fish,
  Wine,
  ExternalLink,
  BadgeCheck
} from "lucide-react";

const hours = [
  { day: "Domenica", time: "12:00–15:00, 19:00–23:00" },
  { day: "Lunedì", time: "12:00–15:00, 19:00–23:00" },
  { day: "Martedì", time: "12:00–15:00, 19:00–23:00" },
  { day: "Mercoledì", time: "12:00–15:00, 19:00–23:00" },
  { day: "Giovedì", time: "12:00–15:00, 19:00–23:00" },
  { day: "Venerdì", time: "12:00–15:00, 19:00–23:00" },
  { day: "Sabato", time: "12:00–15:00, 19:00–23:00" }
];

const features = [
  { icon: Flame, title: "Grill", desc: "Char-grilled specialties with Tuscan herbs and extra virgin olive oil." },
  { icon: Fish, title: "Frutti di Mare", desc: "Fresh seafood prepared simply—lemon, parsley, and coastal tradition." },
  { icon: Wine, title: "Wine Restaurant", desc: "A curated selection of Tuscan reds and crisp whites to match every plate." },
  { icon: UtensilsCrossed, title: "Bar Ristorante", desc: "Aperitivo, cocktails, and small bites—perfect before dinner." }
];

const cuisineTags = [
  "Grill",
  "Tradizionale",
  "Frutti di Mare",
  "Italiano",
  "Toscana"
];

export function History() {
  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Food/caption (3).jpg"
            alt="Cibum atmosphere"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#F5EDE3]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20">
          <header className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#E6A23C] uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Dal 1984 • Cibum Fuori le Mura
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl text-[#F5EDE3] mb-6"
            >
              Our Story, Your Table
            </motion.h1>

            <p className="text-[#F5EDE3]/85 text-lg md:text-xl leading-relaxed max-w-2xl">
              Between the flavors of Tuscany and the soul of the sea, we cook with fire,
              tradition, and fresh ingredients—served just outside Pisa.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur">
              <span className="text-[#F5EDE3]/90 font-serif italic text-lg">
                “People who love to eat are always the best people.”
              </span>
            </div>
          </header>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="bg-[#F5EDE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl bg-white shadow-xl border border-black/5 p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E6A23C]/15 flex items-center justify-center">
                  <MapPin className="text-[#8B1E2D]" size={20} />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg uppercase tracking-widest text-[#8B1E2D] mb-2">
                    Address
                  </h2>
                  <p className="text-[#5a5a40] leading-relaxed">
                    Via Provinciale Calcesana 10<br />
                    Ghezzano, 56010 Pisa (PI)
                  </p>

                  <a
                    href="https://maps.app.goo.gl/VP6WtvDmEzAQx6d56"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-sm uppercase tracking-widest text-[#8B1E2D] hover:text-[#E6A23C] transition-colors"
                  >
                    Apri nella mappa <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 }}
              className="rounded-2xl bg-white shadow-xl border border-black/5 p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E6A23C]/15 flex items-center justify-center">
                  <Clock className="text-[#8B1E2D]" size={20} />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg uppercase tracking-widest text-[#8B1E2D] mb-4">
                    Hours
                  </h2>

                  <div className="space-y-2 text-sm">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-4 text-[#5a5a40]">
                        <span className="uppercase tracking-wider text-[11px] text-[#5a5a40]/80">
                          {h.day}
                        </span>
                        <span className="font-serif italic">{h.time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8B1E2D]/10 px-4 py-2 text-[#8B1E2D] text-xs uppercase tracking-widest">
                    <BadgeCheck size={14} />
                    Open every day
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Type */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-white shadow-xl border border-black/5 p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E6A23C]/15 flex items-center justify-center">
                  <UtensilsCrossed className="text-[#8B1E2D]" size={20} />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg uppercase tracking-widest text-[#8B1E2D] mb-4">
                    Cuisine
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {cuisineTags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full border border-[#5a5a40]/20 text-[#5a5a40] text-xs uppercase tracking-widest bg-[#F5EDE3]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-[#5a5a40] leading-relaxed">
                    Grill, traditional Tuscan dishes, and seafood—served with a thoughtful wine pairing and a warm bar atmosphere.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY SECTION (split layout) */}
      <section className="bg-[#F5EDE3] pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-[#E6A23C] uppercase tracking-[0.3em] text-sm block mb-4">
                La nostra filosofia
              </span>
              <h2 className="text-4xl md:text-5xl mb-6 text-[#8B1E2D]">
                Fire, Sea, and Tuscan Tradition
              </h2>

              <p className="text-[#5a5a40] leading-relaxed mb-6 font-serif">
                Cibum Fuori le Mura is a place where simple ingredients become unforgettable dishes.
                We honor the land of Tuscany with grilled specialties and handmade recipes, while embracing the sea with fresh seafood plates that celebrate purity and balance.
              </p>

              <p className="text-[#5a5a40] leading-relaxed mb-8">
                Our kitchen is guided by three ideas: respect the ingredient, cook with patience, and serve with warmth.
                From lunchtime classics to evening aperitivo, every moment at Cibum is meant to feel like home—just outside the ancient walls of Pisa.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="rounded-2xl border border-black/5 bg-white shadow-sm p-5"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-10 h-10 rounded-xl bg-[#8B1E2D]/10 flex items-center justify-center">
                          <Icon size={18} className="text-[#8B1E2D]" />
                        </span>
                        <h3 className="text-[#8B1E2D] font-medium">{f.title}</h3>
                      </div>
                      <p className="text-sm text-[#5a5a40] leading-relaxed">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-black/5">
                <img
                  src="/images/Food/caption (8).jpg"
                  alt="Tuscan dish"
                  className="w-full h-[340px] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl border border-black/5">
                <img
                  src="/images/Food/caption (12).jpg"
                  alt="Seafood dish"
                  className="w-full h-[340px] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="rounded-2xl bg-white shadow-xl border border-black/5 p-8">
                <p className="font-serif italic text-xl text-[#8B1E2D] leading-relaxed">
                  “Good food is the foundation of genuine happiness.”
                </p>
                <div className="w-20 h-px bg-[#E6A23C] mt-6" />
                <p className="mt-4 text-[#5a5a40]">
                  Join us for lunch, aperitivo, or dinner—and let Tuscany and the sea meet on your plate.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOCAL HISTORY SECTION */}
      <section className="bg-[#F5EDE3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-[#E6A23C] uppercase tracking-[0.3em] text-sm block mb-4">
                Il territorio
              </span>

              <h2 className="text-4xl md:text-5xl mb-6 text-[#8B1E2D]">
                Just Outside Pisa, Between City and Countryside
              </h2>

              <p className="text-[#5a5a40] leading-relaxed mb-6 font-serif">
                Our restaurant is located in Ghezzano, along Via Provinciale Calcesana—an area that has always been a natural
                passage between Pisa and the gentle hills of the interior. For centuries, travelers, farmers, and merchants moved
                through these roads carrying stories, ingredients, and traditions that shaped the everyday Tuscan table.
              </p>

              <p className="text-[#5a5a40] leading-relaxed mb-6">
                This connection between city and countryside inspires our kitchen: simple dishes built on quality produce,
                honest grilling, and seafood that respects the freshness of the catch. It’s the same philosophy that defines
                Tuscany itself—flavor comes from the land, and hospitality comes from the heart.
              </p>

              <p className="text-[#5a5a40] leading-relaxed">
                Being “fuori le mura” is not only a location, but an identity. It means space to slow down, gather, and enjoy
                the ritual of eating well—where the pace is calmer, and every meal feels like a celebration of place.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-black/5">
                <img
                  src="/images/Food/caption (6).jpg"
                  alt="Local area near Pisa"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-6 rounded-2xl bg-white shadow-xl border border-black/5 p-7">
                <p className="font-serif italic text-xl text-[#8B1E2D] leading-relaxed">
                  “A place is remembered by the meals shared there.”
                </p>
                <div className="w-20 h-px bg-[#E6A23C] mt-5" />
                <p className="mt-4 text-[#5a5a40]">
                  From lunch with family to late dinners with friends, we’re proud to be part of your moments in Pisa.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Food/caption (19).jpg"
            alt="Restaurant table"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl md:text-4xl text-[#F5EDE3] mb-4"
          >
            Benvenuti a casa.
          </motion.h3>

          <p className="text-[#F5EDE3]/85 max-w-2xl mx-auto leading-relaxed mb-8">
            Discover the taste of Tuscany and the freshness of the sea—served with care, every day.
          </p>

          <a
            href="https://maps.app.goo.gl/VP6WtvDmEzAQx6d56"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#E6A23C] text-[#8B1E2D] uppercase tracking-widest text-xs hover:opacity-90 transition"
          >
            Visit Us <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}