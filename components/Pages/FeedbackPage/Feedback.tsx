import HeadBackground from "@/components/HeadBackground/HeadBackground";
import { Locale } from "@/i18n.config";
import bg from "@/assets/ukraineBG.jpg";
import { getDictionary } from "@/lib/dictionary";
import s from "./Feedback.module.scss";
import FeedbackBody from "./FeedbackBody/FeedbackBody";

export default async function Feedback({ lang }: { lang: Locale }) {
  const { feedbackPage } = await getDictionary(lang);
  return (
    <section className={s.container}>
      <HeadBackground url={bg.src} title={feedbackPage.title} />

      <FeedbackBody lang={lang} />
    </section>
  );
}
