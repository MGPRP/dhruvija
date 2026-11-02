import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import projectsHero from "@/assets/vatika-new.jpg?format=webp&quality=80";
import theResidencesAsset from "@/assets/the-residences.jpg";
import grandeAsset from "@/assets/grande.jpg";
import prosperAsset from "@/assets/prosper.jpg";
import ashirwadAsset from "@/assets/ashirwad.jpg";
import vatikaAsset from "@/assets/vatika-new.jpg";
import gopuraAsset from "@/assets/dhruvija-gopura.jpg";
import holidayInnAsset from "@/assets/holiday-inn-express.jpg";


const theResidences = theResidencesAsset;
const grande = grandeAsset;
const prosper = prosperAsset;
const ashirwad = ashirwadAsset;
const vatika = vatikaAsset;
const gopura = gopuraAsset;
const holidayInn = holidayInnAsset;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Portfolio | Projects by Dhruvija Properties" },
      { name: "description", content: "Ongoing, upcoming and accomplished real estate projects by Dhruvija Properties in Bengaluru, farm plots, residences and plotted communities." },
      { property: "og:title", content: "In Bloom | Projects by Dhruvija Properties" },
      { property: "og:description", content: "Farm plots, residences and plotted communities across Bengaluru." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: vatika },
      { name: "twitter:image", content: vatika },
      { property: "og:url", content: "https://dhruvijapropertieswebsite.lovable.app/projects" },
    ],
    links: [
      { rel: "canonical", href: "https://dhruvijapropertieswebsite.lovable.app/projects" },
      { rel: "preload", as: "image", href: projectsHero, fetchPriority: "high" },
    ],
  }),
  component: Projects,
});

const ongoing = [
  {
    name: "Dhrumini Vatika",
    tag: "Luxury Farm Plots",
    blurb: "Envisioned as a green sanctuary for those seeking peace, balance and a deeper connection with nature. Serene farm plots that promote sustainable living and mindful engagement with the earth.",
    img: vatika,
    href: "https://dhruminivatika.com/",
  },
  {
    name: "Dhruvija Gopura",
    tag: "Residential · Bengaluru",
    blurb: "Bengaluru's newest architectural icon, a sanctuary sculpted in glass, steel and sky, floating proudly above the city skyline.",
    img: gopura,
    rera: "PRM/KA/RERA/1251/309/PR/300626/008778",
    href: "https://dhruvijagopura.com/",
  },
  {
    name: "Holiday Inn Express",
    tag: "Hospitality · Bengaluru",
    blurb: "A smart-stay hotel in Bengaluru’s technology hub, offering 223 thoughtfully crafted rooms where comfort meets effortless efficiency, right beside ITPL.",
    img: holidayInn,
    href: "https://www.ihg.com/holidayinnexpress/hotels/us/en/whitefield/blrep/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-IN-_-BLREP",
  },
];

const upcomingByCategory: Array<{
  category: "Commercial" | "Residential" | "Plotted";
  tint: string;
  dot: string;
  totalLabel: string;
  items: { location: string; scale: string; note?: string }[];
}> = [
  {
    category: "Commercial",
    tint: "bg-background border border-border",
    dot: "bg-clay",
    totalLabel: "25,000 sq. ft.",
    items: [
      {
        location: "Whitefield, Bengaluru",
        scale: "25,000 sq. ft.",
        note: "Prime commercial building next to Hotel Holiday Inn Express.",
      },
    ],
  },
  {
    category: "Residential",
    tint: "bg-background border border-border",
    dot: "bg-foreground",
    totalLabel: "~1.85 million sq. ft.",
    items: [
      {
        location: "Navarathna Agrahara Layout, North Bengaluru",
        scale: "150,000 sq. ft.",
        note: "Luxury apartment enclave, opposite Nikoo Homes, next to Prestige Tech Cloud.",
      },
      {
        location: "Navarathna Agrahara Layout, North Bengaluru",
        scale: "700,000 sq. ft.",
        note: "Premium apartment development on the same address.",
      },
      {
        location: "Yadavanhalli, Hosur Road, Bengaluru",
        scale: "1,000,000 sq. ft.",
        note: "Large-format residential development.",
      },
    ],
  },
  {
    category: "Plotted",
    tint: "bg-background border border-border",
    dot: "bg-clay",
    totalLabel: "47.5 acres",
    items: [
      {
        location: "Maligondanahalli & Ramohalli, off Mysore Road",
        scale: "33 acres",
        note: "Premium plotted gated community.",
      },
      {
        location: "Kolur, off Mysore Road",
        scale: "14.5 acres",
        note: "Premium plotted gated community.",
      },
    ],
  },
];

function Projects() {
  return (
    <main className="overflow-x-clip">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={projectsHero}
          alt="Entrance gateway of Dhrumini Vatika luxury farm plots"
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
          decoding="async"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-shade/45 via-shade/10 to-shade/70" />
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 md:px-14 pt-28 pb-10 text-background max-w-[1400px] mx-auto">
          <Reveal as="h1" delay={120} className="mt-5 font-display text-[clamp(2rem,5vw,4.25rem)] leading-[0.98]">
            Addresses shaped<br />
            <span className="text-butter">with intent.</span>
          </Reveal>
          <Reveal as="p" delay={240} className="mt-6 text-base text-background/90 max-w-2xl">
            Farm plots, plotted layouts, apartments and workplaces, each one
            drawn to sit lightly on the land it grew from.
          </Reveal>
        </div>
      </section>

      {/* intro heading */}
      <section className="pt-14 pb-2 px-6 md:px-12 wave-bg">
        <div className="max-w-[1100px] mx-auto">
          <span className="tag-chip"><span className="size-1.5 rounded-full bg-butter" /> Ongoing · on the ground now</span>
          <h2 className="mt-4 font-display text-2xl md:text-4xl leading-[1.02]">
            Being tended <span className="">this season.</span>
          </h2>
        </div>
      </section>

      <section className="px-6 md:px-12 py-14 md:py-20 wave-bg">
        <div className="max-w-[1100px] mx-auto space-y-5">
          {ongoing.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} as="article" className="grid md:grid-cols-12 gap-4">
              <div className="md:col-span-7 hover-zoom">
                <div className={`${i % 2 ? "bg-background border border-border" : "bg-background border border-border"} rounded-none p-2.5`}>
                  <div className={`relative rounded-[1.15rem] overflow-hidden bg-background flex items-center justify-center ${p.name === "Holiday Inn Express" ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
                    {p.img ? (
                      <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="size-full object-cover" />
                    ) : (
                      <span className="font-display text-lg md:text-xl text-clay/70 ">image to be updated</span>
                    )}
                    {p.rera ? (
                      <span className="absolute top-2 right-2 md:top-3 md:right-3 max-w-[calc(100%-1rem)] bg-background/90 backdrop-blur-sm px-2 py-1 font-mono text-[0.55rem] md:text-[0.65rem] uppercase tracking-wider text-foreground">
                        RERA: {p.rera}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 rounded-none bg-card border border-border p-6 flex flex-col justify-between">
                <div>
                  <span className="tag-chip self-start">{p.tag}</span>
                  <h2 className="mt-2 font-display text-xl md:text-2xl mb-3">{p.name}</h2>
                  <p className="text-foreground/70 text-sm">{p.blurb}</p>
                  {p.href && (
                    <a href={p.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm underline decoration-clay decoration-[2px] underline-offset-4">
                      Project details →
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ UPCOMING, featured, structured ============ */}
      <section className="relative px-6 md:px-12 py-20 md:py-28 mt-8 mb-16 md:mb-24">
        <div className="absolute inset-x-4 md:inset-x-10 top-0 bottom-0 rounded-[2.5rem] bg-shade -z-10" />
        <div className="max-w-[1200px] mx-auto text-background">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 backdrop-blur px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em]">
                <span className="size-1.5 rounded-full bg-butter" />
                On the Horizon · Flagship Blueprint
              </span>
              <h2 className="mt-5 font-display text-3xl md:text-5xl leading-[0.98]">
                What we're building <span className="text-butter">next.</span>
              </h2>
              <p className="mt-5 text-background/75 text-base max-w-xl">
                A ~2 million sq. ft. and 47.5-acre development taking shape across
                Bengaluru, grouped by how each project lives on the land.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-[1.15rem] bg-background/10 border border-background/20 backdrop-blur px-5 py-4 text-center">
                <div className="font-display text-2xl md:text-3xl text-butter leading-none">6</div>
                <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-widest text-background/60">Developments</div>
              </div>
              <div className="rounded-[1.15rem] bg-background/10 border border-background/20 backdrop-blur px-5 py-4 text-center">
                <div className="font-display text-2xl md:text-3xl text-butter leading-none">3</div>
                <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-widest text-background/60">Categories</div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {upcomingByCategory.map((group, gi) => (
              <Reveal
                key={group.category}
                delay={gi * 120}
                className={`${group.tint} rounded-none p-2.5 text-foreground`}
              >
                <div className="h-full rounded-none bg-card border border-border p-6 md:p-7 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground/50 font-semibold">
                        0{gi + 1} · Category
                      </span>
                      <h3 className="mt-2 font-display text-xl md:text-2xl leading-tight">
                        {group.category}
                      </h3>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-display text-lg md:text-xl leading-tight font-semibold">{group.totalLabel}</div>
                      <div className="font-mono text-[0.6rem] uppercase tracking-widest text-foreground/50 font-semibold">Total</div>
                    </div>
                  </div>

                  <div className="mt-6 h-px bg-border" />

                  <ul className="mt-5 space-y-5 flex-1">
                    {group.items.map((it, i) => (
                      <li key={it.location + i} className="relative pl-5">
                        <span className={`${group.dot} absolute left-0 top-2 size-2 rounded-full`} />
                        <div className="font-display text-base md:text-lg leading-snug">
                          {it.scale}
                        </div>
                        <div className="text-sm text-foreground/70 mt-0.5">
                          {it.location}
                        </div>
                        {it.note && (
                          <div className="text-xs text-foreground/55 mt-1.5 leading-relaxed">
                            {it.note}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-mono text-[0.6rem] uppercase tracking-widest text-foreground/50 font-semibold">
                      {group.items.length} {group.items.length === 1 ? "project" : "projects"}
                    </span>
                    <span className="font-mono text-[0.6rem] uppercase tracking-widest text-foreground/40 font-semibold">
                      In planning
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-butter text-foreground px-5 py-2.5 text-sm hover:scale-[1.03] transition-transform"
            >
              Enquire about an upcoming project →
            </Link>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-background/50">
              Pre-launch interest welcomed
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pt-4 pb-16">
        <div className="max-w-[1100px] mx-auto">
          <span className="tag-chip"><span className="size-1.5 rounded-full bg-butter" /> Already Standing · accomplished</span>
          <h2 className="mt-4 font-display text-2xl md:text-4xl">
            Delivered, <span className="">standing strong.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-foreground/70">
            A track record of delivered residences and workplaces across Bengaluru,             each one built with the same patient care that defines Dhruvija today.
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tint: "bg-background border border-border", label: "Residential", title: "The Residences", copy: "Premium apartments on Benson Cross Road, Bengaluru", img: theResidences },
              { tint: "bg-background border border-border", label: "Commercial", title: "Grande", copy: "Commercial development off J. C. Road, Bengaluru", img: grande },
              { tint: "bg-background border border-border", label: "Residential", title: "Prosper", copy: "Premium apartments at Anjanapura, Bengaluru", img: prosper },
              { tint: "bg-background border border-border", label: "Residential", title: "Ashirwad", copy: "Premium apartments on Bannerghatta Road, Bengaluru", img: ashirwad },
            ].map((c) => (
              <Reveal key={c.title} className={`${c.tint} rounded-none p-2.5 hover-zoom transition-transform hover:-translate-y-1.5`}>
                <div className="relative rounded-[1.15rem] overflow-hidden aspect-[4/5]">
                  <img src={c.img} alt={c.title} loading="lazy" width={1200} height={1400} className="size-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-shade/85 via-shade/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-background">
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-background/70">{c.label}</span>
                    <div className="mt-1.5 font-display text-xl md:text-xl leading-tight">{c.title}</div>
                    <p className="mt-1.5 text-xs text-background/80 leading-relaxed">{c.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}