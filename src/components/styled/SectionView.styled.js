import styled from "styled-components";
import bgDay from "../../assests/bg-image-daytime.jpg";
import bgNigth from "../../assests/bg-image-nighttime.jpg";

export const StyledSectionView = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: ${(props) => (props.showMore ? "25%" : "0%")};
  transition: ease-out 0.2s;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url(${(props) => (props.nightBg ? bgNigth : bgDay)});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: min(5%, 5rem) clamp(3rem, 8%, 15rem);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
