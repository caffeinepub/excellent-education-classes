import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

type Page = "/" | "/register" | "/courses" | "/about";

interface NavbarProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "/" },
  { label: "Register", page: "/register" },
  { label: "Courses", page: "/courses" },
  { label: "About Us", page: "/about" },
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
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
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
            {navLinks.map(({ label, page }) => (
              <button
                type="button"
                key={page}
                onClick={() => handleNav(page)}
                className={`px-4 py-2 rounded-full font-body font-semibold text-sm transition-all duration-200 ${
                  currentPage === page
                    ? "bg-white text-holi-pink shadow-md"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/20 bg-gradient-to-b from-holi-purple/90 to-holi-pink/90 backdrop-blur-sm">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ label, page }) => (
              <button
                type="button"
                key={page}
                onClick={() => handleNav(page)}
                className={`w-full text-left px-4 py-3 rounded-xl font-body font-semibold text-sm transition-all duration-200 ${
                  currentPage === page
                    ? "bg-white text-holi-pink"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
