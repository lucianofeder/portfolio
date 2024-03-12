import React from "react";

import { Box, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframesFirst = keyframes`
  0% { right: 0px; top: 200px }
  25% { right: 100px; top: 300px }
  50% { right: 300px; top: 400px }
  75% { right: 100px; top: 300px }
  100% { right: 0px; top: 200px }
`;


const animationKeyframesSecond = keyframes`
  0% { left: 100px; top: 700px }
  25% { left: 300px; top: 600px }
  50% { left: 700px; top: 400px }
  75% { left: 300px; top: 600px }
  100% { left: 100px; top: 700px }
`;


const animationKeyframesThird = keyframes`
  0% { right: 200px; top: 600px }
  25% { right: 400px; top: 500px }
  50% { right: 800px; top: 300px }
  75% { right: 400px; top: 500px }
  100% { right: 200px; top: 600px }
`;

const animationsFrames = [animationKeyframesFirst, animationKeyframesSecond, animationKeyframesThird]
const animations = animationsFrames.map((animation, i) => `${animation} ${i*5 + 40}s ease-in-out infinite`)

export const AnimatedBG: React.FC = () => {
    return (
        <div>
            {animations.map((animation, i) => <Box
                                                key={i}
                                                position="absolute"
                                                as={motion.div}
                                                animation={animation}
                                                filter="blur(90px)"
                                                bg="brand.300"
                                                w={`${300 - i*70}px`}
                                                h={`${300 - i*70}px`}
                                                opacity="0.3"
                                              />
            )}
        </div>
    )
}