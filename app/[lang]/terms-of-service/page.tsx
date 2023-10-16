import ThermsPage from "@/components/Pages/Privacy&ThermsPages/ThermsPage";
import { Locale } from "@/i18n.config";

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <ThermsPage lang={lang} />
    </main>
  );
}
