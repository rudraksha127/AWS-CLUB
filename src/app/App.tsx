import "../styles/fonts.css";
import { Navbar }           from "./components/Navbar";
import { Hero }             from "./components/Hero";
import { About }            from "./components/About";
import { CertifiedMembers } from "./components/CertifiedMembers";
import { LearningHub }      from "./components/LearningHub";
import { Roadmap }          from "./components/Roadmap";
import { AIAssistant }      from "./components/AIAssistant";
import { Events }           from "./components/Events";
import { Community }        from "./components/Community";
import { Contact }          from "./components/Contact";
import { FloatingFAB }      from "./components/FloatingFAB";
import { Footer }           from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        background: "#0A0E1A",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <CertifiedMembers />
      <LearningHub />
      <Roadmap />
      <AIAssistant />
      <Events />
      <Community />
      <Contact />
      <Footer />
      <FloatingFAB />
    </div>
  );
}
