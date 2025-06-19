import CountButton from '../../components/countButton';
import useCounter from '../../hooks/use-counter';

const Count = () => {
  const { count, increase, decrease, reset } = useCounter(0);

  return (
    <div className="flex h-[500px] flex-col items-center justify-center gap-[20px] bg-[lightgray]">
      <div>{count}</div>
      <CountButton
        symbol="+1 버튼"
        onClick={increase}
        // className="cursor-pointer bg-blue-100 p-[20px] hover:bg-blue-200"
      />

      <CountButton
        symbol="-1 버튼"
        onClick={decrease}
        className="cursor-pointer bg-red-100 p-[20px] hover:bg-red-200"
      />

      <CountButton
        symbol="리셋"
        onClick={reset}
        className="cursor-pointer bg-red-100 p-[20px] hover:bg-red-200"
      />
    </div>
  );
};

export default Count;
