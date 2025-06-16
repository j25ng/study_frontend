import { Link } from 'react-router';

// component 이름은 대문자 필수
const Header = () => {
  return (
    <div className="flex h-[100px] items-center justify-center bg-[lightblue]">
      <Link to="/">Header</Link>
    </div>
  );
};

export default Header;
