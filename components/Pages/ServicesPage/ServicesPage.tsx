import ServicesBody from "./ServicesBody/ServicesBody";
import ServicesDesc from "./ServicesDesc/ServicesDesc";
import s from "./ServicesPage.module.scss";
import ServicesBlock from "./ServicesBlock/ServicesBlock";
import HeadBackground from "../../HeadBackground/HeadBackground";
import bg from "@/assets/bg.jpg";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function ServicesPage({ lang }: { lang: Locale }) {
  const { servicesPage } = await getDictionary(lang);

  return (
    <section className={s.container}>
      <HeadBackground url={bg.src} title={servicesPage.title} />
      <ServicesDesc lang={lang} />
      <ServicesBody lang={lang} />
      <ServicesBlock lang={lang} />
    </section>
  );
}
