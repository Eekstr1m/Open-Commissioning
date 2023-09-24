"use client";
import Footer from "@/components/Footer/Footer";
import ServicesBody from "./ServicesBody/ServicesBody";
import ServicesDesc from "./ServicesDesc/ServicesDesc";
import s from "./ServicesPage.module.scss";
import ServicesBlock from "./ServicesBlock/ServicesBlock";
import HeadBackground from "../../HeadBackground/HeadBackground";

import bg from "@/assets/bg.jpg";

export default function ServicesPage() {
  return (
    <section className={s.container}>
      <HeadBackground url={bg.src} title={"Services"} />
      <ServicesDesc />
      <ServicesBody />
      <ServicesBlock />

      <Footer />
    </section>
  );
}
