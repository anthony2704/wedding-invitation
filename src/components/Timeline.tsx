import { wedding } from "@/data/wedding";

export default function Timeline() {
  return (
    <section className="timeline-section section-pad" aria-labelledby="timeline-title">
      <div className="section-shell"><div className="section-lead"><h2 className="section-title serif" id="timeline-title">Order of<br />the day</h2><p className="section-subtitle">Come as you are. Stay for the last song.</p></div>
        <div className="timeline" aria-label="Wedding day schedule">{wedding.timeline.map((item) => <div className="timeline-item" key={item.time}><span className="timeline-dot" aria-hidden="true" /><span className="timeline-time">{item.time}</span><span className="timeline-label">{item.label}</span></div>)}</div>
      </div>
    </section>
  );
}
