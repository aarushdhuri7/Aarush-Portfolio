import React from "react";

interface PokeBallProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export const PokeBall: React.FC<PokeBallProps> = ({
  className = "",
  size = 40,
  animate = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${animate ? "animate-spin duration-3000 ease-in-out" : ""} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="46" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
      {/* Top half red */}
      <path
        d="M6 50A44 44 0 0 1 94 50Z"
        fill="url(#pokeRedGrad)"
      />
      {/* Bottom half white */}
      <path
        d="M6 50A44 44 0 0 0 94 50Z"
        fill="url(#pokeWhiteGrad)"
      />
      {/* Center divider black band */}
      <line x1="6" y1="50" x2="94" y2="50" stroke="#0F172A" strokeWidth="8" />
      
      {/* Outer center button */}
      <circle cx="50" cy="50" r="14" fill="#0F172A" />
      {/* Inner center button */}
      <circle cx="50" cy="50" r="9" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
      <circle cx="50" cy="50" r="4" fill="#F1F5F9" />

      {/* Gradients */}
      <defs>
        <linearGradient id="pokeRedGrad" x1="50" y1="6" x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EF4444" />
          <stop offset="1" stopColor="#DC2626" />
        </linearGradient>
        <linearGradient id="pokeWhiteGrad" x1="50" y1="50" x2="50" y2="94" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F8FAFC" />
          <stop offset="1" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const GreatBall: React.FC<PokeBallProps> = ({
  className = "",
  size = 40,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="46" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
      <path d="M6 50A44 44 0 0 1 94 50Z" fill="#2563EB" />
      <path d="M22 16L32 38" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
      <path d="M78 16L68 38" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
      <path d="M6 50A44 44 0 0 0 94 50Z" fill="#F8FAFC" />
      <line x1="6" y1="50" x2="94" y2="50" stroke="#0F172A" strokeWidth="8" />
      <circle cx="50" cy="50" r="14" fill="#0F172A" />
      <circle cx="50" cy="50" r="9" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
      <circle cx="50" cy="50" r="4" fill="#F1F5F9" />
    </svg>
  );
};

export const UltraBall: React.FC<PokeBallProps> = ({
  className = "",
  size = 40,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="46" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
      <path d="M6 50A44 44 0 0 1 94 50Z" fill="#1E293B" />
      <path d="M20 18C30 35 70 35 80 18" stroke="#F59E0B" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M6 50A44 44 0 0 0 94 50Z" fill="#F8FAFC" />
      <line x1="6" y1="50" x2="94" y2="50" stroke="#0F172A" strokeWidth="8" />
      <circle cx="50" cy="50" r="14" fill="#0F172A" />
      <circle cx="50" cy="50" r="9" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
      <circle cx="50" cy="50" r="4" fill="#F1F5F9" />
    </svg>
  );
};
