import React from "react";

export default function Button({ children, onClick, type = "button", variant = "primary", className = "" }) {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold text-white transition-all";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300",
    secondary: "bg-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-gray-300",
    danger: "bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
