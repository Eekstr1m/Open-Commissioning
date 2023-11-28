import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import s from "./FeedbackBody.module.scss";

export default async function FeedbackBody({ lang }: { lang: Locale }) {
  const { feedbackPage } = await getDictionary(lang);

  return (
    <div>
      <div className={s.desc}>
        <div>{feedbackPage.desc}</div>
      </div>
      {/*  */}
      <div className={s.wrapper}>
        <div className={s.content_item}>
          <iframe src="" width="100%" height="500px" />
        </div>
      </div>
    </div>
  );
}
