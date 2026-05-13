import { CheckCircle2, Lock, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    level: "01",
    title: "Cloud Practitioner",
    cert: "CLF-C02",
    duration: "4–6 weeks",
    status: "done",
    color: "#10B981",
    desc: "Cloud concepts, billing, security basics, and overview of all core AWS services.",
    topics: ["Cloud Concepts", "AWS Billing", "Security Basics", "Core Services"],
  },
  {
    level: "02",
    title: "Solutions Architect",
    cert: "SAA-C03",
    duration: "8–10 weeks",
    status: "active",
    color: "#FF9900",
    desc: "Design resilient, performant, secure, and cost-optimized architectures on AWS.",
    topics: ["EC2 & VPC", "S3 & Storage", "Database", "High Availability"],
  },
  {
    level: "03",
    title: "Developer Associate",
    cert: "DVA-C02",
    duration: "6–8 weeks",
    status: "locked",
    color: "#00B8FF",
    desc: "Build, deploy, and debug cloud-native applications on AWS services.",
    topics: ["Lambda", "API Gateway", "DynamoDB", "CI/CD"],
  },
  {
    level: "04",
    title: "SysOps Admin",
    cert: "SOA-C02",
    duration: "6–8 weeks",
    status: "locked",
    color: "#7C3AED",
    desc: "Operations, monitoring, infrastructure automation, and incident management.",
    topics: ["CloudWatch", "CloudFormation", "Auto Scaling", "Ops"],
  },
  {
    level: "05",
    title: "DevOps Pro",
    cert: "DOP-C02",
    duration: "8–10 weeks",
    status: "locked",
    color: "#FF9900",
    desc: "CI/CD automation, deployment strategies, monitoring, and governance.",
    topics: ["CodePipeline", "ECS/EKS", "Config", "Security"],
  },
  {
    level: "06",
    title: "ML Specialist",
    cert: "MLS-C01",
    duration: "10–12 weeks",
    status: "locked",
    color: "#A855F7",
    desc: "Design, build, train, and deploy ML models for real-world business problems.",
    topics: ["SageMaker", "Data Prep", "Model Training", "MLOps"],
  },
];

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06080F 0%, #080C18 100%)" }}
    >
      {/* Decorations */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.35), transparent)" }} />
      <div
        className="absolute pointer-events-none"
        style={{ bottom: "10%", right: "-8%", width: "450px", height: "450px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.25)" }}
            >
              <Sparkles size={13} style={{ color: "#7C3AED" }} />
              <span style={{ color: "#7C3AED", fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "0.15em" }}>
                CERTIFICATION ROADMAP
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
              Your Path to
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg,#7C3AED,#00B8FF)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AWS Mastery
              </span>
            </h2>
          </div>
          <p className="max-w-xs" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif", fontSize: "0.88rem", lineHeight: 1.7 }}>
            Structured guidance from first certification to specialist level — study with peers, get mentored, and level up together.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute hidden lg:block"
            style={{
              top: "52px",
              left: "5%",
              right: "5%",
              height: "2px",
              background: "linear-gradient(90deg, #10B981, #FF9900 30%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.06))",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-3">
            {steps.map((s, i) => {
              const done   = s.status === "done";
              const active = s.status === "active";
              const locked = s.status === "locked";

              return (
                <div key={s.cert} className="relative flex flex-col items-center text-center group">
                  {/* Step icon */}
                  <div
                    className="relative z-10 w-[52px] h-[52px] rounded-full flex items-center justify-center mb-5 transition-all duration-300"
                    style={{
                      background: done
                        ? "linear-gradient(135deg,#10B981,#059669)"
                        : active
                        ? "linear-gradient(135deg,#FF9900,#FF5500)"
                        : "rgba(17,24,39,0.9)",
                      border: locked ? "2px solid rgba(255,255,255,0.07)" : `2px solid ${s.color}`,
                      boxShadow: !locked ? `0 0 24px ${s.color}50, 0 0 8px ${s.color}30` : "0 4px 20px rgba(0,0,0,0.4)",
                    }}
                  >
                    {done
                      ? <CheckCircle2 size={22} color="#fff" strokeWidth={2.5} />
                      : locked
                      ? <Lock size={16} style={{ color: "#2D3748" }} />
                      : (
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ background: "#fff", animation: "pulseGlow 1.5s ease-in-out infinite" }}
                        />
                      )
                    }
                    {active && (
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{ border: `2px solid ${s.color}`, animation: "pulseGlow 2s ease-in-out infinite", opacity: 0.4 }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="glass-card w-full rounded-2xl p-4 text-left transition-all duration-300"
                    style={{
                      background: active
                        ? "linear-gradient(135deg, rgba(255,153,0,0.1), rgba(255,85,0,0.05))"
                        : done
                        ? "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(5,150,105,0.04))"
                        : "rgba(13,18,30,0.7)",
                      backdropFilter: "blur(20px)",
                      border: locked
                        ? "1px solid rgba(255,255,255,0.05)"
                        : `1px solid ${s.color}30`,
                      boxShadow: active ? `0 0 30px ${s.color}20` : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!locked) {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "translateY(-4px)";
                        el.style.boxShadow = `0 16px 40px rgba(0,0,0,0.4), 0 0 30px ${s.color}25`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = active ? `0 0 30px ${s.color}20` : "none";
                    }}
                  >
                    {/* Step number */}
                    <div
                      className="mb-1 text-xs"
                      style={{
                        color: locked ? "#1F2937" : s.color,
                        fontFamily: "JetBrains Mono, monospace",
                        fontWeight: 600,
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                      }}
                    >
                      STEP {s.level}
                    </div>

                    <div
                      className="mb-0.5"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: locked ? "#374151" : "#E5E7EB",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {s.title}
                    </div>

                    <div
                      className="mb-3"
                      style={{
                        color: locked ? "#1F2937" : s.color,
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "0.68rem",
                        fontWeight: 500,
                      }}
                    >
                      {s.cert}
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {s.topics.map((t) => (
                        <span
                          key={t}
                          className="px-1.5 py-0.5 rounded text-xs"
                          style={{
                            background: locked ? "rgba(255,255,255,0.03)" : `${s.color}10`,
                            color: locked ? "#1F2937" : "#6B7280",
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.6rem",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div
                      className="flex items-center gap-1 text-xs"
                      style={{
                        color: locked ? "#1F2937" : "#6B7280",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      ⏱ {s.duration}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA bar */}
        <div
          className="mt-14 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(0,184,255,0.05))",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          <div>
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, color: "#E5E7EB", fontSize: "1.05rem" }}>
              Ready to start your certification journey?
            </div>
            <div style={{ color: "#6B7280", fontFamily: "Inter, sans-serif", fontSize: "0.83rem", marginTop: "4px" }}>
              Join our next CLF-C02 study cohort — starts every month.
            </div>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-200"
            style={{
              background: "linear-gradient(135deg,#7C3AED,#5B21B6)",
              color: "#fff",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: "0.88rem",
              boxShadow: "0 0 25px rgba(124,58,237,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(124,58,237,0.65)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(124,58,237,0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Enroll in Study Cohort <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
