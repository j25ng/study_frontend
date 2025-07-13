import { todoStore } from "../const/store";
import dayjs from "dayjs";

const TodoContent = () => {
  const { todo } = todoStore();

  return (
    <div>
      {todo.map((item) => (
        <div
          className={`border-y-3 rounded ${
            item.marked ? "border-emerald-500" : "border-pink-500"
          } m-1`}
          key={item.id}
        >
          <div className="gap-1">
            <div
              className={`flex justify-between items-center ${
                item.marked ? "bg-emerald-100" : "bg-pink-100"
              } p-1`}
            >
              <p className="font-bold">{item.title}</p>
              <p className="bg-stone-300 rounded text-xs font-bold p-1">
                {dayjs(item.created_at).format("YYYY-MM-DD")}
              </p>
            </div>
            <p className="p-1">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoContent;
