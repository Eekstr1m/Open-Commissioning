import Image from "next/image";
import s from "./SafetyBody.module.scss";
import photo1 from "@/assets/safety1.jpg";
import photo2 from "@/assets/safety2.jpg";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export default async function SafetyBody({ lang }: { lang: Locale }) {
  const { safetyPage } = await getDictionary(lang);

  return (
    <section>
      <div className={s.container}>
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
        <div className={s.content}>
          <div className={s.content_wrapper}>
            <p className={s.title}>{safetyPage.safetyBody.textTitle}</p>
            <p>{safetyPage.safetyBody.text1}</p>
            <p>{safetyPage.safetyBody.text2}</p>
          </div>
        </div>
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
      </div>
    </section>
  );
}
