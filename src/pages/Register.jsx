// Register.jsx
import React, { useState } from "react";
import { Link, Form, useNavigation, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/register", data);
    toast.success("You successfully created an account!");
    return redirect("/login");
  } catch (error) {
    const errorMesssage = error.response.data.msg || "Check Credentials";
    toast.error(errorMesssage);
    return null;
  }
};

const Register = () => {
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordMatch = (e) => {
    setPasswordMatch(e.target.value);
  };
  const handleSubmit = (e) => {
    if (password !== passwordMatch) {
      e.preventDefault();
      toast.error("Password does not match");
    }
  };
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4 md:px-16 bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400 overflow-hidden">
      <Form
        onSubmit={handleSubmit}
        method="POST"
        className="bg-gradient-to-br from-rose-100 via-rose-200 to-rose-300 shadow-xl px-6 py-8 md:px-12 md:py-12 grid place-items-center gap-4 border-2 border-rose-100 rounded-md w-full max-w-md"
      >
        <div className="grid gap-2 md:gap-4 w-full">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              name="email"
              className="grow w-full"
              placeholder="Email or PhoneNumber"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              name="name"
              className="grow w-full"
              placeholder="Full Name"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2.293l-3.955 3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              name="password"
              className="grow w-full"
              placeholder="Password"
              onChange={handlePassword}
            />
          </label>

          <label className="confirmPassword input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2.293l-3.955 3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow w-full"
              placeholder="Confirm Password"
              onChange={handlePasswordMatch}
            />
          </label>
          <p className="text-gray-500">
            Already registered?{" "}
            <Link className="link link-hover text-rose-400" to="/login">
              Login
            </Link>
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn bg-rose-400 mt-4 w-full text-center text-white"
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-bars"></span>
              Submitting...
            </>
          ) : (
            <span className="text-white">Register</span>
          )}
        </button>
      </Form>
    </div>
  );
};

export default Register;
