import SectionView from "./components/SectionView";
import SectionInfo from "./components/SectionInfo";
import useFetch from "./hooks/use-fetch";
import { useEffect, useContext, useCallback } from "react";
import AppContext from "./store/app-context";

function App() {
  const appCtx = useContext(AppContext);

  const {
    isLoading: timeIsLoading,
    hasError: timeHasError,
    getData: getTimeData,
  } = useFetch();

  const transformTimeData = useCallback((data) => {
    const date = new Date(data.unixtime * 1000);

    appCtx.setTimeData({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      timezone: data.timezone,
      dayOfYear: data.day_of_year,
      dayOfWeek: data.day_of_week,
      weekNumber: data.week_number,
    });
  }, []);

  useEffect(() => {
    getTimeData("http://worldtimeapi.org/api/ip", transformTimeData);
  }, []);

  return (
    <>
      <SectionView />
      <SectionInfo />
    </>
  );
}

export default App;
