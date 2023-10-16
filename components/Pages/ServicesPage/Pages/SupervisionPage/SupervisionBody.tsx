import Image from "next/image";
import s from "./../PagesBody.module.scss";
import photo1 from "@/assets/supervision1.jpg";
import photo2 from "@/assets/supervision2.jpg";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function SupervisionBody({ lang }: { lang: Locale }) {
  const { supervisionPage } = await getDictionary(lang);

  return (
    <section>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.content_wrapper}>
            <p className={s.title}>{supervisionPage.body.textTitle}</p>
            <p>{supervisionPage.body.text1}</p>
            <p>{supervisionPage.body.text2}</p>
            <p>{supervisionPage.body.text3}</p>
          </div>
        </div>
        <div className={s.image}>
          <Image
            src={photo1}
            alt="Services body photo"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              filter: "brightness(85%)",
            }}
          />
        </div>
      </div>

      <div className={s.container}>
        <div className={s.image}>
          <Image
            src={photo2}
            alt="Services body photo"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              filter: "brightness(85%)",
            }}
          />
        </div>
        <div className={s.content}>
          <div className={s.content_wrapper}>
            <p>{supervisionPage.body.text4}</p>
            <p>{supervisionPage.body.text5}</p>
            <p>{supervisionPage.body.text6}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
