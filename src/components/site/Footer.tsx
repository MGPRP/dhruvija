import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, type LucideIcon } from "lucide-react";

// Leave href empty until the profile URL is available; the icon then shows as "coming soon".
const socials: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: "Instagram", href: "https://www.instagram.com/dhruvijaproperties/", Icon: Instagram },
  { label: "Facebook", href: "", Icon: Facebook },
  { label: "LinkedIn", href: "", Icon: Linkedin },
  { label: "YouTube", href: "", Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="relative mt-20 bg-foreground text-background">
      <div className="relative px-6 md:px-12 pt-10 pb-6">
        <div className="grid gap-6 md:grid-cols-4 text-sm">
          <div className="md:col-span-2 max-w-sm">
            <h2 className="font-display text-[clamp(1.2rem,2.2vw,1.75rem)] leading-[1.15] pb-1">
              Let's imagine and build it<br />
              <span className="text-background/60">together.</span>
            </h2>
            <p className="mt-5 text-background/70">
              A legacy of trust, building for tomorrow. From plotted farmlands to
              skyline towers, rooted in Bengaluru.
            </p>
            <ul className="mt-5 flex gap-3" aria-label="Social media">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/40 text-white transition-colors hover:border-butter hover:text-butter"
                    >
                      <Icon size={16} aria-hidden />
                    </a>
                  ) : (
                    <span
                      title={`${label} — coming soon`}
                      aria-label={`${label} (coming soon)`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/40 text-white"
                    >
                      <Icon size={16} aria-hidden />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono uppercase tracking-widest text-xs text-background/50 mb-3">Wander</p>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-butter">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-butter">Our Ethos</Link></li>
              <li><Link to="/projects" className="hover:text-butter">Our Portfolio</Link></li>
              <li><Link to="/gallery" className="hover:text-butter">Gallery</Link></li>
              <li><Link to="/journal" className="hover:text-butter">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-butter">Connect</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono uppercase tracking-widest text-xs text-background/50 mb-3">Reach</p>
            <ul className="space-y-2 text-background/80">
              <li><a href="mailto:info@dhruvija.com" className="hover:text-butter">info@dhruvija.com</a></li>
              <li><a href="tel:+919535624443" className="hover:text-butter">+91 95356 24443</a></li>
              <li><a href="tel:08041487175" className="hover:text-butter">080 - 4148 7175</a></li>
              <li><a href="tel:08029901062" className="hover:text-butter">080 - 2990 1062</a></li>
              <li>
                Want to build your career with us, email us at -{" "}
                <a href="mailto:info@dhruvija.com" className="hover:text-butter">info@dhruvija.com</a>
                {" "}or{" "}
                <a href="mailto:hr@dhruvija.com" className="hover:text-butter">hr@dhruvija.com</a>.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-7 pt-4 flex flex-wrap justify-between gap-4 text-xs text-background/50 font-mono uppercase tracking-widest">
          <span>© 2026 Dhruvija Properties LLP</span>
          <span>Bengaluru · Karnataka · 560020</span>
        </div>
      </div>
    </footer>
  );
}