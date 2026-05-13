import { useState, useEffect } from "react";
import { Menu, X, Cloud, Zap } from "lucide-react";

const navLinks = [
  { label: "About",     href: "#about" },
  { label: "Members",   href: "#members" },
  { label: "Learning",  href: "#learning" },
  { label: "Roadmap",   href: "#roadmap" },
  { label: "Events",    href: "#events" },
  { label: "Community", href: "#community" },
  { label: "Contact",   href: "#contact" },
];

export function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(6,10,20,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,153,0,0.1)" : "none",
        boxShadow: scrolled ? "0 4px 60px rgba(0,0,0,0.5)" : "none",
      }}
    >
      {/* Top accent line */}
      {scrolled && (
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #FF9900 30%, #00B8FF 70%, transparent 100%)",
            opacity: 0.6,
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg,#FF9900 0%,#FF5500 100%)", boxShadow: "0 0 20px rgba(255,153,0,0.4)" }}
            >
              <Cloud size={17} color="#fff" strokeWidth={2.5} />
            </div>
            <div
              className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border border-[#0A0E1A]"
              style={{ background: "#10B981", boxShadow: "0 0 6px #10B981" }}
            />
          </div>
          <div>
            <div
              className="leading-none mb-0.5 text-xs tracking-[0.2em] uppercase"
              style={{ color: "#FF9900", fontFamily: "JetBrains Mono, monospace", fontWeight: 600 }}
            >
              AWS
            </div>
            <div
              className="leading-none text-sm tracking-wide"
              style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}
            >
              Community Club
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.href)}
              className="relative px-4 py-2 rounded-lg text-sm transition-all duration-200 group"
              style={{
                color: active === l.href ? "#FF9900" : "#9CA3AF",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                background: active === l.href ? "rgba(255,153,0,0.08)" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (active !== l.href) (e.currentTarget as HTMLElement).style.color = "#E5E7EB";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                if (active !== l.href) {
                  (e.currentTarget as HTMLElement).style.color = "#9CA3AF";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }
              }}
            >
              {l.label}
              {active === l.href && (
                <span
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                  style={{ background: "#FF9900" }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className="flex items-center gap-1.5 text-xs"
            style={{ color: "#10B981", fontFamily: "JetBrains Mono, monospace" }}
          >
            <Zap size={11} fill="#10B981" />
            Live events
          </div>
          <a
            href="#contact"
            className="relative px-6 py-2.5 rounded-full text-sm overflow-hidden transition-all duration-300 group"
            style={{
              background: "linear-gradient(135deg,#FF9900,#FF5500)",
              color: "#fff",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              letterSpacing: "0.02em",
              boxShadow: "0 0 24px rgba(255,153,0,0.4), inset 0 1px 0 rgba(255,255,255,0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(255,153,0,0.7), inset 0 1px 0 rgba(255,255,255,0.25)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(255,153,0,0.4), inset 0 1px 0 rgba(255,255,255,0.25)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <span className="relative z-10">Join the Club →</span>
          </a>
        </div>

        <button className="md:hidden p-2 rounded-lg" style={{ color: "#E5E7EB", background: "rgba(255,255,255,0.06)" }} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{ background: "rgba(6,10,20,0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="px-6 py-6 flex flex-col gap-1">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-3 rounded-xl text-sm transition-colors"
                style={{
                  color: "#9CA3AF",
                  fontFamily: "Inter, sans-serif",
                  animationDelay: `${i * 0.05}s`,
                }}
                onClick={() => setOpen(false)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,153,0,0.08)";
                  (e.currentTarget as HTMLElement).style.color = "#FF9900";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#9CA3AF";
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 px-6 py-3 rounded-full text-sm text-center"
              style={{
                background: "linear-gradient(135deg,#FF9900,#FF5500)",
                color: "#fff",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                boxShadow: "0 0 20px rgba(255,153,0,0.4)",
              }}
              onClick={() => setOpen(false)}
            >
              Join the Club →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
