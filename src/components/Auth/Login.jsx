const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center from-emerald-50 via-white to-slate-50 p-6">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-emerald-600/95 flex items-center justify-center text-white text-2xl font-bold shadow">
            SS
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-slate-800">
            Welcome back
          </h2>
          <p className="text-sm text-slate-500">
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
              aria-label="Email"
              className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition bg-white"
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
              aria-label="Password"
              className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition bg-white"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              Remember me
            </label>
            <a className="text-emerald-600 hover:underline" href="/">
              Forgot password?
            </a>
          </div>

          <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition transform hover:-translate-y-0.5">
            Log in
          </button>

          <div className="mt-3 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="h-px w-14 bg-slate-200" />
              <span>Or continue with</span>
              <span className="h-px w-14 bg-slate-200" />
            </div>

            <button
              type="button"
              className="flex items-center gap-3 border rounded-lg px-3 py-2 hover:bg-slate-50 transition"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <circle cx="12" cy="12" r="10" fill="#4285F4" />
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
              <span className="text-sm text-slate-700">
                Sign in with Google
              </span>
            </button>

            <p className="mt-2 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <a className="text-emerald-600 hover:underline" href="/signup">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
