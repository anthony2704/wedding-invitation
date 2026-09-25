import Image from "next/image";
import { wedding } from "@/data/wedding";

export default function Story() {
  return (
    <section className="story-section section-pad" id="story" aria-labelledby="story-title">
      <div className="section-shell"><div className="story-intro"><p className="eyebrow" id="story-title">A few things worth remembering</p><p className="story-copy serif">Our story is made of <em>ordinary days</em>, held close.</p></div>
        <div className="gallery">{wedding.gallery.map((item, index) => <figure className="gallery-figure" key={`${item.src}-${index}`}><div className="gallery-image-wrap"><Image className="gallery-image" src={item.src} alt={item.alt} fill sizes="(max-width: 699px) 50vw, 35vw" loading={index === 0 ? "eager" : "lazy"} /></div><figcaption className="gallery-caption">{item.caption}</figcaption></figure>)}</div>
      </div>
    </section>
  );
}
