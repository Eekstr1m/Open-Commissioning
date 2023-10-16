import ContactPage from "@/components/Pages/ContactPage/ContactPage";
import { Locale } from "@/i18n.config";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <ContactPage lang={lang} />
    </main>
  );
}
