import PixelAvatar from "@/components/PixelAvatar";
import SectionTitle from "@/components/SectionTitle";

export default function HeroSection() {
  return (
    <div id="hero" className="retro-panel terminal-window pixel-corners p-6 md:p-10">
      <div className="grid items-center gap-10 md:grid-cols-[230px_1fr]">
        <div className="mx-auto">
          <PixelAvatar />
        </div>

        <div>
          <p className="terminal-line font-mono">
            <span className="terminal-prompt">$</span>whoami
            <span className="ml-1 blink">_</span>
          </p>

          <div className="hud-row mt-3">
            <span className="hud-chip">class: backend wizard</span>
            <span className="hud-chip">guild: production survivors</span>
            <span className="hud-chip hud-chip-accent">coffee buff: active</span>
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#ecfff4] md:text-5xl">Rafael Morgado</h1>
          <p className="mt-2 text-xl text-[#7ef2b5] md:text-2xl">Backend Developer</p>

          <div className="mt-6">
            <SectionTitle>Specialized in:</SectionTitle>
          </div>
          <ul className="mt-3 space-y-1.5 text-lg text-[#d9ffe9] md:text-xl">
            <li>&gt; PL/SQL</li>
            <li>&gt; Node.js</li>
            <li>&gt; SQL systems</li>
            <li>&gt; solving weird production bugs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
