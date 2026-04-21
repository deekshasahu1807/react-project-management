import { Plus } from "lucide-react";
import Button from "./Button";

export default function Sidebar({ handleAddProject, projects, handleSelectProject, handleDeleteProject }) { 
    
    return (
        <div className="bg-black text-slate-300 w-1/5 mt-14 rounded-tr-xl p-8 flex flex-col gap-8">
            <h1 className="text-2xl font-semibold uppercase mt-12 ml-4 text-gray-300">Your Projects</h1>
            <Button text="Add Project" icon={Plus} buttonColor="gray-800" textColor="text-gray-400" handleClick={handleAddProject} className="self-start ml-4" />

            <ul className="flex flex-col gap-4 overflow-y-auto">
                {projects && projects.map((project, index) => (
                    <li key={index} className="text-slate-300 ml-2 hover:bg-gray-800 hover:rounded-lg hover:px-4 hover:py-2 cursor-pointer" onClick={() => handleSelectProject(project)}>
                        <h2 className="text-lg text-gray-500">{project.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}