import s from "./CaseStudies.module.scss";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function CaseStudies({ lang }: { lang: Locale }) {
  const { homePage } = await getDictionary(lang);
  return (
    <section className={s.case_wrapper}>
      <div className={s.client_block}>
        <div className={s.title}>{homePage.caseStudies.title}</div>
        <div className={s.name}>{homePage.caseStudies.name}</div>
        <div className={s.text}>{homePage.caseStudies.text}</div>
      </div>
    </section>
  );
}
