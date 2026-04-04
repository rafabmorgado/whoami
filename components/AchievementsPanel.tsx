type AchievementsPanelProps = {
  achievements: string[];
};

export default function AchievementsPanel({ achievements }: AchievementsPanelProps) {
  return (
    <section id="achievements" className="hud-panel">
      <p className="hud-kicker">ACHIEVEMENTS PANEL</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {achievements.map((achievement) => (
          <span key={achievement} className="achievement-chip">
            {achievement}
          </span>
        ))}
      </div>
    </section>
  );
}
