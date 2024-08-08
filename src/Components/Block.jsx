import React from "react";
import { Link } from "react-router-dom";

const Block = ({ block }) => {
  return (
    <div style={{ border: "2px solid grey", padding: "10px 0" }}>
      <Link to={`blocks/${block.block}`}>{block.block}</Link>
    </div>
  );
};

export default Block;
