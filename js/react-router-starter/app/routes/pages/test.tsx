import { useEffect, useState } from 'react';

const UserFetcher = () => {
  const [query, setQuery] = useState('1');
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('데이터 가져옴', data);
        setUser(data);
      });
  }, [query]);

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <p>유저 이름: {user?.name}</p>
    </div>
  );
};

export default UserFetcher;
