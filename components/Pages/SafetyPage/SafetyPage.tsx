"use client";
import Footer from "@/components/Footer/Footer";
import s from "./SafetyPage.module.scss";

import bg from "@/assets/safetyBG.jpg";
import HeadBackground from "@/components/HeadBackground/HeadBackground";
import SafetyBody from "./SafetyBody/SafetyBody";

export default function SafetyPage() {
  return (
    <section className={s.container}>
      <HeadBackground url={bg.src} title={"Safety"} />

      <SafetyBody />

      <Footer />
    </section>
  );
}
