import { wedding } from "@/data/wedding";

export default function Footer() {
  return <footer className="footer"><div className="monogram" aria-label={`${wedding.groomName} and ${wedding.brideName} monogram`}>A<span className="monogram-mark">·</span>B</div><p className="footer-names serif">{wedding.groomName}<em>&amp;</em>{wedding.brideName}</p><p className="footer-note serif">Thank you for being part of our story.</p><div className="footer-meta"><span>{wedding.date}</span><span>{wedding.city}</span></div><p className="footer-credit">With love, A · B</p></footer>;
}
