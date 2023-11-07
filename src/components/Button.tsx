const Button = ({
    children,
    type = "button",
    bgColor = "bg-yellow-400",
    textColor = "text-black",
    onHover = "",
    className = "",
    ...props
}: any) => {
    return (
        <button
            className={`  ${onHover} transition px-4 py-2 rounded-md ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
