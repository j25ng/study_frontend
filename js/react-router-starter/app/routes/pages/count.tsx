import { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  const handleCountPlus = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  const handleCountMinus = () => {
    setCount((currentCount) => {
      return currentCount - 1;
    });
  };

  return (
    <div className="flex h-[500px] flex-col items-center justify-center gap-[20px] bg-[lightgrey]">
      <div>{count}</div>
      <button
        className="cursor-pointer bg-[lightblue] p-[20px] hover:bg-[yellow]"
        onClick={() => {
          handleCountPlus();
        }}
      >
        +1 button
      </button>
      <button
        className="cursor-pointer bg-[lightblue] p-[20px] hover:bg-[yellow]"
        onClick={() => {
          handleCountMinus();
        }}
      >
        -1 button
      </button>
    </div>
  );
};

export default Count;
