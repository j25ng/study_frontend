import { useEffect, useState } from 'react';

// SPA 방식
const FetchApi = () => {
  const [data, setData] = useState<any>([]); // 데이터
  const [loading, setLoading] = useState<boolean>(true); // 로딩
  const [error, setError] = useState<string | null>(null); // 에러

  useEffect(() => {
    // 최초 랜더링 시 한번만 실행
    const fetchData = async () => {
      setLoading(true); // 최초 실행 시 로딩 true
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // 백엔드에서 준 api 경로를 fetch 한다
        const result = await response.json(); // response를 data화
        setData(result); // 백엔드에서 가져온 데이터를 data에 저장
        setError(null);
      } catch (error) {
        setError(error.message || '오류가 발생했습니다.'); // 오류 메세지 저장
        setData([]);
      } finally {
        setLoading(false); // 전부 끝났을 시 loading을 false
      }
    };

    fetchData(); // 함수 실행
  }, []);

  return (
    <div>
      <h1>전체 게시글 목록</h1>
      {loading && <div>불러오는중 ...</div>}
      {error && <div className="text-red-900">{error}</div>}

      {!loading && !error && (
        <div className="flex flex-col gap-[10px]">
          {data.map((post, index) => (
            <div
              key={index}
              className="flex flex-col gap-[5px] rounded border p-4 shadow"
            >
              <h2 className="text-[20px] font-bold">타이틀 : {post.title}</h2>
              <p>내용 :{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchApi;
