"use client";
import { Locale } from "@/i18n.config";
import s from "./Header.module.scss";
import Link from "next/link";
import Button from "../CustomButton/Button";
import LanguageButton from "./LanguageButton";
import ThemeButton from "./ThemeButton";
import { useState } from "react";

type NavigationText = {
  aboutUs: string;
  services: string;
  safety: string;
  industries: string;
  contact: string;
  privacyPolicy: string;
  termsOfService: string;
  servicesNames: {
    supervision: string;
    commissioning: string;
    siteManagement: string;
    technicalService: string;
  };
};

export default function Navigation({
  lang,
  navigation,
}: {
  lang: Locale;
  navigation: NavigationText;
}) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const onClickHandler = () => {
    setMenuOpen(false);
  };

  const onChangeHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={s.wrap}>
      <div className={s.buttons}>
        <LanguageButton />
        <ThemeButton />
      </div>
      <div className={s.nav_wrapper}>
        <input
          type="checkbox"
          id="menu-toggle"
          className={s.menu_toggle}
          onChange={onChangeHandler}
          checked={isMenuOpen}
        />

        <label htmlFor="menu-toggle" className={s.menu}>
          <span className={s.bar}>
            <i className="fa-solid fa-bars fa-xl"></i>
          </span>
          <span className={s.close}>
            <i className="fa-solid fa-xmark fa-2xl"></i>
          </span>
        </label>

        <div className={s.nav} onClick={onClickHandler}>
          <ul className={s.nav__list}>
            <div className={s.nav__item}>
              <li className={s.nav__link}>
                <Link href={`/${lang}/services`} className={s.nav_item}>
                  {navigation.services}
                  <i className="fa-solid fa-caret-down"></i>
                </Link>
              </li>

              <ul className={s.subnav}>
                <li className={s.subnav__link}>
                  <Link href={`/${lang}/services/supervision`}>
                    {navigation.servicesNames.supervision}
                  </Link>
                </li>
                <li className={s.subnav__link}>
                  <Link href={`/${lang}/services/commissioning`}>
                    {navigation.servicesNames.commissioning}
                  </Link>
                </li>
                <li className={s.subnav__link}>
                  <Link href={`/${lang}/services/site-management`}>
                    {navigation.servicesNames.siteManagement}
                  </Link>
                </li>
                <li className={s.subnav__link}>
                  <Link href={`/${lang}/services/technical-service`}>
                    {navigation.servicesNames.technicalService}
                  </Link>
                </li>
                {/* <li className={s.subnav__link}>
              <Link href={`/${lang}/services/vacation-replacement-services`}>
                Vacation Replacement Services
              </Link>
            </li> */}
              </ul>
            </div>
            <li className={s.nav__item}>
              <Link href={`/${lang}/industries`} className={s.nav__link}>
                {navigation.industries}
              </Link>
            </li>
            <li className={s.nav__item}>
              <Link href={`/${lang}/safety`} className={s.nav__link}>
                {navigation.safety}
              </Link>
            </li>
            <li className={s.nav__item}>
              <Button href={`/${lang}/contact-us`}>{navigation.contact}</Button>
            </li>
          </ul>
        </div>
        <Link href={"#"}>
          <i
            className="fa-brands fa-linkedin-in fa-2xl"
            style={{ color: "var(--fg)" }}
          ></i>
        </Link>
      </div>
    </div>
  );
}
