import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FormEvent, useEffect, useState } from "react";
import { useAddTodoMutation } from "@/redux/api/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import toast from "react-hot-toast";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  // for local state management
  // const dispatch = useAppDispatch();

  // for server
  const [addTodo, { data, isSuccess }] = useAddTodoMutation();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const taskDetails = {
      title: task,
      isCompleted: false,
      priority,
      description,
    };

    // for local state management
    // dispatch(addTodo(taskDetails));

    // for server
    addTodo(taskDetails);
  };

  // showing toast after adding a todo
  useEffect(() => {
    if (isSuccess && data?.insertedId) {
      toast.success("Todo Added Successfully");
    }
  }, [isSuccess, data]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Select onValueChange={(value) => setPriority(value)}>
                <Label className="text-right">Priority</Label>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Add Todo</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
