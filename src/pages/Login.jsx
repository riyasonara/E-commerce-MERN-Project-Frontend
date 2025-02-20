import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign-Up");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay to reduce background opacity */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Form container with glass effect */}
      <div className="relative w-[90%] sm:max-w-96 bg-white/20 backdrop-blur-lg shadow-xl rounded-lg p-6 border border-white/30">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col min-h-[30vh] items-center gap-4 text-gray-900"
        >
          <div className="inline-flex items-center gap-2 mb-2 mt-6">
            <p className="prata-regular text-3xl">{currentState}</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>
          {currentState === "Login" ? (
            ""
          ) : (
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 bg-white/40 backdrop-blur-sm rounded-md text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Name"
              required
            />
          )}

          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 bg-white/40 backdrop-blur-sm rounded-md text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 bg-white/40 backdrop-blur-sm rounded-md text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Password"
            required
          />
          <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p className="cursor-pointer hover:underline text-gray-300 px-2 py-1">
              Forgot password?
            </p>
            {currentState === "Login" ? (
              <p
                onClick={() => setCurrentState("SignUp")}
                className="cursor-pointer hover:underline text-gray-300 px-2 py-1"
              >
                Create Account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState("Login")}
                className="cursor-pointer hover:underline text-gray-300 px-2 py-1"
              >
                Login here
              </p>
            )}
          </div>
          <button className="bg-gray-900 text-white font-light px-8 py-2 mt-4">
            {currentState === "Login" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
