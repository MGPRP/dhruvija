import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let dx = tx, dy = ty;
    let rx = tx, ry = ty;
    let visible = false;

    const setVisible = (v: boolean) => {
      if (visible === v) return;
      visible = v;
      dot.style.opacity = v ? "1" : "0";
      ring.style.opacity = v ? "1" : "0";
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const isInteractive = (t: EventTarget | null) =>
      !!(t as HTMLElement | null)?.closest?.(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]"
      );

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) ring.classList.add("cursor-ring-hover");
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) ring.classList.remove("cursor-ring-hover");
    };

    const tick = () => {
      dx += (tx - dx) * 0.5;
      dy += (ty - dy) * 0.5;
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.body.classList.add("custom-cursor-active");
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="cursor-ring pointer-events-none fixed top-0 left-0 z-[9998] size-9 rounded-full border-2 border-clay bg-background/40 opacity-0 transition-[width,height,background-color] duration-200 ease-out"
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] size-2.5 rounded-full bg-[oklch(0.32_0.08_55)] opacity-0"
      />
    </>
  );
}