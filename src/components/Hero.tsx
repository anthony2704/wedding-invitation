import Image from "next/image";
import { wedding } from "@/data/wedding";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Image className="hero-image" src="/images/hero-terrace.png" alt="A linen-covered table on a Mediterranean terrace overlooking the sea" fill priority sizes="100vw" />
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Back to the top">A<span className="monogram-mark">·</span>B</a>
        <nav className="site-nav" aria-label="Invitation sections"><a href="#details">Details</a><a href="#story">Our story</a><a href="#rsvp">RSVP</a></nav>
      </header>
      <div className="section-shell hero-content">
        <p className="eyebrow">A celebration in good company</p>
        <h1 className="hero-title serif" id="hero-title" tabIndex={-1}>We are<em>getting married</em></h1>
        <div className="hero-meta"><p className="hero-names serif">{wedding.groomName} <span>&amp;</span> {wedding.brideName}</p><p className="hero-date">{wedding.date}</p><p className="hero-place">{wedding.city}</p></div>
        <span className="hero-ornament" aria-hidden="true">A · B</span>
      </div>
    </section>
  );
}
