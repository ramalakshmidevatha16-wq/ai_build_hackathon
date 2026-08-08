import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import API from "../services/api";

import {
  FaWarehouse,
  FaBoxes,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [analytics, setAnalytics] = useState({
    warehouse: [],
    region: [],
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const dashboardRes = await API.get("/dashboard");
        console.log("Dashboard API:", dashboardRes.data);

        const recommendationRes = await API.get("/recommendations");
        const analyticsRes = await API.get("/analytics");

        setDashboard(dashboardRes.data);
        setRecommendations(recommendationRes.data);
        setAnalytics(analyticsRes.data);
      } catch (err) {
        console.error("Dashboard Error:", err);
      }
    };

    loadData();
  }, []);

  const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
  ];

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-8">

          {/* KPI */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard
              title="Warehouses"
              value={dashboard.warehouses || 0}
              icon={<FaWarehouse />}
              color="text-blue-400"
            />

            <StatCard
              title="Products"
              value={dashboard.products || 0}
              icon={<FaBoxes />}
              color="text-green-400"
            />

            <StatCard
              title="Stockouts"
              value={dashboard.stockouts || 0}
              icon={<FaChartLine />}
              color="text-yellow-400"
            />

            <StatCard
              title="Total Inventory"
              value={dashboard.inventory || 0}
              icon={<FaRobot />}
              color="text-pink-400"
            />

          </div>

          {/* Charts */}

          <div className="grid xl:grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-800 rounded-xl p-6">

              <h2 className="text-xl text-white font-bold mb-4">
                Inventory by Warehouse
              </h2>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analytics.warehouse}>
                  <XAxis dataKey="Warehouse_ID" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="Inventory_Level"
                    fill="#3B82F6"
                  />
                </BarChart>
              </ResponsiveContainer>

            </div>

            <div className="bg-slate-800 rounded-xl p-6">

              <h2 className="text-xl text-white font-bold mb-4">
                Sales by Region
              </h2>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>

                  <Pie
                    data={analytics.region}
                    dataKey="Units_Sold"
                    nameKey="Region"
                    outerRadius={100}
                    label
                  >
                    {analytics.region.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />

                </PieChart>
              </ResponsiveContainer>

            </div>

          </div>

          {/* AI Recommendations */}

          <div className="bg-slate-800 rounded-xl p-6 mt-8">

            <h2 className="text-2xl text-white font-bold mb-6">
              AI Recommendations
            </h2>

            <div className="space-y-4">

              {recommendations.slice(0, 5).map((item, index) => (

                <div
                  key={index}
                  className="bg-slate-700 rounded-xl p-4"
                >

                  <h3 className="text-white font-bold">
                    {item.sku}
                  </h3>

                  <p className="text-gray-300">
                    {item.from_warehouse} ➜ {item.to_warehouse}
                  </p>

                  <p className="text-gray-300">
                    Transfer {item.transfer_quantity} units
                  </p>

                  <p className="text-green-400">
                    Estimated Savings ₹{item.estimated_savings}
                  </p>

                  <p className="text-yellow-300">
                    {item.priority} Priority
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Recent Decisions */}

          <div className="bg-slate-800 rounded-xl p-6 mt-8">

            <h2 className="text-2xl text-white font-bold mb-4">
              Recent AI Decisions
            </h2>

            <table className="w-full text-white">

              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3">SKU</th>
                  <th className="text-left">From</th>
                  <th className="text-left">To</th>
                  <th className="text-left">Qty</th>
                  <th className="text-left">Priority</th>
                </tr>
              </thead>

              <tbody>

                {recommendations.slice(0, 10).map((item, index) => (

                  <tr
                    key={index}
                    className="border-b border-slate-700"
                  >
                    <td className="py-3">{item.sku}</td>
                    <td>{item.from_warehouse}</td>
                    <td>{item.to_warehouse}</td>
                    <td>{item.transfer_quantity}</td>
                    <td>{item.priority}</td>
                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
      </div>
    </div>
  );
}