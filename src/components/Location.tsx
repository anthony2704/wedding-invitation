"use client";

import { wedding } from "@/data/wedding";

function makeCalendarFile() {
  const event = wedding.calendar;
  return [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Anthony and Bride Name//Wedding Invitation//EN", "BEGIN:VEVENT",
    `DTSTART:${event.start}`, `DTEND:${event.end}`, `SUMMARY:${event.title}`, `LOCATION:${event.location}`,
    `DESCRIPTION:${event.description}`, "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");
}

export default function Location() {
  function downloadCalendar() {
    const url = URL.createObjectURL(new Blob([makeCalendarFile()], { type: "text/calendar;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "anthony-bride-name-wedding.ics"; anchor.click(); URL.revokeObjectURL(url);
  }
  return (
    <section className="location-section section-pad" aria-labelledby="location-title">
      <div className="section-shell location-grid"><div><p className="eyebrow">Getting there</p><h2 className="location-title serif" id="location-title">Find us</h2></div>
        <div><p className="location-copy">The evening begins at the ceremony and carries on nearby, under the open sky.</p><div className="location-details"><p className="eyebrow">The venue</p><h3>{wedding.ceremony.venue}</h3><p>{wedding.ceremony.address}</p><a className="link-arrow" href={wedding.ceremony.mapUrl} target="_blank" rel="noreferrer">Open in Google Maps</a></div><button className="calendar-button" type="button" onClick={downloadCalendar}>Add to calendar</button></div>
      </div>
    </section>
  );
}
