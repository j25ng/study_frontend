// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';

import CountButton from '../../components/countButton';
import useCounter from '../../hooks/use-counter';

const Count = () => {
  //const [count, setCount] = useState(0);

  // const handleCountPlus = () => {
  //   setCount((currentCount) => {
  //     return currentCount + 1;
  //   });
  // };

  const { count, increase, decrease, reset } = useCounter(0);

  // const handleCountPlus = () => {
  //   setTimeout(() => {
  //     setCount((currentCount) => {
  //       return currentCount + 1;
  //     });
  //   }, 1000);
  // };

  // const handleCountMinus = () => {
  //   setCount((currentCount) => {
  //     return currentCount - 1;
  //   });
  // };

  // useEffect(() => {
  //   // eslint-disable-next-line no-console
  //   console.log('Change Count: ', count);
  // }, [count]);

  // 설정된 시간 마다 실행하는 것 setInterval
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     handleCountPlus();
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //     console.log('타이머 정리');
  //   };
  // }, []);

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
      {/* <CountButton
        symbol="+1"
        onClick={handleCountPlus}
        className="cursor-pointer bg-[lightblue] p-[20px] hover:bg-[yellow]"
      />
      <CountButton
        symbol="-1"
        onClick={handleCountMinus}
        className="cursor-pointer bg-[lightblue] p-[20px] hover:bg-[yellow]"
      /> */}

      <CountButton
        symbol="+1"
        onClick={increase}
        className="cursor-pointer bg-[lightblue] p-[20px] hover:bg-[yellow]"
      />
      <CountButton
        symbol="-1"
        onClick={decrease}
        className="cursor-pointer bg-[lightblue] p-[20px] hover:bg-[yellow]"
      />
      <CountButton
        symbol="+1"
        onClick={reset}
        className="cursor-pointer bg-[lightblue] p-[20px] hover:bg-[yellow]"
      />
    </div>
  );
};

export default Count;
