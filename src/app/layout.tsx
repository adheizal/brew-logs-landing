import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brew Logs",
  description: "Track your brews. Keep it consistent.",
  metadataBase: new URL("https://brewlog.app"),
  icons: {
    icon: '/icon.avif',
    apple: '/icon.avif',
  },
  openGraph: {
    title: "Brew Logs",
    description: "Track your brews. Keep it consistent.",
    url: "https://brewlog.app",
    type: "website",
    images: [{
      url: '/icon.avif',
    }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}