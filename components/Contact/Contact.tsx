import ContactForm from "./ContactForm/ContactForm";
import s from "./Contact.module.scss";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Contact({ lang }: { lang: Locale }) {
  const { contactPage } = await getDictionary(lang);

  return (
    <section className={s.container}>
      <div className={s.title}>{contactPage.contact.title}</div>
      <div className={s.info_wrapper}>
        <div className={s.info}>
          <div>
            <p className={s.info_title}>{contactPage.contact.ukAddress}</p>
            <p className={s.info_desc}>{contactPage.contact.uk}</p>
            <p className={s.info_desc}>{contactPage.contact.ukDesc}</p>
            <p className={s.info_desc}>&#10240;</p>
          </div>
          <div>
            <p className={s.info_title}>{contactPage.contact.phone}</p>
            <p className={s.info_desc}>{contactPage.contact.ukPhone}</p>
          </div>
          <div>
            <p className={s.info_title}>{contactPage.contact.email}</p>
            <p className={s.info_desc}>{contactPage.contact.ukEmail}</p>
          </div>
        </div>
        <div className={s.info}>
          <div>
            <p className={s.info_title}>{contactPage.contact.inAddress}</p>
            <p className={s.info_desc}>{contactPage.contact.in}</p>
            <p className={s.info_desc}>{contactPage.contact.in2}</p>
            <p className={s.info_desc}>{contactPage.contact.inDesc}</p>
          </div>
          <div>
            <p className={s.info_title}>{contactPage.contact.phone}</p>
            <p className={s.info_desc}>{contactPage.contact.inPhone}</p>
          </div>
          <div>
            <p className={s.info_title}>{contactPage.contact.email}</p>
            <p className={s.info_desc}>{contactPage.contact.inEmail}</p>
          </div>
        </div>
        <div className={s.info}>
          <div>
            <p className={s.info_title}>{contactPage.contact.uaAddress}</p>
            <p className={s.info_desc}>{contactPage.contact.ua}</p>
            <p className={s.info_desc}>{contactPage.contact.ua2}</p>
            <p className={s.info_desc}>{contactPage.contact.uaDesc}</p>
          </div>
          <div>
            <p className={s.info_title}>{contactPage.contact.phone}</p>
            <p className={s.info_desc}>{contactPage.contact.uaPhone}</p>
          </div>
          <div>
            <p className={s.info_title}>{contactPage.contact.email}</p>
            <p className={s.info_desc}>{contactPage.contact.uaEmail}</p>
          </div>
        </div>
      </div>
      <div className={s.titleForm}>{contactPage.title}:</div>
      <ContactForm contactText={contactPage.form} />
    </section>
  );
}
