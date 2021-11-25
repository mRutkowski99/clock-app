import AppContext from "./app-context";
import { useState, useEffect } from "react";

const AppContextProvider = (props) => {
  const [showMore, setShowMore] = useState(false);
  const [timeData, setTimeData] = useState({});
  const [timeOfDay, setTimeOfDay] = useState("");

  const toggleMoreHandler = () => {
    setShowMore((prev) => !prev);
  };

  const setTimeDataHandler = (data) => {
    setTimeData({
      hours: data.hours,
      minutes: data.minutes,
      seconds: data.seconds,
      timezone: data.timezone,
      dayOfYear: data.dayOfYear,
      dayOfWeek: data.dayOfWeek,
      weekNumber: data.weekNumber,
    });
  };

  useEffect(() => {
    //Interval which trigger time update every second
    const interval = setInterval(
      () =>
        setTimeData((prev) => {
          return {
            ...prev,
            seconds: prev.seconds === 59 ? 0 : prev.seconds + 1,
            minutes: prev.seconds === 59 ? prev.minutes + 1 : prev.minutes,
          };
        }),
      1000
    );

    const { hours, minutes } = timeData;

    if (minutes === 60) {
      setTimeData((prev) => {
        return {
          ...prev,
          hours: prev.hours++,
          minutes: 0,
        };
      });
    }

    if (hours === 24) {
      setTimeData((prev) => {
        return {
          ...prev,
          hours: 0,
        };
      });
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeData]);

  //Check time of day (morning, afternoon, evening)
  useEffect(() => {
    const hours = timeData.hours;

    if (hours >= 6 && hours < 12) setTimeOfDay("morning");
    if (hours >= 12 && hours < 18) setTimeOfDay("afternoon");
    if (hours >= 18 || hours < 6) setTimeOfDay("evening");
  }, [timeData.hours]);

  console.log(timeData.hours, timeData.minutes, timeData.seconds, timeOfDay);

  return (
    <AppContext.Provider
      value={{
        more: showMore,
        toggleShowMore: toggleMoreHandler,
        timeData: timeData,
        setTimeData: setTimeDataHandler,
        timeOfDay: timeOfDay,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
