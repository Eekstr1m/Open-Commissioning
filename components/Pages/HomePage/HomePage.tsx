import s from "./HomePage.module.scss";
import Head from "./Head/Head";
import CaseStudies from "./CaseStudies/CaseStudies";
import Services from "./Services/Services";
import FeaturesBenefits from "./FeaturesBenefits/FeaturesBenefits";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";
import { Locale } from "@/i18n.config";

export default function HomePage({ lang }: { lang: Locale }) {
  return (
    <div>
      <Head lang={lang} />
      {/* Case Studies */}
      <CaseStudies lang={lang} />
      {/* Our services */}
      <Services lang={lang} />
      {/* Features & Benefits */}
      <FeaturesBenefits lang={lang} />
      {/* Contact */}
      <Contact lang={lang} />
    </div>
  );
}
