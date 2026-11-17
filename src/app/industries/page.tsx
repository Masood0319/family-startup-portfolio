import type { Metadata } from "next";
import { ArrowUpRight, Bot, Globe2, Layers3 } from "lucide-react";
import Link from "next/link";
import { industries } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { CTASection, PageIntro, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Industries",
  description: "Explore practical digital solutions for education, healthcare, manufacturing, retail, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageIntro label="Who we help / 01" title={<>Technology shaped<br /><span>around your world.</span></>} description="Every industry has its own language, workflows, and customer expectations. We take time to understand yours before we recommend a solution." aside={<span className="intro-side-note"><Globe2 size={18} />Local understanding.<br />Global perspective.</span>} />
      <section className="industry-detail-section section-pad">
        <div className="container">
          <Reveal><div className="industry-detail-lead"><SectionHeading label="Industry perspectives" title={<>Start with the<br /><span>real-world challenge.</span></>} description="These are starting points for a conversation—not off-the-shelf promises. The right solution depends on your people, processes, and priorities." /><div className="industry-icon-stack"><span><Layers3 size={19} /></span><span><Bot size={19} /></span><span><Globe2 size={19} /></span></div></div></Reveal>
          <div className="industry-detail-list">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.name} delay={(index % 2) * 0.06}>
                  <article className={`industry-detail-card industry-${industry.tone}`} id={`industry-${index + 1}`}>
                    <span className="industry-photo" role="img" aria-label={`${industry.name} context photograph`} style={{ backgroundImage: `url("${industry.image}")` }} />
                    <div className="industry-detail-title"><span className="industry-large-icon"><Icon size={23} strokeWidth={1.55} /></span><span className="industry-number">0{index + 1}</span><h2>{industry.name}</h2><p>{industry.short}</p></div>
                    <div className="industry-detail-body">
                      <div><span className="eyebrow">The challenge</span><p>{industry.challenge}</p></div>
                      <div className="industry-solutions-grid">
                        <div><span className="eyebrow">Website solutions</span><p>{industry.website}</p></div>
                        <div><span className="eyebrow">Software systems</span><p>{industry.systems}</p></div>
                        <div><span className="eyebrow">Possible AI uses</span><p>{industry.ai}</p></div>
                      </div>
                    </div>
                    <Link href="/contact" className="industry-detail-link">Discuss your needs <ArrowUpRight size={15} /></Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection title="Your industry is unique. Your solution should be too." description="Let's understand your context and explore what thoughtful technology could make possible." />
    </>
  );
}
