import { motion } from "motion/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

import {
  Mail,
  Instagram,
  Facebook,
  MapPin,
  Clock,
  Phone,
  UtensilsCrossed
} from "lucide-react";


export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const leftNav = [
    { name: "Home", path: "/" },
    { name: "Storia", path: "/history" },
    { name: "Menu", path: "/menu" }
  ];

  const rightNav = [
    { name: "Vini", path: "/wines" },
    { name: "Galleria", path: "/gallery" },
    { name: "Notizie", path: "/news" },
    { name: "Contatti", path: "/contact" },
  ];

  const allNav = [...leftNav, ...rightNav];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Top Bar */}
      <div className="bg-[#8B1E2D] text-[#F5EDE3] py-2 px-6 flex justify-center text-xs uppercase tracking-widest">
        <a
          href="tel:+393357265557"
          className="flex items-center gap-2 hover:text-[#E6A23C] transition-colors"
        >
          <Phone size={12} />
          <span>+39 050 520 8081</span>
        </a>
      </div>

      {/* Main Nav */}
      <nav className="bg-[#F5EDE3]/95 backdrop-blur border-b border-black/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-5">

          {/* Left Navigation (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {leftNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative text-sm uppercase tracking-widest transition-colors",
                  "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#E6A23C] after:w-0 after:transition-all",
                  "hover:text-[#8B1E2D] hover:after:w-full",
                  location.pathname === item.path && "text-[#8B1E2D] after:w-full"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex justify-center flex-shrink-0">
            <Link to="/">
              <img
                src="/images/Logo.png"
                alt="Cibum Fuori le Mura Logo"
                className="h-16 md:h-20 object-contain"
              />
            </Link>
          </div>

          {/* Right Navigation (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {rightNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative text-sm uppercase tracking-widest transition-colors",
                  "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#E6A23C] after:w-0 after:transition-all",
                  "hover:text-[#8B1E2D] hover:after:w-full",
                  location.pathname === item.path && "text-[#8B1E2D] after:w-full"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 ml-4"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-[#8B1E2D]" />
            <span className="w-6 h-0.5 bg-[#8B1E2D]" />
            <span className="w-6 h-0.5 bg-[#8B1E2D]" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#F5EDE3] border-t border-black/5 py-6 px-6 space-y-6 text-center">
            {allNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block text-sm uppercase tracking-widest transition-colors",
                  location.pathname === item.path
                    ? "text-[#8B1E2D]"
                    : "text-[#5a5a40] hover:text-[#8B1E2D]"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#8B1E2D] text-[#F5EDE3] pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/images/Logo.png"
                alt="Logo Cibum"
                className="w-16 h-16 object-contain rounded-2xl bg-white/5 p-2"
              />
              <div>
                <h2 className="text-3xl md:text-4xl font-display text-[#E6A23C]">
                  CIBUM
                </h2>
                <p className="text-sm uppercase tracking-[0.25em] text-[#F5EDE3]/60 mt-1">
                  Fuori le Mura
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <UtensilsCrossed size={18} className="text-[#E6A23C] mt-1 shrink-0" />
              <p className="text-[#F5EDE3]/80 leading-relaxed text-sm md:text-base">
                Grill, ristorante di pesce,
                <br />
                wine restaurant e bar ristorante.
              </p>
            </div>

            <p className="text-[#F5EDE3]/70 text-sm leading-relaxed max-w-md">
              Un luogo dove cucina, vino e atmosfera si incontrano in uno stile
              caldo, elegante e autentico.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="https://www.instagram.com/cibumfuorilemurapisa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-[#F5EDE3]/20 flex items-center justify-center hover:bg-[#E6A23C] hover:text-[#8B1E2D] transition-all"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/Cibum.Pi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-[#F5EDE3]/20 flex items-center justify-center hover:bg-[#E6A23C] hover:text-[#8B1E2D] transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Contatti */}
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8">
            <h3 className="text-sm uppercase tracking-[0.3em] mb-6 text-[#E6A23C]">
              Contatti
            </h3>

            <div className="space-y-5 text-sm md:text-base text-[#F5EDE3]/80">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E6A23C] mt-1 shrink-0" />
                <div>
                  <p>Via Provinciale Calcesana 10</p>
                  <p>Ghezzano, 56010 Pisa (PI)</p>

                  <a
                    href="https://maps.app.goo.gl/VP6WtvDmEzAQx6d56"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[#E6A23C] text-xs uppercase tracking-widest hover:underline"
                  >
                    Apri su Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#E6A23C] shrink-0" />
                <a
                  href="tel:+393357265557"
                  className="hover:text-[#E6A23C] transition"
                >
                  +39 050 520 8081
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#E6A23C] shrink-0" />
                <a
                  href="tel:+393357265557"
                  className="hover:text-[#E6A23C] transition"
                >
                  +39 335 726 5557
                </a>
              </div>
            </div>
          </div>

          {/* Orari */}
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8">
            <h3 className="text-sm uppercase tracking-[0.3em] mb-6 text-[#E6A23C]">
              Orari di apertura
            </h3>

            <div className="flex items-start gap-3">
              <Clock size={18} className="text-[#E6A23C] mt-1 shrink-0" />

              <div className="w-full">
                <div className="space-y-3 text-sm md:text-base text-[#F5EDE3]/80">
                  {[
                    "Lunedì",
                    "Martedì",
                    "Mercoledì",
                    "Giovedì",
                    "Venerdì",
                    "Sabato",
                    "Domenica",
                  ].map((day) => (
                    <div
                      key={day}
                      className="flex items-center justify-between gap-4 border-b border-white/10 pb-2 last:border-b-0 last:pb-0"
                    >
                      <span>{day}</span>
                      <span className="text-[#F5EDE3] font-medium whitespace-nowrap">
                        12:00–15:00 · 19:00–22:30
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#F5EDE3]/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-[#F5EDE3]/60">
          <p>© 2026 Cibum Fuori le Mura. Tutti i diritti riservati.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-[#E6A23C] transition-colors">
              R
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
