import { useState } from 'react';

// 기존 SPA 방식
const PostApi = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();

    setData(data);
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-bold">SPA 방식으로 fetch post 하는 방법</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          className="w-[200px] border p-2"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="내용"
          className="w-[200px] border p-2"
        />
        <button type="submit" className="rounded-3 bg-blue-500 p-4">
          보내기
        </button>
      </form>
      {data && (
        <div className="mt-5 flex flex-col gap-[5px] rounded border p-4 shadow">
          <h2 className="text-[20px] font-bold">타이틀 : {data.title}</h2>
          <p>내용 :{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostApi;
