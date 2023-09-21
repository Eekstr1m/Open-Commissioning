import Button from "@/components/CustomButton/Button";
import s from "./CaseStudies.module.scss";
import styled from "styled-components";

export default function CaseStudies() {
  return (
    <section className={s.case_wrapper}>
      <div className={s.client_block}>
        <div className={s.title}>Client Testimonials</div>
        <NameDiv>John Simpson</NameDiv>
        <div className={s.text}>
          Open Commissioning’s HR solutions transformed our business,
          streamlining our workforce and maximizing our talent. They truly
          understand the industry and deliver top-notch results.
        </div>
      </div>
      <div className={s.more_block}>
        <div className={s.more_text}>
          Read about how we support our clients projects
        </div>
        <Button>Case Studies</Button>
      </div>
    </section>
  );
}

const NameDiv = styled.div`
  color: ${({ theme }) => theme.darken_primary};
`;
