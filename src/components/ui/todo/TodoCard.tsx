const TodoCard = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 ">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
