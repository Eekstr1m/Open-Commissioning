import Link from "next/link";
import s from "./Button.module.scss";

export default function Button({
  children,
  href,
  style,
}: {
  children: React.ReactNode;
  href: string;
  style?: React.CSSProperties;
}) {
  return (
    <Link href={href} className={s.button} style={style}>
      {children}
    </Link>
  );
}
