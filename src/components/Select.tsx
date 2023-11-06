import React, { useId } from "react";

const Select = (
    { options, label, className = "", ...props }: any,
    ref: any
) => {
    const id = useId();

    return (
        <div className="w-full">
            {label && (
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <select
                {...props}
                id={id}
                className={`text-gray-400 focus:outline-none appearance-none bg-white border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full mb-4 ${className}`}
                ref={ref}
            >
                {options?.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default React.forwardRef(Select);
