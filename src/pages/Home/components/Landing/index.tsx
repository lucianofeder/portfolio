import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { LogoIconSVG } from "../svg/LogoIconSVG";
import "./landing.css";



export const Landing: React.FC = () => {
    return(
        <Flex
            as="section"
            flexDirection="row"
            alignItems="center"
            bg="neutral.800"
            w="100%"
            h="100vh"
            px="100px"
            justifyContent="space-between"
            id="home"
        >
            <Flex flexDirection="column" color="neutral.100">
                <Text pl="5px" fontSize={{"2xl": "48px", base:"40px"}} fontWeight="700">Hi, I'm</Text>
                <Heading
                    as="h1"
                    fontSize={{"2xl": "120px", base:"90px"}}
                    color="brand.500"
                    mb="-30px"
                    mt="50px"
                >
                    LUCIANO FEDER
                </Heading>
                <Text pl="5px" fontSize={{"2xl": "40px", base:"32px"}}>Fullstack Developer</Text>
            </Flex>
            <Flex flexGrow={1} justifyContent="center">
                <Box w={{"2xl": "300px", base:"240px"}} h={{"2xl": "300px", base:"240px"}} p="10px">
                    <LogoIconSVG className="logo-icon"/>
                </Box>
            </Flex>
        </Flex>
    )
}