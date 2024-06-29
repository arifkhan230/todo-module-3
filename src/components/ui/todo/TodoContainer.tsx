import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-red-500 w-full h-full rounded-xl p-5 space-y-3">
        <div className="bg-white text-2xl font-bold flex justify-center items-center rounded-md p-5">
          <p>There is no task Pending</p>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
