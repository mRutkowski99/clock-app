import styled from "styled-components";

export const StyledTime = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  justify-self: start;
  align-self: end;

  display: flex;
  flex-direction: column;
  color: #fff;

  .welcome {
    display: flex;
    gap: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  img {
    align-self: center;
  }

  h2 {
    font-size: 15rem;
    font-weight: 700;
  }

  h3 {
    font-weigth: 600;
    text-transform: uppercase;
  }
`;
