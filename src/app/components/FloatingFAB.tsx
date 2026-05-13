import { useState } from "react";
import { MessageCircle, Mail, Bot, X, Plus } from "lucide-react";

const actions = [
  {
    icon: <MessageCircle size={19} strokeWidth={2} />,
    label: "WhatsApp",
    sub: "Chat instantly",
    color: "#25D366",
    bg: "linear-gradient(135deg,#25D366,#128C7E)",
    glow: "rgba(37,211,102,0.5)",
    href: "https://wa.me/919876543210",
  },
  {
    icon: <Mail size={19} strokeWidth={2} />,
    label: "Email Us",
    sub: "awsclub@aitr.ac.in",
    color: "#00B8FF",
    bg: "linear-gradient(135deg,#00B8FF,#0070FF)",
    glow: "rgba(0,184,255,0.5)",
    href: "mailto:awsclub@aitr.ac.in",
  },
  {
    icon: <Bot size={19} strokeWidth={2} />,
    label: "AI Help",
    sub: "Ask CloudBot",
    color: "#A855F7",
    bg: "linear-gradient(135deg,#7C3AED,#4F46E5)",
    glow: "rgba(124,58,237,0.5)",
    href: "#ai-assistant",
  },
];

export function FloatingFAB() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-7 right-7 z-50 flex flex-col items-end gap-3">
      {/* Action buttons */}
      <div
        className="flex flex-col items-end gap-3"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: open ? "all" : "none",
        }}
      >
        {actions.map((a, i) => (
          <a
            key={a.label}
            href={a.href}
            className="flex items-center gap-3 group"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {/* Label tooltip */}
            <div
              className="flex flex-col items-end text-right opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0"
            >
              <span
                className="px-3 py-1.5 rounded-xl text-xs"
                style={{
                  background: "rgba(10,14,26,0.92)",
                  border: `1px solid ${a.color}30`,
                  color: a.color,
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 600,
                  backdropFilter: "blur(16px)",
                  whiteSpace: "nowrap",
                }}
              >
                {a.label}
              </span>
              <span
                className="text-xs mt-0.5 mr-1"
                style={{ color: "#4B5563", fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem" }}
              >
                {a.sub}
              </span>
            </div>

            {/* Circle button */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
              style={{
                background: a.bg,
                color: "#fff",
                boxShadow: `0 4px 20px ${a.glow}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 35px ${a.glow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${a.glow}`;
              }}
            >
              {a.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: open
            ? "rgba(255,255,255,0.08)"
            : "linear-gradient(135deg,#FF9900,#FF5500)",
          border: open ? "1px solid rgba(255,255,255,0.15)" : "none",
          color: "#fff",
          boxShadow: open
            ? "0 4px 20px rgba(0,0,0,0.4)"
            : "0 0 30px rgba(255,153,0,0.55), 0 4px 20px rgba(0,0,0,0.4)",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}
        onMouseEnter={(e) => {
          if (!open) (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(255,153,0,0.8), 0 4px 20px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
          if (!open) (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(255,153,0,0.55), 0 4px 20px rgba(0,0,0,0.4)";
        }}
      >
        {open ? <X size={20} /> : <Plus size={22} />}
        {!open && (
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs"
            style={{
              background: "#10B981",
              color: "#fff",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.5rem",
              fontWeight: 700,
              boxShadow: "0 0 8px rgba(16,185,129,0.6)",
            }}
          >
            3
          </span>
        )}
      </button>
    </div>
  );
}
