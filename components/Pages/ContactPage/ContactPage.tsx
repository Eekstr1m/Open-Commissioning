import Contact from "@/components/Contact/Contact";
import s from "./ContactPage.module.scss";
import HeadBackground from "@/components/HeadBackground/HeadBackground";
import bg from "@/assets/contactBG.jpg";

export default function ContactPage() {
  return (
    <div className={s.container}>
      <HeadBackground url={bg.src} title={"Contact Us"} />
      <Contact />
      <div className={s.content}>
        <p>
          We respect your privacy and will only use your personal data to
          administer your account and provide requested products/services. We
          may contact you about our products/services and other content of
          interest.
        </p>
        <p>
          Opt-out anytime. See our Privacy Policy for details on how to
          unsubscribe and how we protect your privacy. By submitting, you allow
          Plant supervision to process your info for requested content.
        </p>
        <p>
          By clicking submit below, you consent to allow Plant supervision to
          store and process the personal information submitted above to provide
          you the content requested.
        </p>
      </div>
    </div>
  );
}
