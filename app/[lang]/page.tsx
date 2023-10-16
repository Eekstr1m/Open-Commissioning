import HomePage from "@/components/Pages/HomePage/HomePage";
import { Locale } from "@/i18n.config";

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <HomePage lang={lang} />
    </main>
  );
}
