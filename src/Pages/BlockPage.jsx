import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlchemyFunctions } from "../utils/functions";
import Transactions from "../Components/Transactions";

const BlockPage = () => {
  const { blockNumber } = useParams();
  const [block, setBlock] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlock = async () => {
      try {
        setBlock(await AlchemyFunctions.getBlock(Number(blockNumber)));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlock();
  }, [blockNumber]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!block) return <div>No Block Data Found.</div>;

  const {
    hash,
    parentHash,
    number,
    timestamp,
    // gasUsed,
    // gasLimit,
    nonce,
    transactions,
  } = block;
  return (
    <div id="blockPage">
      <h1>Block {blockNumber}</h1>
      <h2>Block Details</h2>
      <div className="block-details">
        <p>
          <span>Hash:</span> {hash}
        </p>
        <p>
          <span>Parent Hash:</span> {parentHash}
        </p>
        <p>
          <span>Number:</span> {number}
        </p>
        <p>
          <span>Timestamp:</span> {timestamp}
        </p>
        <p>
          <span>Nonce:</span> {nonce}
        </p>
        <p>Total Transactions: {transactions.length}</p>
        <Transactions transactions={transactions} />
      </div>
    </div>
  );
};

export default BlockPage;
