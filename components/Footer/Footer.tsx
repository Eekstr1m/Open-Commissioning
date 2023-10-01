`use client`;
import styled from "styled-components";
import s from "./Footer.module.scss";
import LogoSVG from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterSection>
      <div className={s.content}>
        <div className={s.top}>
          <div className={s.nav_block}>
            <Link href={"/about-us"}>About Us</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/safety"}>Safety</Link>
            <Link href={"/industries"}>Industries</Link>
          </div>
          <Link href={"#"}>
            <i
              className="fa-brands fa-linkedin-in fa-2xl"
              style={{ color: "#fff" }}
            ></i>
          </Link>
          {/* <LogoSVG /> */}
        </div>
        <div className={s.bottom}>
          <div>&copy; 2023 Open Commissioning All Rights Reserved</div>
          <div className={s.item}>
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
            <Link href={"/therms-of-service"}>Therm of Service</Link>
          </div>
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
