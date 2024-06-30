import { Button } from "../ui/button";
import { editIcon, trashIcon } from "../../utils/svgIcons";
import { useAppDispatch } from "../../redux/hook";
import { removeTodo, toggleComplete } from "../../redux/features/todoSlice";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

const TodoCard = ({ id, title, description, isCompleted }: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 border rounded">
      <input
        onChange={toggleState}
        type="checkbox"
        name="completed"
        id="completed"
      />
      <p className="font-semibold">{title}</p>
      {/* <p>Time</p> */}
      <div>
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <p>{description}</p>
      <div className="space-x-5">
        <Button className="bg-[#5C53FE] ">{editIcon}</Button>
        <Button
          onClick={() => dispatch(removeTodo(id))}
          className="bg-[#DC02C3]"
        >
          {trashIcon}
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
