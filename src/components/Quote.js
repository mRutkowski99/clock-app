import refreshImg from "../assests/icon-refresh.svg";
import { StyledQuote } from "./styled/Quote.styled";

const Quote = (props) => {
  return (
    <StyledQuote showMore={props.showMore}>
      <p className="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in metus
        ex. Phasellus pulvinar, nisi et blandit scelerisque, purus nisi
        porttitor justo, sit amet interdum odio lorem ut odio..
      </p>
      <p className="author">WIBF IFsdos</p>
      <img src={refreshImg} alt="Refresh icon" />
    </StyledQuote>
  );
};

export default Quote;
