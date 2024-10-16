import React from "react";
import { Form, useNavigate } from "react-router-dom";
export const NewPassword = () => {
  const navigate = useNavigate();
  const isSubmitting = navigate.status === "submitting";
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
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="newPassword"
              name="newPassword"
              className="grow w-48 md:w-64 lg:w-72"
              placeholder="New Password"
            />
          </label>
        </div>
        <p>Please enter a new password!</p>
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
            <span>Save</span>
          )}
        </button>
      </Form>
    </div>
  );
};
