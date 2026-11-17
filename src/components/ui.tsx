import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { industries, projects, services, type Industry, type Project, type Service } from "@/data/site";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? " eyebrow-light" : ""}`}><span className="eyebrow-line" />{children}</p>;
}

export function PageIntro({ label, title, description, aside }: { label: string; title: ReactNode; description: string; aside?: ReactNode }) {
  return (
    <section className="page-intro container">
      <div className="page-intro-copy">
        <Eyebrow>{label}</Eyebrow>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
      {aside && <div className="page-intro-aside">{aside}</div>}
    </section>
  );
}

export function SectionHeading({ label, title, description, align = "left" }: { label: string; title: ReactNode; description?: string; align?: "left" | "center" }) {
  return (
    <div className={`section-heading${align === "center" ? " section-heading-center" : ""}`}>
      <Eyebrow>{label}</Eyebrow>
      <h2>{title}</h2>
      {description && <p className="body-copy">{description}</p>}
    </div>
  );
}

export function PrimaryLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <Link href={href} className={`button${light ? " button-light" : ""}`}>{children}<ArrowUpRight size={16} /></Link>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="text-link">{children}<ArrowRight size={15} /></Link>;
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <article className="service-card">
      <div className="card-topline"><span className="card-index">0{index + 1}</span><span className="icon-tile"><Icon size={20} strokeWidth={1.6} /></span></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link href="/services" className="card-link">Explore service <ArrowUpRight size={15} /></Link>
    </article>
  );
}

export function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const Icon = industry.icon;
  return (
    <Link href="/industries" className={`industry-card industry-${industry.tone}`}>
      <span className="industry-photo" role="img" aria-label={`${industry.name} context photograph`} style={{ backgroundImage: `url("${industry.image}")` }} />
      <div className="industry-card-head"><span className="icon-tile"><Icon size={19} strokeWidth={1.65} /></span><span className="card-index">0{index + 1}</span></div>
      <div><h3>{industry.name}</h3><p>{industry.short}</p></div>
      <span className="industry-arrow"><ArrowUpRight size={16} /></span>
    </Link>
  );
}

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual ${project.theme}${compact ? " project-visual-compact" : ""}`} aria-label={`${project.name} sample project interface`} role="img">
      <div className="mock-window">
        <div className="mock-topbar"><span /><span /><span /><i>{project.name.toLowerCase()}.app</i></div>
        <div className="mock-content">
          <div className="mock-side"><b /><b /><b /><b /></div>
          <div className="mock-board">
            <div className="mock-board-head"><span /><b /><i /></div>
            <div className="mock-stats"><span /><span /><span /></div>
            <div className="mock-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="mock-rows"><span /><span /><span /></div>
          </div>
        </div>
      </div>
      <span className="visual-caption">{project.label}<span>Sample concept</span></span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href="/contact" className="project-image-link" aria-label={`Discuss a project like ${project.name}`}><ProjectVisual project={project} /></Link>
      <div className="project-card-copy">
        <div><p className="project-category">{project.category} <span>·</span> Demo concept</p><h3>{project.name}</h3></div>
        <Link href="/contact" className="round-link" aria-label={`Discuss ${project.name}`}><ArrowUpRight size={17} /></Link>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="tag-row">{project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
    </article>
  );
}

export function CTASection({ title = "Have a business challenge? Let's build the solution.", description = "Tell us what you want to make possible. We'll help you find a thoughtful way forward.", dark = false }: { title?: string; description?: string; dark?: boolean }) {
  return (
    <section className={`cta-section${dark ? " cta-dark" : ""}`}>
      <div className="cta-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div className="container cta-content">
        <Eyebrow light={dark}>Your next chapter</Eyebrow>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="button-row"><PrimaryLink href="/contact" light>Start a project</PrimaryLink><Link href="/contact" className="button button-ghost">Talk to our team<ArrowDownRight size={16} /></Link></div>
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return <ul className="check-list">{items.map((item) => <li key={item}><span><Check size={13} /></span>{item}</li>)}</ul>;
}

export function DataOverview() {
  return <div className="sr-only">{services.length} service areas and {industries.length} industries. {projects.length} sample projects.</div>;
}
