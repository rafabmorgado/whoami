const navItems = [
  { href: "#hero", label: "Hero" },
  { href: "#stats", label: "Character Stats" },
  { href: "#boss-fights", label: "Boss Fights" },
  { href: "#side-quests", label: "Side Quests" },
  { href: "#about", label: "About" },
];

export default function NavBar() {
  return (
    <nav className="retro-panel terminal-window pixel-corners sticky top-4 z-50 px-4 pb-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="pixel-title mr-2 text-[10px] text-[#ffe28a]">morgado.dev.br</span>
        <div className="hud-row">
          <span className="hud-chip">online</span>
          <span className="hud-chip hud-chip-accent">lvl 27</span>
        </div>
      </div>
      <div className="divider-dots" />
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] md:text-sm">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="border border-transparent px-2 py-0.5 text-[#b9fdd8] transition hover:border-[#3ccf8c] hover:text-[#ffe28a]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
