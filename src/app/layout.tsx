import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyActionBar } from "@/components/layout/sticky-action-bar";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { RightSidebar } from "@/components/layout/right-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ColorForge AI | Ultimate Color Design Platform",
  description: "The most advanced color design platform. Generate palettes, gradients, and tailwind scales. Create perfect color systems instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Breadcrumbs />
          <CursorGlow />
          <div className="flex flex-1 w-full max-w-[100vw] overflow-hidden">
            <div className="flex flex-col flex-1 min-w-0 h-full">
              <main className="flex-1 w-full">{children}</main>
              <Footer />
            </div>
            <RightSidebar />
          </div>
          <StickyActionBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
