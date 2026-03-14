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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">

        {/* Brand & Types */}
        <div>
          <h2 className="text-3xl font-display mb-6 text-[#E6A23C]">
            CIBUM
          </h2>

          <div className="flex items-start gap-3 mb-4">
            <UtensilsCrossed size={18} className="text-[#E6A23C] mt-1" />
            <p className="text-[#F5EDE3]/80 leading-relaxed text-sm">
              Grill, Ristorante di Frutti di Mare,<br />
              Wine Restaurant, Bar Ristorante
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/cibumfuorilemurapisa/"
              className="w-10 h-10 rounded-full border border-[#F5EDE3]/30 flex items-center justify-center hover:bg-[#E6A23C] hover:text-[#8B1E2D] transition-all"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.facebook.com/Cibum.Pi/"
              className="w-10 h-10 rounded-full border border-[#F5EDE3]/30 flex items-center justify-center hover:bg-[#E6A23C] hover:text-[#8B1E2D] transition-all"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Contact & Address */}
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-6 text-[#E6A23C]">
            Contact
          </h3>

          <div className="space-y-4 text-[#F5EDE3]/80 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#E6A23C] mt-1 shrink-0" />
              <p>
                Via Provinciale Calcesana 10<br />
                Ghezzano, 56010 Pisa PI
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#E6A23C]" />
              <a href="tel:+393357265557" className="hover:text-[#E6A23C] transition">
                +39 335 726 5557
              </a>
            </div>

            <a
              href="https://maps.app.goo.gl/VP6WtvDmEzAQx6d56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#E6A23C] text-xs uppercase tracking-widest hover:underline mt-2"
            >
              Apri nella mappa
            </a>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-6 text-[#E6A23C]">
            Opening Hours
          </h3>

          <div className="flex items-start gap-3 mb-4">
            <Clock size={18} className="text-[#E6A23C] mt-1 shrink-0" />
            <div className="space-y-2 text-sm text-[#F5EDE3]/80">
              <p>Domenica 12:00–15:00, 19:00–23:00</p>
              <p>Lunedì 12:00–15:00, 19:00–23:00</p>
              <p>Martedì 12:00–15:00, 19:00–23:00</p>
              <p>Mercoledì 12:00–15:00, 19:00–23:00</p>
              <p>Giovedì 12:00–15:00, 19:00–23:00</p>
              <p>Venerdì 12:00–15:00, 19:00–23:00</p>
              <p>Sabato 12:00–15:00, 19:00–23:00</p>
            </div>
          </div>
        </div>

        {/* Cuisine Tags */}
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-6 text-[#E6A23C]">
            Cucina
          </h3>

          <div className="flex flex-wrap gap-2">
            {[
              "Grill",
              "Tradizionale",
              "Frutti di Mare",
              "Italiano",
              "Toscana"
            ].map((type) => (
              <span
                key={type}
                className="px-3 py-1 rounded-full border border-[#F5EDE3]/30 text-xs uppercase tracking-widest text-[#F5EDE3]/80 hover:bg-[#E6A23C] hover:text-[#8B1E2D] transition"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#F5EDE3]/20 flex flex-col md:flex-row justify-between items-center text-xs text-[#F5EDE3]/60 uppercase tracking-widest">
        <p>&copy; 2026 Cibum Fuori le Mura. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#E6A23C] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#E6A23C] transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
