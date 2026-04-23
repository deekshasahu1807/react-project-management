import { useRef, useState } from "react";
import Button from "./Button";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
    // const taskRef = useRef();

    // function onAddTask() {
    //     const taskTitle = taskRef.current.value.trim();
    //     if (taskTitle) {
    //         handleAddTask({ title: taskTitle });
    //         taskRef.current.value = "";
    //     }
    // }

    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(e) {
        setEnteredTask(e.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === "") return; // Do not add empty tasks
        onAddTask(enteredTask);
        setEnteredTask("");
    }

    return (
        // ** Code By Diksha ** //
        // <div className="flex flex-col gap-4 h-full flex-1 ml-10 mr-60">
        //     <h2 className="text-4xl font-semibold">Tasks</h2>
        //     <div className="flex flex-row items-center gap-4 mt-2">
        //         <input type="text" className="w-2/4 p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" ref={taskRef} />
        //         <Button text="Add Task" buttonColor="" handleClick={onAddTask} />
        //     </div>

        //     {tasks.length === 0 ? (
        //         <p className="text-gray-500">This project does not have any tasks yet.</p>
        //     ) : (
        //         <div className="flex flex-col p-4 bg-gray-100 rounded-lg mt-3">
        //         {
        //             tasks && tasks.map((task, index) => (
        //                 <div key={index} className="flex flex-row items-center justify-between gap-4">
        //                     <h3 className="text-lg font-medium">{task.title}</h3>
        //                     <Button text="Clear" buttonColor="" handleClick={() => handleClearTask(task)} />
        //                 </div>
        //             ))
        //         }
        //         </div>
        //     )}
        // </div>

        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <div className="flex items-center gap-4">
                <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask} />
                <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
            </div>
                {tasks.length > 0 
                ? 
                    <ul className="p-4 mt-8 rounded-md bg-stone-100">
                        {tasks.map((task) => (
                            <li key={task.id} className="flex justify-between my-4">
                                <span className="">{task.text}</span>
                                <button className="text-stone-700 hover:text-red-500" 
                                    onClick={() => onDeleteTask(task.id)}>
                                    Clear
                                </button>
                            </li>
                        ))}
                    </ul>
                : 
                    <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
                }
        </section>
    );
}