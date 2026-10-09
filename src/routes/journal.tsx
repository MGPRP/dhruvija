import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { journalPosts } from "@/lib/journal";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "The Grove Journal | Dhruvija Properties" },
      {
        name: "description",
        content:
          "Field notes, buyer guides and quiet observations on real estate, land and living well in Bengaluru, from the team at Dhruvija Properties.",
      },
      { property: "og:title", content: "The Grove Journal | Dhruvija Properties" },
      {
        property: "og:description",
        content:
          "Field notes, buyer guides and quiet observations on real estate, land and living well in Bengaluru.",
      },
      { property: "og:url", content: "https://dhruvijapropertieswebsite.lovable.app/journal" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://dhruvijapropertieswebsite.lovable.app/journal" },
    ],
  }),
  component: JournalIndex,
});

const tintClass: Record<string, string> = {
  sage: "bg-background border border-border",
  peach: "bg-background border border-border",
  sky: "bg-background border border-border",
  butter: "bg-butter",
  lilac: "bg-background border border-border",
};

function JournalIndex() {
  const [featured, ...rest] = journalPosts;

  return (
    <main className="overflow-x-clip">
      <Nav />

      {/* Hero */}
      <section className="px-6 md:px-12 pt-32 md:pt-40 pb-14 md:pb-20 wave-bg">
        <div className="max-w-[1100px] mx-auto">
          <Reveal as="span" className="tag-chip">
            <span className="size-1.5 rounded-full bg-clay" />
            The Grove Journal · field notes
          </Reveal>
          <Reveal as="h1" delay={100} className="mt-5 font-display text-[clamp(2rem,4.6vw,3.9rem)] leading-[0.98] max-w-[16ch]">
            Slow reading,<br />
            <span className="">from the grove.</span>
          </Reveal>
          <Reveal delay={220} className="mt-6 max-w-2xl text-base md:text-lg text-foreground/75 leading-relaxed">
            Considered writing from our planners, architects and buyer's desk,             on the craft of land, the small print of RERA, and what it means to
            live well in Bengaluru's second half of the century.
          </Reveal>
        </div>
      </section>

      {/* Featured post */}
      <section className="px-6 md:px-12 pb-10">
        <div className="max-w-[1100px] mx-auto">
          <Reveal as="article" className="grid md:grid-cols-12 gap-4 items-stretch">
            <div className={`md:col-span-7 ${tintClass[featured.tint]} rounded-none p-2.5 hover-zoom`}>
              <div className="relative rounded-none overflow-hidden aspect-[16/10]">
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="size-full object-cover"
                />
                <span className="absolute top-3 left-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] bg-background/85 backdrop-blur-md px-2.5 py-1 rounded-full">
featured
                </span>
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col justify-between rounded-none bg-card border border-border p-6 md:p-8">
              <div>
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-foreground/50 mb-2">
                  {featured.dateLabel} · {featured.readMinutes} min read
                </div>
                <h2 className="font-display text-xl md:text-3xl leading-[1.05] mb-3">
                  {featured.title}
                </h2>
                <p className="text-foreground/75 text-base leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>
              <Link
                to="/journal/$slug"
                params={{ slug: featured.slug }}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline decoration-clay decoration-[2px] underline-offset-4 self-start"
              >
                Read the piece →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid of remaining posts */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <span className="tag-chip"><span className="size-1.5 rounded-full bg-butter" /> More entries</span>
              <h2 className="mt-4 font-display text-xl md:text-3xl leading-[1.05] max-w-2xl">
                A shelf of <span className="">short reads.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm text-foreground/70">
              New writing lands every few weeks. Nothing algorithmic, just what
              we thought was worth setting down.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {rest.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={i * 90}
                as="article"
                className={`${tintClass[p.tint]} rounded-none p-2.5 pb-5 lift-card hover-zoom flex flex-col`}
              >
                <div className="relative rounded-none overflow-hidden aspect-[16/10]">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                  />
                </div>
                <div className="px-4 pt-5 flex-1 flex flex-col">
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-foreground/60 mb-2">
                    {p.dateLabel} · {p.readMinutes} min read
                  </div>
                  <h3 className="font-display text-xl leading-[1.1] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-foreground/75 text-sm">{p.excerpt}</p>
                  <Link
                    to="/journal/$slug"
                    params={{ slug: p.slug }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline decoration-clay decoration-[2px] underline-offset-4 self-start"
                  >
                    Read →
                  </Link>
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