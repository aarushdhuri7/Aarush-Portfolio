import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Aarush Dhuri | Pokémon-Themed Data Science & AI Portfolio",
  description:
    "Interactive Pokémon-themed portfolio for Aarush Dhuri, Third-Year B.Tech Data Science student at NMIMS MPSTME. Exploring AI, Machine Learning, Multi-Agent Systems, and Cloud Computing.",
  keywords: [
    "Aarush Dhuri",
    "Data Science",
    "NMIMS MPSTME",
    "Artificial Intelligence",
    "Machine Learning",
    "ReviewPilot",
    "Multi-Agent AI",
    "AWS",
    "Docker",
    "FastAPI",
    "Python",
    "Pokémon Portfolio"
  ],
  authors: [{ name: "Aarush Dhuri" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#07090E] text-slate-100 antialiased selection:bg-blue-600 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
