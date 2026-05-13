import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle2, Phone, ArrowRight } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const fieldStyle = (field: string): React.CSSProperties => ({
    background: focused === field ? "rgba(255,153,0,0.04)" : "rgba(255,255,255,0.02)",
    border: `1px solid ${focused === field ? "rgba(255,153,0,0.35)" : "rgba(255,255,255,0.07)"}`,
    borderRadius: "14px",
    color: "#E5E7EB",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    padding: "13px 16px",
    outline: "none",
    width: "100%",
    transition: "all 0.2s",
    boxShadow: focused === field ? "0 0 0 3px rgba(255,153,0,0.08)" : "none",
  });

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06080F 0%, #080C18 100%)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,153,0,0.2), transparent)" }} />
      <div
        className="absolute pointer-events-none"
        style={{ bottom: "0%", left: "10%", width: "500px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,153,0,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(255,153,0,0.08)", border: "1px solid rgba(255,153,0,0.2)" }}
          >
            <Mail size={13} style={{ color: "#FF9900" }} />
            <span style={{ color: "#FF9900", fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "0.15em" }}>
              CONTACT US
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
            Let's{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#FF9900,#FF5500)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect
            </span>
          </h2>
          <p
            className="mt-4 max-w-md mx-auto"
            style={{ color: "#6B7280", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
          >
            Have questions about the club, certifications, or upcoming events? We respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Club info card */}
            <div
              className="glass-card rounded-2xl p-7"
              style={{
                background: "rgba(13,18,30,0.8)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="mb-6"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, color: "#F3F4F6", fontSize: "1.1rem" }}
              >
                AWS Community Club
              </div>

              {[
                { icon: <MapPin size={16} />, label: "Location", val: "Acropolis Institute of Technology and Research, Indore, MP 453771", color: "#FF9900" },
                { icon: <Mail size={16} />, label: "Email", val: "awsclub@aitr.ac.in", color: "#00B8FF" },
                { icon: <Phone size={16} />, label: "WhatsApp", val: "+91 98765 43210", color: "#10B981" },
                { icon: <Clock size={16} />, label: "Office Hours", val: "Mon–Fri · 10 AM – 5 PM IST", color: "#7C3AED" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 mb-5 last:mb-0">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${item.color}12`,
                      border: `1px solid ${item.color}20`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: "#374151", fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", marginBottom: "2px" }}>
                      {item.label}
                    </div>
                    <div style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif", fontSize: "0.83rem", lineHeight: 1.5 }}>
                      {item.val}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map card */}
            <div
              className="relative rounded-2xl overflow-hidden h-44"
              style={{
                background: "rgba(13,18,30,0.8)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,153,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,153,0,0.04) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Glowing dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#FF9900", boxShadow: "0 0 16px #FF9900" }} />
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(255,153,0,0.3)", animation: "pulseGlow 2s ease-in-out infinite", transform: "scale(4)" }}
                  />
                </div>
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <div style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif", fontSize: "0.8rem" }}>Indore, Madhya Pradesh</div>
                <div style={{ color: "#374151", fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", marginTop: "2px" }}>22.7196°N · 75.8577°E</div>
              </div>
            </div>

            {/* Response time badge */}
            <div
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: "#10B981", boxShadow: "0 0 8px #10B981", animation: "pulseGlow 2s ease-in-out infinite" }} />
              <div>
                <div style={{ color: "#10B981", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, fontSize: "0.83rem" }}>Avg. response in &lt; 4 hours</div>
                <div style={{ color: "#374151", fontFamily: "Inter, sans-serif", fontSize: "0.72rem" }}>During office hours</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div
              className="glass-card rounded-2xl p-8"
              style={{
                background: "rgba(13,18,30,0.8)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-8 right-8 h-px rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, rgba(255,153,0,0.4), transparent)" }} />

              {sent ? (
                <div className="flex flex-col items-center justify-center py-20 gap-5">
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center"
                    style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", boxShadow: "0 0 40px rgba(16,185,129,0.2)" }}
                  >
                    <CheckCircle2 size={40} style={{ color: "#10B981" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, color: "#E5E7EB", fontSize: "1.3rem", textAlign: "center" }}>
                      Message Sent!
                    </div>
                    <div style={{ color: "#6B7280", fontFamily: "Inter, sans-serif", textAlign: "center", marginTop: "8px", fontSize: "0.88rem" }}>
                      We'll get back to you within 4 business hours.
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <div style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, color: "#F3F4F6", fontSize: "1.25rem" }}>
                      Send a Message
                    </div>
                    <div style={{ color: "#4B5563", fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", marginTop: "4px" }}>
                      // all fields marked * are required
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { field: "name", label: "Full Name *", type: "text", placeholder: "Arjun Sharma" },
                        { field: "email", label: "Email Address *", type: "email", placeholder: "you@example.com" },
                      ].map(({ field, label, type, placeholder }) => (
                        <div key={field}>
                          <label className="block mb-2 text-xs" style={{ color: "#6B7280", fontFamily: "JetBrains Mono, monospace" }}>{label}</label>
                          <input
                            type={type}
                            required={label.includes("*")}
                            value={(form as Record<string, string>)[field]}
                            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                            onFocus={() => setFocused(field)}
                            onBlur={() => setFocused(null)}
                            placeholder={placeholder}
                            style={fieldStyle(field)}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block mb-2 text-xs" style={{ color: "#6B7280", fontFamily: "JetBrains Mono, monospace" }}>Subject</label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                        placeholder="How can we help?"
                        style={fieldStyle("subject")}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-xs" style={{ color: "#6B7280", fontFamily: "JetBrains Mono, monospace" }}>Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell us more — your year of study, interests, or questions..."
                        style={{ ...fieldStyle("message"), resize: "vertical" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2.5 py-4 rounded-xl transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg,#FF9900,#FF5500)",
                        color: "#fff",
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        letterSpacing: "0.02em",
                        boxShadow: "0 0 30px rgba(255,153,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.boxShadow = "0 0 50px rgba(255,153,0,0.65), inset 0 1px 0 rgba(255,255,255,0.2)";
                        el.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.boxShadow = "0 0 30px rgba(255,153,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      <Send size={16} /> Send Message <ArrowRight size={15} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
