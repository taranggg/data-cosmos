"use client";

import React from "react";
import { World } from "./ui/globe";

type Props = {
  data?: any[];
  globeConfig?: any;
  className?: string;
};

export default function GlobeDisplay({
  data = [],
  globeConfig = {},
  className = "",
}: Props) {
  const defaultConfig = {
    pointSize: 2,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#06b6d4",
    atmosphereAltitude: 0.12,
    polygonColor: "rgba(255,255,255,0.06)",
    emissive: "#020617",
    emissiveIntensity: 0.15,
    shininess: 0.9,
    ambientLight: "#0ea5e9",
    directionalLeftLight: "#7c3aed",
    directionalTopLight: "#60a5fa",
    pointLight: "#60f0ff",
    autoRotate: true,
    autoRotateSpeed: 0.35,
    ...globeConfig,
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="w-full h-full">
        <World globeConfig={defaultConfig} data={data} />
      </div>
      {/* subtle glow ring */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="w-80 h-80 md:w-96 md:h-96 rounded-full opacity-30"
          style={{ boxShadow: "0 0 120px 30px rgba(6,182,212,0.12)" }}
        />
      </div>
    </div>
  );
}
