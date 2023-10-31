import { Inter } from "next/font/google";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Generated by create next app",
  title: "Dev Portfolio"
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <body
        className={`leading-relaxed text-slate-900 antialiased selection:bg-teal-300 selection:text-teal-900 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
