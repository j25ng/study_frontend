import { Link } from 'react-router';

const home = () => {
  return (
    <div className="flex h-[500px] items-center justify-center">
      <Link to="/count" className="hover:bg-red-100">
        Move to count router
      </Link>
    </div>
  );
};

export default home;
