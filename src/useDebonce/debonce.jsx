import React, { useState } from "react";
import useDebounce from "./usedebonce";

export default function debonce() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 600);
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Search input: {debouncedValue}</p>
    </div>
  );
}
