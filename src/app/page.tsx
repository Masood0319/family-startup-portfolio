import Link from "next/link";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { industries, processSteps, projects, services } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { CTASection, Eyebrow, IndustryCard, PrimaryLink, ProjectCard, SectionHeading, ServiceCard, TextLink } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid container">
          <div className="hero-copy">
            <Reveal>
              <Eyebrow>Technology for what comes next</Eyebrow>
              <h1>WE TURN BUSINESS CHALLENGES INTO <span>DIGITAL SOLUTIONS.</span></h1>
              <p className="hero-lead">From high-performance websites and custom business software to intelligent AI automation, we help organizations build, operate smarter, and grow in a digital world.</p>
              <div className="button-row">
                <PrimaryLink href="/services">Explore our services</PrimaryLink>
                <Link href="/contact" className="button button-outline">Start a project <MoveUpRight size={16} /></Link>
              </div>
              <div className="hero-note"><span className="status-pulse" />A technology partner for ambitious teams</div>
            </Reveal>
          </div>
          <div className="hero-art" aria-label="Abstract orbital network illustration" role="img">
            <div className="art-glow" />
            <div className="orbital orbital-one"><span /></div>
            <div className="orbital orbital-two"><span /></div>
            <div className="orbital orbital-three"><span /></div>
            <div className="core-object"><div className="core-facet facet-one" /><div className="core-facet facet-two" /><div className="core-facet facet-three" /><div className="core-center" /></div>
            <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
            <div className="art-label label-one"><span>01</span> THINK WITH INTENT</div>
            <div className="art-label label-two"><span>02</span> BUILD FOR PEOPLE</div>
            <div className="art-caption">IDEAS INTO <strong>IMPACT</strong><span>Technology, made meaningful.</span></div>
            <div className="art-index">JJ / 001</div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>Independent thinking. Collaborative building.</span>
          <a href="#intro">Scroll to explore <ArrowDown size={14} /></a>
        </div>
      </section>

      <section className="intro-section section-pad" id="intro">
        <div className="container intro-grid">
          <Reveal><Eyebrow>01 / A little about us</Eyebrow></Reveal>
          <Reveal className="intro-main" delay={0.08}>
            <h2>Technology that moves your business <span>forward.</span></h2>
            <div className="intro-bottom"><p>JanJa brings software engineering, digital strategy, and intelligent automation together to solve real business challenges—not add more complexity.</p><TextLink href="/who-we-are">Get to know JanJa</TextLink></div>
          </Reveal>
          <div className="intro-stamp"><span>BUILD</span><i>✳</i><span>BETTER</span><i>✳</i><span>TOGETHER</span></div>
        </div>
      </section>

      <section className="section-pad services-home">
        <div className="container">
          <Reveal><div className="section-head-row"><SectionHeading label="02 / What we do" title={<>Ideas to impact.<br /><span>One partner.</span></>} description="A connected set of capabilities to help you start, improve, and keep moving." /><TextLink href="/services">All services</TextLink></div></Reveal>
          <div className="service-grid">{services.map((service, index) => <Reveal key={service.category} delay={(index % 3) * 0.06}><ServiceCard service={service} index={index} /></Reveal>)}</div>
        </div>
      </section>

      <section className="industry-home section-pad">
        <div className="container">
          <Reveal><div className="section-head-row"><SectionHeading label="03 / Where we work" title={<>Different industries.<br /><span>Shared ambition.</span></>} description="We adapt the technology to your context, people, and day-to-day realities." /><TextLink href="/industries">Explore industries</TextLink></div></Reveal>
          <div className="industry-grid">{industries.map((industry, index) => <Reveal key={industry.name} delay={(index % 4) * 0.045}><IndustryCard industry={industry} index={index} /></Reveal>)}</div>
        </div>
      </section>

      <section className="why-section section-pad">
        <div className="container why-grid">
          <Reveal><div className="why-statement"><Eyebrow>04 / The JanJa approach</Eyebrow><h2>Good technology starts with <span>understanding.</span></h2><p>We start with the people and the problem. Then we choose the right tools—not the other way around.</p><TextLink href="/who-we-are">Our point of view</TextLink></div></Reveal>
          <div className="why-list">
            {[
              ["01", "Built around your needs", "Solutions shaped by real requirements, not one-size-fits-all templates."],
              ["02", "Modern by design", "Scalable technology and clear experiences that can grow with your business."],
              ["03", "AI with a purpose", "We explore AI where it can make a practical difference to people and processes."],
              ["04", "Together, end to end", "From first conversation to ongoing support, we work as part of your team."],
            ].map(([number, title, copy], index) => <Reveal key={number} delay={index * 0.06}><div className="why-item"><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><MoveUpRight size={16} /></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="container">
          <Reveal><div className="section-head-row"><SectionHeading label="05 / How we work" title={<>Clarity at every<br /><span>step.</span></>} description="A collaborative process designed to make progress visible and decisions easier." /><span className="process-side-note">A good process leaves room<br />for better questions.</span></div></Reveal>
          <div className="process-grid">{processSteps.map((step, index) => <Reveal key={step.number} delay={index * 0.055}><article className="process-step"><span className="process-number">{step.number}</span><span className="process-node" /><h3>{step.title}</h3><p>{step.description}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section className="work-home section-pad">
        <div className="container">
          <Reveal><div className="section-head-row"><SectionHeading label="06 / Selected concepts" title={<>A glimpse of what<br /><span>we can build.</span></>} description="Concept projects to show our approach. Every project shown here is a demo—not client work." /><TextLink href="/work">View all concepts</TextLink></div></Reveal>
          <div className="project-grid project-grid-home">{projects.slice(0, 3).map((project) => <Reveal key={project.name}><ProjectCard project={project} /></Reveal>)}</div>
          <p className="demo-disclaimer">All portfolio visuals and names are illustrative sample concepts, not verified client engagements.</p>
        </div>
      </section>

      <section className="home-note-section">
        <div className="container home-note"><span className="note-mark">↗</span><div><Eyebrow>Built by people, for people</Eyebrow><p>We’re a young, collaborative team learning and building together—one meaningful solution at a time.</p></div><Link href="/team" className="round-link" aria-label="Meet the team"><ArrowUpRight size={17} /></Link></div>
      </section>

      <CTASection />
    </>
  );
}
