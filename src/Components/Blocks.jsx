import React from "react";
import Block from "./Block";
import { listBlocks } from "../utils/functions";

const Blocks = ({ blockNumber }) => {
  const blocks = listBlocks(blockNumber) || [];
  return (
    <div>
      <h2>Latest Blocks</h2>
      <div className="block">
        {blocks.map((block, index) => {
          return <Block key={index} block={block} />;
        })}
      </div>
    </div>
  );
};

export default Blocks;
