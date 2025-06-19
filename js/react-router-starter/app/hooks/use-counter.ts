import { useState } from 'react';

const useCounter = (initialValue: number) => {
  const [count, setCount] = useState<number>(initialValue);

  const increase = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  const decrease = () => {
    setCount((currentCount) => {
      return currentCount - 1;
    });
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increase, decrease, reset };
};

export default useCounter;
