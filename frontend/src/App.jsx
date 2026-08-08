import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ImportData from "./pages/ImportData";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Warehouses from "./pages/Warehouses";
import Analytics from "./pages/Analytics";
import Recommendations from "./pages/Recommendations";
import AIAgents from "./pages/AIAgents";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/import" element={<ImportData />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/warehouses" element={<Warehouses />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/recommendations" element={<Recommendations />} />
      <Route path="/agents" element={<AIAgents />} />
    </Routes>
  );
}

export default App;