interface CountButtonProps {
  symbol: string;
  onClick: () => void;
  className?: string;
}

const CountButton = ({ symbol, onClick, className }: CountButtonProps) => {
  return (
    <button
      className={
        className ? className : 'cursor-pointer bg-green-100 p-[20px] hover:bg-green-200'
      }
      onClick={onClick}
    >
      {symbol}
    </button>
  );
};

export default CountButton;
