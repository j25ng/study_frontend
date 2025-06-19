import { useMemo, useState } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleMultiply = (num: number) => {
    return num * 2;
  };

  const doubled = useMemo(() => {
    return handleMultiply(count);
  }, [count]);

  return (
    <div>
      <h1>useMemo 예제</h1>
      <div>계산 결과 : {doubled}</div>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="텍스트 변경"
      />
    </div>
  );
};

export default UseMemo;
