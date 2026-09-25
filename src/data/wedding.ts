export type TimelineItem = { time: string; label: string };
export type EventDetails = { label: string; time: string; venue: string; address: string; mapUrl: string };
export type GalleryItem = { src: string; alt: string; caption: string };

export type WeddingData = {
  groomName: string; brideName: string; date: string; displayDate: string; longDate: string; city: string; invitationText: string;
  ceremony: EventDetails; reception: EventDetails; timeline: TimelineItem[]; gallery: GalleryItem[]; rsvpDeadline: string;
  calendar: { title: string; start: string; end: string; location: string; description: string };
  music: { enabled: boolean; src: string };
};

export const wedding: WeddingData = {
  groomName: "Văn Khoa",
  brideName: "Ngọc Anh",
  date: "21 February 2027",
  displayDate: "21 · 02 · 2027",
  longDate: "Sunday, the twenty-first of February two thousand twenty-seven",
  city: "Ho Chi Minh City · Vietnam",
  invitationText: "We invite you to celebrate the beginning of our next chapter.",
  ceremony: {
    label: "The ceremony", time: "17:30", venue: "CEREMONY VENUE", address: "CEREMONY ADDRESS · HO CHI MINH CITY",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=CEREMONY+VENUE+Ho+Chi+Minh+City",
  },
  reception: {
    label: "The reception", time: "19:00", venue: "RECEPTION VENUE", address: "RECEPTION ADDRESS · HO CHI MINH CITY",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=RECEPTION+VENUE+Ho+Chi+Minh+City",
  },
  timeline: [
    { time: "17:00", label: "Guest arrival" }, { time: "17:30", label: "Ceremony" },
    { time: "19:00", label: "Dinner" }, { time: "21:00", label: "Celebration" },
  ],
  gallery: [
    { src: "/images/story-garden.png", alt: "A bride walking through an olive garden in an ivory dress", caption: "A quiet beginning" },
    { src: "/images/details-still-life.png", alt: "Ivory stationery, olive leaves and a burgundy flower on stone", caption: "The little details" },
    { src: "/images/hero-terrace.png", alt: "A linen-covered table on a Mediterranean terrace overlooking the sea", caption: "Somewhere by the water" },
    { src: "/images/details-still-life.png", alt: "A close editorial view of handmade paper and olive branches", caption: "For the days to come" },
  ],
  rsvpDeadline: "Please reply by 12 November 2026",
  calendar: {
    title: "Văn Khoa & Ngọc Anh · Wedding celebration", start: "20270221T173000", end: "20270221T230000",
    location: "CEREMONY VENUE, Ho Chi Minh City", description: "Wedding celebration for Văn Khoa and Ngọc Anh.",
  },
  music: { enabled: false, src: "/music/wedding.mp3" },
};
