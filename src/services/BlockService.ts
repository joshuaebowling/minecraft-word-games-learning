import { blocks } from "../data/blocks";
import { IBlockInfo } from "../interfaces/IBlockInfo";
export const BlockService = {
  get: (blockNumber: number): IBlockInfo => {
    return blocks[blockNumber];
  },
};
