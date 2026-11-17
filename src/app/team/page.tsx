import type { Metadata } from "next";
import { Code2, HeartHandshake, Lightbulb, Megaphone, PenTool, Settings2 } from "lucide-react";
import { team } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { TeamPortrait } from "@/components/team-portrait";
import { CTASection, Eyebrow, PageIntro, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the sample founding team behind JanJa, a collaborative group of technology, design, and business thinkers.",
};

const disciplines = [
  { title: "Engineering", description: "Turn ideas into reliable, maintainable software.", icon: Code2 },
  { title: "Design", description: "Make every interaction feel clear and considered.", icon: PenTool },
  { title: "Business development", description: "Understand opportunities and build relationships.", icon: HeartHandshake },
  { title: "Marketing", description: "Help the right people discover what we create.", icon: Megaphone },
  { title: "Operations", description: "Keep the details moving, together.", icon: Settings2 },
];

export default function TeamPage() {
  return (
    <>
      <PageIntro label="The people / 01" title={<>Meet the people<br /><span>behind JanJa.</span></>} description="A collaborative team of young thinkers, designers, and developers working together to turn ideas into meaningful digital solutions." aside={<span className="intro-side-note"><Lightbulb size={18} />A small team with<br />a shared ambition.</span>} />
      <section className="team-section section-pad">
        <div className="container">
          <Reveal><div className="section-head-row team-heading"><SectionHeading label="The founding team" title={<>Different strengths.<br /><span>One direction.</span></>} description="These sample profiles are editable placeholders. Replace them with confirmed team details before publishing." /><span className="placeholder-badge"><span /> Sample team profiles</span></div></Reveal>
          <div className="team-grid">
            {team.map((member, index) => (
              <Reveal key={member.id} delay={(index % 3) * 0.05}>
                <article className="team-card">
                  <div className="team-photo-wrap">
                    <TeamPortrait name={member.name} src={member.image} />
                    <span className="team-dept">{member.department}</span>
                  </div>
                  <div className="team-card-heading"><div><h3>{member.name}</h3><p>{member.role}</p></div><div className="team-socials">{member.linkedin && member.linkedin !== "#" ? <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`}><span>in</span></a> : <span className="social-placeholder" aria-label="LinkedIn placeholder">in</span>}{member.github && (member.github !== "#" ? <a href={member.github} target="_blank" rel="noreferrer" aria-label={`${member.name} on GitHub`}><span>gh</span></a> : <span className="social-placeholder" aria-label="GitHub placeholder">gh</span>)}</div></div>
                  <p className="team-bio">{member.bio}</p>
                  <div className="tag-row">{member.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
                  {member.isPlaceholder && <p className="profile-placeholder-note">Sample profile — replace before publishing</p>}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="collab-section section-pad">
        <div className="container collab-grid">
          <Reveal><div><Eyebrow>How we work together</Eyebrow><h2>Good work happens<br />between <span>disciplines.</span></h2><p className="body-copy">We bring the right perspectives into the room early and keep communication open as the work evolves.</p></div></Reveal>
          <div className="discipline-list">{disciplines.map(({ title, description, icon: Icon }, index) => <Reveal key={title} delay={index * 0.045}><article><span className="icon-tile"><Icon size={18} /></span><div><h3>{title}</h3><p>{description}</p></div><span className="discipline-index">0{index + 1}</span></article></Reveal>)}</div>
        </div>
      </section>
      <section className="culture-section section-pad">
        <div className="container culture-grid">
          <Reveal><SectionHeading label="Our culture" title={<>Curious by nature.<br /><span>Thoughtful by choice.</span></>} /></Reveal>
          <div className="culture-words">{["Learn continuously.", "Build collaboratively.", "Think creatively.", "Take ownership.", "Deliver responsibly."].map((item, index) => <Reveal key={item} delay={index * 0.04}><p><span>0{index + 1}</span>{item}</p></Reveal>)}</div>
        </div>
      </section>
      <CTASection title="Want to build something meaningful with us?" description="For collaboration, career inquiries, or simply to say hello, we’d love to hear from you." />
    </>
  );
}
