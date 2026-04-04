type SectionTitleProps = {
  children: string;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="pixel-title text-xs tracking-[0.18em] text-[#a6ffd2]">{children}</h2>;
}
