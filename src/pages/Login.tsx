import React from "react";
import Header from "../components/Header";

export default function Login() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-green-600">Welcome Back to FitMeal</h2>
          <p className="text-center text-gray-500">Please sign in to your account</p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="w-full py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              Login
            </button>
          </form>

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-green-600 hover:underline">Forgot password?</a>
            <a href="/signup" className="text-sm text-green-600 hover:underline">Create an account</a>
          </div>
        </div>
      </div>
    </>

  );
}
