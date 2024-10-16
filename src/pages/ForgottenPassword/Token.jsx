import React from "react";
import { Form, useNavigate } from "react-router-dom";
export const Token = () => {
  const navigate = useNavigate();
  const isSubmitting = navigate.state === "submitting";
  return (
    <div className=" min-h-screen flex justify-center items-center px-16">
      <Form
        method="POST"
        className="shadow-lg px-4 py-6 md:px-12 md:py-12  place-items-center gap-4 grid border-2 border-red-700 rounded-md "
      >
        <div className="grid gap-2 md:gap-4">
          <label className="input input-bordered flex items-center gap-2">
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
              className="grow w-48 md:w-64 lg:w-72"
              placeholder="OTP"
            />
          </label>
        </div>
        <p>Please enter the code sent to you email or phone!</p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary mt-4 w-32 md:w-64 "
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-dots"></span>
              submitting...
            </>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </Form>
    </div>
  );
};
