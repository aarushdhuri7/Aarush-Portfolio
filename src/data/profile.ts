export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  degree: string;
  college: string;
  currentYear: string;
  expectedGraduation: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string | null; // Configurable field - do not invent
  cvPath: string; // Documented path in public/
  hasCvUploaded: boolean;
  trainerClass: string;
  region: string;
  partnerPokemon: string;
  introduction: string;
  careerDirection: string;
  areasOfInterest: string[];
}

export const profileData: ProfileData = {
  name: "Aarush Dhuri",
  title: "Data Science Student & AI Explorer",
  subtitle: "Third-Year B.Tech Data Science Student at NMIMS MPSTME",
  degree: "B.Tech in Data Science",
  college: "SVKM's NMIMS Mukesh Patel School of Technology Management & Engineering (MPSTME)",
  currentYear: "Third year",
  expectedGraduation: "2028",
  email: "aarushdhuri7@gmail.com",
  githubUrl: "https://github.com/aarushdhuri7",
  linkedinUrl: "https://www.linkedin.com/in/aarush-dhuri/", 
  cvPath: "/resume.pdf",
  hasCvUploaded: true,
  trainerClass: "AI Pokémon Researcher & Cloud Gym Challenger",
  region: "Kanto / Sinnoh AI Institute",
  partnerPokemon: "Lucario & Pikachu",
  introduction:
    "I'm Aarush Dhuri, a third-year B.Tech Data Science student at NMIMS MPSTME. I'm interested in Artificial Intelligence, Machine Learning, and Cloud Computing, and I enjoy building projects that combine data, intelligent systems, and software development. My projects span AI-powered applications, multi-agent systems, predictive analytics, and data-driven tools. I'm working towards a career at the intersection of AI and cloud technologies, with a focus on building useful, scalable solutions.",
  careerDirection:
    "An aspiring AI and Data Science professional interested in building intelligent, scalable systems that combine machine learning, cloud technologies, and real-world applications.",
  areasOfInterest: [
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
    "Data Analytics",
    "Computer Vision",
    "Multi-Agent Systems"
  ]
};
