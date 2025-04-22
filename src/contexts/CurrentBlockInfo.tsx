import React from "react";
import { IBlockInfo } from "../interfaces/IBlockInfo";
export const defaultBlockInfo: IBlockInfo = ["", ""];

export const BlockInfoContext = React.createContext<IBlockInfo | null>(
  defaultBlockInfo
);
