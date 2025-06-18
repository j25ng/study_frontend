import { Link } from 'react-router';

const TestHeader = () => {
  return (
    <header className="mb-[30px] bg-[#004080] py-[20px] text-white">
      <div className="mx-auto my-[50px] w-[90%] max-w-[1200px]">
        <nav>
          <ul className="flex list-none gap-[20px]">
            <li>
              <Link to="/" className="font-bold">
                홈
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TestHeader;
