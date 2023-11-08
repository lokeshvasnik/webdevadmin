import { Link } from "react-router-dom";

interface DisplayCardProps {
  title: string;
  amount: number | undefined;
  className?: string;
  link: string;
}
const DisplayCard = ({
  title,
  amount = 0,
  className,
  link,
}: DisplayCardProps) => {
  return (
    <Link to={link}>
      <div className={`my-2 w-60 rounded-md border p-5 ${className}`}>
        <p>{title}</p>
        <p className="mt-2 text-3xl font-bold tracking-widest">{amount}</p>
      </div>
    </Link>
  );
};

export default DisplayCard;
