import { useEffect, useState } from 'react';

// 문제 5. 버튼을 눌렀을 때 클릭 횟수를 저장하고, 5번이 되면 콘솔에 "5번 클릭!"을 출력하는 컴포넌트
const Q5 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line no-console
    if (count == 5) console.log('5번 클릭!');
  }, [count]);

  return (
    <div>
      <p>클릭 횟수: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>클릭하기</button>
    </div>
  );
};

export default Q5;
