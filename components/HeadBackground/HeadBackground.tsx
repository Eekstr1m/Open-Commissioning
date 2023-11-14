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
    <div>
      <Wrapper>
        <Container $url={url}></Container>
        <Title>
          <h1>{title}</h1>
        </Title>
      </Wrapper>
      <LogoWrapper></LogoWrapper>
    </div>
  );
}

const Wrapper = styled.section`
  max-width: 100vw;
  position: relative;
`;

const Container = styled.div<{ $url: string }>`
  width: 100vw;
  height: 400px;
  margin-left: calc(-50vw + 50%);

  background: url(${(p) => p.$url}) no-repeat center;
  background-size: cover;
  filter: brightness(40%);
`;

const Title = styled.div`
  position: absolute;
  bottom: 5vh;
  color: #fff;

  font-weight: 600;
  font-size: 32px;
`;

const LogoWrapper = styled.div`
  position: absolute;

  top: 60px;
  left: 30px;

  @media (max-width: 768px) {
    display: none;
  }

  /* top: calc(50% - 100px);
  left: calc(50% - 100px); */

  /* right: 30px; */
  /* left: -50px; */
  z-index: 20;
`;
