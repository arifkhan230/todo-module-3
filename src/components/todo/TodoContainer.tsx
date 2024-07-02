import React from "react";
import { useGetTodosQuery } from "../../redux/api/api";
import { TTodo } from "../../redux/features/todoSlice";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer: React.FC = () => {
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  // from server state
  const { isLoading, data: todos } = useGetTodosQuery(undefined, {
    pollingInterval: 30000,
  });

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 rounded-lg space-y-3  ">
          {todos?.todos?.length ? (
            todos?.todos?.map((todo: TTodo) => (
              <TodoCard key={todo?._id} {...todo}></TodoCard>
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
