"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Phase = "logo" | "text" | "beans";

const CoffeeBeansIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left bean */}
    <ellipse cx="26" cy="40" rx="18" ry="11" transform="rotate(-20 26 40)" stroke="#C17B4A" strokeWidth="1.5" fill="none"/>
    <path d="M18 32 Q26 40 18 48" stroke="#C17B4A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* Right bean */}
    <ellipse cx="54" cy="40" rx="18" ry="11" transform="rotate(20 54 40)" stroke="#C17B4A" strokeWidth="1.5" fill="none"/>
    <path d="M62 32 Q54 40 62 48" stroke="#C17B4A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* Center bean */}
    <ellipse cx="40" cy="40" rx="11" ry="18" stroke="#C17B4A" strokeWidth="1.5" fill="none"/>
    <path d="M32 40 Q40 40 48 40" stroke="#C17B4A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [phase, setPhase] = useState<Phase>("logo");
  const [phaseFade, setPhaseFade] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("cp-loaded")) {
      setVisible(false);
      return;
    }

    const phases: Phase[] = ["logo", "beans", "text"];
    let idx = 0;

    const cycle = setInterval(() => {
      setPhaseFade(false);
      setTimeout(() => {
        idx = (idx + 1) % phases.length;
        setPhase(phases[idx]);
        setPhaseFade(true);
      }, 250);
    }, 900);

    const fade = setTimeout(() => {
      clearInterval(cycle);
      setFadeOut(true);
    }, 2800);

    const hide = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("cp-loaded", "1");
    }, 3600);

    return () => {
      clearInterval(cycle);
      clearTimeout(fade);
      clearTimeout(hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.8s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Cycling content area */}
      <div
        style={{
          width: "320px",
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.25s ease",
          opacity: phaseFade ? 1 : 0,
        }}
      >
        {phase === "logo" && (
          <div style={{ position: "relative", width: "320px", height: "100px" }}>
            <Image
              src="/assets/logos/chris-rosas-entertainment.png"
              alt="Chris Rosas Entertainment"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        )}

        {phase === "text" && (
          <div style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: "var(--font-eb-garamond), Georgia, serif",
              fontSize: "2.8rem",
              color: "#F0E6D3",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              margin: 0,
            }}>
              Coffee <em style={{ color: "#C17B4A" }}>Power</em>
            </p>
            <p style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#9C8E80",
              marginTop: "8px",
            }}>
              by Chris Rosas
            </p>
          </div>
        )}

        {phase === "beans" && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <CoffeeBeansIcon />
          </div>
        )}
      </div>

      {/* Copper divider */}
      <div style={{
        width: "40px",
        height: "1px",
        backgroundColor: "#C17B4A",
        margin: "20px 0 16px",
        opacity: 0.6,
      }} />

      {/* Loading dots */}
      <div style={{ display: "flex", gap: "6px" }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "#C17B4A",
              animation: `cp-bounce 1s ease ${i * 0.18}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes cp-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.35; }
          40% { transform: translateY(-7px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
