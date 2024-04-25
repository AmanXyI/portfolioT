import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { PHProvider } from "./providers";
import PostHogPageView from "../components/PostHogPageView";
import Navbar from "@/components/ui/navbar";
import { Suspense } from "react";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={inter.className}>
          {/* <Suspense fallback={<div>Loading ...</div>}> */}
          <PostHogPageView />
          {/* </Suspense> */}
          <Navbar />
          {children}
        </body>
      </PHProvider>
    </html>
  );
}
