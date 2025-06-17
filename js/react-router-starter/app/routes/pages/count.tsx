import { useEffect, useState } from 'react';

import CountButton from '../../components/countButton';

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

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Change Count: ', count);
  }, [count]);

  return (
    <div className="flex h-[500px] flex-col items-center justify-center gap-[20px] bg-[lightgrey]">
      <div>{count}</div>
      {/* <button
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
      </button> */}
      <CountButton
        symbol="+1"
        onClick={handleCountPlus}
        className="cursor-pointer bg-[lightblue] p-[20px] hover:bg-[yellow]"
      />
      <CountButton
        symbol="-1"
        onClick={handleCountMinus}
        className="cursor-pointer bg-[lightblue] p-[20px] hover:bg-[yellow]"
      />
    </div>
  );
};

export default Count;
