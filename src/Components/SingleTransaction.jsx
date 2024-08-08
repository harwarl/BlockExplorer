import React from "react";
import { Link } from "react-router-dom";

const SingleTransaction = ({ transaction }) => {
  console.log({ transaction });
  return (
    <div>
      TxnHash:
      <Link to={`/transaction/${transaction}`}> {transaction} </Link>
    </div>
  );
};

export default SingleTransaction;
