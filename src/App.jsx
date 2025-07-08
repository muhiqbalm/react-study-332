import "./App.css";
import {
  InfoCardLayout,
  Layout,
  Level1Demo,
  Level2Demo,
  Level3Demo,
  PersonalInfo,
  ProductDashboard,
} from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<InfoCardLayout />} />

          <Route path="/level-1" element={<Level1Demo />} />

          <Route path="/level-2" element={<Level2Demo />} />

          <Route path="/level-3" element={<Level3Demo />} />

          <Route
            path="/product-dashboard"
            element={<ProductDashboard data={dashboardData} />}
          />

          <Route path="/personal-info" element={<PersonalInfo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

// This would typically come from an API or database
const dashboardData = {
  user: {
    name: "Sarah Chen",
    role: "Product Manager",
    avatar:
      "https://www.statesman.com/gcdn/authoring/2016/09/03/NAAS/ghows-TX-75c4fdc0-8f50-4edf-a622-e3b067c7a4f0-da973726.jpeg?width=660&height=372&fit=crop&format=pjpg&auto=webp",
  },
  products: [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 299,
      stock: 15,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Coffee Maker",
      price: 149,
      stock: 8,
      category: "Appliances",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 129,
      stock: 23,
      category: "Sports",
    },
  ],
  stats: {
    totalProducts: 3,
    totalValue: 577,
    lowStockCount: 1,
  },
};

export default App;
