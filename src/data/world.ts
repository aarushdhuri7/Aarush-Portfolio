export interface Region {
  id: string;
  name: string;
  regionNumber: number;
  subtitle: string;
  badgeName: string;
  badgeColor: string;
  pokemonEncounter: string;
  pokemonSprite: string;
  bgAtmosphere: string;
  description: string;
}

export const regionsData: Region[] = [
  {
    id: "region-starter",
    name: "Starter Village",
    regionNumber: 1,
    subtitle: "Pallet Town Gateway & Trainer Departure",
    badgeName: "Boulder Badge",
    badgeColor: "#94A3B8",
    pokemonEncounter: "Pikachu & Eevee",
    pokemonSprite: "/images/pokemon/pikachu.png",
    bgAtmosphere: "lush-grassland",
    description: "The dawn of the data journey. Where curiosity sparks into engineering and foundational knowledge takes root."
  },
  {
    id: "region-profile",
    name: "Trainer Profile",
    regionNumber: 2,
    subtitle: "NMIMS MPSTME Trainer Card & Academic Record",
    badgeName: "Cascade Badge",
    badgeColor: "#38BDF8",
    pokemonEncounter: "Eevee",
    pokemonSprite: "/images/pokemon/eevee.png",
    bgAtmosphere: "trainer-academy",
    description: "A comprehensive trainer dossier highlighting education, university credentials, career direction, and specialized focus areas."
  },
  {
    id: "region-pokedex",
    name: "The Pokédex",
    regionNumber: 3,
    subtitle: "Technical Skill Matrix & Ability Registry",
    badgeName: "Thunder Badge",
    badgeColor: "#FACC15",
    pokemonEncounter: "Rotom Pokédex",
    pokemonSprite: "/images/pokemon/rotom.png",
    bgAtmosphere: "high-tech-pokedex",
    description: "An interactive high-tech database categorizing programming capabilities, analytical frameworks, and self-assessed proficiencies."
  },
  {
    id: "region-expedition",
    name: "Project Expedition",
    regionNumber: 4,
    subtitle: "Wild Exploration Map & Software Landmarks",
    badgeName: "Rainbow Badge",
    badgeColor: "#4ADE80",
    pokemonEncounter: "Dragonite",
    pokemonSprite: "/images/pokemon/dragonite.png",
    bgAtmosphere: "wild-expedition",
    description: "Venturing through project landmarks across multi-agent systems, health predictive modeling, video AI, and crime analytics."
  },
  {
    id: "region-cloudgym",
    name: "Cloud Gym",
    regionNumber: 5,
    subtitle: "High-Altitude Distributed Systems & Docker Colosseum",
    badgeName: "Soul Badge",
    badgeColor: "#C084FC",
    pokemonEncounter: "Zapdos",
    pokemonSprite: "/images/pokemon/zapdos.png",
    bgAtmosphere: "storm-cloud-gym",
    description: "A sky-piercing arena powered by AWS architectures, Docker containerization, and scalable distributed cloud systems."
  },
  {
    id: "region-ailab",
    name: "AI Laboratory",
    regionNumber: 6,
    subtitle: "Professor Oak's Neural Research Facility & Multi-Agent Core",
    badgeName: "Marsh Badge",
    badgeColor: "#F472B6",
    pokemonEncounter: "Lucario & Porygon",
    pokemonSprite: "/images/pokemon/lucario.png",
    bgAtmosphere: "futuristic-lab",
    description: "State-of-the-art computational lab exploring ReviewPilot's parallel five-agent architecture, heuristics, and synthetic aggregation."
  },
  {
    id: "region-interests",
    name: "World of Interests",
    regionNumber: 7,
    subtitle: "Campfire Sanctuary, AAA Storyscapes & Creative Craft",
    badgeName: "Volcano Badge",
    badgeColor: "#FB923C",
    pokemonEncounter: "Charizard",
    pokemonSprite: "/images/pokemon/charizard.png",
    bgAtmosphere: "creative-campfire",
    description: "Beyond the code: basketball court discipline, Adobe After Effects motion craft, street food adventures, and AAA story gaming."
  },
  {
    id: "region-league",
    name: "Pokémon League",
    regionNumber: 8,
    subtitle: "Indigo Plateau Summit & Professional Comms Portal",
    badgeName: "Earth Badge",
    badgeColor: "#22D3EE",
    pokemonEncounter: "Mewtwo",
    pokemonSprite: "/images/pokemon/mewtwo.png",
    bgAtmosphere: "league-summit",
    description: "The championship summit. Direct communication links, verified profiles, CV download, and future collaboration invitations."
  }
];
