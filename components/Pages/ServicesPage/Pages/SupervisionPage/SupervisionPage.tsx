import s from "../PagesWrapper.module.scss";
import HeadBackground from "@/components/HeadBackground/HeadBackground";
import bg from "@/assets/supervisionbg.jpg";
import SupervisionBody from "./SupervisionBody";

export default function SupervisionPage() {
  return (
    <section className={s.wrapper}>
      <HeadBackground url={bg.src} title="Supervision" />
      <SupervisionBody />
    </section>
  );
}
