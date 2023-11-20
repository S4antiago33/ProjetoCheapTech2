'use client'

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "@/styles/chackraTheme";
import AuthContextProvider from "@/contexts/AuthContext";

export const Providers = ({ children }: { children: React.ReactNode; }) => (
    
        <ChakraProvider theme={customTheme}>
            <ThemeProvider theme={theme}>
            <AuthContextProvider>
                {children}
            </AuthContextProvider>
            </ ThemeProvider>
        </ChakraProvider>
);
