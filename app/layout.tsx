import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projects by Sepehr",
  description: "Software engineer portfolio showcasing completed projects, technical skills, experience, and contact information",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}