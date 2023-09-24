import Image from "next/image";
import s from "./../PagesBody.module.scss";
import photo1 from "@/assets/VacationReplacement1.jpg";
import photo2 from "@/assets/VacationReplacement2.jpg";

export default function VacationReplacementBody() {
  return (
    <section>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.content_wrapper}>
            <p className={s.title}>
              Mitigate the impact of the summer holidays on your projects
            </p>
            <p>
              We understand that projects need to keep moving forward, even in
              the midst of the holiday season. That’s why we stress the
              importance of proactive planning to ensure you have a reliable
              workforce in place to avoid delays and maintain project momentum.
            </p>
            <p>
              At Open Commissioning, we bring years of experience to the table,
              and we’ve seen many companies underestimate the impact of the
              summer holidays on their project schedules. Even with careful
              attention to holiday schedules, finding experienced supervisors
              and commissioning engineers with the necessary skills to fill
              interim roles can be a formidable challenge.
            </p>
            <p>
              We have a large pool of experienced supervisors and engineers
              ready to seamlessly step in as temporary replacements during the
              summer holiday season.
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
              Our candidates are seasoned globetrotters, equipped with the
              precise skills required to ensure a smooth transition. Proudly
              wearing your company’s high visibility vest, they blend in
              seamlessly with your existing workforce, providing comprehensive
              and real-time reporting. This ensures that your returning staff
              can seamlessly pick up where the project left off.
            </p>
            <p>
              By choosing our temporary staffing services, you can say goodbye
              to the spectre of holiday-related project delays and stay on
              course with your current and future projects. Our experienced back
              office team, well versed in global compliance, meticulously
              manages the intricacies of visas, wages, work permits and all
              other administrative requirements.
            </p>
            <p>
              We pride ourselves on our ability to deliver fast solutions. After
              an initial consultation, we can have the right candidate on site
              immediately, often within days depending on location.
            </p>
            <p>
              Don’t let the disruption of the summer holidays derail your
              projects. Trust Open Commissioning to provide the skilled
              temporary workforce you need to maintain uninterrupted project
              continuity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
