import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [deboncudValue, setDeboncudValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDeboncudValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return deboncudValue;
};

export default useDebounce;
