import { type ActionFunctionArgs, Form, useActionData } from 'react-router';

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  console.log('formData', formData);
  const title = formData.get('title');
  console.log('title', title);
  const body = formData.get('body');
  console.log('body', body);
  const userId = 1;

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const data = await response.json();
  console.log('data', data);

  return {
    message: '성공함',
    data,
  };
};

// SSR 방식
const PostApi = () => {
  const actionData = useActionData<typeof action>();

  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-bold">SPA 방식으로 fetch post 하는 방법</h1>
      <Form method="post" className="flex flex-col gap-[10px]">
        <input
          type="text"
          name="title"
          placeholder="제목"
          className="w-[200px] border p-2"
        />
        <textarea placeholder="내용" name="body" className="w-[200px] border p-2" />
        <button type="submit" className="rounded-3 bg-blue-500 p-4">
          보내기
        </button>
      </Form>
      {actionData && actionData.data && (
        <div className="mt-5 flex flex-col gap-[5px] rounded border p-4 shadow">
          <h2 className="text-[20px] font-bold">타이틀 : {actionData.data.title}</h2>
          <p>내용 :{actionData.data.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostApi;
