import React from "react";

const AppContext = React.createContext({
  more: false,
  toggleShowMore: () => {},
  timeData: {},
  setTimeData: () => {},
  timeOfDay: "",
});

export default AppContext;
