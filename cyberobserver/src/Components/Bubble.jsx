import React from "react";
import { motion } from "framer-motion";

const KiteAnimation = () => {
  const kiteVariants = {
    initial: {
      y: "0vh",
    },
    animate: {
      y: "-100vh",
      transition: {
        y: {
          duration: 5,
          yoyo: Infinity,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            border: "20px solid transparent",
            borderBottomColor: "#e67e22",
            borderRightColor: "#e67e22",
            width: 0,
            height: 0,
          }}
          variants={kiteVariants}
          initial="initial"
          animate="animate"
        />
      ))}
    </div>
  );
};

export default KiteAnimation;
