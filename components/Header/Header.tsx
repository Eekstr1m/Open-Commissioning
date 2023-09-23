"use client";
import Link from "next/link";
import s from "./Header.module.scss";
import Button from "../CustomButton/Button";
import styled from "styled-components";
import LogoSVG from "@/assets/logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <HeaderContainer>
      <div className={s.wrapper}>
        <Link href="/" className={s.logo}>
          <LogoSVG />
          Open Commissioning
        </Link>
        <input type="checkbox" id="menu-toggle" className={s.menu_toggle} />
        {/* <label htmlFor="menu-toggle" className={s.menu_icon}>
          &#9776;
        </label> */}
        <label htmlFor="menu-toggle" className={s.menu}>
          <span className={s.bar}>
            <i className="fa-solid fa-bars fa-xl"></i>
          </span>
          <span className={s.close}>
            <i className="fa-solid fa-xmark fa-2xl"></i>
          </span>
        </label>
        <NavBar className={s.nav}>
          <Link href="/services" className={s.nav_item}>
            Services
          </Link>
          <Link href="#" className={s.nav_item}>
            Case Studies
          </Link>
          <Link href="#" className={s.nav_item}>
            About Us
          </Link>
          <Button>Contact</Button>
        </NavBar>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  z-index: 9999;
  background-color: ${({ theme }) => theme.main};

  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.main};
`;
