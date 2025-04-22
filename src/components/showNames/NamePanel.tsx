import React, { useContext, useState, useEffect } from "react";
import { BlockInfoContext } from "../../contexts/CurrentBlockInfo";
import NameLetter from "./NameLetter";
const NamePanel: React.FC = () => {
  const block = useContext(BlockInfoContext);
  const [letters, setLetters] = useState<string[]>([])
  useEffect(() => {
    if(!block) return
    setLetters(block[0].split(""))
  }, [block])
  if (!block) return <></>;
  return <div className="">{letters.map(x => <NameLetter letter={x} show={false} />)}</div>;
};

export default NamePanel;
