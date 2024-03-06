import React from "react";
import { Heading, Box } from "@chakra-ui/react";


interface Props {
    text: string
}

export const SectionTitle: React.FC<Props> = ({ text, ...props }) => {
    return (
        <Box position="relative" m="15px" mb="60px">
            <Heading
                as="h2"
                color="neutral.100"
                fontSize="50px"
                zIndex="2"
                {...props}
                position="relative"
            >
                {text}
            </Heading>
            <Box
                top={1}
                left={-3}
                borderRadius="50%"
                w="50px"
                h="50px"
                position="absolute"
                bg="brand.600"
                zIndex="1"
            />
        </Box>
    )
}
