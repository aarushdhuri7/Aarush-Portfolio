"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { StarterVillage } from "@/components/StarterVillage";
import { TrainerProfile } from "@/components/TrainerProfile";
import { Pokedex } from "@/components/Pokedex";
import { ProjectExpedition } from "@/components/ProjectExpedition";
import { CloudGym } from "@/components/CloudGym";
import { AILaboratory } from "@/components/AILaboratory";
import { WorldOfInterests } from "@/components/WorldOfInterests";
import { PokemonLeague } from "@/components/PokemonLeague";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#07090E] text-slate-100 overflow-x-hidden">
      {/* Top Persistent Fixed Navigation Bar */}
      <Navigation />

      {/* Region 1 — Starter Village (Landing & Hero) */}
      <StarterVillage />

      {/* Region 2 — Trainer Profile (About Me & Academics) */}
      <TrainerProfile />

      {/* Region 3 — The Pokédex (Interactive Skills) */}
      <Pokedex />

      {/* Region 4 — Project Expedition (4 Projects Discovery) */}
      <ProjectExpedition />

      {/* Region 5 — Cloud Gym (AWS & Docker Infrastructure) */}
      <CloudGym />

      {/* Region 6 — AI Laboratory (ReviewPilot Multi-Agent Architecture) */}
      <AILaboratory />

      {/* Region 7 — World of Interests (Hobbies & Gaming) */}
      <WorldOfInterests />

      {/* Region 8 — Pokémon League / Final Destination (Contact & Comms) */}
      <PokemonLeague />
    </main>
  );
}
