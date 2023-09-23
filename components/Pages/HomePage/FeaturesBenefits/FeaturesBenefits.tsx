import styled from "styled-components";
import s from "./FeaturesBenefits.module.scss";

export default function FeaturesBenefits() {
  return (
    <Container>
      <span className={s.separator}>Features & Benefits</span>
      <div className={s.content}>
        <div className={s.content_item}>
          <div className={s.title}>Features</div>
          <div className={s.item}>
            <Icon className="fa-solid fa-check"></Icon>Tech Solutions
          </div>
          <div className={s.item}>
            <Icon className="fa-solid fa-check"></Icon>Workforce Analytics
          </div>
          <div className={s.item}>
            <Icon className="fa-solid fa-check"></Icon>Talent Management
          </div>
          <div className={s.item}>
            <Icon className="fa-solid fa-check"></Icon>Customizable Solutions
          </div>
          <div className={s.item}>
            <Icon className="fa-solid fa-check"></Icon>Affordable Pricing
          </div>
        </div>
        <div className={s.content_item}>
          <div className={s.title}>Benefits</div>
          <div className={s.item}>
            <Icon className="fa-solid fa-check"></Icon>Streamlined Processes
          </div>
          <div className={s.item}>
            <Icon className="fa-solid fa-check"></Icon>Increased Productivity
          </div>
          <div className={s.item}>
            <Icon className="fa-solid fa-check"></Icon>Reduced Costs
          </div>
          <div className={s.item}>
            <Icon className="fa-solid fa-check"></Icon>Improved Employee
            Satisfaction
          </div>
          <div className={s.item}>
            <Icon className="fa-solid fa-check"></Icon>Innovative Solutions
          </div>
        </div>
      </div>
    </Container>
  );
}

const Icon = styled.i`
  color: ${({ theme }) => theme.primary};
`;

const Container = styled.section`
  background-color: ${({ theme }) => theme.bg_primary};
  width: 100vw;
  margin-left: calc(-50vw + 50%);

  padding-bottom: 50px;
`;
