import { useLocation, useNavigate } from "react-router-dom";

const MENU = [
  { path: "/", text: "Info Card" },
  { path: "/level-1", text: "Level 1" },
  { path: "/level-2", text: "Level 2" },
  { path: "/level-3", text: "Level 3" },
  { path: "/product-dashboard", text: "Product Dashboard" },
  { path: "/personal-info", text: "Personal Info" },
];

export default function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div
      style={{
        gap: "20px",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#0A193F",
        borderBottom: "1px solid var(--primary-border)",
      }}
    >
      {MENU.map((item) => {
        const isCurrentMenu = item.path === pathname;

        return (
          <button
            key={item.path}
            className="btn-menu"
            onClick={() => {
              navigate(item.path);
            }}
            style={{
              fontWeight: isCurrentMenu ? "600" : "500",
              ...(isCurrentMenu
                ? { backgroundColor: isCurrentMenu ? "#204887" : "transparent" }
                : {}),
            }}
          >
            {item.text}
          </button>
        );
      })}
    </div>
  );
}
