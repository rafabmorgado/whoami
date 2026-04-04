type SkillCard = {
  title: string;
  level: string;
  description: string;
};

type SkillsPanelProps = {
  skills: SkillCard[];
};

export default function SkillsPanel({ skills }: SkillsPanelProps) {
  return (
    <section id="skills" className="hud-panel">
      <div className="hud-panel-header">
        <p className="hud-kicker">SKILLS PANEL</p>
        <span className="hud-panel-track">ability_matrix</span>
      </div>
      <div className="hud-divider" />
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {skills.map((skill) => (
          <article key={skill.title} className="hud-card">
            <p className="hud-card-title">{skill.title}</p>
            <div className="hud-card-divider" />
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#7cf2ff]">Level: {skill.level}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#d7f2ff]">{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
