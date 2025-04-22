import React, { useContext } from "react";
import ImagePanel from "../../components/showNames/ImagePanel";
import NamePanel from "../../components/showNames/NamePanel";
import { ShowNameAskArgs } from "../../types/ShowNamesTypes";
import { BlockInfoContext } from "../../contexts/CurrentBlockInfo";
import { Outlet } from "react-router-dom";
const ShowNames: React.FC = () => {
  const block = useContext(BlockInfoContext);
  if (!block) return <></>;
  return (
    <>
      <div className="shownames__container">
        <Outlet />
      </div>
    </>
  );
};

export default ShowNames;
