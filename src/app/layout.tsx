import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CursorTrail from "../components/CursorTrail";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data Cosmos - Your Universe of Unlimited Data Possibilities",
  description:
    "We build cohesive, integrated data ecosystems that turn chaos into clarity.",
  icons: [
    {
      rel: "icon",
      url: "/data_cosmos_favicon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-cosmic-dark text-cosmic-light font-sans`}
      >
        {/* Cursor trail component (canvas overlay) */}
        {/* Rendered on non-touch devices only by component logic */}
        {/* zIndex is below most UI (40) so navbar still appears above (navbar z-50) */}
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
