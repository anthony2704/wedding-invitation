"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { wedding } from "@/data/wedding";

const OPENING_DURATION = 3300;

type InvitationCoverProps = {
  onInvitationOpen?: () => void;
  onComplete?: () => void;
};

export default function InvitationCover({ onInvitationOpen, onComplete }: InvitationCoverProps) {
  const [opening, setOpening] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (!opening) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => {
      setComplete(true);
      onComplete?.();
    }, reducedMotion ? 450 : OPENING_DURATION);

    return () => window.clearTimeout(timer);
  }, [onComplete, opening]);

  function openInvitation() {
    if (opening) return;
    setOpening(true);
    onInvitationOpen?.();
  }

  return (
    <section className="cover envelope-cover" data-state={complete ? "complete" : opening ? "opening" : "closed"} aria-label="Wedding invitation cover">
      <div className="ambient-focus" aria-hidden="true" />
      <div className="cover-stage">
        <div className="envelope-scene">
          <div className="envelope-shell">
            {/* Layer order: seal > flap > folds > card > interior. The front fold masks the card bottom. */}
            <div className="envelope-interior" aria-hidden="true" />
            <div className="envelope-card-track">
              <article className="envelope-card" aria-label="Wedding invitation preview">
              <p className="envelope-card-kicker">Together with our families</p>
              <p className="envelope-card-names serif">{wedding.groomName}<span>&amp;</span>{wedding.brideName}</p>
              <p className="envelope-card-date">{wedding.displayDate}</p>
              <p className="envelope-card-place">{wedding.city}</p>
              </article>
            </div>
            <span className="envelope-fold envelope-fold-left" aria-hidden="true" />
            <span className="envelope-fold envelope-fold-right" aria-hidden="true" />
            <span className="envelope-fold envelope-fold-front" aria-hidden="true" />
            <span className="envelope-flap" aria-hidden="true" />
            <button className="wax-seal" type="button" onClick={openInvitation} disabled={opening} aria-label="Open wedding invitation">
              <span className="wax-seal-crop" aria-hidden="true">
                <Image className="wax-seal-art" src="/images/wax-seal-ka.png" alt="" width={1278} height={1230} priority draggable="false" />
              </span>
            </button>
          </div>
        </div>
        <p className="cover-hint">Tap the seal to open</p>
      </div>
    </section>
  );
}
