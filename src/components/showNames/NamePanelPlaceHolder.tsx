import React, { useContext } from "react";
import { BlockInfoContext } from "../../contexts/CurrentBlockInfo";
import { useParams, Link } from "react-router-dom";
const NamePanelPlaceHolder: React.FC = () => {
  const currentBlock = useContext(BlockInfoContext)  
  const {current} = useParams()
  const nextLink = () => `/ShowNames/${current}/show`
  console.log(currentBlock)
  return (
    <>
      <h1><Link to={nextLink()}>?</Link></h1>
    </>
  );
};

export default NamePanelPlaceHolder;
