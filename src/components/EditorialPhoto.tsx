import Image from "next/image";

export default function EditorialPhoto() {
  return (
    <section className="photo-break" aria-label="A detail from the invitation">
      <div className="section-shell"><div className="photo-break-image-wrap"><Image className="photo-break-image" src="/images/details-still-life.png" alt="Ivory stationery, olive leaves and a burgundy flower on stone" fill sizes="(max-width: 699px) 100vw, 1120px" /></div><div className="photo-break-caption eyebrow"><span>A small still life</span><span>01 / 04</span></div></div>
    </section>
  );
}
