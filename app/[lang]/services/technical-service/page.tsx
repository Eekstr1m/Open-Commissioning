import TechnicalServicePage from "@/components/Pages/ServicesPage/Pages/TechnicalServicePage/TechnicalServicePage";
import { Locale } from "@/i18n.config";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <TechnicalServicePage lang={lang} />
    </main>
  );
}
