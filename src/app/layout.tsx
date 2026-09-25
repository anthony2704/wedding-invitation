import type { Metadata, Viewport } from "next";
import { wedding } from "@/data/wedding";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wedding-invitation-peach-ten-90.vercel.app";
const coupleName = `${wedding.groomName} & ${wedding.brideName}`;
const invitationDescription = wedding.invitationText;
const openGraphImage = "/images/og-wedding.jpg";
const openGraphAlt = `${coupleName} wedding invitation`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${coupleName} — Wedding`,
  description: invitationDescription,
  alternates: { canonical: siteUrl },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: coupleName,
    description: invitationDescription,
    url: siteUrl,
    siteName: `${coupleName} Wedding Invitation`,
    type: "website",
    images: [{ url: openGraphImage, width: 1200, height: 630, alt: openGraphAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: coupleName,
    description: invitationDescription,
    images: [openGraphImage],
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
