// Level 2: Add useState for simple interactivity
import React, { useState } from "react";

function InteractiveGreetingCard({ person }) {
  // TODO: Add state for the current message
  const [messageIndex, setMessageIndex] = useState(0);

  // TODO: Add state for click count
  const [clickCount, setClickCount] = useState(0);

  // Different messages to cycle through
  const messages = [
    "Welcome to React!",
    "You're doing great!",
    "Keep learning!",
    "React is awesome!",
    "You're a star! ⭐",
  ];

  // TODO: Create click handler function
  const handleButtonClick = () => {
    // Update click count
    // Move to next message (cycle back to start if at end)

    setMessageIndex((messageIndex + 1) % messages.length);
    setClickCount(clickCount + 1);
  };

  // Get current hour for time-based emoji
  const currentHour = new Date().getHours();
  const getTimeEmoji = () => {
    if (currentHour < 12) return "🌅";
    if (currentHour < 18) return "☀️";
    return "🌙";
  };

  return (
    <div
      className="card"
      style={{
        padding: "20px",
        minWidth: "300px",
        textAlign: "center",
      }}
    >
      {/* Time-based emoji */}
      <div style={{ fontSize: "48px", marginBottom: "15px" }}>
        {getTimeEmoji()}
      </div>

      {/* Personalized greeting */}
      <h2 style={{ margin: "10px 0", color: "white" }}>
        Hello, {person.name}!
      </h2>

      {/* Dynamic message based on state */}
      <p style={{ color: "#666", margin: "15px 0" }}>
        {messages[messageIndex]}
      </p>

      {/* Conditional hobby message */}
      {person.hobby && (
        <p style={{ color: "#0066cc", fontStyle: "italic" }}>
          I love {person.hobby}! 🎨
        </p>
      )}

      {/* TODO: Add interactive button */}
      <button
        onClick={handleButtonClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "15px",
        }}
      >
        {/* TODO: Change button text based on clicks */}
        Change Message
      </button>

      {/* TODO: Show click count */}
      <p style={{ fontSize: "12px", color: "#888", marginTop: "10px" }}>
        Clicked {clickCount} times
      </p>
    </div>
  );
}

// Same simple data as Level 1
const samplePerson = {
  name: "Sarah",
  hobby: "painting",
};

export default function Level2Demo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <h2>Level 2: Interactive Greeting Card</h2>
      <InteractiveGreetingCard person={samplePerson} />
    </div>
  );
}
