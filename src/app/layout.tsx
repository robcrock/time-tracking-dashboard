import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Time tracking dashboard",
  description:
    "Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(rubik.className, "bg-very-dark-blue")}>
        {children}
      </body>
    </html>
  );
}
