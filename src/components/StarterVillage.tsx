"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { PokeBall, GreatBall } from "./PokeBall";
import { TrainerAvatar } from "./TrainerAvatar";
import { PokemonCenterBuilding } from "./PokemonCenterBuilding";
import { ArrowDown, Sparkles, MapPin, Compass, FileText, ChevronRight } from "lucide-react";

export const StarterVillage: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; // -15px to 15px
      const y = (e.clientY / innerHeight - 0.5) * 30; // -15px to 15px
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="region-starter"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-12 bg-gradient-to-b from-[#061220] via-[#091b2e] to-[#0a2725] transition-colors duration-700"
    >
      {/* Dynamic Animated Atmospheric Parallax Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Atmospheric Ambient Light Orbs - Parallax Layer 1 */}
        <div
          className="absolute top-10 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-400/10 blur-[130px] transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * -0.6}px, ${mousePos.y * -0.6 + scrollY * 0.15}px, 0)`
          }}
        />
        <div
          className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4 + scrollY * 0.1}px, 0)`
          }}
        />

        {/* Distant Mountains - Parallax Layer 2 */}
        <div
          className="absolute bottom-36 left-0 w-full transition-transform duration-200 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 0.25}px, ${scrollY * 0.12}px, 0)`
          }}
        >
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto opacity-25 select-none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 240 L180 140 L340 210 L560 90 L820 220 L1100 120 L1300 190 L1440 150 L1440 320 L0 320 Z"
              fill="#064E3B"
            />
          </svg>
        </div>

        {/* Midground Forest Trees - Parallax Layer 3 */}
        <div
          className="absolute bottom-20 left-0 w-full transition-transform duration-200 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 0.5}px, ${scrollY * 0.06}px, 0)`
          }}
        >
          <svg
            viewBox="0 0 1440 220"
            className="w-full h-auto opacity-45 select-none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 160 Q 60 120, 120 160 T 240 160 T 360 160 T 480 160 T 600 160 T 720 160 T 840 160 T 960 160 T 1080 160 T 1200 160 T 1320 160 T 1440 160 L1440 220 L0 220 Z"
              fill="#047857"
            />
          </svg>
        </div>
      </div>

      {/* Main Content Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Trainer Identity & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Region & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>REGION 1: STARTER VILLAGE</span>
              <span className="text-slate-500">•</span>
              <span className="text-amber-300">Route 1 Gateway</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-sm leading-none">
                AARUSH <span className="text-amber-400">DHURI</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-200">
                Third-Year B.Tech Data Science Student at NMIMS MPSTME
              </p>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
                Exploring Artificial Intelligence, Machine Learning, and Cloud Computing through multi-agent systems and data-driven architectures.
              </p>
            </div>

            {/* Quick Stats / Badges Grid */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>NMIMS MPSTME, Mumbai</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 backdrop-blur-sm">
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                <span>Class of 2028</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-amber-300 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Partner Pokémon: Lucario & Pikachu</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={() => scrollTo("region-profile")}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center gap-2 transform active:scale-95 transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Explore My Journey</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("region-expedition")}
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-slate-500 shadow-md flex items-center gap-2 transition-all cursor-pointer"
              >
                <PokeBall size={18} />
                <span>View My Projects</span>
              </button>

              <a
                href={profileData.cvPath}
                download="Aarush_Dhuri_CV.pdf"
                className="px-5 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-600 flex items-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Skip Intro Anchor */}
            <div>
              <button
                onClick={() => scrollTo("region-expedition")}
                className="text-xs text-slate-400 hover:text-emerald-300 underline decoration-dotted transition-colors cursor-pointer"
              >
                Skip introduction directly to projects →
              </button>
            </div>
          </div>

          {/* Right Column: Visual Pokémon World Scene with Interactive Depth */}
          <div
            className="lg:col-span-5 relative flex flex-col items-center justify-center transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px, 0)`
            }}
          >
            {/* World Fixture: Pokémon Center in the midground */}
            <div className="w-64 sm:w-80 opacity-90 hover:opacity-100 transition-opacity drop-shadow-2xl">
              <PokemonCenterBuilding />
            </div>

            {/* Foreground Scene: Trainer Avatar & Partner Pokémon Pikachu */}
            <div className="relative -mt-12 flex items-end justify-center gap-4 z-20">
              
              {/* Pikachu Sprite Animated */}
              <div className="relative group text-center">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 animate-float">
                  <Image
                    src="/images/pokemon/pikachu.png"
                    alt="Pikachu resting in Starter Village"
                    fill
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </div>
                <div className="px-2.5 py-0.5 rounded-full bg-slate-900/80 border border-amber-400/30 text-[10px] text-amber-300 font-bold backdrop-blur-sm inline-block shadow-sm">
                  Pikachu #025
                </div>
              </div>

              {/* Trainer Avatar */}
              <div className="relative z-10">
                <TrainerAvatar size={150} />
                <div className="text-center mt-2">
                  <span className="text-[11px] font-bold text-slate-200 bg-slate-900/90 px-3 py-1 rounded-md border border-slate-700 shadow-md">
                    Trainer Aarush
                  </span>
                </div>
              </div>

              {/* Eevee Sprite Animated */}
              <div className="relative group text-center hidden sm:block">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 animate-float-reverse">
                  <Image
                    src="/images/pokemon/eevee.png"
                    alt="Eevee companion"
                    fill
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </div>
                <div className="px-2.5 py-0.5 rounded-full bg-slate-900/80 border border-orange-400/30 text-[10px] text-orange-300 font-bold backdrop-blur-sm inline-block shadow-sm">
                  Eevee #133
                </div>
              </div>
            </div>

            {/* Pokéball items on the path */}
            <div className="flex items-center gap-4 mt-5">
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/70 px-3 py-1.5 rounded-full border border-slate-800 shadow-sm">
                <PokeBall size={18} />
                <span>Item: Data Compass</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/70 px-3 py-1.5 rounded-full border border-slate-800 shadow-sm">
                <GreatBall size={18} />
                <span>Found: AI Core</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Layered Foreground Tall Grass & Winding Path */}
      <div className="relative z-10 w-full mt-8">
        {/* Winding dirt path */}
        <div className="h-6 w-full bg-gradient-to-r from-amber-950/20 via-amber-900/40 to-amber-950/20 border-t border-amber-800/30" />

        {/* Tall Grass blades overlay */}
        <div
          className="h-12 w-full bg-[#053d2f] relative overflow-hidden flex items-end transition-transform duration-200 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * -0.8}px, 0, 0)`
          }}
        >
          <svg viewBox="0 0 1200 60" className="w-full h-12 text-[#047857] fill-current animate-grass">
            <path d="M0,60 L20,10 L40,60 L60,15 L80,60 L100,5 L120,60 L140,20 L160,60 L180,12 L200,60 L220,8 L240,60 L260,18 L280,60 L300,10 L320,60 L340,15 L360,60 L380,5 L400,60 L420,12 L440,60 L460,8 L480,60 L500,20 L520,60 L540,14 L560,60 L580,8 L600,60 L620,18 L640,60 L660,10 L680,60 L700,12 L720,60 L740,6 L760,60 L780,16 L800,60 L820,10 L840,60 L860,14 L880,60 L900,8 L920,60 L940,18 L960,60 L980,12 L1000,60 L1020,15 L1040,60 L1060,5 L1080,60 L1100,18 L1120,60 L1140,10 L1160,60 L1180,14 L1200,60 Z" />
          </svg>
        </div>

        {/* Scroll indicator prompt */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs text-emerald-300 cursor-pointer animate-bounce select-none"
          onClick={() => scrollTo("region-profile")}
        >
          <span className="text-[11px] font-medium tracking-wide">Venture forward</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </div>
    </section>
  );
};
