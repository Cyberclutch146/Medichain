import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MediChain AI — Health Record Vault",
  description: "Provably authentic health records and longitudinal biomarker intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper text-ink antialiased selection:bg-verdigris/20">
        {children}
      </body>
    </html>
  );
}
