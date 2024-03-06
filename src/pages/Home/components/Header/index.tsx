import logo from "@src/assets/logo.svg";
import React from "react";

import { Flex, Image } from '@chakra-ui/react';
import { jumpToElementByID } from "@src/helpers/jumpToID";
import { NavBar } from "./NavBar";

interface Props {

}

export const Header: React.FC<Props> = ({}) => {
    return (
        <Flex
            as="header"
            h="60px"
            padding="10px"
            px="30px"
            w="100%"
            bg="neutral.800"
            justifyContent="space-between"
            flexDir="row"
            position="fixed"
            zIndex="999"
        >
            <Flex cursor="pointer" onClick={() => jumpToElementByID("home")}>
                <Image src={logo} />
            </Flex>
            <NavBar />
        </Flex>
    )
}
