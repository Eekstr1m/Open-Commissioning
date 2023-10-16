import styled from "styled-components";
import s from "./FeaturesBenefits.module.scss";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function FeaturesBenefits({ lang }: { lang: Locale }) {
  const { homePage } = await getDictionary(lang);
  return (
    <section className={s.container}>
      <span className={s.separator}>{homePage.featuresBenefits.title}</span>
      <div className={s.content}>
        <div className={s.content_item}>
          <div className={s.title}>
            {homePage.featuresBenefits.featuresTitle}
          </div>

          {homePage.featuresBenefits.features.map((name, index) => (
            <div key={index} className={s.item}>
              <i className={`${s.icon} fa-solid fa-check`}></i>
              {name}
            </div>
          ))}
        </div>
        <div className={s.content_item}>
          <div className={s.title}>
            {homePage.featuresBenefits.benefitsTitle}
          </div>

          {homePage.featuresBenefits.benefits.map((name, index) => (
            <div key={index} className={s.item}>
              <i className={`${s.icon} fa-solid fa-check`}></i>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
