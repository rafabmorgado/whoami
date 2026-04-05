"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

const bootLines = [
  "SYSTEM INITIALIZING...",
  "Scanning entity...",
  "Player detected.",
];

type SystemBootProps = {
  onBootComplete?: () => void;
};

export default function SystemBoot({ onBootComplete }: SystemBootProps) {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [started, setStarted] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [showSystemError, setShowSystemError] = useState(false);
  const [showRankDetected, setShowRankDetected] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!started) {
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
    }, 980);

    return () => window.clearInterval(timer);
  }, [started]);

  useEffect(() => {
    document.body.classList.toggle("modal-open", open);

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle("system-error-active", showSystemError);

    return () => {
      document.body.classList.remove("system-error-active");
    };
  }, [showSystemError]);

  const ready = useMemo(() => step >= bootLines.length, [step]);

  useEffect(() => {
    if (!ready || !started) {
      return;
    }

    const startErrorTimer = window.setTimeout(() => {
      setShowSystemError(true);
    }, 700);

    const errorTimer = window.setTimeout(() => {
      setShowSystemError(false);
      setShowRankDetected(true);
    }, 4300);

    const rankTimer = window.setTimeout(() => {
      setShowData(true);
      setTransitioning(true);
    }, 5700);

    const transitionTimer = window.setTimeout(() => {
      onBootComplete?.();
    }, 7900);

    return () => {
      window.clearTimeout(startErrorTimer);
      window.clearTimeout(errorTimer);
      window.clearTimeout(rankTimer);
      window.clearTimeout(transitionTimer);
    };
  }, [ready, started, onBootComplete]);

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
                    setStarted(true);
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

      {started ? (
        <section className="hud-panel hud-boot" id="boot-screen">
          <span className="hud-panel-edge hud-panel-edge-left" />
          <span className="hud-panel-edge hud-panel-edge-right" />
          {showSystemError ? <div className="system-error-center">SYSTEM ERROR!!!</div> : null}
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
            <div className="mt-6 space-y-2 text-sm text-[#d9f5ff] md:text-base">
              <div className="rank-analysis-wrap">
                <p className="rank-analysis-line">
                  Rank analising
                  <span className={`rank-dots ${showRankDetected ? "rank-dots-static" : ""}`} aria-hidden="true">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </span>
                </p>
              </div>

              {showRankDetected ? <p className="system-rank-detected">Rank S+ Detectec....</p> : null}

              {showData ? (
                <>
                  <p>Player: Rafael Morgado</p>
                  <p>Class: Senior Backend Developer</p>
                  <p>Specialization: Data Systems & APIs</p>
                  <p className="system-finalizing-label">Finalizing system transition...</p>
                  <div className="system-finalizing-bar">
                    <span className={transitioning ? "system-finalizing-bar-fill" : ""} />
                  </div>
                </>
              ) : null}
            </div>
          ) : (
            <p className="mt-6 text-xs text-[#6edfff]">Booting interface...</p>
          )}
        </section>
      ) : null}
    </>
  );
}
