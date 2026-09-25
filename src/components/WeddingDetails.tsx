import { wedding, type EventDetails } from "@/data/wedding";

function DetailBlock({ event }: { event: EventDetails }) {
  return (
    <article className="detail-block">
      <div className="detail-block-header"><p className="eyebrow">{event.label}</p><p className="detail-time">{event.time}</p></div>
      <h3 className="detail-name serif">{event.venue}</h3><p className="detail-address">{event.address}</p>
      <a className="detail-link link-arrow" href={event.mapUrl} target="_blank" rel="noreferrer">View on maps</a>
    </article>
  );
}

export default function WeddingDetails() {
  return (
    <section className="details-section section-pad" id="details" aria-labelledby="details-title">
      <div className="section-shell">
        <div className="section-lead"><h2 className="section-title serif" id="details-title">The day,<br />in detail</h2><p className="section-subtitle">Two places, one evening, and everyone we love in the same room.</p></div>
        <div className="details-grid"><DetailBlock event={wedding.ceremony} /><DetailBlock event={wedding.reception} /></div>
      </div>
    </section>
  );
}
