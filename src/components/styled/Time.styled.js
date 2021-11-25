import styled from "styled-components";

export const StyledTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 3rem;

  & > div:first-child {
    display: flex;
    flex-direction: column;
  }

  color: #fff;

  .welcome {
    font-size: 2rem;
    display: flex;
    gap: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  span {
    display: none;
  }

  img {
    align-self: center;
  }

  h2 {
    font-size: clamp(10rem, 20vw, 15rem);
    font-weight: 700;
  }

  h3 {
    font-size: 2rem;
    font-weigth: 600;
    text-transform: uppercase;
  }
`;
