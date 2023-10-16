import ServicesPage from "@/components/Pages/ServicesPage/ServicesPage";
import { Locale } from "@/i18n.config";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <ServicesPage lang={lang} />
    </main>
  );
}
