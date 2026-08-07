import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Inventory() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    API.get("/inventory")
      .then((res) => setInventory(res.data))
      .catch((err) => console.log(err));
  }, []);

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
            Showing {inventory.length} inventory records from the uploaded CSV.
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
                {inventory.length > 0 ? (
                  inventory.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-700 hover:bg-slate-700 transition"
                    >
                      <td className="py-3 font-medium">
                        {item.sku}
                      </td>

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
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center py-8 text-gray-400"
                    >
                      No inventory data available. Upload a CSV file to view inventory.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {inventory.length > 0 && (
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
                  {
                    inventory.filter(
                      (item) => item.status === "Low Stock"
                    ).length
                  }
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5">
                <h3 className="text-gray-400">Healthy Items</h3>
                <p className="text-3xl text-green-400 font-bold">
                  {
                    inventory.filter(
                      (item) => item.status === "Healthy"
                    ).length
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}