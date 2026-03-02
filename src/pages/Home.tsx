import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const menuPreview = [
  {
    category: "Antipasti",
    items: [
      { name: "Culatello di Zibello", price: "18 €", desc: "Giardiniera morgan, parmigiano 36 mesi, aceto balsamico e noci" },
      { name: "Tris di Tartare di Manzo", price: "18 €", desc: "Frutta, funghi porcini, acciughe cantabrico e burrata" },
      { name: "Gamberoni", price: "16 €", desc: "Speck IGT, burrata e pomodorini confit" },
    ]
  },
  {
    category: "Primi",
    items: [
      { name: "Tonnarelli", price: "18 €", desc: "Alle uova di riccio di mare e vongole" },
      { name: "Risotto allo Zafferano", price: "20 €", desc: "Con cozze e scampi" },
      { name: "Ravioli di Zucca", price: "16 €", desc: "Burro francese, salvia, amaretti e parmigiano 36 mesi" },
    ]
  },
  {
    category: "Secondi",
    items: [
      { name: "Bistecca alla Fiorentina", price: "60 €/kg", desc: "" },
      { name: "Rombo al Vapore", price: "18 €", desc: "Crema di carciofi e polvere di limoni di Amalfi" },
      { name: "Pescato del Giorno", price: "65 €/kg", desc: "All'isolana o al sale" },
    ]
  },
];

export function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[#F9F3EB] overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-screen flex items-end pb-20 overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="/images/view.jpg"
            alt="Cibum Ristorante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/80 via-[#1a0f05]/30 to-transparent" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[#D4A853] uppercase tracking-[0.5em] text-xs mb-6 font-light"
            >
              Ghezzano · Pisa · Toscana
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="font-serif text-white leading-none mb-8"
              style={{ fontSize: "clamp(4rem, 12vw, 11rem)", letterSpacing: "-0.02em" }}
            >
              CIBUM
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
            >
              <p className="text-white/70 font-serif italic text-xl md:text-2xl max-w-md leading-relaxed">
                "Fuori le Mura, dentro il cuore della cucina toscana."
              </p>
              <div className="flex gap-4">
                <Link
                  to="/menu"
                  className="group flex items-center gap-3 bg-[#D4A853] text-[#1a0f05] px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-all duration-300"
                >
                  Il Menù <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 border border-white/40 text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-300"
                >
                  Prenota
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 z-10"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────── */}
      <section className="py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-[#D4A853] uppercase tracking-[0.4em] text-xs mb-6 block">Chi Siamo</span>
            <h2 className="font-serif text-[#2C1810] leading-tight mb-10"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Un'esperienza autentica,<br />
              <em className="text-[#8B4513]">oltre le mura</em>
            </h2>
            <p className="text-[#5a4535]/80 text-lg leading-relaxed mb-6">
              Cibum Fuori le Mura è un elegante e accogliente ristorante con boutique culinaria situato a Ghezzano, appena fuori dal centro storico di Pisa.
            </p>
            <p className="text-[#5a4535]/80 leading-relaxed mb-10">
              Il ristorante offre un'ampia varietà di deliziosi primi piatti, frutti di mare, sapori ricercati e specialità di carne, il tutto con ingredienti tradizionali italiani e toscani di altissima qualità. Che siate locali o visitatori, l'arredamento rustico e l'atmosfera calda e accogliente fanno di Cibum Fuori le Mura una meta memorabile per gli amanti della buona cucina.
            </p>
            <Link
              to="/history"
              className="inline-flex items-center gap-3 text-[#8B4513] font-medium border-b border-[#8B4513]/40 pb-1 hover:border-[#D4A853] hover:text-[#D4A853] transition-all"
            >
              La Nostra Storia <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="/images/Food/caption (1).jpg"
                alt="Cucina Cibum"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-[#2C1810] text-[#F9F3EB] p-8 rounded-2xl max-w-[16rem] hidden lg:block shadow-xl">
              <p className="font-serif italic text-lg leading-snug mb-3">
                "Nessun pasto è completo senza un irresistibile dessert."
              </p>
              <span className="text-[#D4A853] text-xs uppercase tracking-widest">— La Filosofia Cibum</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRADIZIONE TOSCANA ───────────────────────────────────────── */}
      <section className="bg-[#2C1810] text-[#F9F3EB] py-32 px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <span className="text-[#D4A853] uppercase tracking-[0.4em] text-xs mb-6 block">La Cultura del Cibo</span>
              <h2 className="font-serif text-[#F9F3EB] leading-tight mb-8"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Mangiare<br />alla<br /><em className="text-[#D4A853]">Toscana</em>
              </h2>
              <div className="w-16 h-px bg-[#D4A853] mb-8" />
              <Link
                to="/history"
                className="inline-flex items-center gap-3 text-[#D4A853] text-sm uppercase tracking-widest hover:gap-5 transition-all"
              >
                Scopri di più <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-2 space-y-10"
            >
              <p className="text-[#F9F3EB]/70 text-xl font-serif italic leading-relaxed border-l-2 border-[#D4A853] pl-8">
                In Toscana, il pasto non è mai un semplice atto di nutrizione: è un rito collettivo, un momento sacro in cui la famiglia si riunisce attorno alla tavola e il tempo rallenta.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    title: "Ingredienti del territorio",
                    text: "Lavoriamo con produttori locali selezionati per garantire materie prime di stagione, genuine e tracciabili, nel rispetto della tradizione contadina toscana."
                  },
                  {
                    title: "La lentezza come valore",
                    text: "Cuciniamo lentamente, come si faceva un tempo. I fondi riducono per ore, la pasta è tirata a mano, il pane sforna ogni mattina."
                  },
                  {
                    title: "Convivialità prima di tutto",
                    text: "Ogni tavolo da noi è una storia. Che siate in coppia, in famiglia o tra amici, vogliamo che vi sentiate a casa — con tutto il calore toscano che ci contraddistingue."
                  },
                  {
                    title: "Il vino come linguaggio",
                    text: "Il vino in Toscana è parte del pasto, non un accessorio. La nostra carta è una mappa enologica di questa terra straordinaria."
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-px bg-[#D4A853]" />
                      <h4 className="text-[#D4A853] text-sm uppercase tracking-widest">{item.title}</h4>
                    </div>
                    <p className="text-[#F9F3EB]/60 leading-relaxed text-sm">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CUCINA PREVIEW ───────────────────────────────────────────── */}
      <section className="py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
          >
            <div>
              <span className="text-[#D4A853] uppercase tracking-[0.4em] text-xs mb-4 block">La Nostra Cucina</span>
              <h2 className="font-serif text-[#2C1810]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                I Sapori di Cibum
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 border border-[#2C1810]/30 text-[#2C1810] px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-[#2C1810] hover:text-[#F9F3EB] transition-all duration-300 shrink-0"
            >
              Menù Completo <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Menu categories with images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { label: "Antipasti", img: "/images/Food/caption (1).jpg", link: "/menu" },
              { label: "Primi Piatti", img: "/images/Food/caption (4).jpg", link: "/menu" },
              { label: "Dolci", img: "/images/Food/caption (12).jpg", link: "/menu" },
            ].map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link to={cat.link} className="group block">
                  <div className="overflow-hidden rounded-2xl aspect-[3/4] mb-5 relative">
                    <img
                      src={cat.img}
                      alt={cat.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="font-serif text-[#2C1810] text-2xl group-hover:text-[#8B4513] transition-colors">
                    {cat.label}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Menu items preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {menuPreview.map((section, si) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: si * 0.1 }}
              >
                <h4 className="text-[#D4A853] uppercase tracking-[0.3em] text-xs mb-6 pb-4 border-b border-[#2C1810]/10">
                  {section.category}
                </h4>
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between items-baseline gap-4">
                        <span className="font-serif text-[#2C1810] text-lg">{item.name}</span>
                        <span className="text-[#D4A853] text-sm shrink-0 italic">{item.price}</span>
                      </div>
                      {item.desc && (
                        <p className="text-[#5a4535]/60 text-sm mt-1 leading-relaxed">{item.desc}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VINI ─────────────────────────────────────────────────────── */}
      <section className="relative py-40 px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/environment2.jpg"
            alt="Cantina Cibum"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a0f05]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4A853] uppercase tracking-[0.4em] text-xs mb-6 block">La Cantina</span>
            <h2 className="font-serif text-white leading-tight mb-8"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              I Nostri Vini
            </h2>
            <p className="text-white/60 font-serif italic text-xl leading-relaxed mb-10">
              "Il vino è l'anima della tavola toscana. La nostra cantina è un viaggio tra le colline del Chianti, la costa di Bolgheri e le eccellenze d'Italia."
            </p>
            <div className="space-y-6 mb-12">
              {[
                { label: "Bianchi & Rosati", text: "Selezioni da Puglia, Campania, Toscana, Piemonte e Sardegna." },
                { label: "Rossi Pregiati", text: "Brunello, Barolo, Barbaresco e i grandi Super Toscani." },
                { label: "Bollicine & Champagne", text: "Da Franciacorta a Perrier-Jouët, per ogni celebrazione." },
              ].map((v) => (
                <div key={v.label} className="flex items-start gap-5">
                  <div className="w-8 h-px bg-[#D4A853] mt-3 shrink-0" />
                  <div>
                    <h4 className="text-white text-base mb-1">{v.label}</h4>
                    <p className="text-white/40 text-sm">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/wines"
              className="inline-flex items-center gap-3 bg-[#D4A853] text-[#1a0f05] px-10 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-all"
            >
              Carta dei Vini <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-10">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                <img src="/images/wine.jpg" alt="Vino" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square shadow-xl">
                <img src="/images/wine2.jpg" alt="Cantina" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-square shadow-xl">
                <img src="/images/wine3.jpg" alt="Vigna" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                <img src="/images/wine4.jpg" alt="Calice" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AMBIENTE ─────────────────────────────────────────────────── */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-[#F9F3EB]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#D4A853] uppercase tracking-[0.4em] text-xs mb-4 block">L'Atmosfera</span>
            <h2 className="font-serif text-[#2C1810]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Il Nostro Ambiente
            </h2>
          </motion.div>

          <div className="grid grid-cols-12 gap-6 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-7 rounded-3xl overflow-hidden aspect-video"
            >
              <img src="/images/environment.jpg" alt="Ambiente" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 md:col-span-5 rounded-3xl overflow-hidden aspect-video md:aspect-auto"
            >
              <img
                src="/images/environment3.jpg"
                alt="Sala"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2C1810]/10 rounded-2xl overflow-hidden">
            {[
              { number: "120", label: "Coperti" },
              { number: "1984", label: "Anno di fondazione" },
              { number: "100%", label: "Ingredienti toscani" },
              { number: "∞", label: "Passione" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#F9F3EB] py-12 text-center">
                <span className="block font-serif text-[#D4A853]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  {stat.number}
                </span>
                <span className="text-[#5a4535]/60 text-xs uppercase tracking-widest mt-2 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STAFF ────────────────────────────────────────────────────── */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=1000"
                alt="Lo Staff"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-36 h-36 bg-[#D4A853] rounded-full flex items-center justify-center text-center p-4 rotate-12 hidden md:flex shadow-xl">
              <p className="text-[#1a0f05] font-serif italic text-sm leading-tight">Con Amore e Passione</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4A853] uppercase tracking-[0.4em] text-xs mb-6 block">La Famiglia</span>
            <h2 className="font-serif text-[#2C1810] leading-tight mb-10"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
              Il Nostro Staff
            </h2>
            <p className="text-[#5a4535]/80 text-lg leading-relaxed mb-6">
              Da noi, la cucina è una famiglia. Ogni membro del nostro team condivide la stessa passione per la buona tavola e per l'ospitalità autentica toscana.
            </p>
            <p className="text-[#5a4535]/80 leading-relaxed mb-10">
              Dai nostri chef che cucinano con tecniche tramandate di generazione in generazione, ai nostri sommelier che vi guidano tra i migliori vini del territorio — siamo qui per rendere la vostra esperienza indimenticabile.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="border-l-2 border-[#D4A853] pl-5">
                <h4 className="font-serif text-[#2C1810] text-xl mb-2">Chef Marco</h4>
                <p className="text-sm text-[#5a4535]/60">Executive Chef, 20 anni di cucina toscana.</p>
              </div>
              <div className="border-l-2 border-[#D4A853] pl-5">
                <h4 className="font-serif text-[#2C1810] text-xl mb-2">Giulia</h4>
                <p className="text-sm text-[#5a4535]/60">Head Sommelier, esperta di terroir locale.</p>
              </div>
            </div>
            <Link
              to="/history"
              className="inline-flex items-center gap-3 text-[#8B4513] font-medium border-b border-[#8B4513]/40 pb-1 hover:text-[#D4A853] hover:border-[#D4A853] transition-all"
            >
              La Nostra Storia <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── NAV LINKS GRID ───────────────────────────────────────────── */}
      <section className="bg-[#2C1810] py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#D4A853] uppercase tracking-[0.4em] text-xs mb-4 block">Esplora</span>
            <h2 className="font-serif text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Tutto Cibum
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Vini", to: "/wines", icon: "🍷" },
              { label: "Menù", to: "/menu", icon: "🍽" },
              { label: "Galleria", to: "/gallery", icon: "📷" },
              { label: "Storia", to: "/history", icon: "📜" },
              { label: "News", to: "/news", icon: "✦" },
              { label: "Contatti", to: "/contact", icon: "✉" },
            ].map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={link.to}
                  className="group flex flex-col items-center justify-center gap-3 border border-white/10 rounded-2xl py-10 hover:border-[#D4A853] hover:bg-[#D4A853]/5 transition-all duration-300 text-center"
                >
                  <span className="text-3xl">{link.icon}</span>
                  <span className="text-white/70 uppercase tracking-widest text-xs group-hover:text-[#D4A853] transition-colors">
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ───────────────────────────────────────────────── */}
      <section className="relative py-48 px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Food/caption (8).jpg"
            alt="Prenota"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a0f05]/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4A853] uppercase tracking-[0.5em] text-xs mb-6 block"
          >
            Vi aspettiamo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif leading-tight mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Prenota il tuo<br />tavolo da noi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 font-serif italic text-xl mb-12"
          >
            Un'esperienza autentica vi attende, tra i profumi e i sapori della Toscana.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-[#D4A853] text-[#1a0f05] px-12 py-5 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-all"
            >
              Prenota Ora
            </Link>
            <Link
              to="/menu"
              className="border border-white/30 text-white px-12 py-5 rounded-full text-sm uppercase tracking-widest hover:border-[#D4A853] hover:text-[#D4A853] transition-all"
            >
              Sfoglia il Menù
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}