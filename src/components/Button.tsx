interface ButtonProps {
  type?: string;
  bgColor?: string;
  textColor?: string;
  onHover?: string;
  className?: string;
  children?: string;
  onClick?: () => void;
}
const Button = ({
  children,
  type = "button",
  bgColor = "bg-yellow-400",
  textColor = "text-black",
  onHover = "",
  className = "",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` hover:${onHover} rounded-md px-4 py-2 transition ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
