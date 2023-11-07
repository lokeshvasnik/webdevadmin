interface DisplayCardProps {
  title: string;
  amount: string;
  className?: string;
}
const DisplayCard = ({ title, amount, className }: DisplayCardProps) => {
  return (
    <div className={`my-2 w-60 rounded-md border p-5 ${className}`}>
      <p>{title}</p>
      <p className="mt-2 text-3xl font-bold tracking-widest">{amount}</p>
    </div>
  );
};

export default DisplayCard;
