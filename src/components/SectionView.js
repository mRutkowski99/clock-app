import { useContext } from "react";
import AppContext from "../store/app-context";
import { StyledSectionView } from "./styled/SectionView.styled";
import Time from "./Time";
import Quote from "./Quote";

const SectionView = () => {
  const appCtx = useContext(AppContext);

  const nightBg = appCtx.timeOfDay === "evening";

  return (
    <StyledSectionView showMore={appCtx.more} nightBg={nightBg}>
      <Quote showMore={appCtx.more} />
      <Time />
    </StyledSectionView>
  );
};

export default SectionView;
