import React from "react";

export default function Alert({ message, type = "info", className = "" }) {
  const baseStyles = "p-4 rounded-lg font-medium";
  const types = {
    info: "bg-blue-100 text-blue-700 border-l-4 border-blue-500",
    success: "bg-green-100 text-green-700 border-l-4 border-green-500",
    warning: "bg-yellow-100 text-yellow-700 border-l-4 border-yellow-500",
    error: "bg-red-100 text-red-700 border-l-4 border-red-500",
  };

  return (
    <div className={`${baseStyles} ${types[type]} ${className}`}>
      {message}
    </div>
  );
}
