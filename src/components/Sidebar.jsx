import Button from "./Button";

export default function Sidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) { 
    
    return (
        // ** Code By Diksha ** //
        // <div className="bg-black text-slate-300 w-1/5 mt-14 rounded-tr-xl p-8 flex flex-col gap-8">
        //     <h1 className="text-2xl font-semibold uppercase mt-12 ml-4 text-gray-300">Your Projects</h1>
        //     <Button text="Add Project" icon={Plus} buttonColor="gray-800" textColor="text-gray-400" handleClick={handleAddProject} className="self-start ml-4" />

        //     <ul className="flex flex-col gap-4 overflow-y-auto">
        //         {projects && projects.map((project, index) => (
        //             <li key={index} className="text-slate-300 ml-2 hover:bg-gray-800 hover:rounded-lg hover:px-4 hover:py-2 cursor-pointer" onClick={() => handleSelectProject(project)}>
        //                 <h2 className="text-lg text-gray-500">{project.title}</h2>
        //             </li>
        //         ))}
        //     </ul>
        // </div>

        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul className="mt-8">
                {projects && projects.map((project) => {
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
                    if (project.id === selectedProjectId) {
                        cssClasses += " bg-stone-800 text-stone-200";
                    } else {
                        cssClasses += " text-stone-400";
                    }
                    return (
                        <li key={project.id}>
                            <button onClick={() => onSelectProject(project.id)} className={cssClasses}>
                                {project.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    );
}