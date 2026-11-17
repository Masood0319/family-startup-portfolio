"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/ui";

const filters = ["All projects", "Websites", "Management Systems", "AI & Automation", "E-commerce"] as const;
type Filter = (typeof filters)[number];

export function WorkGallery() {
  const [filter, setFilter] = useState<Filter>("All projects");
  const visibleProjects = useMemo(() => filter === "All projects" ? projects : projects.filter((project) => project.category === filter), [filter]);

  return (
    <>
      <div className="work-toolbar"><div className="filter-list" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} type="button" className={filter === item ? "filter-button selected" : "filter-button"} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><span className="result-count">{visibleProjects.length.toString().padStart(2, "0")} concepts</span></div>
      <div className="project-grid work-project-grid">{visibleProjects.map((project, index) => <Reveal key={project.name} delay={(index % 3) * 0.05}><ProjectCard project={project} /></Reveal>)}</div>
      {visibleProjects.length === 0 && <p className="no-results">No concepts in this category yet.</p>}
      <div className="work-bottom"><p>Have an idea that could be next?</p><Link href="/contact" className="text-link">Let&apos;s talk about it <ArrowUpRight size={15} /></Link></div>
    </>
  );
}
