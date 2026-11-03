import { Link } from "@tanstack/react-router";
import logo from "@/assets/Dhruvija Properties_Main Logo.webp";

const portfolioItems = [
  "Residential",
  "Luxury Farm Plots",
  "Commercial",
  "Hospitality",
];

const navLinks = [
  { to: "/", label: "Our Story" },
  { to: "/about", label: "Our Ethos" },
  { to: "/projects", label: "Our Portfolio", hasDropdown: true },
  { to: "/gallery", label: "Gallery" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Connect" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 md:px-10 ">
        <Link to="/" aria-label="Dhruvija Properties, home" className="flex items-center shrink-0 gap-4">
          <img
            src={logo}
            alt="Dhruvija Properties"
            width={640}
            height={200}
            className="h-24 md:h-28 w-auto object-contain"
          />
          <span aria-hidden className="hidden md:block h-9 w-px bg-logo-properties/20" />
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-logo-properties">
          {navLinks.map((l) =>
            l.hasDropdown ? (
              <div key={l.to} className="relative group">
                <Link
                  to={l.to}
                  activeOptions={{ exact: true }}
                  className="inline-flex items-center gap-1 px-3 py-2 text-logo-properties/90 hover:text-logo-properties transition-colors [&.active]:text-logo-properties"
                >
                  {l.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:rotate-180"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                  <div className="rounded-none border border-logo-properties/15 bg-background px-2 py-2 min-w-[200px] shadow-[0_18px_40px_-30px_rgba(0,0,0,0.35)]">
                    {portfolioItems.map((item) => (
                      <span
                        key={item}
                        className="block px-3 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-logo-properties/90 hover:text-logo-properties transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                className="px-3 py-2 text-logo-properties/70 hover:text-logo-properties transition-colors [&.active]:text-logo-properties"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>
        <a
          href="tel:+919741808880"
          className="border border-logo-properties/40 px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-logo-properties hover:bg-logo-properties hover:text-background transition-colors"
        >
          +91 97418 08880
        </a>
      </div>
    </header>
  );
}
