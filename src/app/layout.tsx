import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://janja.com"),
  title: {
    default: "JanJa — Build. Automate. Grow.",
    template: "%s — JanJa",
  },
  description: "JanJa helps businesses move forward with thoughtful software, digital experiences, and practical automation.",
  openGraph: {
    title: "JanJa — Build. Automate. Grow.",
    description: "Thoughtful technology for the next step in your business.",
    url: "https://janja.com",
    siteName: "JanJa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JanJa — Build. Automate. Grow.",
    description: "Thoughtful technology for the next step in your business.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        <main><PageTransition>{children}</PageTransition></main>
        <SiteFooter />
      </body>
    </html>
  );
}
