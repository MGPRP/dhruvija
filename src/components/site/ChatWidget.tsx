import { useState } from "react";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

/**
 * Sticky chat affordance, visible on every page. Opens a small card with
 * quick ways to reach the team.
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[min(84vw,20rem)] border border-border bg-card p-5 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.45)] animate-fade-in">
          <p className="font-display text-xl leading-tight">How can we help?</p>
          <p className="mt-2 text-sm text-foreground/70">
            Tell us what you are looking for and our team will get back to you.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <a
              href="tel:+919535624443"
              className="flex items-center gap-2.5 border border-border px-3 py-2.5 hover:bg-secondary transition-colors"
            >
              <Phone size={15} aria-hidden /> +91 95356 24443
            </a>
            <a
              href="mailto:info@dhruvija.com"
              className="flex items-center gap-2.5 border border-border px-3 py-2.5 hover:bg-secondary transition-colors"
            >
              <Mail size={15} aria-hidden /> info@dhruvija.com
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center bg-foreground px-3 py-2.5 text-background hover:bg-foreground/85 transition-colors"
            >
              Send us a message
            </Link>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with us"}
        aria-expanded={open}
        className="grid size-14 place-items-center rounded-full bg-butter text-ink shadow-[0_16px_40px_-16px_rgba(0,0,0,0.6)] transition-transform hover:scale-[1.06]"
      >
        {open ? <X size={22} aria-hidden /> : <MessageCircle size={24} aria-hidden />}
      </button>
    </div>
  );
}