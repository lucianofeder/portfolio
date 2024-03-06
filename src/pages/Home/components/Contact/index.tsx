import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";


export const Contact: React.FC = () => {
    return (
        <Flex id="contact" w="100%" flexDirection="row" alignItems="center" justifyContent="center" bg="neutral.800" py="100px" as="footer">
            <Grid w="100%" maxW="1200px" gridTemplateColumns={'repeat(3, 1fr)'}>
                <GridItem>
                    <Flex flexDirection="column" justifyContent="center" alignItems="center" flexGrow="1">
                        <Text color="neutral.200">Email</Text>
                        <Text color="brand.300">me@lucianofeder.com</Text>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex flexDirection="column" justifyContent="center" alignItems="center" flexGrow="1">
                        <Text color="neutral.200">Phone</Text>
                        <Text color="brand.300">+55 (47) 99704-5060</Text>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex flexDirection="column" justifyContent="center" alignItems="center" flexGrow="1">
                        <Text color="neutral.200">Social</Text>
                        <Text color="brand.300" as="a" href="https://www.linkedin.com/in/luciano-feder/" target="_blank">Linkedin</Text>
                    </Flex>
                </GridItem>
            </Grid>
        </Flex>
    )
}
