`use client`;
import styled from "styled-components";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <FooterSection>
      <div className={s.content}>
        <div>&copy; 2023 Open Commissioning All Rights Reserved</div>
        <div className={s.item}>
          <p>Privacy Policy</p>
          <p>Therm of Service</p>
        </div>
      </div>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.bg_primary};

  width: 100vw;
  margin-left: calc(-50vw + 50%);
`;
