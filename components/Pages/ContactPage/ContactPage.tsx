import Contact from "@/components/Contact/Contact";
import s from "./ContactPage.module.scss";
import HeadBackground from "@/components/HeadBackground/HeadBackground";
import bg from "@/assets/contactBG.jpg";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function ContactPage({ lang }: { lang: Locale }) {
  const { contactPage } = await getDictionary(lang);

  return (
    <div className={s.container}>
      <HeadBackground url={bg.src} title={contactPage.title} />
      <Contact lang={lang} />
      <div className={s.content}>
        <p>{contactPage.content.text1}</p>
      </div>
    </div>
  );
}
