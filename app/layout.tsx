import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alex Rivera — Full-Stack Engineer",
    template: "%s | Alex Rivera",
  },
  description:
    "Full-stack engineer specializing in React, Next.js, and Node.js. Building fast, beautiful, and accessible web experiences.",
  keywords: [
    "Full-Stack Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Alex Rivera" }],
  creator: "Alex Rivera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexrivera.dev",
    title: "Alex Rivera — Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in React, Next.js, and Node.js. Building fast, beautiful, and accessible web experiences.",
    siteName: "Alex Rivera Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rivera — Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in React, Next.js, and Node.js.",
    creator: "@alexrivera",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={GeistSans.variable + " " + GeistMono.variable}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
