import Image from "next/image";
import s from "./Services.module.scss";
import service1 from "@/assets/2.jpg";
import service2 from "@/assets/3.jpg";
import service3 from "@/assets/4.jpg";
import service4 from "@/assets/5.jpg";
import service5 from "@/assets/6.jpg";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Services({ lang }: { lang: Locale }) {
  const { homePage } = await getDictionary(lang);

  return (
    <section className={s.wrapper}>
      <div className={s.head_title}>{homePage.services.title}</div>
      <div className={s.container}>
        <div className={s.service_item}>
          <Image
            src={service1}
            alt=""
            width={350}
            height={350}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
              filter: "brightness(85%)",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>{homePage.services.service1}</div>
            <div className={s.text}>{homePage.services.desc1}</div>
            <div className={s.read_more}>
              <Link href={`/${lang}/services/supervision`}>
                {homePage.services.readMore}
              </Link>
            </div>
          </div>
        </div>
        <div className={s.service_item}>
          <Image
            src={service2}
            alt=""
            width={350}
            height={350}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
              filter: "brightness(85%)",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>{homePage.services.service2}</div>
            <div className={s.text}>{homePage.services.desc2}</div>
            <div className={s.read_more}>
              <Link href={`/${lang}/services/site-management`}>
                {homePage.services.readMore}
              </Link>
            </div>
          </div>
        </div>
        <div className={s.service_item}>
          <Image
            src={service3}
            alt=""
            width={350}
            height={350}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
              filter: "brightness(85%)",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>{homePage.services.service3}</div>
            <div className={s.text}>{homePage.services.desc3}</div>
            <div className={s.read_more}>
              <Link href={`/${lang}/services/technical-service`}>
                {homePage.services.readMore}
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={s.service_item}>
          <Image
            src={service4}
            alt=""
            width={350}
            height={350}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
              filter: "brightness(85%)",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>{homePage.services.service4}</div>
            <div className={s.text}>{homePage.services.desc4}</div>
            <div className={s.read_more}>
              <Link href={`/${lang}/services/commissioning`}>
                {homePage.services.readMore}
              </Link>
            </div>
          </div>
        </div>
        {/* <div className={s.service_item}>
          <Image
            src={service5}
            alt=""
            width={350}
            height={350}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
              filter: "brightness(85%)",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>Vacation Replacement Services</div>
            <div className={s.text}>
              When your key personnel are unavailable due to vacations or other
              commitments, Open Commissioning can step in as a seamless
              replacement. We offer temporary staffing solutions to ensure
              continuity in project management and execution.
            </div>
            <div>
              <Link href={`/${lang}/services/vacation-replacement-services`}>
                {homePage.services.readMore}
              </Link>
            </div>
          </div>
        </div> */}

        <div className={s.service_item}>
          <Image
            src={service5}
            alt=""
            width={350}
            height={350}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
              filter: "brightness(85%)",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>{homePage.services.service5}</div>
            <div className={s.text}>{homePage.services.desc5}</div>
            <div className={s.read_more}>
              <Link href={`/${lang}/safety`}>{homePage.services.readMore}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
