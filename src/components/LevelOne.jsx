function GreetingCard({ person }) {
  // TODO: Create a simple time check for different greetings
  const currentHour = new Date().getHours();

  return (
    <div
      className="card"
      style={{
        alignItems: "center",
        maxWidth: "300px",
      }}
    >
      {/* TODO: Show different emoji based on time */}
      <div style={{ fontSize: "48px", marginBottom: "15px" }}>
        {/* Show 🌅 for morning, ☀️ for afternoon, 🌙 for evening */}
        {currentHour >= 12
          ? "☀️"
          : currentHour >= 18 && currentHour < 4
          ? "🌙"
          : "🌅"}
      </div>
      {/* TODO: Personalized greeting */}
      <h2 style={{ margin: "0px 0px 8px 0px" }}>Hello, {person.name}!</h2>
      {/* TODO: Welcome message */}
      <p style={{ color: "#7D9CC9" }}>Welcome to React!</p>
      {/* TODO: Conditional hobby message */}
      {/* Only show if person.hobby exists */}{" "}
      {person.hobby ? (
        <p style={{ color: "#7D9CC9" }}>Hope you enjoy {person.hobby} today!</p>
      ) : null}
    </div>
  );
}

// Simple sample data
const samplePerson = {
  name: "Sarah",
  hobby: "painting", // Try with and without this!
};

export default function Level1Demo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Level 1: Simple Greeting Card</h2>

      <GreetingCard person={samplePerson} />
    </div>
  );
}
