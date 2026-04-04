type SideQuest = {
  name: string;
  details: string;
};

type QuestPanelProps = {
  mainQuest: string;
  sideQuests: SideQuest[];
};

export default function QuestPanel({ mainQuest, sideQuests }: QuestPanelProps) {
  return (
    <section id="quests" className="hud-panel">
      <span className="hud-panel-edge hud-panel-edge-left" />
      <span className="hud-panel-edge hud-panel-edge-right" />
      <div className="hud-panel-header">
        <p className="hud-kicker">QUEST LOG</p>
        <span className="hud-panel-track">mission_log</span>
      </div>
      <div className="hud-divider" />

      <article className="hud-card mt-5">
        <p className="text-xs uppercase tracking-[0.14em] text-[#7cf2ff]">Main Quest</p>
        <div className="hud-card-divider" />
        <p className="mt-2 text-lg text-[#e2fbff]">{mainQuest}</p>
      </article>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {sideQuests.map((quest) => (
          <article key={quest.name} className="hud-card">
            <p className="text-xs uppercase tracking-[0.14em] text-[#7cf2ff]">Side Quest</p>
            <div className="hud-card-divider" />
            <p className="mt-2 text-base text-[#e2fbff]">{quest.name}</p>
            <p className="mt-2 text-sm text-[#d2effd]">{quest.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
