import React from "react";

interface TrainerAvatarProps {
  size?: number;
  className?: string;
}

export const TrainerAvatar: React.FC<TrainerAvatarProps> = ({
  size = 180,
  className = "",
}) => {
  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer subtle atmospheric aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 via-indigo-500/20 to-purple-500/20 blur-xl animate-pulse" />

      {/* Mysterious Trainer Silhouette / Shadow Figure */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-2xl"
      >
        <defs>
          <radialGradient id="shadowBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#090D16" />
          </radialGradient>
          <linearGradient id="silhouetteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>

        {/* Circular Stadium Frame */}
        <circle cx="100" cy="100" r="95" fill="url(#shadowBg)" stroke="#38BDF8" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="91" stroke="#1E3A8A" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />

        {/* Subtle Tech Grid Lines */}
        <line x1="20" y1="130" x2="180" y2="130" stroke="#38BDF8" strokeWidth="0.75" opacity="0.2" />
        <line x1="100" y1="20" x2="100" y2="180" stroke="#38BDF8" strokeWidth="0.75" opacity="0.2" />

        {/* Trainer Shadow Figure - Head & Cap Silhouette */}
        {/* Cap Visor silhouette */}
        <path
          d="M58 84 C58 72, 80 62, 100 62 C120 62, 142 72, 142 84 C130 89, 70 89, 58 84 Z"
          fill="#1E293B"
          opacity="0.8"
        />
        {/* Head / Face silhouette */}
        <circle cx="100" cy="85" r="28" fill="url(#silhouetteGrad)" stroke="#475569" strokeWidth="1.5" />

        {/* Shoulders / Torso silhouette */}
        <path
          d="M36 188 C38 148, 64 132, 100 132 C136 132, 162 148, 164 188 Z"
          fill="url(#silhouetteGrad)"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* Subtle glow rim for silhouette outline */}
        <circle cx="100" cy="85" r="27" stroke="#38BDF8" strokeWidth="0.75" opacity="0.3" fill="none" />
        <path
          d="M38 186 C41 150, 66 134, 100 134 C134 134, 159 150, 162 186"
          stroke="#38BDF8"
          strokeWidth="0.75"
          opacity="0.3"
          fill="none"
        />
      </svg>
    </div>
  );
};
