import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm:", confirmPassword);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-950 to-black p-6">
      <div className="w-full max-w-md bg-slate-800/90 backdrop-blur border border-slate-700 rounded-2xl shadow-lg p-8 text-slate-100">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
            SS
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-slate-100">
            Create an account
          </h2>
          <p className="text-sm text-slate-400">
            Join StaffSync — sign up to manage tasks and teams
          </p>
        </div>

        <form onSubmit={(e) => submitHandler(e)} className="space-y-4">
          <div className="relative">
            <span
              className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400"
              aria-hidden
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 14a4 4 0 10-8 0"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2a4 4 0 110 8 4 4 0 010-8z"
                />
              </svg>
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Full name"
              className="w-full pl-10 pr-3 py-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              type="text"
              placeholder="Full name"
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
                  d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z"
                />
              </svg>
            </span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Password"
              className="w-full pl-10 pr-3 py-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              type="password"
              placeholder="Password"
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              aria-label="Confirm password"
              className="w-full pl-10 pr-3 py-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-emerald-400 focus:ring-emerald-400"
            />
            <span>
              I agree to the{" "}
              <a className="text-emerald-400 hover:underline" href="#">
                Terms
              </a>
            </span>
          </div>

          <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-900 rounded-lg font-medium transition transform hover:-translate-y-0.5 shadow-md">
            Sign up
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
                Sign up with Google
              </span>
            </button>

            <p className="mt-2 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <a className="text-emerald-400 hover:underline" href="/login">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
