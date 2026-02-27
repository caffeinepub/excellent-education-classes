import { ArrowRight, Users, BookOpen, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Page = "/" | "/register" | "/courses" | "/about";

interface HomePageProps {
  navigate: (page: Page) => void;
}

const POWDER_COLORS = [
  "oklch(1 0 0)",
  "oklch(0.88 0.18 90)",
  "oklch(0.7 0.2 140)",
  "oklch(0.55 0.22 270)",
  "oklch(0.55 0.22 300)",
];

const powderDots = Array.from({ length: 20 }, (_, i) => ({
  id: `powder-${i}`,
  size: `${8 + (i % 5) * 6}px`,
  top: `${10 + ((i * 17) % 80)}%`,
  left: `${5 + ((i * 23) % 90)}%`,
  color: POWDER_COLORS[i % 5],
}));

const highlights = [
  {
    icon: Users,
    title: "Expert Teachers",
    desc: "Experienced educators dedicated to every student's success",
    gradient: "holi-gradient-card-pink",
    textColor: "holi-text-pink",
    iconBg: "bg-holi-pink/10",
  },
  {
    icon: BookOpen,
    title: "All Classes",
    desc: "Classes 1 to 12 and Graduation — comprehensive coverage",
    gradient: "holi-gradient-card-orange",
    textColor: "holi-text-orange",
    iconBg: "bg-holi-orange/10",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    desc: "Hundreds of students achieving top scores every year",
    gradient: "holi-gradient-card-green",
    textColor: "holi-text-green",
    iconBg: "bg-holi-green/10",
  },
  {
    icon: Sparkles,
    title: "Supportive Environment",
    desc: "A nurturing, joyful space where every child thrives",
    gradient: "holi-gradient-card-blue",
    textColor: "holi-text-blue",
    iconBg: "bg-holi-blue/10",
  },
];

export default function HomePage({ navigate }: HomePageProps) {
  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="relative overflow-hidden holi-gradient-hero min-h-[85vh] flex items-center">
        {/* Decorative blobs */}
        <div
          className="holi-blob splash-float w-72 h-72 top-[-4rem] left-[-4rem]"
          style={{ background: "oklch(0.88 0.18 90)" }}
        />
        <div
          className="holi-blob splash-float-2 w-56 h-56 top-8 right-8"
          style={{ background: "oklch(0.55 0.22 270)" }}
        />
        <div
          className="holi-blob splash-float-3 w-64 h-64 bottom-[-2rem] right-[15%]"
          style={{ background: "oklch(0.7 0.2 140)" }}
        />
        <div
          className="holi-blob splash-float w-48 h-48 bottom-8 left-[10%]"
          style={{ background: "oklch(0.55 0.22 300)" }}
        />

        {/* Scattered powder dots */}
        {powderDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full opacity-30 pointer-events-none"
            style={{
              width: dot.size,
              height: dot.size,
              top: dot.top,
              left: dot.left,
              background: dot.color,
            }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/assets/logo.png"
              alt="Excellent Education Classes Logo"
              className="h-28 sm:h-36 w-auto object-contain drop-shadow-2xl animate-[fadeInUp_0.7s_ease_forwards]"
            />
          </div>

          {/* Festive badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-lg">🎨</span>
            <span className="text-white font-semibold text-sm">
              Excellence in Education Since 2010
            </span>
          </div>

          <h1 className="font-display font-extrabold text-white text-5xl sm:text-6xl md:text-7xl leading-tight mb-4 drop-shadow-md">
            Excellent
            <br />
            <span className="text-holi-yellow">Education</span>
            <br />
            Classes
          </h1>

          <p className="text-white/90 text-lg sm:text-xl font-body max-w-xl mx-auto mb-8 leading-relaxed">
            Shaping Bright Futures, One Student at a Time
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/register")}
              className="bg-white text-holi-pink hover:bg-holi-yellow hover:text-foreground font-display font-bold text-base px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
              size="lg"
            >
              Register Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => navigate("/courses")}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/20 font-display font-bold text-base px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
              size="lg"
            >
              Explore Courses
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { num: "500+", label: "Students" },
              { num: "15+", label: "Subjects" },
              { num: "13+", label: "Years" },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-center"
              >
                <div className="font-display font-extrabold text-white text-2xl">
                  {num}
                </div>
                <div className="text-white/80 text-xs font-body">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-holi-pink/10 rounded-full px-4 py-2 mb-4">
              <span className="text-sm">🌈</span>
              <span className="text-holi-pink font-semibold text-sm">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-display font-extrabold text-foreground text-4xl sm:text-5xl mb-3">
              Why Students Love Us
            </h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto">
              A vibrant learning community built on trust, excellence, and joy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, title, desc, gradient, textColor, iconBg }) => (
              <div
                key={title}
                className={`${gradient} rounded-2xl p-6 card-hover border border-border`}
              >
                <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${textColor}`} />
                </div>
                <h3 className={`font-display font-bold text-lg mb-2 ${textColor}`}>
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 relative overflow-hidden holi-gradient-hero">
        <div
          className="holi-blob splash-float-2 w-48 h-48 top-[-2rem] right-[5%]"
          style={{ background: "oklch(0.88 0.18 90)" }}
        />
        <div
          className="holi-blob splash-float-3 w-40 h-40 bottom-[-1rem] left-[8%]"
          style={{ background: "oklch(0.55 0.22 270)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 font-body text-lg mb-8">
            Join hundreds of happy students and begin your path to excellence today.
          </p>
          <Button
            onClick={() => navigate("/register")}
            className="bg-white text-holi-pink hover:bg-holi-yellow hover:text-foreground font-display font-bold text-base px-10 py-6 rounded-full shadow-xl transition-all duration-300 group"
            size="lg"
          >
            Get Started — It's Free!
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
}
