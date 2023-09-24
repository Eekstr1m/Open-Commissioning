import Image from "next/image";
import s from "./../PagesBody.module.scss";
import photo1 from "@/assets/supervision1.jpg";
import photo2 from "@/assets/supervision2.jpg";

export default function SupervisionBody() {
  return (
    <section>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.content_wrapper}>
            <p className={s.title}>
              Your trusted partner for project supervision
            </p>
            <p>
              Project supervision is a critical, yet often challenging and
              time-sensitive task when launching a new project. Finding the
              perfect talent pool isn’t always easy, and constraints such as
              full-time employment and budget limitations can further complicate
              the process. If your project extends overseas, navigating complex
              global compliance requirements can add another layer of
              complexity.
            </p>
            <p>
              Backed by our extensive knowledge of global compliance
              regulations, we take full responsibility for ensuring your project
              meets all the necessary requirements. This includes everything
              from visa procurement and payroll management to work permit
              applications and administrative arrangements. With Open
              Commissioning, you can be confident that every detail will be
              meticulously managed.
            </p>
            <p>
              All you need to do is describe your project and we will do the
              rest. We believe in making project oversight effortless, allowing
              you to focus on the core objectives of your project’s success,
              while we manage the intricacies of workforce coordination and
              global compliance.
            </p>
          </div>
        </div>
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
      </div>

      <div className={s.container}>
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
        <div className={s.content}>
          <div className={s.content_wrapper}>
            <p>
              Our international team of experienced superintendents act as your
              trusted local representatives, diligently safeguarding your
              interests throughout the construction process. They are committed
              to ensuring that your project meets the highest standards of
              safety, regulatory compliance, quality and cost effectiveness.
            </p>
            <p>
              Our extensive workforce spans the globe and is made up exclusively
              of highly skilled supervisors with a wealth of experience from a
              wide range of projects. This collective expertise enables us to
              comprehensively oversee every facet of your construction project,
              from the initial pre-construction planning stages to the final
              meticulous review.
            </p>
            <p>
              Our responsibilities include on-site inspections, meticulous
              material quality testing, vigilant enforcement of safety
              standards, prudent approval of change orders when required,
              seamless coordination with contractors and subcontractors, and
              vigilant supervision of both on-site and remote personnel. With
              our dedicated team at your side, your project is in expert hands
              from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
