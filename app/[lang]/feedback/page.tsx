import Feedback from "@/components/Pages/FeedbackPage/Feedback";
import { Locale } from "@/i18n.config";

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <Feedback lang={lang} />
    </main>
  );
}
