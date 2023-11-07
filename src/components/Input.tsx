import React, { useId } from "react";

interface InputProps {
    label: string;
    type?: string;
    className?: string;
}

const Input = (
    { label, type = "text", className = "", ...props }: InputProps,
    ref: React.LegacyRef<HTMLInputElement> | undefined
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
