import SectionTitle from "@/components/SectionTitle";
import type { SideQuest } from "@/components/types";

type SideQuestsSectionProps = {
  quests: SideQuest[];
};

export default function SideQuestsSection({ quests }: SideQuestsSectionProps) {
  return (
    <div id="side-quests">
      <SectionTitle>SIDE QUESTS</SectionTitle>
      <p className="ui-label mt-2">optional missions</p>
      <div className="mt-4 grid gap-5 md:grid-cols-3">
        {quests.map((quest, index) => (
          <article
            key={quest.title}
            className="retro-panel quest-card pixel-corners p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(126,242,181,0.2)] md:p-6"
          >
            <h3 className="text-xl font-semibold text-[#9dffcd] md:text-2xl">{quest.title}</h3>
            <p className="ui-label mt-1">slot 0{index + 1}</p>
            {quest.stack ? <p className="mt-3 text-base text-[#ffe28a] md:text-lg">Stack: {quest.stack}</p> : null}
            {quest.goal ? <p className="mt-3 text-base leading-relaxed text-[#dbffe8] md:text-lg">Goal: {quest.goal}</p> : null}
          </article>
        ))}
      </div>
    </div>
  );
}
