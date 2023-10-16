import Image from "next/image";
import s from "../PagesBody.module.scss";
import photo1 from "@/assets/siteManagement1.jpg";
import photo2 from "@/assets/siteManagement2.jpg";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function SiteManagementBody({ lang }: { lang: Locale }) {
  const { siteManagementPage } = await getDictionary(lang);

  return (
    <section>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.content_wrapper}>
            <p className={s.title}>{siteManagementPage.body.textTitle}</p>
            <p>{siteManagementPage.body.text1}</p>
            <p>{siteManagementPage.body.text2}</p>
            <div className={s.list}>
              {siteManagementPage.body.text3.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <p>{siteManagementPage.body.text4}</p>
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
            <p>{siteManagementPage.body.text5}</p>
            <p>{siteManagementPage.body.text6}</p>
            <p>{siteManagementPage.body.text7}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
