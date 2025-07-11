import React, { useState } from "react";
import { useVerify } from "../hooks/useVerify";
import { supabase } from "../supabaseClient";
import { todoStore } from "../const/store";

const PrivateRoute = ({ children }) => {
  const [verify, setVerify] = useState(false);
  const { initTodo } = todoStore();

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

  useVerify({
    onSuccess: async () => {
      await fetchTodos();
      setVerify(true);
    },
    onFailure: () => setVerify(false),
  });

  if (!verify) return <div>Loading...</div>;

  return <div>{children}</div>;
};

export default PrivateRoute;
