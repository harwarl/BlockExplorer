import React from "react";
import SingleTransaction from "./SingleTransaction";

const Transactions = ({ transactions }) => {
  return (
    <div>
      {transactions.map((transaction, index) => {
        return <SingleTransaction key={index} transaction={transaction} />;
      })}
    </div>
  );
};

export default Transactions;
