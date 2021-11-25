import SectionView from "./components/SectionView";
import SectionInfo from "./components/SectionInfo";
import useFetch from "./hooks/use-fetch";
import { useEffect, useContext, useCallback } from "react";
import AppContext from "./store/app-context";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function App() {
  const appCtx = useContext(AppContext);

  // FETCHING TIME DATA
  const {
    isLoading: timeIsLoading,
    error: timeHasError,
    getData: getTimeData,
  } = useFetch();

  const transformTimeData = useCallback(
    (data) => {
      const date = new Date(data.unixtime * 1000);

      appCtx.setTimeData({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        day: date.getDate(),
        month: date.toLocaleString("en-us", { month: "long" }),
        timezone: data.timezone,
        dayOfYear: data.day_of_year,
        dayOfWeek: data.day_of_week,
        weekNumber: data.week_number,
      });
    },
    [appCtx]
  );

  useEffect(() => {
    getTimeData("http://worldtimeapi.org/api/ip", transformTimeData);
  }, []);

  //FETCHING LOCATION DATA
  const {
    isLoading: locationIsLoading,
    error: locationError,
    getData: getLocationData,
  } = useFetch();

  const transformLocationData = (data) => {
    appCtx.setLocation({
      city: data.city,
      country: data.country,
    });
  };

  useEffect(() => {
    getLocationData("http://ip-api.com/json/", transformLocationData);
  }, []);

  return (
    <>
      {(timeIsLoading || locationIsLoading) && (
        <Loader type="Circles" color="#333" height={100} width={100} />
      )}
      {!timeIsLoading && !locationIsLoading && (
        <>
          <SectionView />
          <SectionInfo />
        </>
      )}
    </>
  );
}

export default App;
