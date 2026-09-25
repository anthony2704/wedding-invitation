export type Guest = { id: string; inviteCode: string; name: string; guestLimit: number; group: string };

const mockGuests: Guest[] = [
  { id: "mock-guest-001", inviteCode: "8FK2P", name: "Minh", guestLimit: 2, group: "friends" },
  { id: "mock-guest-002", inviteCode: "FAMILY1", name: "Family", guestLimit: 4, group: "family" },
];

export function getGuestByInviteCode(code: string) {
  return mockGuests.find((guest) => guest.inviteCode.toLowerCase() === code.toLowerCase());
}
