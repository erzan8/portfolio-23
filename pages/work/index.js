import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import WorkSlider from "@/components/WorkSlider";

import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="h-full py-36 flex items-center"
    >
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/*text*/}
          <div className="text-center flex xl:w-[35vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.6 },
                },
              }}
              className="h2 xl:mt-8"
            >
              Mes projets <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.6 },
                },
              }}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              mes feiuohf snhbqsuc ebncskld cerbhnce ooeznc oeàçe ocddjs eeo
            </motion.p>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.6 },
              },
            }}
            className="w-full xl:max-w-[60%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </motion.div>
  );
};

export default Work;
