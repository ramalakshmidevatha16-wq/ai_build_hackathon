export default function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-400">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3 text-white">
            {value}
          </h2>

        </div>

        <div
          className={`text-5xl ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}