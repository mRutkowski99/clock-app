import styled from "styled-components";

export const StyledQuote = styled.div`
  color: #fff;

  display: grid;
  grid-template-columns: minmax(auto, 50ch) min-content;
  grid-template-rows: min-content min-content;
  gap: 1rem;

  opacity: ${(props) => (props.showMore ? "0" : "1")};
  transition: ease-out 0.2s;

  .quote {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    font-size: clamp(1.6rem, 3vw, 2rem);
  }

  .author {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    font-weight: 600;
    font-size: clamp(1.6rem, 3vw, 2rem);
  }

  img {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: start;
  }
`;
