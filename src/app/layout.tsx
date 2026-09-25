import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Anthony & BRIDE NAME · Wedding Invitation",
  description: "A quiet invitation to celebrate Anthony and BRIDE NAME.",
  openGraph: {
    title: "Anthony & BRIDE NAME · Wedding Invitation",
    description: "A quiet invitation to celebrate Anthony and BRIDE NAME.",
    type: "website",
    images: [{ url: "/images/hero-terrace.png", width: 1536, height: 1024, alt: "A Mediterranean terrace prepared for a wedding celebration" }],
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
