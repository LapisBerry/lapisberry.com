import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { jetBrainsMono } from "@/components/ui/fonts";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

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
      <AppRouterCacheProvider>
        <body className={`${jetBrainsMono.variable} antialiased grid grid-cols-[12rem_1fr] grid-rows-[1fr_auto]`}>
          <Sidebar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer className="col-span-2" />
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
