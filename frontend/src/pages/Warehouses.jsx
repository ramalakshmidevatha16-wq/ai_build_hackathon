import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Warehouses() {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    API.get("/warehouses")
      .then((res) => setWarehouses(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Warehouses
          </h1>

          <p className="text-gray-400 mb-6">
            {warehouses.length} warehouse(s) detected from the uploaded dataset.
          </p>

          {warehouses.length === 0 ? (
            <div className="bg-slate-800 rounded-xl p-10 text-center text-gray-400">
              No warehouse data found. Upload a CSV file first.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {warehouses.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-blue-400">
                    {item.warehouse}
                  </h2>

                  <div className="mt-5 space-y-3 text-gray-300">

                    <div className="flex justify-between">
                      <span>Products</span>
                      <span className="font-semibold text-white">
                        {item.products}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Total Inventory</span>
                      <span className="font-semibold text-white">
                        {item.inventory}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Average Demand</span>
                      <span className="font-semibold text-green-400">
                        {item.avg_demand}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Stockouts</span>
                      <span
                        className={`font-semibold ${
                          item.stockouts > 0
                            ? "text-red-400"
                            : "text-green-400"
                        }`}
                      >
                        {item.stockouts}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}