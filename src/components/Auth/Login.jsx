import { useState } from "react";
import PropTypes from "prop-types";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("Email is ", email);
    console.log("Password is ", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-950 to-black p-6">
      <div className="w-full max-w-md bg-slate-800/90 backdrop-blur border border-slate-700 rounded-2xl shadow-lg p-8 text-slate-100">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
            SS
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-slate-100">
            Welcome back
          </h2>
          <p className="text-sm text-slate-400">
            Sign in to your account to continue
          </p>
        </div>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="space-y-4"
        >
          <div className="relative">
            <span
              className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400"
              aria-hidden
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z"
                />
              </svg>
            </span>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              aria-label="Email"
              className="w-full pl-10 pr-3 py-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              type="email"
              placeholder="Email address"
            />
          </div>

          <div className="relative">
            <span
              className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400"
              aria-hidden
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4s-3 1.567-3 3.5S10.343 11 12 11z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 20a8 8 0 0116 0"
                />
              </svg>
            </span>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              aria-label="Password"
              className="w-full pl-10 pr-3 py-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-300">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-emerald-400 focus:ring-emerald-400"
              />
              Remember me
            </label>
            <a className="text-emerald-400 hover:underline" href="">
              Forgot password?
            </a>
          </div>

          <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-900 rounded-lg font-medium transition transform hover:-translate-y-0.5 shadow-md">
            Log in
          </button>

          <div className="mt-3 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="h-px w-14 bg-slate-700" />
              <span>Or continue with</span>
              <span className="h-px w-14 bg-slate-700" />
            </div>

            <button
              type="button"
              className="flex items-center gap-3 border border-slate-700 rounded-lg px-3 py-2 hover:bg-slate-700 transition text-slate-100"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <circle cx="12" cy="12" r="10" fill="#2563EB" />
                <text
                  x="12"
                  y="16"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#fff"
                  fontFamily="Arial, Helvetica, sans-serif"
                >
                  G
                </text>
              </svg>
              <span className="text-sm text-slate-100">
                Sign in with Google
              </span>
            </button>

            <p className="mt-2 text-center text-sm text-slate-400">
              Don&apos;t have an account?{" "}
              <a className="text-emerald-400 hover:underline" href="/signup">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
