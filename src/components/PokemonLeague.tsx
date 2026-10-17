"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { PokeBall, UltraBall } from "./PokeBall";
import { Mail, FileText, Send, CheckCircle2, Award, Copy, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import confetti from "canvas-confetti";

export const PokemonLeague: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    triggerConfetti();
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section
      id="region-league"
      className="relative min-h-screen py-24 bg-gradient-to-b from-[#121b2d] via-[#09111e] to-[#04070d] flex items-center overflow-hidden"
    >
      {/* Summit Indigo Plateau atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 text-xs font-semibold backdrop-blur-md mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>REGION 8: POKÉMON LEAGUE SUMMIT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            THE FINAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">DESTINATION</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 font-medium">
            "The journey continues. Let's build something meaningful."
          </p>
        </div>

        {/* League Champions Card */}
        <div className="pokedex-glass rounded-3xl p-6 sm:p-12 border border-cyan-500/30 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Legendary Mewtwo Guardian */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-2xl border border-slate-800 text-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 animate-float">
                <Image
                  src="/images/pokemon/mewtwo.png"
                  alt="Mewtwo League Summit"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-cyan-300 bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-800 mb-2">
                  <UltraBall size={16} />
                  <span>POKÉMON LEAGUE CHAMPION HALL</span>
                </div>
                <h4 className="text-lg font-bold text-white">{profileData.name}</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Third-Year B.Tech Data Science • NMIMS MPSTME
                </p>
              </div>
            </div>

            {/* Right Col: Verified Direct Links & Comms Portal */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold block mb-1">
                  OFFICIAL COMMUNICATION CHANNELS
                </span>
                <h3 className="text-2xl font-black text-white">
                  Get In Touch & Collaborate
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Open for AI research discussions, data science collaborations, cloud engineering projects, and internships.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                      Direct Email (Correct Address)
                    </span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all flex items-center gap-1.5 text-xs font-semibold"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                  </button>

                  <a
                    href={`mailto:${profileData.email}`}
                    className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-cyan-600/30 transition-transform active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Mail</span>
                  </a>
                </div>
              </div>

              {/* GitHub Profile Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                      GitHub Profile
                    </span>
                    <span className="text-sm font-bold text-white">
                      github.com/aarushdhuri7
                    </span>
                  </div>
                </div>

                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-600 flex items-center gap-2 transition-all"
                >
                  <span>Open GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* LinkedIn & CV Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* LinkedIn Card */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center gap-2.5 mb-2">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold text-white">LinkedIn Profile</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-3">
                    linkedin.com/in/aarush-dhuri
                  </p>
                  {profileData.linkedinUrl ? (
                    <a
                      href={profileData.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <span>Connect on LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500 italic">
                      Pending URL configuration
                    </span>
                  )}
                </div>

                {/* CV Download Card (Documented path public/resume.pdf) */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center gap-2.5 mb-2">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-white">Curriculum Vitae</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-3">
                    Placed at <code>public/resume.pdf</code>
                  </p>
                  <a
                    href={profileData.cvPath}
                    download="Aarush_Dhuri_Resume.pdf"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Download CV Document</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Footer note */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-400">
            Aarush Dhuri • Third-Year B.Tech Data Science Portfolio • SVKM NMIMS MPSTME 2028
          </div>

        </div>

      </div>
    </section>
  );
};
