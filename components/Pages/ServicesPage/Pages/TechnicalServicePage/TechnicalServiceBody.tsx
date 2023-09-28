import Image from "next/image";
import s from "./../PagesBody.module.scss";
import photo1 from "@/assets/TechnicalService1.jpg";
import photo2 from "@/assets/TechnicalService2.jpg";

export default function TechnicalServiceBody() {
  return (
    <section>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.content_wrapper}>
            <p className={s.title}>
              Boost your project with our dedicated engineers
            </p>
            <p>
              Recruiting skilled personnel for heavy industry projects can be a
              daunting challenge for many organizations. This sector requires
              not only deep technical knowledge, but also a thorough
              understanding of the ever-increasing emphasis on Health, Safety,
              Environment and Quality (HSEQ) standards.
            </p>
            <p>
              The pool of qualified candidates for short-term assignments
              remains limited and often lacks the job security and benefits
              associated with long-term positions.
            </p>
            <p>
              At Open Commissioning, we offer global support for projects
              through our experienced and well-traveled technicians who are true
              experts in their respective fields, including
            </p>
            <p className={s.list}><p>- Welding</p><p>- Electrical</p><p>- Automation</p><p>- Mechanical</p><p>- Fitting</p></p>
            <p>
              Our workforce brings a wealth of experience from a wide range of
              industries and is ready to work on your project wherever it is
              located in the world.
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
              When it comes to complex projects, we offer a flexible approach
              that seamlessly adapts to your exact requirements. Whether you
              need a single expert or an entire team, we will tailor our
              solution to fit your needs.
            </p>
            <p>
              As an integral part of our working relationship, you also have the
              option of appointing one of our experienced supervisors. They will
              take responsibility for overseeing all management aspects,
              including approving change orders and harmonizing efforts with
              contractors and subcontractors.
            </p>
            <p>
              Throughout the project lifecycle, we remain agile, ready to
              recalibrate the original solution to deal with unforeseen events
              such as delays or extensions. In addition, we have the ability to
              rapidly expand or contract the assembled team, ensuring unwavering
              alignment with your evolving project requirements.
            </p>
            <p>
              Once we have assembled the ideal team for your project, our
              experienced back-office professionals take responsibility for all
              administrative functions, ensuring compliant and cost-effective
              solutions that comply with each country’s regulations. From
              contracts to work permits and insurance, we meticulously manage
              every aspect, allowing you to focus on your core business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
