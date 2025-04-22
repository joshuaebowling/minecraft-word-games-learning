import React, { useContext } from "react";
import { BlockInfoContext } from "../../contexts/CurrentBlockInfo";
const ImagePanel: React.FC = () => {
  const block = useContext(BlockInfoContext);
  if (!block) return <></>;
  console.log("source=", block[0]);
  return (
    <>
      <div className="">
        <img width={100} height={100} src={`images/${block[1]}.png`} />
      </div>
    </>
  );
};

export default ImagePanel;
