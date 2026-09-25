"use client";

import { useCallback, useEffect, useState } from "react";
import type { Guest } from "@/data/guests";
import InvitationCover from "@/components/InvitationCover";
import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import WeddingDetails from "@/components/WeddingDetails";
import EditorialPhoto from "@/components/EditorialPhoto";
import Timeline from "@/components/Timeline";
import Story from "@/components/Story";
import Location from "@/components/Location";
import RSVP from "@/components/RSVP";
import MusicControl from "@/components/MusicControl";
import Footer from "@/components/Footer";

export default function InvitationExperience({ guest }: { guest?: Guest }) {
  const [coverComplete, setCoverComplete] = useState(false);

  const handleCoverComplete = useCallback(() => {
    setCoverComplete(true);
    window.requestAnimationFrame(() => {
      document.getElementById("hero-title")?.focus({ preventScroll: true });
    });
  }, []);
  const handleInvitationOpen = useCallback(() => {
    // Future hook for optional music playback after explicit user interaction.
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (!coverComplete) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [coverComplete]);

  return <><InvitationCover onInvitationOpen={handleInvitationOpen} onComplete={handleCoverComplete} /><div className={`wedding-site${coverComplete ? " wedding-site--ready" : ""}`}><main><Hero /><Invitation /><WeddingDetails /><EditorialPhoto /><Timeline /><Story /><Location /><RSVP guest={guest} /></main><Footer /><MusicControl /></div></>;
}
