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
    <a className={s.btn} href={href} style={style}>
      {children}
    </a>
  );
}
