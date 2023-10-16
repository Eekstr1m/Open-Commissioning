"use client";

import { ThemeProvider } from "next-themes";

export function ThemeChangeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
