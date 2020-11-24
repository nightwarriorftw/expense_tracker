import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign} Rs {Math.abs(transaction.amount)}
        </span>{" "}
        <button className="btn btn-danger" onClick={()=>deleteTransaction(transaction.id)}>x</button>
      </li>
    </div>
  );
};
