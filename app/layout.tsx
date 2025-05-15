import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import Context from "@/component/context";
import { SessionProvider } from "next-auth/react";
import Footer from "@/component/footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PinStore | Get your favorite product and buy",
  description: "Ecommerce buy your favorite product from pinStore ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <Context>
            <ToastContainer />
            <Navbar />
            <div className="min-h-screen my-5 p-2 lg:mx-28">
              {children}
            </div>
            <Footer />
          </Context>
        </SessionProvider>
      </body>
    </html>
  );
}
