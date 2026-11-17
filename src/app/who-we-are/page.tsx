import type { Metadata } from "next";
import { ArrowDownRight, Compass, HeartHandshake, Lightbulb, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CTASection, Eyebrow, PageIntro, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Who We Are",
  description: "Meet JanJa: a collaborative technology team making digital transformation practical, accessible, and meaningful.",
};

const values = [
  { title: "Innovation", description: "Always explore better ways to solve the problem in front of us.", icon: Lightbulb },
  { title: "Integrity", description: "Be honest, transparent, and responsible in the work we do.", icon: ShieldCheck },
  { title: "Collaboration", description: "Great solutions happen when different perspectives work together.", icon: HeartHandshake },
  { title: "Quality", description: "Create thoughtful, reliable solutions people can maintain and trust.", icon: Target },
  { title: "Customer success", description: "Understand the need before deciding what to build.", icon: Compass },
  { title: "Continuous learning", description: "Stay curious, adapt, and keep growing with the technology around us.", icon: Sparkles },
];

export default function WhoWeArePage() {
  return (
    <>
      <PageIntro label="Our story / 01" title={<>Technology with purpose.<br /><span>Innovation with impact.</span></>} description="We believe every business deserves access to modern technology. Our mission is to make digital transformation practical, accessible, and meaningful for organizations of every size." aside={<span className="intro-side-note">An idea grounded in<br />real-world needs <ArrowDownRight size={17} /></span>} />
      <section className="story-section section-pad">
        <div className="container story-grid">
          <Reveal><div className="story-marker"><Eyebrow>Where it begins</Eyebrow><span className="story-number">01<span>—</span>06</span><p>A team at the beginning of a bigger journey.</p></div></Reveal>
          <Reveal delay={0.08}><div className="story-copy"><h2>Good technology should solve problems, not create new ones.</h2><p>JanJa started with a simple idea: technology should solve real problems, not create unnecessary complexity.</p><p>Founded by a team of young technology enthusiasts, JanJa brings together creativity, engineering, and business thinking to help organizations embrace the digital future.</p><p>From websites and management systems to AI-powered automation, we aim to build solutions that make everyday business operations smarter and more efficient.</p><p>We are building JanJa with a long-term vision of becoming a trusted technology partner for businesses in Pakistan and around the world.</p></div></Reveal>
        </div>
      </section>
      <section className="purpose-section section-pad">
        <div className="container purpose-grid">
          <Reveal><article className="purpose-card purpose-mission"><span className="purpose-icon"><Target size={20} /></span><Eyebrow>Our mission</Eyebrow><h2>Make progress possible.</h2><p>To empower businesses through accessible technology, thoughtful software engineering, and intelligent digital solutions.</p></article></Reveal>
          <Reveal delay={0.1}><article className="purpose-card purpose-vision"><span className="purpose-icon"><Compass size={20} /></span><Eyebrow>Our vision</Eyebrow><h2>Build trust that travels.</h2><p>To become a globally trusted technology company helping organizations transform the way they work, serve customers, and grow.</p></article></Reveal>
        </div>
      </section>
      <section className="values-section section-pad">
        <div className="container">
          <Reveal><SectionHeading label="What guides us" title={<>Principles over<br /><span>promises.</span></>} description="The choices we make matter as much as the solutions we deliver." /></Reveal>
          <div className="value-grid">{values.map(({ title, description, icon: Icon }, index) => <Reveal key={title} delay={(index % 3) * 0.05}><article className="value-card"><span className="value-icon"><Icon size={20} strokeWidth={1.6} /></span><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div>
        </div>
      </section>
      <section className="philosophy-section">
        <div className="container philosophy-inner"><Reveal><Eyebrow>Our philosophy</Eyebrow><h2>Understand first.<br /><span>Design smart.</span><br />Build better.</h2></Reveal><Reveal delay={0.12}><div className="philosophy-diagram"><div><span>01</span><strong>Business<br />challenges</strong><small>Listen & learn</small></div><i>+</i><div><span>02</span><strong>Thoughtful<br />technology</strong><small>Design & build</small></div><i>=</i><div className="diagram-outcome"><span>03</span><strong>Meaningful<br />outcomes</strong><small>Improve & grow</small></div></div></Reveal></div>
      </section>
      <CTASection title="Let's make technology work for you." description="Bring us the challenge. We'll bring curiosity, a collaborative mindset, and a practical plan." />
    </>
  );
}
