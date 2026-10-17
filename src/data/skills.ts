export interface Skill {
  id: string;
  name: string;
  rating: number; // Max 10
  category: "Programming and Data" | "AI and Machine Learning" | "Cloud and Infrastructure" | "Analytics and Visualization" | "Application Development";
  pokemonType: "Electric" | "Psychic" | "Steel" | "Dragon" | "Fire" | "Water" | "Normal" | "Ghost" | "Flying" | "Ice";
  typeColor: string;
  badge: string;
  description: string;
  moves: string[];
}

export const skillsData: Skill[] = [
  {
    id: "aws",
    name: "AWS",
    rating: 9,
    category: "Cloud and Infrastructure",
    pokemonType: "Electric",
    typeColor: "#F59E0B",
    badge: "Thunder Cloud Badge",
    description: "Cloud architecture, EC2 compute instances, S3 storage pipelines, IAM policies, and scalable serverless workloads.",
    moves: ["S3 Bucket Guard", "EC2 Cluster Storm", "Lambda Surge", "IAM Protocol"]
  },
  {
    id: "statistics",
    name: "Statistics",
    rating: 9,
    category: "Programming and Data",
    pokemonType: "Psychic",
    typeColor: "#EC4899",
    badge: "Mind Matrix Badge",
    description: "Hypothesis testing, probability distributions, regression modeling, variance analysis, and stochastic calculus for data science.",
    moves: ["Hypothesis Probe", "Bayesian Insight", "Normal Distribution Shield", "ANOVA Wave"]
  },
  {
    id: "python",
    name: "Python",
    rating: 8,
    category: "Programming and Data",
    pokemonType: "Dragon",
    typeColor: "#8B5CF6",
    badge: "Draco Core Badge",
    description: "Core language for data science, algorithmic workflows, ML engineering, backend scripting, and agent coordination.",
    moves: ["Dataframe Strike", "Asyncio Pulse", "Numpy Array Claws", "Decorator Charge"]
  },
  {
    id: "docker",
    name: "Docker",
    rating: 8,
    category: "Cloud and Infrastructure",
    pokemonType: "Steel",
    typeColor: "#3B82F6",
    badge: "Iron Shell Badge",
    description: "Containerization, Dockerfile optimization, multi-stage builds, microservice isolation, and developer environment reproducibility.",
    moves: ["Container Seal", "Compose Orchestra", "Port Forward Blast", "Layer Cache Guard"]
  },
  {
    id: "power-bi",
    name: "Power BI",
    rating: 8,
    category: "Analytics and Visualization",
    pokemonType: "Fire",
    typeColor: "#F97316",
    badge: "Solar Lens Badge",
    description: "Interactive executive reporting dashboards, DAX querying, data modeling, and business intelligence KPI tracking.",
    moves: ["DAX Calculation Beam", "Drill-Through Insight", "KPI Dashboard Sun", "Power Query Refine"]
  },
  {
    id: "tableau",
    name: "Tableau",
    rating: 8,
    category: "Analytics and Visualization",
    pokemonType: "Water",
    typeColor: "#06B6D4",
    badge: "Cascade Prism Badge",
    description: "Visual analytics, multi-dimensional story points, heat maps, geospatial mapping, and exploratory trend breakdowns.",
    moves: ["Story Point Flow", "Dual-Axis Tidal Wave", "Calculated Field Current", "Geospatial Radar"]
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    rating: 7,
    category: "AI and Machine Learning",
    pokemonType: "Psychic",
    typeColor: "#A855F7",
    badge: "Neural Synapse Badge",
    description: "Supervised and unsupervised learning, feature extraction, scikit-learn models, hyperparameter tuning, and cross-validation.",
    moves: ["Gradient Descent Surge", "Random Forest Wall", "Cross-Validation Scan", "Ensemble Boost"]
  },
  {
    id: "git-github",
    name: "Git/GitHub",
    rating: 7,
    category: "Programming and Data",
    pokemonType: "Normal",
    typeColor: "#10B981",
    badge: "Chronos Branch Badge",
    description: "Version control, branching strategies, PR workflows, code reviews, collaborative repositories, and release tags.",
    moves: ["Branch Diverge", "Merge Conflict Deflect", "Commit Snapshot", "PR Review Signal"]
  },
  {
    id: "sql",
    name: "SQL",
    rating: 6,
    category: "Programming and Data",
    pokemonType: "Steel",
    typeColor: "#64748B",
    badge: "Relational Vault Badge",
    description: "Relational schema design, complex joins, indexing strategies, aggregate queries, and window functions.",
    moves: ["Index Accelerator", "Inner Join Impact", "Subquery Strike", "Window Aggregate"]
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    rating: 6,
    category: "AI and Machine Learning",
    pokemonType: "Ghost",
    typeColor: "#6366F1",
    badge: "Spectral Eye Badge",
    description: "Image preprocessing, feature detection, OpenCV operations, object boundary recognition, and visual analytics.",
    moves: ["Edge Detection Glow", "Bounding Box Lock", "Kernel Convolution", "Contour Morph"]
  },
  {
    id: "fastapi",
    name: "FastAPI",
    rating: 6,
    category: "Application Development",
    pokemonType: "Electric",
    typeColor: "#EAB308",
    badge: "Volt Speed Badge",
    description: "High-performance Python asynchronous APIs, Pydantic data schemas, automatic OpenAPI documentation, and model endpoints.",
    moves: ["Pydantic Validation Guard", "Async Endpoint Velocity", "OpenAPI Broadcast", "Dependency Injection Surge"]
  },
  {
    id: "react",
    name: "React",
    rating: 6,
    category: "Application Development",
    pokemonType: "Water",
    typeColor: "#0284C7",
    badge: "Component Hydro Badge",
    description: "Component architecture, interactive state hooks, dynamic UI rendering, modular styling, and modern web application flows.",
    moves: ["Virtual DOM Mirror", "Hook Synchronizer", "State Cascade", "Component Fusion"]
  }
];

export const skillCategories = [
  "All Types",
  "Programming and Data",
  "AI and Machine Learning",
  "Cloud and Infrastructure",
  "Analytics and Visualization",
  "Application Development"
] as const;
