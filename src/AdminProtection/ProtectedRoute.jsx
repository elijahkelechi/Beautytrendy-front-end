import React from "react";

const ProtectedRoute = ({ children, user }) => {
  return (
    <div>
      <h1>Admin must be protected</h1>
    </div>
  );
};

export default ProtectedRoute;
