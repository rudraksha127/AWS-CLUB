import { useState, useRef, useEffect } from "react";
import { Bot, Send, Sparkles, User, Zap } from "lucide-react";

const quickReplies: Record<string, string> = {
  "Best AWS certifications for students?": "Start with CLF-C02 (Cloud Practitioner) — it's the perfect foundation for students. No prior experience needed, and it covers all core AWS services. Our club runs monthly study cohorts. Once you pass, progress to SAA-C03 for a strong career boost! 🚀",
  "How do I join the club?": "Joining is simple! Fill out our contact form on this page, or directly message us on Discord. There's no fee — just a passion for cloud! We'll add you to our WhatsApp group, Discord, and upcoming study cohort. See you inside! ☁️",
  "What resources are free?": "All our core resources are free for members: PDF guides, video lectures, notes, practice tests, and workshop recordings. Premium resources like mock exams and 1:1 mentoring are also free — we believe learning should have no barriers. 📚",
  "Upcoming events this month?": "This month we have: AWS Cloud Day on June 15 (flagship event!), Serverless Bootcamp on June 28, and our weekly CLF-C02 study sessions every Saturday. Check the Events section for registration links! 🎯",
};

const suggestions = [
  "Best AWS certifications for students?",
  "How do I join the club?",
  "What resources are free?",
  "Upcoming events this month?",
];

type Msg = { role: "user" | "bot"; text: string };

export function AIAssistant() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hey there! 👋 I'm CloudBot, the AWS Community Club AI. Ask me anything about certifications, events, resources, or how to join. I'm here to help you start your cloud journey!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim() || typing) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTyping(true);
    const reply = quickReplies[text] || "Great question! For the most up-to-date help, join our Discord where our certified members answer questions 24/7. You can also check our Learning Hub for resources, or reach us via the Contact form. We're here to guide your cloud journey! ☁️";
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setTyping(false);
    }, 1400);
  };

  return (
    <section
      id="ai-assistant"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080C18 0%, #06080F 100%)" }}
    >
      <div
        className="absolute pointer-events-none"
        style={{ top: "30%", right: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.25)" }}
          >
            <Sparkles size={13} style={{ color: "#7C3AED" }} />
            <span style={{ color: "#7C3AED", fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "0.15em" }}>
              AI ASSISTANT
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
            Meet Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#7C3AED,#00B8FF)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CloudBot Guide
            </span>
          </h2>
          <p
            className="mt-4 max-w-md mx-auto"
            style={{ color: "#6B7280", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}
          >
            Ask anything about AWS certifications, club activities, or resources. I'm here 24/7.
          </p>
        </div>

        {/* Chat window */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(8,12,24,0.95)",
            backdropFilter: "blur(30px)",
            border: "1px solid rgba(124,58,237,0.2)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 80px rgba(124,58,237,0.1), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Header bar */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{
              background: "rgba(124,58,237,0.08)",
              borderBottom: "1px solid rgba(124,58,237,0.15)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg,#7C3AED,#4F46E5)",
                    boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                  }}
                >
                  <Bot size={20} color="#fff" strokeWidth={2} />
                </div>
                <div
                  className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
                  style={{ background: "#10B981", borderColor: "#080C18", boxShadow: "0 0 6px #10B981", animation: "pulseGlow 2s ease-in-out infinite" }}
                />
              </div>
              <div>
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, color: "#E5E7EB", fontSize: "0.95rem" }}>
                  CloudBot AI
                </div>
                <div className="flex items-center gap-2" style={{ color: "#6B7280", fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem" }}>
                  <span>aws-community-aitr</span>
                  <span style={{ color: "#10B981" }}>● Online</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}
              >
                <Zap size={11} fill="#7C3AED" style={{ color: "#7C3AED" }} />
                <span style={{ color: "#A78BFA", fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem" }}>AI Powered</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            className="p-5 flex flex-col gap-4 overflow-y-auto"
            style={{ minHeight: "300px", maxHeight: "380px" }}
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                {/* Avatar */}
                {m.role === "bot" ? (
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", boxShadow: "0 0 12px rgba(124,58,237,0.4)" }}
                  >
                    <Bot size={14} color="#fff" />
                  </div>
                ) : (
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "linear-gradient(135deg,#FF9900,#FF5500)", boxShadow: "0 0 12px rgba(255,153,0,0.3)" }}
                  >
                    <User size={14} color="#fff" />
                  </div>
                )}

                {/* Bubble */}
                <div
                  className="max-w-xs sm:max-w-sm px-4 py-3 text-sm"
                  style={{
                    background: m.role === "user"
                      ? "linear-gradient(135deg,rgba(255,153,0,0.2),rgba(255,85,0,0.15))"
                      : "rgba(255,255,255,0.05)",
                    border: m.role === "user"
                      ? "1px solid rgba(255,153,0,0.3)"
                      : "1px solid rgba(255,255,255,0.07)",
                    borderRadius: m.role === "user" ? "18px 4px 18px 18px" : "4px 18px 18px 18px",
                    color: "#E5E7EB",
                    fontFamily: "Inter, sans-serif",
                    lineHeight: 1.65,
                    fontSize: "0.85rem",
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex gap-3">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)" }}
                >
                  <Bot size={14} color="#fff" />
                </div>
                <div
                  className="px-4 py-3.5 rounded-[4px_18px_18px_18px]"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex gap-1.5 items-center">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#7C3AED", animation: `pulseGlow 1s ease-in-out infinite`, animationDelay: `${i * 0.18}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          <div className="px-5 pb-3">
            <div
              className="mb-2 text-xs"
              style={{ color: "#374151", fontFamily: "JetBrains Mono, monospace" }}
            >
              // quick_questions
            </div>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="px-3 py-1.5 rounded-full text-xs transition-all duration-200"
                  style={{
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    color: "#A78BFA",
                    fontFamily: "Inter, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(124,58,237,0.2)";
                    el.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(124,58,237,0.1)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input bar */}
          <div className="px-5 pb-5 pt-2">
            <div
              className="flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onFocus={() => {}}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask about certifications, resources, events..."
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: "#E5E7EB", fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}
              />
              <button
                onClick={() => sendMessage(input)}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0"
                style={{
                  background: input.trim() ? "linear-gradient(135deg,#7C3AED,#4F46E5)" : "rgba(255,255,255,0.04)",
                  color: input.trim() ? "#fff" : "#374151",
                  boxShadow: input.trim() ? "0 0 15px rgba(124,58,237,0.4)" : "none",
                }}
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
