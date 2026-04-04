"use client";

import { useEffect, useRef, useState } from "react";

type Attribute = {
  name: string;
  value: number;
};

type AttributesPanelProps = {
  attributes: Attribute[];
};

const METER_SEGMENTS = 18;

function getMeter(value: number) {
  const filled = Math.round((value / 100) * METER_SEGMENTS);
  return `${"#".repeat(filled)}${".".repeat(METER_SEGMENTS - filled)}`;
}

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

  return (
    <section ref={ref} id="attributes" className="hud-panel">
      <span className="hud-panel-edge hud-panel-edge-left" />
      <span className="hud-panel-edge hud-panel-edge-right" />
      <div className="hud-panel-header">
        <p className="hud-kicker">ATTRIBUTES</p>
        <span className="hud-panel-track">neural_profile</span>
      </div>
      <div className="hud-divider" />
      <div className="mt-6 space-y-5">
        {attributes.map((attribute) => (
          <div key={attribute.name}>
            <div className="flex items-center justify-between text-sm md:text-base">
              <span className="font-medium text-[#dbf8ff]">{attribute.name}</span>
              <span className="text-[#7cf2ff]">{attribute.value}</span>
            </div>
            <div className="attribute-shell mt-2">
              <div
                className="attribute-fill"
                style={{ width: visible ? `${attribute.value}%` : "0%" }}
                aria-label={`${attribute.name} ${attribute.value}`}
              />
            </div>
            <p className="mt-1 text-xs text-[#8ac5da]">[{getMeter(attribute.value)}]</p>
          </div>
        ))}
      </div>
    </section>
  );
}
