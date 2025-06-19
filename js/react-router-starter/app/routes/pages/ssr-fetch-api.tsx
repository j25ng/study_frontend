import { type LoaderFunctionArgs, useLoaderData } from 'react-router';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Get
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // 백엔드에서 준 api 경로를 fetch 한다
    const result: Post[] = await response.json();

    return { result };
  } catch (error) {
    throw new Error(error);
  }
};

// SPA 방식
const FetchApi = () => {
  const { result } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>전체 게시글 목록</h1>
      {result && (
        <div className="flex flex-col gap-[10px]">
          {result.map((post, index) => (
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
