import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Transition from "@/components/Transition";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Portfolio Développeur - Guilhem Carron</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className={"h-full"}>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
