import { motion } from "framer-motion";
const distanceStart = "100%";
const distanceEnd = "0%";
const transitionVariants = {
  initial: {
    bottom: distanceEnd,
    right: distanceEnd,
  },
  animate: {
    bottom: distanceStart,
    right: distanceStart,
  },
  exit: {
    bottom: [distanceStart, distanceEnd],
    right: [distanceStart, distanceEnd],
  },
};
const transitionVariants2 = {
  initial: {
    top: distanceEnd,
    left: distanceEnd,
  },
  animate: {
    top: distanceStart,
    left: distanceStart,
  },
  exit: {
    top: [distanceStart, distanceEnd],
    left: [distanceStart, distanceEnd],
  },
};
const Transition = () => {
  return (
    <>
      <motion.div
        className={`h-[1500px] w-[1500px] md:h-[200vw] md:w-[200vw] fixed rounded-full z-50 bg-[#242e67]`}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className={`h-[1500px] w-[1500px] md:h-[200vw] md:w-[200vw] fixed rounded-full z-50 bg-[#0d1726]`}
        variants={transitionVariants2}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: "easeInOut",
        }}
      ></motion.div>
    </>
  );
};

export default Transition;
