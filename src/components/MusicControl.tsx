"use client";

import { useEffect, useRef, useState } from "react";
import { wedding } from "@/data/wedding";

export default function MusicControl() {
  const audioRef = useRef<HTMLAudioElement>(null); const [playing, setPlaying] = useState(false);
  useEffect(() => { if (!wedding.music.enabled) return; const audio = audioRef.current; if (!audio) return; const ended = () => setPlaying(false); audio.addEventListener("ended", ended); return () => { audio.pause(); audio.removeEventListener("ended", ended); }; }, []);
  if (!wedding.music.enabled) return null;
  function toggleMusic() { const audio = audioRef.current; if (!audio) return; if (playing) { audio.pause(); setPlaying(false); } else { void audio.play(); setPlaying(true); } }
  return <><audio ref={audioRef} loop src={wedding.music.src} /><button type="button" onClick={toggleMusic} aria-label={playing ? "Pause music" : "Play music"}>{playing ? "Ⅱ" : "♪"}</button></>;
}
