import ContactForm from "./ContactForm/ContactForm";
import s from "./Contact.module.scss";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Contact({ lang }: { lang: Locale }) {
  const { contactPage } = await getDictionary(lang);

  return (
    <section className={s.container}>
      <div>
        <div className={s.title}>{contactPage.contact.title}</div>
        <div className={s.info}>
          <div>
            <p className={s.info_title}>{contactPage.contact.info1}</p>
            <p className={s.info_desc}>{contactPage.contact.desc1}</p>
          </div>
          <div>
            <p className={s.info_title}>{contactPage.contact.info2}</p>
            <p className={s.info_desc}>{contactPage.contact.desc2}</p>
          </div>
        </div>
      </div>
      <ContactForm contactText={contactPage.form} />
    </section>
  );
}
