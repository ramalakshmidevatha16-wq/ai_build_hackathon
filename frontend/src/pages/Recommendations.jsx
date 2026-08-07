import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import API from "../services/api";

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    API.get("/recommendations")
      .then((res) => setRecommendations(res.data))
      .catch((err) => console.log(err));
  }, []);

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
                  <th>Confidence</th>
                </tr>
              </thead>

              <tbody>
                {recommendations.length > 0 ? (
                  recommendations.map((item, index) => (
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

                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            item.priority === "High"
                              ? "bg-red-600"
                              : "bg-yellow-600"
                          }`}
                        >
                          {item.priority}
                        </span>
                      </td>

                      <td>{item.confidence}%</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="9"
                      className="text-center py-6 text-gray-400"
                    >
                      No recommendations available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {recommendations.length > 0 && (
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
                    <b>Current Forecast:</b> {item.current_forecast}
                  </p>

                  <p className="text-gray-300">
                    <b>AI Predicted Demand:</b> {item.predicted_demand}
                  </p>

                  <p className="text-green-400">
                    Estimated Savings: ₹{item.estimated_savings}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}