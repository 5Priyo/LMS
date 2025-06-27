

import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./client-wrapper"; // <- NEW client-only wrapper


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Library",
  description: "Library - Your go-to tech solutions!",
  icons: {
    icon: "/l1.png",
    apple: "/l1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
    >
      <body className="antialiased">
        
        <ClientWrapper>{children}</ClientWrapper>
        
      </body>
    </html>
  );
}
