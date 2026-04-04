"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import type { Skill } from "@/components/types";

type CharacterStatsSectionProps = {
  skills: Skill[];
};

export default function CharacterStatsSection({ skills }: CharacterStatsSectionProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setAnimated(true), 180);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div id="stats" className="retro-panel terminal-window pixel-corners p-6 md:p-10">
      <SectionTitle>CHARACTER STATS</SectionTitle>
      <p className="ui-label mt-2">attributes</p>
      <div className="mt-6 space-y-5 md:space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between text-base md:text-lg">
              <span className="font-medium tracking-wide text-[#dbffe8]">{skill.name}</span>
              <span className="font-semibold text-[#ffe28a]">{skill.value}</span>
            </div>
            <div className="pixel-bar-shell">
              <div
                className="pixel-bar-fill"
                style={{ width: animated ? `${skill.value}%` : "0%" }}
                aria-label={`${skill.name} ${skill.value}`}
              />
            </div>
            <p className="ascii-meter mt-1">[{"#".repeat(Math.floor(skill.value / 10))}{".".repeat(10 - Math.floor(skill.value / 10))}]</p>
          </div>
        ))}
      </div>
    </div>
  );
}
