import { Box } from "@chakra-ui/react"
import React, { PropsWithChildren } from "react"


export const Main: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box
            as="main"
            w="100%"
            minH="100vh"
            bg="neutral.800"
        >
            {children}
        </Box>
    )
}
