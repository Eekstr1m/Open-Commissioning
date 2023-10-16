import Image from "next/image";
import photo from "@/assets/8.jpg";
import s from "./IndustriesBody.module.scss";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function IndustriesBody({ lang }: { lang: Locale }) {
  const { industriesPage } = await getDictionary(lang);

  return (
    <section className={s.container}>
      <div className={s.content}>
        <div className={s.content_wrapper}>
          <div>
            <p className={s.title}>{industriesPage.industriesBody.textTitle}</p>
            {industriesPage.industriesBody.text1}
          </div>

          <p>{industriesPage.industriesBody.text2}</p>
        </div>
      </div>
      <div className={s.image}>
        <Image
          src={photo}
          alt="Industries body photo"
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
