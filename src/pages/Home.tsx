import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1920" 
            alt="Tuscan Landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-brand-cream px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="block text-sm uppercase tracking-[0.3em] mb-4"
          >
            Benvenuti a Pisa
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display mb-8"
          >
            CIBUM
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl font-serif italic max-w-2xl mx-auto mb-12"
          >
            "A culinary journey through the heart of Tuscany, where tradition meets elegance."
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Link to="/menu" className="bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-medium uppercase tracking-widest hover:bg-brand-cream transition-all flex items-center justify-center gap-2">
              Explore Menu <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="border border-brand-cream text-brand-cream px-10 py-4 rounded-full font-medium uppercase tracking-widest hover:bg-brand-cream hover:text-brand-dark transition-all">
              Book a Table
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl mb-8">Authentic Tuscan Soul</h2>
          <p className="text-brand-dark/70 leading-relaxed mb-6 text-lg">
            Located just outside the historic walls of Pisa, Cibum Fuori le Mura is more than just a restaurant. It is a celebration of the rich culinary heritage of Tuscany.
          </p>
          <p className="text-brand-dark/70 leading-relaxed mb-8">
            Our chefs work closely with local farmers and producers to bring you the freshest seasonal ingredients, prepared with techniques passed down through generations but served with a contemporary touch.
          </p>
          <Link to="/history" className="text-brand-dark font-medium border-b border-brand-dark pb-1 hover:text-brand-gold hover:border-brand-gold transition-all">
            Read Our Story
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000" 
            alt="Restaurant Interior" 
            className="rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -left-8 bg-brand-olive text-brand-cream p-8 rounded-2xl hidden lg:block max-w-xs">
            <p className="font-serif italic text-xl mb-2">"The best pasta I've had in Italy, and the atmosphere is simply magical."</p>
            <p className="text-xs uppercase tracking-widest opacity-60">— Maria Rossi</p>
          </div>
        </motion.div>
      </section>

      {/* Featured Menu Snippet - Our Kitchen */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold uppercase tracking-widest text-sm mb-4 block"
          >
            The Heart of Cibum
          </motion.span>
          <h2 className="text-4xl md:text-5xl mb-4">Our Kitchen</h2>
          <p className="text-brand-dark/60 font-serif italic text-xl">Hand-crafted specialties for every palate</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Primi Piatti", desc: "Fresh house-made pasta with traditional sauces.", img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=600" },
            { title: "Secondi", desc: "Premium Tuscan meats and fresh Mediterranean catch.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" },
            { title: "Dolci", desc: "Sweet endings inspired by Italian classics.", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=600" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl mb-2">{item.title}</h3>
              <p className="text-brand-dark/60 mb-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/menu" className="inline-block border border-brand-dark px-12 py-4 rounded-full uppercase tracking-widest hover:bg-brand-dark hover:text-brand-cream transition-all">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* Our Wines Section - Dark Luxury */}
      <section className="bg-brand-dark text-brand-cream py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold uppercase tracking-widest text-sm mb-4 block">The Cellar</span>
            <h2 className="text-4xl md:text-6xl mb-8 font-display">Our Wines</h2>
            <p className="text-brand-cream/60 leading-relaxed mb-8 text-lg font-serif italic">
              "Wine is the soul of the Tuscan table. Our cellar is a curated journey through the rolling hills of Chianti, the coast of Bolgheri, and beyond."
            </p>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-px bg-brand-gold mt-3"></div>
                <div>
                  <h4 className="text-xl mb-1">Local Heritage</h4>
                  <p className="text-brand-cream/40 text-sm">Featuring the finest Sangiovese from neighboring estates.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-px bg-brand-gold mt-3"></div>
                <div>
                  <h4 className="text-xl mb-1">Rare Vintages</h4>
                  <p className="text-brand-cream/40 text-sm">Exclusive selections of Brunello and Super Tuscans.</p>
                </div>
              </div>
            </div>
            <Link to="/menu" className="inline-block bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-medium uppercase tracking-widest hover:bg-brand-cream transition-all">
              Explore Wine List
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="pt-12">
              <img 
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600" 
                alt="Wine Pouring" 
                className="rounded-2xl shadow-2xl mb-4"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?auto=format&fit=crop&q=80&w=600" 
                alt="Wine Bottles" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=600" 
                alt="Vineyard" 
                className="rounded-2xl shadow-2xl mb-4"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1553134802-ff9ec188821d?auto=format&fit=crop&q=80&w=600" 
                alt="Wine Glass" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Environment Section - Atmospheric */}
      <section className="relative py-48 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/environment.jpg" 
            alt="Restaurant Atmosphere" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-brand-cream">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold uppercase tracking-[0.4em] text-sm mb-6 block"
          >
            The Vibe
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl mb-8 font-display"
          >
            Our Environment
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-serif italic mb-12 leading-relaxed"
          >
            Whether it's a romantic dinner under the stars in our garden or a lively family gathering in our rustic dining room, every corner of Cibum is designed to make you feel at home.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-12"
          >
            <div className="text-center">
              <span className="block text-4xl font-display text-brand-gold mb-2">120</span>
              <span className="text-xs uppercase tracking-widest opacity-60">Seats</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-display text-brand-gold mb-2">1984</span>
              <span className="text-xs uppercase tracking-widest opacity-60">Established</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-display text-brand-gold mb-2">100%</span>
              <span className="text-xs uppercase tracking-widest opacity-60">Tuscan</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Staff Section - Warm Organic */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=1000" 
                alt="Chef at work" 
                className="rounded-[40px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold rounded-full flex items-center justify-center text-center p-4 transform rotate-12 hidden md:flex">
                <p className="text-brand-dark font-display italic text-lg leading-tight">Crafted with Love</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-brand-gold uppercase tracking-widest text-sm mb-4 block">The Family</span>
            <h2 className="text-4xl md:text-5xl mb-8">Our Staff</h2>
            <p className="text-brand-dark/70 leading-relaxed mb-6 text-lg">
              At Cibum, we believe that great food is only half the story. Our team is the heartbeat of the restaurant, a family of professionals dedicated to the art of hospitality.
            </p>
            <p className="text-brand-dark/70 leading-relaxed mb-8">
              From our master chefs who have spent decades perfecting their craft, to our sommeliers who can tell you the story behind every bottle, we are here to ensure your experience is unforgettable.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-display mb-2">Chef Marco</h4>
                <p className="text-sm text-brand-dark/50">Executive Chef with 20 years of Tuscan culinary expertise.</p>
              </div>
              <div>
                <h4 className="text-xl font-display mb-2">Giulia</h4>
                <p className="text-sm text-brand-dark/50">Our Head Sommelier, passionate about local terroir.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
