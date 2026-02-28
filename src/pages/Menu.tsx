import { motion } from "motion/react";

const menuData = [
  {
    category: "Antipasti",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=1200", // (optional) switch to your own image like you did with pizza
    note: "Perfect to share — classic Tuscan starters made to open your appetite.",
    items: [
      { name: "Bruschetta Toscana", price: "€12", desc: "Toasted bread with tomatoes, garlic, and extra virgin olive oil." },
      { name: "Tagliere di Salumi", price: "€18", desc: "Selection of local cured meats and pecorino cheese." },
      { name: "Carpaccio di Manzo", price: "€16", desc: "Thinly sliced beef with arugula and parmesan shavings." },
      { name: "Burrata e Pomodorini", price: "€15", desc: "Creamy burrata with cherry tomatoes, basil, and olive oil." },
      { name: "Crostini Misti", price: "€13", desc: "Assorted crostini with chicken liver pâté, mushrooms, and truffle." },
      { name: "Insalata di Polpo", price: "€17", desc: "Tender octopus salad with potatoes, parsley, and lemon dressing." }
    ]
  },
  {
    category: "Primi Piatti",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1200", // (optional)
    note: "Handcrafted pasta, slow sauces, and seasonal ingredients — the heart of Italian cooking.",
    items: [
      { name: "Pappardelle al Cinghiale", price: "€16", desc: "Wide ribbon pasta with slow-cooked wild boar ragù." },
      { name: "Risotto ai Funghi Porcini", price: "€18", desc: "Creamy risotto with fresh Tuscan porcini mushrooms." },
      { name: "Pici all'Aglione", price: "€14", desc: "Thick hand-rolled pasta with a rich garlic tomato sauce." },
      { name: "Spaghetti alla Carbonara", price: "€15", desc: "Guanciale, pecorino Romano, egg yolk, and black pepper." },
      { name: "Gnocchi al Pesto Genovese", price: "€16", desc: "Potato gnocchi tossed in basil pesto and parmesan." },
      { name: "Ravioli Ricotta e Spinaci", price: "€17", desc: "House ravioli with sage butter sauce and parmesan." }
    ]
  },
  {
    category: "Pasta & Pizza",
    image: "/images/pizza.jpg",
    note: "Stone-baked pizzas and comforting classics — simple ingredients, big flavor.",
    items: [
      { name: "Pizza Margherita", price: "€10", desc: "Tomato, mozzarella, and fresh basil." },
      { name: "Pizza Tartufo", price: "€18", desc: "White pizza with truffle cream and mushrooms." },
      { name: "Lasagna alla Bolognese", price: "€15", desc: "Classic layered pasta with meat sauce and béchamel." },
      { name: "Pizza Diavola", price: "€14", desc: "Spicy salami, tomato sauce, mozzarella, and chili oil." },
      { name: "Pizza Prosciutto e Rucola", price: "€16", desc: "Prosciutto crudo, arugula, parmesan shavings, and olive oil." },
      { name: "Penne all’Arrabbiata", price: "€13", desc: "Tomato sauce, garlic, chili, and parsley." }
    ]
  },
  {
    category: "Secondi",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200", // (optional)
    note: "Main courses prepared with care — grilled, roasted, and served with seasonal sides.",
    items: [
      { name: "Bistecca alla Fiorentina", price: "€55", desc: "T-bone steak grilled over charcoal (approx. 1kg)." },
      { name: "Tagliata di Manzo", price: "€24", desc: "Sliced beef with rosemary and sea salt." },
      { name: "Orata al Forno", price: "€22", desc: "Baked sea bream with potatoes and olives." },
      { name: "Pollo al Limone", price: "€19", desc: "Pan-roasted chicken with lemon, herbs, and white wine." },
      { name: "Agnello Arrosto", price: "€26", desc: "Slow-roasted lamb with garlic, rosemary, and Tuscan potatoes." },
      { name: "Melanzane alla Parmigiana", price: "€18", desc: "Baked eggplant with tomato, mozzarella, and parmesan." }
    ]
  },
  {
    category: "Wines & Drinks",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200", // (optional)
    note: "From bold reds to sparkling aperitivi — curated to match every dish.",
    items: [
      { name: "Chianti Classico Riserva", price: "€35", desc: "Bottle - Intense ruby red with notes of berries." },
      { name: "Brunello di Montalcino", price: "€75", desc: "Bottle - Full-bodied, elegant and persistent." },
      { name: "Aperol Spritz", price: "€8", desc: "The classic Italian aperitivo." },
      { name: "Negroni", price: "€10", desc: "Gin, Campari, vermouth rosso — bold and balanced." },
      { name: "Vermentino (White Wine)", price: "€32", desc: "Bottle - Fresh, citrusy, and mineral." },
      { name: "Espresso", price: "€3", desc: "Italian-style espresso, rich and aromatic." }
    ]
  }
];

export function Menu() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            La Nostra Cucina
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-6"
          >
            The Menu
          </motion.h1>

          <div className="w-24 h-px bg-brand-gold mx-auto"></div>
        </header>

        <div className="space-y-32">
          {menuData.map((section, idx) => (
            <section
              key={section.category}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className={idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={section.image}
                    alt={section.category}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className={idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}
              >
                <h2 className="menu-section-title">{section.category}</h2>

                {section.note ? (
                  <p className="text-brand-dark/60 mb-10 leading-relaxed">
                    {section.note}
                  </p>
                ) : null}

                <div className="space-y-10">
                  {section.items.map((item) => (
                    <div key={item.name} className="group">
                      <div className="flex justify-between items-baseline mb-2 gap-6">
                        <h3 className="text-xl font-medium group-hover:text-brand-gold transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-brand-gold font-serif italic text-lg whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-brand-dark/50 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="w-full h-px bg-brand-dark/5 mt-6 group-last:hidden"></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>
          ))}

          {/* Fresh Ingredients section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl mb-6">Fresh Ingredients, Always</h2>
              <p className="text-brand-dark/60 leading-relaxed mb-6">
                We cook with the best seasonal produce, extra virgin olive oil, and carefully
                selected meats and cheeses. Everything is prepared fresh — with flavors that
                stay true to the Italian tradition.
              </p>
              <ul className="space-y-3 text-brand-dark/60">
                <li>• Daily fresh prep and house-made sauces</li>
                <li>• Locally sourced vegetables and herbs when possible</li>
                <li>• Quality cheeses, cured meats, and premium olive oil</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="lg:order-2"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/freshIngredients.jpg"
                  alt="Fresh ingredients"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}