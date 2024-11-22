import React from "react";

export default function Flex({ children, className = "", direction = "row", align = "center", justify = "start" }) {
  return (
    <div
      className={`flex flex-${direction} items-${align} justify-${justify} ${className}`}
    >
      {children}
    </div>
  );
}
