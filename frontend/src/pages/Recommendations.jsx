import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Recommendations() {

  const [recommendations, setRecommendations] = useState([
    {
      sku: "SKU_001",
      from_warehouse: "WH_1",
      to_warehouse: "WH_3",
      available_stock: 520,
      predicted_demand: 410,
      transfer_quantity: 120,
      estimated_savings: 18000,
      priority: "High",
      reason: "Warehouse WH_3 has higher demand.",
      status: "Pending",
    },
    {
      sku: "SKU_002",
      from_warehouse: "WH_2",
      to_warehouse: "WH_5",
      available_stock: 480,
      predicted_demand: 390,
      transfer_quantity: 80,
      estimated_savings: 12000,
      priority: "Medium",
      reason: "Prevent stockout at destination warehouse.",
      status: "Pending",
    },
    {
      sku: "SKU_003",
      from_warehouse: "WH_4",
      to_warehouse: "WH_2",
      available_stock: 610,
      predicted_demand: 500,
      transfer_quantity: 150,
      estimated_savings: 25000,
      priority: "High",
      reason: "Excess inventory available in source warehouse.",
      status: "Pending",
    },
    {
      sku: "SKU_004",
      from_warehouse: "WH_5",
      to_warehouse: "WH_1",
      available_stock: 450,
      predicted_demand: 360,
      transfer_quantity: 90,
      estimated_savings: 15000,
      priority: "Medium",
      reason: "Balance inventory across warehouses.",
      status: "Pending",
    },
  ]);

  const updateStatus = (index, status) => {
    const updated = [...recommendations];
    updated[index].status = status;
    setRecommendations(updated);
  };

  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="p-8">

          <h1 className="text-3xl text-white font-bold mb-6">
            AI Transfer Recommendations
          </h1>

          <div className="bg-slate-800 rounded-xl p-6 overflow-x-auto">

            <table className="w-full text-white">

              <thead>
                <tr className="border-b border-slate-700 text-left">
                  <th className="py-3">SKU</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Available</th>
                  <th>Predicted</th>
                  <th>Transfer</th>
                  <th>Savings</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {recommendations.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b border-slate-700"
                  >

                    <td className="py-3">{item.sku}</td>
                    <td>{item.from_warehouse}</td>
                    <td>{item.to_warehouse}</td>
                    <td>{item.available_stock}</td>
                    <td>{item.predicted_demand}</td>
                    <td>{item.transfer_quantity}</td>

                    <td className="text-green-400">
                      ₹{item.estimated_savings}
                    </td>

                    <td>{item.priority}</td>

                    <td>

                      <span
                        className={`px-3 py-1 rounded-full ${
                          item.status === "Approved"
                            ? "bg-green-600"
                            : item.status === "Rejected"
                            ? "bg-red-600"
                            : "bg-yellow-600"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                    <td className="space-x-2">

                      <button
                        onClick={() => updateStatus(index, "Approved")}
                        className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => updateStatus(index, "Rejected")}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                      >
                        Reject
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          <div className="mt-8 space-y-4">

            {recommendations.map((item, index) => (

              <div
                key={index}
                className="bg-slate-800 rounded-xl p-5"
              >

                <h2 className="text-xl font-bold text-white">
                  {item.sku}
                </h2>

                <p className="text-gray-300 mt-2">
                  <b>Transfer:</b> {item.from_warehouse} → {item.to_warehouse}
                </p>

                <p className="text-gray-300">
                  <b>Reason:</b> {item.reason}
                </p>

                <p className="text-gray-300">
                  <b>Forecast:</b> {item.predicted_demand}
                </p>

                <p className="text-green-400">
                  Estimated Savings ₹{item.estimated_savings}
                </p>

                <p className="text-blue-400 mt-2">
                  Human Decision: {item.status}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}