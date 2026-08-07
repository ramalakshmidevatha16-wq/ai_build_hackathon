import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function ImportData() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a CSV file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await API.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Upload Successful!");
        navigate("/dashboard");
      } else {
        alert("Upload Failed");
      }
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Upload Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white w-[450px] p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-3">
          Upload Inventory CSV
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Upload warehouse inventory data to analyze stock and generate AI recommendations
        </p>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">

          <input
            type="file"
            accept=".csv"
            className="block w-full text-sm"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {file && (
            <p className="mt-4 text-green-600 font-medium">
              Selected: {file.name}
            </p>
          )}

        </div>

        <button
          onClick={handleUpload}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Upload CSV
        </button>

      </div>
    </div>
  );
}