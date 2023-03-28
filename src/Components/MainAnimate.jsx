import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Animation(props) {
  const animateVraiants = {
    initial: {
      scale: 4,
      originX: 0,
      originY: "100%",
      transition: {
        duration: 0.06,
        type: "spring",
        stiffness: 120,
        mass: 0.4,
        damping: 11,
      },
    },
    visible: {
      scale: 1,
      duration: 0.06,
      originX: 0,
      originY: "100%",
      transition: {
        type: "spring",
        stiffness: 120,
        mass: 0.4,
        damping: 11,
      },
    },
    exit: {
      scale: 0,
      originX: 0,
      originY: "100%",
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={animateVraiants}
        initial="initial"
        animate="visible"
        exit="exit"
        className="x bg-slate-100 overflow-x-hidden overflow-y-auto md:mx-2 rounded-md h-full"
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}
