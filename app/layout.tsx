import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import the new footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yibrin - Repuestos y Accesorios",
  description: "Desde lo Clásico hasta lo Actual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col`}>
        <Navbar />
        
        {/* flex-grow pushes the footer to the bottom if the content is short */}
        <main className="flex-grow w-full">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}