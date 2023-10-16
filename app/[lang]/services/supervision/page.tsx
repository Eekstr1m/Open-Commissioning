import SupervisionPage from "@/components/Pages/ServicesPage/Pages/SupervisionPage/SupervisionPage";
import { Locale } from "@/i18n.config";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <SupervisionPage lang={lang} />
    </main>
  );
}
