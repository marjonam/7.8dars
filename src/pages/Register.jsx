import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div
      className="grid h-screen w-full place-items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("./signup.jpg")`,
      }}
    >
      <div>
        <img src="./login-logo.svg" className="mx-auto w-16" alt="" />

        <h2 className="text-4xl text-center mb-5 font-bold ">Register</h2>
        <div className="flex flex-col gap-2">
          <label>
            Display Name
            <input
              type="text"
              required
              placeholder="Type here"
              className="input"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              placeholder="Type here"
              className="input"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              required
              placeholder="Type here"
              className="input"
            />
          </label>
          <div className=" flex flex-col gap-3 mt-3 my-2 md:flex-row">
            {/* {!isPending && (
            <button className="btn btn-warning btn-block">Login</button>
          )} */}
            <button className="btn btn-primary grow md:btn-md btn-sm">
              Login
            </button>
            <button className="btn btn-secondary btn-sm grow md:btn-md disabled:bg-slate-300">
              Google
            </button>
          </div>
        </div>
        <div className="text-center ">
          <p>
            If you have an account,{" "}
            <Link className="link link-warning" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
