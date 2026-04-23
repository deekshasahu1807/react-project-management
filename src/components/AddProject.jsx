import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function AddProject({ onAddProject, onCancelProject }) {
    const modalRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dueDateRef = useRef(null);

    function handleSave() {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        // ...validation logic here (e.g., check if title is empty, etc.)
        if(title.trim() === "" || description.trim() === "" || dueDate.trim() === "") {
            // Show modal
            modalRef.current.open();
            return;
        }

        onAddProject({ title, description, dueDate });
    }

    return (
        // ** Code By Diksha ** //
        // <div className="flex flex-col gap-8 h-full flex-1 p-8 mt-28 ml-10 mr-20">
            
        //     <form className="flex flex-col gap-8 w-full">  
        //         <div className="flex flex-row items-end justify-end gap-4 w-10/12">
        //             <Button text="Cancel" buttonColor="" handleClick={handleCancelProject} />
        //             <Button text="Save" type="button" buttonColor="gray-800" textColor="text-white" handleClick={handleSave} />
        //         </div>
        //         <div className="form-group gap-1 flex flex-col">
        //             <label className="text-gray-600 uppercase font-bold">Title</label>
        //             <input
        //                 ref={titleRef}
        //                 defaultValue=""
        //                 type="text"
        //                 className="bg-gray-200 text-black rounded-md border-b-2 border-gray-300 focus:border-0 focus:border-b-2 focus:border-black focus:outline-none w-10/12 px-2 py-2"
        //             />
        //         </div>

        //         <div className="form-group gap-1 flex flex-col">
        //             <label className="text-gray-600 uppercase font-bold">Description</label>
        //             <textarea
        //                 ref={descriptionRef}
        //                 defaultValue=""
        //                 className="bg-gray-200 text-black rounded-md border-b-2 border-gray-300 focus:border-0 focus:border-b-2 focus:border-black focus:outline-none w-10/12 px-2 py-3"
        //             />
        //         </div>

        //         <div className="form-group gap-1 flex flex-col">
        //             <label className="text-gray-600 uppercase font-bold">Due Date</label>
        //             <input
        //                 ref={dueDateRef}
        //                 defaultValue=""
        //                 type="date"
        //                 format="dd.mm.yyyy"
        //                 className="bg-gray-200 text-black rounded-md border-b-2 border-gray-300 focus:border-0 focus:border-b-2 focus:border-black focus:outline-none w-10/12 px-2 py-2"
        //             />
        //         </div>
        //     </form>
        // </div>

        <>
            <Modal ref={modalRef} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops ... looks like you forgot a value.</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16 ">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li className="">        
                        <button className="text-stone-800 hover:text-stone-950" onClick={onCancelProject}>Cancel</button>
                    </li>
                    <li className="">
                        <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                    </li>
                </menu>
                <div className="">
                    <Input label="Title" ref={titleRef} />
                    <Input label="Description" textarea ref={descriptionRef} />
                    <Input label="Due Date" type="date" ref={dueDateRef} />
                </div>
            </div>
        </>
    );
}