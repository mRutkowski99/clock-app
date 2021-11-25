import { useContext } from "react";
import AppContext from "../store/app-context";

const InfoList = () => {
  const appCtx = useContext(AppContext);
  const { timezone, dayOfYear, dayOfWeek, weekNumber } = appCtx.timeData;

  return (
    <ul>
      <li>
        <p className="key">Current Timezone</p>
        <p className="value">{timezone}</p>
      </li>
      <li>
        <p className="key">Day of the year</p>
        <p className="value">{dayOfYear}</p>
      </li>
      <li>
        <p className="key">Day of the week</p>
        <p className="value">{dayOfWeek}</p>
      </li>
      <li>
        <p className="key">Week number</p>
        <p className="value">{weekNumber}</p>
      </li>
    </ul>
  );
};

export default InfoList;
