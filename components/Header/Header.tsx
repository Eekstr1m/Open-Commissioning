import Link from "next/link";
import s from "./Header.module.scss";
import Image from "next/image";
import logoPNG from "@/assets/logo4.png";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Navigation from "./Navigation";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Link href={`/${lang}`} className={s.logo}>
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

        <Navigation lang={lang} navigation={navigation} />
      </div>
    </div>
  );
}
