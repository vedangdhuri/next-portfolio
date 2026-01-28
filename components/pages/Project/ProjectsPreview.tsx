import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-100 tracking-tight">
            Projects
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Showcasing impactful projects and technical achievements.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-100 bg-neutral-800 border border-neutral-700 rounded-xl hover:bg-neutral-700 hover:border-neutral-600 transition-all duration-300 group"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
