import React, { useState, useEffect } from "react";

function InfiniteCounter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000); // Increment every second
    }

    // Cleanup function - runs when component unmounts or effect re-runs
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]); // Only re-run when isRunning changes

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Infinite Counter Demo</h2>

      <div style={{ fontSize: "3em", margin: "20px", color: "#2563eb" }}>
        {count}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setIsRunning(!isRunning)}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            marginRight: "10px",
            backgroundColor: isRunning ? "#dc2626" : "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {isRunning ? "Stop" : "Start"} Counter
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#6b7280",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>

      <p style={{ color: "#6b7280", fontSize: "14px" }}>
        Status: {isRunning ? "Running" : "Stopped"}
      </p>
    </div>
  );
}

export default InfiniteCounter;
