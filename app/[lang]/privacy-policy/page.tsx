import PrivacyPage from "@/components/Pages/Privacy&ThermsPages/PrivacyPage";
import { Locale } from "@/i18n.config";

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <PrivacyPage lang={lang} />
    </main>
  );
}
