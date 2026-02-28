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
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl mb-8">Contact Us</h1>
          <p className="text-brand-dark/60 text-lg mb-12 font-serif italic">
            Whether you're looking to book a private event, have dietary questions, or simply want to say hello, we'd love to hear from you.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-brand-gold mb-2">Address</h3>
              <p className="text-xl">Via delle Mura, 123, 56123 Pisa PI, Italy</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-brand-gold mb-2">Phone</h3>
              <p className="text-xl">+39 050 123 4567</p>
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
              <h2 className="text-3xl mb-4">Message Sent!</h2>
              <p className="text-brand-dark/60 mb-8">Grazie! We have received your message and will get back to you shortly.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="bg-brand-dark text-brand-cream px-8 py-3 rounded-full uppercase tracking-widest text-sm"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2 text-brand-dark/60">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-brand-cream/50 border-b border-brand-dark/10 py-3 px-4 focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2 text-brand-dark/60">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-brand-cream/50 border-b border-brand-dark/10 py-3 px-4 focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2 text-brand-dark/60">Your Message</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-cream/50 border-b border-brand-dark/10 py-3 px-4 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                disabled={status === "loading"}
                type="submit" 
                className="w-full bg-brand-dark text-brand-cream py-4 rounded-full uppercase tracking-widest font-medium hover:bg-brand-gold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
              {status === "error" && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </motion.div>
      </div>

      {/* Map Section */}
      <section className="mt-24 h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.288283733221!2d10.3944!3d43.7228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5919e3a000001%3A0x7a00000000000000!2sPisa!5e0!3m2!1sen!2sit!4v1620000000000!5m2!1sen!2sit" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
