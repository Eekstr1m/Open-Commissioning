import Image from "next/image";
import s from "./SafetyContent.module.scss";
import redSing from "@/assets/redsign.png";
import yellowSing from "@/assets/yellowsign.png";
import blueSing from "@/assets/bluesing.png";
import greenSign from "@/assets/greensign.png";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function SafetyContent({ lang }: { lang: Locale }) {
  const { safetyPage } = await getDictionary(lang);

  return (
    <section className={s.container}>
      <div className={s.title}>{safetyPage.safetyContent.title}</div>
      <div className={s.item}>
        <div>
          <Image src={redSing.src} alt="" width={150} height={150} />
        </div>
        <p>{safetyPage.safetyContent.content.red}</p>
      </div>

      <div className={s.item}>
        <div>
          <Image src={yellowSing.src} alt="" width={150} height={150} />
        </div>
        <p>{safetyPage.safetyContent.content.yellow}</p>
      </div>

      <div className={s.item}>
        <div>
          <Image src={blueSing.src} alt="" width={150} height={150} />
        </div>
        <p>{safetyPage.safetyContent.content.blue}</p>
      </div>

      <div className={s.item}>
        <div>
          <Image src={greenSign.src} alt="" width={150} height={140} />
        </div>
        <p>{safetyPage.safetyContent.content.green}</p>
      </div>
    </section>
  );
}
