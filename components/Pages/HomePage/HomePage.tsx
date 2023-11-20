import Head from "./Head/Head";
import Services from "./Services/Services";
import FeaturesBenefits from "./FeaturesBenefits/FeaturesBenefits";
import Contact from "../../Contact/Contact";
import { Locale } from "@/i18n.config";

export default function HomePage({ lang }: { lang: Locale }) {
  return (
    <div>
      <Head lang={lang} />
      {/* Our services */}
      <Services lang={lang} />
      {/* Features & Benefits */}
      <FeaturesBenefits lang={lang} />
      {/* Contact */}
      <Contact lang={lang} />
    </div>
  );
}
