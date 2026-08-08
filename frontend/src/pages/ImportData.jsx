import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function ImportData() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a CSV file");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      console.log("Uploading:", file.name);

      const response = await API.post("/upload", formData);

      console.log("Reached after upload");
      console.log("Status:", response.status);
      console.log("Response:", response.data);

      alert("Upload Successful!");

      navigate("/dashboard");
    } catch (error) {
      console.error("Upload Error:", error);

      if (error.response) {
        console.log(error.response.data);
        alert(error.response.data.error || "Upload Failed");
      } else {
        alert("Cannot connect to backend.");
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <div className="bg-white rounded-2xl shadow-xl p-8 w-[500px]">

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-3">
          Upload Inventory CSV
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Upload warehouse inventory data to analyze stock and generate AI recommendations
        </p>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6">

          <input
            type="file"
            accept=".csv"
            className="block w-full text-sm"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setFile(e.target.files[0]);
              }
            }}
          />

          {file && (
            <p className="mt-4 text-green-600 font-medium">
              Selected: {file.name}
            </p>
          )}

        </div>

        <button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-xl font-semibold transition"
        >
          {uploading ? "Uploading..." : "Upload CSV"}
        </button>

      </div>

    </div>
  );
}