import Link from "next/link";
import s from "./Header.module.scss";
import Button from "../CustomButton/Button";

export default function Header() {
  return (
    <header className={s.container}>
      <div className={s.wrapper}>
        <Link href="#" className={s.logo}>
          Open Commissioning
        </Link>
        <nav className={s.nav}>
          <Link href="#" className={s.nav_item}>
            Services
          </Link>
          <Link href="#" className={s.nav_item}>
            Case Studies
          </Link>
          <Link href="#" className={s.nav_item}>
            About Us
          </Link>
          <Link href="#" className={`${s.nav_item} ${s.contact}`}>
            <Button>Contact</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
