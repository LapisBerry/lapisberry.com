import type { Metadata } from "next";
import { jetBrainsMono } from "./ui/fonts";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "LapisBerry",
  description: "LapisBerry's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased flex`}>
        <Sidebar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
