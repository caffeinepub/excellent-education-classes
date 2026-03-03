import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";

const SUBJECTS = [
  {
    emoji: "📐",
    name: "Mathematics",
    desc: "From arithmetic to calculus — build strong numerical foundations",
    gradient: "holi-gradient-card-pink",
    textColor: "holi-text-pink",
  },
  {
    emoji: "🔬",
    name: "Science",
    desc: "Physics, Chemistry, and Biology made engaging and practical",
    gradient: "holi-gradient-card-orange",
    textColor: "holi-text-orange",
  },
  {
    emoji: "📚",
    name: "English",
    desc: "Grammar, comprehension, writing skills and literature",
    gradient: "holi-gradient-card-green",
    textColor: "holi-text-green",
  },
  {
    emoji: "🌍",
    name: "Social Studies",
    desc: "History, Geography, Civics — understand the world around you",
    gradient: "holi-gradient-card-blue",
    textColor: "holi-text-blue",
  },
  {
    emoji: "🗣️",
    name: "Hindi",
    desc: "Strengthen your Hindi language skills and literary appreciation",
    gradient: "holi-gradient-card-purple",
    textColor: "holi-text-purple",
  },
  {
    emoji: "💻",
    name: "Computer Science",
    desc: "Programming, IT fundamentals, and digital literacy",
    gradient: "holi-gradient-card-yellow",
    textColor: "holi-text-orange",
  },
  {
    emoji: "📊",
    name: "Commerce",
    desc: "Accounts, Business Studies, and Economics for Class 11-12",
    gradient: "holi-gradient-card-pink",
    textColor: "holi-text-pink",
  },
  {
    emoji: "🎨",
    name: "Arts",
    desc: "Fine arts, drawing, and creative visual expression",
    gradient: "holi-gradient-card-orange",
    textColor: "holi-text-orange",
  },
];

const CLASS_BADGE_COLORS = [
  "bg-holi-pink/10 text-holi-pink border-holi-pink/20",
  "bg-holi-orange/10 text-holi-orange border-holi-orange/20",
  "bg-holi-yellow/10 text-holi-yellow border-holi-yellow/20",
  "bg-holi-green/10 text-holi-green border-holi-green/20",
  "bg-holi-blue/10 text-holi-blue border-holi-blue/20",
  "bg-holi-purple/10 text-holi-purple border-holi-purple/20",
];

const CLASS_BADGES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "Grad",
].map((cls, idx) => ({
  cls,
  label: cls === "Grad" ? "🎓 Graduation" : `Class ${cls}`,
  color: CLASS_BADGE_COLORS[idx % 6],
}));

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Address",
    value: "Near Lakshya Public School, Mauranipur, Jhansi, Uttar Pradesh",
    color: "holi-text-pink",
    bg: "bg-holi-pink/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 97955 10320",
    color: "holi-text-green",
    bg: "bg-holi-green/10",
  },
  {
    icon: Mail,
    label: "Email",
    value: "excellenteducationclasses2025@gmail.com",
    color: "holi-text-blue",
    bg: "bg-holi-blue/10",
  },
  {
    icon: MessageCircle,
    label: "Enquiries",
    value: "Call or email us — we respond within 24 hours",
    color: "holi-text-orange",
    bg: "bg-holi-orange/10",
  },
];

export default function CoursesPage() {
  return (
    <div className="page-enter">
      {/* Hero Banner */}
      <section className="relative overflow-hidden holi-gradient-hero py-16 text-center">
        <div
          className="holi-blob splash-float-2 absolute w-48 h-48 top-[-2rem] left-[5%]"
          style={{ background: "oklch(0.88 0.18 90)", opacity: 0.2 }}
        />
        <div
          className="holi-blob splash-float absolute w-40 h-40 bottom-[-1rem] right-[8%]"
          style={{ background: "oklch(0.55 0.22 270)", opacity: 0.2 }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <span className="text-white text-sm font-semibold">
              📚 Our Curriculum
            </span>
          </div>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-3">
            Courses We Offer
          </h1>
          <p className="text-white/90 font-body text-lg">
            Comprehensive subjects for Class 1 through Graduation
          </p>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mb-2">
              Our <span className="holi-text-pink">Subjects</span>
            </h2>
            <p className="text-muted-foreground font-body">
              Expert-taught courses covering all major disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SUBJECTS.map(({ emoji, name, desc, gradient, textColor }) => (
              <div
                key={name}
                className={`${gradient} rounded-2xl p-5 card-hover border border-border`}
              >
                <div className="text-4xl mb-3">{emoji}</div>
                <h3
                  className={`font-display font-bold text-lg mb-1.5 ${textColor}`}
                >
                  {name}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Coverage Banner */}
      <section className="py-10 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-display font-bold text-2xl text-foreground mb-4">
            Classes We Cover 📋
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {CLASS_BADGES.map(({ cls, label, color }) => (
              <span
                key={cls}
                className={`inline-flex items-center px-4 py-2 rounded-full border font-display font-bold text-sm ${color}`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-holi-orange/10 rounded-full px-4 py-2 mb-4">
              <span>📞</span>
              <span className="text-holi-orange font-semibold text-sm">
                Get In Touch
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mb-2">
              Contact <span className="holi-text-orange">Us</span>
            </h2>
            <p className="text-muted-foreground font-body">
              Have questions? We're happy to help!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CONTACT_INFO.map(({ icon: Icon, label, value, color, bg }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-5 border border-border card-hover flex items-start gap-4"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center shrink-0`}
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-muted-foreground mb-0.5">
                    {label}
                  </p>
                  <p className={`font-body font-semibold text-base ${color}`}>
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map-style decoration */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-holi-green/5 via-holi-blue/5 to-holi-purple/5 p-8 text-center">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              Visit Our Centre
            </h3>
            <p className="text-muted-foreground font-body">
              Near Lakshya Public School, Mauranipur, Jhansi, Uttar Pradesh
              <br />
              <span className="text-sm">Open Mon–Sat, 8 AM – 7 PM</span>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="mt-8 rounded-2xl border border-border bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 p-8 text-center">
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              Follow Us Online 🌟
            </h3>
            <p className="text-muted-foreground font-body text-sm mb-6">
              Stay connected with us on social media for updates, tips, and more
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/excellenteducationclasses2025?igsh=ZXAza2t1czNsZXJl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <SiInstagram className="w-5 h-5" />
                <span>@excellenteducationclasses2025</span>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@excellenteducationclasses?si=geNJcK1Hq_-LitPI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-red-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 hover:bg-red-700 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <SiYoutube className="w-5 h-5" />
                <span>@excellenteducationclasses</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
