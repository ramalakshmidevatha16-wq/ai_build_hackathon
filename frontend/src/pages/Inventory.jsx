import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Inventory() {

  const [inventory] = useState([
    {
      sku: "SKU_001",
      warehouse: "WH_1",
      inventory: 520,
      forecast: 410,
      reorder: 300,
      status: "Healthy",
    },
    {
      sku: "SKU_002",
      warehouse: "WH_2",
      inventory: 120,
      forecast: 240,
      reorder: 180,
      status: "Low Stock",
    },
    {
      sku: "SKU_003",
      warehouse: "WH_3",
      inventory: 860,
      forecast: 420,
      reorder: 250,
      status: "Overstock",
    },
    {
      sku: "SKU_004",
      warehouse: "WH_4",
      inventory: 410,
      forecast: 380,
      reorder: 250,
      status: "Healthy",
    },
    {
      sku: "SKU_005",
      warehouse: "WH_5",
      inventory: 90,
      forecast: 220,
      reorder: 150,
      status: "Low Stock",
    },
    {
      sku: "SKU_006",
      warehouse: "WH_1",
      inventory: 610,
      forecast: 500,
      reorder: 300,
      status: "Healthy",
    },
    {
      sku: "SKU_007",
      warehouse: "WH_2",
      inventory: 980,
      forecast: 420,
      reorder: 250,
      status: "Overstock",
    },
    {
      sku: "SKU_008",
      warehouse: "WH_3",
      inventory: 350,
      forecast: 330,
      reorder: 220,
      status: "Healthy",
    },
  ]);

  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="p-8">

          <h1 className="text-3xl text-white font-bold mb-2">
            Inventory Management
          </h1>

          <p className="text-gray-400 mb-6">
            Showing {inventory.length} inventory records.
          </p>

          <div className="bg-slate-800 rounded-xl p-6 overflow-x-auto">

            <table className="w-full text-white">

              <thead>

                <tr className="border-b border-slate-700">
                  <th className="text-left py-3">SKU</th>
                  <th className="text-left">Warehouse</th>
                  <th className="text-left">Current Stock</th>
                  <th className="text-left">Demand Forecast</th>
                  <th className="text-left">Reorder Point</th>
                  <th className="text-left">Status</th>
                </tr>

              </thead>

              <tbody>

                {inventory.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b border-slate-700 hover:bg-slate-700"
                  >

                    <td className="py-3">{item.sku}</td>
                    <td>{item.warehouse}</td>
                    <td>{item.inventory}</td>
                    <td>{item.forecast}</td>
                    <td>{item.reorder}</td>

                    <td>

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          item.status === "Healthy"
                            ? "bg-green-600"
                            : item.status === "Low Stock"
                            ? "bg-red-600"
                            : "bg-yellow-500 text-black"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

            <div className="bg-slate-800 rounded-xl p-5">
              <h3 className="text-gray-400">Total Records</h3>
              <p className="text-3xl text-white font-bold">
                {inventory.length}
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <h3 className="text-gray-400">Low Stock Items</h3>
              <p className="text-3xl text-red-400 font-bold">
                {inventory.filter(i => i.status === "Low Stock").length}
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <h3 className="text-gray-400">Healthy Items</h3>
              <p className="text-3xl text-green-400 font-bold">
                {inventory.filter(i => i.status === "Healthy").length}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}