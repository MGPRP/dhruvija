import { useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
  srcs?: string[];
  alt: string;
  width: number;
  height: number;
  intervalMs?: number;
};

/**
 * Hero image with a light mouse-follow effect:
 *  - subtle parallax on the image (transform only, GPU-composited)
 *  - a soft radial "sheen" that follows the cursor
 *  - a few slow-drifting sparkle motes for life
 * All work is one rAF loop, only opacity/transform mutate, no layout.
 * Disabled on touch and prefers-reduced-motion.
 */
export function HeroFX({ src, srcs, alt, width, height, intervalMs = 5000 }: Props) {
  const images = srcs && srcs.length > 0 ? srcs : src ? [src] : [];
  const [index, setIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (images.length < 2) return;
    const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [images.length, intervalMs]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    const wrap = wrapRef.current;
    const img = imgRef.current;
    const sheen = sheenRef.current;
    if (!wrap || !img || !sheen) return;

    let raf = 0;
    let tx = 0.5, ty = 0.5;   // target (0-1)
    let cx = 0.5, cy = 0.5;   // current (eased)
    let inside = false;

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width;
      ty = (e.clientY - r.top) / r.height;
      inside = true;
      sheen.style.opacity = "1";
    };
    const onLeave = () => {
      inside = false;
      sheen.style.opacity = "0";
      tx = 0.5;
      ty = 0.5;
    };

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      // Parallax: shift image up to ~14px based on cursor offset from center.
      const px = (cx - 0.5) * -60;
      const py = (cy - 0.5) * -60;
      img.style.transform = `scale(1.09) translate3d(${px}px, ${py}px, 0)`;
      if (inside) {
        sheen.style.background = `radial-gradient(420px 420px at ${cx * 100}% ${cy * 100}%, rgba(255,236,190,0.85), rgba(255,220,160,0.35) 40%, rgba(255,220,160,0) 72%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    tick();

    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      {images.map((s, i) => (
        <img
          key={s}
          ref={i === 0 ? imgRef : undefined}
          src={s}
          alt={i === 0 ? alt : ""}
          width={width}
          height={height}
          fetchPriority={i === 0 ? "high" : "low"}
          decoding="async"
          loading={i === 0 ? "eager" : "lazy"}
          className="absolute inset-0 size-full object-cover will-change-transform transition-opacity duration-[1400ms] ease-in-out"
          style={{ transform: "scale(1.09)", opacity: i === index ? 1 : 0 }}
        />
      ))}
      {/* Cursor-follow sheen */}
      <div
        ref={sheenRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-300"
      />
    </div>
  );
}