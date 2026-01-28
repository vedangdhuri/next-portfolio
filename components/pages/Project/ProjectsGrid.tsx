"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project, ProjectCategory } from "@/types/project";

interface ProjectsGridProps {
  projects: Project[];
}

type FilterOption = "all" | ProjectCategory;

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const filters: { label: string; value: FilterOption }[] = [
    { label: "All", value: "all" },
    { label: "Personal", value: "personal" },
    { label: "Professional", value: "professional" },
  ];

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 p-1 bg-neutral-900 border border-neutral-800 rounded-xl w-fit mx-auto">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
              activeFilter === filter.value
                ? "bg-neutral-100 text-neutral-900 shadow-lg"
                : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-neutral-400">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
