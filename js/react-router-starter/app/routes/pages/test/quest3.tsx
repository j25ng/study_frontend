// 문제 3. 버튼 누르면 3초 후 메시지 표시

import { useState } from 'react';

const Q3 = () => {
  const [isRendering, setIsRendering] = useState(false);

  const clickHandle = () => {
    setTimeout(() => {
      setIsRendering(true);
    }, 3000);
  };

  return (
    <div>
      <button onClick={() => clickHandle()}>누르기</button>
      {isRendering && <div>짜쟌</div>}
    </div>
  );
};
export default Q3;
