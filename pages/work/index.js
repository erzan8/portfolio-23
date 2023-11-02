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
      className="h-full py-32 text-center xl:text-left overflow-y-auto overflow-x-hidden flex md:items-center "
    >
      <Circles />
      <div className="container mx-auto h-[max-content]">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center  justify-center ">
          {/*text*/}
          <div className="text-center flex xl:w-[35vw] flex-col lg:text-left mb-4 xl:mb-0 ">
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
              Voici quelques exemples de réalisations abouties au cours des
              dernières années. La plupart ont été réalisées en méthode Agile
              (SCRUM).
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
            className="w-full xl:max-w-[50%]"
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
