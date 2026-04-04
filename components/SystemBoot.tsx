"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

const bootLines = ["SYSTEM INITIALIZING...", "Scanning entity...", "Player detected."];

export default function SystemBoot() {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      return;
    }

    const timer = window.setInterval(() => {
      setStep((prev) => {
        if (prev >= bootLines.length) {
          window.clearInterval(timer);
          return prev;
        }

        return prev + 1;
      });
    }, 680);

    return () => window.clearInterval(timer);
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle("modal-open", open);

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  const ready = useMemo(() => step >= bootLines.length, [step]);

  return (
    <>
      {open && mounted
        ? createPortal(
            <div className="system-modal-overlay" role="dialog" aria-modal="true" aria-label="System notification">
              <div className="system-modal">
                <div className="system-modal-header">
                  <div className="system-modal-icon">!</div>
                  <div className="system-modal-title">NOTIFICATION</div>
                </div>

                <p className="system-modal-text">New Visitor Detectec!</p>
                <p className="system-modal-text system-modal-text-soft">Continue?</p>

                <button
                  className="system-modal-button"
                  onClick={() => {
                    setStep(0);
                    setOpen(false);
                  }}
                  type="button"
                >
                  CONTINUE
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}

      <section className="hud-panel hud-boot" id="boot-screen">
        <span className="hud-panel-edge hud-panel-edge-left" />
        <span className="hud-panel-edge hud-panel-edge-right" />
        <div className="hud-panel-header">
          <p className="hud-kicker">SYSTEM INTERFACE</p>
          <span className="hud-panel-track">sequence_01</span>
        </div>
        <div className="hud-divider" />
        <div className="mt-4 space-y-2 text-sm text-[#b7f6ff] md:text-base">
          {bootLines.map((line, index) => (
            <p key={line} className={index < step ? "boot-line-visible" : "boot-line-hidden"}>
              {line}
            </p>
          ))}
        </div>

        {ready ? (
          <div className="mt-6 space-y-1 text-sm text-[#d9f5ff] md:text-base">
            <p>Name: Rafael Morgado</p>
            <p>Class: Backend Developer</p>
            <p>Specialization: Data Systems & APIs</p>
            <a className="hud-button mt-5 inline-flex" href="#status-window">
              OPEN STATUS WINDOW
            </a>
          </div>
        ) : (
          <p className="mt-6 text-xs text-[#6edfff]">Booting interface...</p>
        )}
      </section>
    </>
  );
}
