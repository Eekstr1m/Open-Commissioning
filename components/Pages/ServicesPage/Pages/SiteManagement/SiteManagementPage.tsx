import HeadBackground from "@/components/HeadBackground/HeadBackground";
import s from "../PagesWrapper.module.scss";
import bg from "@/assets/siteManagementBG.jpg";
import SiteManagementBody from "./SiteManagementBody";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function SiteManagementPage({ lang }: { lang: Locale }) {
  const { siteManagementPage } = await getDictionary(lang);
  return (
    <section className={s.wrapper}>
      <HeadBackground url={bg.src} title={siteManagementPage.title} />
      <SiteManagementBody lang={lang} />
    </section>
  );
}
