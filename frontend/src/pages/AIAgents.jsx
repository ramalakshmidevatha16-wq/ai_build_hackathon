import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const agents = [
  {
    title: "Demand Prediction Agent",
    desc: "Uses Random Forest Machine Learning model to predict future product demand.",
  },
  {
    title: "Inventory Analysis Agent",
    desc: "Monitors stock levels and identifies overstock and low stock situations.",
  },
  {
    title: "Transfer Optimization Agent",
    desc: "Suggests the best warehouse-to-warehouse inventory transfers.",
  },
  {
    title: "Cost Optimization Agent",
    desc: "Calculates transportation cost and estimated savings for each transfer.",
  },
  {
    title: "Decision Agent",
    desc: "Combines all agent outputs and generates the final recommendation.",
  },
];

export default function AIAgents() {
  return (
    <div className="flex bg-slate-950 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-white mb-8">
            AI Multi-Agent Workflow
          </h1>

          <div className="space-y-6">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border-l-4 border-blue-500"
              >
                <h2 className="text-xl font-bold text-white">
                  {agent.title}
                </h2>

                <p className="text-gray-300 mt-2">
                  {agent.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}