"use client";

import React, { useState } from "react";
import Image from "next/image";
import { skillsData, skillCategories, Skill } from "@/data/skills";
import { PokeBall } from "./PokeBall";
import { Sparkles, Cpu, Shield, Zap, Info, Filter, Star } from "lucide-react";

export const Pokedex: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Types");
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skillsData[0]);

  const filteredSkills = selectedCategory === "All Types"
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="region-pokedex"
      className="relative min-h-screen py-24 bg-gradient-to-b from-[#0d162d] via-[#101e38] to-[#0c1c2e] flex items-center"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/40 border border-red-500/40 text-red-300 text-xs font-semibold backdrop-blur-md mb-3">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>REGION 3: THE POKÉDEX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300">POKÉDEX</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Interactive Ability Registry • Actual Self-Assessed Ratings & Type Classification
          </p>
        </div>

        {/* High-Tech Rotom Pokédex Device Shell */}
        <div className="bg-[#B91C1C] p-4 sm:p-7 rounded-[2.5rem] shadow-2xl border-4 border-red-950 relative">
          
          {/* Top Hardware Sensors / Lights */}
          <div className="flex items-center justify-between mb-5 px-3">
            <div className="flex items-center gap-3">
              {/* Big Blue Main Sensor */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-600 via-cyan-400 to-white border-4 border-white shadow-lg pokedex-led flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white opacity-80" />
              </div>
              {/* Trio indicator LEDs */}
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-red-400 border border-red-800 animate-ping" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-yellow-800" />
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 border border-emerald-800" />
              </div>
            </div>

            <div className="flex items-center gap-2 text-red-200 text-xs font-mono font-bold bg-red-900/60 px-3 py-1 rounded-full border border-red-800">
              <PokeBall size={16} />
              <span>ROTOM-DEX v3.8</span>
            </div>
          </div>

          {/* Device Screen Body */}
          <div className="bg-[#0B0F19] rounded-2xl p-4 sm:p-6 border-2 border-slate-800 shadow-inner">
            
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none border-b border-slate-800">
              <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 mr-2" />
              {skillCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md shadow-red-500/20"
                      : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Split Screen Layout: List + Detail Viewer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Skill Entry Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[520px] overflow-y-auto pr-1">
                {filteredSkills.map((skill) => {
                  const isSelected = selectedSkill.id === skill.id;
                  return (
                    <div
                      key={skill.id}
                      onClick={() => setSelectedSkill(skill)}
                      className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? "bg-slate-800/90 border-amber-400 shadow-lg shadow-amber-500/10 scale-[1.02]"
                          : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-white text-sm">{skill.name}</h4>
                            <span
                              className="text-[10px] font-bold px-1.5 py-0.5 rounded text-white"
                              style={{ backgroundColor: skill.typeColor }}
                            >
                              {skill.pokemonType}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-400 block mt-0.5">
                            {skill.category}
                          </span>
                        </div>

                        {/* Power Rating Badge */}
                        <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-md border border-slate-800">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <span className="text-xs font-black text-amber-300 font-mono">
                            {skill.rating}/10
                          </span>
                        </div>
                      </div>

                      {/* Stat Power Meter (Type-coded segmented meter) */}
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                          <span>Proficiency Power</span>
                          <span className="font-mono text-slate-300 font-bold">{skill.rating * 10}%</span>
                        </div>
                        <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden p-0.5 border border-slate-800 flex gap-0.5">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div
                              key={i}
                              className={`h-full flex-1 rounded-sm transition-all duration-300 ${
                                i < skill.rating ? "" : "bg-transparent"
                              }`}
                              style={{
                                backgroundColor: i < skill.rating ? skill.typeColor : undefined
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Active Skill Detailed Pokédex Entry */}
              <div className="lg:col-span-5 bg-slate-950 rounded-xl p-5 border border-slate-800 flex flex-col justify-between scanline relative overflow-hidden">
                
                <div>
                  {/* Top Bar of Entry */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <PokeBall size={20} />
                      <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                        ENTRY #{selectedSkill.id.toUpperCase()}
                      </span>
                    </div>
                    <span
                      className="px-2.5 py-0.5 rounded text-xs font-bold text-white shadow-sm"
                      style={{ backgroundColor: selectedSkill.typeColor }}
                    >
                      {selectedSkill.pokemonType} TYPE
                    </span>
                  </div>

                  {/* Skill Title & Badge */}
                  <div className="space-y-1 mb-4">
                    <h3 className="text-2xl font-black text-white flex items-center justify-between">
                      <span>{selectedSkill.name}</span>
                      <span className="text-amber-400 font-mono text-xl">{selectedSkill.rating}/10</span>
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                      <Shield className="w-3.5 h-3.5" />
                      <span>{selectedSkill.badge}</span>
                    </div>
                  </div>

                  {/* Move Details / Descriptions */}
                  <div className="space-y-3">
                    <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                        Capability Analysis
                      </span>
                      <p className="text-xs text-slate-200 leading-relaxed">
                        {selectedSkill.description}
                      </p>
                    </div>

                    {/* Signature Technical Moves */}
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block mb-2 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        Signature Moves & Competencies
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedSkill.moves.map((move, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-900/60 px-2.5 py-1.5 rounded-md border border-slate-800 text-xs text-slate-300 flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedSkill.typeColor }} />
                            <span className="truncate">{move}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rotom Companion advice footnote */}
                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center gap-3">
                  <div className="relative w-10 h-10 shrink-0">
                    <Image
                      src="/images/pokemon/rotom.png"
                      alt="Rotom Pokédex"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    <span className="text-amber-300 font-bold">Rotom-Dex Note:</span> Actual self-assessed proficiency. No certifications or unearned scores fabricated.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
