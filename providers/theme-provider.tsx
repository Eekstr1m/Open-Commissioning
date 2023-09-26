"use client";
import { darkTheme, lightTheme, themeI } from "@/common-data/theme/theme";
import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useCookies } from "react-cookie";

const GlobalStyle = createGlobalStyle<{ $lightTheme?: boolean }>`
  body {
    color: ${(props) => (props.$lightTheme ? "black" : "white")};
    background: ${({ theme }) => theme.main};
  }
`;

interface ThemeContextI {
  isLightTheme: boolean;
  setIsLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialUserState = {
  isLightTheme: true,
  setIsLightTheme: () => {},
} as ThemeContextI;

const ThemeChanging = createContext(initialUserState);

export function ThemeChangeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cookies, setCookie] = useCookies(["isLightTheme"]);
  useEffect(() => {
    if (cookies.isLightTheme === undefined) {
      setCookie("isLightTheme", true, { maxAge: 864000000 });
    }
  }, [cookies.isLightTheme, setCookie]);

  const [isLightTheme, setIsLightTheme] = useState(cookies.isLightTheme);

  return (
    <ThemeChanging.Provider value={{ isLightTheme, setIsLightTheme }}>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyle $lightTheme={isLightTheme} />
        {children}
      </ThemeProvider>
    </ThemeChanging.Provider>
  );
}

export function useThemeChange() {
  return useContext(ThemeChanging);
}
