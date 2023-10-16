import Button from "@/components/CustomButton/Button";
import s from "./ServicesDesc.module.scss";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function ServicesDesc({ lang }: { lang: Locale }) {
  const { servicesPage, navigation } = await getDictionary(lang);

  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <div className={s.head}>
          <div className={s.head_title}>{servicesPage.servicesDesc.title}</div>
          <div className={s.head_text}>{servicesPage.servicesDesc.desc}</div>
        </div>
        <div className={s.content}>
          <div className={s.item}>
            <div className={s.icon}>
              <i className="fa-solid fa-industry"></i>
            </div>
            <div className={s.title}>
              {navigation.servicesNames.supervision}
            </div>
            <Button href={`/${lang}/services/supervision`}>
              {servicesPage.servicesDesc.buttons[1]}
            </Button>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
            <div className={s.title}>
              {navigation.servicesNames.commissioning}
            </div>
            <Button href={`/${lang}/services/commissioning`}>
              {servicesPage.servicesDesc.buttons[2]}
            </Button>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <i className="fa-solid fa-helmet-safety"></i>
            </div>
            <div className={s.title}>
              {navigation.servicesNames.siteManagement}
            </div>
            <Button href={`/${lang}/services/site-management`}>
              {servicesPage.servicesDesc.buttons[3]}
            </Button>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <i className="fa-solid fa-gears"></i>
            </div>
            <div className={s.title}>
              {navigation.servicesNames.technicalService}
            </div>
            <Button href={`/${lang}/services/technical-service`}>
              {servicesPage.servicesDesc.buttons[4]}
            </Button>
          </div>

          {/* <div className={s.item}>
            <div className={s.icon}>
              <Icon className="fa-solid fa-users-gear"></Icon>
            </div>
            <div className={s.title}>Vacation Replacement Services</div>
            <Button href={`/${lang}/services/vacation-replacement-services`}>
              Discover
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
