import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { getPost, journalPosts } from "@/lib/journal";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Not found | The Grove Journal" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const url = `https://dhruvijapropertieswebsite.lovable.app/journal/${params.slug}`;
    return {
      meta: [
        { title: `${post.title} | The Grove Journal` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: JournalPost,
  notFoundComponent: () => (
    <main className="min-h-screen wave-bg">
      <Nav />
      <section className="max-w-[900px] mx-auto px-6 pt-40 pb-24 text-center">
        <span className="tag-chip">missing entry</span>
        <h1 className="mt-4 font-display text-3xl md:text-5xl">This piece isn't here.</h1>
        <p className="mt-4 text-foreground/70">The essay you were looking for either moved or was never written. Wander back to the journal shelf.</p>
        <Link to="/journal" className="mt-8 inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm">
          Back to the journal
        </Link>
      </section>
      <Footer />
    </main>
  ),
});

const tintClass: Record<string, string> = {
  sage: "bg-background border border-border",
  peach: "bg-background border border-border",
  sky: "bg-background border border-border",
  butter: "bg-butter",
  lilac: "bg-background border border-border",
};

function JournalPost() {
  const { post } = Route.useLoaderData();
  const others = journalPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="overflow-x-clip">
      <Nav />

      {/* Header */}
      <section className={`${tintClass[post.tint]} px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden`}>
        <div className="absolute -top-24 -left-24 size-80 rounded-full bg-background/25 blob" aria-hidden />
        <div className="absolute -bottom-32 -right-24 size-96 rounded-full bg-background/20 morph" aria-hidden />
        <div className="relative max-w-[880px] mx-auto">
          <Link to="/journal" className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground/60 hover:text-foreground">
            ← The Grove Journal
          </Link>
          <div className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground/60">
            {post.dateLabel} · {post.readMinutes} min read
          </div>
          <Reveal as="h1" delay={80} className="mt-6 font-display text-[clamp(1.9rem,4.2vw,3.5rem)] leading-[1.02] max-w-[20ch]">
            {post.title}
          </Reveal>
          <Reveal delay={200} className="mt-6 text-lg md:text-xl text-foreground/75 max-w-2xl leading-relaxed">
            {post.excerpt}
          </Reveal>
        </div>
      </section>

      {/* Cover image */}
      <section className="px-6 md:px-12 -mt-8 md:-mt-14">
        <div className="max-w-[960px] mx-auto rounded-none overflow-hidden aspect-[16/9] shadow-[0_30px_60px_-30px_rgba(40,30,20,0.35)]">
          <img
            src={post.image}
            alt={post.imageAlt}
            loading="eager"
            fetchPriority="high"
            width={1024}
            height={1024}
            className="size-full object-cover"
          />
        </div>
      </section>

      {/* Body */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <article className="max-w-[720px] mx-auto space-y-6 text-base md:text-lg text-foreground/80 leading-[1.75]">
          {post.body.map((para: string, i: number) => (
            <Reveal key={i} delay={i * 60} as="p">
              {para}
            </Reveal>
          ))}
        </article>
      </section>

      {/* Related */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-background">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
            <div>
              <span className="tag-chip"><span className="size-1.5 rounded-full bg-butter" /> Keep reading</span>
              <h2 className="mt-3 font-display text-xl md:text-3xl leading-[1.05]">Two more from the shelf.</h2>
            </div>
            <Link to="/journal" className="rounded-full border border-foreground/20 px-4 py-2 text-sm hover:bg-foreground hover:text-background transition-colors">
              All entries →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {others.map((p) => (
              <article key={p.slug} className={`${tintClass[p.tint]} rounded-none p-2.5 pb-5 lift-card hover-zoom flex flex-col`}>
                <div className="relative rounded-none overflow-hidden aspect-[16/10]">
                  <img src={p.image} alt={p.imageAlt} loading="lazy" width={1024} height={1024} className="size-full object-cover" />
                </div>
                <div className="px-4 pt-5">
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-foreground/60 mb-2">
                    {p.dateLabel} · {p.readMinutes} min read
                  </div>
                  <h3 className="font-display text-xl md:text-xl leading-[1.1] mb-2">{p.title}</h3>
                  <p className="text-foreground/70 text-sm">{p.excerpt}</p>
                  <Link to="/journal/$slug" params={{ slug: p.slug }} className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline decoration-clay decoration-[2px] underline-offset-4 self-start">
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}