import React from "react";

export const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      {children}
    </button>
  );
};
