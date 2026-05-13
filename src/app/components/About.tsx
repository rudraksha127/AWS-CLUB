import { Target, Eye, Zap, ArrowUpRight } from "lucide-react";

const cards = [
  {
    icon: Target,
    color: "#FF9900",
    glow: "rgba(255,153,0,0.2)",
    gradient: "linear-gradient(135deg,rgba(255,153,0,0.15),rgba(255,85,0,0.08))",
    title: "Our Mission",
    subtitle: "mission.statement",
    text: "Empower every AITR student to master cloud computing and AWS technologies — producing certified cloud professionals ready to architect tomorrow's digital infrastructure.",
    stat: "200+",
    statLabel: "Students Empowered",
  },
  {
    icon: Eye,
    color: "#00B8FF",
    glow: "rgba(0,184,255,0.2)",
    gradient: "linear-gradient(135deg,rgba(0,184,255,0.12),rgba(0,112,255,0.06))",
    title: "Our Vision",
    subtitle: "vision.2030",
    text: "To be India's most impactful university AWS Community — a launchpad where curiosity meets innovation, and every student's cloud dream becomes a certified reality.",
    stat: "#1",
    statLabel: "University AWS Club",
  },
  {
    icon: Zap,
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.2)",
    gradient: "linear-gradient(135deg,rgba(124,58,237,0.12),rgba(168,85,247,0.06))",
    title: "What We Do",
    subtitle: "activities.build",
    text: "Hands-on workshops, certification bootcamps, hackathons, AWS Hero guest sessions, peer learning groups, and a free resource library available to all members.",
    stat: "30+",
    statLabel: "Events Per Year",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06080F 0%, #080C18 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,153,0,0.2), rgba(0,184,255,0.2), transparent)" }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ top: "10%", right: "-5%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,153,0,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(255,153,0,0.08)",
                border: "1px solid rgba(255,153,0,0.2)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400" style={{ boxShadow: "0 0 6px #FF9900" }} />
              <span style={{ color: "#FF9900", fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "0.15em" }}>
                ABOUT THE CLUB
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#F3F4F6",
              }}
            >
              Who We Are
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg,#FF9900,#FF5500)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                &amp; What We Stand For
              </span>
            </h2>
          </div>
          <p
            className="max-w-xs lg:text-right"
            style={{ color: "#6B7280", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}
          >
            A community of passionate cloud builders at Acropolis Institute of Technology and Research, Indore.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="glass-card glow-border-anim relative rounded-3xl p-8 transition-all duration-400 cursor-default group"
                style={{
                  background: c.gradient,
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 4px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                  animationDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${c.glow}, inset 0 1px 0 rgba(255,255,255,0.08)`;
                  el.style.border = `1px solid ${c.color}30`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)";
                  el.style.border = "1px solid rgba(255,255,255,0.07)";
                }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, transparent, ${c.color}60, transparent)` }}
                />

                {/* Big stat — top right */}
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${c.color}15`,
                      border: `1px solid ${c.color}25`,
                      boxShadow: `0 0 20px ${c.color}20`,
                    }}
                  >
                    <Icon size={24} style={{ color: c.color }} strokeWidth={1.8} />
                  </div>
                  <div className="text-right">
                    <div
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 800,
                        fontSize: "2rem",
                        lineHeight: 1,
                        color: c.color,
                        textShadow: `0 0 30px ${c.color}66`,
                      }}
                    >
                      {c.stat}
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: "#4B5563", fontFamily: "Inter, sans-serif" }}
                    >
                      {c.statLabel}
                    </div>
                  </div>
                </div>

                {/* Code tag */}
                <div
                  className="mb-3 text-xs"
                  style={{ color: c.color, fontFamily: "JetBrains Mono, monospace", opacity: 0.7 }}
                >
                  // {c.subtitle}
                </div>

                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    letterSpacing: "-0.02em",
                    color: "#F3F4F6",
                  }}
                >
                  {c.title}
                </h3>

                <p
                  className="mb-6"
                  style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif", fontSize: "0.88rem", lineHeight: 1.75 }}
                >
                  {c.text}
                </p>

                <div
                  className="inline-flex items-center gap-1.5 text-xs transition-colors group-hover:gap-2.5"
                  style={{ color: c.color, fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  Learn more <ArrowUpRight size={13} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom strip */}
        <div
          className="mt-14 p-6 rounded-2xl flex flex-wrap items-center justify-between gap-6"
          style={{
            background: "rgba(255,153,0,0.04)",
            border: "1px solid rgba(255,153,0,0.1)",
          }}
        >
          {[
            { label: "Founded", val: "2024" },
            { label: "Institution", val: "AITR, Indore" },
            { label: "AWS Partner", val: "Official Community" },
            { label: "Focus", val: "Cloud · AI · Dev" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-px h-8 bg-orange-900/50" />
              <div>
                <div style={{ color: "#4B5563", fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem" }}>{item.label}</div>
                <div style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>{item.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
