import SectionTitle from "@/components/SectionTitle";

export default function AboutSection() {
  return (
    <div id="about" className="retro-panel terminal-window p-6 md:p-10">
      <SectionTitle>ABOUT</SectionTitle>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#dbffe8] md:text-lg">
        Pai, gamer e apaixonado por sistemas complexos. Curto entender o que esta por tras das coisas, melhorar
        performance e resolver bugs com cafe e calma.
      </p>
    </div>
  );
}
