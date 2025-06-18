import { useEffect, useState } from 'react';

// 문제 4. 1초마다 숫자 증가
const Q4 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p> 카운트를 올려보세요</p>
      <p>{count}</p>
    </div>
  );
};

export default Q4;
