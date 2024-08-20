import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <div>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}
      >
        <div></div>
      </motion.div>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-20 h-screen w-screen bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
      >
        <div></div>
      </motion.div>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-10 h-screen w-screen bg-[#4e3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      >
        <div></div>
      </motion.div>
    </div>
  );
};

export default Transition;
