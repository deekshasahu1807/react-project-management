import { useRef } from "react";
import Button from "./Button";

export default function Tasks({ tasks, handleAddTask, handleClearTask }) {
    const taskRef = useRef();

    function onAddTask() {
        const taskTitle = taskRef.current.value.trim();
        if (taskTitle) {
            handleAddTask({ title: taskTitle });
            taskRef.current.value = "";
        }
    }
    return (
        <div className="flex flex-col gap-4 h-full flex-1 ml-10 mr-60">
            <h2 className="text-4xl font-semibold">Tasks</h2>
            <div className="flex flex-row items-center gap-4 mt-2">
                <input type="text" className="w-2/4 p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" ref={taskRef} />
                <Button text="Add Task" buttonColor="" handleClick={onAddTask} />
            </div>

            {tasks.length === 0 ? (
                <p className="text-gray-500">This project does not have any tasks yet.</p>
            ) : (
                <div className="flex flex-col p-4 bg-gray-100 rounded-lg mt-3">
                {
                    tasks && tasks.map((task, index) => (
                        <div key={index} className="flex flex-row items-center justify-between gap-4">
                            <h3 className="text-lg font-medium">{task.title}</h3>
                            <Button text="Clear" buttonColor="" handleClick={() => handleClearTask(task)} />
                        </div>
                    ))
                }
                </div>
            )}
        </div>
    );
}