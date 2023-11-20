import s from "./Footer.module.scss";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Footer({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <div className={s.top}>
          <div className={s.nav_block}>
            <Link href={`/${lang}/services`}>{navigation.services}</Link>
            <Link href={`/${lang}/industries`}>{navigation.industries}</Link>
            <Link href={`/${lang}/safety`}>{navigation.safety}</Link>
            <Link href={`/${lang}/projects-in-ukraine`}>
              {navigation.comInUa}
            </Link>
            {/* <Link href={`/${lang}/feedback`}>{navigation.feedback}</Link> */}
          </div>
          <Link href={"#"}>
            <i
              className="fa-brands fa-linkedin-in fa-2xl"
              style={{ color: "var(--fg)" }}
            ></i>
          </Link>
        </div>
        <div className={s.bottom}>
          <div className={s.rights}>&copy; 2023 Open Commissioning LTD</div>
          {/* <div className={s.item}>
            <Link href={`/${lang}/privacy-policy`}>
              {navigation.privacyPolicy}
            </Link>
            <Link href={`/${lang}/terms-of-service`}>
              {navigation.termsOfService}
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
