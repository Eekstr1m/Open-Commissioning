import ContactForm from "./ContactForm/ContactForm";
import s from "./Contact.module.scss";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactSection>
      <div>
        <div className={s.title}>Have Questions?</div>
        <div className={s.info}>
          <div>
            <p className={s.info_title}>Call Us:</p>
            <InfoDesc>+1234567890</InfoDesc>
          </div>
          <div>
            <p className={s.info_title}>Send Us Mail:</p>
            <InfoDesc>info@example.com</InfoDesc>
          </div>
        </div>
      </div>
      <ContactForm />
    </ContactSection>
  );
}

const ContactSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 50px 0;
  gap: 30px;
  place-items: center;

  max-width: var(--max-width);
  margin: 0 auto;
`;

const InfoDesc = styled.p`
  color: ${({ theme }) => theme.primary};
`;
