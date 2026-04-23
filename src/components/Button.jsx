export default function Button({ children, ...props }) {
    return (
        // ** Code By Diksha ** //
        // <button type={type} onClick={handleClick} className={`bg-${buttonColor} ${textColor} px-4 py-3 rounded-lg flex items-center gap-2 text-lg`}>
        //     {text}
        // </button>

        <button {...props} className="bg-stone-700 text-stone-400 px-4 py-2 text-xs md:text-base rounded-md hover:bg-stone-600 hover:text-stone-100">
            {children}
        </button>
    );
}
