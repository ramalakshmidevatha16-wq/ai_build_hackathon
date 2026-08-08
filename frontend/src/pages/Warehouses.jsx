import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Warehouses() {

  const [warehouses] = useState([
    {
      warehouse: "WH_1",
      products: 50,
      inventory: 8500,
      avg_demand: 420,
      stockouts: 0,
    },
    {
      warehouse: "WH_2",
      products: 48,
      inventory: 7200,
      avg_demand: 395,
      stockouts: 2,
    },
    {
      warehouse: "WH_3",
      products: 52,
      inventory: 9100,
      avg_demand: 450,
      stockouts: 1,
    },
    {
      warehouse: "WH_4",
      products: 47,
      inventory: 6800,
      avg_demand: 365,
      stockouts: 0,
    },
    {
      warehouse: "WH_5",
      products: 49,
      inventory: 7900,
      avg_demand: 410,
      stockouts: 3,
    },
  ]);

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
            {warehouses.length} warehouse(s) available.
          </p>

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

        </div>

      </div>

    </div>
  );
}