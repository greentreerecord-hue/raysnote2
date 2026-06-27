import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Ray'snote",
  description: "Independent online publishing",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 

