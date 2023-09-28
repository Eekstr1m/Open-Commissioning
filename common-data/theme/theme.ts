export type themeI = {
  name: string;
  main: string;
  button: string;
  hover: string;
  primary: string;
  darken_primary: string;
  bg_primary: string;
};

export const lightTheme = {
  name: "light-theme",
  main: "#fff",
  // button: "#d8ae5f",
  button: "#f08d0b", // orange

  hover: "#a87c29", //remake
  primary: "#f08d0b",
  darken_primary: "#f08d0b",
  // bg_primary: "#fffaf0",
  bg_primary: "#fff",
  orange: "#f08d0b",
};

export const darkTheme = {
  name: "dark-theme",
  main: "#0f0f0f",
  button: "#fff",
  // button: "#f08d0b",
  hover: "#6c757d",
  primary: "#6c757d",
  darken_primary: "#ced4da",
  bg_primary: "#393939",
  orange: "#f08d0b",
};
