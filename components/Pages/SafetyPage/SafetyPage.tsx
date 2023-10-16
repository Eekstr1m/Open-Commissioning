import Footer from "@/components/Footer/Footer";
import s from "./SafetyPage.module.scss";

import bg from "@/assets/safetyBG.jpg";
import HeadBackground from "@/components/HeadBackground/HeadBackground";
import SafetyBody from "./SafetyBody/SafetyBody";
import SafetyContent from "./SafetyContent/SafetyContent";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function SafetyPage({ lang }: { lang: Locale }) {
  const { safetyPage } = await getDictionary(lang);

  return (
    <section className={s.container}>
      <HeadBackground url={bg.src} title={safetyPage.title} />

      <SafetyBody lang={lang} />
      <SafetyContent lang={lang} />
    </section>
  );
}
