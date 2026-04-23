import NoProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProject({ onStartAddProject }) {
    return (
        // ** Code By Diksha ** //
        // <div className="flex flex-col items-center justify-center gap-4 h-full flex-1">
        //     <img src={NoProjectImg} alt="No Project" className="w-20 h-20" />
        //     <h1 className="text-2xl font-bold text-slate-600">No Project Selected</h1>
        //     <p className="text-slate-400 text-xl">Select a project or get started with a new one.</p>
        //     <Button text="Create new project" buttonColor="slate-950" textColor="text-gray-500" handleClick={handleAddProject} className="mt-6" />
        // </div>

        <div className="mt-24 text-center w-2/3 ">
            <img src={NoProjectImg} alt="An empty task list" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one.</p>
            <p className="mt-8">
                <Button onClick={onStartAddProject}>
                    Create new project
                </Button>
            </p>
        </div>
    );
}