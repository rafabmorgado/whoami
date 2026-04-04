import SectionTitle from "@/components/SectionTitle";
import type { BossFight } from "@/components/types";

type BossFightsSectionProps = {
  fights: BossFight[];
};

export default function BossFightsSection({ fights }: BossFightsSectionProps) {
  return (
    <div id="boss-fights">
      <SectionTitle>BOSS FIGHTS</SectionTitle>
      <p className="ui-label mt-2">high level encounters</p>
      <div className="mt-4 grid gap-5 md:grid-cols-3">
        {fights.map((fight, index) => (
          <article key={fight.title} className="enemy-card p-5 md:p-6">
            <div className="enemy-titlebar">
              <h3 className="text-xl font-semibold text-[#9dffcd] md:text-2xl">{fight.title}</h3>
              <span className="enemy-rank">rank {String.fromCharCode(83 - index)}</span>
            </div>
            <p className="mt-3 text-base leading-relaxed text-[#dbffe8] md:text-lg">{fight.description}</p>
            <div className="enemy-hp" aria-label="enemy hp">
              <span />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
