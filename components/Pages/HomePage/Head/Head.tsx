import Image from "next/image";
import s from "./Head.module.scss";
import Button from "@/components/CustomButton/Button";
import picture from "@/assets/1.jpg";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export default async function Head({ lang }: { lang: Locale }) {
  const { homePage } = await getDictionary(lang);

  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <div className={s.info_block}>
          <p className={s.head_title}>
            {homePage.head.title}
            <br />
            OPEN COMMISSIONING
          </p>
          <p className={s.text}>{homePage.head.description}</p>
          <Button href={`/${lang}/services`}>{homePage.head.button}</Button>
        </div>
        <div className={s.image_block}>
          <Image
            src={picture}
            alt=""
            width={450}
            height={450}
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
