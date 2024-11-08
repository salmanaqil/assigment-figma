import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Assignment 5",
  description: "figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
      >
        {children}
      </body>
    </html>
  );
}
