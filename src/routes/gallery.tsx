import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Dhruvija Properties, Bengaluru" },
      { name: "description", content: "Browse photographs of Dhruvija Properties across Bengaluru: luxury farm plots, plotted gated communities, residences and commercial addresses." },
      { property: "og:title", content: "Gallery | Dhruvija Properties" },
      { property: "og:description", content: "Photos and videos from Dhruvija Properties' projects across Bengaluru." },
      { property: "og:url", content: "https://dhruvijapropertieswebsite.lovable.app/gallery" },
    ],
    links: [
      { rel: "canonical", href: "https://dhruvijapropertieswebsite.lovable.app/gallery" },
    ],
  }),
  component: Gallery,
});

// Every .webp image under src/assets/gallery/<folder>/ (works with or without an "images" subfolder)
const allImages = import.meta.glob(
  "/src/assets/gallery/**/*.{webp,WEBP}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

// `folder` must match the folder name inside src/assets/gallery exactly.
// `order` lists file names in display order; files not listed follow, sorted by name.
const albums: { folder: string; title: string; caption: string; order?: string[] }[] = [
  {
    folder: "Dhrumini Vatika - Launch",
    title: "Dhrumini Vatika",
    caption: "Launch",
    order: [
      // launch event
      "0E8A8825", "I18A5193", "I18A5325", "I18A5356", "I18A5432", "I18A5449",
      // elevations
      "I18A4756", "IMG_8334", "IMG_8340", "IMG_8342",
      // bedrooms
      "IMG_8346", "IMG_8350",
    ],
  },
  {
    folder: "Dhruvija Gopura - Bhoomi Pooja",
    title: "Dhruvija Gopura",
    caption: "Bhoomi Pooja",
    order: [
      // pooja
      "0E8A1792", "0E8A1799", "DJI_20260830123004_0079_D", "0E8A2010",
      // model elevation
      "0E8A1665", "0E8A2220", "0E8A2290", "I18A6186", "I18A6356",
      // discussions & brochures
      "0E8A1628", "0E8A1943", "0E8A2222", "0E8A2422", "0E8A2426", "I18A6261", "I18A6339", "I18A6347", "I18A6388", "I18A6935",
      // signing & bouquet
      "I18A7011", "I18A7016",
    ],
  },
  { folder: "Dhruvija Gopura - Channel Partner Meet", title: "Dhruvija Gopura", caption: "Channel Partner Meet" },
  {
    folder: "Dhruvija Gopura - Model Home",
    title: "Dhruvija Gopura",
    caption: "Model Home",
    order: [
      // living & dining
       "I18A6082", "I18A6086", "I18A4204", "I18A4264", "I18A6090", "I18A6069","I18A4198", "I18A6058",
      // kitchen
      "I18A4249", "I18A4253", "I18A6072",
      // bedrooms
      "I18A4216", "I18A4218", "I18A6061", "I18A6046", "I18A6065", "I18A4285", "I18A6103", "I18A6092", "I18A6095", "I18A6105",
      // bathrooms
      "I18A4229", "I18A4311", "I18A6050",
    ],
  },
];

function imagesFor(folder: string, order: string[] = []) {
  const rank = (path: string) => {
    const i = order.indexOf(path.split("/").pop()!.replace(/\.webp$/i, ""));
    return i === -1 ? order.length : i;
  };
  return Object.entries(allImages)
    .filter(([path]) => path.startsWith(`/src/assets/gallery/${folder}/`))
    .sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b, undefined, { numeric: true }))
    .map(([, url]) => url);
}

function Gallery() {
  const albumData = useMemo(
    () => albums.map((a) => ({ ...a, images: imagesFor(a.folder, a.order) })),
    [],
  );

  const [activeAlbum, setActiveAlbum] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const photosRef = useRef<HTMLDivElement>(null);

  const active = activeAlbum !== null ? albumData[activeAlbum] : null;

  const openAlbum = (i: number) => {
    setActiveAlbum(i);
    setTimeout(
      () => photosRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      50,
    );
  };

  // Lightbox keyboard controls
  useEffect(() => {
    if (lightbox === null || !active) return;
    const total = active.images.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => (p === null ? p : (p + 1) % total));
      if (e.key === "ArrowLeft") setLightbox((p) => (p === null ? p : (p - 1 + total) % total));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, active]);

  return (
    <main className="overflow-x-clip">
      <Nav />

      <section className="pt-36 md:pt-40 pb-12 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <Reveal as="span" className="tag-chip">
            <span className="size-1.5 rounded-full bg-clay" />
            Gallery · in pictures
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-5 font-display text-[clamp(2rem,4.6vw,3.9rem)] leading-[0.98]">
            A walk-through, <span className="">frame by frame.</span>
          </Reveal>
          <Reveal as="p" delay={240} className="mt-6 text-base text-foreground/70 max-w-2xl">
            Photographs from projects across Bengaluru. More visuals
            are being added as our newer developments come to life.
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-[1200px] mx-auto grid gap-5 md:grid-cols-2">
          {/* Album cards */}
          {albumData.map((al, i) => (
            <Reveal
              key={al.folder}
              delay={i * 120}
              className={`bg-background border border-border rounded-none p-2.5 hover-zoom transition-transform hover:-translate-y-1.5 cursor-pointer ${
                activeAlbum === i ? "ring-1 ring-clay" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => openAlbum(i)}
                className="block w-full text-left"
                aria-label={`Open album ${al.title} ${al.caption}`}
              >
                <div className="relative rounded-none overflow-hidden aspect-[4/3]">
                  {al.images[0] && (
                    <img
                      src={al.images[0]}
                      alt={`${al.title} ${al.caption}`}
                      loading="lazy"
                      width={1600}
                      height={1200}
                      className="size-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-shade/80 via-shade/10 to-transparent pointer-events-none" />
                  <div className="absolute top-4 right-4 tag-chip">{al.images.length} photos</div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-background">
                    <div className="font-display text-xl md:text-2xl">{al.title}</div>
                    <p className="mt-1 text-sm text-background/85">{al.caption}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Selected album photos */}
        <div ref={photosRef} className="max-w-[1200px] mx-auto scroll-mt-28">
          {active && (
            <div className="mt-16">
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <span className="tag-chip">
                    <span className="size-1.5 rounded-full bg-clay" />
                    Album · {active.images.length} photos
                  </span>
                  <h2 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.6rem)] leading-[1]">
                    {active.title}
                  </h2>
                  <p className="mt-2 text-sm text-foreground/70">{active.caption}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveAlbum(null)}
                  className="text-xs font-mono uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors"
                >
                  Close album ✕
                </button>
              </div>

              <div className="mt-8 grid gap-3 grid-cols-2 md:grid-cols-4">
                {active.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setLightbox(i)}
                    className="bg-background border border-border rounded-none p-1.5 hover-zoom transition-transform hover:-translate-y-1"
                    aria-label={`View photo ${i + 1} of ${active.title} ${active.caption}`}
                  >
                    <div className="relative rounded-none overflow-hidden aspect-[4/3]">
                      <img
                        src={src}
                        alt={`${active.title} ${active.caption} ${i + 1}`}
                        loading="lazy"
                        className="size-full object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <p className="mt-10 max-w-[1200px] mx-auto text-center text-xs font-mono uppercase tracking-widest text-foreground/50">
          More photos & videos coming soon
        </p>
      </section>

      {/* Lightbox */}
      {active && lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-shade/95 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-6 text-background/80 hover:text-background text-xs font-mono uppercase tracking-widest"
          >
            Close ✕
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + active.images.length) % active.images.length);
            }}
            className="absolute left-3 md:left-8 text-background/80 hover:text-background text-3xl px-3"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <img
            src={active.images[lightbox]}
            alt={`${active.title} ${active.caption} ${lightbox + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full object-contain"
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % active.images.length);
            }}
            className="absolute right-3 md:right-8 text-background/80 hover:text-background text-3xl px-3"
            aria-label="Next photo"
          >
            ›
          </button>
          <div className="absolute bottom-5 text-xs font-mono uppercase tracking-widest text-background/70">
            {active.title} · {active.caption} · {lightbox + 1} / {active.images.length}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}