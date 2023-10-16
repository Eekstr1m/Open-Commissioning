import Image from "next/image";
import s from "./../PagesBody.module.scss";
import photo1 from "@/assets/TechnicalService1.jpg";
import photo2 from "@/assets/TechnicalService2.jpg";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function TechnicalServiceBody({ lang }: { lang: Locale }) {
  const { technicalServicePage } = await getDictionary(lang);

  return (
    <section>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.content_wrapper}>
            <p className={s.title}>{technicalServicePage.body.textTitle}</p>
            <p>{technicalServicePage.body.text1}</p>
            <p>{technicalServicePage.body.text2}</p>
            <p>{technicalServicePage.body.text3}</p>
            <div className={s.list}>
              {technicalServicePage.body.text4.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <p>{technicalServicePage.body.text5}</p>
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
            <p>{technicalServicePage.body.text6}</p>
            <p>{technicalServicePage.body.text7}</p>
            <p>{technicalServicePage.body.text8}</p>
            <p>{technicalServicePage.body.text9}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
