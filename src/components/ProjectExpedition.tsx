"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData, ProjectData, ProjectAgent } from "@/data/projects";
import { PokeBall, GreatBall, UltraBall } from "./PokeBall";
import {
  ExternalLink,
  Compass,
  AlertTriangle,
  Layers,
  Cpu,
  ChevronRight,
  ShieldAlert,
  Bug,
  Zap,
  CheckSquare,
  FileText,
  FileCheck2,
  Sparkles,
  ArrowRight,
  Info
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export const ProjectExpedition: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectData>(projectsData[0]);
  const [selectedAgent, setSelectedAgent] = useState<ProjectAgent | null>(
    projectsData[0].agents ? projectsData[0].agents[0] : null
  );

  return (
    <section
      id="region-expedition"
      className="relative min-h-screen py-24 bg-gradient-to-b from-[#0c1c2e] via-[#0f283c] to-[#122240] flex flex-col justify-center"
    >
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>REGION 4: PROJECT EXPEDITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            WILD PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">EXPEDITION</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Discovering Real Systems Across Multi-Agent AI, Health Predictive Analytics & Spatial Intelligence
          </p>
        </div>

        {/* 4 Interactive Project Landmark Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {projectsData.map((project, index) => {
            const isSelected = activeProject.id === project.id;
            return (
              <div
                key={project.id}
                onClick={() => {
                  setActiveProject(project);
                  if (project.agents && project.agents.length > 0) {
                    setSelectedAgent(project.agents[0]);
                  } else {
                    setSelectedAgent(null);
                  }
                }}
                className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-900 border-blue-400 shadow-xl shadow-blue-500/15 -translate-y-1"
                    : "bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50"
                }`}
              >
                {/* Top Status & Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {index === 0 ? <UltraBall size={22} /> : index === 1 ? <GreatBall size={22} /> : <PokeBall size={22} />}
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                      SITE 0{index + 1}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      project.status.includes("Flagship")
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                        : project.status.includes("Completed")
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-bold text-white text-sm line-clamp-1 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Footer Companion Pokemon preview */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] text-slate-400 font-medium">Companion: {project.pokemonCompanion}</span>
                  <div className="relative w-7 h-7">
                    <Image
                      src={project.pokemonImage}
                      alt={project.pokemonCompanion}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400" />
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed Case Study Display Area */}
        <div className="pokedex-glass rounded-3xl p-6 sm:p-10 border border-blue-500/30 shadow-2xl relative">
          
          {/* Top Banner with Project Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div className="space-y-1 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  {activeProject.category}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-bold text-amber-400">{activeProject.status}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white">
                {activeProject.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300">
                {activeProject.tagline}
              </p>
            </div>

            {/* Links / GitHub / Action Buttons */}
            <div className="flex items-center gap-3">
              {activeProject.githubUrl ? (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-700 hover:border-slate-500 flex items-center gap-2 transition-all shadow-md"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ) : (
                <div className="px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 text-xs flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 opacity-50" />
                  <span>Repo Pending Config</span>
                </div>
              )}
            </div>
          </div>

          {/* Special Flagship Layout: Multi-Agent ReviewPilot Showcase */}
          {activeProject.id === "review-pilot" && activeProject.agents && (
            <div className="space-y-8">
              {/* Problem & System Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block mb-1">
                      Problem Statement & Mission
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeProject.problemStatement}
                    </p>
                  </div>

                  <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-xs uppercase font-bold tracking-wider text-blue-400 block">
                      Confirmed Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-700 text-xs font-mono text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pokemon Lab Companion */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center bg-slate-900/40 p-6 rounded-2xl border border-slate-800 text-center">
                  <div className="relative w-36 h-36 animate-float">
                    <Image
                      src={activeProject.pokemonImage}
                      alt="Lucario Research Companion"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-white mt-2">Lucario & Porygon Lab Station</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Channeling Aura-like intuition & digital precision into multi-agent decision support.
                  </p>
                </div>
              </div>

              {/* Multi-Agent Architecture Interactive Workflow */}
              <div className="bg-slate-950/80 rounded-2xl p-6 border border-blue-500/30">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-mono uppercase text-blue-400 font-bold block">
                      PARALLEL AGENT SWARM TOPOLOGY
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-white">
                      Inspect the 8 Coordinated Agents
                    </h4>
                  </div>
                  <span className="text-xs text-slate-400 hidden sm:block">Click any agent to inspect duties</span>
                </div>

                {/* Flow Diagram Agent Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {activeProject.agents.map((agent) => {
                    const isSelected = selectedAgent?.name === agent.name;
                    return (
                      <button
                        key={agent.name}
                        onClick={() => setSelectedAgent(agent)}
                        className={`text-left p-3 rounded-xl border transition-all ${
                          isSelected
                            ? "bg-slate-800 border-amber-400 shadow-md shadow-amber-500/20 scale-[1.02]"
                            : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: agent.typeColor }}
                          />
                          <span className="text-[10px] font-mono text-slate-400 uppercase">
                            {agent.category}
                          </span>
                        </div>
                        <div className="text-xs font-bold text-white truncate">{agent.name}</div>
                        <div className="text-[10px] text-slate-400 truncate">{agent.role}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Agent Inspector Panel */}
                {selectedAgent && (
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-700/80 animate-in fade-in duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: selectedAgent.typeColor }}
                        />
                        <h5 className="font-bold text-white text-sm sm:text-base">
                          {selectedAgent.name} • {selectedAgent.role}
                        </h5>
                      </div>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        Class: {selectedAgent.category.toUpperCase()}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 mb-3">
                      {selectedAgent.description}
                    </p>

                    <div>
                      <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block mb-1.5">
                        Specific Specialist Responsibilities:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                        {selectedAgent.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-amber-400 font-bold shrink-0">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Technical Limitations honestly represented */}
              {activeProject.limitations && (
                <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs mb-3">
                    <AlertTriangle className="w-4 h-4" />
                    <span>ENGINEERING SPECIFICATIONS & HONEST SYSTEM BOUNDARIES</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-200/80">
                    {activeProject.limitations.map((lim, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">›</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Brain Battery Check Detailed Case Study */}
          {activeProject.id === "brain-battery-check" && (
            <div className="space-y-6">
              <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
                <span className="text-xs uppercase font-bold tracking-wider text-purple-400 block mb-1">
                  Problem & Investigation
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeProject.problemStatement}
                </p>
              </div>

              {/* Pipeline Stages */}
              {activeProject.pipelineSteps && (
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-3">
                    DATA SCIENCE PIPELINE FLOW
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                    {activeProject.pipelineSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center"
                      >
                        <div className="w-6 h-6 mx-auto rounded-full bg-purple-600/30 text-purple-300 text-xs font-bold flex items-center justify-center mb-1 border border-purple-500/40">
                          {idx + 1}
                        </div>
                        <div className="text-xs font-bold text-white mb-1">{step.step}</div>
                        <div className="text-[10px] text-slate-400 leading-tight">{step.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies & Learnings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-slate-300 block mb-2">Technologies Used</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-950 text-cyan-300 text-xs border border-slate-800 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-amber-300 block mb-1">Key Engineering Takeaway</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeProject.learnings}
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-3 bg-purple-950/20 border border-purple-500/30 rounded-xl text-xs text-purple-200">
                <span className="font-bold">Responsible Presentation Note:</span> This system is an exploratory predictive modeling project and not a clinically validated medical tool.
              </div>
            </div>
          )}

          {/* Work in Progress Projects: AI Video Assistant & CrimeLens */}
          {(activeProject.id === "ai-video-assistant" || activeProject.id === "crimelens") && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-amber-300 uppercase block">
                    PROJECT STATUS: WORK IN PROGRESS
                  </span>
                  <span className="text-xs text-slate-300">
                    Active prototype in development. Complete technical benchmarks and repository release will be linked upon publication.
                  </span>
                </div>
              </div>

              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
                  Project Description
                </span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {activeProject.shortDescription}
                </p>

                <div>
                  <span className="text-xs font-bold text-slate-400 block mb-2">Confirmed Focus Technologies</span>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-700 text-xs text-amber-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
