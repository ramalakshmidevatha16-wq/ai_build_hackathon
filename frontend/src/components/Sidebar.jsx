import { NavLink } from "react-router-dom";

import {
  FaChartPie,
  FaBoxes,
  FaWarehouse,
  FaRobot,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  {
    icon: <FaChartPie />,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <FaBoxes />,
    label: "Inventory",
    path: "/inventory",
  },
  {
    icon: <FaWarehouse />,
    label: "Warehouses",
    path: "/warehouses",
  },
  {
    icon: <FaRobot />,
    label: "Recommendations",
    path: "/recommendations",
  },
  {
    icon: <FaChartLine />,
    label: "Analytics",
    path: "/analytics",
  },
  {
    icon: <FaCog />,
    label: "AI Agents",
    path: "/agents",
  },
];

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white">

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold">📦 NetworkIQ</h1>
        <p className="text-sm text-gray-400 mt-2">
          AI Inventory Optimizer
        </p>
      </div>

      <div className="mt-6">

        {menuItems.map((item, index) => (

          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 transition-all ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>

        ))}

      </div>

    </div>
  );
}