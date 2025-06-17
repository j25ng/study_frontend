import { Link } from 'react-router';

const home = () => {
  return (
    <div className="flex h-[500px] flex-col items-center justify-center">
      home
      <Link to="/count" className="hover:bg-red-100">
        카운트 라우터로 이동
      </Link>
      <Link to="/test" className="hover:bg-red-100">
        테스트 라우터로 이동
      </Link>
      <Link to="/travel" className="hover:bg-red-100">
        여행 라우터로 이동
      </Link>
    </div>
  );
};

export default home;
