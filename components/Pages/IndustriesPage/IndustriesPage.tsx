"use client";
import Footer from "@/components/Footer/Footer";
import IndustriesBody from "./IndustriesBody/IndustriesBody";
import IndustriesDesc from "./IndustriesDesc/IndustriesDesc";
import s from "./IndustriesPage.module.scss";
import IndustriesHead from "./IndustriesHead/IndustriesHead";

export default function IndustriesPage() {
  return (
    <section className={s.container}>
      <IndustriesHead />
      <IndustriesDesc />
      <IndustriesBody />
      <Footer />
    </section>
  );
}
