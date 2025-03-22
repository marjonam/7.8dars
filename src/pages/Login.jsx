import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("./login.jpg")`,
      }}
      className="h-screen grid place-items-center w-full bg-cover bg-center"
    >
      <div>
        <img className="  w-14 mx-auto" src="./login-logo.svg" />
        <h2 className="text-4xl text-center mb-5 font-bold">Login</h2>
        <div className="flex flex-col gap-2">
          <label className="">
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
            If you don't have account,please
            <Link className="link link-warning" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
