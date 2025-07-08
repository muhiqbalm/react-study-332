import Navigation from "./Navigation";

export default function Layout({ children, menu }) {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      <Navigation menu={menu} />

      {children}
    </div>
  );
}
