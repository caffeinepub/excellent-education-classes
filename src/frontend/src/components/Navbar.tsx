import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";
import type { Page } from "../App";

interface NavbarProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page; icon?: React.ReactNode }[] = [
  { label: "Home", page: "/" },
  { label: "Register", page: "/register" },
  { label: "Courses", page: "/courses" },
  { label: "About Us", page: "/about" },
  {
    label: "Admin",
    page: "/admin",
    icon: <ShieldCheck className="w-3.5 h-3.5 inline-block mr-1 opacity-70" />,
  },
];

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page: Page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 holi-gradient-nav shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("/")}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/logo.png"
              alt="Excellent Education Classes Logo"
              className="h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200"
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display font-extrabold text-white text-base leading-tight">
                Excellent Education
              </span>
              <span className="font-display text-white/80 text-xs leading-tight">
                Classes
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, page, icon }) => (
              <button
                type="button"
                key={page}
                onClick={() => handleNav(page)}
                className={`px-4 py-2 rounded-full font-body font-semibold text-sm transition-all duration-200 flex items-center ${
                  currentPage === page
                    ? "bg-white text-holi-pink shadow-md"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {icon}
                {label}
              </button>
            ))}

            {/* Social Icons */}
            <div className="flex items-center gap-1 ml-2 border-l border-white/30 pl-3">
              <a
                href="https://www.instagram.com/excellenteducationclasses2025?igsh=ZXAza2t1czNsZXJl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Follow us on Instagram"
                className="p-2 rounded-full text-white hover:bg-white/20 hover:text-pink-200 transition-all duration-200 hover:scale-110"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@excellenteducationclasses?si=geNJcK1Hq_-LitPI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="Subscribe on YouTube"
                className="p-2 rounded-full text-white hover:bg-white/20 hover:text-red-300 transition-all duration-200 hover:scale-110"
              >
                <SiYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbCX02kEwEjpQ5kAve1I"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Channel"
                title="Follow on WhatsApp"
                className="p-2 rounded-full text-white hover:bg-white/20 hover:text-green-300 transition-all duration-200 hover:scale-110"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/20 bg-gradient-to-b from-holi-purple/90 to-holi-pink/90 backdrop-blur-sm">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ label, page, icon }) => (
              <button
                type="button"
                key={page}
                onClick={() => handleNav(page)}
                className={`w-full text-left px-4 py-3 rounded-xl font-body font-semibold text-sm transition-all duration-200 flex items-center ${
                  currentPage === page
                    ? "bg-white text-holi-pink"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
