import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { HeroFX } from "@/components/site/HeroFX";
import heroA from "@/assets/hero-6-1.jpg";
import heroB from "@/assets/hero-entrance2.jpg";
import heroC from "@/assets/hero-marketing-office.jpg";
import heroD from "@/assets/hero-tuscan-v2-3.jpg";
import offerFarmlandAsset from "@/assets/offer-farmland.jpg";
import offerPlottedAsset from "@/assets/offer-plotted.jpg";
import residencesWorkplacesAsset from "@/assets/residences-workplaces.jpg";
import hospitality from "@/assets/offer-hospitality.jpg?format=webp&quality=80";
import vatikaAsset from "@/assets/vatika-new.jpg";
import rootedHereAsset from "@/assets/rooted-here.jpg";
import gopuraAsset from "@/assets/dhruvija-gopura.jpg";
import holidayInnAsset from "@/assets/holiday-inn-express.jpg";

const vatika = vatikaAsset;
const rootedHere = rootedHereAsset;
const gopura = gopuraAsset;
const holidayInn = holidayInnAsset;
const offerFarmland = offerFarmlandAsset;
const offerPlotted = offerPlottedAsset;
const offerResidence = residencesWorkplacesAsset;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhruvija Properties | Bengaluru Real Estate Since 1974" },
      { name: "description", content: "Bengaluru-rooted real estate by Dhruvija Properties: managed farm plots, skyline residences and plotted communities crafted with eco-conscious detail." },
      { property: "og:title", content: "Dhruvija Properties, A legacy of trust, building for tomorrow" },
      { property: "og:description", content: "Inspired by Dhruva, the steadfast pole star, Dhruvija weaves sustainability into modern living." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://dhruvijapropertieswebsite.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://dhruvijapropertieswebsite.lovable.app/" },
      { rel: "preload", as: "image", href: heroA, fetchPriority: "high" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Nav />

      {/* HERO, full-bleed aerial canopy */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <HeroFX
          srcs={[heroA, heroB, heroC, heroD]}
          alt="Dhruvija Properties, residences, gated communities and farm plots across Bengaluru"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-shade/45 via-shade/10 to-shade/70" />

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 md:px-14 pt-32 pb-12 text-background max-w-[1400px] mx-auto">
          <Reveal as="h1" className="mt-5 font-display text-[clamp(2rem,5vw,4.25rem)] leading-[0.95] tracking-[-0.03em] max-w-[16ch]">
            Built on <span className="text-butter">Trust,</span><br />
            Made to <span className="text-butter">Last.</span>
          </Reveal>
          <Reveal delay={260} className="mt-7 grid md:grid-cols-12 gap-6 items-end">
            <p className="md:col-span-6 text-base text-background/90 max-w-xl leading-relaxed">
              Dhruvija has been quietly planting communities across Bengaluru: luxury farm plots, plotted layouts and skyline residences that let the land keep breathing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ROOTED HERE, about, editorial two-column */}
      <section className="px-6 md:px-12 py-16 md:py-24 wave-bg">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="relative rounded-none overflow-hidden aspect-[4/5] bg-muted">
              <img src={rootedHere} alt="Aerial view of lush green farmland and rural settlements" loading="lazy" width={1280} height={960} className="size-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-7">
            <span className="tag-chip"><span className="size-1.5 rounded-full bg-butter" /> Rooted Here · about</span>
            <h2 className="mt-5 font-display text-2xl md:text-4xl leading-[1.02]">
              We build the way<br />
              <span className="">a tree grows, </span><br />
              slowly, deeply, with purpose.
            </h2>
            <div className="mt-6 space-y-4 text-base text-foreground/90 max-w-xl">
              <p>
                Dhruvija, from <em>Dhruva</em>, the steadfast pole star, has long been
                planting homes into Bengaluru's changing skyline. Farm plots, plotted
                layouts, apartments &amp; hospitality, each drawn with the
                same steady hand.
              </p>
              <p>
                Every project is a tribute to the land it sits on. Sustainability is
                built into the everyday: generous daylight, natural ventilation, native
                trees and open ground to grow into. A home here is never just walls, it
                is part of a living, breathing neighbourhood.
              </p>
            </div>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline decoration-clay decoration-[2px] underline-offset-4">
              Read our fuller story →
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT GROWS HERE, offerings */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="tag-chip"><span className="size-1.5 rounded-full bg-clay" /> What grows here</span>
              <h2 className="mt-4 font-display text-2xl md:text-4xl leading-[1.02]">
                Four landscapes,<br />
                <span className="">one careful hand.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-foreground/70">
              From an urban soul's weekend farm to a family's forever apartment, every
              format we work in has the same soil under it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                n: "01",
                t: "Luxury Farm Plots",
                d: "Weekend farms and orchard plots on the outskirts, cared for by us so you can just show up and be still.",
                bg: "bg-background border border-border",
                img: offerFarmland,
              },
              {
                n: "02",
                t: "Premium Plotted Gated Communities",
                d: "Land planned with intention: tree-lined avenues, community lungs, and the paperwork done properly.",
                bg: "bg-background border border-border",
                img: offerPlotted,
              },
              {
                n: "03",
                t: "Residences & Workplaces",
                d: "Apartments, villas and offices designed for daylight, cross-ventilation and the rhythms of everyday life.",
                bg: "bg-background border border-border",
                img: offerResidence,
              },
              {
                n: "04",
                t: "Hospitality",
                d: "Hotels and resorts built for warmth and long stays, where service, light and landscape are planned together.",
                bg: "bg-background border border-border",
                img: hospitality,
              },
            ].map((s) => (
              <Reveal key={s.n} delay={Number(s.n) * 80} as="article" className={`${s.bg} rounded-none p-2.5 pb-5 flex flex-col group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-20px_rgba(40,50,30,0.25)] hover-zoom`}>
                <div className="relative rounded-none overflow-hidden aspect-[4/5]">
                  <img src={s.img} alt={s.t} loading="lazy" width={1200} height={1400} className="size-full object-cover" />
                  <span className="absolute top-3 left-3 font-mono text-[0.65rem] bg-background/85 backdrop-blur-md px-2.5 py-1 rounded-full">{s.n}</span>
                </div>
                <div className="px-3 pt-4">
                  <h3 className="font-display text-xl mb-1.5 leading-[1.05]">{s.t}</h3>
                  <p className="text-foreground/75 text-sm">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IN BLOOM, projects */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <span className="tag-chip"><span className="size-1.5 rounded-full bg-butter" /> In Bloom · featured</span>
              <h2 className="mt-4 font-display text-2xl md:text-4xl leading-[1.02] max-w-3xl">
                Featured projects<br />
                <span className="">currently under development.</span>
              </h2>
            </div>
            <Link to="/projects" className="rounded-full border border-foreground/20 px-4 py-2 text-sm hover:bg-foreground hover:text-background transition-colors">All projects →</Link>
          </div>

          <div className="space-y-4">
            {[
              {
                num: "01",
                name: "Dhrumini Vatika",
                tag: "Luxury Farm Plot",
                loc: "",
                blurb: "A green sanctuary for those seeking peace, balance and a deeper connection with nature. Serene farm plots that invite a return to simple joys, fresh air, open skies, and natural beauty.",
                img: vatika,
                tint: "bg-background border border-border",
                href: "https://dhruminivatika.com/",
              },
              {
                num: "02",
                name: "Dhruvija Gopura",
                tag: "Residential tower",
                loc: "North Bengaluru",
                blurb: "In the heart of a city that never stops dreaming, rises a marvel that redefines what it means to live above and beyond, a sanctuary sculpted in glass, steel and sky.",
                img: gopura,
                tint: "bg-background border border-border",
                href: "https://dhruvijagopura.com/",
              },
              {
                num: "03",
                name: "Holiday Inn Express",
                tag: "Hospitality",
                loc: "Whitefield, Bengaluru",
                blurb: "A smart-stay hotel in Bengaluru’s technology hub, offering 223 thoughtfully crafted rooms where comfort meets effortless efficiency. Designed for business and leisure guests who value simplicity, warm service and a prime address beside ITPL.",
                img: holidayInn,
                tint: "bg-background border border-border",
                href: "https://www.ihg.com/holidayinnexpress/hotels/us/en/whitefield/blrep/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-IN-_-BLREP",
              },
            ].map((p, i) => (
              <Reveal key={p.num} delay={i * 100} as="article" className="group grid md:grid-cols-12 gap-4 items-stretch">
                <div className={`md:col-span-7 ${p.tint} rounded-none p-2.5 hover-zoom`}>
                  <div className={`rounded-none overflow-hidden bg-background flex items-center justify-center ${p.name === "Holiday Inn Express" ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
                    {p.img ? (
                      <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="size-full object-cover" />
                    ) : (
                      <span className="font-display text-lg md:text-xl text-clay/70 ">image to be updated</span>
                    )}
                  </div>
                </div>
                <div className="md:col-span-5 flex flex-col justify-between rounded-none bg-card border border-border p-6">
                  <div className="flex items-center justify-end">
                    {p.tag ? <span className="tag-chip">{p.tag}</span> : null}
                  </div>
                  <div className="mt-6">
                    {p.loc ? <div className="font-mono text-[0.65rem] uppercase tracking-widest text-foreground/50 mb-1.5">{p.loc}</div> : null}
                    <h3 className="font-display text-xl md:text-2xl mb-2">{p.name}</h3>
                    <p className="text-foreground/70 text-sm">{p.blurb}</p>
                  </div>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline decoration-clay decoration-[2px] underline-offset-4 self-start"
                    >
                      Project details →
                    </a>
                  ) : (
                    <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline decoration-clay decoration-[2px] underline-offset-4 self-start">
                      Project details →
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NOTES FROM THE GROVE, values */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <span className="tag-chip"><span className="size-1.5 rounded-full bg-clay" /> Notes from the grove</span>
          <h2 className="mt-4 font-display text-2xl md:text-4xl max-w-3xl leading-[1.02]">
            Four small rules,<br />
            <span className="">held from the start.</span>
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-7">
            {[
              { k: "Trusted", v: "We envision becoming one of the most trusted names in real estate, known for thoughtfully planned, sustainable spaces that enrich everyday living." },
              { k: "Ethical roots", v: "Deep expertise, an ethical practice and an unwavering focus on transparency in every brick and beam." },
              { k: "Design detailing", v: "Spaces engineered for comfort and functionality, quietly clever, never loud." },
              { k: "Built to thrive", v: "Communities where people feel at home, and futures are built to thrive across generations." },
            ].map((v, i) => (
              <div key={i} className="pt-5 flex gap-5">
                <span className="font-mono text-xs text-foreground/50">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl mb-1.5">{v.k}</h3>
                  <p className="text-foreground/70 text-sm">{v.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[820px] mx-auto text-center border border-ink/40 px-6 md:px-12 py-12">
          <span className="font-mono text-[0.7rem] uppercase tracking-widest text-ink font-semibold">Connect</span>
          <div className="mx-auto mt-4 h-px w-16 bg-butter" />
          <h2 className="mt-5 font-display text-2xl md:text-4xl leading-[1.02]">
            Come walk a plot<br />
            <span className="">with us.</span>
          </h2>
          <p className="mt-5 text-sm text-foreground/85 max-w-md mx-auto">
            The best way to understand a Dhruvija project is to stand in it, feel the breeze, the layout, the quiet logic of the planning.
          </p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 border border-ink/40 px-5 py-2.5 text-sm text-foreground hover:bg-butter hover:border-butter transition-colors">
            Plan a visit →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
