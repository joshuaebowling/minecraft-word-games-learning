import React from "react";
import ImagePanel from "../../components/showNames/ImagePanel";
import NamePanelPlaceHolder from "../../components/showNames/NamePanelPlaceHolder";
import ShowNamesPageContainer from "./ShowNamesContainer";

const ShowNameAsk: React.FC = () => {
  console.log("start")
  return (
    <ShowNamesPageContainer>
      <div className="item">
        <ImagePanel />
      </div>
      <div className="item">
        <NamePanelPlaceHolder />
      </div>
    </ShowNamesPageContainer>
  );
};

export default ShowNameAsk;
