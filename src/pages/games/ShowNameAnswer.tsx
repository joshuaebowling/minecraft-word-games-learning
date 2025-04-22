import React from "react";
import ImagePanel from "../../components/showNames/ImagePanel";
import ShowNamesPageContainer from "./ShowNamesContainer";
import NamePanel from "../../components/showNames/NamePanel";

const ShowNameAnswer: React.FC = () => {
  console.log("start")
  return (
    <ShowNamesPageContainer>
      <div className="item">
        <ImagePanel />
      </div>
      <div className="item">
        <NamePanel />
      </div>
    </ShowNamesPageContainer>
  );
};

export default ShowNameAnswer;
