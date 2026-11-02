import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import aboutHero from "@/assets/about-hero.jpg?format=webp&quality=80";
import chapterName from "@/assets/about-chapter-name.jpg?format=webp&quality=80";
import ethosPlot from "@/assets/plot-image.jpg?w=1600&format=webp&quality=80";
import { Reveal } from "@/components/site/Reveal";
import founderAsset from "@/assets/narasimhamurthy.jpg";
import ceoAsset from "@/assets/purushothama.jpg";
const founderImg = founderAsset;
const ceoImg = ceoAsset;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Ethos | About Dhruvija Properties, Bengaluru" },
      { name: "description", content: "Building Bengaluru with intent. The vision, philosophy and people behind Dhruvija Properties, a steadfast name in eco-conscious real estate." },
      { property: "og:title", content: "Pole Star | About Dhruvija Properties" },
      { property: "og:description", content: "Vision, philosophy and a long record of steady building." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://dhruvijapropertieswebsite.lovable.app/about" },
    ],
    links: [
      { rel: "canonical", href: "https://dhruvijapropertieswebsite.lovable.app/about" },
      { rel: "preload", as: "image", href: aboutHero, fetchPriority: "high" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="overflow-x-clip">
      <Nav />

      {/* HERO, planting a sapling */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={aboutHero}
          alt="Hands cradling a young sapling in dark soil against a golden hour landscape"
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
            Pole Star · about us
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-5 font-display text-[clamp(2rem,4.6vw,3.9rem)] leading-[0.98] max-w-[18ch]">
            A legacy of trust,<br />
            <span className="text-butter">building for tomorrow.</span>
          </Reveal>
          <Reveal as="p" delay={240} className="mt-6 text-base text-background/90 max-w-2xl">
            From plotted communities to premium residences, every Dhruvija project
            reflects a commitment to integrity, quiet innovation and eco-conscious
            living. This is the story of how, and why.
          </Reveal>
        </div>
      </section>

      {/* origin chapter */}
      <section className="px-6 md:px-12 py-14 md:py-20 wave-bg">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <span className="tag-chip font-bold"><span className="size-1.5 rounded-full bg-clay" /> Chapter 01 · the name</span>
            <h2 className="mt-4 font-display text-2xl md:text-3xl leading-[1.05]">
              Named for the <span className="">star that never moves.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base text-foreground/75">
              <p>
                Dhruvija is more than a name, it is a promise. It is drawn from
                <em> Dhruva</em>, the eternal pole star that has guided sailors,
                farmers and travellers for centuries, and it carries the same
                spirit of constancy and direction. Just as the pole star stays
                fixed in a moving sky, offering assurance and orientation to
                anyone who looks up, Dhruvija stands as a point of stability in
                an ever-changing world.
              </p>
              <p>
                That constancy shapes how we work. It shines through as a symbol
                of guidance, illuminating a path toward a greener tomorrow where
                modern aspirations are aligned with timeless values. Land is
                treated with care, plans are drawn with patience, and every
                commitment we make is one we intend to keep long after the last
                brick is laid.
              </p>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="bg-background border border-border rounded-none p-2.5">
              <div className="rounded-[1.15rem] overflow-hidden aspect-[4/3]">
                <img src={chapterName} alt="Silhouette of a banyan tree beneath a bright pole star at dusk" loading="lazy" width={1280} height={960} className="size-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mission + vision chapter */}
      <section className="px-6 md:px-12 py-14 md:py-20">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <span className="tag-chip font-bold"><span className="size-1.5 rounded-full bg-butter" /> Chapter 02 · ethos & vision</span>
            <h2 className="mt-4 font-display text-2xl md:text-3xl leading-tight">
              What we <span className="">stand for,</span> and where we are <span className="">headed.</span>
            </h2>
            <p className="mt-5 text-sm text-foreground/70">
              Two compass points that guide every Plot, Plan and Promise we make.
            </p>
            <div className="mt-8 bg-background border border-border rounded-none p-2.5">
              <div className="rounded-[1.15rem] overflow-hidden aspect-[4/3]">
                <img src={ethosPlot} alt="Aerial view of open farm plots under a clear sky" loading="lazy" width={1600} height={900} className="size-full object-cover" />
              </div>
            </div>
          </div>
          <div className="md:col-span-7 grid gap-5">
            <Reveal className="rounded-none bg-background border border-border p-2.5">
              <div className="rounded-[1.15rem] bg-background p-6 md:p-7">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-foreground/60">Our ethos</span>
                <p className="mt-3 font-display text-xl md:text-xl leading-snug">
                  We build more than structures, we build <span className="">trust, wealth</span> and enduring <span className="">legacy.</span>
                </p>
                <p className="mt-4 text-sm text-foreground/70">
                  At Dhruvija, real estate is fundamentally about trust, wealth and legacy. We earn trust by keeping every promise and staying transparent through every stage of a project. We protect and grow wealth by choosing locations, materials and designs that hold lasting value. And we build legacy by creating places that families can pass down with pride, environments where generations gather, grow and belong. Responsibility, integrity and care guide every decision we make.
                </p>
              </div>
            </Reveal>
            <Reveal delay={140} className="rounded-none bg-background border border-border p-2.5">
              <div className="rounded-[1.15rem] bg-background p-6 md:p-7">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-foreground/60">Our vision & philosophy</span>
                <p className="mt-3 font-display text-xl md:text-xl leading-snug">
                  Guided by <span className="">Trust | Wealth | Legacy</span>, we shape thoughtful communities where nature, design and everyday life feel deeply connected.
                </p>
                <p className="mt-4 text-sm text-foreground/70">
                  Trust is the foundation of every relationship we build. Wealth is the lasting value we create through careful planning, responsible building and well-chosen locations. Legacy is the future we leave behind, communities that remain meaningful for generations. Our philosophy is to plan with restraint, build with responsibility and choose every detail for long-term value, so each Dhruvija address feels calm today and enduring for those who follow.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* leadership */}
      <section className="px-6 md:px-12 py-14 md:py-20 wave-bg">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <span className="tag-chip font-bold"><span className="size-1.5 rounded-full bg-clay" /> Chapter 03 · the people</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-2xl md:text-4xl leading-[1.02] max-w-3xl">
              The <span className="">Heads & Hands</span> Behind the Work.
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-12 gap-10 items-start">
            <Reveal className="md:col-span-5">
              <div className="rounded-none bg-background border border-border p-2.5">
                <div className="rounded-[1.15rem] overflow-hidden aspect-[4/5]">
                  <img src={founderImg} alt="Portrait of founder Mr. M. R. Narasimhamurthy" loading="lazy" width={1024} height={1024} className="size-full object-cover" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={140} className="md:col-span-7">
              <span className="font-bold font-mono text-[0.65rem] uppercase tracking-[0.22em] text-foreground/60">Founder</span>
              <h3 className="mt-2 font-display text-xl md:text-2xl">Mr. M. R. Narasimhamurthy</h3>
              <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  Mr. M. R. Narasimhamurthy, a Chartered Accountant by profession, brings deep expertise in legal, finance and accounting. Over the years, he has served as a trusted advisor to several leading corporate real estate companies in Bengaluru, shaping strategies and guiding landmark projects.
                </p>
                <p>
                  In 2004, he played a pivotal role in establishing Maangalya's reputation with a landmark masterpiece across premium residential, commercial and hospitality developments. He owns and led the successful development of Holiday Inn Express at Whitefield with 228 keys.
                </p>
                <p>
                  His professional journey reflects a truly global footprint at US and India. In 2016, he moved to the US, further broadening his international perspective, before relocating back to Bangalore in 2023. His global exposure in the real estate industry, combined with his advisory role, has enabled him to successfully execute diverse real estate projects.
                </p>
                <p>
                  Backed by strong financial acumen and legal expertise, Mr. Narasimhamurthy has consistently demonstrated the ability to transform challenges into opportunities, leaving an indelible mark on the real estate landscape.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid md:grid-cols-12 gap-10 items-start">
            <Reveal className="md:col-span-7 md:order-1 order-2">
              <span className="font-bold font-mono text-[0.65rem] uppercase tracking-[0.22em] text-foreground/60">Chief Executive Officer</span>
              <h3 className="mt-2 font-display text-xl md:text-2xl">Mr. K. Purushothama Adiga</h3>
              <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  Mr. Purushothama Adiga is a seasoned business leader and accomplished C-suite executive with over 25 years of diversified leadership experience across construction, real estate, hospitality, software and education. A Chartered Accountant, a Company Secretary, and an alumnus of IIM Bangalore and IIM Lucknow, he has held key leadership positions across prominent organisations.
                </p>
                <p>
                  His hallmark is seamlessly managing complex projects, balancing timelines, quality, and on-site precision while driving organisational leadership, corporate finance, and strategic expansion. Having collaborated with industry pioneers, he possesses a deep, intuitive understanding of how great projects evolve from blueprint to reality.
                </p>
                <p>
                  Renowned for his expertise in business turnaround, strategic planning and corporate governance, Mr. Adiga has consistently driven sustainable growth, improved profitability, and strengthened organisational resilience across diverse business environments. His leadership philosophy is rooted in creating long-term value through innovation, operational discipline, and unwavering commitment to excellence.
                </p>
              </div>
            </Reveal>
            <Reveal delay={140} className="md:col-span-5 md:order-2 order-1">
              <div className="rounded-none bg-background border border-border p-2.5">
                <div className="rounded-[1.15rem] overflow-hidden aspect-[4/5]">
                  <img src={ceoImg} alt="Portrait of CEO Mr. K. Purushothama Adiga" loading="lazy" width={1024} height={1024} className="size-full object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* story chapter */}
      <section className="px-6 md:px-12 py-14 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <span className="tag-chip font-bold"><span className="size-1.5 rounded-full bg-clay" /> Chapter 04 · our story after the people</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-2xl md:text-4xl leading-[1.02] max-w-3xl">
              Our Story <span className="">After the People.</span>
            </h2>
          </Reveal>

          <Reveal delay={160} className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-foreground/80">
            <p>
              Dhruvija's legacy of leadership traces back to 2004, when our visionary founder, Mr. M. R. Narasimhamurthy, redefined Bangalore's skyline with a landmark glass and granite commercial masterpiece, today home to the Jain Group of Institutions. His stewardship built Maangalya's reputation for premium developments and set the foundation for a tradition of excellence that continues to guide every decision we make.
            </p>
            <p>
              Two decades later, his enduring passion for real estate and land development gave rise to Dhruvija in 2024, a brand devoted to creating architectural legacies that embody refinement, inspire belonging and stand resilient through time.
            </p>
            <p>
              Rooted in the steadfastness of Dhruva, the pole star, Dhruvija reflects resilience, permanence and a vision that does not waver. Every project is conceived as a guiding light, shaping spaces that nurture both people and nature while standing as timeless symbols of trust.
            </p>
            <p>
              From luxury farm lands designed for the urban soul to lush community spaces that breathe life, Dhruvija weaves sustainability into the very fabric of modern living. We offer not just homes, but harmony with nature.
            </p>
            <p>
              Each development is a tribute to the natural world, blending refined luxury with eco conscious design. Dhruvija remains committed to shaping environments where modern aspirations meet timeless balance, architectural legacies that endure, inspire and belong.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
