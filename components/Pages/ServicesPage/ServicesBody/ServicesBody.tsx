import Image from "next/image";
import photo from "@/assets/7.jpg";
import s from "./ServicesBody.module.scss";
import Button from "@/components/CustomButton/Button";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export default async function ServicesBody({ lang }: { lang: Locale }) {
  const { servicesPage } = await getDictionary(lang);

  return (
    <section className={s.container}>
      <div className={s.content}>
        <div className={s.content_wrapper}>
          <p className={s.title}>{servicesPage.servicesBody.textTitle}</p>
          <p>{servicesPage.servicesBody.text1}</p>

          <p>{servicesPage.servicesBody.text2}</p>

          <p className={s.contact}>{servicesPage.servicesBody.contactText}</p>

          <Button href={`/${lang}/contact-us`}>
            {servicesPage.servicesBody.button}
          </Button>
        </div>
      </div>
      <div className={s.image}>
        <Image
          src={photo}
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
    </section>
  );
}
