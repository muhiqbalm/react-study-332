function InfoCard({ title, description, skillLevel }) {
  // TODO: Create a card that displays:
  // - Title as a heading
  // - Description as a paragraph
  // - Skill level with appropriate color
  //   (Beginner = blue, Intermediate = orange, Advanced = green)

  const skillColor =
    skillLevel === "Advanced"
      ? "green"
      : skillLevel === "Intermediate"
      ? "orange"
      : "blue";

  return (
    <div
      className="card"
      style={{
        minWidth: "400px",
      }}
    >
      <h2 style={{ margin: 0 }}>{title}</h2>

      <p style={{ color: "#ababab" }}>{description}</p>

      <div
        style={{
          width: "max-content",
          borderRadius: "8px",
          padding: "8px",
          color: "white",
          marginTop: "12px",
          backgroundColor: skillColor,
        }}
      >
        {skillLevel}
      </div>
    </div>
  );
}

export default function InfoCardLayout() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <InfoCard
        title="React Development"
        description="Building user interfaces with components"
        skillLevel="Beginner"
      />

      <InfoCard
        title="Backend Development"
        description="Building services and API"
        skillLevel="Advanced"
      />

      <InfoCard
        title="React Native Development"
        description="Building mobile application"
        skillLevel="Intermediate"
      />
    </div>
  );
}
