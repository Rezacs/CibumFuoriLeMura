import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  UtensilsCrossed,
  Flame,
  Fish,
  Wine,
  ExternalLink,
  BadgeCheck,
  Leaf,
  Heart
} from "lucide-react";

const orari = [
  { giorno: "Domenica", orario: "12:00–15:00 · 19:00–23:00" },
  { giorno: "Lunedì",   orario: "12:00–15:00 · 19:00–23:00" },
  { giorno: "Martedì",  orario: "12:00–15:00 · 19:00–23:00" },
  { giorno: "Mercoledì",orario: "12:00–15:00 · 19:00–23:00" },
  { giorno: "Giovedì",  orario: "12:00–15:00 · 19:00–23:00" },
  { giorno: "Venerdì",  orario: "12:00–15:00 · 19:00–23:00" },
  { giorno: "Sabato",   orario: "12:00–15:00 · 19:00–23:00" },
];

const caratteristiche = [
  {
    icon: Flame,
    title: "Grill & Brace",
    desc: "Specialità alla griglia con erbe toscane e olio extravergine d'oliva del territorio.",
  },
  {
    icon: Fish,
    title: "Frutti di Mare",
    desc: "Pesce freschissimo preparato con semplicità: limone, prezzemolo e tradizione costiera.",
  },
  {
    icon: Wine,
    title: "Wine Restaurant",
    desc: "Una selezione curata di rossi toscani e bianchi freschi per accompagnare ogni piatto.",
  },
  {
    icon: UtensilsCrossed,
    title: "Bar Ristorante",
    desc: "Aperitivo, cocktail e piccoli assaggi — il preludio perfetto alla cena.",
  },
  {
    icon: Leaf,
    title: "Ingredienti del Territorio",
    desc: "Lavoriamo con produttori locali selezionati per garantire freschezza e autenticità stagionale.",
  },
  {
    icon: Heart,
    title: "Ospitalità Toscana",
    desc: "Ogni tavolo è una storia. Vogliamo che vi sentiate a casa, con tutto il calore toscano.",
  },
];

const tags = ["Grill", "Tradizionale", "Frutti di Mare", "Italiano", "Toscana", "Boutique Culinaria"];

const abitudiniToscane = [
  {
    titolo: "Il pranzo, sacro e lento",
    testo:
      "In Toscana, il pranzo non è mai un pasto frettoloso. È un momento di pausa, di convivialità, spesso accompagnato da un calice di vino locale. Si inizia con un antipasto, si passa ai primi — pasta fatta in casa o risotto — e poi ai secondi, con i contorni serviti a parte. I dessert chiudono il cerchio con dolcezza.",
  },
  {
    titolo: "La cena, il momento della famiglia",
    testo:
      "La sera, i toscani si ritrovano. La cena è il momento più sociale della giornata: si mangia tardi, si parla molto, si condivide. I bambini siedono accanto agli anziani, e il vino scorre naturalmente tra le conversazioni. Non si ha fretta — il tempo a tavola è tempo ben speso.",
  },
  {
    titolo: "L'aperitivo, un rito",
    testo:
      "Dalle 18 alle 20, Ghezzano e tutta la Toscana si fermano per l'aperitivo. Un prosecco, qualche crostino con salumi o formaggi, magari degli sformatini di verdure — è il modo toscano di salutare la fine della giornata e prepararsi al piacere della cena. Da Cibum, il nostro Apericena segue esattamente questo ritmo.",
  },
  {
    titolo: "Il vino, non l'eccezione",
    testo:
      "In Toscana, il vino non è un lusso: è parte integrante del pasto. Un Chianti Classico con le carni, un Vermentino con il pesce, un Brunello per le grandi occasioni. Non si abbina per moda, ma per memoria — perché quei sapori insieme li conosce chiunque sia cresciuto in questa terra.",
  },
];

export function History() {
  return (
    <div className="pt-24 bg-[#F9F3EB]">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Food/caption (3).jpg"
            alt="Cibum atmosfera"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/85 via-[#1a0f05]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pb-20 w-full">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#D4A853] uppercase tracking-[0.5em] text-xs mb-6 block"
          >
            Dal 1984 · Cibum Fuori le Mura · Ghezzano, Pisa
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-white leading-none mb-8"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)", letterSpacing: "-0.02em" }}
          >
            La Nostra Storia,<br />
            <em className="text-[#D4A853]">Il Vostro Tavolo</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/70 font-serif italic text-xl md:text-2xl max-w-2xl leading-relaxed"
          >
            "Tra i sapori della Toscana e l'anima del mare, cuciniamo con fuoco, tradizione e ingredienti freschi — serviti appena fuori le mura di Pisa."
          </motion.p>
        </div>
      </section>

      {/* ── INFO CARDS ────────────────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Indirizzo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white shadow-lg border border-[#2C1810]/5 p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#D4A853]/15 flex items-center justify-center shrink-0">
                <MapPin className="text-[#2C1810]" size={20} />
              </div>
              <div>
                <h2 className="text-xs uppercase tracking-[0.3em] text-[#D4A853] mb-3">Dove Siamo</h2>
                <p className="text-[#5a4535] leading-relaxed">
                  Via Provinciale Calcesana 10<br />
                  Ghezzano, 56010 Pisa (PI)
                </p>
                <a
                  href="https://maps.app.goo.gl/VP6WtvDmEzAQx6d56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-xs uppercase tracking-widest text-[#8B4513] hover:text-[#D4A853] transition-colors"
                >
                  Apri nella mappa <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Orari */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl bg-white shadow-lg border border-[#2C1810]/5 p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#D4A853]/15 flex items-center justify-center shrink-0">
                <Clock className="text-[#2C1810]" size={20} />
              </div>
              <div className="flex-1">
                <h2 className="text-xs uppercase tracking-[0.3em] text-[#D4A853] mb-4">Orari</h2>
                <div className="space-y-2">
                  {orari.map((h) => (
                    <div key={h.giorno} className="flex justify-between gap-4">
                      <span className="text-[10px] uppercase tracking-wider text-[#5a4535]/70">{h.giorno}</span>
                      <span className="font-serif italic text-[#5a4535] text-sm">{h.orario}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2C1810]/8 px-4 py-2 text-[#2C1810] text-[10px] uppercase tracking-widest">
                  <BadgeCheck size={13} />
                  Aperto tutti i giorni
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cucina */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-white shadow-lg border border-[#2C1810]/5 p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#D4A853]/15 flex items-center justify-center shrink-0">
                <UtensilsCrossed className="text-[#2C1810]" size={20} />
              </div>
              <div>
                <h2 className="text-xs uppercase tracking-[0.3em] text-[#D4A853] mb-4">La Nostra Cucina</h2>
                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full border border-[#2C1810]/15 text-[#5a4535] text-[10px] uppercase tracking-widest bg-[#F9F3EB]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-[#5a4535] leading-relaxed text-sm">
                  Grill, piatti tradizionali toscani e frutti di mare — serviti con abbinamenti vino curati e la calorosa atmosfera del nostro bar ristorante.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FILOSOFIA ─────────────────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4A853] uppercase tracking-[0.4em] text-xs mb-6 block">La Nostra Filosofia</span>
            <h2 className="font-serif text-[#2C1810] leading-tight mb-10"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Fuoco, Mare<br />e <em className="text-[#8B4513]">Tradizione Toscana</em>
            </h2>
            <p className="text-[#5a4535]/80 text-lg font-serif italic leading-relaxed mb-6">
              Cibum Fuori le Mura è un luogo dove ingredienti semplici diventano piatti indimenticabili.
            </p>
            <p className="text-[#5a4535]/80 leading-relaxed mb-6">
              Onoriamo la terra toscana con specialità alla griglia e ricette fatte a mano, abbracciando il mare con piatti di pesce che celebrano purezza ed equilibrio. La nostra cucina è guidata da tre principi: rispettare l'ingrediente, cucinare con pazienza, servire con calore.
            </p>
            <p className="text-[#5a4535]/80 leading-relaxed mb-10">
              Dal pranzo all'aperitivo, fino alla cena — ogni momento da Cibum vuole farti sentire a casa. Appena fuori dalle antiche mura di Pisa, ma dentro il cuore della cucina toscana.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caratteristiche.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-[#2C1810]/8 bg-[#F9F3EB] p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#2C1810]/8 flex items-center justify-center">
                        <Icon size={16} className="text-[#8B4513]" />
                      </div>
                      <h3 className="text-[#2C1810] font-medium text-sm">{f.title}</h3>
                    </div>
                    <p className="text-xs text-[#5a4535]/70 leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                <img src="/images/Food/caption (8).jpg" alt="Piatto toscano" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl mt-10">
                <img src="/images/Food/caption (4).jpg" alt="Pasta" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-56">
              <img src="/images/Food/caption (12).jpg" alt="Dessert" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl bg-[#2C1810] p-8">
              <p className="font-serif italic text-xl text-[#D4A853] leading-relaxed mb-4">
                "Il buon cibo è il fondamento della vera felicità."
              </p>
              <div className="w-12 h-px bg-[#D4A853]/40" />
              <p className="mt-4 text-white/60 text-sm leading-relaxed">
                Vieni a pranzo, a cena o per l'aperitivo — e lascia che Toscana e mare si incontrino nel tuo piatto.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PISA & TERRITORIO ─────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
              <img src="/images/Food/caption (6).jpg" alt="Territorio pisano" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
                <img src="/images/Food/caption (1).jpg" alt="Antipasti" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
                <img src="/images/Food/caption (19).jpg" alt="Tavola" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4A853] uppercase tracking-[0.4em] text-xs mb-6 block">Il Territorio</span>
            <h2 className="font-serif text-[#2C1810] leading-tight mb-10"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Appena fuori Pisa,<br />
              <em className="text-[#8B4513]">tra città e campagna</em>
            </h2>
            <p className="text-[#5a4535]/80 text-lg font-serif italic leading-relaxed mb-6">
              Il nostro ristorante si trova a Ghezzano, lungo Via Provinciale Calcesana — un'area che da sempre è stata via di passaggio naturale tra Pisa e le dolci colline dell'interno.
            </p>
            <p className="text-[#5a4535]/80 leading-relaxed mb-6">
              Per secoli, contadini, mercanti e viaggiatori hanno percorso queste strade portando storie, ingredienti e tradizioni che hanno plasmato la tavola toscana di ogni giorno. Questo legame tra città e campagna ispira la nostra cucina: piatti semplici costruiti su materie prime di qualità, grigliate oneste e pesce che rispetta la freschezza del pescato.
            </p>
            <p className="text-[#5a4535]/80 leading-relaxed">
              Essere "fuori le mura" non è solo una posizione geografica, ma un'identità. Significa spazio per rallentare, ritrovarsi e godere del rituale del mangiar bene — dove il ritmo è più calmo e ogni pasto sembra una celebrazione del luogo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ABITUDINI TOSCANE ─────────────────────────────────────────── */}
      <section className="bg-[#2C1810] py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#D4A853] uppercase tracking-[0.5em] text-xs mb-6 block">La Cultura del Cibo</span>
            <h2 className="font-serif text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Mangiare in Toscana
            </h2>
            <p className="text-white/50 font-serif italic text-xl max-w-2xl mx-auto leading-relaxed">
              "In Toscana, il pasto non è mai un semplice atto di nutrizione: è un rito collettivo, un momento sacro in cui il tempo rallenta e la tavola diventa il centro del mondo."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {abitudiniToscane.map((item, i) => (
              <motion.div
                key={item.titolo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-[#D4A853]/40 transition-colors"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-8 h-px bg-[#D4A853]" />
                  <h3 className="text-[#D4A853] text-sm uppercase tracking-widest">{item.titolo}</h3>
                </div>
                <p className="text-white/60 leading-relaxed">{item.testo}</p>
              </motion.div>
            ))}
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-4 gap-4">
            {[
              "/images/Food/caption (2).jpg",
              "/images/Food/caption (5).jpg",
              "/images/Food/caption (9).jpg",
              "/images/Food/caption (11).jpg",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl overflow-hidden aspect-square"
              >
                <img src={src} alt={`Cibum ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PISA STORIA ───────────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[#D4A853] uppercase tracking-[0.4em] text-xs mb-6 block">Pisa e la Sua Tavola</span>
            <h2 className="font-serif text-[#2C1810] leading-tight max-w-2xl"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Una città ricca di storia,<br />
              <em className="text-[#8B4513]">una cucina ricca di carattere</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <p className="text-[#5a4535]/80 text-lg font-serif italic leading-relaxed">
                Pisa non è solo la Torre Pendente. È una città universitaria, marinara e contadina allo stesso tempo — con una tradizione culinaria profonda che affonda le radici nel Medioevo.
              </p>
              <p className="text-[#5a4535]/80 leading-relaxed">
                La cucina pisana è figlia di questo incontro tra terra e mare. Da un lato, i piatti della campagna: la ribollita, la pasta al cinghiale, i fagioli all'uccelletto, le carni alla brace. Dall'altro, i sapori della costa: i cacciucchi, i totani, le arselle del Gombo — quelle stesse che trovate nella nostra carta dei primi.
              </p>
              <p className="text-[#5a4535]/80 leading-relaxed">
                La tradizione pisana vuole che si mangi in compagnia, con calma. Non si guarda l'orologio a tavola. Si parla, si assaggia, si versa ancora un po' di vino. È una filosofia del piacere che a Cibum coltiviamo ogni giorno — perché crediamo che il vero lusso sia avere tempo per mangiare bene.
              </p>
              <p className="text-[#5a4535]/80 leading-relaxed">
                Ghezzano, dove siamo nati, è il confine tra la città e la campagna pisana. Un luogo che porta ancora i segni dell'agricoltura e dell'artigianato alimentare — e che ci ricorda ogni giorno che la qualità della materia prima è tutto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <img src="/images/view.jpg" alt="Pisa" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-2xl bg-[#F9F3EB] border border-[#2C1810]/10 p-7">
                <p className="font-serif italic text-[#8B4513] text-lg leading-relaxed mb-4">
                  "Dalla riva del mare alle colline dell'interno, ogni ingrediente pisano racconta una storia."
                </p>
                <div className="w-10 h-px bg-[#D4A853]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ────────────────────────────────────────────────── */}
      <section className="relative py-40 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Food/caption (19).jpg"
            alt="Tavola Cibum"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#1a0f05]/70" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Benvenuti a casa.
          </motion.h3>
          <p className="text-white/60 font-serif italic text-xl max-w-xl mx-auto leading-relaxed mb-10">
            Scoprite il gusto della Toscana e la freschezza del mare — serviti con cura, ogni giorno.
          </p>
          <a
            href="https://maps.app.goo.gl/VP6WtvDmEzAQx6d56"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D4A853] text-[#1a0f05] px-10 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-all"
          >
            Vienici a Trovare <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}