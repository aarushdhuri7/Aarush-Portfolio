"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { PokeBall, UltraBall } from "./PokeBall";
import { Cpu, GitPullRequest, ArrowDown, ShieldAlert, Bug, Zap, CheckSquare, FileText, FileCheck2, Layers, Database } from "lucide-react";

export const AILaboratory: React.FC = () => {
  const reviewPilot = projectsData.find((p) => p.id === "review-pilot") || projectsData[0];
  const [activeStep, setActiveStep] = useState<number>(2); // Default to parallel specialist swarm

  const workflowSteps = [
    {
      id: 0,
      title: "Input & PR Diff Fetcher",
      icon: GitPullRequest,
      desc: "Ingests pasted code or validates public GitHub PR URL, fetches textual diff, and enforces ~30k char ceiling."
    },
    {
      id: 1,
      title: "Coordinator Agent",
      icon: Cpu,
      desc: "Dispatches contextual prompts to all 5 specialist review agents simultaneously."
    },
    {
      id: 2,
      title: "5 Parallel Specialist Swarm",
      icon: Layers,
      desc: "Security, Bug, Performance, Testing, and Documentation agents analyze orthogonal dimensions concurrently."
    },
    {
      id: 3,
      title: "Deterministic Verifier",
      icon: FileCheck2,
      desc: "Checks output format heuristics, filters duplicates, flags malformed JSON or irregular line references."
    },
    {
      id: 4,
      title: "Aggregator & Persistence",
      icon: Database,
      desc: "Synthesizes final review report into structured findings, persisting review history via SQLAlchemy & SQLite."
    }
  ];

  return (
    <section
      id="region-ailab"
      className="relative min-h-screen py-24 bg-gradient-to-b from-[#181838] via-[#131b36] to-[#1c182c] flex items-center overflow-hidden"
    >
      {/* Background laboratory grid & glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 text-xs font-semibold backdrop-blur-md mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>REGION 6: AI LABORATORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            NEURAL RESEARCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">LABORATORY</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Professor Oak's AI Lab • Multi-Agent PR Review System Architecture (ReviewPilot)
          </p>
        </div>

        {/* Lab Architecture Core Canvas */}
        <div className="pokedex-glass rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl relative">
          
          {/* Top Bar with Lab Companion Porygon & Lucario */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <UltraBall size={32} />
              <div>
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block">
                  SYSTEM CORE: REVIEWPILOT ARCHITECTURE
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Multi-Agent Decision Support Pipeline
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-700">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/pokemon/porygon.png"
                  alt="Porygon AI Lab Assistant"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Porygon Digital Core</div>
                <div className="text-[10px] text-cyan-300">Local Ollama Qwen3 8B Swarm</div>
              </div>
            </div>
          </div>

          {/* Workflow Stepper Controls */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              const isSelected = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "bg-cyan-950/60 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-500/20"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold">STAGE 0{step.id + 1}</span>
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-xs font-bold truncate text-white">{step.title}</div>
                </button>
              );
            })}
          </div>

          {/* Interactive Flow Stage Details */}
          <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 mb-8">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Current Flow Examination: {workflowSteps[activeStep].title}</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed mb-4">
              {workflowSteps[activeStep].desc}
            </p>

            {/* If Stage 2 is active, show the 5 Parallel Agents detailed cards */}
            {activeStep === 2 && (
              <div className="mt-4 pt-4 border-t border-slate-800/80">
                <span className="text-xs uppercase font-bold text-slate-400 block mb-3">
                  The Five Specialist Agents Running Concurrently:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-900 border border-red-500/40">
                    <ShieldAlert className="w-4 h-4 text-red-400 mb-1" />
                    <div className="text-xs font-bold text-white">Security Agent</div>
                    <div className="text-[10px] text-slate-400 mt-1">Insecure calls, auth gaps, injection vectors</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-pink-500/40">
                    <Bug className="w-4 h-4 text-pink-400 mb-1" />
                    <div className="text-xs font-bold text-white">Bug Agent</div>
                    <div className="text-[10px] text-slate-400 mt-1">Logic flaws, off-by-one errors, null checks</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-purple-500/40">
                    <Zap className="w-4 h-4 text-purple-400 mb-1" />
                    <div className="text-xs font-bold text-white">Performance</div>
                    <div className="text-[10px] text-slate-400 mt-1">N+1 queries, memory bottlenecks, algorithmic cost</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40">
                    <CheckSquare className="w-4 h-4 text-emerald-400 mb-1" />
                    <div className="text-xs font-bold text-white">Testing Agent</div>
                    <div className="text-[10px] text-slate-400 mt-1">Missing unit tests & recommended test cases</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/40">
                    <FileText className="w-4 h-4 text-cyan-400 mb-1" />
                    <div className="text-xs font-bold text-white">Documentation</div>
                    <div className="text-[10px] text-slate-400 mt-1">Docstring sync, breaking changes, API clarity</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Decision Support Honest Framework Note */}
          <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Decision-Support AI • Does not auto-merge or claim medical/security infallibility
            </span>
            <span className="font-mono text-cyan-300">Local Inference: Ollama (qwen3:8b)</span>
          </div>

        </div>

      </div>
    </section>
  );
};
