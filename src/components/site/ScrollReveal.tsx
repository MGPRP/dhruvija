import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

/**
 * Site-wide scroll reveal, editorial style: sections ease up into place and
 * their headings, copy, images and cards stagger in just after. Images get a
 * slow scale-out reveal.
 *
 * Uses the Web Animations API rather than class toggling so nothing about the
 * server-rendered markup changes (no hydration mismatches).
 */
export function ScrollReveal() {
  const router = useRouter();
  const pathname = router.state.location.pathname;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const EASE = "cubic-bezier(0.22, 0.7, 0.2, 1)";

    const play = (el: HTMLElement, delay: number) => {
      const isImg = el.tagName === "IMG";
      const dir = el.dataset.revealDir; // "left" | "right" | undefined
      let frames: Keyframe[];
      if (dir) {
        const from = dir === "left" ? -56 : 56;
        frames = [
          {
            opacity: 0,
            transform: `translate3d(${from}px, 0, 0)${isImg ? " scale(1.04)" : ""}`,
            clipPath: isImg
              ? dir === "left"
                ? "inset(0 0 0 14%)"
                : "inset(0 14% 0 0)"
              : "none",
          },
          {
            opacity: 1,
            transform: "translate3d(0, 0, 0) scale(1)",
            clipPath: isImg ? "inset(0 0 0 0)" : "none",
          },
        ];
      } else if (isImg) {
        frames = [
          { opacity: 0, transform: "scale(1.06)", clipPath: "inset(0 0 12% 0)" },
          { opacity: 1, transform: "scale(1)", clipPath: "inset(0 0 0 0)" },
        ];
      } else {
        frames = [
          { opacity: 0, transform: "translate3d(0, 24px, 0)" },
          { opacity: 1, transform: "translate3d(0, 0, 0)" },
        ];
      }
      el.animate(frames, {
        duration: isImg ? 1200 : 900,
        delay,
        easing: EASE,
        fill: "both",
      });
    };

    const attach = () => {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            io.unobserve(el);
            play(el, Number(el.dataset.revealDelay ?? 0));
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -6% 0px" },
      );

      const sections = Array.from(document.querySelectorAll<HTMLElement>("section"));
      sections.forEach((section, sectionIndex) => {
        if (section.dataset.scrollReveal === "1") return;
        section.dataset.scrollReveal = "1";

        const targets: HTMLElement[] = [];
        const kids = Array.from(
          section.querySelectorAll<HTMLElement>("h1, h2, h3, p, img, article, li, blockquote, .rv"),
        );
        kids.forEach((k) => {
          if (k.dataset.scrollReveal === "1") return;
          // Leave elements already animated by <Reveal /> alone.
          if (k.style.opacity !== "" || k.closest("[data-no-reveal]")) return;
          k.dataset.scrollReveal = "1";
          targets.push(k);
        });

        targets.forEach((el, i) => {
          const delay = Math.min(i, 8) * 70;
          el.dataset.revealDelay = String(delay);
          // Images and cards glide in horizontally, alternating side by section.
          if (el.tagName === "IMG" || el.tagName === "ARTICLE") {
            const mid = window.innerWidth / 2;
            const box = el.getBoundingClientRect();
            const fromLeft = box.left + box.width / 2 < mid ? true : (sectionIndex + i) % 2 === 0;
            el.dataset.revealDir = fromLeft ? "left" : "right";
          }
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
            play(el, delay);
          } else {
            io.observe(el);
          }
        });
      });

      return () => io.disconnect();
    };

    let cleanup: (() => void) | undefined;
    let t = 0;
    const start = () => {
      t = window.setTimeout(() => {
        cleanup = attach();
      }, 60);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", start);
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
