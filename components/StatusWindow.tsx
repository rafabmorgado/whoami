import Image from "next/image";

export default function StatusWindow() {
  return (
    <section id="status-window" className="hud-panel hud-grid-2 hud-hero">
      <span className="hud-panel-edge hud-panel-edge-left" />
      <span className="hud-panel-edge hud-panel-edge-right" />
      <div className="avatar-frame">
        <Image
          src="/imgs/avatar.png"
          alt="Rafael Morgado avatar"
          width={280}
          height={280}
          className="avatar-image"
          priority
        />
      </div>

      <div>
        <div className="hud-panel-header">
          <p className="hud-kicker">STATUS WINDOW</p>
          <span className="hud-panel-track">analysis_live</span>
        </div>
        <div className="status-title-box mt-3">STATUS</div>

        <div className="hud-divider mt-4" />

        <dl className="status-meta-grid mt-4">
          <div className="status-meta-item">
            <dt>Name</dt>
            <dd>Rafael Morgado</dd>
          </div>
          <div className="status-meta-item">
            <dt>Class</dt>
            <dd>Backend Developer</dd>
          </div>
          <div className="status-meta-item">
            <dt>Focus</dt>
            <dd>Data Processing & APIs</dd>
          </div>
          <div className="status-meta-item">
            <dt>Status</dt>
            <dd className="text-[#7cf2ff]">Active</dd>
          </div>
        </dl>

        <div className="status-block mt-5">
          <div className="status-core-row">
            <div className="status-core-stat">
              <span className="status-core-icon">+</span>
              <span>HP</span>
            </div>
            <div className="status-core-stat">
              <span className="status-core-icon">*</span>
              <span>MP</span>
            </div>
          </div>

          <div className="status-attributes-grid">
            <p>STR : 89</p>
            <p>VIT : 87</p>
            <p>AGI : 82</p>
            <p>INT : 86</p>
            <p>PER : 95</p>
            <p>AP : 91</p>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#cdefff] md:text-lg">
          Building reliable systems, solving complex data problems, and occasionally hunting production bugs.
        </p>
      </div>
    </section>
  );
}
