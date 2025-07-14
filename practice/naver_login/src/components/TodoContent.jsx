import { todoStore, userStore } from "../const/store";
import dayjs from "dayjs";
import { supabase } from "../supabaseClient";
import { toast } from "react-toastify";
import { useState } from "react";
import TodoUpdateModal from "./TodoUpdateModal";

const TodoContent = () => {
  const { user } = userStore();
  const { todo, initTodo } = todoStore();
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredTodo =
    categoryFilter === "All"
      ? todo
      : todo.filter((item) => item.category === categoryFilter);

  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from("todo")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("TODO 불러오기 실패", error);
    } else {
      initTodo(data);
    }
  };

  const handleMark = async (id, mark) => {
    const { error } = await supabase
      .from("todo")
      .update({ marked: !mark })
      .eq("id", id)
      .eq("user_id", user.id);

    if (error) {
      toast.error("Mark update failed", error);
    }

    toast.success(`No.${id} Todo Update Success`, {
      toastId: `${id} edit-todo`,
    });

    await fetchTodos();
  };

  const todoDelete = async (id) => {
    const { error } = await supabase.from("todo").delete().eq("id", id);

    if (error) {
      toast.error("Mark delete failed", error);
    }

    toast.success(`No.${id} Todo delete Success`, {
      toastId: `${id} edit-todo`,
    });

    await fetchTodos();
  };

  return (
    <div>
      <div className="flex gap-2 p-2 justify-center">
        {["All", "Education", "Life", "ETC"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-3 py-1 rounded text-sm font-semibold border ${
              categoryFilter === cat ? "bg-indigo-400 text-white" : "bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3">
        {filteredTodo.map((item) => (
          <div
            className={`cursor-pointer border-y-3 rounded ${
              item.marked ? "border-emerald-500" : "border-pink-500"
            } m-1`}
            key={item.id}
            onClick={() => setSelectedTodo(item)}
          >
            <div className="gap-1">
              <div
                className={`flex justify-between items-center ${
                  item.marked ? "bg-emerald-100" : "bg-pink-100"
                } p-2`}
              >
                <p className="font-bold">{item.title}</p>
                <div className="flex gap-1">
                  <p className="bg-stone-300 rounded text-xs font-bold p-1">
                    {item.category}
                  </p>
                  <p className="bg-stone-300 rounded text-xs font-bold p-1">
                    {dayjs(item.created_at).format(" YY.MM.DD")}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMark(item.id, item.marked);
                    }}
                    className={`cursor-pointer rounded text-xs px-1 ${
                      item.marked ? "bg-green-300" : "bg-red-300"
                    }`}
                  >
                    ✔️
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      todoDelete(item.id);
                    }}
                    className="cursor-pointer bg-red-400 rounded text-xs px-1"
                  >
                    ✖️
                  </button>
                </div>
              </div>
              <p className="p-1">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedTodo && (
        <TodoUpdateModal
          todo={selectedTodo}
          fetchTodos={fetchTodos}
          onClose={() => setSelectedTodo(null)}
        />
      )}
    </div>
  );
};

export default TodoContent;
