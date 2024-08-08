import { alchemy } from "./helpers";

export const checkInput = (formInput) => {
  const lenInput = formInput.length;
  if (lenInput <= 8 && lenInput > 0 && typeof lenInput == "number") {
    return "block";
  } else if (lenInput === 66) {
    return "txnHash";
  } else if (lenInput === 42) {
    return "address";
  } else {
    return null;
  }
};

export const AlchemyFunctions = {
  async getBlockNumber() {
    return await alchemy.core.getBlockNumber();
  },

  async getBlock(blockNumber) {
    return await alchemy.core.getBlock(blockNumber);
  },

  async getTransaction(txnHash) {
    return await alchemy.core.getTransaction(txnHash);
  },

  async getBalance(address) {
    return await alchemy.core.getBalance(address);
  },
};

export const listBlocks = (latestBlock) => {
  if (latestBlock !== undefined) {
    let blocks = [];
    for (let i = 0; i < 20; i++) {
      blocks.push({
        block: latestBlock - i,
      });
    }
    return blocks;
  } else {
    return [];
  }
};
