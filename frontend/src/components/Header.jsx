import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-slate-900 border-b border-slate-700 px-8 py-5">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400">
          AI Powered Inventory Optimization Platform
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="flex items-center bg-slate-800 px-4 py-2 rounded-xl">

          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-3 text-white placeholder-gray-400"
          />

        </div>

        <FaBell
          className="text-white text-2xl cursor-pointer"
        />

        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-blue-400" />

          <div>
            <p className="text-white font-semibold">
              Admin
            </p>

            <p className="text-gray-400 text-sm">
              Inventory Manager
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}