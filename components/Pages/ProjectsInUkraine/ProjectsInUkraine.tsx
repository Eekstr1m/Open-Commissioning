import HeadBackground from "@/components/HeadBackground/HeadBackground";
import { Locale } from "@/i18n.config";
import bg from "@/assets/ukraineBG.jpg";
import bg2 from "@/assets/ua.png";
import { getDictionary } from "@/lib/dictionary";
import s from "./ProjectsInUkraine.module.scss";
import FlagUA from "./FlagUA";
import ProjectsBody from "./ProjectsBody/ProjectsBody";

export default async function ProjectsInUkraine({ lang }: { lang: Locale }) {
  const { projectsInUaPage } = await getDictionary(lang);
  return (
    <section className={s.container}>
      <HeadBackground url={bg.src} title={projectsInUaPage.title} />
      <FlagUA url={bg2.src} />

      <ProjectsBody lang={lang} />
    </section>
  );
}
