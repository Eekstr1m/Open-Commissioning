import CommissioningPage from "@/components/Pages/ServicesPage/Pages/CommissioningPage/CommissioningPage";
import { Locale } from "@/i18n.config";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <CommissioningPage lang={lang} />
    </main>
  );
}
