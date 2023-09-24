"use client";
import Image from "next/image";
import photo from "@/assets/7.jpg";
import s from "./ServicesBody.module.scss";
import styled from "styled-components";
import Link from "next/link";
import Button from "@/components/CustomButton/Button";

export default function ServicesBody() {
  return (
    <section className={s.container}>
      <div className={s.content}>
        <div className={s.content_wrapper}>
          <p>
            <p className={s.title}>
              Customized and compliant engineering solutions
            </p>
            Open Commissioning is your trusted partner in delivering tailored
            and compliant solutions across a range of technical disciplines. Our
            global presence, combined with our extensive expertise and highly
            skilled workforce, enables us to support projects worldwide. We
            specialize in creating solutions that are not only compliant but
            also adaptable, minimizing your risk and helping you to achieve your
            goals.
          </p>

          <p>
            Our primary areas of operation include the international
            construction, marine, energy and food processing industries. We have
            technical specialists strategically located around the world with
            core competencies in supervision, commissioning, consultancy and
            global mobility.
          </p>

          <Contact>
            Got a challenging project on the horizon? Contact us today.
          </Contact>

          <Button>Contact Us</Button>
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
