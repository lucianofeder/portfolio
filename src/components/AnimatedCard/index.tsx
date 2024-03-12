import { chakra, shouldForwardProp, useBreakpointValue } from "@chakra-ui/react";
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
    const isDesktop = useBreakpointValue({ base: false, xl: true }, { ssr: false })
    return (
        <ChakraBox
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: isDesktop ? 0.5 : 0.05 }}
            variants={cardVariants}
        >
            {children}
        </ChakraBox>
    )
}
