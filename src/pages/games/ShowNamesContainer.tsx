import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { BlockService } from "../../services/BlockService";
import { ShowNameAskArgs } from "../../types/ShowNamesTypes";
import { BlockInfoContext } from "../../contexts/CurrentBlockInfo";
import { IBlockInfo } from "../../interfaces/IBlockInfo";
import Navigator from "../../components/showNames/Navigator";

interface ShowNamesContainerProps {
  children: ReactNode;
}

const ShowNamesPageContainer: React.FC<ShowNamesContainerProps> = ({
  children,
}: PropsWithChildren<ShowNamesContainerProps>) => {
  const { current } = useParams();
  const [currentBlockInfo, setCurrentBlockInfo] = useState<IBlockInfo | null>(
    null
  );
  useEffect(() => {
    //@ts-ignore
    const currentNum = parseInt(current)
    if (currentNum < 0) return;
    const currentBlockInfo = BlockService.get(currentNum);
    console.log("currentBlock", currentBlockInfo)
    setCurrentBlockInfo(currentBlockInfo);
  }, [current]);

  return (
    <>
      <BlockInfoContext.Provider value={currentBlockInfo}>
        {children}
        <Navigator />
      </BlockInfoContext.Provider>
    </>
  );
};

export default ShowNamesPageContainer;
