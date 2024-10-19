import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"
import './globals.css'
import Navbar from "@/components/Navbar";
import AuthProvider from "@/context/AuthProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
          <Navbar />
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}