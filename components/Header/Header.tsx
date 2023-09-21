"use client";
import Link from "next/link";
import s from "./Header.module.scss";
import Button from "../CustomButton/Button";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <div className={s.wrapper}>
        <Link href="#" className={s.logo}>
          Open Commissioning
        </Link>
        <nav className={s.nav}>
          <Link href="#" className={s.nav_item}>
            Services
          </Link>
          <Link href="#" className={s.nav_item}>
            Case Studies
          </Link>
          <Link href="#" className={s.nav_item}>
            About Us
          </Link>
          <Link href="#" className={`${s.nav_item} ${s.contact}`}>
            <Button>Contact</Button>
          </Link>
        </nav>
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
