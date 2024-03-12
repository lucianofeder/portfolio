import logo from "@src/assets/logo.svg";
import React from "react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from '@chakra-ui/react';
import { jumpToElementByID } from "@src/helpers/jumpToID";
import { NavBar } from "./NavBar";

const options = [
    {"title": "About"},
    {"title": "Skills"},
    {"title": "Experience"},
    // {"title": "Portfolio"},
    {"title": "Contact"},
]

export const Header: React.FC = () => {
    const isDesktop = useBreakpointValue({ base: false, xl: true }, { ssr: false })
    return (
        // <Flex
        //     as="header"
        //     h={{base: "50px", lg: "60px"}}
        //     padding={{base: "5px", lg: "10px"}}
        //     px="30px"
        //     w="100%"
        //     bg="neutral.800"
        //     justifyContent="space-between"
        //     flexDir="row"
        //     position="fixed"
        //     zIndex="999"
        // >
        //     {isDesktop ? (
        //         <>
        //             <Flex cursor="pointer" onClick={() => jumpToElementByID("home")}>
        //                 <Image src={logo} />
        //             </Flex>
        //             <NavBar options={options} />
        //         </>
        //     ) : (
        //         <Menu isLazy>
        //             <MenuButton
        //                 as={IconButton}
        //                 aria-label='Options'
        //                 icon={<HamburgerIcon />}
        //                 variant='outline'
        //                 color="brand.500"
        //                 borderColor="brand.500"
        //                 h="40px"
        //                 w="40px"
        //             />
        //             <MenuList>
        //                 {options.map(option => <MenuItem key={option.title}>{option.title}</MenuItem>)}
        //             </MenuList>
        //         </Menu>
        //     )}
        // </Flex>
        <Flex
            as="header"
            h={{base: "50px", lg: "60px"}}
            padding={{base: "5px", lg: "10px"}}
            px={{base: "15px", lg: "30px"}}
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
            {isDesktop ? (
                <NavBar options={options} />
            ) : (
                <Menu isLazy>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        color="brand.500"
                        borderColor="brand.500"
                        h="40px"
                        w="40px"
                    />
                    <MenuList bg="neutral.800">
                        {options.map(option => <MenuItem
                                                    as="li"
                                                    cursor="pointer"
                                                    _hover={{
                                                    "color": "brand.300"
                                                    }}
                                                    transition='100ms'
                                                    onClick={() => jumpToElementByID(option.title.toLowerCase())}    
                                                    key={option.title}
                                                >{option.title}</MenuItem>)}
                    </MenuList>
                </Menu>
            )}
        </Flex>
    )
}
