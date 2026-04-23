import { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption, ...props }, ref) {
    const dialogRef = useRef(null);

    useImperativeHandle(ref, () => ({
        open: () => dialogRef.current.showModal(),
        close: () => dialogRef.current.close(),
    }));

    return createPortal(
        <dialog ref={dialogRef} {...props} className="backdrop:bg-stone-900/90 rounded-md p-4 shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default Modal;