import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiregDev - Digital Architects",
  description: "High-performance web development agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning digunakan untuk menyembunyikan error dari ekstensi browser */}
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}