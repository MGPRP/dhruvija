import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/thankyou")({
  head: () => ({
    meta: [
      { title: "Thank You | Dhruvija Properties, Bengaluru" },
      { name: "description", content: "Thank you for reaching out to Dhruvija Properties. We'll be in touch within a working day." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://dhruvija.com/thankyou" }],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <main className="overflow-x-clip">
      <Nav />

      <section className="px-6 md:px-12 pt-36 pb-20 md:pt-44 md:pb-28 wave-bg min-h-[80svh] flex items-center">
        <div className="max-w-[760px] mx-auto text-center">
          
          <Reveal as="h1" delay={120} className="mt-5 font-display text-[clamp(2rem,5vw,4.25rem)] leading-[0.98]">
            Thank you.<br />
            <span className="text-foreground/60">We'll be in touch. ✿</span>
          </Reveal>
         
          <Reveal delay={360} className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm hover:bg-foreground/85 transition-all hover:scale-[1.02]"
            >
              Back to home
            </Link>
            <Link
              to="/projects"
              className="rounded-full border border-border bg-background px-5 py-2.5 text-sm hover:bg-card transition-all hover:scale-[1.02]"
            >
              See our projects
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
