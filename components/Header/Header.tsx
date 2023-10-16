import Link from "next/link";
import s from "./Header.module.scss";
import Button from "../CustomButton/Button";
import Image from "next/image";
import logoPNG from "@/assets/logo4.png";

import ThemeButton from "./ThemeButton";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Link href={`/${lang}`} className={s.logo}>
          {/* <LogoSVG width="60px" height="60px" className={s.test} /> */}
          <Image
            src={logoPNG}
            alt=""
            width={80}
            height={80}
            className={s.test}
          />
          <div className={s.logo_content}>
            <p className={s.logo_text}>Open Commissioning</p>
            <span className={s.phrase}>Results based on experience</span>
          </div>
        </Link>

        <div className={s.nav_wrapper}>
          <input type="checkbox" id="menu-toggle" className={s.menu_toggle} />
          <label htmlFor="menu-toggle" className={s.menu}>
            <span className={s.bar}>
              <i className="fa-solid fa-bars fa-xl"></i>
            </span>
            <span className={s.close}>
              <i className="fa-solid fa-xmark fa-2xl"></i>
            </span>
          </label>

          <div className={s.nav}>
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
                <Link href={`/${lang}/about-us`} className={s.nav__link}>
                  {navigation.aboutUs}
                </Link>
              </li>
              <li className={s.nav__item}>
                <Button href={`/${lang}/contact-us`}>
                  {navigation.contact}
                </Button>
              </li>
            </ul>
          </div>

          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
