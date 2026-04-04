export default function ReadmeFooter() {
  return (
    <footer className="retro-panel terminal-window pixel-corners p-6 md:p-10">
      <h2 className="font-mono text-base text-[#9dffcd] md:text-lg"># morgado.dev.br</h2>
      <p className="ui-label mt-1">generated with party buffs</p>
      <div className="mt-4 space-y-2 text-base md:text-lg">
        <p>
          <span className="terminal-prompt">&gt;</span> <span className="text-[#ffe28a]">Content:</span> AI
        </p>
        <p>
          <span className="terminal-prompt">&gt;</span> <span className="text-[#ffe28a]">Code:</span> Copilot
        </p>
        <p>
          <span className="terminal-prompt">&gt;</span> <span className="text-[#ffe28a]">Design:</span> ChatGPT
        </p>
        <p>
          <span className="terminal-prompt">&gt;</span> <span className="text-[#ffe28a]">Curation:</span> Morgado
        </p>
      </div>
    </footer>
  );
}
