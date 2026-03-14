import { motion } from "motion/react";
import { useState, FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
  >
    <span className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4 block">Contattaci</span>
    <h1 className="text-5xl md:text-7xl mb-8">Contatti</h1>
    <p className="text-brand-dark/60 text-lg mb-12 font-serif italic">
      Che tu voglia prenotare un evento privato, avere informazioni su allergie o semplicemente salutarci, saremo felici di sentirti.
    </p>

    <div className="space-y-8">
      <div>
        <h3 className="text-sm uppercase tracking-widest text-brand-gold mb-2">Indirizzo</h3>
        <p className="text-xl">Via Provinciale Calcesana 10, 56010 Ghezzano, Pisa PI, Italia</p>
      </div>
      <div>
        <h3 className="text-sm uppercase tracking-widest text-brand-gold mb-2">Telefono</h3>
        <p className="text-xl">+39 335 726 5557</p>
      </div>
      <div>
        <h3 className="text-sm uppercase tracking-widest text-brand-gold mb-2">Email</h3>
        <p className="text-xl">info@cibumfuorilemura.it</p>
      </div>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
  >
    {status === "success" ? (
      <div className="h-full flex flex-col items-center justify-center text-center py-12">
        <CheckCircle2 size={64} className="text-brand-olive mb-6" />
        <h2 className="text-3xl mb-4">Messaggio Inviato!</h2>
        <p className="text-brand-dark/60 mb-8">Grazie! Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="bg-brand-dark text-brand-cream px-8 py-3 rounded-full uppercase tracking-widest text-sm"
        >
          Invia un altro messaggio
        </button>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs uppercase tracking-widest mb-2 text-brand-dark/60">Nome e Cognome</label>
          <input 
            required
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-brand-cream/50 border-b border-brand-dark/10 py-3 px-4 focus:outline-none focus:border-brand-gold transition-colors"
            placeholder="Mario Rossi"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest mb-2 text-brand-dark/60">Indirizzo Email</label>
          <input 
            required
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-brand-cream/50 border-b border-brand-dark/10 py-3 px-4 focus:outline-none focus:border-brand-gold transition-colors"
            placeholder="mario@example.com"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest mb-2 text-brand-dark/60">Messaggio</label>
          <textarea 
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-brand-cream/50 border-b border-brand-dark/10 py-3 px-4 focus:outline-none focus:border-brand-gold transition-colors resize-none"
            placeholder="Come possiamo aiutarti?"
          ></textarea>
        </div>
        <button 
          disabled={status === "loading"}
          type="submit" 
          className="w-full bg-brand-dark text-brand-cream py-4 rounded-full uppercase tracking-widest font-medium hover:bg-brand-gold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {status === "loading" ? "Invio in corso..." : (
            <>Invia Messaggio <Send size={18} /></>
          )}
        </button>
        {status === "error" && (
          <p className="text-red-500 text-sm text-center">Si è verificato un errore. Per favore riprova.</p>
        )}
      </form>
    )}
  </motion.div>
</div>

      {/* Map Section */}
      <section className="mt-24 h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe
          src="https://www.google.com/maps?q=Via%20Provinciale%20Calcesana%2010%2C%2056010%20Ghezzano%20Pisa&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
