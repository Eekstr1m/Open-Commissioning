"use client";
import Button from "@/components/CustomButton/Button";
import s from "./IndustriesDesc.module.scss";
import styled from "styled-components";

export default function IndustriesDesc() {
  return (
    <ServicesSection>
      <div className={s.wrapper}>
        <div className={s.head}>
          <div className={s.head_title}>Industries we serve</div>
          <div className={s.head_text}>
            Here are some of the most popular industries that we are proud to
            support:
          </div>
        </div>
        <div className={s.content}>
          <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-solid fa-wheat-awn"></Icon>
            </div>
            <Title className={s.title}>Agriculture</Title>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-solid fa-bolt"></Icon>
            </div>
            <Title className={s.title}>Power and Utilities</Title>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-solid fa-gauge-high"></Icon>
            </div>
            <Title className={s.title}>Automation</Title>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-solid fa-flask"></Icon>
            </div>
            <Title className={s.title}>Oil and Gas</Title>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-solid fa-trowel-bricks"></Icon>
            </div>
            <Title className={s.title}>Construction</Title>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-solid fa-toolbox"></Icon>
            </div>
            <Title className={s.title}>Manufacturing</Title>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-solid fa-microchip"></Icon>
            </div>
            <Title className={s.title}>Technology and IT</Title>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-brands fa-envira"></Icon>
            </div>
            <Title className={s.title}>Environment</Title>
          </div>
        </div>
      </div>
    </ServicesSection>
  );
}

const ServicesSection = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background-color: ${({ theme }) => theme.bg_primary};
`;

const Icon = styled.i`
  font-size: 50px;
  margin-bottom: 20px;
  /* color: #7da3c1; */
  color: ${({ theme }) => theme.orange};
  filter: drop-shadow(0 0 2px ${({ theme }) => theme.main});
`;

const Title = styled.div`
  /* color: ${({ theme }) => theme.orange}; */
`;
