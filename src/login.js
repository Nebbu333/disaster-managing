import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function validate() {
    if (!email) return "Email is required";
    // simple email regex
    const re = /^\S+@\S+\.\S+$/;
    if (!re.test(email)) return "Please enter a valid email";
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    const v = validate();
    if (v) return setError(v);

    setLoading(true);
    try {
      // If the parent passed an onSubmit, call it. Otherwise show a sample fetch.
      if (onSubmit) {
        await onSubmit({ email, password, remember });
      } else {
        // Example: replace with your real API endpoint
        const res = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, remember }),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.message || "Login failed");
        }
      }
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10"
    >
      <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Sign in to your account</h2>
      <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">Enter your credentials to continue.</p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {error && (
          <div className="text-sm text-red-700 bg-red-100 p-3 rounded-md">{error}</div>
        )}

        <label className="block">
          <span className="text-sm text-gray-700 dark:text-gray-300">Email</span>
          <input
            aria-label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 focus:ring-2 focus:ring-indigo-300 p-3"
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="block relative">
          <span className="text-sm text-gray-700 dark:text-gray-300">Password</span>
          <input
            aria-label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 focus:ring-2 focus:ring-indigo-300 p-3 pr-12"
            placeholder="Your password"
            required
            minLength={6}
          />

          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-2 top-8 transform -translate-y-1/2 text-sm font-medium text-indigo-600 dark:text-indigo-400"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </label>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300"
            />
            Remember me
          </label>

          <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400">Forgot password?</a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white px-4 py-3 font-medium hover:bg-indigo-500 disabled:opacity-60"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
          ) : (
            "Sign in"
          )}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
        Don’t have an account? <a href="#" className="text-indigo-600 dark:text-indigo-400">Sign up</a>
      </div>
    </motion.div>
  );
}
