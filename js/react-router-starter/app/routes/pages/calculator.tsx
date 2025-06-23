import { useState } from 'react';

const Calculator = () => {
  const [current, setCurrent] = useState('');
  const [operator, setOperator] = useState('');

  const [prev, setPrev] = useState('');
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setCurrent('');
      setPrev('');
      setOperator('');
      setDisplay('');
    } else if (['+', '-', 'x', '÷'].includes(value)) {
      if (current === '') {
        return;
      }
      setOperator(value);
      setPrev(current);
      setCurrent('');
    } else if (value === '=') {
      if (operator === '' || current === '' || prev === '') {
        return;
      }

      const a = parseFloat(prev);
      const b = parseFloat(current);
      let result = 0;

      if (operator === '+') {
        result = a + b;
      } else if (operator === 'x') {
        result = a * b;
      } else if (operator === '÷') {
        result = a / b;
      }

      setDisplay(result.toString());
      setCurrent(result.toString());

      setOperator('');
      setPrev('');
    } else {
      const newCurrent = current + value;
      setCurrent(newCurrent);
      setDisplay(newCurrent);
    }
  };

  const buttons = [
    ['7', '8', '9', '÷'],
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '-'],
    ['0', '+', '=', 'C'],
  ];

  return (
    <div className="flex h-[80vh] items-center justify-center bg-gray-100 text-black">
      <div className="flex w-[300px] flex-col items-center rounded-[8px] bg-white p-[20px]">
        <h1 className="mb-[21.44px] text-[32px] font-bold">Simple Calculator</h1>
        <input
          type="text"
          disabled
          value={display}
          className="border-grey-200 bg-grey-100 mb-[15px] h-[40px] w-full border pr-[10px] text-right text-[20px]"
        />
        <div className="flex w-full flex-col items-center justify-center gap-[10px]">
          {buttons.map((row, index) => (
            <div className="flex w-full justify-between gap-[10px]" key={index}>
              {row.map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleButtonClick(btn)}
                  className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
