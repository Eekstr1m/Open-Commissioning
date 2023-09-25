"use client";
import { lightTheme, themeI } from "@/common-data/theme/theme";
import { createContext, useContext, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ $lightTheme?: boolean }>`
  body {
    color: ${(props) => (props.$lightTheme ? "black" : "white")};
    background: ${({ theme }) => theme.main};
  }
`;

interface ThemeContextI {
  selectedTheme: themeI;
  setSelectedTheme: React.Dispatch<React.SetStateAction<themeI>>;
}

const initialUserState = {
  selectedTheme: lightTheme,
  setSelectedTheme: () => {},
} as ThemeContextI;

const ThemeChanging = createContext(initialUserState);

export function ThemeChangeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedTheme, setSelectedTheme] = useState(lightTheme);

  return (
    <ThemeChanging.Provider value={{ selectedTheme, setSelectedTheme }}>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyle $lightTheme={false} />
        {children}
      </ThemeProvider>
    </ThemeChanging.Provider>
  );
}

export function useThemeChange() {
  return useContext(ThemeChanging);
}
