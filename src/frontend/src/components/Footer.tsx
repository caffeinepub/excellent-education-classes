import { GraduationCap, Heart } from "lucide-react";
import { SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";

const SOCIAL_LINKS = [
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/excellenteducationclasses2025?igsh=ZXAza2t1czNsZXJl",
    hoverClass: "hover:text-pink-300",
    bgClass: "hover:bg-pink-500/20",
  },
  {
    icon: SiYoutube,
    label: "YouTube",
    href: "https://youtube.com/@excellenteducationclasses?si=geNJcK1Hq_-LitPI",
    hoverClass: "hover:text-red-400",
    bgClass: "hover:bg-red-500/20",
  },
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029VbCX02kEwEjpQ5kAve1I",
    hoverClass: "hover:text-green-300",
    bgClass: "hover:bg-green-500/20",
  },
];

export default function Footer() {
  return (
    <footer className="holi-gradient-nav mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-white text-sm">
                Excellent Education Classes
              </span>
              <span className="text-white/70 text-xs">
                Shaping Bright Futures
              </span>
            </div>
          </div>

          {/* Contact quick info */}
          <div className="text-center text-white/80 text-sm">
            <p>
              📍 Near Lakshya Public School, Mauranipur, Jhansi, Uttar Pradesh
            </p>
            <p>📞 +91 97955 10320</p>

            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-3 mt-3">
              {SOCIAL_LINKS.map(
                ({ icon: Icon, label, href, hoverClass, bgClass }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex items-center gap-1.5 text-white/80 ${hoverClass} transition-all duration-200 px-3 py-1.5 rounded-full ${bgClass} hover:scale-105`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-semibold">{label}</span>
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Caffeine credit */}
          <div className="text-white/70 text-xs text-center">
            <p>© {new Date().getFullYear()} Excellent Education Classes</p>
            <p className="flex items-center justify-center gap-1 mt-1">
              Built with <Heart className="w-3 h-3 text-white fill-white" />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
