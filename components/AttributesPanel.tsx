"use client";

import { useEffect, useRef, useState } from "react";

type Attribute = {
  name: string;
  value: number;
};

type AttributesPanelProps = {
  attributes: Attribute[];
};

export default function AttributesPanel({ attributes }: AttributesPanelProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.22 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const expCurrent = 20555;
  const expTotal = 99999;
  const expPercent = (expCurrent / expTotal) * 100;

  return (
    <section ref={ref} id="attributes" className="hud-panel">
      <span className="hud-panel-edge hud-panel-edge-left" />
      <span className="hud-panel-edge hud-panel-edge-right" />
      <div className="hud-panel-header">
        <p className="hud-kicker">ATTRIBUTES</p>
        <span className="hud-panel-track">neural_profile</span>
      </div>
      <div className="hud-divider" />
      <div className="attribute-board mt-6">
        <div className="attribute-exp-row">
          <p className="attribute-level">Level: 98</p>
          <p className="attribute-exp-text">EXP: 20555 / 99999</p>
        </div>

        <div className="attribute-exp-shell mt-2">
          <div className="attribute-exp-fill" style={{ width: visible ? `${expPercent}%` : "0%" }} />
        </div>

        <div className="status-core-row mt-4">
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
          {attributes.map((attribute) => (
            <p key={attribute.name}>
              {attribute.name} : {attribute.value}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
