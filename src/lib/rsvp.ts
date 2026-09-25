export type RsvpPayload = {
  guestName: string; attending: boolean; guestCount: number; dietaryNote: string; message: string; guestId?: string;
};

export async function submitRsvp(payload: RsvpPayload) {
  const isSupabaseConfigured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  if (!isSupabaseConfigured) {
    // Safe local development behavior. Replace this branch with the Supabase insert later.
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    return { ok: true, mode: "mock" as const, payload };
  }
  // Keep Supabase behind this boundary so the visual MVP works without credentials.
  console.info("Supabase RSVP adapter ready for", payload.guestName);
  return { ok: true, mode: "supabase" as const, payload };
}
