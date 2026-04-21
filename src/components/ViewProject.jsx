import Button from "./Button";
import Tasks from "./Tasks";

export default function ViewProject({ selectedProject, handleDeleteProject, handleAddTask, handleClearTask }) {
    return (
        <div className="flex flex-col gap-4 h-full flex-1 p-8 mt-28 ml-10 mr-60">
            <div className="flex flex-col p-8 gap-4">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-4xl font-bold">{selectedProject?.title}</h1>
                    <Button text="Delete" buttonColor="" handleClick={handleDeleteProject}/> 
                </div>
                
                <p className="text-gray-500 text-lg">
                    {selectedProject?.dueDate && new Date(selectedProject.dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
                <p className="text-lg mt-2 whitespace-pre-wrap">{selectedProject?.description}</p>
                <hr className="border-t-2 border-gray-300 my-4" />
            </div>

            <Tasks tasks={selectedProject?.tasks || []} handleAddTask={handleAddTask} handleClearTask={handleClearTask} />

        </div>
    );
}