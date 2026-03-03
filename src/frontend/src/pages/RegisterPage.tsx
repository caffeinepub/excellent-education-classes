import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  GraduationCap,
  Loader2,
  Mail,
  Phone,
  School,
  User,
} from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

const CLASS_OPTIONS = [
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
  "Graduation",
];

const GENDER_OPTIONS = ["Male", "Female", "Other"];

interface FormState {
  name: string;
  email: string;
  mobile: string;
  gender: string;
  school: string;
  classLevel: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  mobile: "",
  gender: "",
  school: "",
  classLevel: "",
};

export default function RegisterPage() {
  const { actor, isFetching } = useActor();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // True only while the actor is initializing AND we don't have it yet
  const isActorLoading = isFetching && !actor;

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(form.mobile.replace(/\s/g, ""))) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!form.gender) newErrors.gender = "Please select your gender";
    if (!form.school.trim()) newErrors.school = "School name is required";
    if (!form.classLevel) newErrors.classLevel = "Please select a class";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!actor) {
      setSubmitError("Connection not ready. Please try again.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Wait briefly for actor if it's still initializing
      let resolvedActor = actor;
      if (!resolvedActor) {
        setSubmitError(
          "Still connecting to the server. Please wait a moment and try again.",
        );
        setIsSubmitting(false);
        return;
      }

      await resolvedActor.registerStudent(
        form.name.trim(),
        form.email.trim(),
        form.mobile.trim(),
        form.gender,
        form.school.trim(),
        form.classLevel,
      );
      setSubmitted(true);
      setForm(INITIAL_FORM);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      if (errorMessage.includes("network") || errorMessage.includes("fetch")) {
        setSubmitError(
          "Network error. Please check your connection and try again.",
        );
      } else {
        setSubmitError("Registration failed. Please try again.");
      }
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="page-enter min-h-[80vh] flex items-center justify-center px-4">
        <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border border-border">
          {/* Confetti blobs */}
          <div
            className="holi-blob absolute w-32 h-32 top-[-1rem] left-[-1rem]"
            style={{ background: "oklch(0.88 0.18 90)", opacity: 0.2 }}
          />
          <div
            className="holi-blob absolute w-24 h-24 bottom-[-0.5rem] right-[-0.5rem]"
            style={{ background: "oklch(0.58 0.24 340)", opacity: 0.2 }}
          />
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-holi-green/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-holi-green" />
            </div>
            <h2 className="font-display font-extrabold text-3xl text-foreground mb-3">
              You're In! 🎉
            </h2>
            <p className="font-body text-muted-foreground mb-2 text-base leading-relaxed">
              Registration successful! Welcome to{" "}
              <span className="holi-text-pink font-bold">
                Excellent Education Classes
              </span>
              .
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              We'll be in touch soon with next steps.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {["🌸", "🎨", "🌈", "✨", "🎊"].map((emoji) => (
                <span key={emoji} className="text-2xl">
                  {emoji}
                </span>
              ))}
            </div>
            <Button
              type="button"
              onClick={() => setSubmitted(false)}
              className="bg-holi-pink text-white hover:bg-holi-purple font-display font-bold rounded-full px-8 py-5 transition-all duration-300"
            >
              Register Another Student
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-holi-pink/10 rounded-full px-4 py-2 mb-4">
            <span>📝</span>
            <span className="text-holi-pink font-semibold text-sm">
              Student Registration
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-3">
            Join Our <span className="holi-text-pink">Family</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-sm mx-auto">
            Fill in your details below to register with Excellent Education
            Classes
          </p>
        </div>

        {/* Form card */}
        <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-border p-6 sm:p-8">
          {/* Decorative corner blobs */}
          <div
            className="holi-blob absolute w-40 h-40 top-[-2rem] right-[-2rem]"
            style={{ background: "oklch(0.88 0.18 90)", opacity: 0.12 }}
          />
          <div
            className="holi-blob absolute w-32 h-32 bottom-[-1rem] left-[-1rem]"
            style={{ background: "oklch(0.58 0.24 340)", opacity: 0.1 }}
          />

          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative z-10 space-y-5"
          >
            {/* Full Name */}
            <div className="space-y-1.5">
              <Label
                htmlFor="name"
                className="font-semibold text-foreground flex items-center gap-1.5"
              >
                <User className="w-4 h-4 holi-text-pink" />
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`rounded-xl border-2 focus-visible:ring-holi-pink/30 ${
                  errors.name ? "border-destructive" : "focus:border-holi-pink"
                }`}
              />
              {errors.name && (
                <p className="text-destructive text-xs font-body">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label
                htmlFor="email"
                className="font-semibold text-foreground flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 holi-text-orange" />
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`rounded-xl border-2 focus-visible:ring-holi-orange/30 ${
                  errors.email
                    ? "border-destructive"
                    : "focus:border-holi-orange"
                }`}
              />
              {errors.email && (
                <p className="text-destructive text-xs font-body">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div className="space-y-1.5">
              <Label
                htmlFor="mobile"
                className="font-semibold text-foreground flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 holi-text-green" />
                Mobile Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="10-digit mobile number"
                value={form.mobile}
                onChange={(e) => handleChange("mobile", e.target.value)}
                className={`rounded-xl border-2 focus-visible:ring-holi-green/30 ${
                  errors.mobile
                    ? "border-destructive"
                    : "focus:border-holi-green"
                }`}
              />
              {errors.mobile && (
                <p className="text-destructive text-xs font-body">
                  {errors.mobile}
                </p>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-1.5">
              <Label
                htmlFor="gender"
                className="font-semibold text-foreground flex items-center gap-1.5"
              >
                <span className="text-base">👤</span>
                Gender <span className="text-destructive">*</span>
              </Label>
              <Select
                value={form.gender}
                onValueChange={(val) => handleChange("gender", val)}
              >
                <SelectTrigger
                  id="gender"
                  className={`rounded-xl border-2 ${
                    errors.gender ? "border-destructive" : ""
                  }`}
                >
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  {GENDER_OPTIONS.map((g) => (
                    <SelectItem key={g} value={g}>
                      {g}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.gender && (
                <p className="text-destructive text-xs font-body">
                  {errors.gender}
                </p>
              )}
            </div>

            {/* School */}
            <div className="space-y-1.5">
              <Label
                htmlFor="school"
                className="font-semibold text-foreground flex items-center gap-1.5"
              >
                <School className="w-4 h-4 holi-text-blue" />
                School Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="school"
                type="text"
                placeholder="Your school or college name"
                value={form.school}
                onChange={(e) => handleChange("school", e.target.value)}
                className={`rounded-xl border-2 focus-visible:ring-holi-blue/30 ${
                  errors.school
                    ? "border-destructive"
                    : "focus:border-holi-blue"
                }`}
              />
              {errors.school && (
                <p className="text-destructive text-xs font-body">
                  {errors.school}
                </p>
              )}
            </div>

            {/* Class */}
            <div className="space-y-1.5">
              <Label
                htmlFor="classLevel"
                className="font-semibold text-foreground flex items-center gap-1.5"
              >
                <GraduationCap className="w-4 h-4 holi-text-purple" />
                Class / Grade <span className="text-destructive">*</span>
              </Label>
              <Select
                value={form.classLevel}
                onValueChange={(val) => handleChange("classLevel", val)}
              >
                <SelectTrigger
                  id="classLevel"
                  className={`rounded-xl border-2 ${
                    errors.classLevel ? "border-destructive" : ""
                  }`}
                >
                  <SelectValue placeholder="Select your class" />
                </SelectTrigger>
                <SelectContent>
                  {CLASS_OPTIONS.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.classLevel && (
                <p className="text-destructive text-xs font-body">
                  {errors.classLevel}
                </p>
              )}
            </div>

            {/* Submit Error */}
            {submitError && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-3 text-destructive text-sm font-body">
                ⚠️ {submitError}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting || isActorLoading}
              className="w-full holi-gradient-hero text-white font-display font-bold text-base py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Registering...
                </>
              ) : isActorLoading ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Complete Registration 🌈"
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground font-body">
              By registering, you agree to be contacted by Excellent Education
              Classes
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
