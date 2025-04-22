import React, { useState, useEffect } from "react";
import { BlockService } from "../../services/BlockService";
import { ShowNameAskArgs } from "../../types/ShowNamesTypes";
import { BlockInfoContext } from "../../contexts/CurrentBlockInfo";
import { IBlockInfo } from "../../interfaces/IBlockInfo";
const PanelLoader: React.FC<number> = (current) => {
  const [currentBlockInfo, setCurrentBlockInfo] = useState<IBlockInfo | null>(
    null
  );
  useEffect(() => {
    const currentBlockInfo = BlockService.get(current);
    setCurrentBlockInfo(currentBlockInfo);
  }, [current]);
  return (
    <BlockInfoContext.Provider
      value={currentBlockInfo}
    ></BlockInfoContext.Provider>
  );
};

export default PanelLoader;
