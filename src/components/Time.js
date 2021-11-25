import { StyledTime } from "./styled/Time.styled";
import sunIcon from "../assests/icon-sun.svg";
import moonIcon from "../assests/icon-moon.svg";
import Button from "./Button";
import { useContext } from "react";
import AppContext from "../store/app-context";

const Time = () => {
  const appCtx = useContext(AppContext);
  const hours = String(appCtx.timeData.hours).padStart(2, "0");
  const minutes = String(appCtx.timeData.minutes).padStart(2, "0");

  let timeOfDayIcon = null;
  if (appCtx.timeOfDay === "morning" || appCtx.timeOfDay === "afternoon")
    timeOfDayIcon = sunIcon;
  else timeOfDayIcon = moonIcon;

  const welcomeText = `Good ${appCtx.timeOfDay}`;

  return (
    <StyledTime>
      <div>
        <div className="welcome">
          <img src={timeOfDayIcon} alt="Time of day icon" />
          <p>
            {welcomeText}
            <span>, it's currently</span>
          </p>
        </div>
        <h2>
          {hours}:{minutes}
        </h2>
        <h3>in London, UK</h3>
      </div>
      <Button />
    </StyledTime>
  );
};

export default Time;
