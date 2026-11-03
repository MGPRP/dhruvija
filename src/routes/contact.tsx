import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { useEffect, useState } from "react";
import contactHero from "@/assets/contact-hero.jpg?format=webp&quality=80";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Connect | Contact Dhruvija Properties, Bengaluru" },
      { name: "description", content: "Reach Dhruvija Properties LLP at Saroja Chamber, Seshadripuram, Bengaluru. Call +91 97418 08880 or write to info@dhruvija.com." },
      { property: "og:title", content: "Say Hi | Contact Dhruvija Properties" },
      { property: "og:description", content: "Visit us at Seshadripuram, Bengaluru. Or call. Or write." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://dhruvijapropertieswebsite.lovable.app/contact" },
    ],
    links: [
      { rel: "canonical", href: "https://dhruvijapropertieswebsite.lovable.app/contact" },
      { rel: "preload", as: "image", href: contactHero, fetchPriority: "high" },
    ],
  }),
  component: Contact,
});

/* ---------- Map ---------- */
// Keyless Google Maps embed for the Dhruvija Properties listing (no API key, works on any domain).
const mapSrc =
  "https://maps.google.com/maps?ll=12.986464,77.576253&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=4007870070183098874&output=embed";
const mapLink =
  "https://www.google.com/maps?ll=12.986464,77.576253&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=4007870070183098874";

/* ---------- Leads ---------- */
// PHP handler that saves and emails the lead, then redirects to /thankyou.
const LEADS_ENDPOINT = "https://bizbucks.in/demo/Dhruvija-Properties/contact.php";

/* ---------- Validation ---------- */
const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

function validateName(v: string): string {
  if (!v) return "Name is required.";
  if (v.startsWith(" ")) return "Name cannot start with a space.";
  if (!/^[A-Za-z ]+$/.test(v)) return "Only letters and spaces are allowed (no digits or special characters).";
  if (v.replace(/ /g, "").length < 3) return "Name must contain at least 3 letters.";
  return "";
}

function validateEmail(v: string): string {
  if (!v) return "Email is required.";
  if (!EMAIL_RE.test(v)) return "Enter a valid email address, e.g. name@example.com.";
  return "";
}

function validatePhone(v: string): string {
  if (!v) return "Phone number is required.";
  if (!/^\d{10}$/.test(v)) return `Phone must be exactly 10 digits (${v.length}/10).`;
  return "";
}

type Values = { name: string; email: string; phone: string };
type Touched = { name: boolean; email: boolean; phone: boolean };

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState<Values>({ name: "", email: "", phone: "" });
  const [touched, setTouched] = useState<Touched>({ name: false, email: false, phone: false });

  const errors = {
    name: validateName(values.name),
    email: validateEmail(values.email),
    phone: validatePhone(values.phone),
  };
  const isValid = !errors.name && !errors.email && !errors.phone;

  // Validation runs on every keystroke: a field becomes "touched" as soon as the user types in it.
  const handleChange = (field: keyof Values, raw: string) => {
    let value = raw;
    if (field === "phone") value = raw.replace(/\D/g, "").slice(0, 10); // digits only, max 10
    if (field === "email") value = raw.replace(/\s/g, ""); // no spaces in email
    setValues((v) => ({ ...v, [field]: value }));
    setTouched((t) => ({ ...t, [field]: true }));
  };

  // Re-enable the button if the visitor comes back from the thank-you page via the browser's back button.
  useEffect(() => {
    const reset = (e: PageTransitionEvent) => e.persisted && setSubmitting(false);
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, []);

  const handleBlur = (field: keyof Values) => setTouched((t) => ({ ...t, [field]: true }));

  // Valid forms post straight to the PHP handler, which emails the lead and redirects to the thank-you page.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setTouched({ name: true, email: true, phone: true });
    if (!isValid || submitting) {
      e.preventDefault();
      return;
    }
    setSubmitting(true);
  };

  return (
    <main className="overflow-x-clip">
      <Nav />

      {/* HERO, verandah welcome */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={contactHero}
          alt="A sunlit verandah opening onto a green garden with wooden furniture and potted plants"
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
          decoding="async"
          width={1600}
          height={1008}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-shade/40 via-shade/10 to-shade/70" />
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 md:px-14 pt-28 pb-10 text-background max-w-[1400px] mx-auto">
          <Reveal as="span" className="inline-flex items-center gap-2 self-start rounded-full bg-background/15 border border-background/30 backdrop-blur-md px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em]">
            <span className="size-1.5 rounded-full bg-butter" />
            Say Hi · let's talk
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-5 font-display text-[clamp(2rem,5vw,4.25rem)] leading-[0.98]">
            Pull up a<br />
            <span className="text-butter">chair.</span>
          </Reveal>
          <Reveal as="p" delay={240} className="mt-6 text-base text-background/90 max-w-2xl">
            Tea's on. Whether you want to walk a plot, pick a floor plan, or just
            understand how we build, we'd love to hear from you.
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 md:py-24 wave-bg">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-5">
          {/* Form */}
          <form
            action={LEADS_ENDPOINT}
            method="POST"
            noValidate
            onSubmit={handleSubmit}
            className="md:col-span-7 rounded-none bg-card border border-border p-6 md:p-8 space-y-5"
          >
            <div>
              <span className="tag-chip"><span className="size-1.5 rounded-full bg-butter" /> A note to us</span>
              <h2 className="mt-3 font-display text-xl md:text-2xl">Write a few lines.</h2>
              <p className="mt-2 text-sm text-foreground/70">We usually reply within a working day, sometimes with a question, sometimes with a floor plan.</p>
            </div>
            <Field
              label="Your name"
              name="name"
              value={values.name}
              error={touched.name ? errors.name : ""}
              onChange={(v) => handleChange("name", v)}
              onBlur={() => handleBlur("name")}
              autoComplete="name"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={values.email}
              error={touched.email ? errors.email : ""}
              onChange={(v) => handleChange("email", v)}
              onBlur={() => handleBlur("email")}
              autoComplete="email"
            />
            <Field
              label="Phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={values.phone}
              error={touched.phone ? errors.phone : ""}
              onChange={(v) => handleChange("phone", v)}
              onBlur={() => handleBlur("phone")}
              autoComplete="tel-national"
            />
            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-[0.65rem] uppercase tracking-widest text-foreground/90">
                Tell us a little <span className="normal-case tracking-normal text-foreground/50">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm hover:bg-foreground/85 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:pointer-events-none"
            >
              {submitting ? "Sending…" : "Submit your Interest"}
            </button>
          </form>

          {/* Info */}
          <aside className="md:col-span-5 space-y-4">
            <div className="rounded-none bg-background border border-border overflow-hidden">
              <iframe
                title="Dhruvija Properties office location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 md:h-72 border-0"
                src={mapSrc}
              />
            </div>
            <div className="rounded-none bg-background border border-border p-6 space-y-2">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest">Office · Bengaluru</span>
              <p className="mt-1.5 font-display text-base md:text-lg leading-snug">
                Dhruvija Properties LLP,<br />
                No.50, Saroja Chambers, 1st Floor, 4th Main Road, Nehru Nagar, Seshadripuram, Bengaluru - 560020.
              </p>
            </div>
            <div className="rounded-none bg-background border border-border p-6 space-y-2">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest">Reach us on</span>
              <a href="mailto:info@dhruvija.com" className="block font-display text-xl hover:underline">info@dhruvija.com</a>
              <a href="tel:+919741808880" className="block font-display text-xl hover:underline">+91 97418 08880</a>
              <div className="pt-1 text-xs text-foreground/70 space-y-0.5">
                <p>Landline: <a href="tel:08041487175" className="hover:underline">080 - 4148 7175</a></p>
                <p>Landline: <a href="tel:08029901062" className="hover:underline">080 - 2990 1062</a></p>
              </div>
            </div>
            <div className="rounded-none bg-background border border-border p-6">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest">Office hours</span>
              <p className="mt-2 text-sm text-foreground/80">Mon to Sat · 10:00 to 18:30</p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
  autoComplete?: string;
};

function Field({
  label,
  name,
  value,
  error,
  onChange,
  onBlur,
  type = "text",
  inputMode,
  maxLength,
  autoComplete,
}: FieldProps) {
  const hasError = !!error;
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="font-mono text-[0.65rem] uppercase tracking-widest text-foreground/90">
        {label} <span className="text-red-600">*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        inputMode={inputMode}
        maxLength={maxLength}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${name}-error` : undefined}
        className={`w-full rounded-full border bg-background px-5 py-2.5 text-sm focus:outline-none focus:ring-2 ${
          hasError ? "border-red-500 focus:ring-red-500/40" : "border-border focus:ring-ring"
        }`}
      />
      {hasError && (
        <p id={`${name}-error`} role="alert" className="px-2 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}