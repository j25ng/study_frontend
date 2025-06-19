//https://jsonplaceholder.typicode.com/comments
// 위 api를 이용하여 데이터를 불러와서 name, email, body를 화면에 띄어주세요

import { useEffect, useState } from 'react';

const FetchApiTest = () => {
  const [data, setData] = useState<any>([]); // 데이터
  const [loading, setLoading] = useState<boolean>(true); // 로딩
  const [error, setError] = useState<string | null>(null); // 에

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        setError(error.message || '오류 발생');
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>전체 댓글 목록</h1>
      {loading && <div>불러오는중 ...</div>}
      {error && <div className="text-red-900">{error}</div>}
      {!loading && !error && (
        <div className="flex flex-col gap-[10px]">
          {data.map((post, index) => (
            <div
              key={index}
              className="flex flex-col gap-[5px] rounded border p-4 shadow"
            >
              <h2 className="text-[20px] font-bold">이름 : {post.name}</h2>
              <p>이메일 : {post.email}</p>
              <p>내용 : {post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchApiTest;
