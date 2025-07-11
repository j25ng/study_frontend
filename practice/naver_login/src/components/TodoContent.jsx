import React from "react";
import { todoStore } from "../const/store";
// import { supabase } from "../supabaseClient";

const TodoContent = () => {
  const { todo } = todoStore();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const payload = {
  //       id: user.id,
  //       title: titleRef.current.value,
  //       content: contentRef.current.value,
  //     };
  //     const { error } = await supabase.from("todo").insert({
  //       user_id: payload.id,
  //       title: payload.title,
  //       content: payload.content,
  //     });

  //     if (error) {
  //       alert("투두 추가 실패", error);
  //     }
  //     await fetchTodos();
  //   };

  return (
    <div className="p-4">
      {todo.map((item) => (
        <div key={item.id}>
          <p className={item.marked ? "text-green-800" : "text-red-800"}>
            {item.title}
          </p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoContent;
