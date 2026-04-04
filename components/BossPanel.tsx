type BossEncounter = {
  name: string;
  difficulty: string;
  status: string;
};

type BossPanelProps = {
  encounters: BossEncounter[];
};

export default function BossPanel({ encounters }: BossPanelProps) {
  return (
    <section id="boss" className="hud-panel">
      <div className="hud-panel-header">
        <p className="hud-kicker">BOSS ENCOUNTERS</p>
        <span className="hud-panel-track">threat_index</span>
      </div>
      <div className="hud-divider" />
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {encounters.map((encounter) => (
          <article key={encounter.name} className="hud-card">
            <p className="hud-card-title">{encounter.name}</p>
            <div className="hud-card-divider" />
            <div className="mt-3 space-y-1 text-sm">
              <p>
                <span className="text-[#7cf2ff]">Difficulty:</span> {encounter.difficulty}
              </p>
              <p>
                <span className="text-[#7cf2ff]">Status:</span> {encounter.status}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
