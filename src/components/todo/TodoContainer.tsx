import { TTodo } from "../../redux/features/todoSlice";
import { useAppSelector } from "../../redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 rounded-lg space-y-3  ">
          {todos?.length ? (
            todos?.map((todo: TTodo) => (
              <TodoCard key={todo?.id} {...todo}></TodoCard>
            ))
          ) : (
            <div className="bg-white text-2xl font-bold flex justify-center items-center rounded-md p-5">
              <p>There is no task Pending</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
