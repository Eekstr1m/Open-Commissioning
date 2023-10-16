import s from "../PagesWrapper.module.scss";
import HeadBackground from "@/components/HeadBackground/HeadBackground";
import bg from "@/assets/TechnicalServiceBG.jpg";
import TechnicalServiceBody from "./TechnicalServiceBody";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function TechnicalServicePage({ lang }: { lang: Locale }) {
  const { technicalServicePage } = await getDictionary(lang);

  return (
    <section className={s.wrapper}>
      <HeadBackground url={bg.src} title={technicalServicePage.title} />
      <TechnicalServiceBody lang={lang} />
    </section>
  );
}
