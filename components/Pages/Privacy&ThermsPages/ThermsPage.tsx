import { Locale } from "@/i18n.config";
import s from "./Privacy&Therms.module.scss";
import { getDictionary } from "@/lib/dictionary";

export default async function ThermsPage({ lang }: { lang: Locale }) {
  const { termsOfServicePage } = await getDictionary(lang);

  return (
    <section className={s.container}>
      <div>
        <h1 className={s.privacy_title}>{termsOfServicePage.title}</h1>
        <i>{termsOfServicePage.version}</i>
      </div>
      <div>
        <div>
          <div className={s.title}>{termsOfServicePage.content[1].title}</div>
          <div className={s.text}>
            <p>{termsOfServicePage.content[1].text1}</p>
          </div>
        </div>
        <div>
          <div className={s.title}>{termsOfServicePage.content[2].title}</div>
          <div className={s.text}>
            <p>{termsOfServicePage.content[2].text1}</p>
          </div>
        </div>
        <div>
          <div className={s.title}>{termsOfServicePage.content[3].title}</div>
          <div className={s.text}>
            <p>{termsOfServicePage.content[3].text1}</p>
            <p>{termsOfServicePage.content[3].text2}</p>
          </div>
        </div>
        <div>
          <div className={s.title}>{termsOfServicePage.content[4].title}</div>
          <div className={s.text}>
            <p>{termsOfServicePage.content[4].text1}</p>
          </div>
        </div>
        <div>
          <div className={s.title}>{termsOfServicePage.content[5].title}</div>
          <div className={s.text}>
            <p>{termsOfServicePage.content[5].text1}</p>
          </div>
        </div>
        <div>
          <div className={s.title}>{termsOfServicePage.content[6].title}</div>
          <div className={s.text}>
            <p>{termsOfServicePage.content[6].text1}</p>
          </div>
        </div>
        <div>
          <div className={s.title}>{termsOfServicePage.content[7].title}</div>
          <div className={s.text}>
            <div>
              {termsOfServicePage.content[7].text1.map((item, index) => (
                <p key={index}>
                  {item}
                  <br />
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
