import styled from "styled-components";
import bgDay from "../../assests/bg-image-daytime.jpg";

export const StyledSectionView = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-image: url(${bgDay});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 5rem 15rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
