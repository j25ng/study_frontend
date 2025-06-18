import { useEffect, useState } from 'react';

// 문제 2. input 값을 state로 저장하고, 변경 시 콘솔에 출력
const Q2 = () => {
  const [str, setStr] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(str);
  }, [str]);

  return (
    <input
      placeholder="내용을 입력하세요"
      value={str}
      onChange={(e) => setStr(e.target.value)}
    />
  );
};

export default Q2;
