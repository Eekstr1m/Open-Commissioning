import Image from "next/image";
import s from "./SafetyContent.module.scss";
import redSing from "@/assets/redsign.png";
import yellowSing from "@/assets/yellowsign.png";
import blueSing from "@/assets/bluesing.png";
import greenSign from "@/assets/greensign.png";

export default function SafetyContent() {
  return (
    <section className={s.container}>
      <div className={s.title}>Interpreting Safety Symbols</div>
      <div className={s.item}>
        <div>
          <Image src={redSing.src} alt="" width={150} height={150} />
        </div>
        <p>
          The red prohibition signs signify dangerous behaviors or actions that
          should be strictly avoided. These signs typically feature a round
          shape with a black pictogram on a white background, often accompanied
          by red edging and a red diagonal line, conveying messages such as
          &quot;Stop,&quot; &quot;Shutdown,&quot; &quot;Do not touch,&quot;
          &quot;No access for unauthorized persons,&quot; and &quot;Do not
          enter.&quot;
        </p>
      </div>

      <div className={s.item}>
        <div>
          <Image src={yellowSing.src} alt="" width={150} height={150} />
        </div>
        <p>
          The yellow warning signs serve as cautionary alerts, signaling
          potential hazards and the need for vigilance. These triangular signs
          display black pictograms on a yellow background with black edging,
          conveying messages like &quot;Be careful,&quot; &quot;Take
          precautions,&quot; &quot;Hazard nearby,&quot; &quot;Electric
          shock,&quot; &quot;Magnetic field,&quot; &quot;Biological
          hazard,&quot; and &quot;General warning.&quot;
        </p>
      </div>

      <div className={s.item}>
        <div>
          <Image src={blueSing.src} alt="" width={150} height={150} />
        </div>
        <p>
          The blue mandatory signs are characterized by their circular shape and
          a white pictogram displayed on a blue background. These signs are used
          to specify required behaviors or actions that individuals must adhere
          to, such as wearing safety glasses, washing hands, or using safety
          harnesses. They serve as visual reminders to ensure compliance with
          these safety measures, promoting a secure and responsible environment
          in various settings.
        </p>
      </div>

      <div className={s.item}>
        <div>
          <Image src={greenSign.src} alt="" width={150} height={150} />
        </div>
        <p>
          The green emergency signs are characterized by their rectangular or
          square shape and feature a white pictogram against a green background.
          These signs convey critical information related to doors, exits,
          escape routes, and essential emergency equipment and facilities such
          as eyewash stations and first aid kits. They serve as vital visual
          cues to guide individuals to safety during emergencies and ensure they
          have access to essential resources when needed.
        </p>
      </div>
    </section>
  );
}
