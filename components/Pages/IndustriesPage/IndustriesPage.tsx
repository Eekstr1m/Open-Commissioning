"use client";
import Footer from "@/components/Footer/Footer";
import IndustriesBody from "./IndustriesBody/IndustriesBody";
import IndustriesDesc from "./IndustriesDesc/IndustriesDesc";
import s from "./IndustriesPage.module.scss";
import HeadBackground from "@/components/HeadBackground/HeadBackground";
import bg from "@/assets/bg2.jpg";

export default function IndustriesPage() {
  return (
    <section className={s.container}>
      <HeadBackground url={bg.src} title="Industries" />
      <IndustriesDesc />
      <IndustriesBody />
      <Footer />
    </section>
  );
}
