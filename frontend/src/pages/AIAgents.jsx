import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const agents = [
  {
    title: "Demand Prediction Agent",
    desc: "Uses Random Forest Machine Learning model to predict future product demand from uploaded inventory and historical sales data.",
  },
  {
    title: "Inventory Analysis Agent",
    desc: "Analyzes stock levels, reorder points, stockouts, and identifies low-stock or overstock situations.",
  },
  {
    title: "Transfer Optimization Agent",
    desc: "Finds the best warehouse-to-warehouse inventory transfer plan to satisfy demand while minimizing shortages.",
  },
  {
    title: "Cost Optimization Agent",
    desc: "Calculates estimated transportation cost, inventory holding cost, and expected savings for each recommendation.",
  },
  {
    title: "Decision & Explanation Agent",
    desc: "Combines outputs from all AI agents and generates the final recommendation with a human-readable explanation.",
  },
];

export default function AIAgents() {
  return (
    <div className="flex bg-slate-950 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            AI Multi-Agent Workflow
          </h1>

          <p className="text-gray-400 mb-8">
            Intelligent agents collaboratively analyze inventory and generate optimized transfer recommendations.
          </p>

          <div className="space-y-6">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border-l-4 border-blue-500 shadow-lg"
              >
                <h2 className="text-xl font-bold text-white">
                  {agent.title}
                </h2>

                <p className="text-gray-300 mt-3">
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