import styled, { ThemeProvider } from "styled-components";

const theme = {
  main: "mediumseagreen",
};

export function Providers() {
  return (
    <ThemeProvider theme={theme}>
      <Button>123</Button>
    </ThemeProvider>
  );
}

const Button = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
