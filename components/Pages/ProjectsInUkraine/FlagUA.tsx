"use client";
import styled from "styled-components";

export default function FlagUA({ url }: { url: string }) {
  return <Container $url={url}></Container>;
}

const Container = styled.div<{ $url: string }>`
  width: 280px;
  height: 140px;

  position: absolute;
  top: 130px;
  right: 0;

  background: url(${(p) => p.$url}) no-repeat center;
  background-size: cover;
  filter: brightness(60%);
`;
