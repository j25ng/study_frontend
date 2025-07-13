import { useRef } from "react";
import { supabase } from "../supabaseClient";
import { todoStore, userStore } from "../const/store";

const TodoInsert = () => {
  const { user } = userStore();
  const { initTodo } = todoStore();
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from("todo")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("TODO 불러오기 실패", error);
    }

    initTodo(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: user.id,
      title: titleRef.current.value,
      content: contentRef.current.value,
    };

    const { error } = await supabase.from("todo").insert({
      user_id: payload.id,
      title: payload.title,
      content: payload.content,
    });

    if (error) {
      alert("TODO 추가 실패", error);
    }

    titleRef.current.value = null;
    contentRef.current.value = null;

    await fetchTodos();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex gap-1 p-2">
        <input
          required
          className="border-2 border-gray-400 focus:outline-gray-500 rounded flex-1 p-1"
          type="text"
          placeholder="제목"
          ref={titleRef}
        />
        <input
          required
          className="border-2 border-gray-400 focus:outline-gray-500 rounded flex-1 p-1"
          type="text"
          placeholder="내용"
          ref={contentRef}
        />
        <button
          type="submit"
          className="hover:bg-gray-400 flex justify-center rounded bg-gray-300 px-4 text-white font-bold text-2xl"
        >
          +
        </button>
      </div>
    </form>
  );
};

export default TodoInsert;
