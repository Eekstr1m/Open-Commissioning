import Image from "next/image";
import s from "./SafetyContent.module.scss";
import redSing from "@/assets/redsign.png";
import yellowSing from "@/assets/yellowsign.png";
import blueSing from "@/assets/bluesing.png";
import greenSign from "@/assets/greensign.png";

export default function SafetyContent() {
  return (
    <section className={s.container}>
      <div className={s.title}>Prioritizing Safety in Commissioning</div>
      <div className={s.item}>
        <div>
          <Image src={redSing.src} alt="" width={150} height={150} />
        </div>
        <p>
          The use of prohibition signs during commissioning is essential to
          maintain a safe and controlled work environment. These signs
          communicate crucial instructions, such as &quot;No access for
          unauthorized personnel&quot; or &quot;Do not enter,&quot; emphasizing
          the importance of restricting certain areas or actions. By clearly
          indicating areas that are off-limits or actions that should be
          avoided, prohibition signs play a vital role in preventing accidents,
          ensuring compliance with safety protocols, and safeguarding both
          personnel and the project’s integrity.
        </p>
      </div>

      <div className={s.item}>
        <div>
          <Image src={yellowSing.src} alt="" width={150} height={150} />
        </div>
        <p>
          Warning signs play a pivotal role during commissioning by alerting
          personnel to potential hazards and risks. These signs convey essential
          messages like &quot;Caution: High Voltage&quot; or &quot;Danger:
          Confined Space,&quot; emphasizing the need for heightened awareness
          and precaution. By using warning signs effectively, project managers
          and workers can proactively identify and mitigate potential dangers,
          ensuring a safer commissioning process and reducing the risk of
          accidents or injuries.
        </p>
      </div>

      <div className={s.item}>
        <div>
          <Image src={blueSing.src} alt="" width={150} height={150} />
        </div>
        <p>
          Mandatory signs serve a critical purpose during commissioning by
          clearly outlining specific actions or behaviors that are required for
          safety and compliance. These signs, such as &quot;Wear Safety
          Glasses&quot; or &quot;Use Safety Harness,&quot; ensure that essential
          safety measures are followed without compromise. By using mandatory
          signs effectively, project teams establish a culture of
          responsibility, minimizing risks and contributing to a secure working
          environment essential for a successful commissioning process.
        </p>
      </div>

      <div className={s.item}>
        <div>
          <Image src={greenSign.src} alt="" width={150} height={150} />
        </div>
        <p>
          Emergency signs are indispensable during commissioning, providing
          critical guidance to personnel in the event of unforeseen situations.
          These signs include essential information about the location of exits,
          escape routes, emergency equipment like eyewash stations, and first
          aid kits. By prominently displaying emergency signs, project teams
          ensure that individuals can quickly and safely navigate the workspace
          during emergencies, mitigating potential risks and enhancing overall
          safety during the commissioning process.
        </p>
      </div>
    </section>
  );
}
