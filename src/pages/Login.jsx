import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../app/features/userSlice";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      dispatch(login({ email }));
      navigate("/");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("./login.jpg")`,
      }}
      className="h-screen grid place-items-center w-full bg-cover bg-center"
    >
      <div className=" p-8 rounded-lg  max-w-md w-full">
        <img className="w-14 mx-auto mb-4" src="./login-logo.svg" alt="Logo" />
        <h2 className="text-4xl text-center mb-5 font-bold text-white">
          Login
        </h2>
        <div className="flex flex-col gap-4">
          <label className="text-white">
            Email
            <input
              type="email"
              required
              placeholder="Type here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full mt-1 p-2 rounded-lg border border-gray-300"
            />
          </label>
          <label className="text-white">
            Password
            <input
              type="password"
              required
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input w-full mt-1 p-2 rounded-lg border border-gray-300"
            />
          </label>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleLogin}
              className="btn bg-purple-700 hover:bg-purple-900 text-white py-2 px-6 rounded-lg"
            >
              Login
            </button>
            <button className="btn bg-pink-600 hover:bg-pink-800 text-white py-2 px-6 rounded-lg">
              Google
            </button>
          </div>

          <div className="text-center text-white mt-4">
            <p>
              If you don't have an account, please{" "}
              <Link className="text-blue-400 underline" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
