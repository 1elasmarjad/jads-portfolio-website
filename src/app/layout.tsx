import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { type Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Jad El Asmar",
  description: "Jad - Full Stack Developer",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <GoogleAnalytics gaId="G-GZTZYKFK78" />

      <body>{children}</body>
    </html>
  );
}
