import SafetyPage from "@/components/Pages/SafetyPage/SafetyPage";
import { Locale } from "@/i18n.config";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <SafetyPage lang={lang} />
    </main>
  );
}
