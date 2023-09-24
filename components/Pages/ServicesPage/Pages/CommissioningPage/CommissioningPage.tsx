import HeadBackground from "@/components/HeadBackground/HeadBackground";
import s from "../PagesWrapper.module.scss";
import bg from "@/assets/commissioningBG.jpg";
import CommissioningBody from "./CommissioningBody";

export default function CommissioningPage() {
  return (
    <section className={s.wrapper}>
      <HeadBackground url={bg.src} title="Commissioning" />
      <CommissioningBody />
    </section>
  );
}
