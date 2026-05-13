import { BadgeCheck, Star, Award, TrendingUp } from "lucide-react";

const members = [
  { name: "Arjun Sharma",   role: "Cloud Practitioner",    certs: ["CLF-C02"],           avatar: "AS", color: "#FF9900", stars: 5, rank: "Gold" },
  { name: "Priya Verma",    role: "Solutions Architect",   certs: ["SAA-C03","CLF-C02"], avatar: "PV", color: "#00B8FF", stars: 5, rank: "Platinum" },
  { name: "Rahul Patel",    role: "Developer Associate",   certs: ["DVA-C02"],           avatar: "RP", color: "#7C3AED", stars: 4, rank: "Gold" },
  { name: "Sneha Gupta",    role: "Cloud Practitioner",    certs: ["CLF-C02"],           avatar: "SG", color: "#10B981", stars: 4, rank: "Silver" },
  { name: "Vikram Singh",   role: "SysOps Administrator",  certs: ["SOA-C02","CLF-C02"], avatar: "VS", color: "#FF9900", stars: 5, rank: "Platinum" },
  { name: "Ananya Joshi",   role: "ML Specialist",         certs: ["MLS-C01"],           avatar: "AJ", color: "#00B8FF", stars: 5, rank: "Platinum" },
  { name: "Rohan Mishra",   role: "DevOps Engineer",       certs: ["DOP-C02"],           avatar: "RM", color: "#7C3AED", stars: 4, rank: "Gold" },
  { name: "Kavya Tiwari",   role: "Cloud Practitioner",    certs: ["CLF-C02"],           avatar: "KT", color: "#10B981", stars: 3, rank: "Silver" },
];

const rankColor: Record<string, string> = {
  Platinum: "#00B8FF",
  Gold:     "#FF9900",
  Silver:   "#9CA3AF",
};

function MemberCard({ name, role, certs, avatar, color, stars, rank }: typeof members[0]) {
  return (
    <div
      className="glass-card glow-border-anim relative rounded-2xl p-6 transition-all duration-300 group cursor-default overflow-hidden"
      style={{
        background: "rgba(13,18,30,0.8)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-6px) scale(1.01)";
        el.style.border = `1px solid ${color}35`;
        el.style.boxShadow = `0 20px 50px rgba(0,0,0,0.5), 0 0 40px ${color}18`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0) scale(1)";
        el.style.border = "1px solid rgba(255,255,255,0.06)";
        el.style.boxShadow = "0 4px 30px rgba(0,0,0,0.4)";
      }}
    >
      {/* Rank badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1">
        <Award size={12} style={{ color: rankColor[rank] }} />
        <span style={{ color: rankColor[rank], fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem", letterSpacing: "0.08em" }}>
          {rank.toUpperCase()}
        </span>
      </div>

      {/* Colored glow behind avatar */}
      <div
        className="absolute top-0 left-0 w-20 h-20 rounded-full blur-2xl"
        style={{ background: `${color}18`, transform: "translate(-25%, -25%)" }}
      />

      {/* Avatar */}
      <div className="relative mb-5">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-base"
          style={{
            background: `linear-gradient(135deg, ${color}25, ${color}0D)`,
            border: `1.5px solid ${color}40`,
            color,
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            boxShadow: `0 0 20px ${color}30`,
          }}
        >
          {avatar}
        </div>
        {/* Verified badge */}
        <div
          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
          style={{ background: "#10B981", boxShadow: "0 0 10px rgba(16,185,129,0.6)", border: "1.5px solid #080C18" }}
        >
          <BadgeCheck size={11} color="#fff" />
        </div>
      </div>

      {/* Name */}
      <div
        className="mb-0.5"
        style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#F3F4F6", letterSpacing: "-0.01em" }}
      >
        {name}
      </div>
      <div className="mb-4" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif", fontSize: "0.78rem" }}>
        {role}
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={11} fill={i < stars ? "#FF9900" : "transparent"} style={{ color: i < stars ? "#FF9900" : "#1F2937" }} />
        ))}
      </div>

      {/* Cert badges */}
      <div className="flex flex-wrap gap-1.5">
        {certs.map((c) => (
          <span
            key={c}
            className="px-2.5 py-0.5 rounded-full text-xs"
            style={{
              background: `${color}12`,
              border: `1px solid ${color}30`,
              color,
              fontFamily: "JetBrains Mono, monospace",
              fontWeight: 500,
              fontSize: "0.68rem",
              letterSpacing: "0.03em",
            }}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Bottom line hover reveal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />
    </div>
  );
}

export function CertifiedMembers() {
  return (
    <section
      id="members"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080C18 0%, #06080F 100%)" }}
    >
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)" }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            <BadgeCheck size={13} style={{ color: "#10B981" }} />
            <span style={{ color: "#10B981", fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "0.15em" }}>
              CERTIFIED MEMBERS
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
            Our Certified{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#10B981,#00B8FF)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Cloud Warriors
            </span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{ color: "#6B7280", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}
          >
            These members have earned official AWS certifications, verified their skills, and are actively mentoring the next cohort.
          </p>
        </div>

        {/* Summary pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { icon: <TrendingUp size={13} />, label: "3 Platinum · 3 Gold · 2 Silver", color: "#FF9900" },
            { icon: <BadgeCheck size={13} />, label: "100% Verified Members", color: "#10B981" },
          ].map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs"
              style={{
                background: `${p.color}0D`,
                border: `1px solid ${p.color}25`,
                color: p.color,
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
              }}
            >
              {p.icon} {p.label}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map((m) => <MemberCard key={m.name} {...m} />)}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#roadmap"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm transition-all duration-200"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.25)",
              color: "#10B981",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(16,185,129,0.15)";
              el.style.boxShadow = "0 0 30px rgba(16,185,129,0.2)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(16,185,129,0.08)";
              el.style.boxShadow = "none";
              el.style.transform = "translateY(0)";
            }}
          >
            Get Certified — View Roadmap →
          </a>
        </div>
      </div>
    </section>
  );
}
