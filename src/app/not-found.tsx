import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-art" aria-hidden="true">404<span>.</span></div>
      <p className="eyebrow"><span className="eyebrow-line" />A wrong turn, not a dead end</p>
      <h1>This page isn’t<br /><span>part of the map.</span></h1>
      <p className="body-copy">The link may have changed, or the page may not exist yet. Let’s get you back on track.</p>
      <div className="button-row"><Link href="/" className="button button-light"><ArrowLeft size={15} />Back to home</Link><Link href="/contact" className="button button-outline">Contact us <ArrowUpRight size={15} /></Link></div>
    </section>
  );
}
