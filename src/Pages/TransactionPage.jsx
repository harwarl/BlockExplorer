import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AlchemyFunctions } from "../utils/functions";

const TransactionPage = () => {
  const { txnHash } = useParams();
  const [txn, setTxn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        setTxn(await AlchemyFunctions.getTransaction(txnHash));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransaction();
  }, [txnHash]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!txn) return <div>No Block Data Found.</div>;

  const {
    hash,
    type,
    blockHash,
    blockNumber,
    transactionIndex,
    from,
    nonce,
    v,
  } = txn;
  return (
    <div className="transaction-page">
      <h1>Transaction {txnHash}</h1>
      <h2>Transaction Details</h2>
      <div className="transaction-details">
        <p>
          <span>Hash:</span> {hash}
        </p>
        <p>
          <span>Type:</span> {type}
        </p>
        <p>
          <span>Block Hash:</span> {blockHash}
        </p>
        <p>
          <span>Block Number:</span> {blockNumber}
        </p>
        <p>
          <span>Transaction Index:</span> {transactionIndex}
        </p>
        <p>
          <span>From:</span> {from}
        </p>
        <p>
          <span>Nonce:</span> {nonce}
        </p>
        <p>
          <span>V:</span> {v}
        </p>
        <p>
          <Link to={`/address/${from}`}>View Sender Address</Link>
        </p>
      </div>
    </div>
  );
};

export default TransactionPage;
