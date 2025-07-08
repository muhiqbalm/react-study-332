import { useState } from "react";

export default function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    age: 1,
    favoriteColor: "#000000",
    isStudent: false,
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tell me about yourself!</h2>

      <div>
        <label>Name: </label>
        <input
          type="text"
          value={personalInfo.name}
          onChange={(e) =>
            setPersonalInfo((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>

      <div>
        <label>Age: </label>
        <input
          type="number"
          value={personalInfo.age}
          onChange={(e) => {
            if (e.target.value > 0) {
              setPersonalInfo((prev) => ({ ...prev, age: e.target.value }));
            }
          }}
        />
      </div>

      <div>
        <label>Favorite Color: </label>
        <input
          type="color"
          value={personalInfo.favoriteColor}
          onChange={(e) =>
            setPersonalInfo((prev) => ({
              ...prev,
              favoriteColor: e.target.value,
            }))
          }
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={personalInfo.isStudent}
            onChange={(e) =>
              setPersonalInfo((prev) => ({
                ...prev,
                isStudent: e.target.checked,
              }))
            }
          />
          I am a student
        </label>
      </div>

      {/* Show summary */}
      {personalInfo.name && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: personalInfo.favoriteColor || "#f0f0f0",
          }}
        >
          <h3>Nice to meet you!</h3>
          <p>Name: {personalInfo.name}</p>
          <p>Age: {personalInfo.age || "Not specified"}</p>
          <p>Status: {personalInfo.isStudent ? "Student" : "Not a student"}</p>
        </div>
      )}
    </div>
  );
}
