import React, { useState } from "react";
import loginImage from "../assets/Login.jpg";

function LoginPage() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <div class="h-screen w-screen flex items-center justify-center bg-gray-50">
      <div class="flex w-full h-full md:h-4/5 md:w-4/5 bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
          <img
            src={loginImage}
            alt="Login Illustration"
            class="w-3/4 object-contain"
          />
        </div>

        <div class="flex flex-col w-full md:w-1/2 p-8 md:p-12 items-center">
          <div class="w-full max-w-md flex flex-col gap-1 mb-8">
            <h1 class="text-3xl font-bold text-gray-800">Login</h1>
            <p class="text-gray-600">Start your quizzing journey now!</p>
          </div>

          <form class="w-full max-w-md flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <label for="email" class="text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => {
                  setLogin((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
                placeholder="Enter your email"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div class="flex flex-col gap-1">
              <label for="password" class="text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <button
                type="submit"
                class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
              >
                Submit
              </button>
            </div>

            <p class="text-gray-600 text-sm">
              Don’t have an account?
              <a href="#" class="text-purple-600 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;