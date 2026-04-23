export default function Input({ textarea, label, ...props }) {
    const inputCss = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-stone-500 uppercase font-bold text-sm">{label}</label>
            {textarea ? (
                <textarea
                    {...props}
                    className={inputCss}
                />
            ) : (
                <input
                    {...props}
                    className={inputCss}
                />
            )}
        </p>
    );
}