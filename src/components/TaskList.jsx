import React from "react";
import { useSelector } from "react-redux";
import { deleteTask } from "../store/taskSlice";
import { useDispatch } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="flex mx-auto bg-[#7c7f7f6c] px-3 w-[310px] border-x-white border backdrop-blur-sm rounded-lg flex-col items-center mt-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between w-full my-4 max-w-[300px]"
        >
          <div className="capitalize font-semibold text-start">{task.text}</div>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};

export default TaskList;
