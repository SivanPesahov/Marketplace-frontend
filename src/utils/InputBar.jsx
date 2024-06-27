import { forwardRef } from "react";

export const InputBar = forwardRef(
  ({ onChange, value, name, placeholder, defaultValue }, ref) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        ref={ref}
        className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-700 my-2"
        onChange={onChange}
        value={value}
        name={name}
        defaultValue={defaultValue}
      />
    );
  }
);
