import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { AnimatedCard } from "@src/components/AnimatedCard";
import React from "react";
import { LogoIconSVG } from "../svg/LogoIconSVG";
import "./landing.css";



export const Landing: React.FC = () => {
    return(
        <Flex
            as="section"
            flexDirection={{base: "column-reverse", lg:"row"}}
            alignItems="center"
            bg="neutral.800"
            w="100%"
            h="100vh"
            px={["10px", "20px", "50px", "100px"]}
            justifyContent={{base: "center", lg: "space-between"}}
            id="home"
        >
            <Flex flexDirection="column" color="neutral.100">
                <AnimatedCard>
                    <Text pl="5px" fontSize={{base: "16px", md: "24px", lg:"40px", "2xl": "48px"}} fontWeight="700">Hi, I'm</Text>
                </AnimatedCard>
                <AnimatedCard>
                    <Heading
                        as="h1"
                        fontSize={{base: "40px", md: "68px", lg:"90px", "2xl": "120px"}}
                        color="brand.500"
                        mb={{base: "0px", lg:"-15px", "2xl": "-30px"}}
                        mt={{base: "0px", lg:"30px", "2xl": "50px"}}
                    >
                        LUCIANO FEDER
                    </Heading>
                </AnimatedCard>
                <AnimatedCard>
                    <Text pl="5px" fontSize={{base: "14px", md: "20px", lg:"34px", "2xl": "40px"}}>Fullstack Developer</Text>
                </AnimatedCard>
            </Flex>
            <Flex flexGrow={{base: 0, lg: 1}} justifyContent="center">
                <Box w={{"2xl": "300px", base: "130px"}} h={{"2xl": "300px", base:"130px"}} p="10px">
                    <LogoIconSVG className="logo-icon"/>
                </Box>
            </Flex>
        </Flex>
    )
}