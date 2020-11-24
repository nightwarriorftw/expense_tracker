import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);

  }

  return (
    <div>
      <h4>Add New Transaction</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            placeholder="Enter Text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="text">
            Amount <br /> (-ve expense, +ve income)
          </label>
          <br />
          <input
            type="number"
            value={amount}
            placeholder="Amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};
