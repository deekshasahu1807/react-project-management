import Button from "./Button";
import Tasks from "./Tasks";

export default function ViewProject({ selectedProject, onDeleteProject, onAddTask, onDeleteTask, tasks }) {
    const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });

    return (
        // ** Code By Diksha ** //
        // <div className="flex flex-col gap-4 h-full flex-1 p-8 mt-28 ml-10 mr-60">
        //     <div className="flex flex-col p-8 gap-4">
        //         <div className="flex flex-row items-center justify-between">
        //             <h1 className="text-4xl font-bold">{selectedProject?.title}</h1>
        //             <Button text="Delete" buttonColor="" handleClick={handleDeleteProject}/> 
        //         </div>
                
        //         <p className="text-gray-500 text-lg">
        //             {selectedProject?.dueDate && new Date(selectedProject.dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        //         </p>
        //         <p className="text-lg mt-2 whitespace-pre-wrap">{selectedProject?.description}</p>
        //         <hr className="border-t-2 border-gray-300 my-4" />
        //     </div>

        //     <Tasks tasks={selectedProject?.tasks || []} handleAddTask={handleAddTask} handleClearTask={handleClearTask} />
        // </div>

        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold mb-2 text-stone-600">{selectedProject?.title}</h1>
                    <button className="text-stone-600 hover:text-stone-950" onClick={onDeleteProject}>Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{selectedProject?.dueDate && formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{selectedProject?.description}</p>
            </header>

            <Tasks tasks={selectedProject?.tasks || []} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
        </div>
    );
}