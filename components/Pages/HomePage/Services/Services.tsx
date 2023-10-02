import Image from "next/image";
import s from "./Services.module.scss";
import service1 from "@/assets/2.jpg";
import service2 from "@/assets/3.jpg";
import service3 from "@/assets/4.jpg";
import service4 from "@/assets/5.jpg";
import service5 from "@/assets/6.jpg";
import styled from "styled-components";
import Link from "next/link";

export default function Services() {
  return (
    <section className={s.wrapper}>
      <div className={s.head_title}>Key Topics</div>
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
              filter: "brightness(85%)",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>Supervision</div>
            <div className={s.text}>
              With our seasoned supervisors overseeing your project, you can
              rest assured that every detail is meticulously attended to. Our
              supervision services encompass quality control, progress
              monitoring, and resource management to keep your project on track.
            </div>
            <ReadMore>
              <Link href={"/services/supervision"}>Read More</Link>
            </ReadMore>
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
              filter: "brightness(85%)",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>Site Management</div>
            <div className={s.text}>
              Effective site management is essential for the success of any
              project. Open Commissioning offers dedicated site management
              services to ensure a well-organized, safe, and productive work
              environment.
            </div>
            <ReadMore>
              <Link href={"/services/site-management"}>Read More</Link>
            </ReadMore>
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
              filter: "brightness(85%)",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>Technical Service</div>
            <div className={s.text}>
              Our technical experts are equipped to handle any technical
              challenges that may arise during your project. Whether it’s
              troubleshooting, system optimization, or maintenance, our team is
              ready to provide timely and effective solutions.
            </div>
            <ReadMore>
              <Link href={"/services/technical-service"}>Read More</Link>
            </ReadMore>
          </div>
        </div>
        {/*  */}
        <div className={s.service_item}>
          <Image
            src={service4}
            alt=""
            width={350}
            height={350}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
              filter: "brightness(85%)",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>Commissioning</div>
            <div className={s.text}>
              Our team of experienced professionals specializes in commissioning
              services, ensuring that your project is operating as intended. We
              meticulously test and verify all systems to guarantee optimal
              functionality, safety, and compliance with industry standards.
            </div>
            <ReadMore>
              <Link href={"/services/commissioning"}>Read More</Link>
            </ReadMore>
          </div>
        </div>
        {/* <div className={s.service_item}>
          <Image
            src={service5}
            alt=""
            width={350}
            height={350}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
              filter: "brightness(85%)",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>Vacation Replacement Services</div>
            <div className={s.text}>
              When your key personnel are unavailable due to vacations or other
              commitments, Open Commissioning can step in as a seamless
              replacement. We offer temporary staffing solutions to ensure
              continuity in project management and execution.
            </div>
            <ReadMore>
              <Link href={"/services/vacation-replacement-services"}>
                Read More
              </Link>
            </ReadMore>
          </div>
        </div> */}

        <div className={s.service_item}>
          <Image
            src={service5}
            alt=""
            width={350}
            height={350}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
              filter: "brightness(85%)",
            }}
          />
          <div className={s.service_info}>
            <div className={s.title}>Safety</div>
            <div className={s.text}>
              Safety during commissioning is paramount. It requires rigorous
              planning, meticulous execution and constant vigilance to prevent
              accidents and ensure a safe working environment. Prioritizing
              safety not only protects personnel, but also contributes to the
              successful and smooth completion of projects.
            </div>
            <ReadMore>
              <Link href={"/safety"}>Read More</Link>
            </ReadMore>
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

  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`;
