"use client";

import { useState } from "react";

import AboutPanel from "@/components/AboutPanel";
import AchievementsPanel from "@/components/AchievementsPanel";
import AttributesPanel from "@/components/AttributesPanel";
import BossPanel from "@/components/BossPanel";
import ConsoleEasterEgg from "@/components/ConsoleEasterEgg";
import FooterPanel from "@/components/FooterPanel";
import QuestPanel from "@/components/QuestPanel";
import Reveal from "@/components/Reveal";
import SkillsPanel from "@/components/SkillsPanel";
import StatusWindow from "@/components/StatusWindow";
import SystemBoot from "@/components/SystemBoot";

const attributes = [
  { name: "PL/SQL", value: 90 },
  { name: "Node.js", value: 78 },
  { name: "SQL", value: 85 },
  { name: "Java", value: 56 },
  { name: "AI Tools", value: 88 },
  { name: "Debugging", value: 94 },
];

const skills = [
  {
    title: "DATABASE MASTERY",
    level: "Advanced",
    description: "Years of experience working with complex SQL and PL/SQL systems.",
  },
  {
    title: "API ARCHITECTURE",
    level: "Advanced",
    description: "Designing and integrating backend services and APIs.",
  },
  {
    title: "SYSTEM DEBUGGING",
    level: "Expert",
    description: "Identifying and resolving critical production issues.",
  },
];

const sideQuests = [
  { name: "Investment Tracker", details: "Stack: Java + PostgreSQL" },
  { name: "Repair Shop System", details: "Stack: Node.js" },
  { name: "AI Experiments", details: "Exploring the limits of prompt-driven development." },
];

const bossEncounters = [
  {
    name: "Legacy System",
    difficulty: "S",
    status: "Cleared",
  },
  {
    name: "Complex System Integration",
    difficulty: "A",
    status: "Completed",
  },
  {
    name: "Production Bug",
    difficulty: "Unknown",
    status: "Hunting",
  },
];

const achievements = ["First Production Fix", "Legacy Whisperer", "Query Slayer", "Prompt Tamer"];

export default function Home() {
  const [bootCompleted, setBootCompleted] = useState(false);

  return (
    <div className="hud-shell min-h-screen px-4 py-7 md:px-10 md:py-12">
      <ConsoleEasterEgg />
      <main className="mx-auto max-w-6xl space-y-8 md:space-y-10">
        <SystemBoot onBootComplete={() => setBootCompleted(true)} />

        {bootCompleted ? (
          <>
            <Reveal delayMs={60}>
              <StatusWindow />
            </Reveal>

            <Reveal delayMs={100}>
              <AttributesPanel attributes={attributes} />
            </Reveal>

            <Reveal delayMs={130}>
              <SkillsPanel skills={skills} />
            </Reveal>

            <Reveal delayMs={160}>
              <QuestPanel mainQuest="Build reliable backend systems." sideQuests={sideQuests} />
            </Reveal>

            <Reveal delayMs={190}>
              <BossPanel encounters={bossEncounters} />
            </Reveal>

            <Reveal delayMs={220}>
              <AchievementsPanel achievements={achievements} />
            </Reveal>

            <Reveal delayMs={240}>
              <AboutPanel />
            </Reveal>

            <Reveal delayMs={260}>
              <FooterPanel />
            </Reveal>
          </>
        ) : null}
      </main>
    </div>
  );
}
