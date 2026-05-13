import { Cloud, Heart, ExternalLink, ArrowUpRight, Github, MessageSquare, Linkedin, Send } from "lucide-react";

const footerLinks: Record<string, string[]> = {
  "Learn": ["Certification Roadmap", "Learning Hub", "Study Groups", "Practice Tests", "AI CloudBot"],
  "Community": ["Discord Server", "LinkedIn Page", "GitHub Org", "Telegram Group", "Newsletter"],
  "Club": ["About Us", "Our Team", "Events", "Achievements", "Join Us"],
  "Resources": ["AWS Blog", "Workshop Code", "AWS Free Tier", "AWS Docs", "CLF Guide"],
};

const socials = [
  { icon: <MessageSquare size={15} />, href: "#", color: "#5865F2" },
  { icon: <Linkedin size={15} />, href: "#", color: "#0A66C2" },
  { icon: <Github size={15} />, href: "#", color: "#E5E7EB" },
  { icon: <Send size={15} />, href: "#", color: "#26A5E4" },
];

export function Footer() {
  return (
    <footer style={{ background: "#040608" }}>
      {/* CTA band */}
      <div
        className="relative overflow-hidden"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(255,153,0,0.06) 0%, rgba(124,58,237,0.06) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,153,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,153,0,0.03) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(255,153,0,0.08)", border: "1px solid rgba(255,153,0,0.2)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#FF9900", animation: "pulseGlow 2s ease-in-out infinite", boxShadow: "0 0 6px #FF9900" }} />
            <span style={{ color: "#FF9900", fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", letterSpacing: "0.15em" }}>
              JOIN 200+ CLOUD BUILDERS
            </span>
          </div>

          <h2
            className="mb-5"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              letterSpacing: "-0.03em",
              color: "#F3F4F6",
              lineHeight: 1.1,
            }}
          >
            Ready to Start Your
            <br />
            <span
              style={{
                background: "linear-gradient(135deg,#FF9900,#FF5500)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Cloud Journey?
            </span>
          </h2>

          <p className="mb-10" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif", fontSize: "1rem", maxWidth: "480px", margin: "0 auto 40px" }}>
            Join the AWS Community Club at AITR Indore — free to join, free resources, certified mentors, and a community that never stops learning.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full transition-all duration-300"
              style={{
                background: "linear-gradient(135deg,#FF9900,#FF5500)",
                color: "#fff",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                boxShadow: "0 0 30px rgba(255,153,0,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 55px rgba(255,153,0,0.7), inset 0 1px 0 rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(255,153,0,0.45), inset 0 1px 0 rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Join the Club <ArrowUpRight size={16} />
            </a>

            <a
              href="#"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#9CA3AF",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#E5E7EB";
                el.style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#9CA3AF";
                el.style.borderColor = "rgba(255,255,255,0.1)";
              }}
            >
              <ExternalLink size={15} /> AWS Community Hub
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-14">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#FF9900,#FF5500)", boxShadow: "0 0 20px rgba(255,153,0,0.35)" }}
              >
                <Cloud size={18} color="#fff" />
              </div>
              <div>
                <div style={{ color: "#FF9900", fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.2em" }}>AWS</div>
                <div style={{ color: "#E5E7EB", fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "0.88rem" }}>Community Club</div>
              </div>
            </div>

            <p className="text-xs leading-relaxed mb-5" style={{ color: "#4B5563", fontFamily: "Inter, sans-serif" }}>
              AITR Indore's premier cloud computing student community. Building the next generation of AWS-certified professionals and cloud architects.
            </p>

            <div
              className="inline-block px-3 py-1 rounded-full mb-5"
              style={{ background: "rgba(255,153,0,0.06)", border: "1px solid rgba(255,153,0,0.12)" }}
            >
              <span style={{ color: "#4B5563", fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem" }}>
                // est. 2024 · aitr indore
              </span>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "#4B5563" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = `${s.color}15`;
                    el.style.border = `1px solid ${s.color}30`;
                    el.style.color = s.color;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.border = "1px solid rgba(255,255,255,0.07)";
                    el.style.color = "#4B5563";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="md:col-span-1">
              <div
                className="mb-4"
                style={{ color: "#FF9900", fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                {section}
              </div>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs flex items-center gap-1 group/link transition-all duration-150"
                      style={{ color: "#374151", fontFamily: "Inter, sans-serif" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex items-center gap-1.5 text-xs" style={{ color: "#1F2937", fontFamily: "Inter, sans-serif" }}>
            © 2026 AWS Community Club, AITR Indore · Made with
            <Heart size={11} fill="#FF9900" style={{ color: "#FF9900" }} />
            by the community
          </div>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "AWS Partner"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs transition-colors"
                style={{ color: "#1F2937", fontFamily: "Inter, sans-serif" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#374151")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1F2937")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
