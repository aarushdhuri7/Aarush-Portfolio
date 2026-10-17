"use client";

import React, { useState, useEffect } from "react";
import { regionsData } from "@/data/world";
import { PokeBall } from "./PokeBall";
import { Compass, Menu, X, Volume2, VolumeX, Shield, Award } from "lucide-react";

export const Navigation: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState("region-starter");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const regions = regionsData.map((r) => document.getElementById(r.id));
      const scrollPos = window.scrollY + 250;

      for (let i = regions.length - 1; i >= 0; i--) {
        const el = regions[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveRegion(regionsData[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRegion = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const currentRegionInfo = regionsData.find((r) => r.id === activeRegion) || regionsData[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-blue-500/20 py-2.5 shadow-xl shadow-black/50"
          : "bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Trainer HUD */}
        <div
          onClick={() => scrollToRegion("region-starter")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            <PokeBall size={34} className="group-hover:rotate-45 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-sm tracking-widest text-slate-100 uppercase group-hover:text-amber-400 transition-colors">
                Aarush Dhuri
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-600/30 text-blue-300 border border-blue-500/30">
                DS-AI
              </span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Region {currentRegionInfo.regionNumber}: {currentRegionInfo.name}
            </p>
          </div>
        </div>

        {/* Desktop Region Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-700/60 backdrop-blur-md">
          {regionsData.map((reg) => {
            const isActive = activeRegion === reg.id;
            return (
              <button
                key={reg.id}
                onClick={() => scrollToRegion(reg.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <span>{reg.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => scrollToRegion("region-league")}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-md shadow-red-600/30 transition-transform active:scale-95"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Connect</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800/80 text-slate-200 hover:text-white border border-slate-700"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 backdrop-blur-xl border-b border-blue-500/20 p-5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400" />
            Pokémon World Map — Choose Region
          </div>
          <div className="grid grid-cols-2 gap-2">
            {regionsData.map((reg) => {
              const isActive = activeRegion === reg.id;
              return (
                <button
                  key={reg.id}
                  onClick={() => scrollToRegion(reg.id)}
                  className={`text-left p-2.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between border ${
                    isActive
                      ? "bg-blue-600/30 text-blue-200 border-blue-500/50"
                      : "bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800"
                  }`}
                >
                  <div className="truncate">
                    <span className="text-[10px] text-slate-400 block">R-{reg.regionNumber}</span>
                    <span className="font-bold">{reg.name}</span>
                  </div>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: reg.badgeColor }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
