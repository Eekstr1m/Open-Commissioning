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
            Open Commissioning provides game-changing HR solutions to take your
            business to the next level. From workforce analytics to talent
            management, we’ve got you covered.
          </p>
          <Button>View All Services</Button>
        </div>
        <div className={s.image_block}>
          <Image
            src={picture}
            alt=""
            width={450}
            height={450}
            style={{ objectFit: "cover", borderRadius: "10px" }}
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
