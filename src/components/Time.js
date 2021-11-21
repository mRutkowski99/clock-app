import { StyledTime } from "./styled/Time.styled";
import sunIcon from "../assests/icon-sun.svg";

const Time = () => {
  return (
    <StyledTime>
      <div className="welcome">
        <img src={sunIcon} alt="Time of day icon" />
        <p>Good morning, it's currently</p>
      </div>
      <h2>11:37</h2>
      <h3>in London, UK</h3>
    </StyledTime>
  );
};

export default Time;
