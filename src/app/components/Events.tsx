import { useState } from "react";
import { Calendar, MapPin, Users, ChevronLeft, ChevronRight, ExternalLink, Tag } from "lucide-react";

const events = [
  {
    title: "AWS Cloud Day — Indore Edition",
    type: "Flagship Event",
    date: "June 15, 2026",
    location: "AITR Auditorium",
    attendees: 150,
    color: "#FF9900",
    tag: "Flagship",
    tagColor: "#FF9900",
    desc: "A full-day conference featuring hands-on labs, expert talks, and networking with AWS professionals from across India.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80",
    status: "Registering",
  },
  {
    title: "Serverless Architecture Bootcamp",
    type: "2-Day Bootcamp",
    date: "June 28, 2026",
    location: "CS Lab 3, AITR",
    attendees: 40,
    color: "#00B8FF",
    tag: "Hands-on",
    tagColor: "#00B8FF",
    desc: "Build and deploy serverless applications using Lambda, API Gateway, and DynamoDB in an intensive two-day workshop.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80",
    status: "Open",
  },
  {
    title: "AWS Cloud Quest Hackathon",
    type: "48h Hackathon",
    date: "July 5–6, 2026",
    location: "AITR Innovation Hub",
    attendees: 80,
    color: "#7C3AED",
    tag: "₹50K Prize",
    tagColor: "#A855F7",
    desc: "48-hour hackathon building cloud-native solutions for real-world problems. Win AWS credits and internship opportunities.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=80",
    status: "Soon",
  },
  {
    title: "CLF-C02 Certification Sprint",
    type: "Study Bootcamp",
    date: "July 12, 2026",
    location: "Online + AITR",
    attendees: 60,
    color: "#10B981",
    tag: "Weekly",
    tagColor: "#10B981",
    desc: "Intensive CLF-C02 prep with mock exams, peer Q&A, and mentoring by certified AWS professionals.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
    status: "Open",
  },
  {
    title: "AI & ML on AWS — Expert Talk",
    type: "Guest Lecture",
    date: "July 20, 2026",
    location: "Seminar Hall, AITR",
    attendees: 200,
    color: "#FF9900",
    tag: "Guest Talk",
    tagColor: "#FF9900",
    desc: "Senior AWS Engineer shares real-world insights on machine learning pipelines, SageMaker, and AI in production.",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=700&q=80",
    status: "Registering",
  },
];

function EventCard({ event }: { event: typeof events[0] }) {
  return (
    <div
      className="glass-card glow-border-anim rounded-2xl overflow-hidden transition-all duration-300 shrink-0 group"
      style={{
        width: "min(360px, 90vw)",
        background: "rgba(10,14,26,0.85)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 4px 40px rgba(0,0,0,0.5)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-6px)";
        el.style.border = `1px solid ${event.color}35`;
        el.style.boxShadow = `0 24px 60px rgba(0,0,0,0.6), 0 0 40px ${event.color}18`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.border = "1px solid rgba(255,255,255,0.07)";
        el.style.boxShadow = "0 4px 40px rgba(0,0,0,0.5)";
      }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, rgba(10,14,26,0.95) 0%, rgba(10,14,26,0.3) 60%, transparent 100%)` }}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <span
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs"
            style={{
              background: `${event.tagColor}CC`,
              color: "#fff",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: "0.7rem",
            }}
          >
            <Tag size={9} /> {event.tag}
          </span>
        </div>

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span
            className="px-2.5 py-1 rounded-full text-xs"
            style={{
              background: event.status === "Open" ? "rgba(16,185,129,0.9)"
                : event.status === "Soon" ? "rgba(124,58,237,0.9)"
                : "rgba(255,153,0,0.9)",
              color: "#fff",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.05em",
            }}
          >
            {event.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Type */}
        <div
          className="mb-1.5 text-xs"
          style={{ color: event.color, fontFamily: "JetBrains Mono, monospace", fontWeight: 500 }}
        >
          {event.type}
        </div>

        {/* Title */}
        <h3
          className="mb-3"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: "#F3F4F6",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          }}
        >
          {event.title}
        </h3>

        <p className="text-xs mb-4 leading-relaxed" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
          {event.desc}
        </p>

        {/* Meta */}
        <div className="space-y-1.5 mb-5">
          {[
            { icon: <Calendar size={11} />, val: event.date },
            { icon: <MapPin size={11} />, val: event.location },
            { icon: <Users size={11} />, val: `${event.attendees} expected` },
          ].map((m) => (
            <div key={m.val} className="flex items-center gap-2 text-xs" style={{ color: "#4B5563", fontFamily: "Inter, sans-serif" }}>
              <span style={{ color: "#6B7280" }}>{m.icon}</span>
              {m.val}
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs transition-all duration-200"
          style={{
            background: `${event.color}15`,
            border: `1px solid ${event.color}30`,
            color: event.color,
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 700,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = `${event.color}25`;
            el.style.boxShadow = `0 0 20px ${event.color}25`;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = `${event.color}15`;
            el.style.boxShadow = "none";
          }}
        >
          Register Now <ExternalLink size={11} />
        </button>
      </div>
    </div>
  );
}

export function Events() {
  const [offset, setOffset] = useState(0);
  const cardW = 380;
  const max = events.length - 3;

  return (
    <section
      id="events"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080C18 0%, #06080F 100%)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,153,0,0.2), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(255,153,0,0.08)", border: "1px solid rgba(255,153,0,0.2)" }}
            >
              <Calendar size={13} style={{ color: "#FF9900" }} />
              <span style={{ color: "#FF9900", fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "0.15em" }}>
                EVENTS & WORKSHOPS
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
              What's{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#FF9900,#00B8FF)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Happening
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span style={{ color: "#4B5563", fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem" }}>
              {events.length} upcoming events
            </span>
            <div className="flex gap-2">
              {[{ dir: "left", onClick: () => setOffset(Math.max(0, offset - 1)), disabled: offset === 0 },
                { dir: "right", onClick: () => setOffset(Math.min(Math.max(0, max), offset + 1)), disabled: offset >= max }].map((btn) => (
                <button
                  key={btn.dir}
                  onClick={btn.onClick}
                  disabled={btn.disabled}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: btn.disabled ? "rgba(255,255,255,0.03)" : "rgba(255,153,0,0.12)",
                    border: `1px solid ${btn.disabled ? "rgba(255,255,255,0.06)" : "rgba(255,153,0,0.3)"}`,
                    color: btn.disabled ? "#1F2937" : "#FF9900",
                  }}
                >
                  {btn.dir === "left" ? <ChevronLeft size={17} /> : <ChevronRight size={17} />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${offset} * (${cardW}px + 20px)))` }}
          >
            {events.map((e) => <EventCard key={e.title} event={e} />)}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => setOffset(Math.min(i, Math.max(0, max)))}
              className="rounded-full transition-all duration-300"
              style={{
                width: offset === i ? "24px" : "8px",
                height: "8px",
                background: offset === i ? "#FF9900" : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
