import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";


export function Header() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "History", path: "/history" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#8B1E2D] text-[#F5EDE3] py-2 px-6 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase">
        <div className="flex items-center gap-6 mb-2 md:mb-0">
          <a
            href="tel:+390501234567"
            className="flex items-center gap-2 hover:text-[#E6A23C] transition-colors"
          >
            <Phone size={12} />
            <span>+39 050 123 4567</span>
          </a>

          <a
            href="mailto:info@cibumfuorilemura.it"
            className="flex items-center gap-2 hover:text-[#E6A23C] transition-colors"
          >
            <Mail size={12} />
            <span>info@cibumfuorilemura.it</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="opacity-70">Pisa, Toscana</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="py-4 px-6 md:px-12 flex justify-between items-center bg-[#F5EDE3]/90 backdrop-blur border-b border-black/5">
        <Link to="/" className="group">
          <h1 className="text-2xl md:text-3xl font-display font-bold tracking-tighter transition-colors text-[#8B1E2D] group-hover:text-[#E6A23C]">
            CIBUM{" "}
            <span className="font-serif italic font-light text-[#E6A23C] group-hover:text-[#8B1E2D]">
              Fuori le Mura
            </span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative text-sm uppercase tracking-widest transition-colors",
                "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#E6A23C] after:w-0 after:transition-all after:duration-300",
                "hover:text-[#8B1E2D] hover:after:w-full",
                location.pathname === item.path && "text-[#8B1E2D] after:w-full"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <button className="p-2" aria-label="Open menu">
            <div className="w-6 h-0.5 bg-[#8B1E2D] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#8B1E2D] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#8B1E2D]"></div>
          </button>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#8B1E2D] text-[#F5EDE3] pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-display mb-6 text-[#E6A23C]">
            CIBUM
          </h2>

          <p className="text-[#F5EDE3]/80 leading-relaxed mb-6 font-serif italic text-lg">
            "Authentic flavors of Tuscany, served with passion outside the ancient walls of Pisa."
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/cibumfuorilemurapisa/"
              className="w-10 h-10 rounded-full border border-[#F5EDE3]/30 flex items-center justify-center hover:bg-[#E6A23C] hover:border-[#E6A23C] hover:text-[#8B1E2D] transition-all"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.facebook.com/Cibum.Pi/"
              className="w-10 h-10 rounded-full border border-[#F5EDE3]/30 flex items-center justify-center hover:bg-[#E6A23C] hover:border-[#E6A23C] hover:text-[#8B1E2D] transition-all"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-6 text-[#E6A23C]">
            Location
          </h3>

          <address className="not-italic text-[#F5EDE3]/80 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#E6A23C] shrink-0 mt-1" />
              <p>
                Via delle Mura, 123<br />
                56123 Pisa PI, Italy
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/VP6WtvDmEzAQx6d56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#E6A23C] hover:underline mt-2"
            >
              View on Google Maps
            </a>
          </address>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-6 text-[#E6A23C]">
            Hours
          </h3>

          <ul className="text-[#F5EDE3]/80 space-y-2">
            <li className="flex justify-between">
              <span>Mon - Fri</span>
              <span>12:00 - 15:00, 19:00 - 23:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sat - Sun</span>
              <span>12:00 - 23:30</span>
            </li>
            <li className="pt-4 text-[#E6A23C] italic">
              Closed on Tuesdays
            </li>
          </ul>
        </div>
      </div>

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
