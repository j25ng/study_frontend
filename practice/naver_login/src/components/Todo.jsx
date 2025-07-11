import { useNavigate } from "react-router-dom";
import { todoStore, userStore } from "../const/store";
import { supabase } from "../supabaseClient";
import TodoContent from "./TodoContent";

const Todo = () => {
  const { user, clearUser } = userStore();
  const { clearTodo } = todoStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    supabase.auth.signOut();
    clearUser();
    clearTodo();
    navigate("/");
  };

  return (
    <div className="flex flex-col">
      <header className="flex flex-col justify-center items-center border-4 border-blue-500 p-2">
        <div>TodoList</div>
        <span className="flex justify-center items-center m-4">
          {user.email}님 환영합니다.
        </span>
        <button
          onClick={handleLogout}
          className="cursor-pointer text-white bg-black"
        >
          로그아웃
        </button>
      </header>
      <main>
        <TodoContent />
      </main>
    </div>
  );
};

export default Todo;
