"use client";
import { lightTheme, themeI } from "@/common-data/theme/theme";
import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

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
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </ThemeChanging.Provider>
  );
}

export function useThemeChange() {
  return useContext(ThemeChanging);
}
