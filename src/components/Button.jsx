import { Plus } from 'lucide-react';

export default function Button({ text, icon: Icon, buttonColor, handleClick, type, textColor }) {
    return (
        <button type={type} onClick={handleClick} className={`bg-${buttonColor} ${textColor} px-4 py-3 rounded-lg flex items-center gap-2 text-lg`}>
            {Icon && <Icon size={16} />}
            {text}
        </button>
    );
}
