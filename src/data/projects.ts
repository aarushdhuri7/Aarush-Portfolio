export interface ProjectAgent {
  name: string;
  role: string;
  category: "coordinator" | "specialist" | "verifier" | "aggregator";
  typeColor: string;
  avatarIcon: string;
  description: string;
  responsibilities: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  status: "Completed / Flagship" | "Completed Case Study" | "Work in Progress";
  isFeatured: boolean;
  category: string;
  pokemonCompanion: string;
  pokemonImage: string;
  themeColor: string;
  bgGradient: string;
  shortDescription: string;
  problemStatement?: string;
  fullDescription: string;
  technologies: string[];
  features?: string[];
  agents?: ProjectAgent[];
  pipelineSteps?: { step: string; detail: string }[];
  limitations?: string[];
  learnings?: string;
  githubUrl: string | null;
  demoUrl: string | null;
}

export const projectsData: ProjectData[] = [
  {
    id: "review-pilot",
    title: "ReviewPilot — Multi-Agent AI System for PR Review",
    subtitle: "Flagship Multi-Agent System",
    tagline: "Collaborative specialized AI review panel for GitHub Pull Requests",
    status: "Completed / Flagship",
    isFeatured: true,
    category: "Multi-Agent AI & Developer Tools",
    pokemonCompanion: "Lucario & Porygon",
    pokemonImage: "/images/pokemon/lucario.png",
    themeColor: "#3B82F6",
    bgGradient: "from-blue-900/40 via-indigo-950/60 to-slate-950",
    shortDescription:
      "ReviewPilot provides a structured, automated second pass on pull request diffs using a coordinated team of five specialist agents operating in parallel, followed by deterministic verification and synthesis.",
    problemStatement:
      "Code reviews require developers to examine code across multiple orthogonal dimensions: subtle logic bugs, security vulnerabilities, performance regressions, test adequacy, and documentation updates. A single reviewer can overlook critical issues, while feedback can be speculative or inconsistent. ReviewPilot functions as an AI decision-support assistant (not an automated merging tool) that structures the review into five distinct parallel examinations.",
    fullDescription:
      "ReviewPilot was developed using Python, FastAPI, React, SQLite with SQLAlchemy, and Ollama serving the local Qwen3 8B model. It ingests either pasted code or public GitHub PR diffs, coordinates five specialist LLM agents simultaneously, evaluates findings through a deterministic heuristic verifier, and outputs a consolidated decision-support report for human developers.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "SQLite",
      "SQLAlchemy",
      "Ollama",
      "Qwen3 8B (qwen3:8b)",
      "GitHub REST API",
      "Git"
    ],
    features: [
      "Coordinator dispatches diffs to specialist agents in parallel",
      "Five dedicated domain review agents (Security, Bug, Performance, Testing, Documentation)",
      "Deterministic heuristic verifier that catches empty, malformed, duplicate, or irregular outputs",
      "Consolidated aggregator synthesizing high-signal findings into an actionable report",
      "Persistent review history stored via SQLite & SQLAlchemy",
      "Configurable diff size safeguards (up to ~30,000 characters)"
    ],
    agents: [
      {
        name: "Coordinator Agent",
        role: "Workflow Orchestrator",
        category: "coordinator",
        typeColor: "#F59E0B",
        avatarIcon: "Command",
        description: "Validates input diffs, prepares contextual prompts, and dispatches tasks to specialist agents concurrently.",
        responsibilities: [
          "Receives code snippet or public GitHub PR diff",
          "Enforces ~30,000-character payload boundaries",
          "Dispatches parallel prompts to all five specialist agents",
          "Monitors async agent task execution and error states"
        ]
      },
      {
        name: "Security Agent",
        role: "Vulnerability Inspection",
        category: "specialist",
        typeColor: "#EF4444",
        avatarIcon: "ShieldAlert",
        description: "Scans for known insecure patterns, sensitive credential exposures, injection vectors, and missing auth checks.",
        responsibilities: [
          "Examines diff for injection vulnerabilities (SQL, XSS, Command)",
          "Identifies hardcoded secrets or sensitive environmental variables",
          "Inspects input sanitization and privilege validation",
          "Flags potential security concerns (not a replacement for formal security audits)"
        ]
      },
      {
        name: "Bug Agent",
        role: "Defect & Logic Analysis",
        category: "specialist",
        typeColor: "#EC4899",
        avatarIcon: "Bug",
        description: "Analyzes control flows, unhandled boundary conditions, null references, and incorrect logical assumptions.",
        responsibilities: [
          "Detects off-by-one errors and loop termination hazards",
          "Spots unhandled exceptions and missing null/type guards",
          "Flags race condition risks and asynchronous state mishandling",
          "Pinpoints regressions in variable scope or function return types"
        ]
      },
      {
        name: "Performance Agent",
        role: "Efficiency & Resource Review",
        category: "specialist",
        typeColor: "#8B5CF6",
        avatarIcon: "Zap",
        description: "Evaluates algorithmic complexity, database query patterns (N+1 queries), and redundant computations.",
        responsibilities: [
          "Flags inefficient computational complexity and memory allocations",
          "Scans for repeated database roundtrips and missing indexing clues",
          "Suggests caching or batching opportunities",
          "Recommends stream processing over bulk memory buffering"
        ]
      },
      {
        name: "Testing Agent",
        role: "Test Coverage Advisor",
        category: "specialist",
        typeColor: "#10B981",
        avatarIcon: "CheckSquare",
        description: "Evaluates whether critical code branches have corresponding test cases and proposes concrete test fixtures.",
        responsibilities: [
          "Identifies modified functions lacking unit or integration tests",
          "Recommends edge cases to include in test suites",
          "Outlines test mock setups and assertion assertions",
          "Does not execute tests automatically — provides testing recommendations"
        ]
      },
      {
        name: "Documentation Agent",
        role: "Clarity & Docstring Review",
        category: "specialist",
        typeColor: "#06B6D4",
        avatarIcon: "FileText",
        description: "Ensures exported signatures, API modifications, breaking changes, and configuration flags are documented.",
        responsibilities: [
          "Detects missing or outdated docstrings and type annotations",
          "Flags discrepancies between comments and actual logic changes",
          "Highlights breaking API changes requiring README updates",
          "Recommends architectural decision record additions"
        ]
      },
      {
        name: "Verifier Agent",
        role: "Heuristic Output Validator",
        category: "verifier",
        typeColor: "#6366F1",
        avatarIcon: "FileCheck2",
        description: "Applies deterministic heuristics and validation rules to ensure agent outputs meet quality thresholds.",
        responsibilities: [
          "Detects empty, corrupted, or non-JSON/malformed model outputs",
          "Filters redundant or duplicate findings across specialists",
          "Applies rule-based sanity checks against hallucinated line numbers",
          "Does not claim to verify factual correctness — applies deterministic quality heuristics"
        ]
      },
      {
        name: "Aggregator Agent",
        role: "Report Synthesizer",
        category: "aggregator",
        typeColor: "#14B8A6",
        avatarIcon: "Layers",
        description: "Synthesizes validated specialist findings into a structured, unified decision-support summary.",
        responsibilities: [
          "Groups findings by severity and domain",
          "Constructs actionable recommendations for human reviewers",
          "Persists completed review record to SQLite via SQLAlchemy",
          "Presents structured JSON to the React frontend"
        ]
      }
    ],
    limitations: [
      "Accepts pasted code or manually submitted public GitHub PR URLs (no automated webhook integration)",
      "Diffs are subject to a configured ~30,000-character truncation threshold for LLM context management",
      "Private repository authentication is not implemented in the documented prototype",
      "Inline comment posting back to GitHub PR lines is not implemented",
      "Verifier uses deterministic heuristics and does not guarantee complete factual correctness",
      "No formal precision/recall/F1 benchmark has been completed yet; agent speed varies with local Ollama hardware",
      "Does not automatically merge, approve, or reject pull requests (decision-support only)"
    ],
    githubUrl: "https://github.com/aarushdhuri7/Multi-Agent-PR-Review-System.git",
    demoUrl: null
  },
  {
    id: "brain-battery-check",
    title: "Mental Health Scorer — Brain Battery Check",
    subtitle: "Data Science & Predictive Modeling",
    tagline: "Predictive behavioral analytics evaluating lifestyle impact on mental wellbeing",
    status: "Completed Case Study",
    isFeatured: true,
    category: "Machine Learning & Health Analytics",
    pokemonCompanion: "Gengar & Eevee",
    pokemonImage: "/images/pokemon/gengar.png",
    themeColor: "#A855F7",
    bgGradient: "from-purple-900/40 via-violet-950/60 to-slate-950",
    shortDescription:
      "A predictive data science pipeline exploring correlations between academic stress, sleep duration, social media usage, physical activity, and subjective mental battery scores.",
    problemStatement:
      "University students frequently experience fluctuating mental wellbeing influenced by academic workload, screen time, physical exercise, and sleep patterns. Brain Battery Check explores whether a quantified behavioral dataset can reliably predict subjective stress and energy scores to promote self-awareness.",
    fullDescription:
      "Built with Python, Pandas, NumPy, Scikit-learn, and FastAPI. The project incorporates an end-to-end data pipeline: dataset exploration, outlier handling, categorical encoding, feature scaling, model exploration (comparing Linear Regression and Random Forest), hyperparameter tuning, model serialization with Joblib, and real-time inference served via FastAPI with Pydantic schema validation.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "FastAPI",
      "Pydantic",
      "Joblib",
      "Jupyter Notebooks",
      "Uvicorn"
    ],
    pipelineSteps: [
      { step: "Data Collection & Cleaning", detail: "Survey dataset cleaning, missing value imputation, and feature sanity boundaries." },
      { step: "Exploratory Data Analysis", detail: "Correlation heatmaps examining sleep vs. stress, screen time, and activity ratios." },
      { step: "Feature Engineering & Scaling", detail: "Categorical one-hot encoding, standard scaling, and stress index interaction features." },
      { step: "Model Training & Tuning", detail: "Benchmarked Linear Regression vs. Random Forest Regressor with cross-validation." },
      { step: "Serialization & API", detail: "Serialized model pipeline via Joblib and created FastAPI endpoints with Pydantic request validation." }
    ],
    features: [
      "Interactive behavioral feature input (sleep, study hours, screen time, exercise)",
      "Real-time battery score prediction with confidence boundaries",
      "Feature importance breakdown highlighting top lifestyle factors",
      "Pydantic strict schema verification preventing invalid inputs"
    ],
    learnings:
      "Learned the critical value of feature engineering over hyperparameter brute-forcing, handling non-linear human behavioral variance, and deploying lightweight scikit-learn pipelines behind high-speed FastAPI endpoints. (Note: System is an exploratory data project, not a clinically validated medical tool).",
    githubUrl: "https://github.com/aarushdhuri7/Brain-Battery-Check.git",
    demoUrl: null
  },
  {
    id: "ai-video-assistant",
    title: "AI Video Assistant with RAG",
    subtitle: "Multimodal AI & Information Retrieval",
    tagline: "Contextual question-answering over video transcripts and visual streams",
    status: "Work in Progress",
    isFeatured: false,
    category: "RAG & Multimodal AI",
    pokemonCompanion: "Dragonite",
    pokemonImage: "/images/pokemon/dragonite.png",
    themeColor: "#F59E0B",
    bgGradient: "from-amber-900/30 via-slate-900/70 to-slate-950",
    shortDescription:
      "Created an AI-powered video assistant that leverages Retrieval-Augmented Generation (RAG) to answer questions from video content.",
    fullDescription:
      "Created an AI-powered video assistant that leverages Retrieval-Augmented Generation (RAG) to answer questions from video content. This project is actively being refined with further implementation details, benchmarks, and model architectures to be documented upon repository publication.",
    technologies: [
      "Python",
      "RAG Architecture",
      "Video Processing",
      "Vector Embeddings",
      "LLM Integration"
    ],
    githubUrl: null, // Editable when repository is ready
    demoUrl: null
  },
  {
    id: "crimelens",
    title: "CrimeLens — Crime Analytics Platform",
    subtitle: "Spatial Analytics & Interactive Insights",
    tagline: "Transforming raw crime datasets into interactive visual analytics",
    status: "Work in Progress",
    isFeatured: false,
    category: "Data Analytics & Geospatial BI",
    pokemonCompanion: "Rotom",
    pokemonImage: "/images/pokemon/rotom.png",
    themeColor: "#06B6D4",
    bgGradient: "from-cyan-900/30 via-slate-900/70 to-slate-950",
    shortDescription:
      "Built a crime analytics platform that transforms crime datasets into interactive visualizations and insights.",
    fullDescription:
      "Built a crime analytics platform that transforms crime datasets into interactive visualizations and insights. Further implementation details, geospatial architectures, and dataset analysis will be documented upon official release.",
    technologies: [
      "Python",
      "Data Analytics",
      "Interactive Visualizations",
      "Geospatial Mapping",
      "Dashboard Engineering"
    ],
    githubUrl: null, // Editable when repository is ready
    demoUrl: null
  }
];
