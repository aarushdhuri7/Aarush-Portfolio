"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { TrainerAvatar } from "./TrainerAvatar";
import { PokeBall } from "./PokeBall";
import { Award, GraduationCap, Building2, Calendar, Target, Sparkles, CheckCircle2 } from "lucide-react";

export const TrainerProfile: React.FC = () => {
  return (
    <section
      id="region-profile"
      className="relative min-h-screen py-24 bg-gradient-to-b from-[#0a2725] via-[#09182d] to-[#0c1426] flex items-center"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-semibold backdrop-blur-md mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>REGION 2: TRAINER PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            TRAINER CARD & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">DOSSIER</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 font-normal">
            Official Data Science Trainer Registry • SVKM NMIMS MPSTME Chapter
          </p>
        </div>

        {/* The Trainer Card Container */}
        <div className="pokedex-glass rounded-3xl p-6 sm:p-10 border border-blue-500/20 relative overflow-hidden shadow-2xl">
          
          {/* Card Header Strip */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <PokeBall size={32} />
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block">
                  TRAINER ID #DS-2028-AD
                </span>
                <span className="text-xl sm:text-2xl font-black text-white">
                  {profileData.name}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                ACTIVE THIRD-YEAR
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold">
                CLASS OF 2028
              </span>
            </div>
          </div>

          {/* Grid Layout: Avatar + Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Avatar & Companion Pokemon */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center bg-slate-900/50 rounded-2xl p-6 border border-slate-800 shadow-inner">
              <TrainerAvatar size={170} />
              
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-white">{profileData.name}</h3>
                <p className="text-xs text-blue-400 font-medium">{profileData.trainerClass}</p>
              </div>

              {/* Partner Pokémon preview */}
              <div className="mt-6 w-full pt-4 border-t border-slate-800 text-center">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                  Bonded Companion
                </span>
                <div className="flex items-center justify-center gap-3 bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/images/pokemon/lucario.png"
                      alt="Lucario"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">Lucario #448</div>
                    <div className="text-[10px] text-blue-300 font-medium">Fighting / Steel • Aura Sync</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Academic & Introduction Data */}
            <div className="lg:col-span-8 space-y-5">
              
              {/* Academic Credentials Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Degree</span>
                    <span className="text-sm font-bold text-slate-100">{profileData.degree}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">College</span>
                    <span className="text-sm font-bold text-slate-100">{profileData.college}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Timeline</span>
                    <span className="text-sm font-bold text-slate-100">
                      {profileData.currentYear} • Graduating {profileData.expectedGraduation}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start gap-3">
                  <Target className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Focus</span>
                    <span className="text-sm font-bold text-slate-100">AI, ML & Cloud Systems</span>
                  </div>
                </div>
              </div>

              {/* Official Professional Introduction */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-blue-500/20 space-y-2">
                <span className="text-xs uppercase tracking-wider text-blue-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Trainer Log Entry / Professional Introduction
                </span>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  "{profileData.introduction}"
                </p>
              </div>

              {/* Career Direction */}
              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
                  Career Direction
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  {profileData.careerDirection}
                </p>
              </div>

              {/* Areas of Interest Tags */}
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-2.5">
                  Core Exploration Fields
                </span>
                <div className="flex flex-wrap gap-2">
                  {profileData.areasOfInterest.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 rounded-lg bg-blue-950/40 border border-blue-600/30 text-blue-200 text-xs font-semibold flex items-center gap-1.5 hover:border-blue-400 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
