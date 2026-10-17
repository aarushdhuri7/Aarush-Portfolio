export interface Interest {
  id: string;
  title: string;
  category: string;
  pokemonBuddy: string;
  pokemonImage: string;
  color: string;
  icon: string;
  description: string;
  highlights: string[];
}

export const interestsData: Interest[] = [
  {
    id: "basketball",
    title: "Basketball",
    category: "Athletics & Team Play",
    pokemonBuddy: "Lucario",
    pokemonImage: "/images/pokemon/lucario.png",
    color: "#F97316",
    icon: "Activity",
    description: "High-energy court awareness, fast-break offense, teamwork, and athletic discipline that keeps the mind sharp for data problem-solving.",
    highlights: ["Court vision & playmaking", "Defensive hustle & stamina", "Team coordination & quick tactical shifts"]
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics & After Effects",
    category: "Visual Craft & Cinema",
    pokemonBuddy: "Porygon",
    pokemonImage: "/images/pokemon/porygon.png",
    color: "#8B5CF6",
    icon: "Video",
    description: "Crafting visual motion, keyframe timing, title sequences, visual effects, and kinetic typography using Adobe After Effects.",
    highlights: ["Keyframe graph editing & easing", "Cinematic titles & camera parallax", "Visual pacing & audio-reactive cuts"]
  },
  {
    id: "food-exploration",
    title: "Food Exploration",
    category: "Culinary Quests",
    pokemonBuddy: "Eevee",
    pokemonImage: "/images/pokemon/eevee.png",
    color: "#EAB308",
    icon: "Utensils",
    description: "Hunting down authentic street foods, hidden culinary gems, regional spices, and unique dessert cafes around the city.",
    highlights: ["Street food discoveries", "Regional flavor palettes", "Cafe hopping & dessert culture"]
  },
  {
    id: "story-games",
    title: "AAA Story-Based Games",
    category: "Interactive Worlds & Lore",
    pokemonBuddy: "Charizard",
    pokemonImage: "/images/pokemon/charizard.png",
    color: "#EF4444",
    icon: "Gamepad2",
    description: "Immersive storytelling, world-building, and environmental design in masterclass titles like Ghost of Tsushima, Red Dead Redemption 2, and Cyberpunk 2077.",
    highlights: ["Ghost of Tsushima (Kurosawa wind aesthetics & honor)", "Red Dead Redemption 2 (Living world simulation)", "Cyberpunk 2077 (Futuristic neon dystopia & depth)"]
  }
];
