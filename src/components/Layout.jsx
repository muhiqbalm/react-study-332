import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      <Navigation />

      {children}
    </div>
  );
}
