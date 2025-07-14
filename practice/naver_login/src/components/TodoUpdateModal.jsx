import { useRef, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { toast } from "react-toastify";

const TodoUpdateModal = ({ todo, fetchTodos, onClose }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const selectRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (todo) {
      titleRef.current.value = todo.title || "";
      contentRef.current.value = todo.content || "";
      selectRef.current.value = todo.category || "ETC";
    }
  }, [todo]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const updatedTodo = {
      title: titleRef.current.value.trim(),
      content: contentRef.current.value.trim(),
      category: selectRef.current.value,
    };

    const { error } = await supabase
      .from("todo")
      .update(updatedTodo)
      .eq("id", todo.id);

    if (error) {
      toast.error("TODO Update Failed");
      console.error(error);
    } else {
      toast.success(`No.${todo.id} Todo Update Success`);
      await fetchTodos();
      onClose();
    }

    setIsSubmitting(false);
  };

  if (!todo) return null;

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-gray-700/50 flex justify-center items-center"
      onClick={onClose}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleUpdate}
        className="w-4/5 max-w-md bg-white rounded-lg p-4 flex flex-col gap-2 items-center shadow-lg"
      >
        <p className="text-lg font-bold">TODO 수정</p>
        <input
          ref={titleRef}
          className="w-full p-2 border rounded"
          placeholder="TITLE..."
        />
        <textarea
          ref={contentRef}
          className="w-full resize-none p-2 border rounded h-40"
          placeholder="CONTENT..."
        />
        <select ref={selectRef} className="w-full border p-2 rounded">
          <option>Education</option>
          <option>Life</option>
          <option>ETC</option>
        </select>
        <div className="flex items-center gap-2 w-full">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-indigo-500 flex-1 p-2 rounded text-white hover:bg-indigo-600 disabled:opacity-50"
          >
            {isSubmitting ? "Updating..." : "Update"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-rose-500 flex-1 p-2 rounded text-white hover:bg-rose-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoUpdateModal;
