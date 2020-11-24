import React from "react";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text} <span>{sign} Rs {Math.abs(transaction.amount)}</span>{" "}
        <button className="btn btn-danger">x</button>
      </li>
    </div>
  );
};
