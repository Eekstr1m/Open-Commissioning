import Link from "next/link";
import styled from "styled-components";

export default function Button({
  children,
  href,
  style,
}: {
  children: React.ReactNode;
  href: string;
  style?: React.CSSProperties;
}) {
  return (
    <ButtonColor href={href} style={style}>
      {children}
    </ButtonColor>
  );
}

const ButtonColor = styled.a`
  color: ${({ theme }) =>
    theme.name === "dark-theme" ? theme.orange : theme.main};
  background-color: ${({ theme }) => theme.button};
  padding: 15px 40px;
  border-radius: 7px;

  font-weight: 800;

  width: fit-content;

  transition: all 0.2s linear;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;
