"use client";
import styled from "styled-components";

export default function HeadBackground({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  return (
    <Wrapper>
      <Container $url={url} />
      <Title>
        <h1>{title}</h1>
      </Title>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
`;

const Container = styled.div<{ $url: string }>`
  width: 100vw;
  height: 400px;
  margin-left: calc(-50vw + 50%);

  background: url(${(p) => p.$url}) no-repeat center;
  background-size: cover;
  filter: brightness(30%);
`;

const Title = styled.div`
  position: absolute;
  bottom: 5vh;
  color: #fff;

  font-weight: 600;
  font-size: 28px;
`;
