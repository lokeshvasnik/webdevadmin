const Button = ({
  children,
  type = "button",
  bgColor = "",
  textColor = "text-black",
  onHover = "",
  className = "",
  ...props
}: any) => {
  return (
    <button
      className={` hover:${onHover}  rounded-md px-4 py-2 transition ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
