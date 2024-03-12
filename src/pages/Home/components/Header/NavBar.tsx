import { Flex, Text } from "@chakra-ui/react"
import { jumpToElementByID } from "@src/helpers/jumpToID"
import React from "react"


interface NavOption {
  title: string
}

interface Props {
  options: NavOption[]
}

export const NavBar: React.FC<Props> = ({ options }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justifyContent="space-between"
        wrap="wrap"
        maxW="50%"
        w="500px"
        color="neutral.100"
      >
        {options.map((option, i) => (
            <Text
                key={`option-${i}`}
                as="li"
                cursor="pointer"
                _hover={{
                  "color": "brand.300"
                }}
                transition='100ms'
                onClick={() => jumpToElementByID(option.title.toLowerCase())}
            >
                {option.title}
            </Text>
        ))}
      </Flex>
    )
  }