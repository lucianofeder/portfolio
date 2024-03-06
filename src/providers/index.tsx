import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import {
    QueryClient,
    QueryClientProvider
} from 'react-query';
import { Provider } from 'react-redux';
import { store } from './store';
import { menuTheme } from './themes/menu';
import { colors } from './themes/colors';
import { textStyles } from './themes/text';

interface Props {
  children: ReactNode
}

const components = {
    Menu: menuTheme
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const fonts = {
    heading: 'Chillax',
    body: 'Chillax'
}

const theme = extendTheme({ colors, config, components, fonts, textStyles });

const queryClient = new QueryClient()

export const Providers: React.FC<Props> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Provider store={store}>
                    {children}
                </Provider>
            </ChakraProvider>
        </QueryClientProvider>
    );
};
