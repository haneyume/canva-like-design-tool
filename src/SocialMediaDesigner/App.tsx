import { useContext, useEffect, useState, useRef } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

import { AppProvider } from './utils/AppContext';
import { Home } from './pages/Home';

import './styles/style.css';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Home />
      </AppProvider>
    </ChakraProvider>
  );
};
