"use client";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "light" ? (
        <i className="fa-regular fa-moon fa-xl"></i>
      ) : (
        // <MoonIcon />
        <i className="fa-regular fa-sun fa-xl"></i>
        // <SunIcon />
      )}
    </div>
  );
}
