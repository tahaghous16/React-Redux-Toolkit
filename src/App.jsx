import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./redux/features/counter/counterSlice";

const App = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncre = () => {
    dispatch(increment());
  };

  const handleDecre = () => {
    dispatch(decrement());
  };

  const handleIncreAmount = () => {
    dispatch(incrementByAmount(amount));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="count-display">Count: {count}</div>

      <div className="buttons">
        <button onClick={handleIncre}>+</button>
        <button onClick={handleDecre}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="input-section">
        <input
          type="number"
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleIncreAmount}>Add Amount</button>
      </div>
    </div>
  );
};

export default App;
