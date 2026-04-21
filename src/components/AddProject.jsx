import { useRef } from "react";
import Button from "./Button";

export default function AddProject({ handleCancelProject, handleSaveProject }) {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dueDateRef = useRef(null);

    function handleSave() {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        if(title != "" && description !== "" && dueDate !== "") {
            console.log("Project Details:", { title, description, dueDate });
            handleSaveProject({ title, description, dueDate });
        } else {
            alert("Please fill in all fields before saving the project.");
        }
    }

    return (
        <div className="flex flex-col gap-8 h-full flex-1 p-8 mt-28 ml-10 mr-20">
            
            <form className="flex flex-col gap-8 w-full">  
                <div className="flex flex-row items-end justify-end gap-4 w-10/12">
                    <Button text="Cancel" buttonColor="" handleClick={handleCancelProject} />
                    <Button text="Save" type="button" buttonColor="gray-800" textColor="text-white" handleClick={handleSave} />
                </div>
                <div className="form-group gap-1 flex flex-col">
                    <label className="text-gray-600 uppercase font-bold">Title</label>
                    <input
                        ref={titleRef}
                        defaultValue=""
                        type="text"
                        className="bg-gray-200 text-black rounded-md border-b-2 border-gray-300 focus:border-0 focus:border-b-2 focus:border-black focus:outline-none w-10/12 px-2 py-2"
                    />
                </div>

                <div className="form-group gap-1 flex flex-col">
                    <label className="text-gray-600 uppercase font-bold">Description</label>
                    <textarea
                        ref={descriptionRef}
                        defaultValue=""
                        className="bg-gray-200 text-black rounded-md border-b-2 border-gray-300 focus:border-0 focus:border-b-2 focus:border-black focus:outline-none w-10/12 px-2 py-3"
                    />
                </div>

                <div className="form-group gap-1 flex flex-col">
                    <label className="text-gray-600 uppercase font-bold">Due Date</label>
                    <input
                        ref={dueDateRef}
                        defaultValue=""
                        type="date"
                        format="dd.mm.yyyy"
                        className="bg-gray-200 text-black rounded-md border-b-2 border-gray-300 focus:border-0 focus:border-b-2 focus:border-black focus:outline-none w-10/12 px-2 py-2"
                    />
                </div>
            </form>
        </div>
    );
}