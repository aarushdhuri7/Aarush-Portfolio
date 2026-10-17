"use client";

import React from "react";
import Image from "next/image";
import { PokeBall } from "./PokeBall";
import { Cloud, Server, Shield, Zap, Cpu, Terminal, ArrowUpRight, Database } from "lucide-react";

export const CloudGym: React.FC = () => {
  return (
    <section
      id="region-cloudgym"
      className="relative min-h-screen py-24 bg-gradient-to-b from-[#122240] via-[#102047] to-[#181838] flex items-center overflow-hidden"
    >
      {/* High-altitude cloud layers & atmospheric lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -right-20 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-10 -left-20 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]" />

        {/* Floating animated clouds in background */}
        <div className="absolute top-1/4 left-5 opacity-20 animate-float">
          <Cloud className="w-48 h-48 text-sky-200" />
        </div>
        <div className="absolute bottom-1/3 right-10 opacity-15 animate-float-reverse">
          <Cloud className="w-64 h-64 text-indigo-300" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-950/40 border border-yellow-500/40 text-yellow-300 text-xs font-semibold backdrop-blur-md mb-3">
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
            <span>REGION 5: CLOUD GYM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            HIGH-ALTITUDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-sky-300">CLOUD GYM</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Scalable Cloud Architectures • AWS Systems & Docker Containerization Arena
          </p>
        </div>

        {/* Cloud Gym Colosseum Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Zapdos Legendary Guardian & Gym Architecture */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-900/60 rounded-3xl border border-yellow-500/30 text-center relative overflow-hidden">
            
            {/* Arena Ring Graphics */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent pointer-events-none" />

            {/* Gym Badge Emblem */}
            <div className="flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/40 px-3 py-1 rounded-full text-xs font-bold text-yellow-300 mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>THUNDER CLOUD GYM BADGE</span>
            </div>

            {/* Zapdos Artwork */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 animate-float">
              <Image
                src="/images/pokemon/zapdos.png"
                alt="Zapdos Gym Guardian"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <h3 className="text-xl font-bold text-white mt-4">Zapdos • Gym Colosseum Guardian</h3>
            <p className="text-xs text-slate-300 max-w-sm mt-1">
              Symbolizing high-availability, instant failovers, and electric compute throughput across cloud instances.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-slate-950 border border-yellow-500/30 text-yellow-300">
                AWS Rating: 9/10
              </span>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-slate-950 border border-blue-500/30 text-blue-300">
                Docker: 8/10
              </span>
            </div>
          </div>

          {/* Right Column: Featured Infrastructure Pillars */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* AWS Pillar Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-yellow-500/20 hover:border-yellow-400/50 transition-all shadow-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Amazon Web Services (AWS)</h4>
                    <span className="text-xs font-mono text-amber-400 font-semibold">Self-Assessed Proficiency: 9/10</span>
                  </div>
                </div>
                <PokeBall size={24} />
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                Experience configuring scalable cloud components: EC2 compute virtual machines, S3 storage buckets for data pipelines, IAM access policies, and serverless architectures for responsive backend workloads.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["Amazon EC2", "Amazon S3", "IAM Security", "Serverless Logic", "VPC Networking"].map((tag) => (
                  <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Docker Pillar Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-blue-500/20 hover:border-blue-400/50 transition-all shadow-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-400/40 text-blue-300">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Docker & Containerization</h4>
                    <span className="text-xs font-mono text-blue-400 font-semibold">Self-Assessed Proficiency: 8/10</span>
                  </div>
                </div>
                <PokeBall size={24} />
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                Packaging microservices and data science applications into portable, reproducible OCI containers. Writing multi-stage Dockerfiles, managing container networks, and isolating local Ollama/FastAPI environments.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["Docker Engine", "Container Isolation", "Multi-stage Builds", "Volume Mapping", "Microservices"].map((tag) => (
                  <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Scalable Cloud Engineering Philosophy */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
              <Terminal className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-xs text-slate-300">
                <span className="text-emerald-300 font-bold">Cloud Engineering Philosophy:</span> Building AI systems that are not just trained locally in notebooks, but architected to scale reliably across production cloud infrastructure.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
