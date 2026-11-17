"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { company, navigation, services, socialLinks } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="nav-wrap container">
        <Link href="/" className="brand" aria-label="JanJa home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>JANJA<span className="brand-period">.</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => item.href === "/services" ? (
            <div className="nav-dropdown" key={item.href}>
              <Link href={item.href} className={pathname === item.href ? "nav-link active" : "nav-link"}>
                {item.label}<ChevronDown size={12} />
              </Link>
              <div className="nav-dropdown-menu" aria-label="Services">
                {services.map((service, index) => <Link key={service.category} href={`/services#service-${index + 1}`}>{service.category}</Link>)}
              </div>
            </div>
          ) : (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "nav-link active" : "nav-link"}>{item.label}</Link>
          ))}
        </nav>
        <Link className="button button-small button-light nav-cta" href="/contact">
          Start a project <ArrowUpRight size={15} />
        </Link>
        <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.24, ease: "easeOut" }}>
            <div className="mobile-nav-inner container">
              {navigation.map((item, index) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.035 }}>
                  <Link href={item.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
                    <span>{item.label}</span><ArrowDownRight size={17} />
                  </Link>
                  {item.href === "/services" && <div className="mobile-nav-submenu">{services.map((service, serviceIndex) => <Link key={service.category} href={`/services#service-${serviceIndex + 1}`} onClick={() => setOpen(false)}>{service.category}</Link>)}</div>}
                </motion.div>
              ))}
              <p className="mobile-nav-note">{company.tagline}</p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Link href="/" className="brand"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>JANJA<span className="brand-period">.</span></span></Link>
            <p>Thoughtful technology for the next step in your business.</p>
            <Link href="/contact" className="footer-email">{company.email}<ArrowUpRight size={15} /></Link>
          </div>
          <div className="footer-col">
            <p className="eyebrow">Explore</p>
            {navigation.slice(1, 4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/work">Our work</Link>
          </div>
          <div className="footer-col">
            <p className="eyebrow">What we do</p>
            {services.map((service) => <Link key={service.category} href="/services">{service.category}</Link>)}
          </div>
          <div className="footer-col footer-contact">
            <p className="eyebrow">Say hello</p>
            <span>{company.location}</span>
            <span>{company.phone}</span>
            <Link href="/contact">Start a conversation <ArrowUpRight size={14} /></Link>
            <div className="social-links">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>{social.shortLabel}</a>)}</div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} JanJa. All rights reserved.</span>
          <span>Built with intention. <span className="footer-spark">✳</span></span>
        </div>
      </div>
    </footer>
  );
}
