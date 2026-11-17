import type { Metadata } from "next";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { CTASection, Eyebrow, PageIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore JanJa's web development, custom software, AI automation, digital marketing, consulting, and support services.",
};

const benefits = [
  "Start with the business need, then select the technology.",
  "Build solutions your team can use and maintain.",
  "Keep room to adapt as your organization grows.",
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro label="Our capabilities / 01" title={<>Technology that works<br /><span>for your business.</span></>} description="From a first website to connected business systems, we bring the skills and perspective to help you take the next step." aside={<span className="intro-side-note"><Sparkles size={18} />Thoughtful solutions.<br />Practical by design.</span>} />
      <section className="service-catalog section-pad">
        <div className="container">
          <div className="catalog-intro"><Eyebrow>Explore our capabilities</Eyebrow><p>Choose a starting point. We’ll work with you to shape the right scope around your goals and resources.</p></div>
          <div className="service-categories">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.category}>
                  <article className="service-category" id={`service-${index + 1}`}>
                    <div className="service-category-aside"><span className="category-index">0{index + 1}</span><span className="icon-tile category-icon"><Icon size={22} strokeWidth={1.6} /></span><span className="category-line" /></div>
                    <div className="service-category-content">
                      <p className="eyebrow">{service.category}</p>
                      <h2>{service.title}</h2>
                      <p className="category-description">{service.description}</p>
                      <div className="service-items">{service.items.map((item) => <span key={item}><Check size={14} />{item}</span>)}</div>
                      <div className="category-bottom"><p><strong>Why it matters</strong>{service.outcome}</p><a href="/contact" className="button button-outline">Talk about this <ArrowUpRight size={15} /></a></div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="service-benefits section-pad">
        <div className="container service-benefit-inner"><div><Eyebrow>What stays consistent</Eyebrow><h2>One thoughtful way<br />of working.</h2></div><div className="benefit-list">{benefits.map((benefit, index) => <p key={benefit}><span>0{index + 1}</span>{benefit}</p>)}</div></div>
      </section>
      <CTASection title="Not sure where to start?" description="Tell us what’s slowing you down or what you’d like to make possible. We'll help you find a practical first step." />
    </>
  );
}
