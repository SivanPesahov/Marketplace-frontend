import React, { forwardRef } from "react";

const Select = forwardRef(({ onChange, value, children }, ref) => {
  return (
    <select
      ref={ref}
      className="w-80 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 h-10"
      onChange={onChange}
      value={value}
    >
      {children}
    </select>
  );
});

export default Select;
