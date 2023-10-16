import s from "../PagesWrapper.module.scss";
import HeadBackground from "@/components/HeadBackground/HeadBackground";
import bg from "@/assets/supervisionbg.jpg";
import SupervisionBody from "./SupervisionBody";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function SupervisionPage({ lang }: { lang: Locale }) {
  const { supervisionPage } = await getDictionary(lang);

  return (
    <section className={s.wrapper}>
      <HeadBackground url={bg.src} title={supervisionPage.title} />
      <SupervisionBody lang={lang} />
    </section>
  );
}
