import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/app/ui/common/Navbar";
import ThemeModeProvider from "@/app/context/ThemeContext";
import MuiThemeProvider from "@/app/ui/common/MuiThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rainy Weather",
  description: "You can check weather here",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <ThemeModeProvider>
        <MuiThemeProvider>
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>
        </MuiThemeProvider>
      </ThemeModeProvider>
    </html>
  );
}
