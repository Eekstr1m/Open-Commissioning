import s from "../PagesWrapper.module.scss";
import HeadBackground from "@/components/HeadBackground/HeadBackground";
import bg from "@/assets/TechnicalServiceBG.jpg";
import TechnicalServiceBody from "./TechnicalServiceBody";

export default function TechnicalServicePage() {
  return (
    <section className={s.wrapper}>
      <HeadBackground url={bg.src} title="Technical Service" />
      <TechnicalServiceBody />
    </section>
  );
}
