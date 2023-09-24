import HeadBackground from "@/components/HeadBackground/HeadBackground";
import s from "../PagesWrapper.module.scss";
import bg from "@/assets/siteManagementBG.jpg";
import SiteManagementBody from "./SiteManagementBody";

export default function SiteManagementPage() {
  return (
    <section className={s.wrapper}>
      <HeadBackground url={bg.src} title="Site Management" />
      <SiteManagementBody />
    </section>
  );
}
