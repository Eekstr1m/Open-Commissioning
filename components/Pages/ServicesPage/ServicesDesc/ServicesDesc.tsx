"use client";
// import Button from "@/components/CustomButton/Button";
import s from "./ServicesDesc.module.scss";
import styled from "styled-components";

export default function ServicesDesc() {
  return (
    <ServicesSection>
      <div className={s.wrapper}>
        <div className={s.head}>
          <div className={s.head_title}>Our services</div>
          <div className={s.head_text}>
            Open Commissioning facilitates global technical expansion with
            compliant workforce solutions
          </div>
        </div>
        <div className={s.content}>
          <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-solid fa-industry"></Icon>
            </div>
            <div className={s.title}>Supervision</div>
            <Button href="/services/supervision">Read More</Button>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-solid fa-screwdriver-wrench"></Icon>
            </div>
            <div className={s.title}>Commissioning</div>
            <Button href="/services/commissioning">More info</Button>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-solid fa-helmet-safety"></Icon>
            </div>
            <div className={s.title}>Site Management</div>
            <Button href="/services/site-management">Explore further</Button>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-solid fa-gears"></Icon>
            </div>
            <div className={s.title}>Technical Service</div>
            <Button href="/services/technical-service">Learn More</Button>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-solid fa-users-gear"></Icon>
            </div>
            <div className={s.title}>Vacation Replacement Services</div>
            <Button href="/services/vacation-replacement-services">
              Discover
            </Button>
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
  color: ${({ theme }) => theme.orange};
  filter: drop-shadow(0 0 2px ${({ theme }) => theme.main});
`;

const Button = styled.a`
  /* color: ${({ theme }) =>
    theme.name === "dark-theme" ? theme.orange : theme.main}; */
  color: #fff;
  background-color: ${({ theme }) => theme.orange};
  padding: 15px 40px;
  border-radius: 7px;

  font-weight: 800;

  width: fit-content;

  transition: all 0.2s linear;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;
