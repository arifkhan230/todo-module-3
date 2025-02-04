import { Button } from "../ui/button";
import { editIcon, trashIcon } from "../../utils/svgIcons";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import { useEffect } from "react";
import toast from "react-hot-toast";

type TTodoCardProps = {
  _id?: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  _id = "",
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  // for local state
  // const dispatch = useAppDispatch();

  const [updateTodo] = useUpdateTodoMutation();

  const toggleState = () => {
    const options = {
      id: _id,
      data: {
        title,
        description,
        isCompleted: !isCompleted,
        priority,
      },
    };

    updateTodo(options);

    // dispatch(toggleComplete(_id));
  };

  // for remove todo from server
  const [deleteTodo, { isSuccess, data }] = useDeleteTodoMutation();

  useEffect(() => {
    if (isSuccess && data?.deletedCount) {
      toast.success("Todo Deleted Successfully");
    }
  }, [isSuccess, data]);

  return (
    <div className="flex justify-between items-center gap-6 bg-white p-4 border rounded">
      <input
        onChange={toggleState}
        className="mr-4"
        type="checkbox"
        name="completed"
        id="completed"
        defaultChecked={isCompleted}
      />
      {/* title */}
      <p className="font-semibold flex-1">{title}</p>
      {/* priority */}
      <div className="flex-1 flex items-center gap-2 jc">
        <div
          className={`size-3 rounded-full ${
            priority === "high" && "bg-red-500"
          } ${priority === "medium" && "bg-yellow-500"} ${
            priority === "low" && "bg-green-500"
          }`}
        ></div>
        <p>{priority}</p>
      </div>
      {/* isCompleted */}
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      {/* description */}
      <p className="flex-[2] ">{description}</p>
      {/* edit and delete button */}
      <div className="space-x-5">
        <Button className="bg-[#5C53FE] ">{editIcon}</Button>
        <Button onClick={() => deleteTodo(_id)} className="bg-[#DC02C3]">
          {trashIcon}
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
