import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  const [data, setData] = useState({
    warehouse: [],
    region: [],
  });

  useEffect(() => {
    API.get("/analytics")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
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
          <h1 className="text-3xl text-white font-bold mb-2">
            Analytics Dashboard
          </h1>

          <p className="text-gray-400 mb-8">
            Analytics generated from the uploaded inventory dataset.
          </p>

          <div className="grid xl:grid-cols-2 gap-8">

            <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-white text-xl font-bold mb-5">
                Inventory by Warehouse
              </h2>

              {data.warehouse.length > 0 ? (
                <ResponsiveContainer width="100%" height={320}>
                  <BarChart data={data.warehouse}>
                    <XAxis dataKey="Warehouse_ID" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="Inventory_Level"
                      fill="#3B82F6"
                    />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-[320px] flex items-center justify-center text-gray-400">
                  No warehouse analytics available.
                </div>
              )}
            </div>

            <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-white text-xl font-bold mb-5">
                Sales by Region
              </h2>

              {data.region.length > 0 ? (
                <ResponsiveContainer width="100%" height={320}>
                  <PieChart>
                    <Pie
                      data={data.region}
                      dataKey="Units_Sold"
                      nameKey="Region"
                      outerRadius={110}
                      label
                    >
                      {data.region.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>

                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-[320px] flex items-center justify-center text-gray-400">
                  No regional analytics available.
                </div>
              )}
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-2">
                Warehouses Analysed
              </h3>

              <p className="text-4xl text-blue-400 font-bold">
                {data.warehouse.length}
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-2">
                Regions Analysed
              </h3>

              <p className="text-4xl text-green-400 font-bold">
                {data.region.length}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}