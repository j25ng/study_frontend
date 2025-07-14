import { useRef, useState } from "react";
import { supabase } from "../supabaseClient";
import { todoStore, userStore } from "../const/store";

const TodoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = userStore();
  const { initTodo } = todoStore();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const selectRef = useRef(null);

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
      title: titleRef.current.value.trim(),
      content: contentRef.current.value.trim(),
      category: selectRef.current.value,
    };

    const { error } = await supabase.from("todo").insert({
      user_id: payload.id,
      title: payload.title,
      content: payload.content,
      category: payload.category,
    });

    if (error) {
      alert("TODO 추가 실패", error);
    }

    titleRef.current.value = null;
    contentRef.current.value = null;

    await fetchTodos();
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="cursor-pointer absolute right-8 bottom-8 rounded-full bg-indigo-300 w-10 h-10 font-bold hover:bg-indigo-400"
      >
        +
      </button>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-gray-700/50 flex justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => handleSubmit(e)}
            className="w-4/5 max-w-md bg-gray-100 rounded-lg p-4 flex flex-col gap-2 items-center border-2 border-gray-400"
          >
            <p className="text-lg font-bold">TODO ADD</p>
            <input
              ref={titleRef}
              className="w-full p-2 border rounded-sm"
              placeholder="TITLE..."
            />
            <textarea
              ref={contentRef}
              className="w-full resize-none p-2 border rounded-sm h-[180px]"
              placeholder="CONTENT..."
            />
            <select ref={selectRef} className="w-full border p-1 rounded-sm">
              <option>Education</option>
              <option>Life</option>
              <option>ETC</option>
            </select>
            <div className="flex items-center gap-2 w-full">
              <button
                type="submit"
                className="bg-indigo-400 flex-1 p-2 rounded-sm text-white"
              >
                SUBMIT
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-rose-400 flex-1 p-2 rounded-sm text-white"
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TodoModal;
