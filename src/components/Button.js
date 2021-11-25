import arrowUp from "../assests/icon-arrow-up.svg";
import { StyledButton } from "./styled/Button.styled";
import { useContext } from "react";
import AppContext from "../store/app-context";

const Button = () => {
  const appCtx = useContext(AppContext);

  const btnClickHandler = () => {
    appCtx.toggleShowMore();
  };

  const btnText = appCtx.more ? "Less" : "More";

  return (
    <StyledButton onClick={btnClickHandler} showMore={appCtx.more}>
      {btnText}
      <span className="button__arrow">
        <img src={arrowUp} />
      </span>
    </StyledButton>
  );
};

export default Button;
