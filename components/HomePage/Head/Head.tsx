import Image from "next/image";
import s from "./Head.module.scss";
import Button from "@/components/CustomButton/Button";
import picture from "@/assets/1.jpg";
import styled from "styled-components";

export default function Head() {
  return (
    <HeadSection>
      <div className={s.wrapper}>
        <div className={s.info_block}>
          <h1>Get Ahead with Open Commissioning</h1>
          <p className={s.text}>
            In the dynamic landscape of modern industry, ensuring the efficient
            functioning of complex systems and facilities is paramount. That’s
            where Open Commissioning steps in as your trusted partner. We are a
            company dedicated to delivering top-tier commissioning, supervision,
            site management, technical service, and vacation replacement
            services.
          </p>
          <Button>View All Services</Button>
        </div>
        <div className={s.image_block}>
          <Image
            src={picture}
            alt=""
            width={450}
            height={450}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              filter: "brightness(85%)",
            }}
          />
        </div>
      </div>
    </HeadSection>
  );
}

const HeadSection = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background-color: ${({ theme }) => theme.bg_primary};
`;
