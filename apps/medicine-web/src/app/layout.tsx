import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./study-flow.css";
import "./hubs.css";
import "./clinical-workspace.css";
import "./physiology.css";
import { AppShell } from "@/components/app-shell";
import { PWARegister } from "@/components/pwa-register";
import { ThemeProvider } from "@/components/theme-provider";
import { themeInitScript } from "@/lib/themes";
import { studyFlowButtonInitScript } from "@/lib/study-flow-preferences";
import { qbankReferenceInitScript } from "@/lib/qbank-reference";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const notebookFont = localFont({ src: "./fonts/Gaegu-Regular.woff2", variable: "--font-notebook", weight: "400", display: "swap", preload: false });

export const metadata: Metadata = {
  title: "The Medicine",
  description: "Medicine study web app",
  applicationName: "The Medicine",
  manifest: `${basePath}/manifest.webmanifest`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "The Medicine",
  },
  icons: {
    icon: [
      { url: `${basePath}/icon.svg`, type: "image/svg+xml" },
      { url: `${basePath}/icons/icon-192.png`, sizes: "192x192", type: "image/png" },
      { url: `${basePath}/icons/icon-512.png`, sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: `${basePath}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" }],
    shortcut: [`${basePath}/icon.svg`],
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1917",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={notebookFont.variable} suppressHydrationWarning>
      <head><link rel="stylesheet" href={`${basePath}/highlights.css`} /><script id="medicine-theme-init" dangerouslySetInnerHTML={{ __html: themeInitScript + studyFlowButtonInitScript + qbankReferenceInitScript }} /></head>
      <body>
        <PWARegister />
        <ThemeProvider><AppShell>{children}</AppShell></ThemeProvider>
      </body>
    </html>
  );
}

