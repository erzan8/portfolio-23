"use client";

import "../styles/globals.css";
import { Sora } from "@next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "../components/Transition";
import { usePathname } from "next/navigation";
import TopLeftImg from "@/components/TopLeftImg";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  const router = usePathname();
  return (
    <html lang="fr">
      <body>
        <div
          className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
        >
          <TopLeftImg />
          <Nav />
          <Header />
          <AnimatePresence mode="wait">
            <motion.div key={router.route} className={"h-full"}>
              <Transition />
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}
