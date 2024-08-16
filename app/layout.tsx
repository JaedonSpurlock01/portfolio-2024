import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { data } from "@/lib/data";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Jaedon Spurlock",
  description: "Jaedon Spurlock's Portfolio",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? data.url),
  openGraph: {
    title: "Jaedon Spurlock",
    description: "Jaedon Spurlock's Portfolio",
    url: new URL(process.env.NEXT_PUBLIC_APP_URL ?? data.url),
    images: [{ url: "/opengraph-image.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="block absolute top-0 z-[-2] h-full w-full dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(186,198,217,0.4),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(48,68,100,0.4),rgba(255,255,255,0))]" />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
