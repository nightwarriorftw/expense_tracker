import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const deleteStyle = {
  cursor: "Pointer",
  fontSize: "20px",
  position: "padding",
  transaction: "opacity 0.3 s ease",
  width: "45px",
  alignContent: "center",
  backgroundColor: "#e74c3c",
  border: "0",
  color: "#fff",
  height: "45px",
  top: "50px",
  left: "0",
}

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
        <button className="btn btn-danger" style = {deleteStyle} onClick={()=>deleteTransaction(transaction.id)}>x</button>
      </li>
    </div>
  );
};
