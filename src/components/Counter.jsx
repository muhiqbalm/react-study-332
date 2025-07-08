import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleCount = (input) => {
    setCounter(counter + input);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <p>You've clicked</p>

      <h1>{counter} Times</h1>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => {
            handleCount(1);
          }}
        >
          Add
        </button>

        <button
          onClick={() => {
            handleCount(-1);
          }}
        >
          Minus
        </button>

        <button
          onClick={() => {
            handleCount(99);
          }}
        >
          Add 99
        </button>
      </div>
    </div>
  );
}
