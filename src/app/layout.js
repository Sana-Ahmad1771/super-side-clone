import "./globals.css";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

// const instrumentSerif = Instrument_Serif({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-instrument-serif",
//   display: "swap",
// });

export const metadata = {
  title: "Superside Clone",
  description: "Built with Next.js and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} `}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
