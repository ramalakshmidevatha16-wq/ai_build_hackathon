import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if(email==="admin@networkiq.com" && password==="admin123"){
      navigate("/import");
    }
    else{
      alert("Invalid Credentials");
    }

  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-slate-950">

      <div className="bg-slate-800 p-8 rounded-xl w-96">

        <h1 className="text-3xl text-white font-bold mb-6 text-center">
          NetworkIQ Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded mb-4 bg-slate-700 text-white"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-6 bg-slate-700 text-white"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded"
        >
          Login
        </button>

        <p className="text-gray-400 text-sm mt-4">
          Demo Credentials:
          <br/>
          admin@networkiq.com
          <br/>
          admin123
        </p>

      </div>

    </div>

  );

}