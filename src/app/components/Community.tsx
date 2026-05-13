import { MessageSquare, Linkedin, Github, Send, Users, ArrowUpRight, Hash } from "lucide-react";

const links = [
  {
    platform: "Discord",
    handle: "discord.gg/awsaitr",
    icon: <MessageSquare size={26} strokeWidth={1.8} />,
    color: "#5865F2",
    glow: "rgba(88,101,242,0.3)",
    gradient: "linear-gradient(135deg,rgba(88,101,242,0.12),rgba(88,101,242,0.04))",
    desc: "Daily cloud discussions, study groups, mock interview prep, and instant help from certified members.",
    members: "200+",
    unit: "Members Online",
    channels: ["#announcements", "#cert-study", "#help-desk", "#projects"],
    href: "#",
  },
  {
    platform: "LinkedIn",
    handle: "AWS Community AITR",
    icon: <Linkedin size={26} strokeWidth={1.8} />,
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.3)",
    gradient: "linear-gradient(135deg,rgba(10,102,194,0.12),rgba(10,102,194,0.04))",
    desc: "Professional network — job opportunities, internship referrals, member spotlights and industry news.",
    members: "500+",
    unit: "Followers",
    channels: ["#member-achievements", "#opportunities", "#industry-news"],
    href: "#",
  },
  {
    platform: "GitHub",
    handle: "github.com/aws-aitr",
    icon: <Github size={26} strokeWidth={1.8} />,
    color: "#E5E7EB",
    glow: "rgba(229,231,235,0.15)",
    gradient: "linear-gradient(135deg,rgba(229,231,235,0.06),rgba(229,231,235,0.02))",
    desc: "Open-source projects, workshop code samples, learning templates, and collaborative cloud architectures.",
    members: "30+",
    unit: "Repositories",
    channels: ["aws-workshops", "cloud-projects", "cert-resources"],
    href: "#",
  },
  {
    platform: "Telegram",
    handle: "t.me/awsaitrindore",
    icon: <Send size={26} strokeWidth={1.8} />,
    color: "#26A5E4",
    glow: "rgba(38,165,228,0.3)",
    gradient: "linear-gradient(135deg,rgba(38,165,228,0.12),rgba(38,165,228,0.04))",
    desc: "Instant event alerts, certification deadlines, free resource drops, and flash study sessions.",
    members: "180+",
    unit: "Subscribers",
    channels: ["Announcements", "Resources", "Events", "Jobs"],
    href: "#",
  },
];

export function Community() {
  return (
    <section
      id="community"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06080F 0%, #080C18 100%)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,184,255,0.25), transparent)" }} />
      <div
        className="absolute pointer-events-none"
        style={{ top: "20%", left: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(88,101,242,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(0,184,255,0.08)", border: "1px solid rgba(0,184,255,0.2)" }}
          >
            <Users size={13} style={{ color: "#00B8FF" }} />
            <span style={{ color: "#00B8FF", fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "0.15em" }}>
              OUR COMMUNITY
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              letterSpacing: "-0.03em",
              color: "#F3F4F6",
              lineHeight: 1.1,
            }}
          >
            Connect. Build.{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#00B8FF,#7C3AED)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Belong.
            </span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{ color: "#6B7280", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}
          >
            Find us on every platform. Our community is always active, always helping, always growing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {links.map((l) => (
            <a
              key={l.platform}
              href={l.href}
              className="glass-card glow-border-anim relative block p-6 rounded-2xl transition-all duration-300 group overflow-hidden"
              style={{
                background: l.gradient,
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none",
                boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-7px)";
                el.style.border = `1px solid ${l.color}35`;
                el.style.boxShadow = `0 24px 60px rgba(0,0,0,0.6), 0 0 50px ${l.glow}`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.border = "1px solid rgba(255,255,255,0.07)";
                el.style.boxShadow = "0 4px 30px rgba(0,0,0,0.4)";
              }}
            >
              {/* Glow accent */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                style={{ background: l.color }}
              />

              {/* Top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${l.color}50, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${l.color}12`,
                  border: `1px solid ${l.color}25`,
                  color: l.color,
                  boxShadow: `0 0 20px ${l.color}15`,
                }}
              >
                {l.icon}
              </div>

              <div
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  color: "#F3F4F6",
                  letterSpacing: "-0.01em",
                  marginBottom: "2px",
                }}
              >
                {l.platform}
              </div>

              {/* Stat */}
              <div className="flex items-baseline gap-1.5 mb-4">
                <span style={{ color: l.color, fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>{l.members}</span>
                <span style={{ color: "#4B5563", fontFamily: "Inter, sans-serif", fontSize: "0.72rem" }}>{l.unit}</span>
              </div>

              <p className="text-xs mb-4 leading-relaxed" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                {l.desc}
              </p>

              {/* Channel/tag list */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {l.channels.map((ch) => (
                  <span
                    key={ch}
                    className="flex items-center gap-0.5 px-2 py-0.5 rounded text-xs"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      color: "#374151",
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "0.65rem",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <Hash size={8} /> {ch}
                  </span>
                ))}
              </div>

              {/* Handle + CTA */}
              <div className="flex items-center justify-between">
                <span style={{ color: "#374151", fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem" }}>{l.handle}</span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: `${l.color}15`,
                    border: `1px solid ${l.color}30`,
                    color: l.color,
                  }}
                >
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom total stats */}
        <div
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { val: "880+",  label: "Total Community Members", color: "#FF9900" },
            { val: "4",     label: "Active Platforms",        color: "#00B8FF" },
            { val: "Daily", label: "Activity Streak",         color: "#7C3AED" },
            { val: "Free",  label: "To Join Any Platform",    color: "#10B981" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-6 px-4"
              style={{ background: "rgba(17,24,39,0.5)", backdropFilter: "blur(10px)" }}
            >
              <div style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 800, fontSize: "1.6rem", color: s.color, textShadow: `0 0 20px ${s.color}50` }}>
                {s.val}
              </div>
              <div className="text-xs text-center mt-1" style={{ color: "#4B5563", fontFamily: "Inter, sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
