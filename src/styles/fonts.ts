import { Geist, Geist_Mono, Pacifico, Roboto_Mono, Roboto_Condensed } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const roboto_condensed = Roboto_Condensed({
    variable: "--font-robot-condensed",
    subsets: ["latin"],
  });

export const roboto_mono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
  });

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

