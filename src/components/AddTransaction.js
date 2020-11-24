import React, { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h4>Add New Transaction</h4>
      <form>
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
          </label><br/>
          <input
            type="number"
            value={amount}
            placeholder="Amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="btn btn-success">Add Transaction</button>
      </form>
    </div>
  );
};
