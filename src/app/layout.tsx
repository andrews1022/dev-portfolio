import { Inter } from "next/font/google";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description:
    "Andrew Shearer is a front end developer who builds accessible, inclusive products and digital experiences for the web.",
  title: "Andrew Shearer"
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`leading-relaxed text-slate-900 antialiased selection:bg-orange-300 selection:text-orange-900 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
