import NoProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProject({ handleAddProject }) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 h-full flex-1">
            <img src={NoProjectImg} alt="No Project" className="w-20 h-20" />
            <h1 className="text-2xl font-bold text-slate-600">No Project Selected</h1>
            <p className="text-slate-400 text-xl">Select a project or get started with a new one.</p>
            <Button text="Create new project" buttonColor="slate-950" textColor="text-gray-500" handleClick={handleAddProject} className="mt-6" />
        </div>
    );
}