"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { company, services } from "@/data/site";
import { Eyebrow, PageIntro } from "@/components/ui";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const phoneHref = company.phone.includes("X") ? null : `tel:${company.phone.replace(/[^\d+]/g, "")}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSubmitted(true);
  }

  return (
    <>
      <PageIntro label="Start a conversation / 01" title={<>Let&apos;s discuss your<br /><span>next project.</span></>} description="Tell us about your business, your challenges, and what you want to build. Our team will get back to you." aside={<span className="intro-side-note">A good first step<br />starts with hello.</span>} />
      <section className="contact-section section-pad">
        <div className="container contact-grid">
          <div className="contact-details">
            <Eyebrow>Get in touch</Eyebrow>
            <h2>Let’s find a way<br />forward.</h2>
            <p className="body-copy">Share as much or as little as you know. We’re happy to help you shape the brief together.</p>
            <div className="contact-detail-list">
              <a href={`mailto:${company.email}`}><span><Mail size={17} /></span><div><small>Email</small><strong>{company.email}</strong></div><ArrowUpRight size={15} /></a>
              {phoneHref ? <a href={phoneHref}><span><Phone size={17} /></span><div><small>Phone / WhatsApp</small><strong>{company.phone}</strong></div><ArrowUpRight size={15} /></a> : <div><span><Phone size={17} /></span><div><small>Phone / WhatsApp</small><strong>{company.phone}</strong></div></div>}
              <div><span><MapPin size={17} /></span><div><small>Location</small><strong>{company.location}</strong></div></div>
            </div>
            <p className="contact-placeholder-note">Contact details are placeholders. Confirm them before publishing.</p>
          </div>
          <div className="contact-form-wrap">
            <div className="contact-form-heading"><div><Eyebrow>Your project</Eyebrow><h2>Tell us a little more.</h2></div><span className="required-note">* Required</span></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>Full name <span>*</span><input name="name" autoComplete="name" placeholder="Your name" required /></label>
                <label>Business / organization<input name="organization" autoComplete="organization" placeholder="Company or organization" /></label>
                <label>Email address <span>*</span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
                <label>Phone / WhatsApp<input name="phone" type="tel" autoComplete="tel" placeholder="+92 ..." /></label>
                <label>Service you’re interested in<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.category} value={service.category}>{service.category}</option>)}</select></label>
                <label>Project budget<select name="budget" defaultValue=""><option value="" disabled>Select a range (optional)</option><option>Under PKR 100,000</option><option>PKR 100,000–500,000</option><option>PKR 500,000–1,500,000</option><option>PKR 1,500,000+</option><option>Not sure yet</option></select></label>
                <label className="form-full">Project description <span>*</span><textarea name="description" rows={5} placeholder="What are you hoping to build or improve?" required /></label>
              </div>
              <div className="form-submit-row"><button type="submit" className="button">Review project details <ArrowUpRight size={16} /></button><span>We’ll only use these details to respond to your inquiry.</span></div>
              {submitted && <div className="form-status" role="status"><span><Check size={16} /></span><p><strong>Your details look ready.</strong> This form is not connected to an email service yet, so nothing has been sent. Please email <a href={`mailto:${company.email}`}>{company.email}</a> to reach us now.</p></div>}
            </form>
          </div>
        </div>
      </section>
      <section className="contact-bottom"><div className="container"><p>Prefer a quick hello?</p><a href={`mailto:${company.email}`}>{company.email} <ArrowUpRight size={15} /></a><span>Replace with your verified contact details before launch.</span></div></section>
    </>
  );
}
