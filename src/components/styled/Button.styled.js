import styled from "styled-components";

export const StyledButton = styled.a`
  border: none;
  outline: none;
  border-radius: 100rem;
  padding: 0.5rem 1rem;
  width: 12rem;
  cursor: pointer;
  transition: all 0.2s;

  background-color: #fff;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }

  .button__arrow {
    width: 3rem;
    aspect-ratio: 1;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${(props) => (props.showMore ? "rotate(0)" : "rotate(180deg)")};
    transition: ease-out 0.5s;
  }

  img {
    display: block;
  }
`;
