import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { Variants, isValidMotionProp, motion } from "framer-motion";
import React, { PropsWithChildren } from "react";


const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


const cardVariants: Variants = {
    offscreen: {
      x: 0,
      y: -30,
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        easy: "easeOut",
        type: "spring",
        duration: 0.8,
      }
    }
};

export const AnimatedCard: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <ChakraBox
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
        >
            {children}
        </ChakraBox>
    )
}
