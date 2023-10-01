import Image from "next/image";
import s from "../PagesBody.module.scss";
import photo1 from "@/assets/siteManagement1.jpg";
import photo2 from "@/assets/siteManagement2.jpg";

export default function SiteManagementBody() {
  return (
    <div>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.content_wrapper}>
            <p className={s.title}>Global site management expertise</p>
            <p>
              Today’s project leadership requires a unique blend of managerial
              skills, analytical acumen and planning excellence. In addition,
              the digital landscape has expanded the role of project leaders,
              making proficiency with ERP and CMMS software essential.
            </p>
            <p>
              This distinctive skill set can make finding the perfect project
              manager a daunting task. If your project spans international
              borders, the pool of qualified candidates shrinks even further,
              increasing the need for global compliance.
            </p>
            <p>
              - Resource Optimization - Budget control and project efficiency -
              Health, safety and environmental compliance - Quality assurance
              and control - Streamlined document management
            </p>
            <p>
              Once on site, our Site Managers integrate seamlessly into your
              project, becoming the liaison between on-site personnel and
              off-site stakeholders. They act as staunch advocates for your
              organization, working diligently to ensure your project stays on
              track and within budget.
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
              At Open Commissioning, we provide you with a team of experienced
              and globally experienced Site Managers with a wealth of
              industry-specific knowledge ready to support your project. Our
              Site Managers are multi-skilled professionals with electrical and
              mechanical expertise. They excel in critical areas such as project
              planning, resource optimization, risk mitigation and quality
              assurance.
            </p>
            <p>
              What sets our Site Managers apart is their unique ability to
              combine a commercial perspective with technical acumen. This
              enables them to communicate effectively across different
              hierarchies, bridging the gap between supervisors, project
              managers, subcontractors and your end client.
            </p>
            <p>
              We understand that every project is unique, with its own set of
              challenges and potential disruptions. That’s why our Site Managers
              are prepared to commit to extended on-site stays, reducing the
              need for frequent transitions between team members and minimizing
              the likelihood of errors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
