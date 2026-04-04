export default function FooterPanel() {
  return (
    <footer className="hud-panel">
      <p className="hud-kicker">SYSTEM INFORMATION</p>
      <div className="mt-5 grid gap-2 text-sm text-[#d2effd] md:text-base">
        <p>
          <span className="text-[#7cf2ff]">Version:</span> morgado.dev.br v1.0
        </p>
        <p>
          <span className="text-[#7cf2ff]">Core Engine:</span> Next.js
        </p>
        <p>
          <span className="text-[#7cf2ff]">Assistants:</span> AI tools
        </p>
        <p>
          <span className="text-[#7cf2ff]">Operator:</span> Rafael Morgado
        </p>
      </div>
    </footer>
  );
}
