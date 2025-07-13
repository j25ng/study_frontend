import { useNavigate } from "react-router-dom";
import { todoStore, userStore } from "../const/store";
import { supabase } from "../supabaseClient";
import TodoContent from "./TodoContent";
import TodoInsert from "./TodoInsert";

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
    <div className="flex flex-col min-h-screen relative">
      <header className="flex flex-col items-center m-1">
        <div className="flex justify-between bg-gray-400 w-full text-white px-2 rounded-t">
          <span className="flex justify-center items-center font-bold">
            {user.email}님 환영합니다!
          </span>
          <button
            onClick={handleLogout}
            className="hover:bg-gray-500 cursor-pointer text-white font-bold bg-gray-600 rounded m-1 p-1"
          >
            로그아웃
          </button>
        </div>
        <div className="flex justify-center items-center border-4 border-t-0 border-gray-400 w-full text-5xl font-bold p-2 rounded-b">
          TodoList
        </div>
      </header>
      <main className="flex-grow pb-20">
        <TodoContent />
        <TodoInsert />
      </main>
    </div>
  );
};

export default Todo;
