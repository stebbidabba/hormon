import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/contexts/language-context";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOTION Labs — Saliva Hormone Testing",
  description:
    "Accurate at-home saliva testing for free testosterone, with optional cortisol and DHEA.",
  metadataBase: new URL("https://motion-labs.example"),
  openGraph: {
    title: "MOTION Labs — Saliva Hormone Testing",
    description:
      "Know your T — or get the full picture. Free testosterone alone, or bundle with cortisol and DHEA.",
    type: "website",
    url: "https://motion-labs.example",
    images: [
      {
        url: "/brand/name.png",
        width: 1200,
        height: 630,
        alt: "MOTION Labs",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <LanguageProvider>
          {children}
          <Toaster richColors />
        </LanguageProvider>
      </body>
    </html>
  );
}
