import Image from "next/image";
import s from "./Services.module.scss";
import service1 from "@/assets/2.jpg";
import service2 from "@/assets/3.jpg";
import service3 from "@/assets/4.jpg";
import styled from "styled-components";

export default function Services() {
  return (
    <section className={s.wrapper}>
      <div className={s.head_title}>Our Services</div>
      <div className={s.container}>
        <div className={s.service_item}>
          <Image
            src={service1}
            alt=""
            width={350}
            height={350}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>HR Tech Solutions</div>
            <div className={s.text}>
              Our HR Tech Solutions automate and streamline your HR processes,
              freeing up your time to focus on core business objectives.
            </div>
            <ReadMore>Read More</ReadMore>
          </div>
        </div>
        <div className={s.service_item}>
          <Image
            src={service2}
            alt=""
            width={350}
            height={350}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>Talent Management</div>
            <div className={s.text}>
              Our Talent Management services help you attract, develop, and
              retain the best talent to drive your business forward.
            </div>
            <ReadMore>Read More</ReadMore>
          </div>
        </div>
        <div className={s.service_item}>
          <Image
            src={service3}
            alt=""
            width={350}
            height={350}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>Workforce Analytics</div>
            <div className={s.text}>
              Our Workforce Analytics services provide you with data insights
              that enable you to optimize your workforce performance and make
              informed decisions.
            </div>
            <ReadMore>Read More</ReadMore>
          </div>
        </div>
      </div>
    </section>
  );
}

const ReadMore = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.darken_primary};
  font-weight: 300;
`;
