import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

const baseStyle = definePartsStyle({
  list: {
    py: '4',
    borderRadius: 'xl',
    border: 'none',
    bg: 'brand.bg.100',
  },
  item: {
    bg: 'bg.color.100',
    color: 'bg.color.600',
    _hover: {
      bg: 'gray.300',
    },
    _focus: {
      bg: 'gray.300',
    },
  },
})

export const menuTheme = defineMultiStyleConfig({ baseStyle })