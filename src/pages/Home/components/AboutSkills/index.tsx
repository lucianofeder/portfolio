import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { About } from "./About";
import { Skills } from "./Skills";


export const AboutSkills: React.FC = () => {
    return (
        // <Grid
        //     w="100%"
        //     bg="neutral.700"
        //     p="100px"
        //     templateAreas={`"pic about"
        //                     "pic skills"`}
        //     gridTemplateRows='repeat(2, 1fr)'
        //     gridTemplateColumns='repeat(2, 1fr)'
        // >
        //     <GridItem area={"pic"}><></></GridItem>
        //     <GridItem area={"about"}>
        //         <About />
        //     </GridItem>
        //     <GridItem area={"skills"}>
        //         <Skills/ >
        //     </GridItem>
        // </Grid>
        <Flex flexDirection="column" justifyContent="center" p={["10px","20px", "50px", "100px"]} bg="neutral.700">
            <About />
            <Spacer mb="100px" />
            <Skills/ >
        </Flex>
    )
}