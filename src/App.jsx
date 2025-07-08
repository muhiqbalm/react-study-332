import React from "react";
import "./App.css";
import {
  AddCatForm,
  Counter,
  InfoCardLayout,
  Layout,
  Level1Demo,
  Level2Demo,
  Level3Demo,
  PersonalInfo,
  ProductDashboard,
  UseEffectBasic,
} from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout menu={MENU}>
        <Routes>
          {MENU.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
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

const MENU = [
  { path: "/", text: "Info Card", element: <InfoCardLayout /> },
  { path: "/level-1", text: "Level 1", element: <Level1Demo /> },
  { path: "/level-2", text: "Level 2", element: <Level2Demo /> },
  { path: "/level-3", text: "Level 3", element: <Level3Demo /> },
  { path: "/counter", text: "Counter", element: <Counter /> },
  {
    path: "/product-dashboard",
    text: "Product Dashboard",
    element: <ProductDashboard data={dashboardData} />,
  },
  {
    path: "/personal-info",
    text: "Personal Info",
    element: <PersonalInfo />,
  },
  {
    path: "/use-effect-basic",
    text: "Use Effect Basic",
    element: <UseEffectBasic />,
  },
  {
    path: "/post-form",
    text: "Add Cat Form",
    element: <AddCatForm />,
  },
];

export default App;
