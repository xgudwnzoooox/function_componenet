// custom hooks
// logic의 모임

import * as React from "react";

interface UseCounterReturnType {
  count: number;
  add: () => void;
  minus: () => void;
}

export function useCounter(): UseCounterReturnType {
  const [count, setCount] = React.useState(0);

  const add = () => setCount((prev) => prev + 1);
  const minus = () => setCount((prev) => prev - 1);

  return {
    count,
    add,
    minus
  };
}
