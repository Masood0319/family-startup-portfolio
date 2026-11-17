import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { WorkGallery } from "@/components/work-gallery";
import { Eyebrow, PageIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore JanJa's illustrative demo concepts for websites, management systems, AI automation, and e-commerce.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro label="Selected concepts / 01" title={<>Ideas made<br /><span>tangible.</span></>} description="A collection of illustrative concepts showing how we approach digital experiences, business tools, and automation." aside={<span className="intro-side-note">A work in progress,<br />by design.</span>} />
      <section className="work-section section-pad">
        <div className="container">
          <div className="work-notice"><span>!</span><p><strong>Sample concepts only.</strong> These projects are illustrative demos, not client engagements or claims of delivered customer work.</p></div>
          <WorkGallery />
        </div>
      </section>
      <section className="work-approach"><div className="container work-approach-inner"><Eyebrow>Our approach</Eyebrow><p>Every real project starts with a conversation—not a template.</p><Link href="/services" className="button button-light">Explore how we work <ArrowUpRight size={15} /></Link></div></section>
    </>
  );
}
