import IndustriesPage from "@/components/Pages/IndustriesPage/IndustriesPage";
import { Locale } from "@/i18n.config";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <IndustriesPage lang={lang} />
    </main>
  );
}
