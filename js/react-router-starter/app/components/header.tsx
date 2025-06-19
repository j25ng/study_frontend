import { Link } from 'react-router';

const Header = () => {
  return (
    <header className="bg-[#004080] py-[20px] text-white">
      <div className="mx-auto my-[50px] w-[90%] max-w-[1200px]">
        <h1 className="mb-[10px] text-[30px] font-bold">여행을 떠나요</h1>
        <nav>
          <ul className="flex list-none gap-[20px]">
            <li>
              <Link to="/" className="font-bold">
                홈
              </Link>
            </li>
            <li>
              <Link to="/product" className="font-bold">
                여행 상품
              </Link>
            </li>
            <li>
              <Link to="/reservation" className="font-bold">
                예약/문의
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
