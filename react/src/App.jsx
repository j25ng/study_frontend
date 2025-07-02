import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const App = () => {
  const [number, setNumber] = useState(0);

  // const handleUp = () => {
  //   setNumber((p) => p + 1);
  // };

  // const handleDown = () => {
  //   setNumber((p) => p - 1);
  // };

  const handleCount = (action) => {
    if (action === 'UP') {
      setNumber((p) => p + 1);
    }
    if (action === 'DOWN') {
      setNumber((p) => p - 1);
    }
  };

  return (
    <div className="p-4 flex justify-center items-center gap-2">
      {/* <button onClick={handleDown}>-</button> */}
      <button
        className="w-16 p-2 rounded-sm bg-indigo-400 hover:bg-indigo-600"
        onClick={() => handleCount('DOWN')}
      >
        -
      </button>
      {/* <button onClick={handleUp}>+</button> */}
      <p
        className={twMerge(
          'w-32 text-center p-4 bg-gray-100 rounded-sm font-mono',
          number > 10 && 'text-red-400',
          number < 0 && 'text-green-400'
        )}
      >
        {number}
      </p>
      <button
        className="w-16 p-2 rounded-sm bg-indigo-400 hover:bg-indigo-600"
        onClick={() => handleCount('UP')}
      >
        +
      </button>
    </div>
  );
};

export default App;
