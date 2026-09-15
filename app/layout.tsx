import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { sitePath } from "@/lib/site-path";

export const metadata: Metadata = {
  title: { default: "DSA.map — Java Interview Mental Models", template: "%s · DSA.map" },
  description: "Visual, Java-first DSA pattern explanations for coding interviews.",
  icons: {
    icon: sitePath("/favicon.svg"),
    shortcut: sitePath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><SiteNav />{children}
        <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted-foreground">Built for clear thinking before perfect syntax.</footer>
      </body>
    </html>
  );
}
