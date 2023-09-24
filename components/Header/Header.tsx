"use client";
import Link from "next/link";
import s from "./Header.module.scss";
import Button from "../CustomButton/Button";
import styled from "styled-components";
import LogoSVG from "@/assets/logo.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <div className={s.wrapper}>
        <Link href="/" className={s.logo}>
          <LogoSVG width="60px" height="60px" className={s.test} />
          <p className={s.logo_text}>Open Commissioning</p>
        </Link>
        <span className={s.phrase}>Results based on experience</span>
        <input type="checkbox" id="menu-toggle" className={s.menu_toggle} />
        <label htmlFor="menu-toggle" className={s.menu}>
          <span className={s.bar}>
            <i className="fa-solid fa-bars fa-xl"></i>
          </span>
          <span className={s.close}>
            <i className="fa-solid fa-xmark fa-2xl"></i>
          </span>
        </label>

        <NavBar className={s.nav}>
          <ul className={s.nav__list}>
            <li className={s.nav__item}>
              <NavItem className={s.nav__link}>
                <Link href="/services" className={s.nav_item}>
                  Services
                  <i className="fa-solid fa-caret-down"></i>
                </Link>
              </NavItem>

              <SubNav className={s.subnav}>
                <NavItem className={s.subnav__link}>
                  <Link href={"/services/supervision"}>Supervision</Link>
                </NavItem>
                <NavItem className={s.subnav__link}>
                  <Link href={"/services/commissioning"}>Commissioning</Link>
                </NavItem>
                <NavItem className={s.subnav__link}>
                  <Link href={"/services/site-management"}>
                    Site Management
                  </Link>
                </NavItem>
                <NavItem className={s.subnav__link}>
                  <Link href={"/services/technical-service"}>
                    Technical Service
                  </Link>
                </NavItem>
                <NavItem className={s.subnav__link}>
                  <Link href={"/services/vacation-replacement-services"}>
                    Vacation Replacement Services
                  </Link>
                </NavItem>
              </SubNav>
            </li>
            <NavItem className={s.nav__item}>
              <Link href="/industries" className={s.nav__link}>
                Industries
              </Link>
            </NavItem>
            <NavItem className={s.nav__item}>
              <Link href="/about-us" className={s.nav__link}>
                About Us
              </Link>
            </NavItem>
            <NavItem className={s.nav__item}>
              <Button href="/contact-us">Contact</Button>
            </NavItem>
          </ul>
        </NavBar>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  font-weight: 700;
  width: 100%;
  position: fixed;
  z-index: 9999;
  background-color: ${({ theme }) => theme.main};

  border-top: 2px #fff solid;

  box-shadow: 0px 3px 10px 0px rgba(255, 255, 255, 0.2);
`;

const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.main};
`;

const NavItem = styled.li`
  transition: color 0.2s linear;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SubNav = styled.ul`
  background-color: ${({ theme }) => theme.main};
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;
