import { AnimatePresence, motion } from "framer-motion";
import Transition from "../components/Transition";
import { Sora } from "@next/font/google";
import { usePathname } from "next/navigation";

import TopLeftImg from "@/components/TopLeftImg";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
export default function Layout({ children }) {
  const router = usePathname();

  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <AnimatePresence mode="wait">
        <TopLeftImg />
        <Nav />
        <Header />

        <motion.div key={router.route} className={"h-full"}>
          <Transition />
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
