"use client";

import { useState, type FormEvent } from "react";
import { wedding } from "@/data/wedding";
import type { Guest } from "@/data/guests";
import { submitRsvp } from "@/lib/rsvp";

export default function RSVP({ guest }: { guest?: Guest }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [attending, setAttending] = useState("yes");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); const form = new FormData(event.currentTarget);
    await submitRsvp({ guestName: String(form.get("guestName") ?? ""), attending: attending === "yes", guestCount: Number(form.get("guestCount") ?? 1), dietaryNote: String(form.get("dietaryNote") ?? ""), message: String(form.get("message") ?? ""), guestId: guest?.id });
    setStatus("sent");
  }

  return (
    <section className="rsvp-section section-pad" id="rsvp" aria-labelledby="rsvp-title"><div className="section-shell rsvp-grid">
      <div className="rsvp-intro"><p className="eyebrow">A note from you</p><h2 className="rsvp-title serif" id="rsvp-title">RSVP</h2><p className="rsvp-copy">{guest ? `Dear ${guest.name}, we hope you can be with us.` : "We hope you can be with us for the evening."}</p><p className="section-subtitle" style={{ marginTop: "2rem" }}>{wedding.rsvpDeadline}</p></div>
      {status === "sent" ? <div className="rsvp-form" role="status"><p className="eyebrow">Thank you</p><p className="rsvp-status">Your reply has been received. We&apos;ll keep a place for you.</p></div> : <form className="rsvp-form" onSubmit={handleSubmit}>
        <div className="field-group"><label className="field-label" htmlFor="guestName">Guest name</label><input className="rsvp-input" id="guestName" name="guestName" defaultValue={guest?.name ?? ""} placeholder="Your name" required /></div>
        <div className="field-group"><span className="field-label">Attending</span><div className="radio-list"><label className="radio-label"><input name="attending" type="radio" value="yes" checked={attending === "yes"} onChange={() => setAttending("yes")} />Joyfully accepts</label><label className="radio-label"><input name="attending" type="radio" value="no" checked={attending === "no"} onChange={() => setAttending("no")} />Regretfully declines</label></div></div>
        <div className="field-group"><label className="field-label" htmlFor="guestCount">Number of guests</label><select className="rsvp-select" id="guestCount" name="guestCount" defaultValue="1">{Array.from({ length: guest?.guestLimit ?? 4 }, (_, index) => index + 1).map((count) => <option key={count} value={count}>{count} {count === 1 ? "guest" : "guests"}</option>)}</select></div>
        <div className="field-group"><label className="field-label" htmlFor="dietaryNote">Dietary requests</label><input className="rsvp-input" id="dietaryNote" name="dietaryNote" placeholder="Optional" /></div>
        <div className="field-group"><label className="field-label" htmlFor="message">A message for us</label><textarea className="rsvp-textarea" id="message" name="message" placeholder="Optional" /></div>
        <button className="rsvp-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send your reply"}</button>
      </form>}
    </div></section>
  );
}
