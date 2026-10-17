"use client";

import React, { useState } from "react";
import Image from "next/image";
import { interestsData, Interest } from "@/data/interests";
import { PokeBall } from "./PokeBall";
import { Sparkles, Gamepad2, Video, Activity, Utensils, Heart } from "lucide-react";

export const WorldOfInterests: React.FC = () => {
  const [activeInterest, setActiveInterest] = useState<Interest>(interestsData[0]);

  const getIcon = (id: string) => {
    switch (id) {
      case "basketball":
        return <Activity className="w-5 h-5 text-amber-400" />;
      case "motion-graphics":
        return <Video className="w-5 h-5 text-purple-400" />;
      case "food-exploration":
        return <Utensils className="w-5 h-5 text-yellow-400" />;
      case "story-games":
        return <Gamepad2 className="w-5 h-5 text-rose-400" />;
      default:
        return <Heart className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <section
      id="region-interests"
      className="relative min-h-screen py-24 bg-gradient-to-b from-[#1c182c] via-[#241a2e] to-[#121b2d] flex items-center overflow-hidden"
    >
      {/* Campfire warmth & cozy glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/40 border border-orange-500/40 text-orange-300 text-xs font-semibold backdrop-blur-md mb-3">
            <Heart className="w-3.5 h-3.5 text-orange-400" />
            <span>REGION 7: WORLD OF INTERESTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            TRAINER HOBBIES & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-rose-400">CREATIVE CRAFT</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            The Personal Dimension • Court Discipline, Motion Design, Food Quests & AAA Storytelling
          </p>
        </div>

        {/* 4 Interests Discovery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {interestsData.map((item) => {
            const isSelected = activeInterest.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveInterest(item)}
                className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-900 border-orange-400 shadow-xl shadow-orange-500/15 -translate-y-1"
                    : "bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {getIcon(item.id)}
                    </div>
                    <PokeBall size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800">
                  <span className="text-[11px] text-slate-400">Buddy: {item.pokemonBuddy}</span>
                  <div className="relative w-8 h-8">
                    <Image
                      src={item.pokemonImage}
                      alt={item.pokemonBuddy}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-400" />
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Interest Deep Dive Canvas */}
        <div className="pokedex-glass rounded-3xl p-6 sm:p-10 border border-orange-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Description & Personal Highlights */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm" style={{ backgroundColor: activeInterest.color }}>
                  {activeInterest.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">Interest ID: #{activeInterest.id.toUpperCase()}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activeInterest.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {activeInterest.description}
              </p>

              <div>
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider block mb-2">
                  Personal Highlights & Depth:
                </span>
                <div className="space-y-2">
                  {activeInterest.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-center gap-2.5"
                    >
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Pokemon Companion Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-900/60 rounded-2xl border border-slate-800 text-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 animate-float">
                <Image
                  src={activeInterest.pokemonImage}
                  alt={activeInterest.pokemonBuddy}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-base font-bold text-white mt-3">
                {activeInterest.pokemonBuddy}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Adventure companion sharing Aarush's creative spirit.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
