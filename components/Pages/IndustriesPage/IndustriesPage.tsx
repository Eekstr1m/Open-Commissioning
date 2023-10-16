import Footer from "@/components/Footer/Footer";
import IndustriesBody from "./IndustriesBody/IndustriesBody";
import IndustriesDesc from "./IndustriesDesc/IndustriesDesc";
import s from "./IndustriesPage.module.scss";
import HeadBackground from "@/components/HeadBackground/HeadBackground";
import bg from "@/assets/bg2.jpg";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function IndustriesPage({ lang }: { lang: Locale }) {
  const { industriesPage } = await getDictionary(lang);
  return (
    <section className={s.container}>
      <HeadBackground url={bg.src} title={industriesPage.title} />
      <IndustriesDesc lang={lang} />
      <IndustriesBody lang={lang} />
    </section>
  );
}
