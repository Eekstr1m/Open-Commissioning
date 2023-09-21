import Link from "next/link";
import s from "./Button.module.scss";

export default function Button({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <Link href="#" className={s.button} style={style}>
      {children}
    </Link>
  );
}
