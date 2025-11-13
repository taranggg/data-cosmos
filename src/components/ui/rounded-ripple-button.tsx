"use client";

import React, { useState } from "react";

interface RoundedRippleButtonProps {
  text?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  circleColor?: string;
}

export default function RoundedRippleButton({
  text = "Button",
  onClick,
  className = "",
  circleColor = "#173eff",
}: RoundedRippleButtonProps) {
  const [hovered, setHovered] = useState(false);

  const positions: [string, string][] = [
    ["-3.3em", "-4em"],
    ["-6em", "1.3em"],
    ["-0.2em", "1.8em"],
    ["3.5em", "1.4em"],
    ["3.5em", "-3.8em"],
  ];

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center bg-transparent text-white overflow-hidden ${className}`}
      style={{ borderRadius: 999 }}
      aria-label={typeof text === "string" ? text : undefined}
    >
      {/* blue fill overlay (behind text) */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 999,
          backgroundColor: circleColor,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(0.98)",
          transformOrigin: "center center",
          transition:
            "opacity 600ms cubic-bezier(.2,.8,.2,1), transform 600ms cubic-bezier(.2,.8,.2,1)",
          zIndex: 0,
        }}
      />

      {positions.map((pos, i) => {
        const transform = hovered
          ? "translate(-50%,-50%) scale(8)"
          : `translate(${pos[0]}, ${pos[1]})`;
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform,
              height: 22,
              width: 22,
              borderRadius: 999,
              transition:
                "transform 0.9s cubic-bezier(.2,.9,.2,1), opacity 0.9s",
              pointerEvents: "none",
              opacity: hovered ? 0.95 : 0.9,
              backgroundColor: circleColor,
              transformOrigin: "center center",
              zIndex: 1,
            }}
          />
        );
      })}

      <span className="relative z-10 px-4 py-2">{text}</span>
    </button>
  );
}
