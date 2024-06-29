import { Button } from "../ui/button";
import { editIcon, trashIcon } from "../../utils/svgIcons";

const TodoCard = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 border rounded">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5">
        <Button className="bg-[#5C53FE] ">{editIcon}</Button>
        <Button className="bg-[#DC02C3]">{trashIcon}</Button>
      </div>
    </div>
  );
};

export default TodoCard;
