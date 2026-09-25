import { notFound } from "next/navigation";
import InvitationExperience from "@/components/InvitationExperience";
import { getGuestByInviteCode } from "@/data/guests";

export default async function GuestPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const guest = getGuestByInviteCode(code);
  if (!guest) notFound();
  return <InvitationExperience guest={guest} />;
}
