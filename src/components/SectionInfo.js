import { StyledSectionInfo } from "./styled/SectionInfo.styled";
import InfoList from "./InfoList";
import { useContext, useEffect, useState } from "react";
import AppContext from "../store/app-context";

const SectionInfo = () => {
  const appCtx = useContext(AppContext);
  const nightTheme = appCtx.timeOfDay === "evening";

  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (appCtx.more) {
      const timeout = setTimeout(() => {
        setIsHidden(!appCtx.more);
      }, 200);

      return () => {
        window.clearInterval(timeout);
      };
    } else {
      setIsHidden(!appCtx.more);
    }
  }, [appCtx.more]);

  return (
    <StyledSectionInfo hidden={isHidden} nightTheme={nightTheme}>
      <InfoList />
    </StyledSectionInfo>
  );
};

export default SectionInfo;
