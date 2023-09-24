"use client";
import Footer from "@/components/Footer/Footer";
import ServicesBody from "./ServicesBody/ServicesBody";
import ServicesDesc from "./ServicesDesc/ServicesDesc";
import s from "./ServicesPage.module.scss";
import ServicesBlock from "./ServicesBlock/ServicesBlock";
import ServicesHead from "./ServicesHead/ServicesHead";

export default function ServicesPage() {
  return (
    <section className={s.container}>
      <ServicesHead />
      <ServicesDesc />
      <ServicesBody />
      <ServicesBlock />

      <Footer />
    </section>
  );
}
