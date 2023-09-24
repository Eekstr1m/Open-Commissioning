import s from "../PagesWrapper.module.scss";
import HeadBackground from "@/components/HeadBackground/HeadBackground";
import bg from "@/assets/VacationReplacementBG.jpg";
import VacationReplacementBody from "./VacationReplacementBody";

export default function VacationReplacementPage() {
  return (
    <section className={s.wrapper}>
      <HeadBackground url={bg.src} title="Vacation Replacement Services" />
      <VacationReplacementBody />
    </section>
  );
}
