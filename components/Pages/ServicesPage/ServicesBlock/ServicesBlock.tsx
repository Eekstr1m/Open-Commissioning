import styled from "styled-components";
import s from "./ServicesBlock.module.scss";
import pic from "@/assets/1.jpg";

export default function ServicesBlock() {
  return (
    <section>
      <div className={s.head}>
        <div className={s.head_title}>Our process</div>
        <div className={s.head_text}>
          Your path to success At Open Commissioning, we’ve refined our process
          to ensure seamless project delivery and customer satisfaction.
        </div>
      </div>

      <div className={s.content}>
        <Item className={s.item}>Plan</Item>
        <Icon className="fa-solid fa-arrow-right"></Icon>
        <Item className={s.item}>Execute</Item>
        <Icon className="fa-solid fa-arrow-right"></Icon>
        <Item className={s.item}>Monitor</Item>
        <Icon className="fa-solid fa-arrow-right"></Icon>
        <Item className={s.item}>Conclude</Item>
      </div>
    </section>
  );
}

const Item = styled.div`
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.main};
`;

const Icon = styled.i`
  font-size: 25px;
  color: ${({ theme }) => theme.button};
`;
