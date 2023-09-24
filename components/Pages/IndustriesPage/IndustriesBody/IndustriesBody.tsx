"use client";
import Image from "next/image";
import photo from "@/assets/8.jpg";
import s from "./IndustriesBody.module.scss";
import styled from "styled-components";
import Link from "next/link";
import Button from "@/components/CustomButton/Button";

export default function IndustriesBody() {
  return (
    <section className={s.container}>
      <div className={s.content}>
        <div className={s.content_wrapper}>
          <p>
            <p className={s.title}>
              Tailored and compliant solutions in the technical fields
            </p>
            At Open Commissioning, our commitment to providing world-class
            commissioning and workforce solutions extends to a wide range of
            engineering companies and projects that rely on advanced equipment
            and cutting-edge technologies. Our expertise knows no boundaries and
            we are ready to serve a wide range of industries to ensure seamless
            project delivery and success.
          </p>

          <p>
            Whatever the industry or project type, Open Commissioning brings a
            wealth of experience, expertise and adaptability. Our dedicated team
            of commissioning engineers and supervisors are well equipped to
            handle the unique challenges and requirements of each sector,
            ensuring that your project is executed with precision, efficiency
            and compliance.
          </p>
        </div>
      </div>
      <div className={s.image}>
        <Image
          src={photo}
          alt="Services body photo"
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            borderRadius: "10px",
            filter: "brightness(85%)",
          }}
        />
      </div>
    </section>
  );
}

const Contact = styled.p`
  /* padding: 20px 0; */
  font-weight: 600;
  color: ${({ theme }) => theme.darken_primary};

  :hover {
    text-decoration: underline;
  }
`;
