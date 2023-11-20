import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import s from "./ProjectsBody.module.scss";
import Button from "@/components/CustomButton/Button";

export default async function ProjectsBody({ lang }: { lang: Locale }) {
  const { projectsInUaPage } = await getDictionary(lang);
  const { navigation } = await getDictionary(lang);
  return (
    <div>
      <div className={s.desc}>
        <div>{projectsInUaPage.desc}</div>
        <div>{projectsInUaPage.subDesc}</div>
      </div>
      {/*  */}
      <div className={s.wrapper}>
        <div className={s.content_item}>
          <div>{projectsInUaPage.servicesText}</div>
          <Button href={`/${lang}/services`}>{navigation.services}</Button>
        </div>
        <div className={s.content_item}>
          <div>{projectsInUaPage.contactText}</div>
          <Button href={`/${lang}/contact-us`}>{navigation.contact}</Button>
        </div>
      </div>
    </div>
  );
}
