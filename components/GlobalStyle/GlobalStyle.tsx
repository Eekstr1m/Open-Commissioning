"use client";
import { createGlobalStyle } from "styled-components";

export default function GlobalStyleComponent() {
  return <GlobalStyle $lightTheme={false} />;
}

const GlobalStyle = createGlobalStyle<{ $lightTheme?: boolean }>`
  body {
    color: ${(props) => (props.$lightTheme ? "black" : "white")};
    background: ${({ theme }) => theme.main};
  }
`;
