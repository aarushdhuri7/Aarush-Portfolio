# ⚡ Aarush Dhuri — Pokémon Journey Interactive Portfolio

A cinematic, interactive Pokémon-themed personal portfolio website built for **Aarush Dhuri**, a third-year B.Tech Data Science student at NMIMS MPSTME, Mumbai.

This portfolio merges an immersive Pokémon game aesthetic with rigorous academic and software credibility across Artificial Intelligence, Multi-Agent Systems, Machine Learning, and Cloud Computing.

---

## 🌟 Key Features & The Eight Regions

1. **Region 1 — Starter Village (Landing & Hero)**:
   - Original Trainer Avatar representing Aarush with AR visor.
   - Animated local sprites: Pikachu (#025) and Eevee (#133).
   - Pokémon Center fixture with red dome and medical clinic sign.
   - Winding dirt path and layered animated tall grass.
   - Quick action controls: *Explore My Journey*, *View My Projects*, *Download CV*, and a skip-to-content option.

2. **Region 2 — Trainer Profile (About Me & Academics)**:
   - Official Trainer Card layout with verified academic record:
     - **Degree**: B.Tech in Data Science
     - **College**: SVKM's NMIMS Mukesh Patel School of Technology Management & Engineering (MPSTME)
     - **Current Year**: Third Year (Class of 2028)
     - **Partner Pokémon**: Lucario (#448) & Pikachu (#025)
   - Professional Introduction and Career Direction.
   - Core exploration badges (AI, ML, Cloud Computing, Computer Vision, Multi-Agent Systems).

3. **Region 3 — The Pokédex (Interactive Skills Registry)**:
   - Styled after the high-tech Rotom Pokédex with interactive LED indicators and scanline CRT finish.
   - Categorized by domain (*Programming and Data*, *AI and Machine Learning*, *Cloud and Infrastructure*, *Analytics and Visualization*, *Application Development*).
   - Accurate self-assessed ratings out of 10:
     - **AWS**: 9/10
     - **Statistics**: 9/10
     - **Python**: 8/10
     - **Docker**: 8/10
     - **Power BI**: 8/10
     - **Tableau**: 8/10
     - **Machine Learning**: 7/10
     - **Git/GitHub**: 7/10
     - **SQL**: 6/10
     - **Computer Vision**: 6/10
     - **FastAPI**: 6/10
     - **React**: 6/10
   - Interactive segmented power meters and signature technical move descriptions.

4. **Region 4 — Project Expedition (Landmark Discoveries)**:
   - 4 distinctive interactive sites:
     - **ReviewPilot — Multi-Agent AI System for PR Review** (*Completed / Flagship*)
     - **Mental Health Scorer — Brain Battery Check** (*Completed Case Study*)
     - **AI Video Assistant with RAG** (*Work in Progress*)
     - **CrimeLens — Crime Analytics Platform** (*Work in Progress*)
   - Direct repository links for published repositories and pending badges for ongoing work.

5. **Region 5 — Cloud Gym (Cloud & Infrastructure)**:
   - High-altitude arena guarded by legendary Zapdos (#145).
   - Deep dive into AWS architecture (EC2, S3, IAM, serverless compute) and Docker containerization.

6. **Region 6 — AI Laboratory (ReviewPilot Swarm Architecture)**:
   - Futuristic neural research laboratory with digital companion Porygon (#137).
   - Detailed interactive examination of the **8 Coordinated Agents**:
     1. **Coordinator Agent** (Input diffs & parallel dispatch)
     2. **Security Agent** (Insecure calls, auth gaps, injection risks)
     3. **Bug Agent** (Defect detection, logic flows, null guards)
     4. **Performance Agent** (Algorithmic cost, N+1 queries, memory bottlenecks)
     5. **Testing Agent** (Missing unit tests & edge case advisor)
     6. **Documentation Agent** (Docstring sync & API breaking changes)
     7. **Verifier Agent** (Deterministic heuristic output validation)
     8. **Aggregator Agent** (Consolidated synthesis & report generation)
   - Clear and honest engineering boundaries: explains diff size truncation (~30k chars), heuristic verification, and decision-support boundaries (does not auto-merge).

7. **Region 7 — World of Interests (Personal Dimension)**:
   - Personal hobbies beyond engineering:
     - **Basketball** (Athletic stamina & playmaking with Lucario)
     - **Motion Graphics & Video Editing** (After Effects keyframe timing with Porygon)
     - **Food Exploration** (Street food discoveries with Eevee)
     - **AAA Story-Based Games** (Ghost of Tsushima, Red Dead Redemption 2, Cyberpunk 2077 with Charizard)

8. **Region 8 — Pokémon League / Final Destination (Contact & Comms)**:
   - Indigo Plateau summit with Mewtwo (#150).
   - Verified email: `aarushdhuri7@gmail.com` with one-click copy and celebratory confetti animation.
   - GitHub link: `https://github.com/aarush7506-design`
   - Configurable LinkedIn field.
   - Working CV download at `/resume.pdf`.
   - Closing message: *"The journey continues. Let's build something meaningful."*

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack, React 19)
- **Language**: TypeScript (Strict typing)
- **Styling**: Tailwind CSS v4 with custom Pokédex glassmorphism & pixel utilities
- **Icons**: Lucide React + custom SVG Poké Balls & social icons
- **Animations**: CSS keyframes, Canvas Confetti, and subtle float physics
- **Hosting Target**: Vercel (Free tier ready, zero paid APIs required)

---

## 📁 Centralized Editable Data Files

All portfolio content is separated from the UI components so you can easily update it anytime:

- [`src/data/profile.ts`](src/data/profile.ts): Personal credentials, email, GitHub, LinkedIn URL, and CV path.
- [`src/data/skills.ts`](src/data/skills.ts): Skill proficiencies, ratings, categories, and signature moves.
- [`src/data/projects.ts`](src/data/projects.ts): Project details, multi-agent specifications, technologies, and GitHub repository URLs.
- [`src/data/interests.ts`](src/data/interests.ts): Hobbies, After Effects highlights, and favorite AAA games.
- [`src/data/world.ts`](src/data/world.ts): Region definitions, atmosphere styles, and companion Pokémon.

---

## 🚀 Windows Launch Instructions

### Prerequisites
- Node.js (v18 or higher recommended; v24 tested)
- npm

### Running Locally
1. Open PowerShell or Command Prompt.
2. Navigate to the project directory:
   ```powershell
   cd c:\Users\l\Desktop\MyPokemonJourney\my-pokemon-journey
   ```
3. Install dependencies (if not already installed):
   ```powershell
   npm install
   ```
4. Start the development server:
   ```powershell
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Stopping & Restarting
- Press `Ctrl + C` in the terminal to stop the server.
- Run `npm run dev` to restart it.

### Verifying Production Build
To test the production build locally before deployment:
```powershell
npm run build
npm run start
```

---

## 🌐 Free Vercel Deployment Instructions

1. Push your project to GitHub:
   ```powershell
   git init
   git add .
   git commit -m "feat: complete Aarush Dhuri Pokemon journey interactive portfolio"
   git branch -M main
   git remote add origin https://github.com/aarush7506-design/pokemon-journey-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **Add New Project** and select your repository.
4. Set the Root Directory to `./my-pokemon-journey` (or root if moved).
5. Framework preset will automatically be detected as **Next.js**.
6. Click **Deploy**. Vercel will build and assign you a free live public `.vercel.app` URL!

---

## 📜 Asset Attribution & Disclaimer

- Pokémon, Poké Ball, and character names are trademarks of Nintendo, Creatures Inc., and GAME FREAK Inc.
- This website is an unofficial, non-commercial student portfolio built for university assignment purposes and educational demonstration.
- Pokémon artwork sprites are sourced from the open-source PokeAPI community archive.
