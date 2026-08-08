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

  const warehouse = [
    { Warehouse_ID: "WH_1", Inventory_Level: 8500 },
    { Warehouse_ID: "WH_2", Inventory_Level: 7200 },
    { Warehouse_ID: "WH_3", Inventory_Level: 9100 },
    { Warehouse_ID: "WH_4", Inventory_Level: 6800 },
    { Warehouse_ID: "WH_5", Inventory_Level: 7900 },
  ];

  const region = [
    { Region: "North", Units_Sold: 4200 },
    { Region: "South", Units_Sold: 3600 },
    { Region: "East", Units_Sold: 2800 },
    { Region: "West", Units_Sold: 5100 },
  ];

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
            Warehouse inventory and regional sales analytics.
          </p>

          <div className="grid xl:grid-cols-2 gap-8">

            <div className="bg-slate-800 rounded-xl p-6">

              <h2 className="text-xl text-white font-bold mb-5">
                Inventory by Warehouse
              </h2>

              <ResponsiveContainer width="100%" height={320}>

                <BarChart data={warehouse}>

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

              <h2 className="text-xl text-white font-bold mb-5">
                Sales by Region
              </h2>

              <ResponsiveContainer width="100%" height={320}>

                <PieChart>

                  <Pie
                    data={region}
                    dataKey="Units_Sold"
                    nameKey="Region"
                    outerRadius={110}
                    label
                  >

                    {region.map((entry, index) => (

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

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-800 rounded-xl p-6">

              <h3 className="text-white text-lg font-semibold mb-2">
                Warehouses Analysed
              </h3>

              <p className="text-4xl text-blue-400 font-bold">
                {warehouse.length}
              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-6">

              <h3 className="text-white text-lg font-semibold mb-2">
                Regions Analysed
              </h3>

              <p className="text-4xl text-green-400 font-bold">
                {region.length}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}