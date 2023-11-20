import ProjectsInUkraine from "@/components/Pages/ProjectsInUkraine/ProjectsInUkraine";
import { Locale } from "@/i18n.config";

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <ProjectsInUkraine lang={lang} />
    </main>
  );
}
