import { projects } from "@/data/projects";
import ProjectsGrid from "@/components/pages/Project/ProjectsGrid";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Vedang Dhuri",
  description:
    "Showcasing impactful projects and technical achievements across web development, mobile apps, and creative tech.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition-colors duration-300 mb-8 group"
        >
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">Home</span>
        </Link>

        {/* Header */}
        <header className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-100 tracking-tight">
            Projects
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Showcasing impactful projects and technical achievements.
          </p>
        </header>

        {/* Projects Grid with Filters */}
        <ProjectsGrid projects={projects} />
      </div>
    </main>
  );
}
