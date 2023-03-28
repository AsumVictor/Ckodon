import React from "react";
import { motion } from "framer-motion";

export default function TabTransition(props) {
  const animateVraiants = {
    initial: {
      x: "100%",
      transition: {
        duration: 0.06,
        type: "spring",
        stiffness: 120,
        mass: 0.4,
        damping: 11,
      },
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.06,
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
    <motion.div
      variants={animateVraiants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      {props.children}
    </motion.div>
  );
}
