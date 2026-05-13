import { useState } from "react";
import { FileText, Video, BookOpen, HelpCircle, Download, Play, ChevronRight, Clock, Search, Filter } from "lucide-react";

const tabs = [
  { id: "pdfs",    icon: FileText,    label: "PDF Guides",  count: 6,  color: "#FF9900" },
  { id: "videos",  icon: Video,       label: "Videos",      count: 6,  color: "#00B8FF" },
  { id: "notes",   icon: BookOpen,    label: "Notes",       count: 6,  color: "#7C3AED" },
  { id: "quizzes", icon: HelpCircle,  label: "Quizzes",     count: 6,  color: "#10B981" },
];

const content: Record<string, Array<{ title: string; meta: string; tag: string; color: string; size?: string }>> = {
  pdfs: [
    { title: "AWS Cloud Practitioner Study Guide",   meta: "142 pages", tag: "CLF-C02", color: "#FF9900", size: "8.4 MB" },
    { title: "Solutions Architect Cheat Sheet",      meta: "68 pages",  tag: "SAA-C03", color: "#00B8FF", size: "3.2 MB" },
    { title: "IAM & Security Deep Dive",             meta: "55 pages",  tag: "Security",color: "#7C3AED", size: "2.1 MB" },
    { title: "EC2 + VPC Networking Guide",           meta: "89 pages",  tag: "Network", color: "#10B981", size: "5.6 MB" },
    { title: "S3 & Storage Services Complete",       meta: "47 pages",  tag: "Storage", color: "#FF9900", size: "1.8 MB" },
    { title: "Serverless Architecture Patterns",     meta: "73 pages",  tag: "Lambda",  color: "#00B8FF", size: "4.3 MB" },
  ],
  videos: [
    { title: "AWS Crash Course for Beginners",   meta: "4h 20m · 24 lessons", tag: "Beginner", color: "#FF9900" },
    { title: "EC2 Deep Dive Series",             meta: "2h 15m · 12 lessons", tag: "Compute",  color: "#00B8FF" },
    { title: "Building Serverless Apps",         meta: "3h 05m · 18 lessons", tag: "Lambda",   color: "#7C3AED" },
    { title: "AWS CLI Masterclass",              meta: "1h 45m · 10 lessons", tag: "DevOps",   color: "#10B981" },
    { title: "CloudFormation from Scratch",      meta: "2h 30m · 15 lessons", tag: "IaC",      color: "#FF9900" },
    { title: "Machine Learning on AWS",          meta: "5h 10m · 30 lessons", tag: "ML/AI",    color: "#00B8FF" },
  ],
  notes: [
    { title: "Week 1: Cloud Fundamentals",   meta: "12 topics", tag: "Foundation", color: "#FF9900" },
    { title: "Week 2: Core Services",        meta: "8 topics",  tag: "Core",       color: "#00B8FF" },
    { title: "Week 3: Security & Identity",  meta: "10 topics", tag: "IAM",        color: "#7C3AED" },
    { title: "Week 4: Databases",            meta: "7 topics",  tag: "Database",   color: "#10B981" },
    { title: "Week 5: Networking Deep Dive", meta: "9 topics",  tag: "VPC",        color: "#FF9900" },
    { title: "Week 6: Exam Strategy",        meta: "Tips+Tests",tag: "Exam Prep",  color: "#00B8FF" },
  ],
  quizzes: [
    { title: "CLF-C02 Practice Test 1",  meta: "65 Q · 90 min",  tag: "Practitioner", color: "#FF9900" },
    { title: "CLF-C02 Practice Test 2",  meta: "65 Q · 90 min",  tag: "Practitioner", color: "#FF9900" },
    { title: "SAA-C03 Full Mock Exam",   meta: "65 Q · 130 min", tag: "Architect",    color: "#00B8FF" },
    { title: "EC2 & Networking Quiz",    meta: "30 Q · 30 min",  tag: "Compute",      color: "#7C3AED" },
    { title: "IAM & Security Quiz",      meta: "25 Q · 25 min",  tag: "Security",     color: "#10B981" },
    { title: "S3 & Storage Deep Quiz",   meta: "20 Q · 20 min",  tag: "Storage",      color: "#FF9900" },
  ],
};

function ResourceRow({ title, meta, tag, color, size, type }: {
  title: string; meta: string; tag: string; color: string; size?: string; type: string;
}) {
  const isVideo = type === "videos";
  const isQuiz  = type === "quizzes";

  return (
    <div
      className="glass-card group flex items-center justify-between p-4 rounded-xl transition-all duration-200 cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = `${color}08`;
        el.style.border = `1px solid ${color}28`;
        el.style.transform = "translateX(4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(255,255,255,0.02)";
        el.style.border = "1px solid rgba(255,255,255,0.05)";
        el.style.transform = "translateX(0)";
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${color}15`, color, border: `1px solid ${color}20` }}
        >
          {isVideo ? <Play size={14} fill={color} /> : isQuiz ? <HelpCircle size={14} /> : <FileText size={14} />}
        </div>
        <div>
          <div style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "0.88rem" }}>
            {title}
          </div>
          <div className="flex items-center gap-2 mt-0.5" style={{ color: "#4B5563", fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem" }}>
            <Clock size={9} />
            {meta}
            {size && <span className="text-gray-600">· {size}</span>}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <span
          className="hidden sm:block px-2.5 py-0.5 rounded-full text-xs"
          style={{ background: `${color}15`, color, fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", border: `1px solid ${color}25` }}
        >
          {tag}
        </span>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
          style={{ background: "rgba(255,255,255,0.04)", color: "#4B5563" }}
        >
          {isVideo
            ? <Play size={13} className="group-hover:text-white transition-colors" />
            : <Download size={13} className="group-hover:text-white transition-colors" />}
        </div>
      </div>
    </div>
  );
}

export function LearningHub() {
  const [active, setActive] = useState("pdfs");
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <section
      id="learning"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06080F 0%, #080C18 100%)" }}
    >
      <div
        className="absolute pointer-events-none"
        style={{ top: "20%", left: "-5%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,184,255,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(0,184,255,0.08)", border: "1px solid rgba(0,184,255,0.2)" }}
          >
            <BookOpen size={13} style={{ color: "#00B8FF" }} />
            <span style={{ color: "#00B8FF", fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "0.15em" }}>
              LEARNING HUB
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
            All Resources.{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#00B8FF,#7C3AED)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              One Place.
            </span>
          </h2>
        </div>

        {/* Dashboard */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(10,14,26,0.9)",
            backdropFilter: "blur(30px)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Window chrome */}
          <div
            className="flex items-center justify-between px-5 py-3.5"
            style={{ background: "rgba(0,0,0,0.3)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
            </div>
            <div
              className="text-xs flex items-center gap-1.5"
              style={{ color: "#374151", fontFamily: "JetBrains Mono, monospace" }}
            >
              aws-community-aitr / learning-hub
            </div>
            <div className="w-12" />
          </div>

          {/* Tabs + Search bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <div className="flex gap-1 p-1 rounded-xl" style={{ background: "rgba(0,0,0,0.35)" }}>
              {tabs.map((t) => {
                const Icon = t.icon;
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs transition-all duration-250"
                    style={{
                      background: isActive ? `${t.color}15` : "transparent",
                      color: isActive ? t.color : "#4B5563",
                      border: isActive ? `1px solid ${t.color}30` : "1px solid transparent",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    <Icon size={13} />
                    <span className="hidden sm:block">{t.label}</span>
                    <span
                      className="hidden sm:block px-1.5 py-0 rounded-full text-xs"
                      style={{
                        background: isActive ? `${t.color}25` : "rgba(255,255,255,0.06)",
                        color: isActive ? t.color : "#374151",
                        fontSize: "0.65rem",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {t.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div
              className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg ml-auto"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <Search size={13} style={{ color: "#374151" }} />
              <input
                type="text"
                placeholder={`Search ${activeTab.label}...`}
                className="flex-1 bg-transparent outline-none text-xs"
                style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
              />
              <Filter size={12} style={{ color: "#374151" }} />
            </div>
          </div>

          {/* Resource list */}
          <div className="p-5 flex flex-col gap-2.5">
            {content[active].map((item) => (
              <ResourceRow key={item.title} {...item} type={active} />
            ))}
          </div>

          {/* Footer */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(0,0,0,0.2)" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: activeTab.color, boxShadow: `0 0 6px ${activeTab.color}` }}
              />
              <span style={{ color: "#374151", fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem" }}>
                {content[active].length} resources available · Free for all members
              </span>
            </div>
            <button
              className="flex items-center gap-1 text-xs transition-colors hover:opacity-80"
              style={{ color: activeTab.color, fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Browse all <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
