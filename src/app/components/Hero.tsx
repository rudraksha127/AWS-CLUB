import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Cloud, Server, Database, Shield, Zap, Globe, GitBranch, Cpu } from "lucide-react";

/* ─── Animated particle canvas ─────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; r: number; vx: number; vy: number; alpha: number; color: string };
    const colors = ["#FF9900", "#FF9900", "#00B8FF", "#7C3AED", "#10B981"];
    const pts: P[] = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.3,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x = (p.x + p.vx + canvas.width) % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(255,153,0,${0.07 * (1 - d / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" style={{ opacity: 0.65 }} />;
}

/* ─── Floating AWS service pills ────────────────────────────── */
const services = [
  { icon: <Cloud size={13} />,      label: "EC2",       color: "#FF9900", delay: "0s",    x: "8%",  y: "22%",  anim: "floatYslow 7s ease-in-out infinite" },
  { icon: <Database size={13} />,   label: "RDS",       color: "#00B8FF", delay: "1.2s",  x: "88%", y: "18%",  anim: "floatY 5s ease-in-out infinite" },
  { icon: <Shield size={13} />,     label: "IAM",       color: "#7C3AED", delay: "0.5s",  x: "5%",  y: "62%",  anim: "floatYslow 6s ease-in-out infinite" },
  { icon: <Zap size={13} />,        label: "Lambda",    color: "#FF9900", delay: "1.8s",  x: "90%", y: "55%",  anim: "floatY 8s ease-in-out infinite" },
  { icon: <Server size={13} />,     label: "S3",        color: "#10B981", delay: "0.8s",  x: "15%", y: "80%",  anim: "floatYslow 5.5s ease-in-out infinite" },
  { icon: <Globe size={13} />,      label: "CloudFront",color: "#00B8FF", delay: "2s",    x: "82%", y: "78%",  anim: "floatY 6.5s ease-in-out infinite" },
  { icon: <GitBranch size={13} />,  label: "CodePipeline",color:"#7C3AED",delay: "0.3s",  x: "50%", y: "88%",  anim: "floatYslow 7.5s ease-in-out infinite" },
  { icon: <Cpu size={13} />,        label: "SageMaker", color: "#FF9900", delay: "1.5s",  x: "72%", y: "10%",  anim: "floatY 4.5s ease-in-out infinite" },
];

/* ─── Stat card ─────────────────────────────────────────────── */
function StatCard({ val, label, color }: { val: string; label: string; color: string }) {
  return (
    <div
      className="glass-card text-center px-6 py-4 rounded-2xl"
      style={{
        background: "rgba(17,24,39,0.6)",
        backdropFilter: "blur(20px)",
        border: `1px solid rgba(255,255,255,0.08)`,
        boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)`,
        minWidth: "110px",
      }}
    >
      <div
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontWeight: 800,
          fontSize: "1.9rem",
          color,
          lineHeight: 1,
          textShadow: `0 0 20px ${color}66`,
        }}
      >
        {val}
      </div>
      <div
        className="mt-1 text-xs"
        style={{ color: "#6B7280", fontFamily: "Inter, sans-serif", letterSpacing: "0.05em" }}
      >
        {label}
      </div>
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
export function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #06080F 0%, #0A0E1A 40%, #080C18 100%)" }}
    >
      <ParticleCanvas />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,153,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,153,0,0.03) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Radial glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute" style={{ top: "20%", left: "15%", width: "480px", height: "480px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,153,0,0.12) 0%, transparent 70%)", animation: "blobPulse 8s ease-in-out infinite" }} />
        <div className="absolute" style={{ bottom: "15%", right: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)", animation: "blobPulse 10s ease-in-out infinite reverse" }} />
        <div className="absolute" style={{ top: "50%", right: "30%", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,184,255,0.08) 0%, transparent 70%)" }} />
      </div>

      {/* Floating AWS service pills */}
      {services.map((s) => (
        <div
          key={s.label}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-full"
          style={{
            left: s.x,
            top: s.y,
            background: "rgba(17,24,39,0.75)",
            backdropFilter: "blur(16px)",
            border: `1px solid ${s.color}33`,
            boxShadow: `0 0 20px ${s.color}22, inset 0 1px 0 rgba(255,255,255,0.06)`,
            color: s.color,
            animation: s.anim,
            animationDelay: s.delay,
            fontSize: "0.7rem",
            fontFamily: "JetBrains Mono, monospace",
            fontWeight: 500,
          }}
        >
          {s.icon}
          <span style={{ color: "#E5E7EB" }}>{s.label}</span>
        </div>
      ))}

      {/* Main content */}
      <div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Top badge */}
        <div className="inline-flex items-center gap-3 mb-10">
          <div
            className="relative px-5 py-2 rounded-full"
            style={{
              background: "rgba(255,153,0,0.08)",
              border: "1px solid rgba(255,153,0,0.25)",
            }}
          >
            <span style={{ color: "#FF9900", fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "0.15em" }}>
              ✦ AWS COMMUNITY CLUB · AITR INDORE · EST. 2024
            </span>
            {/* Dot pulse */}
            <span
              className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
              style={{ background: "#10B981", boxShadow: "0 0 8px #10B981", animation: "pulseGlow 2s ease-in-out infinite" }}
            />
          </div>
        </div>

        {/* Display headline */}
        <h1
          className="mb-7"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "#F3F4F6",
          }}
        >
          <span className="block">Build on the</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #FF9900 0%, #FF5500 40%, #FFB84D 80%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% auto",
              animation: "shimmer 5s linear infinite",
            }}
          >
            Cloud.
          </span>
          <span className="block" style={{ color: "#D1D5DB" }}>
            Grow{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00B8FF 0%, #0070FF 60%, #00E5FF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                animation: "shimmer 5s linear infinite reverse",
              }}
            >
              Together.
            </span>
          </span>
        </h1>

        {/* Sub text */}
        <p
          className="mb-10 max-w-xl mx-auto"
          style={{
            color: "#6B7280",
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            lineHeight: 1.75,
            fontWeight: 400,
          }}
        >
          India's most active university AWS Community — where college students become
          certified cloud architects, builders, and innovators.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#about"
            className="group flex items-center gap-2.5 px-8 py-3.5 rounded-full transition-all duration-300"
            style={{
              background: "linear-gradient(135deg,#FF9900,#FF5500)",
              color: "#fff",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.02em",
              boxShadow: "0 0 30px rgba(255,153,0,0.5), 0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.25)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "0 0 55px rgba(255,153,0,0.8), 0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.25)";
              el.style.transform = "translateY(-2px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "0 0 30px rgba(255,153,0,0.5), 0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.25)";
              el.style.transform = "translateY(0) scale(1)";
            }}
          >
            Explore the Club
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#learning"
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-full transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#E5E7EB",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(0,184,255,0.1)";
              el.style.border = "1px solid rgba(0,184,255,0.35)";
              el.style.color = "#00B8FF";
              el.style.boxShadow = "0 0 25px rgba(0,184,255,0.2)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(255,255,255,0.04)";
              el.style.border = "1px solid rgba(255,255,255,0.12)";
              el.style.color = "#E5E7EB";
              el.style.boxShadow = "none";
              el.style.transform = "translateY(0)";
            }}
          >
            <Play size={15} fill="currentColor" /> Start Learning
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4">
          <StatCard val="200+" label="Active Members" color="#FF9900" />
          <StatCard val="50+"  label="Certifications"  color="#00B8FF" />
          <StatCard val="30+"  label="Events Hosted"   color="#7C3AED" />
          <StatCard val="10+"  label="Live Projects"   color="#10B981" />
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-3">
          <div style={{ color: "#374151", fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.15em" }}>
            SCROLL TO EXPLORE
          </div>
          <div className="flex flex-col gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-px h-2 mx-auto rounded-full"
                style={{
                  background: "#FF9900",
                  opacity: 1 - i * 0.3,
                  animation: `pulseGlow 1.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
