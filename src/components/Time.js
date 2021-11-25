import { StyledTime } from "./styled/Time.styled";
import sunIcon from "../assests/icon-sun.svg";
import moonIcon from "../assests/icon-moon.svg";
import Button from "./Button";
import { useContext, useState, useEffect } from "react";
import AppContext from "../store/app-context";
import useFetch from "../hooks/use-fetch";

const Time = () => {
  const [location, setLocation] = useState({});

  const appCtx = useContext(AppContext);

  const hours = String(appCtx.timeData.hours).padStart(2, "0");
  const minutes = String(appCtx.timeData.minutes).padStart(2, "0");

  let timeOfDayIcon = null;
  if (appCtx.timeOfDay === "morning" || appCtx.timeOfDay === "afternoon")
    timeOfDayIcon = sunIcon;
  else timeOfDayIcon = moonIcon;

  const welcomeText = `Good ${appCtx.timeOfDay}`;

  //Fetching location data
  const { isLoading, error, getData } = useFetch();

  const transformLocationData = (data) => {
    setLocation({
      city: data.city,
      country: data.country,
    });
  };

  useEffect(() => {
    getData("http://ip-api.com/json/", transformLocationData);
  }, []);

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
        <h3>
          {appCtx.timeData.month} {appCtx.timeData.day}
        </h3>
        <h3>
          in {location.city}, {location.country}
        </h3>
      </div>
      <Button />
    </StyledTime>
  );
};

export default Time;
