import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) dispatch(addTask({ id: Date.now(), text: task }));
    else setError(true);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative max-w-[500px] mx-auto">
        <input
          className="p-2 m-2 rounded-md text-slate-900 outline-none "
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            setError(false);
          }}
          placeholder="Add a task"
        />

        <button
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Task
        </button>
        {error && (
          <p className="text-red-500 absolute bottom-[-12px] sm:left-[23%] left-[13%]">
            Please enter a task
          </p>
        )}
      </div>
    </form>
  );
};

export default TaskInput;
