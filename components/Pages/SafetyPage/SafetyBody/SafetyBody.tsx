import Image from "next/image";
import s from "./SafetyBody.module.scss";
import photo1 from "@/assets/safety1.jpg";
import photo2 from "@/assets/safety2.jpg";

export default function SafetyBody() {
  return (
    <section>
      <div className={s.container}>
        <div className={s.image}>
          <Image
            src={photo1}
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
        <div className={s.content}>
          <div className={s.content_wrapper}>
            <p className={s.title}>Ensuring Workplace Safety</p>
            <p>
              Understanding different hazard types and their specific names is
              vital for workplace safety. It goes beyond compliance, forming an
              ethical business practice foundation. Recognizing hazards, such as
              physical, chemical, biological, and ergonomic risks, enables
              proactive risk mitigation. Equipping employees with this knowledge
              fosters an alert culture, enhancing response to emergencies. This
              prioritization of hazard awareness ensures a safer, healthier, and
              more productive work environment. Safety during commissioning is a
              collective responsibility involving various teams, from design to
              operations and the HSE team. Safety begins with the design team,
              where safer elements are integrated, emphasizing that safety is
              everyone’s commitment throughout the commissioning process.
            </p>
            <p>
              Starting with the design team, safety considerations begin at the
              earliest stages. If a system can be designed to inherently improve
              safety, it’s incorporated into the plans. Whether it’s guards,
              railings or safer access methods, safer design options are
              incorporated from the outset. This collaborative approach
              emphasizes that safety is not someone else’s problem - it’s
              everyone’s responsibility and is woven into every facet of the
              commissioning process.
            </p>
          </div>
        </div>
        <div className={s.image}>
          <Image
            src={photo2}
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
      </div>
    </section>
  );
}
