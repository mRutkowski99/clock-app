import styled from "styled-components";

export const StyledSectionInfo = styled.div`
  background-color: ${(props) => (props.nightTheme ? "#222" : "#ddd")};
  padding: min(5%, 10rem) clamp(3rem, 8%, 15rem);

  position: absolute;
  left: 0;
  right: 0;
  top: 75%;
  display: ${(props) => (props.hidden ? "none" : "block")};

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .key {
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${(props) => (props.nightTheme ? "#eee" : "#333")};
  }

  .value {
    font-weight: 600;
    font-size: 2.3rem;
    color: ${(props) => (props.nightTheme ? "#eee" : "#222")};
  }

  @media screen and (min-width: 750px) {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      grid-auto-flow: column;
      justify-content: space-between;
      gap: 3rem;
    }

    li {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }

    .value {
      font-size: 4rem;
    }
  }
`;
