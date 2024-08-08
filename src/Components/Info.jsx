import React from "react";

const Info = ({ blockInfo }) => {
  return (
    <div>
      <div>
        <h2>Latest Block Transactions: {blockInfo.transactions.length}</h2>
      </div>
      <div>
        <h2>Last Finalized Block: {blockInfo.number}</h2>
      </div>
    </div>
  );
};

export default Info;
