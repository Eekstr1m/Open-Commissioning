import Image from "next/image";
import s from "./../PagesBody.module.scss";
import photo1 from "@/assets/commissioning1.jpg";
import photo2 from "@/assets/commissioning2.jpg";

export default function CommissioningBody() {
  return (
    <section>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.content_wrapper}>
            <p className={s.title}>Streamlining your commissioning phase</p>
            <p>
              Navigating the commissioning phase can often present significant
              challenges in the search for specialized expertise. Factors such
              as a surge in new projects, delays in ongoing projects and other
              variables can overwhelm your in-house commissioning team.
            </p>
            <p>
              This necessitates external recruitment, a step that can introduce
              numerous hurdles and potentially jeopardies project deadlines.
              Finding candidates with the exact knowledge and skills required
              becomes a complex puzzle, compounded by constraints on both
              full-time recruitment capacity and project pipelines.
            </p>
            <p>
              For overseas projects, the imperative of global compliance is
              compounded by the need for extended onsite presence by
              commissioning engineers.
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
              We have a specialized and well-traveled team of commissioning
              engineers, each with expertise honed across multiple industries,
              ready and willing to meet the unique needs of your project.
            </p>
            <p>
              Our engineers excel at the meticulous orchestration of project
              systems and components, ensuring that every facet is in harmony
              with your or your end customer’s operational specifications. With
              a wealth of experience from projects spanning the globe, they’ve
              become masters of adaptability, seamlessly navigating project
              delays and embracing the richness of cultural diversity.
            </p>
            <p>
              If required, our engineers are ready to extend their on-site
              presence, reducing the need for frequent engineering changes and
              minimizing the potential for error. When on site, they wear your
              company’s name as a badge of honour and serve as dedicated
              representatives of your vision and goals.
            </p>
            <p>
              Once we’ve selected the right engineer for your project, our
              dedicated team will take care of all the administrative tasks. All
              administrative tasks are carried out with an unwavering commitment
              to compliance, utilizing cost effective solutions that are
              seamlessly aligned with country regulations. Are you struggling to
              find the expertise you need for your go-live?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
