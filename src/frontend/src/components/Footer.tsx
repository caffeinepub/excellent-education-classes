import { Heart, GraduationCap } from "lucide-react";

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
            <p>📍 123 Education Lane, Knowledge City</p>
            <p>📞 +91 98765 43210</p>
          </div>

          {/* Caffeine credit */}
          <div className="text-white/70 text-xs text-center">
            <p>© 2026 Excellent Education Classes</p>
            <p className="flex items-center justify-center gap-1 mt-1">
              Built with{" "}
              <Heart className="w-3 h-3 text-white fill-white" />{" "}
              using{" "}
              <a
                href="https://caffeine.ai"
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
