import Header from "../components/Header";


export default function SignUp() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-green-600">Join FitMeal</h2>
          <p className="text-center text-gray-500">Create a new account</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
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
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </>

  );
}
