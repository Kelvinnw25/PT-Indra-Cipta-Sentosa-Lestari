import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT Indra Cipta Sentosa Lestari — Electrical Engineering",
  description:
    "Manufaktur panel listrik dan kontraktor electrical–mechanical untuk industri, gedung, dan fasilitas komersial. Sejak 1990.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
