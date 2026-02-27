import { Target, Heart, Star, Shield } from "lucide-react";

const WHY_CHOOSE = [
  {
    icon: Star,
    title: "Experienced Faculty",
    desc: "Our teachers bring decades of classroom expertise and a genuine passion for helping students excel.",
    gradient: "holi-gradient-card-pink",
    textColor: "holi-text-pink",
    iconBg: "bg-holi-pink/10",
  },
  {
    icon: Target,
    title: "Personalized Attention",
    desc: "Small batch sizes mean every student gets focused guidance tailored to their individual learning pace.",
    gradient: "holi-gradient-card-orange",
    textColor: "holi-text-orange",
    iconBg: "bg-holi-orange/10",
  },
  {
    icon: Heart,
    title: "Nurturing Culture",
    desc: "We believe learning thrives in a safe, joyful environment where curiosity is celebrated every day.",
    gradient: "holi-gradient-card-green",
    textColor: "holi-text-green",
    iconBg: "bg-holi-green/10",
  },
  {
    icon: Shield,
    title: "Proven Track Record",
    desc: "Over 500 students have passed through our doors and achieved outstanding results in board exams.",
    gradient: "holi-gradient-card-blue",
    textColor: "holi-text-blue",
    iconBg: "bg-holi-blue/10",
  },
];

const VALUES = [
  { emoji: "🌟", title: "Excellence", desc: "We set high standards and inspire students to meet them." },
  { emoji: "🤝", title: "Integrity", desc: "Honest, transparent, and always in the student's best interest." },
  { emoji: "🌈", title: "Inclusivity", desc: "Every student — regardless of background — deserves quality education." },
  { emoji: "🔥", title: "Passion", desc: "Our teachers are driven by a love of learning and teaching." },
  { emoji: "🌱", title: "Growth", desc: "We celebrate every milestone, big or small, on the journey of learning." },
  { emoji: "🎯", title: "Focus", desc: "Goal-oriented coaching that helps students prepare for what matters most." },
];

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden holi-gradient-hero py-20 text-center">
        <div
          className="holi-blob splash-float absolute w-56 h-56 top-[-3rem] left-[-2rem]"
          style={{ background: "oklch(0.88 0.18 90)", opacity: 0.2 }}
        />
        <div
          className="holi-blob splash-float-2 absolute w-44 h-44 top-4 right-[5%]"
          style={{ background: "oklch(0.55 0.22 270)", opacity: 0.2 }}
        />
        <div
          className="holi-blob splash-float-3 absolute w-36 h-36 bottom-[-1rem] left-[20%]"
          style={{ background: "oklch(0.7 0.2 140)", opacity: 0.2 }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
            <span className="text-white font-semibold text-sm">🏫 Our Story</span>
          </div>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl mb-4 drop-shadow-md">
            About{" "}
            <span className="text-holi-yellow">Excellent</span>
            <br />
            Education Classes
          </h1>
          <p className="text-white/90 font-body text-lg max-w-xl mx-auto">
            A decade-long journey of transforming students into confident, capable achievers
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Story text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-holi-pink/10 rounded-full px-4 py-2 mb-5">
                <span>📖</span>
                <span className="text-holi-pink font-semibold text-sm">Our Journey</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mb-4">
                Founded on a Dream
              </h2>
              <div className="space-y-3 text-muted-foreground font-body leading-relaxed">
                <p>
                  Excellent Education Classes was born in 2010 from a simple but powerful belief:
                  every child deserves access to quality education, regardless of their circumstances.
                </p>
                <p>
                  Founded by a small group of passionate educators, we started with just two classrooms
                  and ten students. Today, we proudly serve over 500 students across Classes 1 to 12
                  and Graduation level.
                </p>
                <p>
                  Our journey has been shaped by the trust of thousands of families who chose us
                  to guide their children's academic paths — and we take that responsibility seriously
                  every single day.
                </p>
              </div>
            </div>

            {/* Colorful milestone cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "2010", label: "Year Founded", gradient: "holi-gradient-card-pink", text: "holi-text-pink" },
                { num: "500+", label: "Students Taught", gradient: "holi-gradient-card-orange", text: "holi-text-orange" },
                { num: "15+", label: "Subjects Offered", gradient: "holi-gradient-card-green", text: "holi-text-green" },
                { num: "95%", label: "Pass Rate", gradient: "holi-gradient-card-blue", text: "holi-text-blue" },
              ].map(({ num, label, gradient, text }) => (
                <div
                  key={label}
                  className={`${gradient} rounded-2xl p-5 text-center border border-border card-hover`}
                >
                  <div className={`font-display font-extrabold text-3xl ${text}`}>{num}</div>
                  <div className="text-muted-foreground text-xs font-body mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-holi-orange/10 rounded-full px-4 py-2 mb-5">
            <span>🎯</span>
            <span className="text-holi-orange font-semibold text-sm">Our Mission</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mb-5">
            What Drives Us
          </h2>
          <div className="bg-white rounded-2xl border border-border p-8 shadow-md relative overflow-hidden">
            <div
              className="holi-blob absolute w-28 h-28 top-[-1rem] right-[-1rem]"
              style={{ background: "oklch(0.72 0.18 50)", opacity: 0.12 }}
            />
            <p className="text-foreground font-body text-lg leading-relaxed relative z-10 italic">
              "To empower every student with the knowledge, confidence, and skills they need
              to thrive academically and in life — delivered through personalized attention,
              expert teaching, and a joyful, inclusive learning environment."
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-holi-green/10 rounded-full px-4 py-2 mb-4">
              <span>✅</span>
              <span className="text-holi-green font-semibold text-sm">Why Choose Us</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mb-2">
              The{" "}
              <span className="holi-text-green">Excellent</span>{" "}
              Difference
            </h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto">
              Here's what sets us apart from every other coaching centre
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE.map(({ icon: Icon, title, desc, gradient, textColor, iconBg }) => (
              <div
                key={title}
                className={`${gradient} rounded-2xl p-6 card-hover border border-border flex gap-4`}
              >
                <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon className={`w-6 h-6 ${textColor}`} />
                </div>
                <div>
                  <h3 className={`font-display font-bold text-lg mb-1.5 ${textColor}`}>{title}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-14 relative overflow-hidden holi-gradient-hero">
        <div
          className="holi-blob splash-float absolute w-48 h-48 top-[-2rem] right-[5%]"
          style={{ background: "oklch(0.88 0.18 90)", opacity: 0.15 }}
        />
        <div
          className="holi-blob splash-float-3 absolute w-40 h-40 bottom-[-1rem] left-[3%]"
          style={{ background: "oklch(0.55 0.22 270)", opacity: 0.15 }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl mb-2">
              Our Values
            </h2>
            <p className="text-white/80 font-body">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {VALUES.map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 card-hover"
              >
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="font-display font-bold text-white text-base mb-1.5">{title}</h3>
                <p className="text-white/75 text-xs font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
