import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Khimi Consulting",
  description: "Reliable Chemical Solutions for Mining & Industry in Mongolia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${roboto.className} min-h-full flex flex-col`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
