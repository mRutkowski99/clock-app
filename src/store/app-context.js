import React from "react";

const AppContext = React.createContext({
  more: false,
  toggleShowMore: () => {},
  timeData: {},
  setTimeData: () => {},
  timeOfDay: "",
  location: {},
  setLocation: () => {},
});

export default AppContext;
