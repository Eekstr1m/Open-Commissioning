import HeadBackground from "@/components/HeadBackground/HeadBackground";
import s from "../PagesWrapper.module.scss";
import bg from "@/assets/commissioningBG.jpg";
import CommissioningBody from "./CommissioningBody";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function CommissioningPage({ lang }: { lang: Locale }) {
  const { commissioningPage } = await getDictionary(lang);

  return (
    <section className={s.wrapper}>
      <HeadBackground url={bg.src} title={commissioningPage.title} />
      <CommissioningBody lang={lang} />
    </section>
  );
}
