import { useLocation, useNavigate } from "react-router-dom";

export default function Navigation({ menu }) {
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
      {menu.map((item) => {
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
