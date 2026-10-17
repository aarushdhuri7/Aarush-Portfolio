import React from "react";

export const PokemonCenterBuilding: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
      >
        {/* Foundation & Steps */}
        <rect x="20" y="200" width="280" height="15" rx="3" fill="#334155" />
        <rect x="40" y="190" width="240" height="12" rx="2" fill="#475569" />

        {/* Main Building Walls */}
        <path d="M50 190 L50 85 Q50 80, 55 80 L265 80 Q270 80, 270 85 L270 190 Z" fill="#F8FAFC" />
        <rect x="50" y="165" width="220" height="25" fill="#E2E8F0" />

        {/* Iconic Red Domed Roof */}
        <path
          d="M30 85 C30 25, 290 25, 290 85 Z"
          fill="#EF4444"
          stroke="#DC2626"
          strokeWidth="3"
        />
        {/* Roof Skylight / Trim */}
        <path
          d="M70 70 C70 40, 250 40, 250 70 Z"
          fill="#F87171"
          opacity="0.6"
        />

        {/* Pokéball Insignia at Roof Peak */}
        <circle cx="160" cy="50" r="18" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
        <path d="M142 50 A18 18 0 0 1 178 50 Z" fill="#EF4444" />
        <line x1="142" y1="50" x2="178" y2="50" stroke="#0F172A" strokeWidth="3" />
        <circle cx="160" cy="50" r="6" fill="#0F172A" />
        <circle cx="160" cy="50" r="3" fill="#FFFFFF" />

        {/* Center Automatic Glass Doors (Cyan tinted) */}
        <rect x="125" y="120" width="70" height="70" rx="4" fill="#0284C7" opacity="0.3" stroke="#38BDF8" strokeWidth="2" />
        <line x1="160" y1="120" x2="160" y2="190" stroke="#38BDF8" strokeWidth="2" />
        {/* Glow inside door */}
        <rect x="130" y="125" width="60" height="60" fill="#38BDF8" opacity="0.25" />

        {/* Left & Right Research Windows with Warm Light */}
        <rect x="68" y="110" width="38" height="45" rx="4" fill="#FDE047" opacity="0.85" stroke="#CBD5E1" strokeWidth="2" />
        <line x1="87" y1="110" x2="87" y2="155" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="68" y1="132" x2="106" y2="132" stroke="#94A3B8" strokeWidth="1.5" />

        <rect x="214" y="110" width="38" height="45" rx="4" fill="#FDE047" opacity="0.85" stroke="#CBD5E1" strokeWidth="2" />
        <line x1="233" y1="110" x2="233" y2="155" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="214" y1="132" x2="252" y2="132" stroke="#94A3B8" strokeWidth="1.5" />

        {/* Medical / Healing LED sign over door */}
        <rect x="120" y="98" width="80" height="15" rx="3" fill="#0F172A" stroke="#EF4444" strokeWidth="1.5" />
        <text x="160" y="109" textAnchor="middle" fill="#EF4444" fontSize="8" fontWeight="bold" fontFamily="monospace">
          POKÉMON CENTER
        </text>
      </svg>
    </div>
  );
};
