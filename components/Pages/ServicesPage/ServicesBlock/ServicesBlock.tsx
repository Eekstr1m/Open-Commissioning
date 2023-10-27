import { Locale } from "@/i18n.config";
import s from "./ServicesBlock.module.scss";
import { getDictionary } from "@/lib/dictionary";

export default async function ServicesBlock({ lang }: { lang: Locale }) {
  const { servicesPage } = await getDictionary(lang);

  return (
    <section>
      <div className={s.head}>
        <div className={s.head_title}>{servicesPage.servicesBlock.title}</div>
        <div className={s.head_text}>{servicesPage.servicesBlock.desc}</div>
        <div className={s.head_text}>{servicesPage.servicesBlock.desc2}</div>
      </div>

      <div className={s.content}>
        <div className={s.item}>{servicesPage.servicesBlock.content[1]}</div>
        <i className={`${s.icon} fa-solid fa-arrow-right`}></i>
        <div className={s.item}>{servicesPage.servicesBlock.content[2]}</div>
        <i className={`${s.icon} fa-solid fa-arrow-right`}></i>
        <div className={s.item}>{servicesPage.servicesBlock.content[3]}</div>
        <i className={`${s.icon} fa-solid fa-arrow-right`}></i>
        <div className={s.item}>{servicesPage.servicesBlock.content[4]}</div>
      </div>
    </section>
  );
}
