import s from "./IndustriesDesc.module.scss";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export default async function IndustriesDesc({ lang }: { lang: Locale }) {
  const { industriesPage } = await getDictionary(lang);

  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <div className={s.head}>
          <div className={s.head_title}>
            {industriesPage.industriesDesc.title}
          </div>
          <div className={s.head_text}>
            {industriesPage.industriesDesc.desc}
          </div>
        </div>
        <div className={s.content}>
          {industriesPage.industriesDesc.content.map((item, index) => (
            <div key={index} className={s.item}>
              <div className={s.icon}>
                <i className={item.icon}></i>
              </div>
              <div className={s.title}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
