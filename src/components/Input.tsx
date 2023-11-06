import React, { useId } from "react";

const Input = (
    { label, type = "text", className = "", ...props }: any,
    ref: any
): any => {
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
            <input
                type={type}
                className={`rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline ${className}`}
                {...props}
                id={id}
                ref={ref}
            />
        </div>
    );
};

export default React.forwardRef(Input);
