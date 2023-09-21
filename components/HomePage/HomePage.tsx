"use client";
import s from "./HomePage.module.scss";
import Head from "./Head/Head";
import CaseStudies from "./CaseStudies/CaseStudies";
import Services from "./Services/Services";
import FeaturesBenefits from "./FeaturesBenefits/FeaturesBenefits";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Head />
      {/* Case Studies */}
      <CaseStudies />
      {/* Our services */}
      <Services />
      {/* Features & Benefits */}
      <FeaturesBenefits />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
