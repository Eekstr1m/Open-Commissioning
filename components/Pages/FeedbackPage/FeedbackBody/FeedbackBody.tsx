import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import s from "./FeedbackBody.module.scss";
import Image from "next/image";
import logo from "@/assets/feedback-logos/optimus.png";
import Button from "@/components/CustomButton/Button";

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
          <Image src={logo} alt="" width={300} className={s.logo} />
          <div>{feedbackPage.text}</div>
          <Button href={`/pdf-viewer?pdf=${feedbackPage.companyName}`}>
            {feedbackPage.btn}
          </Button>
        </div>
      </div>
    </div>
  );
}
