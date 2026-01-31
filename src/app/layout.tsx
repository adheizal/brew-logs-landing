import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brew Logs",
  description: "Track your brews. Keep it consistent.",
  metadataBase: new URL("https://brewlog.app"),
  openGraph: {
    title: "Brew Logs",
    description: "Track your brews. Keep it consistent.",
    url: "https://brewlog.app",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}