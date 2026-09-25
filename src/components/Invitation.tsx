import { wedding } from "@/data/wedding";

export default function Invitation() {
  return (
    <section className="intro-section section-pad" aria-labelledby="invitation-title">
      <div className="section-shell">
        <div className="intro-grid">
          <div><p className="eyebrow">Together with our families</p><h2 className="intro-heading serif" id="invitation-title">A formal invitation</h2></div>
          <p className="intro-copy serif">{wedding.invitationText}</p>
        </div>
        <div className="intro-foot"><p className="intro-date serif">{wedding.longDate}</p><p className="intro-monogram" aria-label="Anthony and Bride Name">A · B</p></div>
      </div>
    </section>
  );
}
