"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div
      style={{ display: "flex" }}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "light" ? (
        // <i className="fa-regular fa-moon fa-xl"></i>
        <MoonIcon style={{ width: "28px", height: "28px" }} />
      ) : (
        // <i className="fa-regular fa-sun fa-xl"></i>
        <SunIcon style={{ width: "28px", height: "28px" }} />
      )}
    </div>
  );
}
