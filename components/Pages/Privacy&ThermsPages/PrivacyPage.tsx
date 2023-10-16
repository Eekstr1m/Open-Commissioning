import { Locale } from "@/i18n.config";
import s from "./Privacy&Therms.module.scss";
import { getDictionary } from "@/lib/dictionary";

export default async function PrivacyPage({ lang }: { lang: Locale }) {
  const { privacyPolicyPage } = await getDictionary(lang);

  return (
    <section className={s.container}>
      <div>
        <h1 className={s.privacy_title}>{privacyPolicyPage.title}</h1>
        <i>{privacyPolicyPage.version}</i>
      </div>
      <div>
        <div>
          <div className={s.title}>{privacyPolicyPage.content[1].title}</div>
          <div className={s.text}>
            <p>{privacyPolicyPage.content[1].text1}</p>
            <p>{privacyPolicyPage.content[1].text2}</p>
          </div>
        </div>
        <div>
          <div className={s.title}>{privacyPolicyPage.content[2].title}</div>
          <div className={s.text}>
            <p>{privacyPolicyPage.content[2].text1}</p>
            <div>
              {privacyPolicyPage.content[2].text2.map((item, index) => (
                <p key={index}>
                  {item}
                  <br />
                </p>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className={s.title}>{privacyPolicyPage.content[3].title}</div>
          <div className={s.text}>
            <p>{privacyPolicyPage.content[3].text1}</p>
            <p>{privacyPolicyPage.content[3].text2}</p>
          </div>
        </div>
        <div>
          <div className={s.title}>{privacyPolicyPage.content[4].title}</div>
          <div className={s.text}>
            <p>{privacyPolicyPage.content[4].text1}</p>
            <div>
              {privacyPolicyPage.content[4].text2.map((item, index) => (
                <p key={index}>
                  {item}
                  <br />
                </p>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className={s.title}>{privacyPolicyPage.content[5].title}</div>
          <div className={s.text}>
            <p>{privacyPolicyPage.content[5].text1}</p>
            <div>
              {privacyPolicyPage.content[5].text2.map((item, index) => (
                <p key={index}>
                  {item}
                  <br />
                </p>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className={s.title}>{privacyPolicyPage.content[6].title}</div>
          <div className={s.text}>
            <p>{privacyPolicyPage.content[6].text1}</p>
          </div>
        </div>
        <div>
          <div className={s.title}>{privacyPolicyPage.content[7].title}</div>
          <div className={s.text}>
            <p>{privacyPolicyPage.content[7].text1}</p>
          </div>
        </div>
        <div>
          <div className={s.title}>{privacyPolicyPage.content[8].title}</div>
          <div className={s.text}>
            <div>
              {privacyPolicyPage.content[8].text1.map((item, index) => (
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
