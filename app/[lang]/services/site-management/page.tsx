import SiteManagementPage from "@/components/Pages/ServicesPage/Pages/SiteManagement/SiteManagementPage";
import { Locale } from "@/i18n.config";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <SiteManagementPage lang={lang} />
    </main>
  );
}
