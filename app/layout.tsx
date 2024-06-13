import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active_section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaedon Spurlock",
  description: "Jaedon Spurlock's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
